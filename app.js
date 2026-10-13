"use strict";
/* ================================================================
   STUDIUM GENERALE — the app
   ================================================================ */

// ============== SUPABASE ==============
const SUPABASE_URL = "https://cnzalxdmanrbasebjkgd.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuemFseGRtYW5yYmFzZWJqa2dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE1MDE2OTEsImV4cCI6MjEwNzA3NzY5MX0.NQ5IMarp4SbRtECSSuet6KK5Y-GTcFO9QI7EaChCsjk";

const sb = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: { persistSession:true, autoRefreshToken:true, detectSessionInUrl:true }
}) : null;

// ============== HELPERS ==============
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = s => String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
// Like esc(), but allows a small whitelist of inline formatting tags (<em>, <strong>, <i>, <b>).
// Use this for strings that go into clickable UI items where the author may want light emphasis.
const escOpt = s => esc(s).replace(/&lt;(\/?)(em|strong|i|b)&gt;/gi, "<$1$2>");
// Pick a language-specific field if available, falling back to the base field.
function L(folio, key){
  if(state.lang === "pt" && folio[key+"_pt"]) return folio[key+"_pt"];
  return folio[key];
}
const pad = n => String(n).padStart(2,"0");
const todayKey = d => { d=d||new Date(); return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate()); };
const roman = n => { const m=[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]]; let o=""; for(const [v,s] of m){ while(n>=v){ o+=s; n-=v; } } return o||"·"; };
function shuffledIdx(n){ const a = Array.from({length:n},(_,i)=>i); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

// Update which page-dot is .on, based on the pager's horizontal scroll position.
function updatePagerDots(pager){
  if(!pager) return;
  const slide = pager.closest(".slide");
  if(!slide) return;
  const dotsRow = slide.querySelector(".page-dots");
  if(!dotsRow) return;
  const pageWidth = pager.offsetWidth || 1;
  const idx = Math.round(pager.scrollLeft / pageWidth);
  dotsRow.querySelectorAll("span").forEach((dot, i)=>{
    dot.classList.toggle("on", i === idx);
  });
}

// Jump the reel to a particular folio (used from the Thesaurus to open a kept folio).
function jumpToFolio(slug){
  const folio = POOL.find(f => f.slug === slug);
  if(!folio) return;
  const reel = $("#reel");
  if(!reel) return;
  closeAllViews();
  closeMenu();
  // Build the folio fresh and prepend it so it is the first slide in the reel.
  const html = slideHTML(folio);
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  const newSlide = tmp.firstChild;
  reel.insertBefore(newSlide, reel.firstChild);
  if(viewIO) viewIO.observe(newSlide);
  const pager = newSlide.querySelector(".pager");
  if(pager && pager.querySelectorAll(".page").length > 1){
    pager.addEventListener("scroll", ()=>updatePagerDots(pager), {passive:true});
  }
  // Jump to top so the user lands on the folio they tapped
  reel.scrollTop = 0;
}

// Split a body HTML string into pages, where each page is a group of
// top-level block elements (<p>, <blockquote>, <ul>, <ol>, <h1>-<h6>)
// that together are at most `maxWords` long. Instagram-stories style:
// swipe horizontally through the pages of one folio, swipe up for next folio.
function paginateBody(bodyHTML, firstMax, restMax){
  if(!bodyHTML || typeof bodyHTML !== "string") return [bodyHTML || ""];
  const blocks = bodyHTML.match(/<(p|blockquote|ul|ol|h[1-6])[\s\S]*?<\/\1>/gi);
  if(!blocks || blocks.length === 0) return [bodyHTML];
  const pages = [];
  let current = "", currentWords = 0, isFirst = true;
  for(const b of blocks){
    const text = b.replace(/<[^>]+>/g, " ").replace(/\s+/g," ").trim();
    const words = text ? text.split(" ").length : 0;
    const limit = isFirst ? firstMax : restMax;
    if(currentWords > 0 && currentWords + words > limit){
      pages.push(current);
      current = b;
      currentWords = words;
      isFirst = false;
    } else {
      current += b;
      currentWords += words;
    }
  }
  if(current) pages.push(current);
  return pages;
}

// ============== STATE ==============
let state = {
  user:null, filter:"ALL", lang:"en",
  seen:{}, saved:{}, votes:{}, dayCount:0,
  sound:true, dirty:{seen:[], saved:[], unsaved:[], votes:[]}
};

// ============== I18N ==============
function t(k, fallback){
  const dict = (typeof I18N !== "undefined" && I18N[state.lang]) || (typeof I18N !== "undefined" && I18N.en) || {};
  return dict[k] || fallback || k;
}
function applyI18n(root){
  const dict = (typeof I18N !== "undefined" && I18N[state.lang]) || null;
  if(!dict) return;
  (root || document).querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(dict[key]) el.textContent = dict[key];
  });
  // About body prose
  const ab = document.getElementById("about-body");
  if(ab){
    if(state.lang === "pt"){
      ab.innerHTML = `<p><strong>Studium Generale</strong> é o nome medieval de uma universidade — um studium aberto a estudiosos de todo lugar. Este aqui é uma lectio em rolagem: deslize pelos fólios tirados de Aquino, Chesterton, Newman, Scruton, Mises, Hayek, Buffett, Munger, Vermeer, Caravaggio, Mozart, Doyle, Burke — e dos seus próprios ensaios do Arsenal.</p>
      <p>Um fólio que você vê fica permanentemente guardado na sua Ala. Toque duas vezes para colocá-lo no Thesaurus. Dez fólios por dia cumprem a Regra. Não há rolagem infinita — quando a Regra do dia é cumprida, o trabalho terminou.</p>
      <p class="motto">Nulla dies sine linea.<br>Sapientis est ordinare.</p>`;
    } else {
      ab.innerHTML = `<p><strong>Studium Generale</strong> is the medieval name for a university — a studium open to scholars from everywhere. This one is a reel: swipe through folios drawn from Aquinas, Chesterton, Newman, Scruton, Mises, Hayek, Buffett, Munger, Vermeer, Caravaggio, Mozart, Doyle, Burke — and your own Arsenal essays.</p>
      <p>A folio you view is permanently added to its Wing. Double-tap to keep one in your Thesaurus. Finish ten folios in a day to keep the Rule. There is no infinite scroll — once the Rule is kept, the day's work is done.</p>
      <p class="motto">Nulla dies sine linea.<br>Sapientis est ordinare.</p>`;
    }
  }
  // HTML lang attribute
  document.documentElement.setAttribute("lang", state.lang);
  // Refresh dynamic UI bits that aren't data-i18n-tagged
  if(window._refreshDrawerSnd) window._refreshDrawerSnd();
}

const LOCAL_KEY = "studium_local_v1";
function loadLocal(){
  try{ const v = localStorage.getItem(LOCAL_KEY); if(v){ Object.assign(state, JSON.parse(v)); } }catch(e){}
  // Lang stored separately so it survives seen/saved resets
  try{ const l = localStorage.getItem("studium_lang"); if(l === "en" || l === "pt") state.lang = l; }catch(e){}
}
function saveLocal(){
  try{ localStorage.setItem(LOCAL_KEY, JSON.stringify({seen:state.seen, saved:state.saved, votes:state.votes, sound:state.sound})); }catch(e){}
}
function saveLang(){
  try{ localStorage.setItem("studium_lang", state.lang); }catch(e){}
}

// ============== TOAST ==============
let toastT = null;
function toast(msg){
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(()=>t.classList.remove("show"), 2600);
}

// ============== SOUND (Web Audio) ==============
let actx = null;
function audio(){
  if(!state.sound) return null;
  try{
    if(!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
    if(actx.state === "suspended") actx.resume();
    return actx;
  }catch(e){ return null; }
}
function tone(freq, delay, dur, vol, type){
  const ctx = audio(); if(!ctx) return;
  try{
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || "sine"; o.frequency.value = freq;
    o.connect(g); g.connect(ctx.destination);
    const t = ctx.currentTime + (delay||0);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t+0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t+dur);
    o.start(t); o.stop(t+dur+0.05);
  }catch(e){}
}
// Sound: subtle only. Per-swipe tick removed entirely. Keep bell softened. Milestone is ONE chime, not three.
const sndTick = () => {};  // was annoying — now silent
const sndSeal = () => { tone(880, 0, 0.6, 0.08, "sine"); };  // single soft chime on Keep
const sndBell = () => { tone(659, 0, 1.6, 0.09, "sine"); };  // single warm bell at milestone
const sndWing = () => { tone(523, 0, 0.4, 0.09); tone(659, 0.25, 0.6, 0.08); tone(784, 0.5, 1.2, 0.07); };  // chord, only on wing complete

// ============== HAPTIC ==============
const haptic = n => { if(navigator.vibrate) try{ navigator.vibrate(n); }catch(e){} };

// ============== POOL + ORDER ==============
const POOL = FOLIOS.slice();
let order = [], ptr = 0, seq = 0;

