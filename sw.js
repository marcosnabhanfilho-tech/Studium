const CACHE = "studium-v1";
const SHELL = ["./", "./index.html", "./styles.css", "./app.js", "./content.js", "./manifest.webmanifest"];
self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", e=>{
  const url = new URL(e.request.url);
  // Network only for Supabase, YouTube embeds
  if(url.hostname.includes("supabase.co") || url.hostname.includes("youtube.com") || url.hostname.includes("ytimg.com") || url.hostname.includes("googleapis.com")){
    return;
  }
  // Stale-while-revalidate for Wikimedia images + fonts
  if(url.hostname.includes("wikimedia.org") || url.hostname.includes("gstatic.com")){
    e.respondWith(caches.open(CACHE).then(c => c.match(e.request).then(hit => {
      const fetchP = fetch(e.request).then(r=>{ if(r.ok) c.put(e.request, r.clone()); return r; }).catch(()=>hit);
      return hit || fetchP;
    })));
    return;
  }
  // Cache-first for same-origin shell
  if(url.origin === location.origin){
    e.respondWith(caches.match(e.request).then(h => h || fetch(e.request).then(r=>{
      if(r.ok) caches.open(CACHE).then(c => c.put(e.request, r.clone()));
      return r;
    })));
  }
});
