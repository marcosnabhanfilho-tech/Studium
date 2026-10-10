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
const pad = n => String(n).padStart(2,"0");
const todayKey = d => { d=d||new Date(); return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate()); };
const roman = n => { const m=[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]]; let o=""; for(const [v,s] of m){ while(n>=v){ o+=s; n-=v; } } return o||"·"; };

// ============== STATE ==============
let state = {
  user:null, filter:"ALL",
  seen:{}, saved:{}, votes:{}, dayCount:0,
  sound:true, dirty:{seen:[], saved:[], unsaved:[], votes:[]}
};

const LOCAL_KEY = "studium_local_v1";
function loadLocal(){
  try{ const v = localStorage.getItem(LOCAL_KEY); if(v){ Object.assign(state, JSON.parse(v)); } }catch(e){}
}
function saveLocal(){
  try{ localStorage.setItem(LOCAL_KEY, JSON.stringify({seen:state.seen, saved:state.saved, votes:state.votes, sound:state.sound})); }catch(e){}
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
const sndTick = () => tone(1180, 0, 0.08, 0.04, "triangle");
const sndSeal = () => { tone(660, 0, 0.35, 0.14); tone(990, 0.11, 0.5, 0.1); };
const sndBell = () => { tone(587, 0, 1.4, 0.15); tone(1174, 0, 1.1, 0.05); };
const sndWing = () => { [0,.8,1.6].forEach(d=>{ tone(587,d,1.5,.14); tone(1174,d,1.2,.05); }); };

// ============== HAPTIC ==============
const haptic = n => { if(navigator.vibrate) try{ navigator.vibrate(n); }catch(e){} };

// ============== POOL + ORDER ==============
const POOL = FOLIOS.slice();
let order = [], ptr = 0, seq = 0;

function shuffleFair(arr){
  // Fisher-Yates then nudge same-faculty adjacencies
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  for(let i=1;i<a.length;i++){
    if(a[i].f === a[i-1].f){
      for(let j=i+1;j<a.length;j++){
        if(a[j].f !== a[i-1].f && (i+1>=a.length || a[j].f !== a[i+1].f)){
          [a[i],a[j]]=[a[j],a[i]]; break;
        }
      }
    }
  }
  return a;
}
function pool(){
  return state.filter==="ALL" ? POOL : POOL.filter(f=>f.f===state.filter);
}
function nextFolio(){
  if(ptr >= order.length){ order = shuffleFair(pool()); ptr = 0; }
  return order[ptr++];
}

// ============== FACULTY CHIPS ==============
const FACTOTAL = {};
POOL.forEach(f=>{ FACTOTAL[f.f] = (FACTOTAL[f.f]||0)+1; });

function seenInFaculty(code){
  let n = 0; POOL.forEach(f=>{ if(f.f===code && state.seen[f.slug]) n++; }); return n;
}
function renderChips(){
  const bar = $("#facbar");
  const totalSeen = Object.keys(state.seen).length;
  let html = `<button class="chip ${state.filter==="ALL"?"active":""}" data-f="ALL"><span class="cn">Omnia</span><span class="cp">${totalSeen} / ${POOL.length}</span></button>`;
  for(const k of ["T","F","O","N","P","C","H"]){
    const s = seenInFaculty(k), t = FACTOTAL[k];
    const complete = s>=t;
    html += `<button class="chip ${state.filter===k?"active":""} ${complete?"complete":""}" data-f="${k}"><span class="cn">${FAC[k].name}</span><span class="cp">${s} / ${t}${complete?" ✦":""}</span></button>`;
  }
  bar.innerHTML = html;
}
function setFilter(code){
  if(state.filter === code) return;
  state.filter = code;
  const reel = $("#reel");
  reel.innerHTML = "";
  seq = 0; ptr = 0; order = shuffleFair(pool());
  appendSlides(6);
  renderChips();
  reel.scrollTop = 0;
}

// ============== RAIL ==============
function railHTML(slug){
  const saved = !!state.saved[slug];
  return `<div class="rail">
    <button class="rb save ${saved?"saved":""}" data-slug="${slug}" aria-label="Keep">✦<small>keep</small></button>
    <button class="rb share" data-slug="${slug}" aria-label="Share">↗<small>share</small></button>
  </div>`;
}


function classifyDensity(folio){
  // Heuristic for the short/medium/long typography tiers.
  if(folio.type === "visio" || folio.ytId) return "long";       // videos always long
  if(folio.img) return "medium";                                 // images give structure
  if(folio.type === "quaestio" || folio.type === "exercitium") return "medium";
  if(folio.type === "suffragium") return "medium";
  const body = (folio.body || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
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
    return `<section class="slide ax" data-slug="ax-${seq}" data-type="ax">
      <div class="sframe">
        <div class="ax-lat">${esc(ax[0])}</div>
        <div class="ax-en">${esc(ax[1])}</div>
        <div class="ax-orn">❧ ❧ ❧</div>
      </div>
    </section>`;
  }

  const fac = FAC[folio.f];
  const gold = folio.rare ? " aurum" : "";
  const typLabel = {lectio:"Lectio",opus:"Opus",visio:"Visio",quaestio:"Quaestio",exercitium:"Exercitium",suffragium:"Suffragium"}[folio.type] || folio.type;

  let fig = "";
  if(folio.img){
    fig = `<figure class="s-img pan"><img src="${folio.img}" alt="${esc(folio.title)}" loading="lazy" onerror="this.parentElement.style.display='none'"></figure>`;
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

  let body = `<div class="s-body">${folio.body}</div>`;

  // Quaestio & exercitium: options + reveal
  if(folio.type === "quaestio" && folio.opts){
    body += `<div class="q-opts">`;
    folio.opts.forEach((o,i)=>{
      body += `<button class="q-opt" data-slug="${folio.slug}" data-i="${i}" data-correct="${folio.correct}">${esc(o)}</button>`;
    });
    body += `</div><div class="answer" id="ans-${seq}">${folio.reveal||""}</div>`;
  } else if(folio.type === "exercitium"){
    body += `<div class="reveal-wrap"><button class="btn q-reveal" data-t="ans-${seq}">Reveal</button></div>`;
    if(folio.reveal) body += `<div class="answer" id="ans-${seq}">${folio.reveal}</div>`;
  } else if(folio.reveal){
    body += `<div class="reveal-wrap"><button class="btn q-reveal" data-t="ans-${seq}">Reveal more</button></div>
      <div class="answer" id="ans-${seq}">${folio.reveal}</div>`;
  }

  // Suffragium (poll)
  if(folio.type === "suffragium" && folio.opts){
    const myVote = state.votes[folio.slug];
    body = `<div class="s-body">${folio.body}</div><div class="poll-opts" data-slug="${folio.slug}">`;
    folio.opts.forEach((o,i)=>{
      const mine = myVote === i;
      body += `<button class="poll-opt ${mine?"mine":""}" data-slug="${folio.slug}" data-i="${i}">
        <div class="bar"></div><span class="lbl">${esc(o)}</span><span class="pct"></span>
      </button>`;
    });
    body += `</div>`;
  }

  const density = classifyDensity(folio);
  return `<section class="slide ${density}${gold}" data-slug="${folio.slug}" data-type="${folio.type}" data-fac="${folio.f}">
    <div class="sframe">
      <div class="s-top"><span class="s-fac">${esc(fac.name)}</span><span class="s-typ">${esc(typLabel)}${folio.rare?" · gold leaf":""}</span></div>
      <h2>${esc(folio.title)}</h2>
      ${fig}${body}
      <div class="s-src">— ${esc(folio.src||"")}</div>
    </div>
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
  added.forEach(el=>{ if(el.nodeType===1 && viewIO) viewIO.observe(el); });
  // Keep endIO on the second-to-last slide so append triggers early
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
    toast(FAC[facCode].name + " perlecta ✦ — a wing complete");
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
    toast("The Rule is kept ✦");
    sndBell();
    haptic(40);
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
let lastTap = 0, lastKey = null;
function handleTap(e){
  const slide = e.target.closest(".slide");
  if(!slide || slide.dataset.type === "ax") return;
  if(e.target.closest("button, .lite-yt, .poll-opt, .q-opt")) return;
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
  // Use youtube-nocookie.com — strict-privacy mode, embeds more reliably on some locked videos
  el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
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
  if(!items.length){ list.innerHTML = `<div class="tempty">Nothing kept yet. Double-tap a folio that strikes you.</div>`; return; }
  list.innerHTML = items.map(([slug, s])=>`
    <div class="ti" data-slug="${slug}">
      <div class="ti-fac">${esc(FAC[s.fac].name)}</div>
      <div class="ti-t">${esc(s.title)}</div>
      <div class="ti-s">— ${esc(s.src||"")}</div>
    </div>`).join("");
}
const DEGREES = ["Discipulus","Scholaris","Baccalaureus","Licentiatus","Magister","Doctor"];
function degreeFor(ratio){ return DEGREES[Math.min(Math.floor(ratio * DEGREES.length), DEGREES.length-1)]; }
function renderWings(){
  const list = $("#wings-list");
  let html = "";
  for(const k of ["T","F","O","N","P","C","H"]){
    const s = seenInFaculty(k), t = FACTOTAL[k];
    const ratio = t ? s/t : 0;
    const deg = DEGREES[Math.min(Math.floor(ratio * DEGREES.length), DEGREES.length-1)];
    html += `<div class="wi">
      <div class="wi-h"><div class="wi-n">${esc(FAC[k].name)}</div><div class="wi-p">${s} / ${t}${s>=t?' ✦':''}</div></div>
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
  el.innerHTML = `
    <div class="rule-office">
      <h4>Today's Rule</h4>
      <div class="r-sub">Read ten folios to keep the Rule for today. Lapses are redeemable by double effort within three days — no shame in a missed day.</div>
      <div class="r-prog"><span>${n} / ${RULE_TARGET}</span><span class="r-count">${kept ? "KEPT ✦" : "OPEN"}</span></div>
      <div class="wi-bar" style="margin-top:10px"><div style="width:${pct}%; background:${kept?'var(--gold)':'var(--gold2)'}"></div></div>
    </div>
    <div class="rule-office">
      <h4>The Thesaurus</h4>
      <div class="r-sub">${Object.keys(state.saved).length} folios kept, all time.</div>
    </div>
    <div class="rule-office">
      <h4>The Studium</h4>
      <div class="r-sub">${Object.keys(state.seen).filter(k=>!k.includes(":") && !k.startsWith("_")).length} / ${POOL.length} folios seen, all time.</div>
    </div>
  `;
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
        // auto-render poll tallies for voted polls
        const slug = en.target.dataset.slug;
        if(en.target.dataset.type === "suffragium" && state.votes[slug] !== undefined){
          renderTallies(slug);
        }
      }
    });
  }, { threshold:[0, 0.55, 0.9] });

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
    // Save/share
    const sv = e.target.closest(".rb.save");
    if(sv){ toggleSave(sv.dataset.slug, false); return; }
    const sh = e.target.closest(".rb.share");
    if(sh){ shareFolio(sh.dataset.slug); return; }
    // YouTube upgrade
    const yt = e.target.closest(".lite-yt");
    if(yt){ upgradeYT(yt); return; }
    // Double-tap
    handleTap(e);
  });

  // Top bar
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

  // Audio unlock on first gesture
  document.addEventListener("pointerdown", ()=>audio(), {once:true, passive:true});

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

  // Chip clicks
  $("#facbar").addEventListener("click", e=>{
    const c = e.target.closest(".chip"); if(c) setFilter(c.dataset.f);
  });

  // Auth modal
  $("#send-link").onclick = sendMagicLink;
  $("#auth-skip").onclick = ()=> $("#auth-modal").classList.remove("open");
  $("#email-in").addEventListener("keydown", e=>{ if(e.key === "Enter") sendMagicLink(); });

  // Tap outside menu closes it
  document.addEventListener("click", e=>{
    const menu = $("#menu");
    if(menu.classList.contains("open") && !e.target.closest("#menu") && !e.target.closest("#menu-btn")){
      menu.classList.remove("open");
    }
  });

  // Thesaurus item -> toast its title (future: jump to slide)
  $("#thes-list").addEventListener("click", e=>{
    const ti = e.target.closest(".ti");
    if(ti){
      const slug = ti.dataset.slug;
      // Un-save on long press? For now: show source
      toast(state.saved[slug].title);
    }
  });

  // Service worker
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  }

  saveLocal();
}

if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