// Group folios so that any multi-step series (e.g. a painting walkthrough)
// stays contiguous. shuffleFair swaps GROUPS, not individuals, then flattens.
function groupBySeries(folios){
  const seen = new Set();
  const groups = [];
  folios.forEach(f=>{
    if(f.series){
      if(seen.has(f.series)) return;
      seen.add(f.series);
      const members = folios.filter(g=>g.series===f.series).sort((a,b)=>(a.step||0)-(b.step||0));
      groups.push(members);
    } else {
      groups.push([f]);
    }
  });
  return groups;
}
function shuffleFair(folios){
  // Group → shuffle groups → then nudge same-faculty adjacencies (except within a series)
  const groups = groupBySeries(folios);
  for(let i=groups.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [groups[i],groups[j]]=[groups[j],groups[i]]; }
  // Nudge adjacency on the first folio of each group
  for(let i=1;i<groups.length;i++){
    if(groups[i][0].f === groups[i-1][groups[i-1].length-1].f){
      for(let j=i+1;j<groups.length;j++){
        const prevFac = groups[i-1][groups[i-1].length-1].f;
        const nextFac = (i+1<groups.length) ? groups[i+1][0].f : null;
        if(groups[j][0].f !== prevFac && (nextFac === null || groups[j][0].f !== nextFac)){
          [groups[i],groups[j]]=[groups[j],groups[i]]; break;
        }
      }
    }
  }
  return groups.flat();
}
function hasLangContent(f, lang){
  if(lang !== "pt") return true; // English always available
  // In PT mode, a folio only counts if it has Portuguese content.
  return !!(f.body_pt || f.pairs_pt || f.items_pt);
}
function pool(){
  let base = state.filter==="ALL" ? POOL : POOL.filter(f=>f.f===state.filter);
  // CRITICAL: in Portuguese mode, strictly filter to folios that have PT translations
  // so the user never sees a mix of PT and EN. User explicitly asked for this.
  if(state.lang === "pt") base = base.filter(f => hasLangContent(f, "pt"));
  return base;
}
function nextFolio(){
  if(ptr >= order.length){ order = shuffleFair(pool()); ptr = 0; }
  return order[ptr++];
}

// ============== FACULTY CHIPS (now in drawer only) ==============
const FACTOTAL = {};
POOL.forEach(f=>{ FACTOTAL[f.f] = (FACTOTAL[f.f]||0)+1; });

function seenInFaculty(code){
  let n = 0; POOL.forEach(f=>{ if(f.f===code && state.seen[f.slug]) n++; }); return n;
}
const WING_ORDER = ["A","I","T","F","O","N","P","C","H","M"];
// Return the count of folios available in the current language for a faculty.
function facTotalForLang(code){
  return POOL.filter(f => f.f === code && hasLangContent(f, state.lang)).length;
}
function poolTotalForLang(){
  return POOL.filter(f => hasLangContent(f, state.lang)).length;
}
function renderChips(){
  const grid = document.getElementById("menu-fac-grid");
  if(!grid) return;
  const totalSeen = Object.keys(state.seen).filter(k=>!k.includes(":")&&!k.startsWith("_")).length;
  const omniaLabel = t("omnia", "Omnia · all wings");
  const seenLabel = t("seen", "seen");
  const poolTotal = poolTotalForLang();
  let html = `<button class="menu-fac ${state.filter==="ALL"?"active":""}" data-f="ALL" style="flex:1 1 100%"><span class="mfn">${esc(omniaLabel)}</span><span class="mfp">${totalSeen} / ${poolTotal} ${esc(seenLabel)}</span></button>`;
  for(const k of WING_ORDER){
    if(!FAC[k]) continue;
    const tn = facTotalForLang(k);
    if(tn === 0) continue; // Hide wings with no folios in current language
    const s = seenInFaculty(k);
    const complete = s>=tn;
    html += `<button class="menu-fac ${state.filter===k?"active":""} ${complete?"complete":""}" data-f="${k}"><span class="mfn">${esc(FAC[k].name)}</span><span class="mfp">${s} / ${tn}${complete?" ✦":""}</span></button>`;
  }
  grid.innerHTML = html;
}
function setFilter(code){
  if(state.filter === code) return;
  state.filter = code;
  rebuildReel();
  renderChips();
}
// Full reel rebuild: wipe DOM, reshuffle, re-render from the top in the current language.
// Called when the filter changes OR when the language changes mid-session.
function rebuildReel(){
  const reel = $("#reel");
  if(!reel) return;
  reel.innerHTML = "";
  seq = 0; ptr = 0; order = shuffleFair(pool());
  appendSlides(8);
  reel.scrollTop = 0;
}

// ============== RAIL ==============
function railHTML(slug){
  const saved = !!state.saved[slug];
  const voxLbl = state.lang === "pt" ? "ler" : "read";
  // The rail auto-fades after a few seconds of no interaction, TikTok-style,
  // and snaps back to full opacity on any tap. The fade timer is set per-slide
  // on first view and reset on every pointer event over the slide.
  return `<div class="rail">
    <button class="rb save ${saved?"saved":""}" data-slug="${slug}" aria-label="Keep">✦<small>${esc(t("rail_keep","keep"))}</small></button>
    <button class="rb vox" data-slug="${slug}" aria-label="Read aloud">◉<small>${esc(voxLbl)}</small></button>
    <button class="rb share" data-slug="${slug}" aria-label="Share">↗<small>${esc(t("rail_share","share"))}</small></button>
  </div>`;
}

// ============== RAIL AUTO-FADE ==============
// After RAIL_IDLE_MS of no interaction on a slide, fade its rail down to
// ~20% opacity. Any pointer activity on the slide restores it to full.
const RAIL_IDLE_MS = 3000;
const _railTimers = new WeakMap();
function wakeRail(slide){
  if(!slide) return;
  const rail = slide.querySelector(":scope > .rail");
  if(!rail) return;
  rail.classList.remove("faded");
  const prev = _railTimers.get(slide);
  if(prev) clearTimeout(prev);
  const t = setTimeout(()=>{ rail.classList.add("faded"); _railTimers.delete(slide); }, RAIL_IDLE_MS);
  _railTimers.set(slide, t);
}
function sleepRail(slide){
  // Called when a slide leaves view — stop its timer; it will restart on return.
  if(!slide) return;
  const prev = _railTimers.get(slide);
  if(prev){ clearTimeout(prev); _railTimers.delete(slide); }
  const rail = slide.querySelector(":scope > .rail");
  if(rail) rail.classList.remove("faded");
}

// ============== VOX — SpeechSynthesis narration ==============
// On-device TTS. One utterance at a time; tapping ◉ again stops it.
// Picks the best available voice for the current language.
const VOX = { utter:null, slug:null, btn:null };
function voxStop(){
  try{ window.speechSynthesis.cancel(); }catch(e){}
  if(VOX.btn) VOX.btn.classList.remove("on");
  VOX.utter = null; VOX.slug = null; VOX.btn = null;
}
function voxText(slide){
  // Collect readable text from every page of this folio.
  if(!slide) return "";
  const parts = [];
  const title = slide.querySelector("h2");
  if(title) parts.push(title.textContent.trim());
  slide.querySelectorAll(".page .s-body").forEach(sb => {
    // Replace block tags with sentence breaks so the TTS phrases.
    const clone = sb.cloneNode(true);
    clone.querySelectorAll("br").forEach(b => b.replaceWith(". "));
    parts.push(clone.textContent.replace(/\s+/g," ").trim());
  });
  return parts.filter(Boolean).join(". ");
}
function voxPick(lang){
  if(!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices() || [];
  const want = lang === "pt" ? ["pt-BR","pt-PT","pt"] : ["en-US","en-GB","en-AU","en"];
  for(const w of want){
    const v = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(w.toLowerCase()));
    if(v) return v;
  }
  return voices[0] || null;
}
function voxToggle(btn){
  if(!("speechSynthesis" in window)){
    toast(state.lang === "pt" ? "Narração indisponível neste navegador" : "Narration not available in this browser");
    return;
  }
  const slide = btn.closest(".slide");
  const slug = btn.dataset.slug;
  // Tapping the same button again stops.
  if(VOX.slug === slug && window.speechSynthesis.speaking){
    voxStop();
    return;
  }
  voxStop();
  const text = voxText(slide);
  if(!text) return;
  const u = new SpeechSynthesisUtterance(text);
  const v = voxPick(state.lang);
  if(v){ u.voice = v; u.lang = v.lang; }
  else { u.lang = state.lang === "pt" ? "pt-BR" : "en-US"; }
  u.rate = 0.95; u.pitch = 1.0; u.volume = 1.0;
  u.onend = ()=>{ if(VOX.btn) VOX.btn.classList.remove("on"); VOX.utter = null; VOX.slug = null; VOX.btn = null; };
  u.onerror = u.onend;
  VOX.utter = u; VOX.slug = slug; VOX.btn = btn;
  btn.classList.add("on");
  try{ window.speechSynthesis.speak(u); }catch(e){ voxStop(); }
}
// Some browsers load voices async — warm the list after first user gesture.
if("speechSynthesis" in window){
  try{ window.speechSynthesis.getVoices(); }catch(e){}
  window.speechSynthesis.addEventListener && window.speechSynthesis.addEventListener("voiceschanged", ()=>{});
}


function classifyDensity(folio){
  // Heuristic for the short/medium/long typography tiers.
  if(folio.type === "sententia") return "short";
  if(folio.type === "pictura") return "medium";    // image dominates; caption is medium
  if(folio.type === "ludus") return "medium";      // game is the main surface
  if(folio.type === "visio" || folio.ytId) return "long";
  if(folio.img) return "medium";
  if(folio.type === "quaestio" || folio.type === "exercitium") return "medium";
  if(folio.type === "suffragium") return "medium";
  const raw = typeof folio.body === "string" ? folio.body : "";
  const body = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = body.split(" ").length;
  if(words < 55) return "short";
  if(words < 180) return "medium";
  return "long";
}

// ============== SLIDE BUILDERS ==============
function slideHTML(folio){
  seq++;
  // Axiom palate cleanser every 8 slides
  if(seq % 8 === 0){
    const ax = AXIOM_POOL[(seq/8 - 1) % AXIOM_POOL.length];
    return `<section class="slide ax" data-slug="ax-${seq}" data-type="ax" data-pages="1">
      <div class="pager"><div class="page first last">
        <div class="ax-lat">${esc(ax[0])}</div>
        <div class="ax-en">${esc(ax[1])}</div>
        <div class="ax-orn">❧ ❧ ❧</div>
      </div></div>
    </section>`;
  }

  const fac = FAC[folio.f];
  const gold = folio.rare ? " aurum" : "";
  const typLabel = {lectio:"Lectio",opus:"Opus",visio:"Visio",quaestio:"Quaestio",exercitium:"Exercitium",suffragium:"Suffragium",sententia:"Sententia",pictura:"Pictura",ludus:"Ludus"}[folio.type] || folio.type;

  // Sententia — body is {latin, english}; render centered like an axiom
  if(folio.type === "sententia" && folio.body && typeof folio.body === "object"){
    const bodyObj = L(folio, "body") || folio.body;
    return `<section class="slide ax${gold}" data-slug="${folio.slug}" data-type="sententia" data-fac="${folio.f}" data-pages="1">
      <div class="pager"><div class="page first last">
        <div class="s-top" style="width:100%"><span class="s-fac">${esc(fac.name)}</span><span class="s-typ">${esc(typLabel)}${folio.rare?" · gold leaf":""}</span></div>
        <div class="ax-lat">${esc(bodyObj.latin || "")}</div>
        <div class="ax-en">${esc(bodyObj.english || "")}</div>
        <div class="ax-orn">❧ ❧ ❧</div>
        <div class="s-src" style="margin-top:28px;border-top:none">— ${esc(L(folio,"src")||"")}</div>
      </div></div>
      ${railHTML(folio.slug)}
    </section>`;
  }

  // Pictura — image + caption, single page
  if(folio.type === "pictura"){
    const z = folio.zoom || {x:50, y:50, scale:1};
    const dots = Array.from({length:folio.steps||1}, (_,i) =>
      `<span class="${(i+1)===(folio.step||1) ? 'on':''}"></span>`).join("");
    return `<section class="slide pictura${gold}" data-slug="${folio.slug}" data-type="pictura" data-fac="${folio.f}" data-series="${esc(folio.series||'')}" data-pages="1">
      <div class="pager"><div class="page first last">
        <div class="pictura-box">
          <img src="${folio.img}" alt="${esc(L(folio,"title"))}" loading="lazy"
            style="--zx:${z.x}%; --zy:${z.y}%; --zs:${z.scale};"
            onerror="this.parentElement.style.background='#1E293B'">
          <div class="pic-step">${esc(fac.name)} · ${folio.step||1} / ${folio.steps||1}</div>
          <div class="pic-dots">${dots}</div>
        </div>
        <h2>${esc(L(folio,"title"))}</h2>
        <div class="s-body">${L(folio,"body")}</div>
        <div class="s-src">— ${esc(L(folio,"src")||"")}</div>
      </div></div>
      ${railHTML(folio.slug)}
    </section>`;
  }

  // Ludus — interactive game (match | sort | veritas | attributio | complementum).
  if(folio.type === "ludus"){
    const mode = folio.mode || "match";
    let gameHTML = "";
    const pairs = L(folio, "pairs") || folio.pairs;
    const items = L(folio, "items") || folio.items;
    const quotes = L(folio, "quotes") || folio.quotes;   // for attributio
    const authors = L(folio, "authors") || folio.authors; // for attributio
    const twins  = L(folio, "twins") || folio.twins;      // for veritas: [{real, fake, src?}, ...]
    const fills  = L(folio, "fills") || folio.fills;      // for complementum: [{before, after, correct, opts, src}]
    if(mode === "match" && pairs){
      const n = pairs.length;
      const leftOrder = shuffledIdx(n), rightOrder = shuffledIdx(n);
      gameHTML = `<div class="ludus-match" data-slug="${folio.slug}">
        <div class="lm-col lm-q">${
          leftOrder.map(i => `<button class="lm-item" data-side="q" data-idx="${i}">${escOpt(pairs[i].q)}</button>`).join("")
        }</div>
        <div class="lm-col lm-a">${
          rightOrder.map(i => `<button class="lm-item" data-side="a" data-idx="${i}">${escOpt(pairs[i].a)}</button>`).join("")
        }</div>
      </div>
      <div class="ludus-score">0 / ${n}</div>
      <div class="ludus-win">${esc(t("correct_label","Correct"))} ✦</div>`;
    } else if(mode === "sort" && items){
      const n = items.length;
      const order = shuffledIdx(n);
      gameHTML = `<div class="ludus-sort" data-slug="${folio.slug}">
        <div class="ls-items">${
          order.map(i => `<button class="ls-item" data-idx="${i}" data-year="${items[i].year}"><span class="ls-num">·</span><span class="ls-lbl">${escOpt(items[i].label)}</span></button>`).join("")
        }</div>
        <button class="btn ls-reset" style="margin-top:14px;display:none">${esc(t("play_again","Play again"))}</button>
      </div>
      <div class="ludus-win" style="margin-top:14px">${esc(t("correct_label","Correct"))} ✦</div>`;
    } else if(mode === "veritas" && twins){
      // VERITAS — real quote vs plausible fake. One pair; two cards; tap the real one.
      const w = twins[0] || {};
      const flip = Math.random() < 0.5; // randomize which side is real
      const real = w.real || "";
      const fake = w.fake || "";
      const srcLine = w.src ? `<div class="lv-src">— ${escOpt(w.src)}</div>` : "";
      const left  = flip ? real : fake;
      const right = flip ? fake : real;
      const realSide = flip ? "L" : "R";
      gameHTML = `<div class="ludus-veritas" data-slug="${folio.slug}" data-real="${realSide}">
        <button class="lv-opt" data-side="L">${escOpt(left)}</button>
        <button class="lv-opt" data-side="R">${escOpt(right)}</button>
        <div class="lv-reveal">${srcLine}</div>
      </div>
      <div class="ludus-win" style="margin-top:12px">${esc(t("correct_label","Correct"))} ✦</div>`;
    } else if(mode === "attributio" && quotes && authors){
      // ATTRIBUTIO — gauntlet. For each quote, swipe/tap one of two authors.
      const n = quotes.length;
      const order = shuffledIdx(n);
      const [A, B] = authors; // exactly two
      gameHTML = `<div class="ludus-attrib" data-slug="${folio.slug}" data-order="${order.join(',')}" data-i="0" data-score="0">
        <div class="la-progress"><span class="la-i">1</span> / ${n}</div>
        <div class="la-quote">${escOpt(quotes[order[0]].q)}</div>
        <div class="la-opts">
          <button class="la-opt" data-author="${esc(A)}">${esc(A)}</button>
          <button class="la-opt" data-author="${esc(B)}">${esc(B)}</button>
        </div>
        <div class="la-flash"></div>
      </div>
      <div class="ludus-win" style="margin-top:12px">${esc(t("correct_label","Correct"))} ✦</div>`;
    } else if(mode === "complementum" && fills){
      // COMPLEMENTUM — fill the keystone word.
      const f = fills[0] || {};
      const optsArr = (f.opts||[]).slice();
      const order = shuffledIdx(optsArr.length);
      const correctLabel = f.correct || "";
      gameHTML = `<div class="ludus-fill" data-slug="${folio.slug}" data-correct="${esc(correctLabel)}">
        <div class="lf-passage">${escOpt(f.before||"")} <span class="lf-blank">______</span> ${escOpt(f.after||"")}</div>
        <div class="lf-opts">${
          order.map(i => `<button class="lf-opt" data-val="${esc(optsArr[i])}">${escOpt(optsArr[i])}</button>`).join("")
        }</div>
        <div class="lf-reveal"></div>
      </div>
      <div class="ludus-win" style="margin-top:12px">${esc(t("correct_label","Correct"))} ✦</div>`;
    }
    return `<section class="slide ludus medium${gold}" data-slug="${folio.slug}" data-type="ludus" data-mode="${mode}" data-fac="${folio.f}" data-pages="1">
      <div class="pager"><div class="page first last">
        <div class="s-top"><span class="s-fac">${esc(fac.name)}</span><span class="s-typ">${esc(typLabel)}${folio.rare?" · gold leaf":""}</span></div>
        <h2>${esc(L(folio,"title"))}</h2>
        <div class="s-body">${L(folio,"body")}</div>
        ${gameHTML}
        <div class="s-src">— ${esc(L(folio,"src")||"")}</div>
      </div></div>
      ${railHTML(folio.slug)}
    </section>`;
  }

  let fig = "";
  if(folio.img){
    fig = `<figure class="s-img pan"><img src="${folio.img}" alt="${esc(L(folio,"title"))}" loading="lazy" onerror="this.parentElement.style.display='none'"></figure>`;
  } else if(folio.ytId){
    const vClass = folio.ytShort ? "short" : "wide";
    const thumbUrl = folio.ytShort
      ? `https://i.ytimg.com/vi/${folio.ytId}/oar2.jpg`
      : `https://i.ytimg.com/vi/${folio.ytId}/hqdefault.jpg`;
    fig = `<div class="lite-yt ${vClass}" data-yt="${folio.ytId}" data-short="${folio.ytShort?1:0}" role="button" aria-label="Play video">
      <img src="${thumbUrl}" loading="lazy" alt="" onerror="this.src='https://i.ytimg.com/vi/${folio.ytId}/hqdefault.jpg'">
      <a class="yt-fallback" href="https://youtube.com/${folio.ytShort?'shorts/':'watch?v='}${folio.ytId}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Watch on YouTube ↗</a>
    </div>`;
  }

  const bodyHTML = L(folio, "body") || "";
  const opts = L(folio, "opts") || folio.opts;
  const revealHTML = L(folio, "reveal");
  const revealMoreLabel = t("reveal_more","Reveal more");
  const revealLabel = t("reveal","Reveal");

  // Build interactive tail (quaestio opts, exercitium reveal, poll opts).
  // This stays on the LAST page so the interaction is seen with the final text.
  let interactiveTail = "";
  let pollBodyReplace = null;
  if(folio.type === "quaestio" && opts){
    interactiveTail += `<div class="q-opts">`;
    opts.forEach((o,i)=>{
      interactiveTail += `<button class="q-opt" data-slug="${folio.slug}" data-i="${i}" data-correct="${folio.correct}">${escOpt(o)}</button>`;
    });
    interactiveTail += `</div><div class="answer" id="ans-${seq}">${revealHTML||""}</div>`;
  } else if(folio.type === "exercitium"){
    interactiveTail += `<div class="reveal-wrap"><button class="btn q-reveal" data-t="ans-${seq}">${esc(revealLabel)}</button></div>`;
    if(revealHTML) interactiveTail += `<div class="answer" id="ans-${seq}">${revealHTML}</div>`;
  } else if(revealHTML){
    interactiveTail += `<div class="reveal-wrap"><button class="btn q-reveal" data-t="ans-${seq}">${esc(revealMoreLabel)}</button></div>
      <div class="answer" id="ans-${seq}">${revealHTML}</div>`;
  }
  if(folio.type === "suffragium" && opts){
    const myVote = state.votes[folio.slug];
    pollBodyReplace = `<div class="poll-opts" data-slug="${folio.slug}">`;
    opts.forEach((o,i)=>{
      const mine = myVote === i;
      pollBodyReplace += `<button class="poll-opt ${mine?"mine":""}" data-slug="${folio.slug}" data-i="${i}">
        <div class="bar"></div><span class="lbl">${escOpt(o)}</span><span class="pct"></span>
      </button>`;
    });
    pollBodyReplace += `</div>`;
  }

  const density = classifyDensity(folio);
  // Decide pagination. Only long lectio / opus get paginated. Images, interactive elements,
  // and short content stay as one page so structure doesn't fragment.
  const canPaginate = (folio.type === "lectio" || folio.type === "opus") && !folio.img;
  // v11: symmetric 170/170 — the first page carries full content before the continuation.
  // A short body (< 220 words total) skips pagination entirely and sits on one page.
  const firstMax = 170;
  const restMax  = 170;
  // Measure total body words so very-short "long"-classified folios don't fragment.
  const _bodyWords = (bodyHTML||"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim().split(" ").filter(Boolean).length;
  let pages;
  if(canPaginate && density === "long" && _bodyWords > 220){
    pages = paginateBody(bodyHTML, firstMax, restMax);
  } else {
    pages = [bodyHTML];
  }

  const sTopHTML = `<div class="s-top"><span class="s-fac">${esc(fac.name)}</span><span class="s-typ">${esc(typLabel)}${folio.rare?" · gold leaf":""}</span></div>`;
  const titleHTML = `<h2>${esc(L(folio,"title"))}</h2>`;
  const srcHTML   = `<div class="s-src">— ${esc(L(folio,"src")||"")}</div>`;

  const pagerHTML = pages.map((pageBody, i)=>{
    const isFirst = i === 0;
    const isLast  = i === pages.length - 1;
    const head = isFirst ? sTopHTML + titleHTML + fig : "";
    const bodyWrap = pollBodyReplace && isLast
      ? `<div class="s-body">${pageBody}</div>${pollBodyReplace}`
      : `<div class="s-body">${pageBody}</div>`;
    const tail = isLast ? (interactiveTail ? interactiveTail : "") + srcHTML : "";
    const pageCont = (pages.length > 1 && !isFirst) ? `<div class="pg-cont">${esc(t("continuation","(continues)"))}</div>` : "";
    return `<div class="page ${isFirst?"first":""} ${isLast?"last":""}" data-page="${i}">
      ${pageCont}${head}${bodyWrap}${tail}
    </div>`;
  }).join("");

  const dotsHTML = pages.length > 1
    ? `<div class="page-dots">${pages.map((_,i)=>`<span class="${i===0?'on':''}" data-p="${i}"></span>`).join("")}</div>`
    : "";

  return `<section class="slide ${density}${gold}" data-slug="${folio.slug}" data-type="${folio.type}" data-fac="${folio.f}" data-pages="${pages.length}">
    <div class="pager">${pagerHTML}</div>
    ${dotsHTML}
    ${railHTML(folio.slug)}
  </section>`;
}

// ============== APPEND + OBSERVERS ==============
let viewIO = null, endIO = null;
function appendSlides(n){
  const reel = $("#reel");
  let html = "";
  for(let i=0;i<n;i++) html += slideHTML(nextFolio());
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  const added = [];
  while(tmp.firstChild){ added.push(tmp.firstChild); reel.appendChild(tmp.firstChild); }
  added.forEach(el=>{
    if(el.nodeType !== 1) return;
    if(viewIO) viewIO.observe(el);
    // Attach the pager scroll listener directly to this slide's pager so page dots update
    const pager = el.querySelector(".pager");
    if(pager && pager.querySelectorAll(".page").length > 1){
      pager.addEventListener("scroll", ()=>updatePagerDots(pager), {passive:true});
    }
  });
  if(endIO){
    endIO.disconnect();
    const nodes = reel.querySelectorAll(".slide");
    if(nodes.length >= 2) endIO.observe(nodes[nodes.length-2]);
  }
}

// ============== VIEW/SEEN COUNTING ==============
function markSeen(slide){
  const slug = slide.dataset.slug;
  if(!slug || slug.startsWith("ax-")) return; // don't count axioms
  const todayStamp = slug + ":" + todayKey();
  if(state.seen[todayStamp]) return;
  state.seen[todayStamp] = 1;
  if(!state.seen[slug]){
    state.seen[slug] = Date.now();
    state.dirty.seen.push({slug, fac:slide.dataset.fac});
    checkWingCompletion(slide.dataset.fac);
    renderChips();
  }
  state.dayCount++;
  updateRule();
  saveLocal();
  if(sb && state.user) persistSeen();
}

function checkWingCompletion(facCode){
  const seen = seenInFaculty(facCode);
  const total = FACTOTAL[facCode];
  if(seen >= total && !state.seen["_wing_"+facCode]){
    state.seen["_wing_"+facCode] = 1;
    const msg = state.lang === "pt"
      ? FAC[facCode].name + " perlecta ✦ — ala completa"
      : FAC[facCode].name + " perlecta ✦ — a wing complete";
    toast(msg);
    sndWing();
    haptic([30, 60, 30]);
    const f = $("#seal-flash"); f.classList.remove("go"); void f.offsetWidth; f.classList.add("go");
  }
}

const RULE_TARGET = 10;
function updateRule(){
  // compute today's count fresh from seen map
  const today = todayKey();
  let n = 0;
  for(const k in state.seen){ if(k.endsWith(":"+today)) n++; }
  state.dayCount = n;
  const pct = Math.min(n/RULE_TARGET*100, 100);
  const fill = $("#rulefill");
  if(fill){
    fill.style.width = pct + "%";
    fill.classList.toggle("kept", n >= RULE_TARGET);
  }
  if(n === RULE_TARGET){
    // No "stop" moment. Just a quiet gold flash on the rule bar.
    sndBell();
    haptic(20);
  }
}

// ============== KEEP (double-tap) + SAVE ==============
function toggleSave(slug, viaDouble){
  const was = !!state.saved[slug];
  if(was && !viaDouble){
    delete state.saved[slug];
    state.dirty.unsaved.push(slug);
  } else if(!was){
    const folio = POOL.find(f=>f.slug===slug); if(!folio) return;
    state.saved[slug] = {title:folio.title, fac:folio.f, src:folio.src, when:Date.now()};
    state.dirty.saved.push({slug, folio});
    sndSeal();
    haptic(18);
    const f = $("#seal-flash"); f.classList.remove("go"); void f.offsetWidth; f.classList.add("go");
  }
  $$(`.rb.save[data-slug="${slug}"]`).forEach(b=>b.classList.toggle("saved", !!state.saved[slug]));
  updateMenuCounts();
  saveLocal();
  if(sb && state.user) persistSaved();
}

// Double-tap detection
let lastTap = 0, lastKey = null, tapStartX = 0, tapStartY = 0;
function handleTap(e){
  const slide = e.target.closest(".slide");
  if(!slide || slide.dataset.type === "ax") return;
  if(e.target.closest("button, .lite-yt, .poll-opt, .q-opt, .ls-item, .lm-item, .lv-opt, .la-opt, .lf-opt, .rb.vox")) return;
  const now = Date.now();
  if(now - lastTap < 320 && lastKey === slide.dataset.slug){
    toggleSave(slide.dataset.slug, true);
    lastTap = 0;
  } else { lastTap = now; lastKey = slide.dataset.slug; }
}

// ============== SHARE ==============
async function shareFolio(slug){
  const folio = POOL.find(f=>f.slug===slug); if(!folio) return;
  const text = folio.title + " — " + folio.src + "\n\nvia Studium Generale";
  const url = location.href.split("#")[0];
  try{
    if(navigator.share){ await navigator.share({title:folio.title, text, url}); return; }
    await navigator.clipboard.writeText(text + "\n" + url);
    toast("Copied — carry it with you");
  }catch(e){ if(e && e.name !== "AbortError") toast("Copy failed"); }
}

// ============== VOTES (Suffragium) ==============
async function vote(slug, choice){
  state.votes[slug] = choice;
  state.dirty.votes.push({slug, choice});
  saveLocal();
  const poll = document.querySelector(`.poll-opts[data-slug="${slug}"]`);
  if(poll){
    poll.querySelectorAll(".poll-opt").forEach((b,i)=>{
      b.classList.toggle("mine", i===choice);
    });
  }
  if(sb && state.user){
    try{ await sb.from("votes").upsert({ user_id:state.user.id, folio_slug:slug, choice }); }catch(e){}
    await renderTallies(slug);
  } else {
    // show just the user's own vote
    const opts = poll ? poll.querySelectorAll(".poll-opt") : [];
    opts.forEach((b,i)=>{
      b.querySelector(".pct").textContent = i===choice ? "✓" : "";
    });
  }
}
async function renderTallies(slug){
  if(!sb) return;
  try{
    const { data } = await sb.from("vote_tallies").select("*").eq("folio_slug", slug);
    if(!data) return;
    const total = data.reduce((s,r)=>s+r.n, 0);
    const poll = document.querySelector(`.poll-opts[data-slug="${slug}"]`);
    if(!poll || total===0) return;
    poll.querySelectorAll(".poll-opt").forEach((b,i)=>{
      const row = data.find(r=>r.choice===i);
      const n = row ? row.n : 0;
      const pct = total ? Math.round(n/total*100) : 0;
      b.querySelector(".bar").style.width = pct + "%";
      b.querySelector(".pct").textContent = pct + "%";
    });
  }catch(e){}
}

// ============== YOUTUBE (lite -> real embed on tap) ==============
function upgradeYT(el){
  const id = el.dataset.yt;
  if(!id) return;
  // Load the iframe WITHOUT autoplay. User taps YouTube's own play button once loaded.
  // This is the single most-reliable mobile embed path — autoplay triggers "video unavailable" on iOS.
  el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?playsinline=1&rel=0&modestbranding=1&enablejsapi=0" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>`;
}

// ============== PERSIST TO SUPABASE ==============
let persistT = null;
function persistSeen(){
  clearTimeout(persistT);
  persistT = setTimeout(async ()=>{
    if(!sb || !state.user) return;
    const pending = state.dirty.seen.splice(0);
    if(!pending.length) return;
    const rows = pending.map(p=>({ user_id:state.user.id, folio_slug:p.slug, faculty:p.fac }));
    try{ await sb.from("seen").upsert(rows, { onConflict:"user_id,folio_slug" }); }catch(e){ state.dirty.seen.push(...pending); }
  }, 1200);
}
async function persistSaved(){
  if(!sb || !state.user) return;
  const toSave = state.dirty.saved.splice(0);
  const toRemove = state.dirty.unsaved.splice(0);
  if(toSave.length){
    const rows = toSave.map(p=>({
      user_id:state.user.id, folio_slug:p.slug,
      faculty:p.folio.f, title:p.folio.title, source:p.folio.src
    }));
    try{ await sb.from("thesaurus").upsert(rows, { onConflict:"user_id,folio_slug" }); }catch(e){}
  }
  if(toRemove.length){
    try{ await sb.from("thesaurus").delete().eq("user_id", state.user.id).in("folio_slug", toRemove); }catch(e){}
  }
}

async function pullFromCloud(){
  if(!sb || !state.user) return;
  try{
    const [seenRes, thesRes, voteRes] = await Promise.all([
      sb.from("seen").select("folio_slug,faculty,seen_at").eq("user_id", state.user.id),
      sb.from("thesaurus").select("folio_slug,faculty,title,source,kept_at").eq("user_id", state.user.id),
      sb.from("votes").select("folio_slug,choice").eq("user_id", state.user.id)
    ]);
    if(seenRes.data){ seenRes.data.forEach(r=>{ state.seen[r.folio_slug] = new Date(r.seen_at).getTime(); }); }
    if(thesRes.data){ thesRes.data.forEach(r=>{ state.saved[r.folio_slug] = {title:r.title, fac:r.faculty, src:r.source, when:new Date(r.kept_at).getTime()}; }); }
    if(voteRes.data){ voteRes.data.forEach(r=>{ state.votes[r.folio_slug] = r.choice; }); }
    saveLocal();
    renderChips();
    updateMenuCounts();
    // Push any local changes made before sign-in
    const localSaved = Object.keys(state.saved);
    if(localSaved.length){
      localSaved.forEach(slug=>{
        const folio = POOL.find(f=>f.slug===slug);
        if(folio) state.dirty.saved.push({slug, folio});
      });
      persistSaved();
    }
  }catch(e){ console.warn("pull failed:", e.message); }
}

// ============== AUTH ==============
async function initAuth(){
  if(!sb) return;
  const { data:{ session } } = await sb.auth.getSession();
  if(session && session.user){
    state.user = session.user;
    await pullFromCloud();
    renderAuthArea();
  }
  sb.auth.onAuthStateChange(async (evt, s)=>{
    if(s && s.user){
      state.user = s.user;
      await pullFromCloud();
      renderAuthArea();
      toast("Signed in — your progress will sync");
    } else {
      state.user = null;
      renderAuthArea();
    }
  });
}
function renderAuthArea(){
  const el = $("#auth-area"); if(!el) return;
  if(state.user){
    const email = state.user.email || "signed in";
    el.innerHTML = `<div class="signed-in"><b>${esc(email)}</b></div>
      <button class="sign-in-btn" id="sign-out">Sign out</button>`;
    $("#sign-out").onclick = async ()=>{
      if(sb){ await sb.auth.signOut(); }
      location.reload();
    };
  } else {
    el.innerHTML = `<button class="sign-in-btn" id="sign-in-link">Sign in to sync</button>`;
    $("#sign-in-link").onclick = ()=> $("#auth-modal").classList.add("open");
  }
}
async function sendMagicLink(){
  const email = $("#email-in").value.trim();
  const st = $("#auth-status");
  if(!email || !email.includes("@")){ st.textContent = "Please enter a valid email."; return; }
  st.textContent = "Sending…";
  try{
    const { error } = await sb.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: location.href.split("#")[0] }
    });
    if(error) throw error;
    st.textContent = "Check your inbox. The link will sign you in here.";
  }catch(e){
    st.textContent = "Could not send: " + e.message;
  }
}

// ============== CHROME — permanently hidden (reveal only via hamburger) ==============
// The topbar is hidden by default. Only the thin rule bar at the very top and
// the floating hamburger button are visible. Tapping the floating hamburger
// opens the menu drawer directly; the topbar remains hidden.
function initChrome(){
  // No-op in the new model: there is no auto-hide timer, no scroll listener on reel.
  // The floating menu button handles its own visibility.
}

// ============== DRAWER + VIEWS ==============
function openMenu(){ $("#menu").classList.add("open"); updateMenuCounts(); }
function closeMenu(){ $("#menu").classList.remove("open"); }
function closeAllViews(){ $$(".view").forEach(v=>v.classList.remove("open")); }
function openView(name){
  closeAllViews(); closeMenu();
  const v = $("#view-"+name); if(!v) return;
  v.classList.add("open");
  if(name === "thesaurus") renderThesaurus();
  if(name === "wings") renderWings();
  if(name === "rule") renderRuleView();
}
function updateMenuCounts(){
  const n = Object.keys(state.saved).length;
  const el = $("#thes-n"); if(el) el.textContent = n;
}
function renderThesaurus(){
  const list = $("#thes-list");
  const items = Object.entries(state.saved).sort((a,b)=>b[1].when - a[1].when);
  if(!items.length){ list.innerHTML = `<div class="tempty">${esc(t("thesaurus_empty","Nothing kept yet. Double-tap a folio that strikes you."))}</div>`; return; }
  list.innerHTML = items.map(([slug, s])=>`
    <div class="ti" data-slug="${slug}">
      <div class="ti-fac">${esc(FAC[s.fac] ? FAC[s.fac].name : s.fac)}</div>
      <div class="ti-t">${esc(s.title)}</div>
      <div class="ti-s">— ${esc(s.src||"")}</div>
    </div>`).join("");
}
const DEGREES = ["Discipulus","Scholaris","Baccalaureus","Licentiatus","Magister","Doctor"];
function degreeFor(ratio){ return DEGREES[Math.min(Math.floor(ratio * DEGREES.length), DEGREES.length-1)]; }
function renderWings(){
  const list = $("#wings-list");
  let html = "";
  for(const k of WING_ORDER){
    if(!FAC[k]) continue;
    const tn = facTotalForLang(k);
    if(tn === 0) continue;
    const s = seenInFaculty(k);
    const ratio = tn ? s/tn : 0;
    const deg = DEGREES[Math.min(Math.floor(ratio * DEGREES.length), DEGREES.length-1)];
    html += `<div class="wi">
      <div class="wi-h"><div class="wi-n">${esc(FAC[k].name)}</div><div class="wi-p">${s} / ${tn}${s>=tn?' ✦':''}</div></div>
      <div class="wi-bar"><div style="width:${(ratio*100).toFixed(0)}%"></div></div>
      <div class="wi-deg">${esc(deg)}</div>
    </div>`;
  }
  list.innerHTML = html;
}
function renderRuleView(){
  const el = $("#rule-today");
  const n = state.dayCount;
  const pct = Math.min(n/RULE_TARGET*100, 100);
  const kept = n >= RULE_TARGET;
  const nSaved = Object.keys(state.saved).length;
  const nSeen = Object.keys(state.seen).filter(k=>!k.includes(":") && !k.startsWith("_")).length;
  const foliosWord = state.lang === "pt" ? "fólios" : "folios";
  const keptLine = state.lang === "pt"
    ? `${nSaved} ${foliosWord} guardados ao todo.`
    : `${nSaved} ${foliosWord} kept, all time.`;
  const seenLine = state.lang === "pt"
    ? `${nSeen} / ${POOL.length} ${foliosWord} vistos ao todo.`
    : `${nSeen} / ${POOL.length} ${foliosWord} seen, all time.`;
  el.innerHTML = `
    <div class="rule-office">
      <h4>${esc(t("rule_title","Today's Rule"))}</h4>
      <div class="r-sub">${esc(t("rule_sub","Read ten folios to keep the Rule for today."))}</div>
      <div class="r-prog"><span>${n} / ${RULE_TARGET}</span><span class="r-count">${kept ? esc(t("rule_kept","KEPT ✦")) : esc(t("rule_open","OPEN"))}</span></div>
      <div class="wi-bar" style="margin-top:10px"><div style="width:${pct}%; background:${kept?'var(--pulse)':'var(--pulse2)'}"></div></div>
    </div>
    <div class="rule-office">
      <h4>${esc(t("thes_the","The Thesaurus"))}</h4>
      <div class="r-sub">${keptLine}</div>
    </div>
    <div class="rule-office">
      <h4>${esc(t("the_studium","The Studium"))}</h4>
      <div class="r-sub">${seenLine}</div>
    </div>
  `;
}

// ============== DAILY TOPIC CHOOSER ==============
// On app launch: once per day, show a modal asking which wing to study today.
// The choice sets the filter and is remembered for the day in localStorage.
const DAILY_KEY = "studium_daily_choice";

function dailyChoiceToday(){
  try{
    const v = JSON.parse(localStorage.getItem(DAILY_KEY) || "null");
    if(v && v.day === todayKey()) return v.filter;
  }catch(e){}
  return null;
}
function recordDailyChoice(filter){
  try{ localStorage.setItem(DAILY_KEY, JSON.stringify({day:todayKey(), filter})); }catch(e){}
}

function initDailyChooser(onDone){
  const modal = document.getElementById("daily-modal");
  if(!modal){ onDone && onDone(); return; }

  const prior = dailyChoiceToday();
  if(prior){
    if(prior !== state.filter) setFilter(prior);
    onDone && onDone();
    return;
  }

  const grid = document.getElementById("daily-grid");
  const order = ["ALL","A","I","T","F","O","N","P","C","H"];
  grid.innerHTML = order.filter(k=>{
    // Hide wings that have no content in the current language.
    if(k === "ALL") return true;
    return facTotalForLang(k) > 0;
  }).map(k=>{
    const name = k === "ALL" ? t("omnia","Omnia · all wings") : FAC[k].name;
    const desc = t("daily_desc_"+k, "");
    const cls = k === "ALL" ? "omnia" : (k === "A" ? "arsenal" : "");
    return `<button data-f="${k}" class="${cls}"><span class="dn">${esc(name)}</span><span class="dd">${esc(desc)}</span></button>`;
  }).join("");

  grid.addEventListener("click", e=>{
    const b = e.target.closest("button[data-f]"); if(!b) return;
    const f = b.dataset.f;
    recordDailyChoice(f);
    if(f !== state.filter) setFilter(f);
    modal.classList.remove("open");
    sndSeal();
    haptic(16);
    setTimeout(()=>{
      const name = f === "ALL" ? t("omnia","Omnia") : FAC[f].name;
      toast(t("today_label","Today") + ": " + name);
    }, 300);
    onDone && onDone();
  });

  document.getElementById("daily-skip").onclick = ()=>{
    recordDailyChoice("ALL");
    modal.classList.remove("open");
    onDone && onDone();
  };

  modal.classList.add("open");
}

// ============== ONBOARDING (first launch only) ==============
// Four coachmarks shown once, ever, to teach the four core actions:
// 1) swipe up for next, 2) double-tap to keep, 3) menu, 4) the Rule bar.
// Dismissal recorded in localStorage so it never shows again.
const OB_KEY = "studium_onboarded";
function alreadyOnboarded(){
  try{ return !!localStorage.getItem(OB_KEY); }catch(e){ return false; }
}
function markOnboarded(){
  try{ localStorage.setItem(OB_KEY, "1"); }catch(e){}
}

const OB_STEPS = [
  { key:"1", visual:`<div class="ob-arrow"></div>` },
  { key:"2", visual:`<div class="ob-tap">✦</div>` },
  { key:"3", visual:`<div class="ob-menu">☰</div>` },
  { key:"4", visual:`<div class="ob-rule"></div>` }
];

function initOnboarding(onDone){
  const modal = document.getElementById("onboarding");
  if(!modal){ onDone && onDone(); return; }
  if(alreadyOnboarded()){ onDone && onDone(); return; }

  let step = 0;
  const titleEl = document.getElementById("ob-title");
  const bodyEl = document.getElementById("ob-body");
  const visualEl = document.getElementById("ob-visual");
  const dotsEl = document.getElementById("ob-dots");
  const nextBtn = document.getElementById("ob-next");
  const skipBtn = document.getElementById("ob-skip");

  function render(){
    const s = OB_STEPS[step];
    visualEl.innerHTML = s.visual;
    titleEl.textContent = t("ob_"+s.key+"_title", "");
    bodyEl.textContent = t("ob_"+s.key+"_body", "");
    dotsEl.innerHTML = OB_STEPS.map((_,i) =>
      `<span class="${i===step?'on':''}"></span>`).join("");
    const isLast = step === OB_STEPS.length - 1;
    nextBtn.textContent = isLast ? t("ob_begin","Begin") : t("ob_next","Next");
    skipBtn.textContent = isLast ? "" : t("ob_skip","Skip");
    skipBtn.style.display = isLast ? "none" : "block";
  }
  function finish(){
    markOnboarded();
    modal.classList.remove("open");
    sndSeal();
    haptic(14);
    onDone && onDone();
  }
  nextBtn.onclick = ()=>{
    haptic(8);
    if(step === OB_STEPS.length - 1){ finish(); }
    else { step++; render(); }
  };
  skipBtn.onclick = finish;

  render();
  modal.classList.add("open");
}

// ============== LANGUAGE CHOOSER (first launch only) ==============
// Callback receives `changed` boolean: true if the user picked a language
// (so the caller should rebuild the reel), false if we skipped the modal
// because the language was already set and no change happened.
function initLanguageChooser(onDone){
  const modal = document.getElementById("lang-modal");
  if(!modal){ onDone && onDone(false); return; }

  // If already set, skip the modal
  let hasLang = false;
  try{ hasLang = !!localStorage.getItem("studium_lang"); }catch(e){}
  if(hasLang){ applyI18n(); onDone && onDone(false); return; }

  const priorLang = state.lang;
  applyI18n();

  const grid = modal.querySelector(".lang-grid");
  grid.addEventListener("click", e=>{
    const b = e.target.closest("button[data-lang]"); if(!b) return;
    const next = b.dataset.lang === "pt" ? "pt" : "en";
    const changed = next !== priorLang;
    state.lang = next;
    saveLang();
    applyI18n();
    renderChips();
    renderMenuLang();
    modal.classList.remove("open");
    sndSeal();
    haptic(16);
    onDone && onDone(changed);
  });

  modal.classList.add("open");
}

function renderMenuLang(){
  const grid = document.getElementById("menu-lang-grid");
  if(!grid) return;
  const langs = [{k:"en", n:"English", d:"EN"},{k:"pt", n:"Português", d:"PT"}];
  grid.innerHTML = langs.map(L =>
    `<button class="menu-fac ${state.lang===L.k?'active':''}" data-lang="${L.k}" style="flex:1 1 calc(50% - 3px)">
      <span class="mfn">${esc(L.n)}</span><span class="mfp">${L.d}</span>
    </button>`).join("");
}

// ============== LUDUS — MATCH mode ==============
function handleMatchTap(btn){
  const parent = btn.closest(".ludus-match");
  const side = btn.dataset.side;
  const idx = parseInt(btn.dataset.idx, 10);

  // Already a selection on the same side? Toggle, don't check.
  const prevSame = parent.querySelector(`.lm-item.selected[data-side="${side}"]`);
  if(prevSame){
    prevSame.classList.remove("selected");
    if(prevSame === btn) return; // deselect-only on same tap
  }

  // Mark selected
  btn.classList.add("selected");

  // Is there a selection on the OTHER side?
  const otherSide = side === "q" ? "a" : "q";
  const otherSel = parent.querySelector(`.lm-item.selected[data-side="${otherSide}"]`);
  if(!otherSel) return;

  const otherIdx = parseInt(otherSel.dataset.idx, 10);
  if(idx === otherIdx){
    // Correct match
    btn.classList.remove("selected"); otherSel.classList.remove("selected");
    btn.classList.add("locked"); otherSel.classList.add("locked");
    sndSeal(); haptic(12);
    updateMatchScore(parent);
  } else {
    // Wrong — brief shake, then deselect both
    btn.classList.add("wrong"); otherSel.classList.add("wrong");
    haptic(25);
    setTimeout(()=>{
      btn.classList.remove("wrong", "selected");
      otherSel.classList.remove("wrong", "selected");
    }, 500);
  }
}
function updateMatchScore(parent){
  const scoreEl = parent.parentElement.querySelector(".ludus-score");
  const total = parent.querySelectorAll(".lm-q .lm-item").length;
  const done = parent.querySelectorAll(".lm-q .lm-item.locked").length;
  if(scoreEl) scoreEl.textContent = done + " / " + total;
  if(done === total){
    const winEl = parent.parentElement.querySelector(".ludus-win");
    if(winEl){ winEl.classList.add("on"); winEl.textContent = "✦ " + t("perfect","Perfect") + " ✦"; }
    sndWing(); haptic([30,60,30]);
    const flash = $("#seal-flash"); flash.classList.remove("go"); void flash.offsetWidth; flash.classList.add("go");
  }
}

// ============== LUDUS — SORT mode ==============
function handleSortTap(btn){
  const parent = btn.closest(".ludus-sort");
  const picked = parent.querySelectorAll(".ls-item.picked");
  const rank = picked.length + 1;
  btn.classList.add("picked");
  btn.querySelector(".ls-num").textContent = rank;
  haptic(10);
  // All picked? Reveal.
  const total = parent.querySelectorAll(".ls-item").length;
  if(rank === total){
    revealSort(parent);
  }
}
function revealSort(parent){
  const items = Array.from(parent.querySelectorAll(".ls-item"));
  // Group them by their picked-order (which equals the number in .ls-num 1..n)
  const byPickOrder = items.slice().sort((a,b)=>{
    const na = parseInt(a.querySelector(".ls-num").textContent, 10) || 999;
    const nb = parseInt(b.querySelector(".ls-num").textContent, 10) || 999;
    return na - nb;
  });
  // Correct order = ascending year
  const byYear = items.slice().sort((a,b)=> parseInt(a.dataset.year,10) - parseInt(b.dataset.year,10));
  let allOk = true;
  byPickOrder.forEach((el, i)=>{
    if(el === byYear[i]) el.classList.add("result-ok");
    else { el.classList.add("result-bad"); allOk = false; }
  });
  // Reveal the correct year on each
  items.forEach(el=>{
    const y = el.dataset.year;
    if(!el.querySelector(".ls-year")){
      const yearSpan = document.createElement("span");
      yearSpan.className = "ls-year";
      yearSpan.style.marginLeft = "auto";
      yearSpan.style.fontSize = ".82rem";
      yearSpan.style.color = "var(--ink3)";
      yearSpan.style.fontStyle = "italic";
      yearSpan.textContent = y;
      el.appendChild(yearSpan);
    }
  });
  const reset = parent.querySelector(".ls-reset");
  if(reset) reset.style.display = "block";
  const winEl = parent.parentElement.querySelector(".ludus-win");
  if(allOk){
    if(winEl){ winEl.classList.add("on"); winEl.textContent = "✦ " + t("perfect","Perfect") + " ✦"; }
    sndWing(); haptic([30,60,30]);
    const flash = $("#seal-flash"); flash.classList.remove("go"); void flash.offsetWidth; flash.classList.add("go");
  } else {
    sndSeal();
    haptic([25,40,25]);
  }
}
function handleSortReset(btn){
  const parent = btn.closest(".ludus-sort");
  // Rebuild the item list in a NEW shuffle, cleaning all state
  const items = Array.from(parent.querySelectorAll(".ls-item"));
  const originals = items.map(el => ({idx: el.dataset.idx, year: el.dataset.year, label: el.querySelector(".ls-lbl").textContent}));
  const order = shuffledIdx(originals.length);
  const container = parent.querySelector(".ls-items");
  container.innerHTML = order.map(i => {
    const o = originals[i];
    return `<button class="ls-item" data-idx="${o.idx}" data-year="${o.year}"><span class="ls-num">·</span><span class="ls-lbl">${esc(o.label)}</span></button>`;
  }).join("");
  btn.style.display = "none";
  const winEl = parent.parentElement.querySelector(".ludus-win");
  if(winEl) winEl.classList.remove("on");
}

// ============== LUDUS — VERITAS (real vs fake quote) ==============
function handleVeritasTap(btn){
  const parent = btn.closest(".ludus-veritas");
  if(parent.classList.contains("done")) return;
  parent.classList.add("done");
  const realSide = parent.dataset.real;
  const picked = btn.dataset.side;
  const correct = picked === realSide;
  parent.querySelectorAll(".lv-opt").forEach(b => {
    b.disabled = true;
    if(b.dataset.side === realSide) b.classList.add("lv-real");
    else b.classList.add("lv-fake");
  });
  parent.querySelector(".lv-reveal").classList.add("on");
  const winEl = parent.parentElement.querySelector(".ludus-win");
  if(correct){
    if(winEl){ winEl.classList.add("on"); winEl.textContent = "✦ " + t("perfect","Perfect") + " ✦"; }
    sndWing(); haptic([30,60,30]);
    const flash = $("#seal-flash"); if(flash){ flash.classList.remove("go"); void flash.offsetWidth; flash.classList.add("go"); }
  } else {
    if(winEl){ winEl.classList.add("on"); winEl.textContent = t("wrong_label","Not quite"); }
    sndSeal(); haptic([25,40,25]);
  }
}

// ============== LUDUS — ATTRIBUTIO (gauntlet) ==============
function handleAttribTap(btn){
  const parent = btn.closest(".ludus-attrib");
  if(parent.classList.contains("done")) return;
  const slug = parent.dataset.slug;
  const folio = (typeof FOLIOS !== "undefined") ? FOLIOS.find(x => x.slug === slug) : null;
  if(!folio) return;
  const quotes = L(folio,"quotes") || folio.quotes || [];
  const order  = parent.dataset.order.split(",").map(x => parseInt(x,10));
  let i = parseInt(parent.dataset.i, 10);
  let score = parseInt(parent.dataset.score, 10);
  const cur = quotes[order[i]];
  const chosen = btn.dataset.author;
  const correct = (cur && (cur.a === chosen));
  // Flash feedback
  const flash = parent.querySelector(".la-flash");
  flash.textContent = correct ? "✦" : "✗";
  flash.className = "la-flash " + (correct ? "ok" : "bad") + " show";
  if(correct){ score += 1; sndTick(); haptic(10); }
  else{ sndSeal(); haptic(20); }
  parent.dataset.score = String(score);
  i += 1;
  parent.dataset.i = String(i);
  setTimeout(()=>{
    flash.classList.remove("show");
    if(i >= order.length){
      // Done — show final score
      parent.classList.add("done");
      const n = order.length;
      const qEl = parent.querySelector(".la-quote");
      const pEl = parent.querySelector(".la-progress");
      const oEl = parent.querySelector(".la-opts");
      qEl.innerHTML = `<strong>${score} / ${n}</strong><br><span style="font-size:.85em;color:var(--ink3)">${esc(t("final_score","Your score"))}</span>`;
      pEl.textContent = n + " / " + n;
      oEl.innerHTML = `<button class="btn la-reset">${esc(t("play_again","Play again"))}</button>`;
      const winEl = parent.parentElement.querySelector(".ludus-win");
      if(winEl){
        winEl.classList.add("on");
        winEl.textContent = (score === n) ? ("✦ " + t("perfect","Perfect") + " ✦") : (score + " / " + n);
      }
      if(score === n){
        sndWing(); haptic([30,60,30]);
        const sf = $("#seal-flash"); if(sf){ sf.classList.remove("go"); void sf.offsetWidth; sf.classList.add("go"); }
      }
    } else {
      // Next quote
      parent.querySelector(".la-i").textContent = (i+1);
      parent.querySelector(".la-quote").textContent = (quotes[order[i]].q || "");
    }
  }, 420);
}
function handleAttribReset(btn){
  const parent = btn.closest(".ludus-attrib");
  if(!parent) return;
  const slug = parent.dataset.slug;
  const folio = (typeof FOLIOS !== "undefined") ? FOLIOS.find(x => x.slug === slug) : null;
  if(!folio) return;
  const quotes = L(folio,"quotes") || folio.quotes || [];
  const authors = L(folio,"authors") || folio.authors || [];
  const [A, B] = authors;
  const n = quotes.length;
  const order = shuffledIdx(n);
  parent.dataset.order = order.join(",");
  parent.dataset.i = "0";
  parent.dataset.score = "0";
  parent.classList.remove("done");
  parent.querySelector(".la-progress").innerHTML = `<span class="la-i">1</span> / ${n}`;
  parent.querySelector(".la-quote").textContent = quotes[order[0]].q || "";
  parent.querySelector(".la-opts").innerHTML =
    `<button class="la-opt" data-author="${esc(A)}">${esc(A)}</button>
     <button class="la-opt" data-author="${esc(B)}">${esc(B)}</button>`;
  const winEl = parent.parentElement.querySelector(".ludus-win");
  if(winEl){ winEl.classList.remove("on"); winEl.textContent = esc(t("correct_label","Correct")) + " ✦"; }
}

// ============== LUDUS — COMPLEMENTUM (fill the keystone) ==============
function handleFillTap(btn){
  const parent = btn.closest(".ludus-fill");
  if(parent.classList.contains("done")) return;
  parent.classList.add("done");
  const correct = parent.dataset.correct;
  const chosen = btn.dataset.val;
  const ok = (chosen === correct);
  // Mark the blank with the correct word, highlight choice
  const blank = parent.querySelector(".lf-blank");
  if(blank){ blank.textContent = correct; blank.classList.add(ok ? "ok" : "bad"); }
  parent.querySelectorAll(".lf-opt").forEach(b => {
    b.disabled = true;
    if(b.dataset.val === correct) b.classList.add("ok");
    else if(b === btn) b.classList.add("bad");
  });
  const reveal = parent.querySelector(".lf-reveal");
  const slug = parent.dataset.slug;
  const folio = (typeof FOLIOS !== "undefined") ? FOLIOS.find(x => x.slug === slug) : null;
  const srcLine = folio && (L(folio,"fills") || folio.fills) && (L(folio,"fills") || folio.fills)[0] && (L(folio,"fills") || folio.fills)[0].src;
  if(reveal && srcLine){ reveal.innerHTML = `— ${escOpt(srcLine)}`; reveal.classList.add("on"); }
  const winEl = parent.parentElement.querySelector(".ludus-win");
  if(ok){
    if(winEl){ winEl.classList.add("on"); winEl.textContent = "✦ " + t("perfect","Perfect") + " ✦"; }
    sndWing(); haptic([30,60,30]);
    const flash = $("#seal-flash"); if(flash){ flash.classList.remove("go"); void flash.offsetWidth; flash.classList.add("go"); }
  } else {
    if(winEl){ winEl.classList.add("on"); winEl.textContent = t("wrong_label","Not quite"); }
    sndSeal(); haptic([25,40,25]);
  }
}

// ============== INIT ==============
async function init(){
  loadLocal();

  // Observers
  viewIO = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting && en.intersectionRatio > 0.55){
        markSeen(en.target);
        sndTick();
        // Reset the folio's horizontal pager to page 1 whenever it enters view.
        const pager = en.target.querySelector(".pager");
        if(pager && pager.scrollLeft !== 0){
          pager.scrollLeft = 0;
        }
        // Stop vox narration if we scrolled away from the folio being read.
        if(VOX.slug && VOX.slug !== en.target.dataset.slug) voxStop();
        // auto-render poll tallies for voted polls
        const slug = en.target.dataset.slug;
        if(en.target.dataset.type === "suffragium" && state.votes[slug] !== undefined){
          renderTallies(slug);
        }
        // Rail auto-fade: show on entry, fade after idle.
        wakeRail(en.target);
      } else if(en.intersectionRatio < 0.2){
        // Stop the fade timer for folios that have left view.
        sleepRail(en.target);
      }
    });
  }, { threshold:[0, 0.2, 0.55, 0.9] });


  endIO = new IntersectionObserver(entries=>{
    if(entries.some(e=>e.isIntersecting)) appendSlides(5);
  }, { rootMargin:"800px" });

  // Build initial feed
  order = shuffleFair(pool());
  appendSlides(8);
  renderChips();
  updateRule();
  renderAuthArea();
  updateMenuCounts();

  // Try auth
  await initAuth();

  // ============ EVENT WIRING ============
  const reel = $("#reel");
  reel.addEventListener("click", e=>{
    // Reveal
    const rv = e.target.closest(".q-reveal");
    if(rv){
      const el = document.getElementById(rv.dataset.t);
      if(el){ el.classList.add("open"); rv.style.display = "none"; }
      return;
    }
    // Quaestio answer
    const qo = e.target.closest(".q-opt");
    if(qo){
      const correct = parseInt(qo.dataset.correct, 10);
      const chosen = parseInt(qo.dataset.i, 10);
      const parent = qo.parentElement;
      parent.querySelectorAll(".q-opt").forEach((b,i)=>{
        if(i === correct) b.classList.add("correct");
        else if(i === chosen) b.classList.add("wrong");
        b.disabled = true;
      });
      const ansEl = qo.closest(".sframe").querySelector(".answer");
      if(ansEl) ansEl.classList.add("open");
      if(chosen === correct){ sndSeal(); haptic(12); }
      return;
    }
    // Poll vote
    const po = e.target.closest(".poll-opt");
    if(po){
      vote(po.dataset.slug, parseInt(po.dataset.i, 10));
      return;
    }
    // --- LUDUS MATCH ---
    const lm = e.target.closest(".ludus-match .lm-item:not(.locked)");
    if(lm){ handleMatchTap(lm); return; }
    // --- LUDUS SORT ---
    const ls = e.target.closest(".ludus-sort .ls-item:not(.picked)");
    if(ls){ handleSortTap(ls); return; }
    const lsReset = e.target.closest(".ls-reset");
    if(lsReset){ handleSortReset(lsReset); return; }
    // --- LUDUS VERITAS (real vs fake quote) ---
    const lv = e.target.closest(".ludus-veritas:not(.done) .lv-opt");
    if(lv){ handleVeritasTap(lv); return; }
    // --- LUDUS ATTRIBUTIO (gauntlet) ---
    const la = e.target.closest(".ludus-attrib:not(.done) .la-opt");
    if(la){ handleAttribTap(la); return; }
    const laR = e.target.closest(".la-reset");
    if(laR){ handleAttribReset(laR); return; }
    // --- LUDUS COMPLEMENTUM (fill blank) ---
    const lf = e.target.closest(".ludus-fill:not(.done) .lf-opt");
    if(lf){ handleFillTap(lf); return; }
    // Save/share/vox
    const sv = e.target.closest(".rb.save");
    if(sv){ toggleSave(sv.dataset.slug, false); return; }
    const vx = e.target.closest(".rb.vox");
    if(vx){ voxToggle(vx); return; }
    const sh = e.target.closest(".rb.share");
    if(sh){ shareFolio(sh.dataset.slug); return; }
    // YouTube upgrade
    const yt = e.target.closest(".lite-yt");
    if(yt){ upgradeYT(yt); return; }
    // Double-tap
    handleTap(e);
  });

  // Floating hamburger — the only visible chrome; opens the drawer directly.
  // Stop propagation so the document-level "tap outside closes" handler can't
  // see this same event and close the menu we just opened.
  const fm = $("#float-menu");
  if(fm){
    fm.addEventListener("click", e=>{
      e.stopPropagation();
      openMenu();
    });
    // iOS Safari: a tap during scroll-snap can be eaten; this restores it.
    fm.addEventListener("touchend", e=>{
      e.stopPropagation();
      e.preventDefault();
      openMenu();
    }, {passive:false});
  }

  // Hidden top bar (reachable only inside the drawer via "Change wing" — we keep its buttons wired in case)
  $("#menu-btn").onclick = openMenu;
  $("#profile-btn").onclick = ()=>{
    if(state.user){ openMenu(); }
    else { $("#auth-modal").classList.add("open"); }
  };
  $("#snd-btn").onclick = ()=>{
    state.sound = !state.sound;
    $("#snd-btn").classList.toggle("muted", !state.sound);
    saveLocal();
    if(state.sound) sndSeal();
  };
  if(!state.sound) $("#snd-btn").classList.add("muted");

  // Drawer sound toggle (the one actually reachable since topbar is hidden)
  const drawerSnd = document.getElementById("drawer-snd");
  function refreshDrawerSnd(){
    if(drawerSnd) drawerSnd.textContent = state.sound ? t("menu_sound_on","♪ Sound: on") : t("menu_sound_off","♪ Sound: off");
  }
  refreshDrawerSnd();
  if(drawerSnd) drawerSnd.onclick = ()=>{
    state.sound = !state.sound;
    saveLocal();
    refreshDrawerSnd();
    if(state.sound) sndSeal();
  };
  // Expose so applyI18n can refresh too
  window._refreshDrawerSnd = refreshDrawerSnd;

  // Audio unlock on first gesture
  document.addEventListener("pointerdown", ()=>audio(), {once:true, passive:true});

  // Rail auto-fade: any pointer tap on a slide (or page-pager scroll) wakes
  // its rail back to full opacity and resets its idle timer.
  reel.addEventListener("pointerdown", (e)=>{
    const slide = e.target.closest(".slide");
    if(slide) wakeRail(slide);
  }, {passive:true});
  reel.addEventListener("scroll", ()=>{
    // Horizontal pager scroll inside a slide — wake that slide's rail.
    const slide = document.elementFromPoint(window.innerWidth/2, window.innerHeight/2);
    const parent = slide && slide.closest(".slide");
    if(parent) wakeRail(parent);
  }, {passive:true, capture:true});

  // Menu actions
  $$("#menu .menu-list button").forEach(b=>{
    b.onclick = ()=>{
      const v = b.dataset.view;
      if(v === "reel"){ closeMenu(); closeAllViews(); }
      else openView(v);
      $$("#menu .menu-list button").forEach(x=>x.classList.toggle("active", x===b));
    };
  });

  // View back buttons
  $$(".view .back").forEach(b=> b.onclick = closeAllViews);

  // Drawer faculty filter chips
  const mfg = document.getElementById("menu-fac-grid");
  if(mfg) mfg.addEventListener("click", e=>{
    const c = e.target.closest(".menu-fac"); if(!c) return;
    setFilter(c.dataset.f);
    renderChips();
    closeMenu();
    toast(c.dataset.f === "ALL" ? t("omnia","Omnia — all wings") : FAC[c.dataset.f].name);
  });

  // Auth modal
  $("#send-link").onclick = sendMagicLink;
  $("#auth-skip").onclick = ()=> $("#auth-modal").classList.remove("open");
  $("#email-in").addEventListener("keydown", e=>{ if(e.key === "Enter") sendMagicLink(); });

  // Tap outside menu closes it — must exempt BOTH the hidden-topbar menu-btn
  // and the floating hamburger, or the open() bubbles into this handler and closes it instantly.
  document.addEventListener("click", e=>{
    const menu = $("#menu");
    if(!menu.classList.contains("open")) return;
    if(e.target.closest("#menu")) return;
    if(e.target.closest("#menu-btn")) return;
    if(e.target.closest("#float-menu")) return;
    menu.classList.remove("open");
  });

  // Thesaurus item click: open that folio in the reel.
  $("#thes-list").addEventListener("click", e=>{
    const ti = e.target.closest(".ti");
    if(ti){
      const slug = ti.dataset.slug;
      jumpToFolio(slug);
    }
  });

  initChrome();
  applyI18n();
  renderMenuLang();

  // Launch flow: language → daily topic → onboarding (first time only).
  initLanguageChooser((changed)=>{
    renderChips();
    if(changed) rebuildReel();
    initDailyChooser(()=>{
      initOnboarding(); // shows only on first ever launch
    });
  });

  // Drawer language picker — user can switch mid-session
  const mlg = document.getElementById("menu-lang-grid");
  if(mlg) mlg.addEventListener("click", e=>{
    const b = e.target.closest("button[data-lang]"); if(!b) return;
    const next = b.dataset.lang === "pt" ? "pt" : "en";
    if(next === state.lang){ closeMenu(); return; }
    state.lang = next;
    saveLang();
    applyI18n();
    renderMenuLang();
    renderChips();
    // Rebuild the reel so every slide in view uses the newly selected language.
    // Without this, old slides keep their original language and the app is mixed.
    rebuildReel();
    if(document.querySelector(".view.open")){
      // If a view (Rule / Thesaurus / Wings) is open, re-render it in the new language too
      renderRuleView(); renderThesaurus(); renderWings();
    }
    toast(state.lang === "pt" ? "Idioma: Português" : "Language: English");
    closeMenu();
  });

  // Service worker: on activate, auto-reload the page so new cache takes effect
  if("serviceWorker" in navigator){
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", ()=>{
      if(refreshing) return;
      refreshing = true;
      location.reload();
    });
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  }

  saveLocal();
}

if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
