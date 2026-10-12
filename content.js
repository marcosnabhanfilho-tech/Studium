// Studium Generale — content library
// 7 faculties, ~90 folios, mix of lectio/opus/visio/quaestio/exercitium/suffragium/sententia

const FAC = {
  A: {name:"Arsenal", color:"#E6C178"},
  T: {name:"Theologia", color:"#C8515F"},
  F: {name:"Philosophia", color:"#B08D57"},
  O: {name:"Oeconomia", color:"#8FA68E"},
  N: {name:"Negotium", color:"#D4A574"},
  P: {name:"Pulchrum", color:"#C9A6D4"},
  C: {name:"Perceptio", color:"#9DB4C0"},
  H: {name:"Historia", color:"#B5856A"},
  I: {name:"Imagines", color:"#A78BFA"}
};

// ============ I18N — UI strings, EN & PT ============
const I18N = {
  en: {
    appTitle: "Studium Generale",
    motto: "a scroll that forms you",
    chooseLang: "Choose language",
    chooseLangSub: "You can change this anytime from the menu.",
    continue: "Continue",
    dailyGreet: "Studium Generale",
    dailyQ: "What do you want to study today?",
    dailySub: "Pick a wing. You can switch inside the menu whenever you like.",
    dailySkip: "Skip — surprise me",
    today: "Today",
    menu_lectio: "▸ Lectio",
    menu_thesaurus: "✦ Thesaurus",
    menu_wings: "◇ Wings · progress",
    menu_rule: "⚑ The Rule · today",
    menu_about: "¶ About",
    menu_changewing: "Change wing",
    menu_lang: "Language",
    menu_sound_on: "♪ Sound: on",
    menu_sound_off: "♪ Sound: off",
    rail_keep: "keep",
    rail_share: "share",
    rule_title: "Today's Rule",
    rule_sub: "Read ten folios to keep the Rule for today. Lapses are redeemable by double effort within three days — no shame in a missed day.",
    rule_kept: "KEPT ✦",
    rule_open: "OPEN",
    thesaurus_title: "Thesaurus",
    thesaurus_sub: "What you have kept. Double-tap any folio in the Reel to keep it.",
    thesaurus_empty: "Nothing kept yet. Double-tap a folio that strikes you.",
    wings_title: "The Wings",
    wings_sub: "Every folio you have seen is permanently collected. Finish a wing for its degree.",
    thes_the: "The Thesaurus",
    the_studium: "The Studium",
    omnia: "Omnia · all wings",
    seen: "seen",
    today_label: "Today",
    begin: "Begin",
    next: "Next →",
    play_again: "Play again",
    correct_label: "Correct",
    wrong_label: "Not quite",
    perfect: "Perfect",
    final_score: "Your score",
    reveal_more: "Reveal more",
    reveal: "Reveal",
    scroll_to_zoom: "Scroll to look closer →",
    detail: "Detail",
    sign_in_sync: "Sign in to sync",
    sign_out: "Sign out",
    daily_desc_ALL: "Everything — a fair rotation across all wings",
    daily_desc_A:   "Your own essays — Arsenal · verbatim passages from what you wrote",
    daily_desc_T:   "Theologia — Aquinas, Chesterton, Newman, the Church",
    daily_desc_F:   "Philosophia — the questions underneath everything",
    daily_desc_O:   "Oeconomia — Mises, Hayek, Rothbard, time preference",
    daily_desc_N:   "Negotium — Buffett, Munger, finance, operators",
    daily_desc_P:   "Pulchrum — Scruton, Vermeer, Caravaggio, Mozart",
    daily_desc_C:   "Perceptio — Holmes, Doyle, close reading, the trained eye",
    daily_desc_H:   "Historia — Burke, revolutions, the long war",
    daily_desc_I:   "Imagines — read a painting the way they used to be read"
  },
  pt: {
    appTitle: "Studium Generale",
    motto: "um pergaminho que te forma",
    chooseLang: "Escolha o idioma",
    chooseLangSub: "Você pode mudar a qualquer momento pelo menu.",
    continue: "Continuar",
    dailyGreet: "Studium Generale",
    dailyQ: "O que você quer estudar hoje?",
    dailySub: "Escolha uma ala. Pode trocar pelo menu quando quiser.",
    dailySkip: "Pular — me surpreenda",
    today: "Hoje",
    menu_lectio: "▸ Lectio",
    menu_thesaurus: "✦ Thesaurus",
    menu_wings: "◇ Alas · progresso",
    menu_rule: "⚑ A Regra · hoje",
    menu_about: "¶ Sobre",
    menu_changewing: "Trocar de ala",
    menu_lang: "Idioma",
    menu_sound_on: "♪ Som: ligado",
    menu_sound_off: "♪ Som: desligado",
    rail_keep: "guardar",
    rail_share: "compartilhar",
    rule_title: "Regra de Hoje",
    rule_sub: "Leia dez fólios para cumprir a Regra de hoje. Faltas se resgatam com esforço dobrado em três dias — sem vergonha por um dia perdido.",
    rule_kept: "CUMPRIDA ✦",
    rule_open: "ABERTA",
    thesaurus_title: "Thesaurus",
    thesaurus_sub: "O que você guardou. Toque duas vezes em um fólio para guardá-lo.",
    thesaurus_empty: "Nada guardado ainda. Toque duas vezes em um fólio que te atingir.",
    wings_title: "As Alas",
    wings_sub: "Cada fólio visto é coletado para sempre. Termine uma ala para o seu grau.",
    thes_the: "O Thesaurus",
    the_studium: "O Studium",
    omnia: "Omnia · todas as alas",
    seen: "vistos",
    today_label: "Hoje",
    begin: "Começar",
    next: "Próximo →",
    play_again: "Jogar de novo",
    correct_label: "Certo",
    wrong_label: "Não é bem isso",
    perfect: "Perfeito",
    final_score: "Sua pontuação",
    reveal_more: "Revelar mais",
    reveal: "Revelar",
    scroll_to_zoom: "Role para olhar mais de perto →",
    detail: "Detalhe",
    sign_in_sync: "Entrar para sincronizar",
    sign_out: "Sair",
    daily_desc_ALL: "Tudo — um rodízio justo entre todas as alas",
    daily_desc_A:   "Seus próprios ensaios — Arsenal · passagens dos textos que você escreveu",
    daily_desc_T:   "Theologia — Aquino, Chesterton, Newman, a Igreja",
    daily_desc_F:   "Philosophia — as perguntas por baixo de tudo",
    daily_desc_O:   "Oeconomia — Mises, Hayek, Rothbard, preferência temporal",
    daily_desc_N:   "Negotium — Buffett, Munger, finanças, operadores",
    daily_desc_P:   "Pulchrum — Scruton, Vermeer, Caravaggio, Mozart",
    daily_desc_C:   "Perceptio — Holmes, Doyle, leitura atenta, o olho treinado",
    daily_desc_H:   "Historia — Burke, revoluções, a longa guerra",
    daily_desc_I:   "Imagines — leia um quadro como se lia antigamente"
  }
};

// Public-domain painting URLs via Wikimedia Commons Special:FilePath
const FP = "https://commons.wikimedia.org/wiki/Special:FilePath/";
const IMG = {
  vermeer_balance: FP+"Johannes_Vermeer_-_Woman_Holding_a_Balance_-_Google_Art_Project.jpg?width=1200",
  vermeer_milkmaid: FP+"Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg?width=1200",
  caravaggio_matthew: FP+"The_Calling_of_Saint_Matthew-Caravaggo_(1599-1600).jpg?width=1200",
  caravaggio_thomas: FP+"Caravaggio_-_The_Incredulity_of_Saint_Thomas.jpg?width=1200",
  fra_angelico_annunciation: FP+"ANGELICO,_Fra_Annunciation,_1437-46_(2236990916).jpg?width=1200",
  giotto_lamentation: FP+"Giotto_-_Scrovegni_-_-36-_-_Lamentation_(The_Mourning_of_Christ).jpg?width=1200",
  van_eyck_arnolfini: FP+"Van_Eyck_-_Arnolfini_Portrait.jpg?width=1200",
  van_eyck_ghent: FP+"Lamgods_open.jpg?width=1200",
  botticelli_primavera: FP+"Botticelli-primavera.jpg?width=1200",
  raphael_athens: FP+"%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg?width=1400",
  michelangelo_adam: FP+"Michelangelo_-_Creation_of_Adam_(cropped).jpg?width=1400",
  friedrich_wanderer: FP+"Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg?width=1200",
  turner_temeraire: FP+"Turner,_J._M._W._-_The_Fighting_Téméraire_tugged_to_her_last_Berth_to_be_broken.jpg?width=1400",
  chardin_grace: FP+"Jean_Siméon_Chardin_-_Saying_Grace_-_WGA04769.jpg?width=1200",
  canaletto_venice: FP+"Canaletto_-_Bucintoro_at_the_Molo_on_Ascension_Day_-_WGA03883.jpg?width=1400",
  mozart: FP+"Wolfgang-amadeus-mozart_1.jpg?width=800",
  aquinas: FP+"St-thomas-aquinas.jpg?width=800",
  augustine: FP+"Sandro_Botticelli_050.jpg?width=800",
  paget_holmes: FP+"Paget_holmes.png?width=900",
  massys_moneylender: FP+"Quinten_Massijs_(I)_-_The_Moneylender_and_his_Wife_-_WGA14281.jpg?width=1200",
  chartres: FP+"Chartres_1.jpg?width=1400",
  notre_dame: FP+"Notre-Dame_de_Paris_2013-07-24.jpg?width=1400",
  chesterton: FP+"GKChesterton.jpg?width=800",
  mises: FP+"Ludwig_von_Mises.jpg?width=800",
  hayek: FP+"Friedrich_Hayek_portrait.jpg?width=800",
  buffett: FP+"Warren_Buffett_KU_Visit.jpg?width=800",
  newman: FP+"CardinalNewmanJEMillais.jpg?width=800"
};

// Curated YouTube videos — channel-page vouched, no API quota needed
// Each video: {id, short:true} = vertical YouTube Short (embeds reliably)
//              {id, short:false} = regular 16:9 video
// Shorts almost always allow embedding; full-length third-party uploads often don't.
const YT = {
  // Bishop Barron — official shorts
  barron_short1: {id:"zYK_Wr3T5Y0", short:true},     // "Nothing but you, Lord"
  barron_short2: {id:"HqCwXfB49JI", short:true},     // "You're Not in Control" w/ Fr. Mike
  // Jordan Peterson Shorts
  peterson_resp: {id:"MWvb9bvNXFE", short:true},     // Take responsibility for your life
  peterson_adv:  {id:"UUPsCyLzQNA", short:true},     // Responsibility is Adventure
  // Jonathan Pageau — full video (lectio-type long form)
  pageau_fairy:    {id:"2hPjpyRrlyk", short:true},   // Fairy tales are TRUE?
  // Fr. Mike Schmitz / Ascension short
  mike_imitation:  {id:"-X6do4iM5AY", short:true},   // Imitation of Christ series tease
  // Matt Fradd (Pints with Aquinas) short
  pints_name:      {id:"b6l4_1LNpsc", short:true}    // How Pints with Aquinas got its name
};

const AXIOMS = [
  ["Nulla dies sine linea","No day without a line — attributed to the painter Apelles."],
  ["Age quod agis","Do what you are doing — attend fully to the thing in front of you."],
  ["Festina lente","Make haste slowly — Augustus's motto."],
  ["Ora et labora","Pray and work — the Benedictine Rule."],
  ["Corruptio optimi pessima","The corruption of the best is the worst."],
  ["Agere sequitur esse","Acting follows being — a thing acts according to what it is."],
  ["Bonum est diffusivum sui","The good pours itself out."],
  ["Per crucem ad lucem","Through the cross, to the light."],
  ["Sapientis est ordinare","It belongs to the wise man to set things in order. — St. Thomas"],
  ["Credo ut intelligam","I believe so that I may understand. — St. Anselm"],
  ["Fides quaerens intellectum","Faith seeking understanding."],
  ["Respice finem","Look to the end."],
  ["Memento mori","Remember you must die."],
  ["Verbum Domini manet in aeternum","The Word of the Lord endures forever."],
  ["Amor meus, pondus meum","My love is my weight — Augustine."],
  ["Nemo dat quod non habet","No one gives what he does not have."]
];

// ================================================================
// THE FOLIOS — the content
// ================================================================
const FOLIOS = [

// =============== THEOLOGIA ===============
{slug:"restless-heart", type:"lectio", f:"T", rare:1, title:"The Restless Heart",
 body:`<blockquote>Thou hast made us for Thyself, O Lord, and our heart is restless until it rests in Thee.</blockquote>
<p>Augustine puts the entire argument of the <em>Confessions</em> into its first paragraph. The rest of the book is evidence — thirteen volumes of a man trying every other resting place.</p>
<p>Notice the tense: not <em>will make</em>. <em>Hast made</em>. The restlessness is design, not defect.</p>`,
 src:"Augustine, Confessions I.1 (Pusey tr.)", img:IMG.augustine},

{slug:"five-ways", type:"lectio", f:"T", title:"The Five Ways, in one breath",
 body:`<p>Aquinas offers five converging arguments for God's existence — none a probability guess, each a demonstration from a feature of the world no one denies:</p>
<p><strong>Motion</strong>: change requires a first unmoved mover. <strong>Causality</strong>: a chain of efficient causes requires a first cause. <strong>Contingency</strong>: things that can not-be require something that must be. <strong>Degrees</strong>: better and worse imply a best, source of all perfection. <strong>Governance</strong>: unintelligent things acting toward ends imply an ordering intelligence.</p>
<p>If any one holds, the Christian God is in reach of reason.</p>`,
 src:"St. Thomas Aquinas, Summa Theologiae I, q.2, a.3", img:IMG.aquinas},

{slug:"q-first-mover", type:"quaestio", f:"T",
 title:"Can an arrow aim itself?",
 body:`<p>Aquinas writes: <em>things which lack intelligence act for an end, as the arrow is directed by the archer.</em> Does the Fifth Way require that natural things <em>have minds</em>?</p>`,
 opts:["Yes — teleology implies the thing itself knows its end","No — direction can be received from an intellect outside it"],
 correct:1,
 reveal:`<p>The acorn need not know the oak; it must be <em>ordered</em> to it. The question then becomes: ordered by whom?</p><p>Aquinas's distinction is between <em>intention</em> (which only minds have) and being <em>intended toward</em> (which non-minds can be). The arrow does not know the target. The archer does.</p>`,
 src:"Summa Theologiae I, q.2, a.3"},

{slug:"accidents-remain", type:"quaestio", f:"T",
 title:"Why do the accidents remain?",
 body:`<p>At the consecration, the whole substance of bread becomes the Body of Christ. Yet the appearances — taste, weight, color — remain unchanged. Why would God leave the senses unrelieved?</p>`,
 opts:["To test faith","To make the sacrament a permanent school of the primacy of intellect over sensation","Because God cannot change accidents without changing substance"],
 correct:1,
 reveal:`<p>Substance is <em>what</em> a thing is; accidents are <em>how it appears</em>. In the Eucharist, substance changes and accidents are miraculously sustained. Aquinas's hymn says it plainly: <em>visus, tactus, gustus in te fallitur</em> — sight, touch and taste are deceived, and faith alone reaches what is truly there.</p><p>The sacrament is thus a daily lesson: reality is not what hits the senses first.</p>`,
 src:"cf. Summa Theologiae III, q.75; Adoro te devote"},

{slug:"grace-perfects-nature", type:"lectio", f:"T", title:"Grace does not destroy nature",
 body:`<blockquote>Gratia non tollit naturam, sed perficit.</blockquote>
<p>Grace does not destroy nature, but perfects it. In one line, the whole Catholic answer to the Reformation debate about pure nature versus total depravity, to the Enlightenment's suspicion of the supernatural, and to the modern suspicion that holiness makes a man less human.</p>
<p>Grace makes the man more himself, not less.</p>`,
 src:"St. Thomas Aquinas, Summa Theologiae I, q.1, a.8 ad 2"},

{slug:"orthodoxy-tradition", type:"lectio", f:"T", title:"Votes for the Dead",
 body:`<blockquote>Tradition means giving votes to the most obscure of all classes, our ancestors. It is the democracy of the dead.</blockquote>
<p>Chesterton's trick: he wins the argument for tradition on democracy's own terms. If universal suffrage is good, why should being dead disqualify you?</p>`,
 src:"G. K. Chesterton, Orthodoxy, ch. IV (1908)", img:IMG.chesterton},

{slug:"madman-circle", type:"lectio", f:"T", rare:1, title:"The Madman's Circle",
 body:`<blockquote>The madman is not the man who has lost his reason. The madman is the man who has lost everything except his reason.</blockquote>
<p>A diagnosis of the paranoiac that applies to every totalizing theory: perfectly consistent, perfectly closed, explaining everything by ignoring most things.</p>
<p>The sane mind is larger than its own logic. It keeps a window open to what it has not yet understood.</p>`,
 src:"G. K. Chesterton, Orthodoxy, ch. II (1908)", img:IMG.chesterton},

{slug:"john-prologue", type:"lectio", f:"T", title:"In the beginning was the Word",
 body:`<blockquote>In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.</blockquote>
<p>In the beginning was the Word, and the Word was with God, and the Word was God. All things were made by him; and without him was made nothing that was made. In him was life, and the life was the light of men. And the light shineth in darkness, and the darkness did not comprehend it.</p>`,
 src:"John 1:1–5 (Douay-Rheims)"},

{slug:"newman-difficulties", type:"lectio", f:"T", title:"Ten thousand difficulties",
 body:`<blockquote>Ten thousand difficulties do not make one doubt.</blockquote>
<p>Newman's distinction is pastoral and precise: a difficulty is a question the mind cannot yet resolve. Doubt is a withholding of assent. One can live with the first for a lifetime. The second corrodes.</p>
<p>He is answering the Protestant assumption that an unanswered objection is grounds to leave. It is not; it is grounds to study.</p>`,
 src:"J. H. Newman, Apologia Pro Vita Sua, ch. V", img:IMG.newman},

{slug:"faith-seeking", type:"quaestio", f:"T",
 title:"Credo ut intelligam — is it circular?",
 body:`<p>Anselm's motto: <em>I believe so that I may understand</em>. The modern objection: shouldn't understanding come <em>first</em>, so belief can be justified?</p>`,
 opts:["Yes, Anselm has it backwards","No — all serious knowledge works this way","Yes, but it's a useful psychological trick"],
 correct:1,
 reveal:`<p>Consider: the scientist believes the world is intelligible before he can prove it. The student trusts the teacher before he can verify him. A friendship cannot be audited from outside it.</p><p>Faith is not the suspension of reason, but the condition under which reason gets access to its greatest objects.</p>`,
 src:"St. Anselm, Proslogion"},

{slug:"rcr-waves", type:"lectio", f:"T", title:"Three Waves of One Process",
 body:`<p>Corrêa de Oliveira's thesis: the crisis of the West is not a series of accidents but one process, centuries long, driven by disordered pride and sensuality, unfolding in three great waves.</p>
<p>The <strong>sixteenth-century religious rupture</strong>. The <strong>French Revolution</strong>. <strong>Communism</strong>. Each wave secularizes what the previous one had loosened. Each presents itself as liberation.</p>
<p>The response, therefore, cannot be piecemeal either. A counter-revolution is the restoration of order <em>at its root</em> — in souls first, then in culture, then in institutions.</p>`,
 src:"after Plinio Corrêa de Oliveira, Revolution and Counter-Revolution (1959)"},

// =============== PHILOSOPHIA ===============
{slug:"first-sentence", type:"lectio", f:"F", title:"The first sentence of philosophy",
 body:`<blockquote>All men by nature desire to know.</blockquote>
<p>Aristotle's evidence is disarming: the delight we take in the senses for their own sake. Not just when they're useful — when they're useless. We look because looking is good.</p>
<p>Curiosity is not survival that overshot. It is the signature of a rational nature. Your presence in this reel is Exhibit A.</p>`,
 src:"Aristotle, Metaphysics I.1 (980a)", img:IMG.raphael_athens},

{slug:"act-potency", type:"lectio", f:"F", title:"How Aristotle Saved Reality",
 body:`<p>An ancient Greek named Parmenides argued that change can't happen. Think about it: something either <em>is</em> or <em>isn't</em>. If it is, it already exists — no change needed. If it isn't, nothing comes from nothing. So change is an illusion.</p>
<p>Greek philosophy choked on this for a century.</p>
<p>Aristotle's fix: there's a middle category — <em>potency</em>. An acorn isn't an oak. But it's not <em>nothing</em> relative to oak-ness either. It <em>can become</em> one. Change is just potential being realized.</p>
<p>One idea. The world is intelligible again. Everything — a plant growing, you learning, grace working — fits.</p>`,
 src:"Aristotle, Physics I; Aquinas, De Principiis Naturae"},

{slug:"four-causes", type:"lectio", f:"F", title:"The Four Causes of a Statue",
 body:`<p>Why is there a statue? Four irreducible answers.</p>
<p><strong>Material</strong>: because there is bronze. <strong>Formal</strong>: because the bronze has this shape and not another. <strong>Efficient</strong>: because a sculptor worked it. <strong>Final</strong>: because someone wished to honor a general.</p>
<p>Modern science kept the first and third and dropped the fourth. Then spent centuries surprised that questions of purpose kept returning through the window.</p>
<p>To explain fully is to give all four.</p>`,
 src:"Aristotle, Physics II.3"},

{slug:"transcendentals", type:"lectio", f:"F", title:"Why Evil Isn't a Thing",
 body:`<p>Here's a wild claim from Aquinas: every single thing that exists is <strong>one</strong> (it's itself), <strong>true</strong> (you can know it), and <strong>good</strong> (you'd want it, correctly understood). Many add <strong>beautiful</strong> too.</p>
<p>These aren't properties <em>added</em> to things. They're the same as <em>being</em>, seen from different angles. The more something <em>is</em>, the more it's all four.</p>
<p>The payoff: evil doesn't actually exist. It's a <em>hole</em> in something good. Darkness isn't a thing — it's just missing light. Blindness isn't an organ — it's a missing one. All evil is a lack. That's why the devil can't create anything, only corrupt.</p>`,
 src:"Aquinas, De Veritate q.1; Summa I, q.5"},

{slug:"q-non-contradiction", type:"quaestio", f:"F",
 title:"Prove the Principle of Non-Contradiction",
 body:`<p>Nothing can both be and not be, in the same respect, at the same time. Everything you know depends on it. Now — can you prove it?</p>`,
 opts:["Yes, by direct demonstration","No, and that is a defect","No, but it can be defended by retorsion"],
 correct:2,
 reveal:`<p>Aristotle: every proof presupposes it, so any proof would be circular. But it is <em>defended</em> by retorsion — ask the denier to say something.</p><p>The moment he asserts anything, including his denial, he intends it to be true rather than false, and has used the principle. First principles are not conclusions; they are the ground one must stand on even to dig.</p>`,
 src:"Aristotle, Metaphysics IV"},

{slug:"newman-notional", type:"lectio", f:"F", title:"Notional vs Real Assent",
 body:`<p>Newman's distinction, which quietly rebuilds the philosophy of mind:</p>
<p><strong>Notional</strong> assent grasps propositions — accurate, pale, inert. A man holds the notion that death is certain and lives as if it weren't.</p>
<p><strong>Real</strong> assent grasps <em>things</em> — concrete, imaginative, and it moves the whole person. The same truth, made real, reorders a life.</p>
<p>The aim of education, then, is not more notions but the conversion of notions into realities. Which is why literature, liturgy and biography teach what syllogisms alone cannot.</p>`,
 src:"J. H. Newman, Grammar of Assent (1870)"},

{slug:"chestertons-fence", type:"lectio", f:"F", title:"Chesterton's Fence",
 body:`<p>A reformer finds a fence across a road and, seeing no use for it, moves to clear it away. The wiser man stops him:</p>
<blockquote>If you don't see the use of it, I certainly won't let you clear it away. Go away and think. Then, when you can come back and tell me that you do see the use of it, I may allow you to destroy it.</blockquote>
<p>Institutions are fences — the accumulated reasons of the dead, often no longer legible on the surface. The principle does not forbid reform. It forbids reform by ignorance.</p>`,
 src:"after G. K. Chesterton, The Thing (1929)", img:IMG.chesterton},

{slug:"anscombe", type:"quaestio", f:"F",
 title:"Anscombe's Question",
 body:`<p>You knock over a glass. You sign a contract. Both are events caused by your body. What makes only one of them an <em>action</em> — something you did, for which you answer?</p>`,
 opts:["Deliberation preceded it","It had foreseeable consequences","The question 'Why?' asks for a reason, not a cause"],
 correct:2,
 reveal:`<p>Anscombe's criterion: intentional actions are those to which the question <em>Why?</em> — asking for a reason, not a cause — has application.</p><p>The contract has an answer (<em>to close the deal</em>). The spilled glass has only a mechanism. Responsibility, praise, blame, sin and merit all live inside the territory this small question marks out.</p>`,
 src:"G. E. M. Anscombe, Intention (1957)"},

{slug:"essence-existence", type:"lectio", f:"F", title:"Why Anything Exists",
 body:`<p>You can perfectly describe a <em>phoenix</em> — fiery, immortal, reborn from ash — while knowing none exist. So <em>what something is</em> is one thing. <em>Whether it exists</em> is another.</p>
<p>Now the kicker: this is true of you too. Nothing about <em>what</em> you are — human, male, 20, Catholic — explains <em>that</em> you are. Existence was handed to you.</p>
<p>Aquinas: only one being doesn't need existence handed to it. The one whose essence <em>is</em> to exist. Everything else is held in being right now, like a song held in a voice. Stop singing, song's gone.</p>`,
 src:"Aquinas, De Ente et Essentia"},

{slug:"square-opposition", type:"exercitium", f:"F", title:"The Square of Opposition",
 body:`<p>Four sentence forms rule all reasoning. Can you tell which pairs do what?</p>
<p><strong>A</strong>: all S is P. <strong>E</strong>: no S is P. <strong>I</strong>: some S is P. <strong>O</strong>: some S is not P.</p>
<p>If A is true, which is false? If I is false, which is true? If someone refutes <em>all markets are efficient</em>, have they shown <em>no market is</em>?</p>`,
 reveal:`<p>A and O are <strong>contradictories</strong> — exactly one is true. Same for E and I. A and E are <strong>contraries</strong> — both can be false, never both true.</p><p>Half of bad arguing treats a contrary as a contradictory. Refuting "all markets are efficient" does not establish "no market is". The square makes the error visible at a glance.</p>`,
 src:"Aristotle, De Interpretatione; the scholastic tradition"},

{slug:"madman-poll", type:"suffragium", f:"F",
 title:"MacIntyre's Thesis",
 body:`<p>MacIntyre: we no longer possess a shared moral vocabulary — only fragments of a lost scheme that still sound like reasoning but no longer settle anything. "Rights" vs "utility" vs "fairness" circle without ever converging.</p><p>Does the diagnosis fit the public argument you see?</p>`,
 opts:["Yes — exactly what I observe","Partly — but there is still common ground","No — people reach moral agreement all the time"]},

// =============== OECONOMIA (Austrian) ===============
{slug:"human-action", type:"lectio", f:"O", title:"Human Action",
 body:`<p>Mises's whole system in one line:</p>
<blockquote>Human action is purposeful behavior.</blockquote>
<p>It is not a definition anyone can argue with — to argue it is to act purposefully. Praxeology begins where that fact ends: from <em>action</em> alone, deduce the laws of economics without needing a single statistical regression.</p>
<p>Modern economics forgot this. It began studying men as if they were weather.</p>`,
 src:"Ludwig von Mises, Human Action (1949), ch. I", img:IMG.mises},

{slug:"knowledge-society", type:"lectio", f:"O", rare:1, title:"The Knowledge Problem",
 body:`<blockquote>The economic problem of society is not merely a problem of how to allocate "given" resources — if "given" is taken to mean given to a single mind which deliberately solves the problem set by these "data".</blockquote>
<p>Hayek's claim: the knowledge needed to run an economy <em>does not exist in any one place</em>. It is dispersed — the butcher knows his cuts, the farmer his fields, the shipping clerk his routes. No central authority can gather it, because much of it is tacit and perishable.</p>
<p>The price system is a <em>communication system</em>: it tells the farmer that copper is scarce in a factory he's never heard of, by making wire more expensive. Socialism's defect is not moral; it is epistemic.</p>`,
 src:"F. A. Hayek, 'The Use of Knowledge in Society' (1945)", img:IMG.hayek},

{slug:"calculation-problem", type:"lectio", f:"O", title:"Why Central Planning Fails",
 body:`<p>Picture this: you're the central planner. An orphanage needs beds. Easy — order a thousand beds.</p>
<p>But <em>what kind</em>? Pine? Steel? Plastic? You have no prices for any of it, because the government owns all the lumber mills, steel plants, factories. So you have no way to know which raw material is scarcer, more valuable, better used elsewhere.</p>
<p>Mises saw this in 1920. He said: without prices, socialism isn't just inefficient — it's <em>blind</em>. The 20th century ran the experiment with millions of lives. He was right.</p>`,
 src:"Mises, Economic Calculation in the Socialist Commonwealth (1920)"},

{slug:"q-cantillon", type:"quaestio", f:"O",
 title:"Who gets the new money first?",
 body:`<p>The central bank creates $100 billion. Prices eventually rise. But <em>who spends the new money before prices adjust</em>, and who holds the old money when they do?</p>`,
 opts:["Everyone, roughly equally","First recipients benefit; late recipients and savers lose","Only lenders"],
 correct:1,
 reveal:`<p>Richard Cantillon noticed this in 1730. New money enters at specific points — banks, government contractors, financial-asset holders. They spend <em>before</em> the general price level rises.</p>
<p>The grocery clerk and the pensioner spend the new money <em>after</em> prices have risen. The transfer is invisible, but it is a transfer. This is the Cantillon effect, and it explains more of the last forty years of inequality than any tax policy.</p>`,
 src:"Richard Cantillon, Essai sur la nature du commerce (c. 1730)"},

{slug:"broken-window", type:"lectio", f:"O", title:"The Broken Window",
 body:`<p>A boy throws a brick through a baker's window. Onlookers console the baker: the glazier will have work, and his payment will circulate. Was the vandalism, perhaps, a public good?</p>
<p>Bastiat's answer, which Hazlitt rebuilt into a whole book: look at <em>what the baker would otherwise have done</em> with that money. Perhaps bought a suit. The tailor is now <em>out</em> a suit's worth of work. The glazier gained; the tailor lost; society as a whole has one fewer window.</p>
<blockquote>The art of economics consists in looking not merely at the immediate but at the longer effects of any act or policy; it consists in tracing the consequences of that policy not merely for one group but for all groups.</blockquote>`,
 src:"Hazlitt, Economics in One Lesson (1946); after Bastiat"},

{slug:"menger-water", type:"quaestio", f:"O",
 title:"Water or diamonds?",
 body:`<p>Water is essential to life. Diamonds are useless. Yet diamonds cost a fortune and water is free. Classical economics (Smith, Ricardo, Marx) could not explain this without inventing categories like "exchange value" vs "use value".</p><p>What explains it?</p>`,
 opts:["Labor theory of value — diamonds take more labor","Marginal utility — we value the next unit, not the category","Scarcity alone"],
 correct:1,
 reveal:`<p>Menger (1871): we never choose <em>water in general</em> vs <em>diamonds in general</em>. We choose the <em>next unit</em>. The 100th gallon of water is worth almost nothing to you. The first diamond is worth a great deal.</p><p>Value is subjective and marginal. One insight dissolved a century of confusion and birthed the Austrian school.</p>`,
 src:"Carl Menger, Principles of Economics (1871)"},

{slug:"time-preference", type:"lectio", f:"O", title:"Time Preference",
 body:`<p>All else equal, a man prefers satisfaction now to satisfaction later. This is not a bias to be corrected. It is a fact of being a creature with a finite life.</p>
<p>The interest rate, Böhm-Bawerk argued, is the <em>price of time</em> — what the lender demands for postponing his use of resources. Suppress it artificially and you lie to the whole economy about how patient it can afford to be.</p>
<p>Project financed, factories built, careers chosen on the premise of cheap time — and the premise was false. This is Austrian business cycle theory in a paragraph.</p>`,
 src:"Böhm-Bawerk, Capital and Interest; Mises, Theory of Money and Credit"},

{slug:"rule-72", type:"lectio", f:"O", title:"The Rule of 72",
 body:`<p>Years to double your money ≈ 72 ÷ annual percentage return.</p>
<p>At 8%, nine years. At 6%, twelve. At 3%, twenty-four. Run it long: at 8%, money doubles roughly five times in 45 years. Thirty-two-fold.</p>
<p>The rule's real lesson is not arithmetic but temperament. The last doubling creates more wealth than all previous combined, and it only arrives for the investor who did nothing rash for four decades.</p>
<p>Compounding pays patience, and only patience.</p>`,
 src:"financial folklore; the math is Einstein's whether he said it or not"},

{slug:"salamanca-poll", type:"suffragium", f:"O",
 title:"Scholastics and Austrians",
 body:`<p>The School of Salamanca — sixteenth-century Spanish Jesuits and Dominicans like Molina, Mariana and de Soto — defended the just price as "the common market price", argued against currency debasement, and anticipated subjective-value theory by three centuries.</p><p>Were they proto-Austrians?</p>`,
 opts:["Yes — subjective value in a cassock","Partly — but they kept moral limits Mises didn't","No — the Austrians would reject their natural-law framework"]},

// =============== NEGOTIUM (finance, strategy, decision) ===============
{slug:"tvm", type:"lectio", f:"N", title:"Time Value: the one idea under everything",
 body:`<p>A dollar today is worth more than a dollar next year — because today's dollar can be put to work.</p>
<p>All of finance is this one sentence applied with discipline. <strong>Discounting</strong> converts future cash into present value. <strong>Compounding</strong> runs the film forward. Every valuation, every bond price, every pension, every "should I take the money now or later" is the same computation in different clothes.</p>
<p>Master the mechanics until they are reflex. The analyst who hasn't is reasoning with his gut while pretending otherwise.</p>`,
 src:"foundations · TVM", img:IMG.massys_moneylender},

{slug:"q-three-statements", type:"quaestio", f:"N",
 title:"How do the three statements link?",
 body:`<p>Income statement, balance sheet, cash flow statement. Analysts who cannot trace one dollar across all three are reading three rumors, not one set of accounts. What is the thread?</p>`,
 opts:["They don't — each covers a different question","Net income → retained earnings → opens the cash flow statement → reconciles to the balance sheet's cash line","Only cash flow matters"],
 correct:1,
 reveal:`<p>Net income flows from the income statement to retained earnings on the balance sheet. It also opens the cash flow statement, which reconciles accounting profit to actual cash by adjusting for non-cash items (depreciation) and working-capital changes.</p><p>The result explains the change in the cash line of the balance sheet. Three statements, one story. If they don't tie, something is wrong — with the books, or with your reading.</p>`,
 src:"financial statements · the integration check"},

{slug:"second-level", type:"quaestio", f:"N",
 title:"Can You Lose Money on a 'Great' Company?",
 body:`<p>Here's a trick question. Everyone agrees Company X is wonderful. Best brand, best moat, best management. It trades at 60× earnings. Your buddy says "obvious buy." Howard Marks says: that's <em>first-level</em> thinking. What's the real question?</p>`,
 opts:["Is it a great company?","Is it <em>better</em> than the price already assumes?","Will the stock go up?"],
 correct:1,
 reveal:`<p>Your returns don't come from the company being great. They come from the <em>gap</em> between what reality turns out to be and what the market already expects.</p>
<p>If everyone thinks it's wonderful and prices it accordingly, you need it to be <em>even better</em> than wonderful to make money. Meanwhile a mediocre company priced for the apocalypse can double if things turn out just OK.</p>
<p>Quality is real. The market just makes you pay for it in advance.</p>`,
 src:"after Howard Marks, The Most Important Thing"},

{slug:"mr-market", type:"lectio", f:"N", title:"Mr. Market",
 body:`<p>Ben Graham's fable, which Buffett calls the most important investing passage ever written:</p>
<p>Imagine you own a share of a private business with a partner, Mr. Market. Every day he comes to you with a price at which he will buy your share or sell you his. On most days his price is reasonable. On some days he is euphoric and quotes a ridiculously high price. On others he is despairing and offers to sell you his share for pennies.</p>
<p>You are not obligated to trade. You can simply let him speak and go about your business. His moods are an <em>opportunity</em>, not an authority.</p>
<p>The investor who treats the market as a scoreboard has it backwards. The market is a servant, not a guide.</p>`,
 src:"Benjamin Graham, The Intelligent Investor, ch. 8", img:IMG.buffett},

{slug:"invert", type:"lectio", f:"N", title:"Invert, always invert",
 body:`<p>Munger's favorite tool, taken from the mathematician Jacobi.</p>
<p>Asked "how do I make my company great?", most managers list the ways to succeed. Munger would invert: <em>how do I guarantee it fails?</em> The answers come faster and are often more useful. Hire for comfort, not competence. Punish messengers of bad news. Ignore your base rate. Diversify randomly. Chase last year's winner.</p>
<p>The negative paths to the goal are often clearer than the positive ones. "Avoid these" turns out to be most of the strategy.</p>`,
 src:"Charles T. Munger, Poor Charlie's Almanack"},

{slug:"q-why-equity-costs-more", type:"quaestio", f:"N",
 title:"Why Does Equity Cost More Than Debt?",
 body:`<p>Walk up to any CFO: "cost of equity > cost of debt" — they'll agree instantly. But <em>why</em>? Same company, same cash flows, same risk from the outside. Why do shareholders demand more than lenders?</p>`,
 opts:["Stocks are riskier in general — intuition","Shareholders get paid last if things go bad","Taxes"],
 correct:1,
 reveal:`<p>Lenders have a <em>contract</em>: here's your coupon, here's your repayment date, and if the company goes bankrupt, you get paid first out of what's left.</p>
<p>Shareholders have no contract. They get whatever is <em>left over</em> after everyone else is paid. If nothing's left — they get nothing. Same company, same cash flows, but all the variance lands on them.</p>
<p>More risk → demand more return. Plus interest is tax-deductible, dividends aren't, so debt is doubly cheaper. Until you borrow too much and both claims get riskier.</p>`,
 src:"cost of capital"},

{slug:"risk-not-vol", type:"lectio", f:"N", title:"Risk is not volatility",
 body:`<p>Textbooks measure risk as standard deviation. But a price that swings on the way to doubling has hurt no one who didn't sell.</p>
<p>The real risks are two: <strong>permanent capital loss</strong>, and <strong>failing to meet an obligation when it comes due</strong>. Volatility only becomes risk when it forces your hand — through leverage, through fear, through needing the money now.</p>
<p>The investor's first risk control is not a formula but a structure: no leverage, cash for near needs, and a temperament that treats declines as weather.</p>`,
 src:"after Howard Marks, Buffett"},

{slug:"base-rates", type:"lectio", f:"N", title:"Base rates, or Bayes for investors",
 body:`<p>Before the pitch, the prior.</p>
<p>Most startups fail. Most acquisitions destroy acquirer value. Most actively-managed funds trail the index after fees. A vivid story — the founder, the synergy, the streak — is <em>evidence</em>. Evidence should <em>update</em> the base rate, not replace it.</p>
<p>The discipline is mechanical: write the base rate down <em>first</em>, then ask how strong this specific evidence really is against it.</p>
<p>Most financial folly is base-rate neglect with good production values.</p>`,
 src:"probability · after Kahneman, Tetlock"},

{slug:"poll-ergodic", type:"suffragium", f:"N",
 title:"The Ergodicity Trap",
 body:`<p>Taleb: if a bet has positive expected value but risks ruin, taking it repeatedly is <em>not</em> rational — because ruin is absorbing. Russian roulette with six chambers and $6 million for a pull has +EV. Would you play?</p>`,
 opts:["Once, maybe","Never — ruin is not a drawdown","Yes, if the expected value is positive"]},

// =============== PULCHRUM ===============
{slug:"vermeer-balance", type:"opus", f:"P", rare:1, title:"Vermeer: Woman Holding a Balance",
 body:`<p>Pull this up and look slowly. A woman in blue at a table of pearls and gold — and the balance in her hand is <em>empty</em>. Behind her, framed on the wall, hangs a Last Judgment. The window light falls on her face, not on the treasure.</p>
<p>Everything is weighing. Her scales. Christ weighing souls above her. You weighing the picture.</p>
<p>Vermeer painted the examination of conscience and made it silent, domestic, and impossibly beautiful.</p>`,
 src:"Johannes Vermeer, c. 1664 — National Gallery of Art, Washington", img:IMG.vermeer_balance},

{slug:"caravaggio-matthew", type:"opus", f:"P", title:"Caravaggio: The Calling of St Matthew",
 body:`<p>A dim Roman tavern. Money on the table, counting fingers, worldly men. Then: a single diagonal blade of light enters above Christ's head.</p>
<p>Follow the light. It lands on Levi the tax collector <em>before</em> Christ's hand does.</p>
<p>Then look at that hand: Caravaggio has quoted Adam's hand from the Sistine ceiling. Grace is a new creation, and it arrives like light — unearned, sudden, impossible to unsee. Matthew's own finger asks: <em>who, me?</em></p>`,
 src:"Caravaggio, 1599–1600 — Contarelli Chapel, San Luigi dei Francesi, Rome", img:IMG.caravaggio_matthew},

{slug:"fra-angelico", type:"opus", f:"P", title:"Fra Angelico: Annunciation",
 body:`<p>Fra Angelico painted this for his own brothers at San Marco, on the wall at the top of the stairs they climbed every morning to their cells. It was not for a patron. It was for monks going to pray.</p>
<p>Mary and Gabriel both bow, both fold their hands. No one dominates. The architecture is bare — Dominican bare, not Franciscan poor. The pigment of the sky is lapis lazuli, more precious than gold.</p>
<p>Beauty here is a form of agreement — the painter agreeing with the subject, the subject with God. "Fra Angelico" means Brother Angelic. He earned the name.</p>`,
 src:"Fra Angelico, c. 1440–45 — San Marco, Florence", img:IMG.fra_angelico_annunciation},

{slug:"scruton-wager", type:"lectio", f:"P", rare:1, title:"Scruton's Wager",
 body:`<p>Scruton's argument, compressed: beauty is not a private frisson but a <em>real value</em>, standing beside truth and goodness — something we can be right or wrong about, argue over, build civilizations around.</p>
<p>The twentieth century's cult of ugliness and desecration was not liberation but a <em>loss of nerve</em>: art that can no longer say <em>this is sacred</em> can only repeat <em>nothing is</em>.</p>
<p>A culture that stops making beautiful things stops believing it deserves to exist.</p>`,
 src:"after Roger Scruton, Why Beauty Matters (2009)"},

{slug:"michelangelo-adam", type:"opus", f:"P", title:"The Creation of Adam",
 body:`<p>Everyone sees the famous gap between the fingers. Look at the <em>other</em> hand.</p>
<p>God's left arm is around a woman — not yet created — and a child. He is reaching for Adam already thinking of Eve, already thinking of Christ, who in the fullness of time will complete this very gesture by stretching His arms on a cross.</p>
<p>The entire story is in the composition. Michelangelo did not paint a moment. He painted a plan.</p>`,
 src:"Michelangelo, Sistine Chapel ceiling, 1508–1512", img:IMG.michelangelo_adam},

{slug:"chartres", type:"opus", f:"P", title:"Chartres: a theology in stone",
 body:`<p>Abbot Suger, rebuilding Saint-Denis around 1140, justified the expense with a theology: light is the closest sensible thing to God, and the soul rises <em>through</em> the material to the immaterial.</p>
<p>The Gothic style is that sentence built in stone. Walls dissolved into glass. Weight flung outward onto flying buttresses so the interior could become luminous height.</p>
<p>At Chartres, stand (in imagination) at the west end and look up the nave: 37 metres of vault. The building is an argument. Its conclusion is vertical.</p>`,
 src:"Chartres Cathedral, c. 1194–1220; Suger, De Administratione", img:IMG.chartres},

{slug:"turner-temeraire", type:"opus", f:"P", title:"Turner: The Fighting Temeraire",
 body:`<p>A ghost-white battleship, hero of Trafalgar, is towed to the breaker's yard by a squat black tugboat belching smoke. The sunset behind them is the color of fire.</p>
<p>Turner painted the Industrial Revolution's victory in one picture — and did not disguise what was being killed. The frail dignity of the old thing. The dirty utility of the new. Both exactly as they were.</p>
<p>Ruskin called it the "most pathetic picture ever painted". Turner himself refused to sell it. He wanted it, as he said, to go with him to the grave.</p>`,
 src:"J. M. W. Turner, 1839 — National Gallery, London", img:IMG.turner_temeraire},

{slug:"ave-verum", type:"lectio", f:"P", rare:1, title:"Ave verum corpus, K. 618",
 body:`<p>Forty-six bars. Mozart wrote it six months before his death, for a small-town choirmaster in Baden — no fee worth mentioning, no occasion but Corpus Christi.</p>
<p>Listen for the economy: no ornament, no display, sopranos never forced high. Then listen for the modulation at <em>cujus latus perforatum</em> — the piercing of the side — where the harmony darkens and dissolves for a moment.</p>
<p>Genius, at the end, is the removal of everything unnecessary.</p>`,
 src:"W. A. Mozart, June 1791", img:IMG.mozart},

{slug:"beauty-poll", type:"suffragium", f:"P",
 title:"In the eye of the beholder?",
 body:`<p>"Beauty is in the eye of the beholder" — the most repeated sentence in modern aesthetics. If it were true, criticism would be impossible: there would be nothing to argue about, as with flavors of ice cream.</p><p>But we do argue, we educate taste, we say a man who prefers the shopping mall to Chartres is missing something. What follows?</p>`,
 opts:["There is a real standard, however hard to articulate","Taste is subjective but conversation is still useful","It really is just preference"]},

{slug:"friedrich-wanderer", type:"opus", f:"P", title:"Friedrich: Wanderer above the Sea of Fog",
 body:`<p>The figure stands with his back to us — on a crag, before a landscape dissolving into mist. He sees what we cannot see. We see him seeing.</p>
<p>Friedrich invented a kind of Romantic icon with this painting: man as witness, nature as revelation, both held in a stillness that is not peace exactly, but something closer to prayer without an addressee.</p>
<p>The twentieth century's lonelier men — Nietzsche, Heidegger — have been standing on this crag ever since.</p>`,
 src:"Caspar David Friedrich, c. 1818 — Kunsthalle Hamburg", img:IMG.friedrich_wanderer},

// =============== PERCEPTIO ===============
{slug:"see-not-observe", type:"lectio", f:"C", title:"Seeing and Observing",
 body:`<blockquote>You see, but you do not observe. The distinction is clear.</blockquote>
<p>Holmes to Watson, about the seventeen steps Watson has climbed hundreds of times and cannot count.</p>
<p>Seeing is what the eyes do. Observing is what the <em>will</em> does with the eyes. It can be trained like a grip.</p>`,
 src:"A. Conan Doyle, A Scandal in Bohemia (1891)", img:IMG.paget_holmes},

{slug:"ex-room-inventory", type:"exercitium", f:"C", title:"The Room Inventory",
 body:`<p>Do this now.</p>
<p>Look up from this screen for thirty seconds and study the room you are in. Then look back here and, without raising your eyes, name twenty objects in it — with color and position.</p>
<p>Then verify.</p>`,
 reveal:`<p>The misses are the interesting part. They reveal what your attention filters as <em>furniture</em> — present to the eye, absent to the mind.</p><p>Repeat this weekly in different rooms. Within a month, the character of what you miss will teach you more about your own attention than any book on it.</p>`,
 src:"daily drill · attention"},

{slug:"ex-stranger-read", type:"exercitium", f:"C", title:"The Stranger Read",
 body:`<p>Next time you are in a café or a queue, choose one person. Observe only what is <em>evidence</em>: shoes and their wear, hands, watch, posture, what they carry and how.</p>
<p>Form <em>three</em> hypotheses about occupation or errand — three, never one.</p>`,
 reveal:`<p>Three hypotheses — not one. The one-hypothesis mind confirms what it first guessed. The three-hypothesis mind lets evidence <em>choose between</em> explanations.</p><p>Hold them loosely. The exercise is not to be right. It is to separate the data from the story, and to feel how eagerly the mind skips to the story.</p>`,
 src:"daily drill · inference discipline"},

{slug:"baseline-deviation", type:"lectio", f:"C", title:"Baseline and Deviation",
 body:`<p>Trained observers do not scan for the suspicious. They learn the <em>normal</em> first.</p>
<p>Every place has a baseline — the usual noise, pace, dress, behavior of a street, an office, a trading floor. Information lives in <em>deviations</em>: the parked car with the engine running. The colleague suddenly formal. The line item that grew when its peers shrank.</p>
<p>You cannot notice the anomalous until you have made a study of the ordinary. Most people never do.</p>`,
 src:"observation method · surveillance, security, trading"},

{slug:"capital-mistake", type:"lectio", f:"C", title:"The Capital Mistake",
 body:`<blockquote>It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.</blockquote>
<p>Holmes was wrong about the sequence (we theorize automatically, we can't help it) and right about the mechanics: unexamined theories pull facts into themselves like gravity.</p>
<p>The discipline is to <em>catch yourself theorizing</em>, name the hypothesis out loud, and deliberately look for evidence that would falsify it.</p>`,
 src:"A. Conan Doyle, A Scandal in Bohemia (1891)"},

{slug:"ex-memory-palace", type:"exercitium", f:"C", title:"Build a Memory Palace",
 body:`<p>Take the house of your childhood. Walk it mentally and fix ten loci in strict order: gate, door, hallway, first room, second room, hall, kitchen, stairs, upstairs landing, your old bedroom.</p>
<p>Now place ten things you must learn — one per locus — as vivid, absurd images <em>interacting</em> with the place. The Five Ways of Aquinas, perhaps: a motion-filled wind in the gate, a chain of falling dominoes down the hall…</p>
<p>Recall by walking the route.</p>`,
 reveal:`<p>The method is ancient. Simonides of Ceos invented it in the 5th century BC after identifying bodies at a collapsed banquet hall by remembering where each guest had been seated. Cicero wrote it down in <em>De Oratore</em>. Frances Yates told the whole story in <em>The Art of Memory</em> (1966).</p><p>It works because space is the mind's native filing system. Try it tonight. By tomorrow you will know all five.</p>`,
 src:"Rhetorica ad Herennium III; Yates, The Art of Memory (1966)"},

{slug:"q-see-observe", type:"quaestio", f:"C",
 title:"The Dog in the Night-Time",
 body:`<p>In "Silver Blaze", Holmes solves a case by noting <em>the curious incident of the dog in the night-time</em>. Watson protests: "The dog did nothing in the night-time." Holmes replies: "That was the curious incident."</p><p>What is the method?</p>`,
 opts:["Count what is there","Note what is <em>missing</em> from a baseline","Interview more witnesses"],
 correct:1,
 reveal:`<p>The guard dog did not bark when the horse was taken from the stable. From this absence, Holmes infers that the thief was not a stranger — the dog knew him. Hence an inside job.</p><p>The hardest observations are of <em>what is not there</em>. They require a baseline so clear that an absence registers as a presence.</p>`,
 src:"Doyle, 'Silver Blaze' (1892)"},

{slug:"kims-game", type:"exercitium", f:"C", title:"Kim's Game",
 body:`<p>Have someone lay out fifteen small objects under a cloth — coins, keys, a stamp, a pen cap, whatever is to hand.</p>
<p>Uncover them for sixty seconds. Cover again. Write down all fifteen with as much detail as you can: which coin, facing which way, where in the arrangement.</p>`,
 reveal:`<p>Kipling named it in his novel <em>Kim</em> (1901), where it trains the boy for espionage. British intelligence services still use it.</p><p>Score yourself weekly. The improvement curve is steep and unreasonably satisfying. Within a month you will notice yourself observing in daily life with a slower, more deliberate gaze.</p>`,
 src:"after Kipling, Kim (1901)"},

{slug:"attention-poll", type:"suffragium", f:"C",
 title:"The Attention Economy",
 body:`<p>Simone Weil: "Attention, taken to its highest degree, is the same thing as prayer." If attention is the rarest moral resource, then the applications and feeds competing for it are not neutral tools. They are claimants.</p><p>How do you treat them?</p>`,
 opts:["I guard my attention like money","I notice the drain but struggle","I haven't thought of it that way"]},

// =============== HISTORIA ===============
{slug:"burke-partnership", type:"lectio", f:"H", title:"The Partnership Across Generations",
 body:`<blockquote>Society is indeed a contract. It is a partnership in all science; a partnership in all art; a partnership in every virtue, and in all perfection. As the ends of such a partnership cannot be obtained in many generations, it becomes a partnership not only between those who are living, but between those who are living, those who are dead, and those who are to be born.</blockquote>
<p>Burke's reply to the French Revolution's attempt to begin history over. You cannot. The dead voted; the unborn will vote. The living are their trustees, not their owners.</p>`,
 src:"Edmund Burke, Reflections on the Revolution in France (1790)"},

{slug:"tocqueville-despotism", type:"lectio", f:"H", title:"The Soft Despotism",
 body:`<p>Tocqueville saw it coming in 1840 — the new form of tyranny, unlike anything the ancients knew.</p>
<p>It would not be violent. It would be <em>mild</em>. It would not kill or imprison; it would smother the citizen with a thousand petty provisions, keep him safe and comfortable and <em>small</em>, assume the troubles of thought and will on his behalf, and reduce the nation at last to <em>a flock of timid and industrious animals, of which the government is the shepherd</em>.</p>
<p>Not what the democratic revolutions feared. Precisely what they were producing.</p>`,
 src:"Alexis de Tocqueville, Democracy in America, II.4.6 (1840)"},

{slug:"kirk-canons", type:"lectio", f:"H", title:"The Six Canons",
 body:`<p>Russell Kirk's "canons of conservative thought", distilled from Burke, Adams, Coleridge and the Southern Agrarians:</p>
<p><strong>1.</strong> A transcendent moral order. <strong>2.</strong> Variety and mystery of traditional life, over narrow uniformity. <strong>3.</strong> Civilized society requires <em>orders</em> and classes. <strong>4.</strong> Freedom and property are closely linked. <strong>5.</strong> Faith in prescription, distrust of "sophisters and calculators". <strong>6.</strong> Prudence as the chief virtue of statesmen.</p>
<p>Agree or not, this is a <em>position</em>, not a mood. A political temperament reduced to arguable propositions is the first step out of mere reaction.</p>`,
 src:"Russell Kirk, The Conservative Mind (1953)"},

{slug:"dante-love", type:"lectio", f:"H", rare:1, title:"The Love that Moves the Sun",
 body:`<blockquote>L'amor che move il sole e l'altre stelle.</blockquote>
<p>The last line of the <em>Divine Comedy</em>. Fourteen thousand lines of pilgrimage — through Hell, up Purgatory, into Paradise — end here. Not with a doctrine. With a <em>love</em>.</p>
<p>Dante has seen the Beatific Vision. He cannot describe it. What he can say is what it does: it moves the sun and the other stars. The whole universe runs on this love. We are included in its circulation whether or not we notice.</p>`,
 src:"Dante, Paradiso XXXIII.145"},

{slug:"gibbon-poll", type:"suffragium", f:"H",
 title:"Why did Rome fall?",
 body:`<p>Gibbon blamed Christianity. Dawson said Christianity preserved what Rome could not. Belloc said Rome never fell — it transformed. Modern economic historians cite silver content and tax base.</p><p>Which explanation strikes you as closest?</p>`,
 opts:["Spiritual: Christianity softened Roman virtue (Gibbon)","Spiritual: Christianity saved what remained (Dawson, Belloc)","Material: fiscal and military collapse","Political: late-stage institutional sclerosis"]},

{slug:"virgil-tears", type:"lectio", f:"H", title:"Sunt lacrimae rerum",
 body:`<p>Aeneas, washed up on the shores of Carthage, sees a mural of the Trojan War — his own war, his own dead — painted there as decoration for a foreign queen's temple.</p>
<blockquote>Sunt lacrimae rerum et mentem mortalia tangunt.</blockquote>
<p>There are tears for things, and mortal matters touch the heart.</p>
<p>Virgil's untranslatable phrase. The world weeps at itself. The sadness is <em>in the things</em>. One of the pieces of poetry that teaches a reader what a civilization is.</p>`,
 src:"Virgil, Aeneid I.462"},

// =============== VIDEOS (verified embeddable Shorts) ===============
{slug:"video-barron-1", type:"visio", f:"T", title:"Nothing but You, Lord",
 body:"A one-minute meditation from Bishop Barron. Watch, then sit with it.",
 ytId:YT.barron_short1.id, ytShort:true, src:"Bishop Robert Barron"},

{slug:"video-barron-2", type:"visio", f:"T", title:"You're Not in Control",
 body:"Bishop Barron and Fr. Mike Schmitz, on the single hardest truth to receive. One minute.",
 ytId:YT.barron_short2.id, ytShort:true, src:"Bishop Barron & Fr. Mike Schmitz"},

{slug:"video-peterson-resp", type:"visio", f:"F", title:"Take Responsibility",
 body:"Peterson, compressed. The single sentence of his entire corpus. Thirty seconds.",
 ytId:YT.peterson_resp.id, ytShort:true, src:"Jordan B. Peterson"},

{slug:"video-peterson-adv", type:"visio", f:"F", title:"Responsibility is Adventure",
 body:"Peterson on why 'be a good person' doesn't move you but 'bear the heaviest thing you can' does. With Rogan.",
 ytId:YT.peterson_adv.id, ytShort:true, src:"Jordan B. Peterson"},

{slug:"video-pageau-fairy", type:"visio", f:"T", title:"Fairy Tales Are True?",
 body:"Pageau on why the stories you heard as a child weren't entertainment — they were a map of the world.",
 ytId:YT.pageau_fairy.id, ytShort:true, src:"Jonathan Pageau"},

{slug:"video-mike-imitation", type:"visio", f:"T", title:"Fr. Mike on The Imitation of Christ",
 body:"The 15th-century classic that reshaped more interior lives than almost any book save Scripture. Fr. Mike on why to read it.",
 ytId:YT.mike_imitation.id, ytShort:true, src:"Fr. Mike Schmitz — Ascension"},

{slug:"video-pints-name", type:"visio", f:"T", title:"How Pints with Aquinas Got Its Name",
 body:"Matt Fradd tells the origin story in sixty seconds. Why pints, why Aquinas.",
 ytId:YT.pints_name.id, ytShort:true, src:"Matt Fradd — Pints With Aquinas"},
// =============== ARSENAL — Marcos's own writing ===============
// Verbatim passages from his essays. His voice, lightly framed.

{slug:"a-restless-heart-aim", type:"lectio", f:"A", rare:1, title:"The Right Standard",
 body:`<blockquote>The aim is not to make the argument unbeatable, but to make the cost of resisting it explicit, large, and unavoidable.</blockquote>
<p>From the preface to the Argument from Derivative Existence. The right standard for metaphysics at this level is not <em>no rational denial is possible</em>. It is: <em>the rational denier must pay a specific metaphysical price, and the price must be legible.</em></p>`,
 src:"The Argument from Derivative Existence, preface"},

{slug:"a-borrowing-chain", type:"lectio", f:"A", title:"A Chain Without a Lender",
 body:`<blockquote>A chain of pure borrowing is a chain with nothing to be borrowed, which is to say nothing is in fact lent.</blockquote>
<p>The foundationalist intuition compressed into one line. An infinite regress of derivative beings does not escape the question; it just restages it. Each link borrows from the next. If no link is unborrowed, there is no original lender. Mutual support among the unsupported is not support.</p>`,
 src:"The Argument from Derivative Existence, §5.3"},

{slug:"a-the-cost-of-refusal", type:"lectio", f:"A", title:"To the Resister",
 body:`<p>If you reject this conclusion, you are not unintelligible, but you are committed. You hold one or more of: that contingency is metaphysically thinner than the analysis suggests; that derivative existence does not require a non-derivative source; that grounding chains can be self-sustaining without a foundation; that an impersonal foundation can ground contingent reality without either necessitating it or operating mind-like; or that explanatory demand simply has no purchase at the foundation.</p>
<p><em>Each is a position. Each carries a metaphysical price. The argument does not force assent. It does fix the cost of refusal. That is what the argument can give, and what it should aim to give. The rest is not philosophy.</em></p>`,
 src:"The Argument from Derivative Existence, §9"},

{slug:"a-genealogy-of-institutions", type:"lectio", f:"A", rare:1, title:"The Genealogy You Were Taught to Forget",
 body:`<p>The university in which the modern skeptic sits to dismiss the Middle Ages is itself a medieval invention — born in Bologna and Paris, not in Athens or ancient Alexandria. The hospital in which the modern patient receives care traces its institutional lineage to the <em>xenodocheia</em> of the fourth-century Church and to the nursing sisters of the Hôtel-Dieu.</p>
<p>The scientific method that the modern scientist employs was forged in the disputations of medieval Oxford and Paris by Franciscan friars and Dominican bishops. The language of universal human rights that the modern political theorist deploys has its deepest conceptual roots in the doctrine of <em>imago Dei</em>.</p>
<p>These are not matters of sentiment. They are matters of historical fact.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §X"},

{slug:"a-julian-admits", type:"lectio", f:"A", title:"What a Pagan Emperor Admitted",
 body:`<p>Julian the Apostate reigned 361–363 AD and spent that reign trying to roll back Christianization. In a letter to his pagan high priest in Galatia, he wrote:</p>
<blockquote>It is disgraceful that, when no Jew ever has to beg, and the impious Galilaeans support not only their own poor but ours as well, all men see that our people lack aid from us.</blockquote>
<p>The most hostile possible witness was forced to admit it: Christian charitable organization had no pagan equivalent. His pagan counterpart institutions failed. The charitable infrastructure of medieval Christendom did not emerge from nowhere; it grew from this root.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §II"},

{slug:"a-oresme-bishop", type:"lectio", f:"A", title:"The Bishop Who Warned Against God-of-the-Gaps",
 body:`<p>Nicole Oresme, a 14th-century Roman Catholic bishop and one of the most original scientific minds of any century, developed arguments for the Earth's rotation long before Copernicus. On how to do natural philosophy, he wrote:</p>
<blockquote>There is no reason to take recourse to the heavens, the last refuge of the weak, or demons, or to our glorious God as if He would produce these effects directly.</blockquote>
<p>A medieval bishop explicitly warning against invoking God as an explanatory shortcut in natural philosophy. The Enlightenment did not create rational inquiry. It inherited it.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §V"},

{slug:"a-mean-speed-theorem", type:"lectio", f:"A", title:"What Galileo Did Not Discover",
 body:`<p>Clifford Truesdell, one of the most rigorous historians of mechanics, was unequivocal:</p>
<blockquote>The now published sources prove to us, beyond contention, that the main kinematical properties of uniformly accelerated motions, still attributed to Galileo by the physics texts, were discovered and proved by scholars of Merton College.</blockquote>
<p>Galileo's law of falling bodies — one of the foundational achievements of the Scientific Revolution — had been demonstrated three centuries earlier in a medieval Oxford college by scholars whose names most educated people have never encountered. Thomas Bradwardine. William Heytesbury. Richard Swineshead. Say their names.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §V"},

{slug:"a-reason-central", type:"lectio", f:"A", title:"An Unprecedented Institution",
 body:`<p>Edward Grant's assessment of the medieval university — the self-governing <em>universitas magistrorum et scholarium</em>, the invention of Bologna and Paris in the twelfth century — carries the full weight of the historical record:</p>
<blockquote>In all the history of human civilization, reason had never been accorded such a central role, one that involved so many people over such a wide area for such an extended period.</blockquote>
<p>Plato's Academy was a philosophical school around one master. Alexandria was a research library. The madrasa was religious. None had the corporate autonomy, standardized curricula, degree system, and license to teach that defined the university. The modern world has never seen fit to abandon the form.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §IV"},

{slug:"a-fasting", type:"lectio", f:"A", title:"The Social Class of the Saints",
 body:`<p>The modern caricature imagines medieval monks as the lazy poor finding comfort in the cloister. Research into the social origins of medieval ascetics demonstrates the opposite: they were disproportionately drawn from the <em>upper classes</em>. The vow of poverty was embraced by people who had the option of wealth.</p>
<blockquote>Fasting seems not to appeal to people who have often been hungry.</blockquote>
<p>Voluntary poverty is a serious act when the alternative is a manor house. It is a radical one. The embrace of it by the medieval elite is not a sign of ignorance. It is a sign that something was being taken seriously that we no longer take seriously at all.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §VII"},

{slug:"a-picasso-weapon", type:"lectio", f:"A", rare:1, title:"Picasso Was Transparent",
 body:`<p>October 29, 1944. Four days after joining the French Communist Party, Picasso publishes his statement on it in <em>L'Humanité</em> and <em>New Masses</em>:</p>
<blockquote>I am proud of having said by means of my drawings and my colors, since my first attempts at expression, that I have always considered painting not as an ornamental art, not as a pleasure for the eyes, nor as a passionate or rationalizing emotion, but as an offensive and defensive weapon against the enemy.</blockquote>
<p>He is saying, in plain language, that he has always considered painting a weapon. Against the enemy. The enemy, in context, is bourgeois Christian civilization — the civilization that produced the classical tradition he had spent his career dismantling. We are not inferring his intentions. We are reading his announcement.</p>`,
 src:"The Uglification of the West, Part I, §IV"},

{slug:"a-picasso-trocadero", type:"lectio", f:"A", title:"The Trocadéro Confession",
 body:`<p>Picasso on his 1907 encounter with African masks that shaped Les Demoiselles d'Avignon and all of Cubism:</p>
<blockquote>The masks weren't just like any other pieces of sculpture. Not at all. They were magic things… intercessors against everything — against unknown, threatening spirits. I always looked at fetishes. I understood; I too am against everything. I too believe that everything is unknown, that everything is an enemy! Everything! They were weapons.</blockquote>
<p>His art is a weapon against the unknown and threatening forces of the world. Not in the service of beauty. Not in the service of truth. In the service of spiritual independence from forces he conceives as hostile. This is not the vocation of the Western artist. This is the vocation of the shaman.</p>`,
 src:"The Uglification of the West, Part I, §IV"},

{slug:"a-adorno-the-false", type:"sententia", f:"A",
 body:{latin:"Das Ganze ist das Unwahre.", english:"The whole is the false. — Theodor Adorno"}},

{slug:"a-komar-melamid", type:"lectio", f:"A", title:"What People Actually Want",
 body:`<p>In 1993–94 the artists Komar and Melamid used professional polling firms in fourteen countries — America, Russia, China, France, Kenya, Iceland, Turkey, Portugal, Ghana — to ask what people wanted in a painting.</p>
<p>Across every culture surveyed, the answer was <em>the same</em>: a landscape with water, in natural colors, with a small human group and animals, representational, in a realist tradition. They painted what the data said. The results looked like 19th-century Hudson River School paintings.</p>
<p>They also painted the "most unwanted" paintings — the preferences of the smallest minority. The result in every country looked like what hangs in the contemporary art galleries of New York, Paris, and London. The gap between what humans find beautiful and what institutional art produces is not aesthetic philistinism. It is one of the most honest measurements of elite capture ever conducted.</p>`,
 src:"The Uglification of the West, Part I, §X"},

{slug:"a-scruton-not-tired", type:"lectio", f:"A", title:"Scruton on What Happened",
 body:`<blockquote>The modernist revolution in the arts was not a response to a public that had grown tired of beauty. It was a revolution imposed on a public by an avant-garde that had decided, for ideological reasons, that beauty was either impossible or undesirable.</blockquote>
<p>You are not wrong to find most contemporary architecture ugly. You are not wrong to be bored by atonal music. You are not wrong to find the gallery incomprehensible. These are not failures of your education. They are failures of their programs. The institution calling your taste reactionary is the party with something to defend.</p>`,
 src:"Roger Scruton; cited in The Uglification of the West, Part I, §X"},

{slug:"a-cia-frankfurt-converge", type:"lectio", f:"A", title:"The CIA and the Frankfurt School Were Promoting the Same Art",
 body:`<p>The CIA, through the Congress for Cultural Freedom (1950–1967), covertly funded Abstract Expressionism as a Cold War weapon: proof that American freedom produced richer culture than Soviet Socialist Realism.</p>
<p>The Frankfurt School — Adorno, Benjamin, Marcuse — had been promoting the same aesthetic program since the 1930s, for the opposite ideological reason: beautiful traditional art is false consciousness; the destruction of beauty is revolutionary praxis.</p>
<p>The American intelligence establishment and the Marxist cultural theorists, from opposite ends of the political spectrum, with incompatible goals, converged on the <em>same</em> art. The practical result was unified institutional pressure on Western culture in a direction neither the public nor any democratic institution had chosen.</p>`,
 src:"The Uglification of the West, Part I, §VI"},

{slug:"a-pruitt-igoe", type:"lectio", f:"A", title:"The Death of Modern Architecture",
 body:`<p>Pruitt-Igoe was Le Corbusier's doctrine made concrete, in St. Louis, in 1954–56. Thirty-three eleven-story towers built on his tower-in-the-park model to house the Black working poor. Within a decade it had become uninhabitable — a sink of crime, vandalism, and concentrated misery.</p>
<p>The housing authority dynamited it in three phases between 1972 and 1976. The architectural critic Charles Jencks declared the moment of its demolition — <em>July 15, 1972, 3:32 PM</em> — "the death of modern architecture."</p>
<p>He was too optimistic. The theory that killed Pruitt-Igoe is still taught in architecture schools. Its graduates are still building its successors. The towers are still being funded. The research on what tower blocks do to the human spirit is extensive, consistent, and ignored.</p>`,
 src:"The Uglification of the West, Part I, §VIII"},

{slug:"a-shiller-flat-100-years", type:"lectio", f:"A", rare:1, title:"The Chart That Should End the Argument",
 body:`<p>When Robert Shiller prepared the 2005 edition of <em>Irrational Exuberance</em>, he discovered that no long-run home price series existed <em>in any country.</em> He built one with Karl Case using repeat-sales methodology. The result:</p>
<p>Real (inflation-adjusted) U.S. home prices showed <em>virtually no increase from 1890 to the late 1990s.</em> A hundred and ten years of flat. Then, beginning around 1997, prices climbed unprecedentedly, peaked in 2006, and collapsed into the global financial crisis.</p>
<p>Most people assume homes appreciate as a matter of natural law. The data says otherwise: building costs are flat, land is a small component of most home prices, and structures depreciate. There is no fundamental reason for sustained real appreciation. We built a global crisis on a belief that was false by a century of its own measurement.</p>`,
 src:"When Markets Aren't Efficient, §3.1"},

{slug:"a-emh-not-useless", type:"lectio", f:"A", title:"EMH: Right Idea, Wrong Deployment",
 body:`<blockquote>The problem is not that EMH is useless. As a benchmark and as a description of short-run information processing in liquid markets, it has real explanatory power. The problem is what happens when policy is built on the assumption that EMH holds in markets where it demonstrably does not.</blockquote>
<p>The deregulatory consensus of 1980–2007 was built largely on the assumption that financial markets were efficient enough to be left alone. The housing market behaved nothing like EMH predicts, and the 2008 crisis erased an estimated <em>$8 trillion</em> in U.S. household wealth. Treating a model as descriptive rather than aspirational has real economic costs.</p>`,
 src:"When Markets Aren't Efficient, §2"},

{slug:"a-housing-structural-failures", type:"lectio", f:"A", title:"Why Housing Fails EMH, Structurally",
 body:`<p>Housing is uniquely vulnerable to behavioral failure for structural reasons:</p>
<p><strong>No short selling.</strong> In stocks, skeptics can short overvalued securities and push prices toward fundamentals. In housing, no such mechanism exists. Pessimists can only refrain from buying.</p>
<p><strong>Infrequent transactions.</strong> Most households buy a home a few times in their lives. They cannot develop expertise through repetition.</p>
<p><strong>No long-term data in public discourse.</strong> Newspapers do not publish century-long price series. Buyers see recent appreciation and assume it is normal.</p>
<p>Combine these with the universal cognitive biases — wishful thinking, extrapolation, narrative contagion — and you get precisely the kind of bubble-and-crash cycle EMH says cannot happen.</p>`,
 src:"When Markets Aren't Efficient, §4"},

{slug:"a-shiller-humans-big-mistakes", type:"sententia", f:"A",
 body:{latin:"Humans make big mistakes.", english:"Millions of people are all thinking the same thing. — Robert Shiller"}},

{slug:"a-the-right-standard-meta", type:"lectio", f:"A", title:"The Right Standard — for any argument",
 body:`<p>What should you aim for, when making an argument you expect serious opponents to attack?</p>
<p>Not that no reasonable person can deny the conclusion. Few interesting arguments achieve that standard. Not that your rhetoric is irresistible. Rhetoric is irresistible only to the already-persuaded.</p>
<p>Aim for this: that the person who denies the conclusion must, by denying it, accept a specific, identifiable, and substantial metaphysical, empirical, or practical commitment. Convert the refusal from a free move into a priced one. Make the ledger visible.</p>
<p>By that standard, most of what passes for philosophical rebuttal is actually just the refusal to be billed.</p>`,
 src:"after the preface and §8 of The Argument from Derivative Existence"},

{slug:"a-honest-remainder", type:"lectio", f:"A", title:"The Honest Remainder",
 body:`<p>A rhetorical habit worth stealing: at the end of each defense, write out the <em>honest remainder</em> — the price your position still owes, the reasonable objection you have not fully answered, the move the opponent still has.</p>
<p>Three things happen. (1) You stop overstating. (2) Smart opponents stop looking for the hidden weakness because you've already pointed to it. (3) You keep the respect of readers who were not going to be fooled anyway.</p>
<p>The confidence-language that fills most polemic — "fails," "decisive," "the answer is" — buys apparent strength at the cost of real credibility. State what the argument gives. State what it does not give. Then stop.</p>`,
 src:"method, after The Argument from Derivative Existence"},

{slug:"a-every-tradition-great", type:"lectio", f:"A", title:"What Was Lost — The List",
 body:`<p>Any account of the Western artistic tradition that does not pause to name what it produced treats it as an abstraction. The list is partial, but the magnitude it conveys is not negotiable:</p>
<p>The Parthenon. The Pantheon's unreinforced concrete dome. The mosaics of Ravenna. The rose window of Chartres. Giotto's Arena Chapel. Brunelleschi's dome. Donatello's David. Leonardo's Last Supper. Michelangelo's Pietà and Sistine ceiling. Raphael's School of Athens. Palestrina's Missa Papae Marcelli. Shakespeare's complete works. Monteverdi's Orfeo. Vermeer's Girl with a Pearl Earring. Bach's Well-Tempered Clavier and Mass in B Minor. Mozart's Don Giovanni and Requiem. Beethoven's Ninth. Schubert's Winterreise. Brahms's symphonies. Constable's Hay Wain. Turner's late seascapes.</p>
<p>This is what the twentieth-century avant-garde announced was dead, bourgeois, oppressive, and ready for replacement. The question of this essay is: who told it that, why, and by what mechanisms was the replacement enforced?</p>`,
 src:"The Uglification of the West, Part I, §I"},

// ============== NEW ARSENAL — from the newly-read essays ==============

{slug:"a-beauvoir-tell", type:"lectio", f:"A", rare:1, title:"The Tell",
 body:`<p>The most notorious of Beauvoir's statements does not appear in <em>The Second Sex</em> at all but in her 1975 interview with Betty Friedan. Asked whether women should have the choice to stay home and raise children, she answered:</p>
<blockquote>"No woman should be authorized to stay at home to raise her children. Society should be totally different. Women should not have that choice, precisely because if there is such a choice, too many women will make that one."</blockquote>
<p>This is not a statement about opportunities. It is a statement about coercion. It concedes, openly, that the woman's attraction to the maternal life is powerful enough that a free society will produce many mothers, and it concludes, without embarrassment, that the free society must therefore be replaced with an unfree one. The mask slips at exactly the right sentence. The whole edifice presumes that the sexed body's pull toward its own nature is so strong that the theory can be defended only by force.</p>`,
 src:"The Long War on the Woman, Part Four"},

{slug:"a-steering-wheel", type:"lectio", f:"A", rare:1, title:"The Steering Wheel",
 body:`<p>If two people are driving the same car, and they each have a steering wheel, a brake pedal, and a gas pedal, what is going to happen? They are going to crash.</p>
<p>Somebody has to be the steering wheel. The person who designed the car — in this case, God — did not designate one driver to oppress the other. He designated one driver because the function of the car requires it. The destination is the point.</p>
<p>The husband is the steering wheel. The wife is in the passenger seat, fully present, fully active — noticing what the driver cannot notice, providing what the driver needs, raising what the driver missed. They are both indispensable. They are both directed toward the same destination. Without the order, they crash. With the order, they arrive.</p>`,
 src:"The Demolition — Part Three, the master move"},

{slug:"a-reimer-case", type:"lectio", f:"A", title:"The Case That Was in Every Textbook",
 body:`<p>John Money's theory of psychosexual neutrality needed a test. The test arrived in 1966, in the person of a twenty-two-month-old Canadian boy named Bruce Reimer, whose penis had been destroyed in a botched circumcision. Money persuaded the boy's parents to raise Bruce as a girl — castrate him, give him a female name (Brenda), withhold the truth, and reinforce the female identity through the developmental years.</p>
<p>Money published the case for twenty-five years as a triumph. Every psychology textbook reproduced it as proof of the plasticity of gender.</p>
<p>It was false, and Money knew it. The child rejected the female identity from the start, was told the truth at fourteen, immediately reverted to his male identity, took the name David, and killed himself in 2004. His twin brother Brian, whose own deterioration Money never acknowledged, killed himself in 2002. The theory on which the modern transgender apparatus rests was founded on a case its own author knew to be a catastrophic falsification of the theory it was published to prove.</p>`,
 src:"The Manufactured Sex, Part Three"},

{slug:"a-the-table", type:"lectio", f:"A", rare:1, title:"The Table",
 body:`<p>Twelve questions — the twelve questions that actually define what a political order is — and on every one of them, Marxism and fascism give the same answer.</p>
<p><strong>The individual.</strong> No prior existence. Serves the collective. Both. <strong>The family.</strong> Bourgeois institution; children belong to the state. Both. <strong>The Church.</strong> Enemy. Both. <strong>The economy.</strong> State-controlled. Both. <strong>The party.</strong> One party; rivals banned. Both. <strong>Opponents.</strong> Imprisoned or killed. Both. <strong>Secret police.</strong> Yes. Both. <strong>The press.</strong> Instrument of the state. Both. <strong>The leader.</strong> Cult. Both. <strong>The goal.</strong> Transformation of human nature. Both. <strong>The method.</strong> Mass killing. Both.</p>
<p>They are not opposites. They are the same answer to the same question, recited in two accents. The left-right line was drawn after 1945 by the surviving twin to launder its inheritance onto the conservative order that had been fascism's enemy and victim.</p>`,
 src:"The Forbidden Symmetry, Part Two"},

{slug:"a-cass-review", type:"lectio", f:"A", title:"The Verdict Already Rendered",
 body:`<p>This is the development most Americans have not heard about, because the American press has been substantially silent on it.</p>
<p>Between 2020 and 2024, the national health services of Sweden, Finland, Norway, and the United Kingdom commissioned systematic reviews of the entire evidence base for pediatric gender medicine. Every one of those reviews reached the same conclusion.</p>
<p>The Cass Review, the largest ever conducted, found that the evidence for puberty blockers and cross-sex hormones in adolescents is of very low quality; that the claimed mental health benefits are not supported by the studies used to justify the interventions; that the practice had strayed far from the standards required of any other pediatric medicine. The NHS ended routine provision of puberty blockers to minors. Sweden, Finland, Norway followed.</p>
<p>This is not a conservative finding. It is the verdict of the state medical establishments of the most progressive nations on earth.</p>`,
 src:"The Manufactured Sex, Part Six · Cass Review (NHS England, April 2024)"},

{slug:"a-twitter-files", type:"lectio", f:"A", title:"The System Documented",
 body:`<p>The Twitter Files — released December 2022 and reported by Taibbi, Weiss, Shellenberger — demolished the claim that platform content moderation is neutral.</p>
<p>Twitter maintained <em>visibility filtering</em> — the suppression of specific accounts' reach without notifying them — applied disproportionately to conservative accounts. The moderation of the Hunter Biden laptop story was executed within hours of the Post's publication, before any fact-checking.</p>
<p>And this is the part that matters: the FBI had a standing relationship with Twitter's Trust and Safety team through which it regularly flagged accounts for action. A relationship that operated as a government speech censorship mechanism laundered through a private company's content moderation.</p>
<p>The First Amendment prohibits the government from restricting speech. The FBI's practice of flagging accounts to Twitter for suppression circumvents that prohibition technically while defeating it practically. The government cannot silence a speaker. But it can tell a private company that the speaker is a threat, and the private company can silence them.</p>`,
 src:"The Manufacturing of Reality, §IV"},

{slug:"a-nobel-forty", type:"lectio", f:"A", title:"Forty Percent",
 body:`<p>The Nobel Prize is awarded by a Swedish institution with no national interest in favoring the United States. Its consistent verdict, repeated across more than a century, is this:</p>
<p>The United States has won approximately <strong>418 Nobel Prizes</strong> — roughly <strong>40 percent of every prize ever awarded</strong>. In economics specifically, 58 of 93 total laureates — 62 percent of every economics Nobel in history — were American.</p>
<p>The nearest competitor (UK) has approximately 140 total, less than one-third. Germany has 115, less than 28 percent.</p>
<p>This is a figure that should halt the "middle-tier" argument in its tracks. The country that ranks 34th on a math assessment for 15-year-olds also produces 40 percent of global Nobel laureates and houses 7 of the world's 10 most valuable companies. Any analytical framework that treats the former as the more informative metric has its priorities precisely inverted.</p>`,
 src:"American Primacy, §III"},

{slug:"a-sentent-chesterton", type:"sententia", f:"A", rare:1,
 body:{latin:"Qui Deo non credunt, non nihil credunt — sed quodvis credere possunt.",
       english:"When men choose not to believe in God, they do not thereafter believe in nothing — they then become capable of believing in anything."},
 src:"G.K. Chesterton — the sociological prediction the 20th century confirmed at 100 million lives"},

{slug:"a-subsidiarity", type:"lectio", f:"A", title:"Subsidiarity",
 body:`<p>Against the centralizing engine, the Catholic social tradition sets a precise principle, given its sharpest statement by Pius XI in 1931:</p>
<blockquote>It is a grave injustice to assign to a larger and higher association what a smaller and lower one can do for itself.</blockquote>
<p>Do nothing at a higher level that can be done at a lower one. The family, the parish, the town, the guild, the province each has its own proper authority, and the state's role is to <em>help</em> these lesser communities flourish — <em>subsidium</em> means "help" — not to absorb their functions into itself.</p>
<p>Subsidiarity is the exact inverse of Jouvenel's centralizing Power: it defends the intermediate bodies as the load-bearing walls of a free and human society. A healthy order is not one lone individual under one vast state, but a living hierarchy of smaller wholes, each doing what it is fitted to do. Centralization, by this light, is not efficiency. It is disorder — the hollowing-out of the body politic into a head and a heap.</p>`,
 src:"The Theater and the Engine · Pius XI, Quadragesimo Anno §79 (1931)"},

{slug:"a-daily-dress", type:"lectio", f:"A", title:"The Most Immediately Available Counter-Revolution",
 body:`<p>Dressing well is the most immediately available, most personally accessible, most daily counter-revolutionary act available to any person. It does not require an institution. It does not require a movement. It does not require anyone else's cooperation.</p>
<p>It requires only the decision, made every morning when you open your wardrobe, about what kind of person you are going to be in public — and what the people you encounter are worth to you.</p>
<p>A jacket rather than a hoodie communicates that you are a person who takes the public world seriously. A tie rather than an open collar communicates that the occasion is worth a visible effort. The man who wears a jacket to Mass is making a statement about what the Eucharist is worth. The family that puts on their best clothes for a funeral is making a statement about what death and grief and the community of mourning are worth.</p>
<p>Each is a small act. Cumulatively, they are the visible fabric of civilization — the "decent drapery of life" that Burke warned against tearing off. Put it back on.</p>`,
 src:"The Unraveling, Part XI"},

{slug:"a-poll-productive-shorts", type:"suffragium", f:"A",
 title:"Was it a program?",
 body:`<p>You've now read a run of my own writing. The thesis cuts across my essays: the collapse of beauty, the capture of institutions, the erosion of charity, the housing bubble — I argue these were not organic cultural evolutions but <em>deliberate programs</em>, documented in the perpetrators' own words. What's your read?</p>`,
 opts:["Yes, almost all of it. The programs were explicit and I just hadn't been shown.","Partly. Some of what you call program is just drift, bias, or market failure.","No. You're imposing agency on diffuse processes."]},

// =============== MORE NEGOTIUM — Finance / Operators / Decision ===============

{slug:"n-munger-latticework", type:"lectio", f:"N", title:"The Latticework",
 body:`<p>Munger's actual investing method, which he describes more than his famous one-liners: build a <em>latticework</em> of mental models drawn from every major discipline, and hang the facts of the business on it.</p>
<p>Not just finance. <strong>Psychology</strong> (incentive-caused bias, social proof, authority). <strong>Biology</strong> (natural selection as competitive dynamic). <strong>Thermodynamics</strong> (entropy, systems). <strong>Mathematics</strong> (compounding, permutations, probability). <strong>Microeconomics</strong> (scale, moats).</p>
<p>Most investors fail not because they lack information but because they have the same three models the rest of the market has. The lattice is the differentiator. Build it in your twenties.</p>`,
 src:"after Charlie Munger, Poor Charlie's Almanack"},

{slug:"n-porter-five-forces", type:"lectio", f:"N", title:"Porter's Five Forces, Compressed",
 body:`<p>Michael Porter's one great idea: an industry's long-run profitability is set by five forces, not by how fast it's growing.</p>
<p><strong>Rivalry</strong> among existing competitors. <strong>New entrants</strong> able to enter. <strong>Substitutes</strong> buyers can switch to. <strong>Buyer power</strong> (concentration, switching costs). <strong>Supplier power</strong> (critical inputs, few suppliers).</p>
<p>When all five are weak — think Google in search, Intuit in SMB tax, Visa in payments — margins are extraordinary and stable. When any one is strong, margins collapse to the cost of capital. Growth is irrelevant; airlines grew for fifty years with cumulative losses.</p>
<p>Before investing, before founding, ask the five. Then ask which one you'd most need to be wrong about.</p>`,
 src:"after Michael Porter, Competitive Strategy (1980)"},

{slug:"n-q-moat-type", type:"quaestio", f:"N",
 title:"What Kind of Moat?",
 body:`<p>A company has 40% gross margins, grows 15% annually, and has held market share for a decade. Buffett asks: <em>what kind of moat?</em> If you can't name the specific moat type, you don't know what you own.</p>`,
 opts:["Brand loyalty","Network effects","Switching costs","Economies of scale","You should be able to say which — and if you can't, you don't actually understand the business"],
 correct:4,
 reveal:`<p>The point of the question isn't to pick one. It's that <em>a durable 40% gross margin with 15% growth is a textbook case of a moat</em>, and if you're invested without knowing which structural force protects those margins, you can't tell when it's eroding.</p>
<p>The five main moat types: <strong>intangibles</strong> (brand, patents, regulatory licenses); <strong>switching costs</strong> (hard or expensive to leave); <strong>network effects</strong> (value scales with users); <strong>cost advantage</strong> (structural, not temporary); <strong>efficient scale</strong> (market only supports one or two players). Name the moat before you buy the stock.</p>`,
 src:"Buffett + Pat Dorsey, The Little Book That Builds Wealth"},

{slug:"n-sowell-trade-offs", type:"lectio", f:"N", title:"There Are No Solutions",
 body:`<blockquote>There are no solutions. There are only trade-offs.</blockquote>
<p>Sowell's compressed economics in a sentence. Any policy, any strategic choice, any resource allocation — framed as a <em>solution</em> instead of a trade-off, hides its costs. The costs don't disappear; they migrate.</p>
<p>Minimum wage laws don't solve low wages; they trade higher pay for some against unemployment for others. Rent control doesn't solve housing; it trades below-market rent for existing tenants against housing scarcity for everyone else. Diversification doesn't solve risk; it trades upside for downside protection.</p>
<p>The right question is never "does it work?" It's "what does it cost, and who pays?"</p>`,
 src:"after Thomas Sowell"},

{slug:"n-kelly-criterion", type:"lectio", f:"N", title:"How Much to Bet",
 body:`<p>You have a positive-expected-value bet. How much of your capital should you put on it?</p>
<p>The Kelly criterion gives the mathematically optimal fraction: <strong>f = (bp − q) / b</strong>, where b is the net odds, p is probability of winning, q is probability of losing. For a 2:1 payoff bet at 60% probability, you bet 40% of bankroll.</p>
<p>Nobody except a few professional gamblers and the occasional hedge fund actually bets full Kelly. Why? Because Kelly maximizes <em>geometric growth</em> given <em>known</em> probabilities. Your probability estimates have errors. Full Kelly is wildly volatile. Most practitioners bet <em>half-Kelly</em> or <em>quarter-Kelly</em> — accepting slower growth for much lower variance and robustness to being wrong about p.</p>
<p>Buffett sizes positions this way, roughly. He has never said so. He doesn't need to.</p>`,
 src:"John Kelly (1956); applied by Thorp, Buffett, et al."},

{slug:"n-q-base-rates", type:"quaestio", f:"N",
 title:"Mammograms",
 body:`<p>Classic base-rate problem. A disease affects 1% of women over 40. A mammogram has an 80% true positive rate (catches 80% of actual cases) and a 10% false positive rate. A woman tests positive. What's the probability she actually has the disease?</p>`,
 opts:["80%","Around 50%","Around 7%"],
 correct:2,
 reveal:`<p>Bayes: of 1,000 women, 10 have it. Of those 10, 8 test positive (true positives). Of the 990 who don't, 99 test positive (false positives). So 8 of 107 positive tests reflect real disease. <strong>About 7%.</strong></p>
<p>Doctors asked this question routinely answer 80%. So do investors evaluating analyst recommendations, VC pitches, and startup pivots. Base rate neglect is the single most reliable analytical error. The fix: write down the base rate before you touch the evidence.</p>`,
 src:"Kahneman + Tversky; see also Gigerenzer, Reckoning With Risk"},

{slug:"n-drucker-useless", type:"sententia", f:"N",
 body:{latin:"Nihil tam inutile quam efficaciter facere quod omnino facere non debet.", english:"There is nothing so useless as doing efficiently that which should not be done at all. — Peter Drucker"}},

{slug:"n-thiel-what-truth", type:"suffragium", f:"N",
 title:"Thiel's Contrarian Question",
 body:`<p>Peter Thiel's interview question: <em>what important truth do very few people agree with you on?</em> Most answers are not actually contrarian; they're mainstream positions dressed as transgressions. A real answer should feel uncomfortable to say. What's yours?</p>`,
 opts:["I have a real one and it costs me socially to hold it","I have one but I'm not sure I'd stake career on it","I thought I had one but it turns out most people secretly agree"]},

{slug:"n-christensen-100-percent", type:"lectio", f:"N", title:"100% Is Easier Than 98%",
 body:`<p>Clayton Christensen, in one of his most-cited passages: <strong>100% of the time is easier than 98% of the time.</strong></p>
<p>If you have decided never to lie on expense reports, you don't deliberate when the gray-area situation arises. If you're at 98% — "almost always" — every single situation requires fresh deliberation, with the full weight of the specific temptation. The marginal cost of each exception feels small. The cumulative cost is a character.</p>
<p>Rules you keep absolutely are not rigidity. They are the opposite: they free the mind from endless re-litigation of what you already decided. Pick the few that matter and never bend them. On the rest, flex.</p>`,
 src:"Clayton Christensen, How Will You Measure Your Life?"},

{slug:"n-taleb-via-negativa", type:"lectio", f:"N", title:"Via Negativa",
 body:`<p>Taleb's practical maxim, borrowed from theology: <em>improve by removal</em>, not by addition.</p>
<p>Health: the gains from <em>stopping</em> smoking, sugar, late nights are larger and more reliable than any supplement you can add. Investing: avoiding ruin, overvalued fads, and leverage matters more than finding the next winner. Writing: cutting bad sentences improves the piece more than adding good ones.</p>
<p>Addition requires luck (did you add the right thing?). Removal is deterministic (the harm is gone). In a world of uncertainty, the asymmetry favors subtraction. Build negative lists — things you will not do, buy, read, agree to — before positive ones.</p>`,
 src:"Nassim Taleb, Antifragile"},

];

// Separate axiom pool — inserted every 8th slot
// ================================================================
// IMAGINES — "How to read a painting"
// Each walkthrough is a SERIES of 5 pictura folios. They play as a
// group: zoom(1x whole) → zoom to detail 1 → detail 2 → detail 3 → detail 4.
// The pool() grouper keeps a series contiguous.
// ================================================================

const IMAGINES = [
  // ===== VERMEER — Woman Holding a Balance (c. 1662-64) =====
  {slug:"i-ver-bal-01", type:"pictura", f:"I", series:"vermeer_balance", step:1, steps:5,
   img:IMG.vermeer_balance, zoom:{x:50, y:50, scale:1},
   title:"The Whole · Woman Holding a Balance",
   title_pt:"O Todo · Mulher com uma Balança",
   body:`<p>Before you look at any part, look at the whole. A woman stands by a window, calm, in late pregnancy, holding an empty balance between her finger and thumb. On the wall behind her, a <em>Last Judgment</em>. On the table, gold, pearls, a mirror.</p>
<p>Everything in this painting is weighed. The pearls will be weighed. The balance pans are empty, nothing on them yet. Behind her, Christ is weighing souls. The woman stands at the exact axis of the painting. She is the <strong>fulcrum</strong>. Look longer.</p>`,
   body_pt:`<p>Antes de olhar qualquer parte, olhe o todo. Uma mulher está perto da janela, serena, no fim da gravidez, segurando uma balança vazia entre o dedo e o polegar. Na parede atrás dela, um <em>Juízo Final</em>. Na mesa, ouro, pérolas, um espelho.</p>
<p>Tudo neste quadro está sendo pesado. As pérolas serão pesadas. Os pratos da balança estão vazios, ainda não há nada sobre eles. Atrás dela, Cristo pesa almas. A mulher está no eixo exato do quadro. Ela é o <strong>fulcro</strong>. Olhe por mais tempo.</p>`,
   src:"Vermeer, c. 1662-64 · National Gallery, Washington"},

  {slug:"i-ver-bal-02", type:"pictura", f:"I", series:"vermeer_balance", step:2, steps:5,
   img:IMG.vermeer_balance, zoom:{x:40, y:50, scale:2.3},
   title:"The Balance",
   title_pt:"A Balança",
   body:`<p>The pans are empty. This is the painting's quiet puzzle. For centuries scholars assumed she was weighing pearls, and then noticed the pans contain nothing. She is weighing <em>potential</em>: holding the instrument steady before anything is placed on it.</p>
<p>Her hand is relaxed. The finger-and-thumb grip is the exact gesture a jeweler uses. Vermeer painted this with the kind of attention that only a man who had held such an instrument himself could paint.</p>`,
   body_pt:`<p>Os pratos estão vazios. Esse é o enigma silencioso do quadro. Por séculos, estudiosos imaginaram que ela estava pesando pérolas, e então notaram que os pratos não têm nada. Ela está pesando <em>potência</em>: segurando o instrumento firme antes de qualquer peso ser colocado nele.</p>
<p>A mão está relaxada. O pegar com dedo e polegar é o gesto exato de um joalheiro. Vermeer pintou isso com a atenção que só um homem que já segurou um instrumento assim conseguiria pintar.</p>`,
   src:"Vermeer, detail · the balance"},

  {slug:"i-ver-bal-03", type:"pictura", f:"I", series:"vermeer_balance", step:3, steps:5,
   img:IMG.vermeer_balance, zoom:{x:44, y:20, scale:2.3},
   title:"The Face",
   title_pt:"O Rosto",
   body:`<p>She is looking down. Her eyes are nearly closed. This is not vacancy, it is <strong>recollection</strong>, the medieval contemplative pose. The light from the window falls on her forehead, catches on the gold border of her headdress, and dies on her collar.</p>
<p>Vermeer paints the exact edge where light stops being light and starts being dark. He is the greatest painter of that edge in Western art.</p>`,
   body_pt:`<p>Ela está olhando para baixo. Os olhos quase fechados. Isto não é vazio, é <strong>recolhimento</strong>, a pose contemplativa medieval. A luz da janela cai na testa, se agarra à borda dourada do véu e morre no colarinho.</p>
<p>Vermeer pinta o limite exato onde a luz deixa de ser luz e começa a ser sombra. Ele é o maior pintor desse limite em toda a arte ocidental.</p>`,
   src:"Vermeer, detail · the face"},

  {slug:"i-ver-bal-04", type:"pictura", f:"I", series:"vermeer_balance", step:4, steps:5,
   img:IMG.vermeer_balance, zoom:{x:72, y:38, scale:2.3},
   title:"The Last Judgment",
   title_pt:"O Juízo Final",
   body:`<p>Over her shoulder, a painting within the painting: Christ enthroned, dividing the saved from the damned. The <em>top</em> of the balance she holds in her hand aligns, almost exactly, with Christ's heart in the painting behind her.</p>
<p>This is Vermeer telling you what the picture is <strong>about</strong>. Every mortal weighing, of a pearl, of a coin, of the day's work, happens under a greater weighing. She stands between the two. So do you.</p>`,
   body_pt:`<p>Sobre o ombro dela, um quadro dentro do quadro: Cristo entronizado, separando os salvos dos condenados. O <em>topo</em> da balança que ela segura na mão se alinha, quase exatamente, com o coração de Cristo no quadro atrás.</p>
<p>É Vermeer te dizendo <strong>do que</strong> o quadro trata. Todo pesar mortal, de uma pérola, de uma moeda, do trabalho do dia, acontece sob um pesar maior. Ela está entre os dois. Você também.</p>`,
   src:"Vermeer, detail · the painting behind her"},

  {slug:"i-ver-bal-05", type:"pictura", f:"I", series:"vermeer_balance", step:5, steps:5, rare:1,
   img:IMG.vermeer_balance, zoom:{x:36, y:70, scale:2.6},
   title:"What Is On the Table",
   title_pt:"O Que Está Sobre a Mesa",
   body:`<p>Gold chains spilled across the table. Pearls loose in their open boxes. A mirror, the symbol of vanity in Dutch painting. These are the things of the world, lovingly rendered, beautifully lit.</p>
<p>Vermeer is not saying they are bad. He is saying they are to be <em>weighed</em>. The pearls catch the window-light with a specificity that proves he loved them, and the balance in her hand says: this love must be measured against the other weighing, the one behind her.</p>
<p>You have now read a painting. The whole, the hand, the face, the painting behind her, the table. This is what the eye does when it is taught.</p>`,
   body_pt:`<p>Correntes de ouro espalhadas na mesa. Pérolas soltas em caixas abertas. Um espelho, o símbolo da vaidade na pintura holandesa. Estas são as coisas do mundo, pintadas com amor, iluminadas com cuidado.</p>
<p>Vermeer não está dizendo que são ruins. Ele está dizendo que elas devem ser <em>pesadas</em>. As pérolas captam a luz da janela com uma precisão que prova que ele as amava, e a balança na mão dela diz: esse amor precisa ser medido contra o outro pesar, aquele atrás.</p>
<p>Você acaba de ler um quadro. O todo, a mão, o rosto, o quadro atrás dela, a mesa. É isso que o olho faz quando é ensinado.</p>`,
   src:"Vermeer · the whole, finally seen"},

  // ===== CARAVAGGIO — Calling of St Matthew (1599-1600) =====
  {slug:"i-car-mat-01", type:"pictura", f:"I", series:"caravaggio_matthew", step:1, steps:5,
   img:IMG.caravaggio_matthew, zoom:{x:50, y:50, scale:1},
   title:"The Whole · The Calling of St Matthew",
   title_pt:"O Todo · O Chamado de São Mateus",
   body:`<p>A tax-collector's office. Four men counting money at a table. Two figures walk in from the right, barely visible, in shadow. One of them raises a hand.</p>
<p>A beam of light enters with them. It is impossibly directed, not from a window, not natural. It falls across the room and lands on one specific face. That face is Matthew's.</p>
<p>In the next four panels we go to: the hand that calls, the hand that answers, the money being left behind, and the light that explains it all.</p>`,
   body_pt:`<p>Um escritório de cobrador de impostos. Quatro homens contam dinheiro em uma mesa. Duas figuras entram pela direita, mal visíveis, na sombra. Uma delas levanta a mão.</p>
<p>Um feixe de luz entra com elas. Direcionado de forma impossível, não vem de janela, não é natural. Atravessa a sala e cai sobre um rosto específico. Esse rosto é de Mateus.</p>
<p>Nos próximos quatro painéis vamos olhar: a mão que chama, a mão que responde, o dinheiro que será deixado, e a luz que explica tudo.</p>`,
   src:"Caravaggio, 1599-1600 · Contarelli Chapel, Rome"},

  {slug:"i-car-mat-02", type:"pictura", f:"I", series:"caravaggio_matthew", step:2, steps:5,
   img:IMG.caravaggio_matthew, zoom:{x:76, y:48, scale:2.4},
   title:"The Hand That Calls",
   title_pt:"A Mão Que Chama",
   body:`<p>Christ's arm extends across the shadow. The hand is a direct quotation of Michelangelo's <em>Creation of Adam</em> on the Sistine ceiling, the same languid finger. Caravaggio knew exactly what he was doing. He is saying: a new creation is happening, right now, in this tax office.</p>
<p>The old creation gave life to the body. This one gives life to the soul. Same gesture, four generations apart.</p>`,
   body_pt:`<p>O braço de Cristo se estende sobre a sombra. A mão é uma citação direta da <em>Criação de Adão</em> de Michelangelo no teto da Sistina, o mesmo dedo languido. Caravaggio sabia exatamente o que estava fazendo. Ele diz: uma nova criação acontece, agora, neste escritório de impostos.</p>
<p>A criação antiga deu vida ao corpo. Esta aqui dá vida à alma. O mesmo gesto, com quatro gerações de distância.</p>`,
   src:"Caravaggio, detail · Christ's hand (echoing Michelangelo)"},

  {slug:"i-car-mat-03", type:"pictura", f:"I", series:"caravaggio_matthew", step:3, steps:5,
   img:IMG.caravaggio_matthew, zoom:{x:40, y:50, scale:2.4},
   title:"The Hand That Answers",
   title_pt:"A Mão Que Responde",
   body:`<p>Matthew points. But to whom? For four centuries scholars have argued: at himself (astonished, <em>me?</em>), or at the young man beside him (<em>him? not me</em>).</p>
<p>Caravaggio left it deliberately unresolved. The ambiguity is the point. The call is <strong>always</strong> felt first as a mistake, <em>surely you don't mean me</em>. The hand is the exact pictorial equivalent of that moment.</p>`,
   body_pt:`<p>Mateus aponta. Mas para quem? Por quatro séculos os estudiosos discutem: para si mesmo (atônito, <em>eu?</em>), ou para o jovem ao lado (<em>ele? não eu</em>).</p>
<p>Caravaggio deixou isso de propósito sem resposta. A ambiguidade é o ponto. O chamado é <strong>sempre</strong> sentido primeiro como um engano, <em>o Senhor não pode estar falando comigo</em>. A mão é o equivalente pictórico exato desse instante.</p>`,
   src:"Caravaggio, detail · Matthew's gesture"},

  {slug:"i-car-mat-04", type:"pictura", f:"I", series:"caravaggio_matthew", step:4, steps:5,
   img:IMG.caravaggio_matthew, zoom:{x:30, y:76, scale:2.6},
   title:"What Is Being Left Behind",
   title_pt:"O Que Será Deixado",
   body:`<p>Coins. Stacked, counted, catalogued. The two men on the left are still looking at them, they haven't noticed the Christ yet. They are still inside the old life.</p>
<p>Matthew will stand up. He will leave this. The money will stay on the table. Caravaggio is not moralizing. He is simply painting the <em>exact instant</em> at which a man's attention leaves one world for another. The coins don't know yet. The counters don't know yet. Matthew is already somewhere else.</p>`,
   body_pt:`<p>Moedas. Empilhadas, contadas, catalogadas. Os dois homens à esquerda ainda estão olhando para elas, ainda não notaram o Cristo. Continuam dentro da vida antiga.</p>
<p>Mateus vai se levantar. Vai deixar isso. O dinheiro vai ficar na mesa. Caravaggio não está moralizando. Ele está pintando o <em>instante exato</em> em que a atenção de um homem deixa um mundo e vai para outro. As moedas ainda não sabem. Os contadores ainda não sabem. Mateus já está em outro lugar.</p>`,
   src:"Caravaggio, detail · the coins that will be left"},

  {slug:"i-car-mat-05", type:"pictura", f:"I", series:"caravaggio_matthew", step:5, steps:5, rare:1,
   img:IMG.caravaggio_matthew, zoom:{x:72, y:22, scale:2.1},
   title:"The Light",
   title_pt:"A Luz",
   body:`<p>Caravaggio invented a kind of light the Renaissance did not have. It does not illuminate the scene, it <em>interrogates</em> it. It picks out one face and leaves the rest in doubt.</p>
<p>This is called <em>tenebrism</em>, the dramatic emergence of figures from near-black. But the theological point is older. It is John 1:5: <em>the light shines in the darkness, and the darkness has not comprehended it.</em> The men in shadow are the darkness. The light has walked in. One face has turned toward it. The painting is the exact instant of that turning.</p>
<p>Now scroll back and see the first panel again. You will see the whole picture differently. That is what reading a painting means.</p>`,
   body_pt:`<p>Caravaggio inventou um tipo de luz que a Renascença não tinha. Ela não ilumina a cena, ela a <em>interroga</em>. Ela escolhe um rosto e deixa o resto em dúvida.</p>
<p>Isso se chama <em>tenebrismo</em>, a emergência dramática das figuras a partir do quase-preto. Mas o ponto teológico é mais antigo. É João 1:5: <em>a luz brilha nas trevas, e as trevas não a compreenderam.</em> Os homens na sombra são as trevas. A luz entrou. Um rosto se voltou para ela. O quadro é o instante exato dessa virada.</p>
<p>Agora volte e veja o primeiro painel. Você vai ver tudo diferente. Isso é o que significa ler um quadro.</p>`,
   src:"Caravaggio · the light that explains everything"},

  // ===== FRA ANGELICO — The Annunciation (c. 1437-46) =====
  {slug:"i-ang-ann-01", type:"pictura", f:"I", series:"fra_angelico_annunciation", step:1, steps:5,
   img:IMG.fra_angelico_annunciation, zoom:{x:50, y:50, scale:1},
   title:"The Whole · The Annunciation",
   title_pt:"O Todo · A Anunciação",
   body:`<p>A loggia. A garden on the left, bathed in morning light. On the right, a seated young woman in blue, hands crossed in reception. An angel kneels before her, wings still folded from flight. Behind them both, a small barred window into a darker inner room.</p>
<p>Fra Angelico painted this on the wall of a Dominican friar's cell at San Marco in Florence, so that every morning, when the friar woke, the first thing he saw was this moment: the instant the world was told it would be saved.</p>
<p>The architecture is Florentine. The angel is from heaven. The woman is from Nazareth. The three worlds meet in one portico.</p>`,
   body_pt:`<p>Uma loggia. Um jardim à esquerda, banhado em luz da manhã. À direita, uma jovem sentada de azul, com as mãos cruzadas em recepção. Um anjo se ajoelha diante dela, as asas ainda dobradas do voo. Atrás dos dois, uma pequena janela gradeada que dá para uma sala interior mais escura.</p>
<p>Fra Angelico pintou isto na parede da cela de um frade dominicano em San Marco, Florença, para que toda manhã, quando o frade acordasse, a primeira coisa que visse fosse este instante: o momento em que o mundo foi avisado que seria salvo.</p>
<p>A arquitetura é florentina. O anjo é do céu. A mulher é de Nazaré. Os três mundos se encontram em um pórtico só.</p>`,
   src:"Fra Angelico, c. 1437-46 · Convent of San Marco, Florence"},

  {slug:"i-ang-ann-02", type:"pictura", f:"I", series:"fra_angelico_annunciation", step:2, steps:5,
   img:IMG.fra_angelico_annunciation, zoom:{x:30, y:50, scale:2.3},
   title:"The Angel",
   title_pt:"O Anjo",
   body:`<p>Gabriel kneels. He is bigger than the human figure next to him, as beings from a higher order should be, but his bow is deeper than hers. Hierarchy and reverence are not opposites. He is proving it.</p>
<p>The wings are pink and gold, pulled tight to the body. The halo is a flat disc of pure gold leaf, pressed into the plaster. Fra Angelico learned this technique as a young friar illuminating manuscripts. He never gave it up. For him, gold did not <em>represent</em> glory, it <em>was</em> glory.</p>`,
   body_pt:`<p>Gabriel se ajoelha. Ele é maior que a figura humana ao lado, como seres de uma ordem superior devem ser, mas a reverência dele é mais profunda que a dela. Hierarquia e reverência não são contrários. Ele está provando isso.</p>
<p>As asas são rosa e douradas, bem coladas ao corpo. A auréola é um disco liso de folha de ouro, pressionado no reboco. Fra Angelico aprendeu essa técnica quando jovem frade iluminando manuscritos. Nunca abandonou. Para ele, ouro não <em>representava</em> glória, ouro <em>era</em> glória.</p>`,
   src:"Fra Angelico, detail · the angel Gabriel"},

  {slug:"i-ang-ann-03", type:"pictura", f:"I", series:"fra_angelico_annunciation", step:3, steps:5,
   img:IMG.fra_angelico_annunciation, zoom:{x:68, y:50, scale:2.3},
   title:"The Hands",
   title_pt:"As Mãos",
   body:`<p>Her hands are crossed over her chest. This is the exact iconographic sign of a <em>fiat</em>, a yes, a full consent to what has just been proposed. In the medieval tradition, this crossing is also the pose of the dead being prepared for burial. The painter is already thinking about the Pietà, thirty-three years away.</p>
<p>She has not spoken yet. The whole painting hangs on this gesture. Luke 1:38 is a moment later: <em>be it done to me according to thy word</em>. The hands get there first.</p>`,
   body_pt:`<p>As mãos dela estão cruzadas sobre o peito. Esse é o sinal iconográfico exato de um <em>fiat</em>, de um sim, de um consentimento pleno ao que acabou de ser proposto. Na tradição medieval, esse cruzamento também é a pose dos mortos sendo preparados para o sepultamento. O pintor já está pensando na Pietà, trinta e três anos à frente.</p>
<p>Ela ainda não falou. O quadro inteiro depende desse gesto. Lucas 1:38 é um instante depois: <em>faça-se em mim segundo a tua palavra</em>. As mãos chegam primeiro.</p>`,
   src:"Fra Angelico, detail · the Virgin's hands"},

  {slug:"i-ang-ann-04", type:"pictura", f:"I", series:"fra_angelico_annunciation", step:4, steps:5,
   img:IMG.fra_angelico_annunciation, zoom:{x:14, y:35, scale:2.5},
   title:"The Garden",
   title_pt:"O Jardim",
   body:`<p>Behind the angel, through the colonnade, a garden. This is not decoration. In medieval iconography, every Annunciation is set near a garden to recall <em>another</em> garden: Eden, where the first <em>no</em> was spoken by the first woman. The second woman is being asked, in the second garden, to say <em>yes</em>.</p>
<p>Fra Angelico puts tiny white flowers on the garden floor and leaves the gate open. The viewer is meant to see both gardens at once, Eden and Nazareth, and understand that the second one is undoing the first.</p>`,
   body_pt:`<p>Atrás do anjo, pela colunata, um jardim. Isso não é decoração. Na iconografia medieval, toda Anunciação é colocada perto de um jardim para lembrar <em>outro</em> jardim: o Éden, onde o primeiro <em>não</em> foi dito pela primeira mulher. À segunda mulher, no segundo jardim, está sendo pedido que diga <em>sim</em>.</p>
<p>Fra Angelico coloca florzinhas brancas no chão do jardim e deixa o portão aberto. O espectador deve ver os dois jardins ao mesmo tempo, Éden e Nazaré, e entender que o segundo está desfazendo o primeiro.</p>`,
   src:"Fra Angelico, detail · the garden"},

  {slug:"i-ang-ann-05", type:"pictura", f:"I", series:"fra_angelico_annunciation", step:5, steps:5, rare:1,
   img:IMG.fra_angelico_annunciation, zoom:{x:84, y:28, scale:2.4},
   title:"The Barred Window",
   title_pt:"A Janela Gradeada",
   body:`<p>Just past Mary's shoulder: a small window with vertical bars, into a darker room. Easy to miss. Not accidental.</p>
<p>Dominican friars reading this fresco knew what it meant. The inner room is her chamber, where she was praying when Gabriel came in. The bars are the virginity she brought to this moment and will keep through it. The darkness is the mystery she is being asked to carry. The painter has placed the whole theology of the moment in a window the size of a thumb.</p>
<p>Go back to panel one. The window is still there. You will not stop seeing it. That is what Fra Angelico does to you.</p>`,
   body_pt:`<p>Logo depois do ombro de Maria: uma pequena janela com barras verticais, dando para uma sala mais escura. Fácil de não notar. Nada aqui é por acidente.</p>
<p>Os frades dominicanos que liam este afresco sabiam o que isso queria dizer. A sala interior é o quarto dela, onde ela orava quando Gabriel entrou. As barras são a virgindade que ela trouxe para este momento e vai manter através dele. A escuridão é o mistério que lhe está sendo pedido para carregar. O pintor colocou toda a teologia do momento numa janela do tamanho de um dedão.</p>
<p>Volte ao primeiro painel. A janela ainda está lá. Você não vai parar de vê-la. É isso que Fra Angelico te faz.</p>`,
   src:"Fra Angelico · the window of the inner room"},

  // ===== VAN EYCK — The Arnolfini Portrait (1434) =====
  {slug:"i-van-arn-01", type:"pictura", f:"I", series:"van_eyck_arnolfini", step:1, steps:5,
   img:IMG.van_eyck_arnolfini, zoom:{x:50, y:50, scale:1},
   title:"The Whole · The Arnolfini Portrait",
   title_pt:"O Todo · O Retrato dos Arnolfini",
   body:`<p>A merchant and his wife stand in a Flemish bedroom in 1434. He is in dark fur, she in deep green. Their hands are joined. Between them, in the back of the room, a small round mirror. Above the mirror, in careful Latin script: <em>Johannes de Eyck fuit hic</em>, Jan van Eyck was here.</p>
<p>This is one of the most studied paintings in the world because every object in it means something, and because van Eyck invented the technical means (oil glazes, point-by-point optical realism) that would carry Western painting for the next four centuries. In four panels we will read the mirror, the dog, the shoes, and the signature.</p>`,
   body_pt:`<p>Um mercador e sua esposa estão em um quarto flamengo em 1434. Ele de peles escuras, ela de verde profundo. As mãos deles estão juntas. Entre os dois, no fundo do quarto, um pequeno espelho redondo. Acima do espelho, em letra latina cuidadosa: <em>Johannes de Eyck fuit hic</em>, Jan van Eyck esteve aqui.</p>
<p>Este é um dos quadros mais estudados do mundo porque cada objeto nele significa alguma coisa, e porque van Eyck inventou os meios técnicos (velaturas a óleo, realismo óptico ponto a ponto) que iriam carregar a pintura ocidental pelos próximos quatro séculos. Em quatro painéis vamos ler o espelho, o cachorro, os sapatos e a assinatura.</p>`,
   src:"Jan van Eyck, 1434 · National Gallery, London"},

  {slug:"i-van-arn-02", type:"pictura", f:"I", series:"van_eyck_arnolfini", step:2, steps:5,
   img:IMG.van_eyck_arnolfini, zoom:{x:50, y:38, scale:2.9},
   title:"The Mirror",
   title_pt:"O Espelho",
   body:`<p>In the back of the room, the convex mirror. In the mirror, if you look closely, you see the backs of the two subjects, and you see <em>two more figures</em> standing in the doorway, where you, the viewer, are standing.</p>
<p>One of them is almost certainly van Eyck himself. He is painting a scene that includes him painting the scene. Four and a half centuries before <em>Las Meninas</em>, before any modernist self-reference, this Flemish master has already done the move.</p>
<p>Around the mirror's frame: ten tiny roundels, each one a scene from the Passion of Christ. The miniature world in the mirror is embedded in the full theological world of the Gospel.</p>`,
   body_pt:`<p>No fundo do quarto, o espelho convexo. No espelho, se você olhar bem, vê as costas dos dois modelos, e vê <em>mais duas figuras</em> na porta, onde você, o espectador, está.</p>
<p>Uma delas é quase com certeza o próprio van Eyck. Ele está pintando uma cena que o inclui pintando a cena. Quatro séculos e meio antes de <em>Las Meninas</em>, antes de qualquer auto-referência modernista, este mestre flamengo já fez a jogada.</p>
<p>Ao redor da moldura do espelho: dez pequenos medalhões, cada um uma cena da Paixão de Cristo. O mundo em miniatura dentro do espelho está encaixado no mundo teológico pleno do Evangelho.</p>`,
   src:"Van Eyck, detail · the convex mirror"},

  {slug:"i-van-arn-03", type:"pictura", f:"I", series:"van_eyck_arnolfini", step:3, steps:5,
   img:IMG.van_eyck_arnolfini, zoom:{x:50, y:82, scale:2.6},
   title:"The Dog",
   title_pt:"O Cão",
   body:`<p>Between their feet, a small Brussels griffon. Dogs in Flemish painting carry one meaning above all others: <em>fides</em>, fidelity. The dog is here because the painting is about a marriage, and a marriage is a vow of fidelity.</p>
<p>Van Eyck painted every single hair on this dog. The specificity is theological: the virtue the dog symbolizes is not an abstraction, it is this animal, in this room, with these two people. Fidelity has fur. It stands between them.</p>`,
   body_pt:`<p>Entre os pés dos dois, um pequeno grifão de Bruxelas. Cachorros na pintura flamenga carregam um sentido acima de todos: <em>fides</em>, fidelidade. O cachorro está aí porque o quadro trata de um casamento, e um casamento é um voto de fidelidade.</p>
<p>Van Eyck pintou cada pelo deste cachorro. A especificidade é teológica: a virtude que o cachorro simboliza não é uma abstração, é este animal, neste quarto, com estas duas pessoas. A fidelidade tem pelo. E está parada entre eles.</p>`,
   src:"Van Eyck, detail · the dog"},

  {slug:"i-van-arn-04", type:"pictura", f:"I", series:"van_eyck_arnolfini", step:4, steps:5,
   img:IMG.van_eyck_arnolfini, zoom:{x:28, y:88, scale:2.7},
   title:"The Shoes",
   title_pt:"Os Sapatos",
   body:`<p>In the foreground, pushed to the corner, a pair of wooden pattens, taken off. The man is barefoot inside them. In the Hebrew tradition, which van Eyck knew through the Vulgate, taking off shoes marks sacred ground. <em>The place where thou standest is holy ground</em>, God tells Moses at the burning bush.</p>
<p>Van Eyck is saying: this is a sacred space. This room, this marriage, this moment between two people, is a thing not less holy than Sinai. The Flemish merchant culture, which the modern eye tends to see as worldly, was in fact one of the most devout in European history, and it believed that daily life itself was sacred ground. The pattens are the proof.</p>`,
   body_pt:`<p>No primeiro plano, empurrados para o canto, um par de tamancos de madeira, tirados. O homem está descalço dentro deles. Na tradição hebraica, que van Eyck conhecia pela Vulgata, tirar os sapatos marca o chão sagrado. <em>O lugar onde pisas é terra santa</em>, Deus diz a Moisés na sarça ardente.</p>
<p>Van Eyck está dizendo: este é um espaço sagrado. Este quarto, este casamento, este momento entre duas pessoas, é tão santo quanto o Sinai. A cultura mercantil flamenga, que o olho moderno tende a ver como mundana, era de fato uma das mais devotas da história europeia, e acreditava que a vida cotidiana em si era chão sagrado. Os tamancos provam.</p>`,
   src:"Van Eyck, detail · the discarded pattens"},

  {slug:"i-van-arn-05", type:"pictura", f:"I", series:"van_eyck_arnolfini", step:5, steps:5, rare:1,
   img:IMG.van_eyck_arnolfini, zoom:{x:50, y:33, scale:2.7},
   title:"The Signature",
   title_pt:"A Assinatura",
   body:`<p>In exquisite Latin calligraphy above the mirror: <em>Johannes de Eyck fuit hic. 1434.</em> Jan van Eyck was here. 1434.</p>
<p>Painters of his generation did not sign paintings like this. The signature is normally a tiny mark on the frame, a monogram in a dark corner. Van Eyck puts his name in Latin on the back wall of the room, in letters a saint would envy, as a witness: <em>I was present. This happened. I saw it.</em></p>
<p>Scholars argue whether the painting records a wedding, a betrothal, or a legal declaration of some kind. What is not in doubt is that van Eyck is claiming the role of a witness to a sacrament. He is not just a painter. He is a notary of grace. The whole subsequent history of Western portraiture, every claim that a painted face bears witness to a soul, begins in that one line of script.</p>`,
   body_pt:`<p>Em caligrafia latina belíssima, acima do espelho: <em>Johannes de Eyck fuit hic. 1434.</em> Jan van Eyck esteve aqui. 1434.</p>
<p>Pintores da geração dele não assinavam quadros assim. A assinatura normal é uma marca pequena na moldura, um monograma em um canto escuro. Van Eyck coloca seu nome em latim na parede do fundo da sala, em letras que um santo invejaria, como testemunha: <em>eu estive presente. Isto aconteceu. Eu vi.</em></p>
<p>Estudiosos discutem se o quadro registra um casamento, um noivado ou algum tipo de declaração legal. O que não se discute é que van Eyck está reivindicando o papel de testemunha de um sacramento. Ele não é só um pintor. É um notário da graça. Toda a história posterior do retrato ocidental, toda alegação de que um rosto pintado dá testemunho de uma alma, começa naquela linha de letra.</p>`,
   src:"Van Eyck · the signature on the back wall"}
];

// ================================================================
// LUDUS — interactive games, one every ~12 slides.
// Two modes right now: "match" (pair quotes to authors) and "sort"
// (put items in chronological order). The slide builder gives each
// mode its own interaction.
// ================================================================

const LUDI = [
  // ===== THEOLOGY — Author Match =====
  {slug:"lu-theo-authors", type:"ludus", mode:"match", f:"T", rare:1,
   title:"Ludus · Who Said It?",
   body:`<p>Tap a quote, then tap the author. Four pairs. See how many you get on the first try.</p>`,
   pairs:[
     {q:"Our hearts are restless until they rest in Thee.", a:"Augustine"},
     {q:"I believe so that I may understand.", a:"Anselm"},
     {q:"Grace does not destroy nature but perfects it.", a:"Aquinas"},
     {q:"When men stop believing in God, they believe in anything.", a:"Chesterton"}
   ],
   src:"Author Match · Theologia"},

  // ===== ECONOMICS — Author Match =====
  {slug:"lu-econ-authors", type:"ludus", mode:"match", f:"O", rare:1,
   title:"Ludus · Who Said It?",
   body:`<p>Four quotes, four names. Match them.</p>`,
   pairs:[
     {q:"Man acts to replace a less satisfactory state with a more satisfactory one.", a:"Mises"},
     {q:"The curious task of economics is to show men how little they know about what they imagine they can design.", a:"Hayek"},
     {q:"Price is what you pay. Value is what you get.", a:"Buffett"},
     {q:"Show me the incentive and I'll show you the outcome.", a:"Munger"}
   ],
   src:"Author Match · Oeconomia / Negotium"},

  // ===== HISTORY — Chronology Sort =====
  {slug:"lu-hist-chrono", type:"ludus", mode:"sort", f:"H",
   title:"Ludus · In What Order Did They Happen?",
   body:`<p>Tap each one in order — oldest first. Four events of the Western story.</p>`,
   items:[
     {label:"Augustine finishes The City of God", year:426},
     {label:"Luther nails up the 95 Theses", year:1517},
     {label:"The French Revolution begins", year:1789},
     {label:"The Berlin Wall falls", year:1989}
   ],
   src:"Chronology · Historia I"},

  // ===== NEGOTIUM — Chronology Sort =====
  {slug:"lu-fin-chrono", type:"ludus", mode:"sort", f:"N",
   title:"Ludus · The Books That Shaped Markets",
   body:`<p>Four landmark books in economics and investing — put them in the order they were published.</p>`,
   items:[
     {label:"Smith · Wealth of Nations", year:1776},
     {label:"Hayek · Road to Serfdom", year:1944},
     {label:"Mises · Human Action", year:1949},
     {label:"Graham · The Intelligent Investor", year:1949}
   ],
   src:"Chronology · Negotium I · note: Human Action & Intelligent Investor both 1949 — same year counts as adjacent"},

  // ===== PULCHRUM — Painter / Painting match =====
  {slug:"lu-art-paintings", type:"ludus", mode:"match", f:"P",
   title:"Ludus · Painter and Painting",
   body:`<p>Four paintings, four painters. Match them.</p>`,
   pairs:[
     {q:"The Calling of Saint Matthew", a:"Caravaggio"},
     {q:"Woman Holding a Balance", a:"Vermeer"},
     {q:"The School of Athens", a:"Raphael"},
     {q:"The Fighting Téméraire", a:"Turner"}
   ],
   src:"Painter Match · Pulchrum"},

  // ===== ARSENAL — Thinker match =====
  {slug:"lu-arse-match", type:"ludus", mode:"match", f:"A", rare:1,
   title:"Ludus · Thinkers From the Arsenal",
   body:`<p>Four claims drawn from the essays, four thinkers who said them. Match.</p>`,
   pairs:[
     {q:"Men have forgotten God; that is why all this has happened.", a:"Solzhenitsyn"},
     {q:"The all-decent drapery of life is to be rudely torn off.", a:"Burke"},
     {q:"We make men without chests and expect of them virtue.", a:"C.S. Lewis"},
     {q:"The Christian ideal has not been tried and found wanting — it has been found difficult and left untried.", a:"Chesterton"}
   ],
   src:"Thinker Match · from the Arsenal essays"}
];

// ================================================================
// HISTORIA — the Great Captains, the concepts, the chair, the councils.
// Drawn from Marcos's own Art of War essay and from Chair-That-Does-Not-Fall.
// Written in a Sowell-direct voice. Bilingual.
// ================================================================
const HISTORIA = [
  {slug:"h-gaugamela", type:"lectio", f:"H", title:"Alexander Slept In",
   title_pt:"Alexandre Dormiu Até Mais Tarde",
   body:`<p>On the morning of October 1, 331 BC, Alexander of Macedon slept in. His officers were panicking. Twenty miles east stood two hundred thousand Persians on a plain Darius III had leveled with his own hands for his chariots to operate on. Alexander had forty-seven thousand.</p>
<p>His general Parmenion begged him to attack at night. "I will not steal victory," Alexander said, and went to bed.</p>
<p>He knew Darius would keep his huge army standing under arms all night expecting the attack. He knew an army that stood all night fights badly the next day. He knew his own line was so short that if a gap opened anywhere in the Persian wall, he could ride his Companion cavalry through it in a wedge, straight at Darius, and Darius would flee, and a Persian army whose king had fled dissolves. He knew exactly how the battle would unfold. He was rested. That is what genius looks like.</p>`,
   body_pt:`<p>Na manhã de 1 de outubro de 331 a.C., Alexandre da Macedônia dormiu até mais tarde. Os oficiais estavam em pânico. A vinte milhas a leste havia duzentos mil persas numa planície que Dario III havia nivelado com as próprias mãos para que suas bigas pudessem manobrar. Alexandre tinha quarenta e sete mil homens.</p>
<p>O general Parmênion implorou que atacasse à noite. "Não vou roubar a vitória", disse Alexandre, e foi dormir.</p>
<p>Ele sabia que Dario manteria o enorme exército em armas a noite toda esperando o ataque. Sabia que um exército que fica a noite toda em armas luta mal no dia seguinte. Sabia que sua própria linha era tão curta que, se abrisse uma brecha em qualquer ponto da muralha persa, poderia atravessá-la em cunha com a cavalaria dos Companheiros, direto em Dario, e Dario fugiria, e um exército persa cujo rei fugiu se desfaz. Ele sabia exatamente como a batalha ia se desenrolar. E estava descansado. É assim que a genialidade se parece.</p>`,
   src:"Art of War I · Alexander at Gaugamela, 331 BC"},

  {slug:"h-cannae-template", type:"lectio", f:"H", rare:1,
   title:"The Template · Cannae, 216 BC",
   title_pt:"O Modelo · Cannas, 216 a.C.",
   body:`<p>Hannibal placed his weakest troops in the center of his line and bent them forward in a shallow crescent. His best infantry he hid behind the wings, angled inward. His heavy cavalry he massed on the left.</p>
<p>The Romans pressed into the bulging center. The weak center bent back and back, discipline holding, forming a bowl. The Roman army packed itself in, deeper and deeper. At the right moment the hidden wings wheeled ninety degrees inward and struck the exposed flanks. The cavalry, having smashed the Roman horse, rode around behind and sealed the rear.</p>
<p>Between morning and late afternoon on August 2, Hannibal's fifty thousand killed sixty-plus thousand Romans. The highest per-hour kill rate in Western history until the first day of the Somme. Every German general staff officer from Moltke to Schlieffen to Guderian spent his career trying to reproduce this. Norman Schwarzkopf did reproduce it in 1991 with tanks. The template has a name: double envelopment. This is where it was born.</p>`,
   body_pt:`<p>Aníbal colocou suas tropas mais fracas no centro da linha e as curvou para frente num crescente raso. A melhor infantaria ele escondeu atrás das pontas, angulada para dentro. A cavalaria pesada amassou à esquerda.</p>
<p>Os romanos avançaram no centro saliente. O centro fraco cedeu, cedeu, cedeu, com a disciplina aguentando, formando uma tigela. O exército romano se compactou cada vez mais fundo. No momento certo, as pontas escondidas giraram noventa graus para dentro e golpearam os flancos expostos. A cavalaria, depois de esmagar a cavalaria romana, cavalgou por trás e selou a retaguarda.</p>
<p>Entre a manhã e o fim da tarde de 2 de agosto, os cinquenta mil de Aníbal mataram mais de sessenta mil romanos. A maior taxa de mortes por hora na história ocidental até o primeiro dia do Somme. Todos os oficiais do estado-maior alemão, de Moltke a Schlieffen a Guderian, passaram a carreira tentando reproduzir isso. Norman Schwarzkopf reproduziu em 1991, com tanques. O modelo tem nome: duplo envolvimento. Foi aqui que nasceu.</p>`,
   src:"Art of War I · Hannibal at Cannae"},

  {slug:"h-maharbal", type:"sententia", f:"H",
   body:{latin:"Vincere scis, Hannibal; victoria uti nescis.",
         english:"You know how to win a victory, Hannibal; you do not know how to use one. — Maharbal to Hannibal, evening of Cannae"},
   src:"Livy, History of Rome · the epitaph of a tactician who could not close at the strategic level"},

  {slug:"h-zama", type:"lectio", f:"H",
   title:"The Student Who Beat the Master",
   title_pt:"O Discípulo Que Venceu o Mestre",
   body:`<p>Publius Cornelius Scipio was eighteen years old at Cannae, one of the few Roman officers to escape the encirclement. For the next twelve years he watched Hannibal, studied him, learned him.</p>
<p>When the Senate finally sent him to Spain in 210, he took New Carthage by wading through a lagoon at low tide, an approach the Carthaginians thought impossible. He won Ilipa by a double envelopment of his own, weakest troops in the center as Hannibal had done. He recruited Numidian cavalry, the very arm Hannibal had used against Rome. By 204 he had taken Spain.</p>
<p>At Zama in 202, when Hannibal came home, Scipio arranged his cohorts in columns with wide corridors so Hannibal's elephants would run harmlessly through them. He had become Hannibal in order to beat Hannibal. The war ended that afternoon. To defeat a master, first become him. That is the method.</p>`,
   body_pt:`<p>Públio Cornélio Cipião tinha dezoito anos em Cannas, um dos poucos oficiais romanos a escapar do cerco. Pelos doze anos seguintes ele observou Aníbal, estudou Aníbal, aprendeu Aníbal.</p>
<p>Quando o Senado finalmente o mandou à Espanha em 210, ele tomou Nova Cartago atravessando uma laguna na maré baixa, uma rota que os cartagineses julgavam impossível. Venceu Ilipa com um duplo envolvimento próprio, com as tropas mais fracas no centro como Aníbal havia feito. Recrutou cavalaria númida, a mesma arma que Aníbal usara contra Roma. Em 204 tomou a Espanha.</p>
<p>Em Zama, em 202, quando Aníbal voltou para casa, Cipião organizou os cohortes em colunas com corredores largos para que os elefantes de Aníbal corressem inofensivamente por entre eles. Tornou-se Aníbal para vencer Aníbal. A guerra terminou naquela tarde. Para derrotar um mestre, primeiro torne-se ele. Esse é o método.</p>`,
   src:"Art of War I · Scipio Africanus at Zama, 202 BC"},

  {slug:"h-three-levels", type:"lectio", f:"H", rare:1,
   title:"The Three Levels of War",
   title_pt:"Os Três Níveis da Guerra",
   body:`<p>War has three levels, and confusing them is the most common error in popular history.</p>
<p><strong>Tactics</strong> is the art of winning the fight in front of you. Where do the archers stand, when does the cavalry charge, which unit holds the ford.</p>
<p><strong>Operations</strong> is the art of getting the right army to the right ground at the right time, so that the battle you are about to fight is one you have, in a sense, already won.</p>
<p><strong>Strategy</strong> is the art of aligning the war with the political purpose it serves. What are we fighting for. What victory do we need. What victory would ruin us even in winning.</p>
<p>A tactician wins the battle. An operational commander wins the campaign. A strategist wins the war. Rommel was a superb tactician, a competent operational commander, and a catastrophic strategist. He won battles Germany could not afford to fight. The greatest captains do all three at once.</p>`,
   body_pt:`<p>A guerra tem três níveis, e confundi-los é o erro mais comum da história popular.</p>
<p><strong>Tática</strong> é a arte de vencer o combate na sua frente. Onde ficam os arqueiros, quando a cavalaria carrega, qual unidade segura o vau.</p>
<p><strong>Operações</strong> é a arte de levar o exército certo para o terreno certo na hora certa, para que a batalha que você vai lutar já esteja, em certo sentido, ganha.</p>
<p><strong>Estratégia</strong> é a arte de alinhar a guerra ao propósito político a que ela serve. Pelo que estamos lutando. Qual vitória precisamos. Qual vitória nos arruinaria mesmo se vencêssemos.</p>
<p>Um tático vence a batalha. Um comandante operacional vence a campanha. Um estrategista vence a guerra. Rommel era tático excelente, operacional competente, estrategista catastrófico. Ganhou batalhas que a Alemanha não podia bancar. Os maiores capitães fazem os três ao mesmo tempo.</p>`,
   src:"Art of War I · Prologue, the working method"},

  {slug:"h-moral-physical", type:"sententia", f:"H",
   body:{latin:"Moralia ad physica sunt ut tria ad unum.",
         english:"In war, the moral is to the physical as three to one. — Napoleon"},
   src:"the ratio his rivals kept forgetting until it was too late"},

  {slug:"h-pursuit", type:"lectio", f:"H",
   title:"Pursuit Is the Battle",
   title_pt:"A Perseguição É a Batalha",
   body:`<p>Most ancient armies won battles and then stopped. They plundered the enemy camp, tended their wounded, and celebrated. The defeated army escaped into the countryside, was reconstituted the next year, and fought again. Even Cannae did not end Rome, because Hannibal did not pursue.</p>
<p>Alexander pursued. He rode his cavalry east from Gaugamela without pause, changing horses, sleeping in the saddle, driving the men through country they had never seen after an enemy that was breaking apart as they chased him. He did not catch Darius, Darius's own satraps murdered him first. But he denied Persia the time it needed to raise another army. There would be no second battle.</p>
<p>Clausewitz would later call this the annihilation of the enemy's forces as the true object of war. Winning the battle is only the beginning. Pursuing the beaten army until it cannot fight again is what turns a battle into a decision.</p>`,
   body_pt:`<p>A maioria dos exércitos antigos vencia batalhas e parava. Saqueavam o acampamento inimigo, cuidavam dos feridos, comemoravam. O exército derrotado fugia para o campo, era reconstituído no ano seguinte, e lutava de novo. Mesmo Cannas não acabou com Roma, porque Aníbal não perseguiu.</p>
<p>Alexandre perseguiu. Cavalgou com sua cavalaria para o leste de Gaugamela sem parar, trocando cavalos, dormindo na sela, forçando os homens por terras que nunca tinham visto atrás de um inimigo que se desfazia à medida que o perseguiam. Não pegou Dario, os próprios sátrapas de Dario o mataram antes. Mas negou à Pérsia o tempo necessário para levantar outro exército. Não haveria uma segunda batalha.</p>
<p>Clausewitz chamaria mais tarde isso de aniquilação das forças inimigas como o verdadeiro objetivo da guerra. Vencer a batalha é só o começo. Perseguir o exército derrotado até não poder lutar de novo é o que transforma uma batalha em uma decisão.</p>`,
   src:"Art of War I · the lesson Alexander teaches"},

  {slug:"h-fabian", type:"lectio", f:"H",
   title:"Fabian Strategy",
   title_pt:"A Estratégia Fabiana",
   body:`<p>After Trasimene in 217 BC, Rome made Quintus Fabius Maximus dictator. Fabius refused battle, shadowed Hannibal's army, cut its foraging parties, wore it down over time. The Romans hated it. They called him <em>Cunctator</em>, the delayer, and threw him out. They elected Varro, who marched to Cannae and lost fifty thousand men in an afternoon. Then they went back to Fabius, and by 203 BC they had strangled Hannibal's Italian campaign to nothing. Cunctator became a title of honor.</p>
<p>Fabian strategy is the strategy of the weaker side against a superior enemy. Its logic: the enemy's greatest asset is his ability to bring you to battle on favorable terms. Deny him that battle and every other advantage becomes a liability. You do not have to beat him. You have to outlast him.</p>
<p>Washington fought a Fabian war against the British. Skanderbeg in Albania against the Ottomans for twenty-five years. The Vietnamese against the French and then the Americans. It is the strategy of the patient against the impatient, of the defender against the invader. Very often it wins.</p>`,
   body_pt:`<p>Depois do Trasimeno em 217 a.C., Roma fez Quinto Fábio Máximo ditador. Fábio recusou a batalha, seguiu de longe o exército de Aníbal, cortou seus grupos de forrageio, desgastou-o com o tempo. Os romanos odiaram. Chamaram-no <em>Cunctator</em>, o retardador, e o depuseram. Elegeram Varrão, que marchou a Cannas e perdeu cinquenta mil homens em uma tarde. Então voltaram a Fábio, e em 203 a.C. haviam estrangulado a campanha italiana de Aníbal até o nada. Cunctator virou título de honra.</p>
<p>A estratégia fabiana é a estratégia do lado mais fraco contra um inimigo superior. A lógica: o maior ativo do inimigo é a capacidade de forçar batalha em termos favoráveis. Negue-lhe essa batalha e todas as outras vantagens viram passivos. Você não precisa derrotá-lo. Você precisa durar mais que ele.</p>
<p>Washington lutou uma guerra fabiana contra os britânicos. Skanderbeg na Albânia contra os otomanos por vinte e cinco anos. Os vietnamitas contra os franceses e depois os americanos. É a estratégia do paciente contra o impaciente, do defensor contra o invasor. Muito frequentemente ela vence.</p>`,
   src:"Art of War I · Concept 1 · Fabian strategy"},

  {slug:"h-interior-lines", type:"lectio", f:"H",
   title:"Interior Lines",
   title_pt:"Linhas Interiores",
   body:`<p>Imagine a circle. You stand at the center. Three enemies stand on the rim. Each enemy is closer to the other enemies along the rim than they are to you through the center. But you are closer to all of them than any of them is to the others.</p>
<p>This is the geometry Frederick the Great and Napoleon turned into a method. If you move faster than your enemies can coordinate, you can strike one while the others are still marching to link up. You defeat him and turn to the next before the coalition consolidates. Numerically inferior against the whole, you are numerically superior against each part in sequence.</p>
<p>Frederick survived the Seven Years' War against a coalition three times his size this way. Napoleon used the principle in Italy in 1796, in Germany in 1805, in France in 1814. When he lost the geometry at Leipzig in 1813 and Waterloo in 1815, he was finished. Encirclement looks disastrous on a map. On the ground, sometimes it is the position from which the encircled army can most damage its attackers.</p>`,
   body_pt:`<p>Imagine um círculo. Você está no centro. Três inimigos estão na borda. Cada inimigo está mais perto dos outros inimigos pela borda do que de você pelo centro. Mas você está mais perto de todos eles do que qualquer um deles está dos outros.</p>
<p>Essa é a geometria que Frederico o Grande e Napoleão transformaram em método. Se você se mover mais rápido do que seus inimigos conseguem se coordenar, pode atingir um enquanto os outros ainda estão marchando para se juntar. Vence esse e vira para o próximo antes que a coalizão se consolide. Inferior em número contra o todo, você é superior em número contra cada parte em sequência.</p>
<p>Frederico sobreviveu à Guerra dos Sete Anos contra uma coalizão três vezes maior assim. Napoleão usou o princípio na Itália em 1796, na Alemanha em 1805, na França em 1814. Quando perdeu a geometria em Leipzig em 1813 e Waterloo em 1815, acabou. O cerco parece desastroso no mapa. No terreno, às vezes é a posição onde o exército cercado mais pode danificar seus atacantes.</p>`,
   src:"Art of War I · Concept 3 · Interior lines"},

  {slug:"h-auftragstaktik", type:"lectio", f:"H", rare:1,
   title:"Auftragstaktik · Trust Your Captains",
   title_pt:"Auftragstaktik · Confie Nos Seus Capitães",
   body:`<p>Nineteenth-century industrial armies faced a problem their commanders had not faced before. Battles were fought across fronts miles wide by hundreds of thousands of men, in country the commanding general could not see. If subordinates waited for orders before they acted, the battle would be decided before the orders arrived. If they acted without orders, they might act against the overall design.</p>
<p>Moltke's answer was to reframe what an order even was. A superior tells a subordinate what <em>result</em> he wants, not <em>how</em> to achieve it. The subordinate is trained to understand the commander's intent and then trusted to figure out on the ground how best to accomplish it. When the situation changes, he adapts without waiting.</p>
<p>Prussian regulations were explicit: an officer who fails to act because he lacks orders is a worse officer than one who acts on his own judgment and errs. American doctrine formally adopted this in the 1980s under the name "commander's intent." It is, incidentally, an old Catholic principle dressed in Prussian uniform: subsidiarity applied to war.</p>`,
   body_pt:`<p>Os exércitos industriais do século XIX enfrentaram um problema que seus comandantes nunca haviam enfrentado. Batalhas eram travadas em frentes de quilômetros de largura por centenas de milhares de homens, em terrenos que o general comandante não via. Se os subordinados esperassem ordens antes de agir, a batalha seria decidida antes das ordens chegarem. Se agissem sem ordens, podiam agir contra o plano geral.</p>
<p>A resposta de Moltke foi redefinir o que é uma ordem. Um superior diz ao subordinado qual <em>resultado</em> quer, não <em>como</em> alcançá-lo. O subordinado é treinado para entender a intenção do comandante e então confia-se a ele descobrir no terreno a melhor forma de executá-la. Quando a situação muda, ele se adapta sem esperar.</p>
<p>Os regulamentos prussianos eram explícitos: um oficial que falha em agir porque não tem ordens é pior do que um que age por conta própria e erra. A doutrina americana adotou isso formalmente nos anos 1980 sob o nome "intenção do comandante". É, aliás, um velho princípio católico vestido de uniforme prussiano: subsidiariedade aplicada à guerra.</p>`,
   src:"Art of War I · Concept 7 · Mission command"},

  {slug:"h-four-questions", type:"lectio", f:"H",
   title:"Four Questions for Any Battle",
   title_pt:"Quatro Perguntas Para Qualquer Batalha",
   body:`<p>Every battle account becomes twice as intelligible if you approach it with four questions. Ask them in order.</p>
<p><strong>1. What was each side trying to accomplish?</strong> Half the confusion in popular military history comes from assuming both sides wanted the same thing. They almost never did.</p>
<p><strong>2. What did the ground do to their plans?</strong> Ground is never neutral. A hill favors defense, a river channels movement, a wood conceals reserves. Find the ground first.</p>
<p><strong>3. Where was the decisive point?</strong> Every battle has one place and one moment where the outcome will be settled. It is almost never where the fighting is loudest.</p>
<p><strong>4. What did the winner see that the loser did not?</strong> This is <em>coup d'oeil</em>. It is not clairvoyance. It is the discipline of seeing what is actually there when everyone around you is seeing what they expect to be there. Trained by reading old battles, applied in new ones.</p>`,
   body_pt:`<p>Toda narrativa de batalha fica duas vezes mais inteligível se você a abordar com quatro perguntas. Faça-as em ordem.</p>
<p><strong>1. O que cada lado tentava alcançar?</strong> Metade da confusão da história militar popular vem de supor que os dois lados queriam a mesma coisa. Quase nunca queriam.</p>
<p><strong>2. O que o terreno fez com seus planos?</strong> O terreno nunca é neutro. Uma colina favorece a defesa, um rio canaliza o movimento, um bosque esconde reservas. Encontre o terreno primeiro.</p>
<p><strong>3. Onde estava o ponto decisivo?</strong> Toda batalha tem um lugar e um momento em que o resultado será definido. Quase nunca onde a luta é mais barulhenta.</p>
<p><strong>4. O que o vencedor viu que o perdedor não viu?</strong> Isso é <em>coup d'oeil</em>. Não é clarividência. É a disciplina de ver o que realmente está lá quando todos ao seu redor estão vendo o que esperam estar lá. Treinada lendo batalhas antigas, aplicada em novas.</p>`,
   src:"Art of War I · the working method"},

  {slug:"h-canossa", type:"lectio", f:"H", rare:1,
   title:"The King in the Snow at Canossa",
   title_pt:"O Rei na Neve em Canossa",
   body:`<p>On December 3, 1075, a Roman monk named Hildebrand, now Pope Gregory VII, sat down and wrote the most consequential letter of the medieval world. Its recipient was Henry IV, King of the Germans. Its subject was a dispute over lay investiture few outside the twelfth century now remember. But at its core was a claim so audacious that it would reshape European civilization: that the successor of a Galilean fisherman held, by divine appointment, an authority higher than the crown of an emperor whose armies could sack Rome in a week.</p>
<p>Henry defied it. In January 1076, the German bishops declared Gregory deposed. Gregory excommunicated the king, released his subjects from their oath of fealty, and at a stroke dissolved the political ground on which the Empire stood. Within a year Henry was in the snow at Canossa in a hair shirt, waiting three days on his knees for the Pope to grant him absolution. The medieval limit on secular power was born on that mountain.</p>`,
   body_pt:`<p>Em 3 de dezembro de 1075, um monge romano chamado Hildebrando, agora Papa Gregório VII, sentou-se e escreveu a carta mais consequente do mundo medieval. O destinatário era Henrique IV, Rei dos Germanos. O assunto era uma disputa sobre investidura laica que poucos fora do século XII hoje lembram. Mas no núcleo havia uma reivindicação tão audaciosa que remodelaria a civilização europeia: a de que o sucessor de um pescador da Galileia tinha, por nomeação divina, autoridade mais alta do que a coroa de um imperador cujos exércitos podiam saquear Roma em uma semana.</p>
<p>Henrique desafiou. Em janeiro de 1076, os bispos germânicos declararam Gregório deposto. Gregório excomungou o rei, liberou seus súditos do juramento de fidelidade, e, de um golpe, dissolveu o chão político sobre o qual o Império se apoiava. Em menos de um ano Henrique estava na neve de Canossa em um camisão de crina, esperando três dias de joelhos para o Papa lhe dar absolvição. O limite medieval ao poder secular nasceu naquela montanha.</p>`,
   src:"The Chair That Does Not Fall · Prologue"},

  {slug:"h-chalcedon", type:"lectio", f:"H",
   title:"Peter Has Spoken Through Leo",
   title_pt:"Pedro Falou Através de Leão",
   body:`<p>At the Council of Chalcedon in 451, over five hundred bishops from every part of the Christian world gathered to settle the question of how Christ could be both God and man. The climactic moment came when Pope Leo I's <em>Tome to Flavian</em>, a doctrinal letter defining the two natures of Christ, was read aloud to the assembly.</p>
<p>The response is recorded in the conciliar acts and is one of the most quoted lines in Church history:</p>
<blockquote>Peter has spoken through Leo. Cyril and Leo have taught alike. This is the faith of the Fathers. This is the faith of the Apostles. We all believe thus. We orthodox believe thus. Anathema to him who does not so believe.</blockquote>
<p>The bishops of Chalcedon, in 451, called the Bishop of Rome Peter's mouth in his generation. This is not a nineteenth-century Roman claim about the fifth century. This is what the bishops themselves said at the time, in the acts of a council every major Christian tradition accepts as authoritative.</p>`,
   body_pt:`<p>No Concílio de Calcedônia em 451, mais de quinhentos bispos de todas as partes do mundo cristão se reuniram para resolver como Cristo podia ser Deus e homem. O momento culminante veio quando o <em>Tomo a Flaviano</em> do Papa Leão I, uma carta doutrinal definindo as duas naturezas de Cristo, foi lido em voz alta para a assembleia.</p>
<p>A resposta está nos atos do concílio e é uma das linhas mais citadas da história da Igreja:</p>
<blockquote>Pedro falou através de Leão. Cirilo e Leão ensinaram igual. Esta é a fé dos Padres. Esta é a fé dos Apóstolos. Nós todos cremos assim. Nós ortodoxos cremos assim. Anátema a quem não crê assim.</blockquote>
<p>Os bispos de Calcedônia, em 451, chamaram o Bispo de Roma de boca de Pedro em sua geração. Isto não é uma reivindicação romana do século XIX sobre o século V. É o que os próprios bispos disseram na época, nos atos de um concílio que toda tradição cristã maior aceita como autoritativo.</p>`,
   src:"The Chair That Does Not Fall · Movement II · Chalcedon, 451"},

  {slug:"h-schism-recovery", type:"lectio", f:"H",
   title:"The Schism That Survived",
   title_pt:"O Cisma Que Sobreviveu",
   body:`<p>From 1378 to 1417, there were at various times two claimants to the papacy at once, one in Rome and one in Avignon. For a period there were three, after Pisa in 1409 tried to depose the other two and only added a third. Different kingdoms recognized different popes. Catherine of Siena supported Urban VI. Vincent Ferrer at first supported Avignon. The whole Christian West was in canonical chaos for nearly forty years.</p>
<p>The theological lesson of the Great Western Schism is not that the papacy failed. It is that the papacy <em>survived</em>. The Council of Constance (1414-1418), with the cooperation of the Roman claimant, deposed the Pisan and Avignon claimants, elected Martin V, and the universal Church accepted him. The succession from Martin V to the present has been continuous.</p>
<p>No other ecclesiology recovered from a comparable crisis. The Orthodox never had one because they never claimed a single visible head. Protestant movements would fragment at their first significant disagreement. The Catholic Church, faced with what looked like an irrecoverable canonical wound, produced the recovery. Any historical hypothesis about ecclesial authority has to explain not just the trauma but the recovery.</p>`,
   body_pt:`<p>De 1378 a 1417, houve em vários momentos dois pretendentes ao papado ao mesmo tempo, um em Roma e um em Avignon. Por um período houve três, depois que Pisa em 1409 tentou depor os dois outros e só adicionou um terceiro. Reinos diferentes reconheciam papas diferentes. Catarina de Sena apoiava Urbano VI. Vicente Ferrer no início apoiava Avignon. Todo o Ocidente cristão ficou em caos canônico por quase quarenta anos.</p>
<p>A lição teológica do Grande Cisma do Ocidente não é que o papado falhou. É que o papado <em>sobreviveu</em>. O Concílio de Constança (1414-1418), com a cooperação do pretendente romano, depôs os pretendentes de Pisa e Avignon, elegeu Martinho V, e a Igreja universal o aceitou. A sucessão de Martinho V ao presente é contínua.</p>
<p>Nenhuma outra eclesiologia se recuperou de uma crise comparável. Os ortodoxos nunca tiveram uma porque nunca reivindicaram uma só cabeça visível. Os movimentos protestantes se fragmentariam no primeiro desacordo significativo. A Igreja Católica, diante do que parecia uma ferida canônica irrecuperável, produziu a recuperação. Qualquer hipótese histórica sobre autoridade eclesial tem de explicar não só o trauma, mas a recuperação.</p>`,
   src:"The Chair That Does Not Fall · Movement III · Hard Cases"},

  {slug:"h-vienna-1683", type:"lectio", f:"H",
   title:"Sobieski at Vienna, 1683",
   title_pt:"Sobieski em Viena, 1683",
   body:`<p>September 12, 1683. The Ottoman army had besieged Vienna for two months. The walls were about to fall. From the top of the Kahlenberg, a mountain north of the city, John III Sobieski, King of Poland, looked down at the Turkish camp with the largest cavalry force in Europe at his back.</p>
<p>His men had marched three hundred miles in fifteen days to be there. He raised the standard of the Blessed Virgin, celebrated Mass on the mountain, and told his hussars that the fate of Christendom depended on the next twenty minutes. Then he charged.</p>
<p>The Ottoman line, which had held two months of siege against everything Vienna could throw at it, broke inside an hour. This is Napoleon's ratio of moral to physical forces in its purest form. The Ottoman army was larger and better supplied. It broke because men who believe they are fighting for something greater than themselves break the men who do not. Europe was saved on a mountain by the belief of about twenty thousand Polish horsemen.</p>`,
   body_pt:`<p>12 de setembro de 1683. O exército otomano havia cercado Viena por dois meses. As muralhas estavam prestes a cair. Do alto do Kahlenberg, uma montanha ao norte da cidade, João III Sobieski, Rei da Polônia, olhava para baixo, para o acampamento turco, com a maior força de cavalaria da Europa às suas costas.</p>
<p>Seus homens haviam marchado trezentos milhas em quinze dias para estar ali. Ele ergueu o estandarte da Virgem Santíssima, celebrou missa na montanha, e disse aos seus hussardos que o destino da cristandade dependia dos próximos vinte minutos. Então carregou.</p>
<p>A linha otomana, que havia aguentado dois meses de cerco contra tudo que Viena pôde atirar nela, quebrou em menos de uma hora. Esta é a proporção de Napoleão entre forças morais e físicas na forma mais pura. O exército otomano era maior e melhor abastecido. Quebrou porque homens que creem lutar por algo maior que si mesmos quebram homens que não. A Europa foi salva em uma montanha pela crença de cerca de vinte mil cavaleiros poloneses.</p>`,
   src:"Siege of Vienna, September 1683"},

  {slug:"h-genghis-raid", type:"lectio", f:"H",
   title:"The Western Raid, 1220-1223",
   title_pt:"A Incursão Ocidental, 1220-1223",
   body:`<p>Genghis Khan sent two generals, Jebe and Subutai, west with twenty thousand horsemen on what he described as a reconnaissance. In three years they circumnavigated the Caspian Sea, defeated the armies of five separate kingdoms, won the Battle of the Kalka River against the combined forces of the Russian princes and the Cumans, and returned to Mongolia with intelligence that would guide the actual Mongol invasion of Europe eighteen years later.</p>
<p>The raid was the longest sustained cavalry operation in history. It covered more than four thousand miles through hostile territory. The Mongol lesson is operational: speed, intelligence, and the willingness to detach small forces for enormous distances can produce strategic effects far out of proportion to their numbers.</p>
<p>Twentieth-century mobile warfare, from Guderian's panzers to Patton's Third Army, is the industrialized form of the same insight. Jebe and Subutai got there first, on horseback, seven hundred years before Guderian was born.</p>`,
   body_pt:`<p>Gêngis Khan mandou dois generais, Jebe e Subutai, para o oeste com vinte mil cavaleiros no que ele descreveu como um reconhecimento. Em três anos circunavegaram o Mar Cáspio, derrotaram os exércitos de cinco reinos separados, venceram a Batalha do Rio Kalka contra as forças combinadas dos príncipes russos e dos cumanos, e voltaram à Mongólia com inteligência que guiaria a invasão mongol efetiva da Europa dezoito anos depois.</p>
<p>A incursão foi a mais longa operação sustentada de cavalaria da história. Cobriu mais de seis mil quilômetros em território hostil. A lição mongol é operacional: velocidade, inteligência e disposição para destacar forças pequenas em distâncias enormes podem produzir efeitos estratégicos muito acima do número.</p>
<p>A guerra móvel do século XX, dos panzers de Guderian ao Terceiro Exército de Patton, é a forma industrializada da mesma intuição. Jebe e Subutai chegaram primeiro, a cavalo, setecentos anos antes de Guderian nascer.</p>`,
   src:"Art of War I · Genghis Khan and Subutai"},

  {slug:"h-defense-depth", type:"lectio", f:"H",
   title:"Defense in Depth",
   title_pt:"Defesa em Profundidade",
   body:`<p>The naive theory of defense is a wall. The wall works or it does not. If it fails, the country behind it is lost. Hadrian's Wall. The Great Wall. The Maginot Line. Every reader of history knows walls, in the end, do not work.</p>
<p>The sophisticated theory of defense is depth. Instead of one line to be held or lost, the defender builds a system: forward observation posts to detect the enemy's crossing, a series of fortified towns behind them to slow and channel his advance, mobile field armies positioned to strike his flanks as he penetrates, interior fortresses to hold if he reaches them, and behind everything, an economic base capable of recovering ground lost in the initial thrust.</p>
<p>The late Roman Empire and the Byzantines built this on their eastern frontiers. Soldier-farmers held land in return for military service. Persian, Arab, and Turkish invasions rarely won on the day they crossed the frontier. They had to fight through hundreds of miles in which every village was a potential defender. Constantinople held from 330 to 1453 largely because of a defense in depth built over centuries. When it finally fell, the depth had been eroded and only the walls remained. Walls without depth eventually fail. The lesson is old and permanent.</p>`,
   body_pt:`<p>A teoria ingênua da defesa é um muro. O muro funciona ou não. Se falha, o país atrás é perdido. Muralha de Adriano. Muralha da China. Linha Maginot. Todo leitor de história sabe que, no fim, muros não funcionam.</p>
<p>A teoria sofisticada da defesa é a profundidade. Em vez de uma linha a ser mantida ou perdida, o defensor constrói um sistema: postos avançados de observação para detectar a travessia do inimigo, uma série de cidades fortificadas atrás para desacelerar e canalizar seu avanço, exércitos de campanha móveis posicionados para atacar seus flancos à medida que ele penetra, fortalezas interiores para segurar se ele chegar nelas, e, atrás de tudo, uma base econômica capaz de recuperar o terreno perdido no primeiro impulso.</p>
<p>O Império Romano tardio e os bizantinos construíram isso nas fronteiras orientais. Soldados-camponeses mantinham terra em troca de serviço militar. Invasões persas, árabes e turcas raramente venciam no dia em que cruzavam a fronteira. Tinham que lutar por centenas de milhas em que cada vila era defensor em potencial. Constantinopla se manteve de 330 a 1453 em grande parte por uma defesa em profundidade construída ao longo dos séculos. Quando finalmente caiu, a profundidade havia erodido e só restavam as muralhas. Muros sem profundidade eventualmente falham. A lição é velha e permanente.</p>`,
   src:"Art of War I · Concept 2 · Byzantine themes and Roman limes"},

  // ============ HISTORICAL CHRONOLOGY GAMES (bilingual) ============
];

// ================================================================
// NEGOTIUM / OECONOMIA EXPANSION — Thomas Sowell voice, Basic Economics,
// plus the Human Relations Playbook (Voss, Navarro, Cialdini, Polyvagal).
// No em dashes, direct, empirical. Each folio ends on a hard point.
// ================================================================
const NEGOTIUM_NEW = [
  {slug:"n-sowell-tradeoffs", type:"lectio", f:"N", rare:1,
   title:"There Are No Solutions, Only Trade-offs",
   title_pt:"Não Existem Soluções, Só Trocas",
   body:`<p>Thomas Sowell made a career of pointing at the one sentence that explains most political error: <em>there are no solutions, there are only trade-offs</em>.</p>
<p>Every policy that fixes something breaks something else. Rent control makes rent cheaper for the tenants who already have apartments and makes apartments impossible to find for everyone else. Minimum wage raises pay for workers who keep their jobs and eliminates jobs for workers at the bottom of the skill ladder. Tariffs protect one domestic industry by raising input costs for every industry that uses its output.</p>
<p>None of this means every trade-off is bad. It means every policy has a cost somewhere, and the test of a serious analyst is whether he can name the cost. If he cannot name the cost, he does not understand the policy. The honest question is never "is this a solution." The honest question is "what are we giving up to get this, and who is giving it up."</p>`,
   body_pt:`<p>Thomas Sowell construiu uma carreira apontando para a frase que explica a maior parte do erro político: <em>não existem soluções, só trocas</em>.</p>
<p>Toda política que conserta algo quebra outra coisa. Controle de aluguel barateia o aluguel para quem já tem apartamento e torna impossível achar apartamento para todo o resto. Salário mínimo aumenta o pagamento de quem mantém o emprego e elimina os empregos dos trabalhadores no fim da escada de habilidades. Tarifas protegem uma indústria doméstica aumentando o custo de insumos de toda indústria que usa o produto dela.</p>
<p>Nada disso quer dizer que toda troca é ruim. Quer dizer que toda política tem um custo em algum lugar, e o teste do analista sério é se ele consegue nomear o custo. Se não consegue nomear o custo, não entende a política. A pergunta honesta nunca é "isto é uma solução". A pergunta honesta é "o que estamos entregando para conseguir isto, e quem está entregando".</p>`,
   src:"after Thomas Sowell, A Conflict of Visions · Basic Economics"},

  {slug:"n-sowell-three-q", type:"lectio", f:"N",
   title:"Sowell's Three Questions",
   title_pt:"As Três Perguntas de Sowell",
   body:`<p>Sowell proposed three questions you can ask of any policy proposal. They are enough to filter out most bad ideas before they reach the question of whether they are good ones.</p>
<p><strong>1. Compared to what?</strong> No policy is good or bad in the abstract. A policy is better or worse than the alternative. Any argument that praises a policy without naming the alternative being rejected is incomplete.</p>
<p><strong>2. At what cost?</strong> Every benefit has a cost. Who bears it. How large is it. What else could the resources have done.</p>
<p><strong>3. What hard evidence do you have?</strong> Not what the policy was <em>designed</em> to do. What has it actually done, where it has been tried, with results that can be measured.</p>
<p>A policy that passes none of these is a slogan. A policy that passes all three is a candidate for serious discussion. Most things people fight about on television never get past question one.</p>`,
   body_pt:`<p>Sowell propôs três perguntas que você pode fazer a qualquer proposta política. Bastam para filtrar a maioria das ideias ruins antes de chegar à questão de serem boas.</p>
<p><strong>1. Comparado a quê?</strong> Nenhuma política é boa ou ruim no abstrato. Uma política é melhor ou pior que a alternativa. Qualquer argumento que elogia uma política sem nomear a alternativa rejeitada está incompleto.</p>
<p><strong>2. A que custo?</strong> Todo benefício tem um custo. Quem o carrega. Qual o tamanho dele. Que outra coisa os recursos poderiam ter feito.</p>
<p><strong>3. Que evidência dura você tem?</strong> Não o que a política foi <em>desenhada</em> para fazer. O que ela realmente fez, onde foi tentada, com resultados que podem ser medidos.</p>
<p>Uma política que não passa em nenhuma é um slogan. Uma política que passa nas três é candidata a uma discussão séria. A maior parte do que as pessoas brigam na televisão nunca passa da primeira pergunta.</p>`,
   src:"after Thomas Sowell"},

  {slug:"n-rent-control", type:"lectio", f:"N",
   title:"Rent Control, in Plain Numbers",
   title_pt:"Controle de Aluguel, em Números Simples",
   body:`<p>Rent control is the policy on which the economics profession has the highest agreement. A survey by the IGM Forum at the University of Chicago asked academic economists whether rent control had a negative effect on the quantity and quality of broadly affordable rental housing. Over ninety percent agreed. Fewer than two percent disagreed.</p>
<p>The mechanism Sowell explains in <em>Basic Economics</em> is simple. If you cap the price landlords can charge below the market rate, three things happen in sequence. First, the people who already have apartments stay in them, since moving means giving up the controlled rate. Second, landlords stop building new rental housing, since the return no longer justifies the risk. Third, the housing stock that exists stops being maintained, since repairs no longer pay back.</p>
<p>The result in every city that has tried it is the same: existing tenants are protected, new tenants cannot find anywhere to live, and the housing stock degrades over a generation. New York, San Francisco, Stockholm, Berlin. The policy is popular because the beneficiaries vote and the people it hurts, mostly young and mostly new to the city, do not know yet whom to blame.</p>`,
   body_pt:`<p>Controle de aluguel é a política em que a profissão de economia tem o maior consenso. Uma pesquisa do IGM Forum da Universidade de Chicago perguntou a economistas acadêmicos se o controle de aluguel teve efeito negativo na quantidade e qualidade de moradia alugada acessível. Mais de noventa por cento concordaram. Menos de dois por cento discordaram.</p>
<p>O mecanismo que Sowell explica em <em>Basic Economics</em> é simples. Se você teto o preço que os senhorios podem cobrar abaixo da taxa de mercado, três coisas acontecem em sequência. Primeiro, quem já tem apartamento fica, porque mudar significa perder a taxa controlada. Segundo, senhorios param de construir novos aluguéis, porque o retorno não justifica mais o risco. Terceiro, o estoque habitacional existente para de ser mantido, porque reparos não se pagam mais.</p>
<p>O resultado em toda cidade que tentou é o mesmo: inquilinos existentes são protegidos, inquilinos novos não acham onde morar, e o estoque habitacional se degrada ao longo de uma geração. Nova York, San Francisco, Estocolmo, Berlim. A política é popular porque os beneficiados votam e os prejudicados, em geral jovens e novos na cidade, ainda não sabem a quem culpar.</p>`,
   src:"Sowell, Basic Economics · the strongest empirical consensus in the field"},

  {slug:"n-min-wage", type:"lectio", f:"N",
   title:"Minimum Wage Hits the Lowest Skilled",
   title_pt:"O Salário Mínimo Atinge os Menos Qualificados",
   body:`<p>A minimum wage is a prohibition on hiring anyone whose productivity is below the mandated wage. If the law says you must pay fifteen dollars an hour, you cannot legally hire a worker whose labor is worth twelve dollars an hour to you. That worker is not helped by the law. He is unemployed by it.</p>
<p>The workers whose labor is above the minimum are unaffected. The workers whose labor is comfortably above the minimum get a mild symbolic benefit. The workers whose productivity sits <em>around</em> the minimum, almost all of them teenagers, high-school dropouts, immigrants with weak English, and people with disabilities, lose their chance to get the first job that would have taught them to be worth more.</p>
<p>Sowell: the first job teaches the attitudes, the punctuality, and the experience that produce the second job. Price the first job out of existence and you have not raised wages. You have blocked the ladder. The racial unemployment gap for young Black men in the United States went from near parity with whites in 1948, before meaningful minimum-wage enforcement, to roughly double by the 1970s. The policy is popular. Its victims are quiet, because they are not working.</p>`,
   body_pt:`<p>O salário mínimo é uma proibição de contratar quem tem produtividade abaixo do salário imposto. Se a lei diz que você precisa pagar quinze dólares por hora, você não pode contratar legalmente um trabalhador cuja mão de obra vale doze dólares por hora para você. Esse trabalhador não é ajudado pela lei. Ele é desempregado por ela.</p>
<p>Os trabalhadores cuja mão de obra está acima do mínimo não são afetados. Os cuja mão de obra está confortavelmente acima do mínimo recebem um benefício simbólico fraco. Os cuja produtividade fica <em>em torno</em> do mínimo, quase todos adolescentes, pessoas que não terminaram o ensino médio, imigrantes com inglês fraco, pessoas com deficiência, perdem a chance de pegar o primeiro emprego que lhes ensinaria a valer mais.</p>
<p>Sowell: o primeiro emprego ensina as atitudes, a pontualidade e a experiência que produzem o segundo emprego. Preveja o primeiro emprego para fora da existência e você não aumentou salários. Você bloqueou a escada. A diferença de desemprego racial para jovens negros nos Estados Unidos passou de quase paridade com brancos em 1948, antes de aplicação significativa do salário mínimo, para aproximadamente o dobro nos anos 1970. A política é popular. As vítimas são silenciosas, porque não estão trabalhando.</p>`,
   src:"Sowell, Basic Economics · the pattern replicates in every market"},

  {slug:"n-seen-unseen", type:"lectio", f:"N", rare:1,
   title:"The Seen and the Unseen",
   title_pt:"O Visto e o Não Visto",
   body:`<p>Frédéric Bastiat wrote in 1850 that the one thing separating a good economist from a bad economist is the ability to see what is not there.</p>
<p>A broken window creates work for the glazier. That is seen. The money the shopkeeper spent on the window is money he did not spend on the pair of shoes he was going to buy. The shoemaker is poorer. That is not seen. The broken window has not stimulated the economy. It has shifted a transaction from a productive channel (shoes) to a repair channel (replacing what was already there). The town has the same window it already had, and no shoes. It is poorer by one pair of shoes.</p>
<p>Every policy that produces a visible effect, a new job, a new building, a new program, must be examined for what it displaced. The jobs created are seen. The jobs that would have existed if the money had been left where it was, those are not seen. The economist's job is to see them anyway. Sowell is the clearest living teacher of this discipline. Bastiat is where it starts.</p>`,
   body_pt:`<p>Frédéric Bastiat escreveu em 1850 que a única coisa que separa um bom economista de um mau economista é a capacidade de ver o que não está ali.</p>
<p>Uma janela quebrada cria trabalho para o vidraceiro. Isso é visto. O dinheiro que o lojista gastou com a janela é dinheiro que ele não gastou com o par de sapatos que iria comprar. O sapateiro ficou mais pobre. Isso não é visto. A janela quebrada não estimulou a economia. Deslocou uma transação de um canal produtivo (sapatos) para um canal de reparo (substituindo o que já existia). A cidade tem a mesma janela que já tinha, e nenhum sapato. Está mais pobre em um par de sapatos.</p>
<p>Toda política que produz um efeito visível, um emprego novo, um prédio novo, um programa novo, precisa ser examinada pelo que ela deslocou. Os empregos criados são vistos. Os empregos que teriam existido se o dinheiro tivesse ficado onde estava, esses não são vistos. O trabalho do economista é vê-los mesmo assim. Sowell é o professor vivo mais claro dessa disciplina. Bastiat é onde ela começa.</p>`,
   src:"Bastiat, Ce qu'on voit et ce qu'on ne voit pas (1850), via Sowell"},

  {slug:"n-knowledge-problem", type:"lectio", f:"N",
   title:"The Knowledge Problem",
   title_pt:"O Problema do Conhecimento",
   body:`<p>Friedrich Hayek asked the question that broke socialism as a serious economic doctrine. He asked it in 1945 in a paper called <em>The Use of Knowledge in Society</em>. The question was: how does the economy know what to produce.</p>
<p>No central planner knows how many pencils to make, or what color, or what wood. He does not know how many are needed in Phoenix next Tuesday. The information about what people want, where they are, how much they are willing to pay, how urgent the need, is scattered among hundreds of millions of individual minds. It is nowhere written down, and most of it changes faster than it could be collected.</p>
<p>The price system solves this by not needing to collect the information at all. The price of a pencil rises when pencils are scarce and falls when they are abundant. The producer who sees the price rise makes more pencils without needing to know <em>why</em>. The consumer who sees the price rise uses the pencil more carefully without needing to know <em>why</em>. The system coordinates billions of decisions by letting each actor respond to a single number. No planner can match it, because no planner can hold the information in his head. This is why every attempted socialist economy has either collapsed into shortage or converted to market mechanisms by stealth. Not because the planners were evil. Because the problem is unsolvable.</p>`,
   body_pt:`<p>Friedrich Hayek fez a pergunta que quebrou o socialismo como doutrina econômica séria. Fez em 1945, num artigo chamado <em>O Uso do Conhecimento na Sociedade</em>. A pergunta era: como a economia sabe o que produzir.</p>
<p>Nenhum planejador central sabe quantos lápis fazer, nem de que cor, nem de qual madeira. Não sabe quantos são necessários em Phoenix na próxima terça. A informação sobre o que as pessoas querem, onde estão, quanto estão dispostas a pagar, quão urgente é a necessidade, está espalhada por centenas de milhões de mentes individuais. Não está escrita em lugar nenhum, e a maior parte muda mais rápido do que seria coletado.</p>
<p>O sistema de preços resolve isso ao não precisar coletar a informação. O preço de um lápis sobe quando lápis estão escassos e desce quando estão abundantes. O produtor que vê o preço subir faz mais lápis sem precisar saber <em>por quê</em>. O consumidor que vê o preço subir usa o lápis com mais cuidado sem precisar saber <em>por quê</em>. O sistema coordena bilhões de decisões deixando cada ator responder a um único número. Nenhum planejador consegue igualar, porque nenhum planejador consegue segurar a informação na cabeça. É por isso que toda economia socialista tentada ou colapsou em escassez ou converteu-se em mecanismos de mercado por baixo dos panos. Não porque os planejadores eram maus. Porque o problema é insolúvel.</p>`,
   src:"after Hayek, The Use of Knowledge in Society (1945)"},

  {slug:"n-labor-value-wrong", type:"lectio", f:"N",
   title:"Why the Labor Theory of Value Is Wrong",
   title_pt:"Por Que a Teoria do Valor-Trabalho Está Errada",
   body:`<p>Karl Marx argued that the value of a thing is the labor that went into producing it. If a chair takes four hours of work, its value is four hours of work. This is called the labor theory of value and it is the foundation of Marxist economics.</p>
<p>It is false, and the test is simple. Consider a Stradivarius violin, built in the 1680s by one craftsman working with hand tools. The labor input was modest. A modern Chinese factory produces student violins in a day, with far more total labor-hours per instrument when assembly, materials, and shipping are counted. The Stradivarius sells for twenty million dollars. The student violin sells for two hundred. If labor were the source of value, the student violin would be worth more. It is worth less by a factor of a hundred thousand.</p>
<p>Value is not labor. Value is the meeting of subjective preference with scarcity. People want a Stradivarius more than they want a student violin, and there are three hundred Stradivari and millions of student violins. Price is the market's reading of that ratio. Economists have known this since the marginal revolution of the 1870s. The policy consequences of pretending otherwise, which the twentieth century ran as an experiment on a hundred million lives, are visible in every mass grave from the Volga to the Mekong.</p>`,
   body_pt:`<p>Karl Marx argumentava que o valor de uma coisa é o trabalho que entrou para produzi-la. Se uma cadeira leva quatro horas de trabalho, seu valor é quatro horas de trabalho. Isso se chama teoria do valor-trabalho e é o alicerce da economia marxista.</p>
<p>É falsa, e o teste é simples. Considere um violino Stradivarius, construído nos anos 1680 por um artesão com ferramentas de mão. A entrada de trabalho foi modesta. Uma fábrica chinesa moderna produz violinos de estudante em um dia, com muito mais horas-trabalho totais por instrumento quando se contam montagem, materiais e logística. O Stradivarius vende por vinte milhões de dólares. O violino de estudante vende por duzentos. Se trabalho fosse a fonte do valor, o violino de estudante valeria mais. Vale menos por um fator de cem mil.</p>
<p>Valor não é trabalho. Valor é o encontro da preferência subjetiva com a escassez. As pessoas querem um Stradivarius mais do que querem um violino de estudante, e existem trezentos Stradivari e milhões de violinos de estudante. Preço é a leitura que o mercado faz dessa razão. Economistas sabem disso desde a revolução marginalista dos anos 1870. As consequências políticas de fingir o contrário, que o século XX rodou como experimento em cem milhões de vidas, estão visíveis em cada vala comum do Volga ao Mekong.</p>`,
   src:"marginal revolution (Menger, Jevons, Walras, 1870s)"},

  {slug:"n-voss-mirror", type:"lectio", f:"N",
   title:"Voss · The Mirror",
   title_pt:"Voss · O Espelho",
   body:`<p>Chris Voss spent twenty-four years in the FBI as a hostage negotiator. The single most underused technique in his toolkit is the mirror.</p>
<p>Repeat the last one to three key words the other person just said, with an upward, curious inflection. That is it. Simple, powerful, almost universally underused.</p>
<p>Example. Them: "I've had a really difficult year and I feel like you're not accounting for that." You: "You feel I'm not accounting for it?" (upward inflection, slight pause). Them: elaborates, reveals the real concern.</p>
<p>The mirror works because people have a deep need to feel heard. The mirror gives them the signal they have been heard without you committing to anything. It also keeps them talking, and every extra sentence is a chance for them to tell you something they did not plan to tell you. In negotiation and in ordinary conversation, the move is the same. Say less. Repeat the last three words with curiosity. Wait.</p>`,
   body_pt:`<p>Chris Voss passou vinte e quatro anos no FBI como negociador de reféns. A técnica mais subutilizada do kit dele é o espelho.</p>
<p>Repita as últimas uma a três palavras-chave que a outra pessoa acabou de dizer, com uma inflexão para cima, curiosa. É isso. Simples, poderoso, quase universalmente subutilizado.</p>
<p>Exemplo. Ela: "Eu tive um ano muito difícil e sinto que você não está levando isso em conta." Você: "Você sente que eu não estou levando em conta?" (inflexão para cima, pausa curta). Ela: elabora, revela a preocupação real.</p>
<p>O espelho funciona porque as pessoas têm uma necessidade profunda de se sentir ouvidas. O espelho dá a elas o sinal de que foram ouvidas sem você se comprometer com nada. Também as mantém falando, e cada frase a mais é uma chance de te dizerem algo que não planejavam dizer. Em negociação e em conversa comum, o movimento é o mesmo. Fale menos. Repita as últimas três palavras com curiosidade. Espere.</p>`,
   src:"Voss, Never Split the Difference · Section 5.2"},

  {slug:"n-voss-label", type:"lectio", f:"N",
   title:"Voss · Labeling",
   title_pt:"Voss · Rotular",
   body:`<p>A label is a verbal acknowledgment of what the other person seems to be feeling. "It seems like..." "It looks like..." "It sounds like..." Never start with "I". "I think you're feeling..." makes it about you. The label must face outward.</p>
<p>It works because it verbally confirms the other person's emotional experience, which allows the amygdala to deactivate. The brain no longer needs to fight for recognition of the feeling, because the feeling has been named.</p>
<p>Negative labels are especially powerful. Naming a negative emotion out loud often drains it of charge. "It seems like this has been really frustrating." "Yeah, it has." (tension deflates significantly). Even stronger: mislabeling on purpose to get a correction. "It seems like you're not sure about the terms." "No, it's not the terms, it's the timeline." You just found the real objection without asking a direct question.</p>`,
   body_pt:`<p>Um rótulo é um reconhecimento verbal do que a outra pessoa parece estar sentindo. "Parece que..." "Soa como se..." "Dá a impressão que..." Nunca comece com "eu". "Eu acho que você está sentindo..." faz tudo girar em torno de você. O rótulo precisa apontar para fora.</p>
<p>Funciona porque confirma verbalmente a experiência emocional da outra pessoa, o que permite à amígdala se desativar. O cérebro já não precisa brigar pelo reconhecimento do sentimento, porque o sentimento foi nomeado.</p>
<p>Rótulos negativos são especialmente poderosos. Dizer em voz alta uma emoção negativa muitas vezes a esvazia de carga. "Parece que isso tem sido bem frustrante." "É, tem sido." (a tensão desinfla bastante). Ainda mais forte: errar o rótulo de propósito para forçar uma correção. "Parece que você não está certo sobre os termos." "Não, não são os termos, é o prazo." Você acabou de achar a objeção real sem fazer uma pergunta direta.</p>`,
   src:"Voss, Never Split the Difference · Section 5.3"},

  {slug:"n-voss-calib-q", type:"lectio", f:"N", rare:1,
   title:"Calibrated Questions",
   title_pt:"Perguntas Calibradas",
   body:`<p>"Why" questions are accusatory. "Why did you do that" puts the other person on the defensive before they have said a word. Voss's substitute: "How" and "What" questions, designed for emotional impact, not just information.</p>
<p>Three of them do most of the work:</p>
<ul>
<li>"How am I supposed to do that?"</li>
<li>"What would need to be true for this to work?"</li>
<li>"What's going to happen if we don't reach an agreement here?"</li>
</ul>
<p>They work because they give the other person the <em>illusion of control</em>, they feel like they are choosing the answer, while forcing them to inhabit your constraint. "How am I supposed to do that" is perhaps Voss's single most useful line. Said in a genuinely curious, non-aggressive tone, it forces the other party to solve your problem for you. It is not a complaint. It is an invitation to collaborate on your constraint.</p>`,
   body_pt:`<p>Perguntas com "por quê" são acusatórias. "Por que você fez isso" coloca a outra pessoa na defensiva antes dela abrir a boca. O substituto de Voss: perguntas com "como" e "o quê", desenhadas para impacto emocional, não só para coletar informação.</p>
<p>Três delas fazem a maior parte do trabalho:</p>
<ul>
<li>"Como eu deveria fazer isso?"</li>
<li>"O que precisaria ser verdade para isto funcionar?"</li>
<li>"O que vai acontecer se não chegarmos a um acordo aqui?"</li>
</ul>
<p>Funcionam porque dão à outra pessoa a <em>ilusão de controle</em>, ela sente que está escolhendo a resposta, ao mesmo tempo em que a força a habitar a sua restrição. "Como eu deveria fazer isso" talvez seja a frase mais útil de Voss. Dita num tom genuinamente curioso, não agressivo, obriga o outro lado a resolver o seu problema por você. Não é reclamação. É convite para colaborar na sua restrição.</p>`,
   src:"Voss, Never Split the Difference · Section 5.5"},

  {slug:"n-navarro-feet", type:"lectio", f:"N",
   title:"Watch the Feet",
   title_pt:"Observe os Pés",
   body:`<p>Joe Navarro spent twenty-five years in the FBI reading people. His single most counterintuitive insight: stop watching the face and start watching the feet.</p>
<p>The face is the <em>most</em> controlled and therefore <em>least</em> reliable channel for truth detection. People are trained from infancy to manage their facial expressions. The feet and legs are the most honest because no one thinks about them. Millions of years of evolution wired the brain to prepare the feet for action before conscious thought catches up. Feet point toward what we want to approach and away from what we want to escape.</p>
<p>What to watch. Foot direction: if someone is talking to you but one or both feet are angled toward the door, they want to leave regardless of what their face is doing. Happy feet: slight rhythmic bouncing or wiggling means genuine excitement, almost impossible to fake. Foot retraction: feet suddenly pulling back or tucking under a chair means sudden discomfort, watch for this the moment you introduce a specific offer. Starter's position: one foot pointed toward the exit and one toward you means they are conflicted, part of them wants to leave but they are not gone yet. The window is closing. Address it now.</p>`,
   body_pt:`<p>Joe Navarro passou vinte e cinco anos no FBI lendo pessoas. Seu insight mais contraintuitivo: pare de olhar o rosto e comece a olhar os pés.</p>
<p>O rosto é o canal <em>mais</em> controlado e portanto <em>menos</em> confiável para detecção de verdade. As pessoas são treinadas desde a infância para gerenciar expressões faciais. Os pés e pernas são os mais honestos porque ninguém pensa neles. Milhões de anos de evolução conectaram o cérebro para preparar os pés para a ação antes que o pensamento consciente alcance. Os pés apontam para o que queremos abordar e para longe do que queremos escapar.</p>
<p>O que observar. Direção dos pés: se alguém está falando com você mas um ou os dois pés estão angulados para a porta, essa pessoa quer sair, independentemente do que o rosto faz. Pés felizes: um pequeno bater ou mexer rítmico significa excitação genuína, quase impossível de fingir. Retração dos pés: pés que de repente puxam para trás ou se enfiam embaixo da cadeira significam desconforto súbito, repare nisso no instante em que você apresenta uma oferta específica. Posição de largada: um pé apontado para a saída e um para você significa que a pessoa está em conflito, parte dela quer sair mas ainda não foi. A janela está se fechando. Resolva agora.</p>`,
   src:"Navarro, What Every BODY Is Saying · Section 3.3"},

  {slug:"n-polyvagal-thermostat", type:"lectio", f:"N", rare:1,
   title:"You Are the Thermostat",
   title_pt:"Você É o Termostato",
   body:`<p>Mirror neurons in the social brain mean that your emotional state is literally contagious. When you speak with anger, their amygdala fires. When you speak with calm, their nervous system down-regulates. This is not metaphor. It is the mechanism behind Chris Voss's Late-Night FM DJ voice: it directly hits the other person's mirror neurons and slows their brain.</p>
<p>Practical consequence: you are always the emotional thermostat. If someone escalates, you do not match their energy. You absorb it and reflect back one level calmer.</p>
<p>This is the single highest-leverage move in any conflict. The conversation you were about to have at four is now happening at three. The one you were about to have at three is happening at two. By the time you have done this twice, the other person is in a different nervous-system state than they were in a minute ago, and they do not know why, and the problem that could not be discussed can now be discussed. The calm person wins the room. Not by being louder. By being the only one who refuses to escalate.</p>`,
   body_pt:`<p>Os neurônios-espelho no cérebro social fazem com que o seu estado emocional seja literalmente contagioso. Quando você fala com raiva, a amígdala do outro dispara. Quando você fala com calma, o sistema nervoso dele regula para baixo. Isso não é metáfora. É o mecanismo por trás da voz FM DJ de madrugada do Chris Voss: ela bate direto nos neurônios-espelho da outra pessoa e desacelera o cérebro dela.</p>
<p>Consequência prática: você é sempre o termostato emocional. Se alguém escalar, você não iguala a energia. Você absorve e devolve um nível mais calmo.</p>
<p>Este é o movimento de maior alavancagem em qualquer conflito. A conversa que você ia ter em quatro agora acontece em três. A que você ia ter em três acontece em dois. Depois que você faz isso duas vezes, a outra pessoa está num estado de sistema nervoso diferente do que estava um minuto atrás, e ela não sabe por quê, e o problema que não dava para discutir agora dá. A pessoa calma ganha a sala. Não por ser mais alta. Por ser a única que se recusa a escalar.</p>`,
   src:"Human Relations Playbook · Polyvagal Theory applied"},

  {slug:"n-cialdini-reciprocity", type:"lectio", f:"N",
   title:"Cialdini · Reciprocity",
   title_pt:"Cialdini · Reciprocidade",
   body:`<p>Robert Cialdini spent thirty-five years studying the psychology of persuasion. His first principle is reciprocity: people feel compelled to return favors and gifts. The compulsion is nearly automatic. It operates below conscious reasoning.</p>
<p>The key is in three words: give <em>first</em>, give <em>unexpectedly</em>, give <em>specifically</em>. A generic gift triggers less reciprocity than a specific one. A requested favor triggers less than an unprompted one. A delayed favor triggers less than one given before anything was asked for.</p>
<p>Applied in negotiation: before you ask for anything, give something of real value. Information, access, a concession, your attention. Not as a tactic to announce. Done quietly, as if it were just the right thing. The other person's obligation response is largely automatic.</p>
<p>Watch for it in reverse. If someone has given you something, your willingness to concede will be higher than it should be. Know this about yourself. Being aware of reciprocity does not stop it from working on you, but it slows it down enough that you can decide whether the concession is one you actually want to make.</p>`,
   body_pt:`<p>Robert Cialdini passou trinta e cinco anos estudando a psicologia da persuasão. O primeiro princípio dele é a reciprocidade: pessoas se sentem compelidas a devolver favores e presentes. A compulsão é quase automática. Opera abaixo do raciocínio consciente.</p>
<p>A chave está em três palavras: dê <em>primeiro</em>, dê de forma <em>inesperada</em>, dê de forma <em>específica</em>. Um presente genérico dispara menos reciprocidade que um específico. Um favor pedido dispara menos que um não solicitado. Um favor atrasado dispara menos que um dado antes de qualquer pedido.</p>
<p>Aplicado em negociação: antes de pedir qualquer coisa, dê algo de valor real. Informação, acesso, uma concessão, sua atenção. Não como tática a anunciar. Feito em silêncio, como se fosse simplesmente a coisa certa a fazer. A resposta de obrigação do outro é em grande parte automática.</p>
<p>Observe no sentido inverso. Se alguém te deu algo, sua disposição para ceder vai ser maior do que deveria. Saiba isso sobre si mesmo. Estar ciente da reciprocidade não impede que ela funcione em você, mas desacelera o bastante para você decidir se a concessão é mesmo uma que quer fazer.</p>`,
   src:"Cialdini, Influence · Principle 1"},

  {slug:"n-ackerman", type:"lectio", f:"N",
   title:"The Ackerman System",
   title_pt:"O Sistema Ackerman",
   body:`<p>When bargaining is unavoidable, Voss's teachers at the FBI used the Ackerman System. It is a specific sequence that reads to the other side as a careful calculation rather than a random demand.</p>
<p>Establish your target price internally. Then:</p>
<ul>
<li>Open at <strong>65%</strong> of target. An extreme anchor.</li>
<li>If no deal, raise to <strong>85%</strong> (+20%).</li>
<li>If no deal, raise to <strong>95%</strong> (+10%).</li>
<li>If no deal, raise to <strong>100%</strong> (+5%).</li>
<li>Final offer: odd, specific number (e.g. $37,893 not $38,000) plus some non-monetary element ("and I'll include X").</li>
</ul>
<p>The odd final number signals you have been calculating precisely. It reads as the absolute bottom of a real calculation, not a round number you chose arbitrarily. This reduces the impulse to counter dramatically.</p>
<p>Use tactical empathy between every round. A label, a question, a moment of genuine acknowledgment. The system fails without the human element. The arithmetic is only the skeleton.</p>`,
   body_pt:`<p>Quando negociar é inevitável, os professores do Voss no FBI usavam o Sistema Ackerman. É uma sequência específica que soa, para o outro lado, como um cálculo cuidadoso em vez de uma exigência aleatória.</p>
<p>Estabeleça seu preço-alvo internamente. Então:</p>
<ul>
<li>Abra em <strong>65%</strong> do alvo. Uma âncora extrema.</li>
<li>Sem acordo, suba para <strong>85%</strong> (+20%).</li>
<li>Sem acordo, suba para <strong>95%</strong> (+10%).</li>
<li>Sem acordo, suba para <strong>100%</strong> (+5%).</li>
<li>Oferta final: número ímpar, específico (ex.: R$37.893, não R$38.000) mais algum elemento não monetário ("e vou incluir X").</li>
</ul>
<p>O número final estranho sinaliza que você vinha calculando com precisão. Lê-se como o fundo absoluto de um cálculo real, não um número redondo escolhido ao acaso. Reduz drasticamente o impulso de contra-oferta.</p>
<p>Use empatia tática entre cada rodada. Um rótulo, uma pergunta, um momento de reconhecimento genuíno. O sistema falha sem o elemento humano. A aritmética é só o esqueleto.</p>`,
   src:"Human Relations Playbook · Section 5.9"},

  {slug:"n-fear-of-loss", type:"lectio", f:"N",
   title:"Fear of Loss Beats Hope of Gain",
   title_pt:"O Medo da Perda Vence a Esperança do Ganho",
   body:`<p>Daniel Kahneman and Amos Tversky won a Nobel Prize for showing that people feel losses roughly twice as strongly as equivalent gains. A hundred dollars lost hurts about as much as two hundred dollars gained feels good.</p>
<p>The practical consequence in negotiation and in life: people will walk away from a good deal if they feel treated unfairly. "Fair" becomes the entire negotiation once someone feels cornered.</p>
<p>What to do when someone invokes fairness or looks cornered: stop all momentum. Soften completely. Invite them to speak. "I want to treat you fairly. Tell me where you feel I've missed something." Then actually listen. The goal is not to win the point about fairness. It is to deactivate the emotion. Once the fear-of-loss circuit has fired, no rational argument lands until that circuit cools down. You cannot persuade a person whose amygdala is on fire. You can only let the fire die down and then try again.</p>`,
   body_pt:`<p>Daniel Kahneman e Amos Tversky ganharam um Nobel por mostrar que as pessoas sentem perdas com uma intensidade cerca de duas vezes maior que a de ganhos equivalentes. Perder cem dólares dói mais ou menos o quanto ganhar duzentos dá de alegria.</p>
<p>A consequência prática em negociação e na vida: as pessoas abandonam um bom acordo se se sentirem tratadas injustamente. "Justo" vira a negociação inteira assim que alguém se sente encurralado.</p>
<p>O que fazer quando alguém invoca justiça ou parece encurralado: pare todo o impulso. Suavize por completo. Convide a pessoa a falar. "Quero te tratar com justiça. Me diz onde você sente que eu deixei passar algo." E escute de verdade. O objetivo não é ganhar o ponto sobre justiça. É desativar a emoção. Depois que o circuito de medo da perda disparou, nenhum argumento racional pousa até esse circuito esfriar. Você não consegue persuadir uma pessoa com a amígdala em chamas. Só dá para deixar o fogo baixar e tentar de novo.</p>`,
   src:"Kahneman, Thinking Fast and Slow · via Voss"},

  {slug:"n-pre-interaction", type:"lectio", f:"N",
   title:"The 60-Second Pre-Interaction Protocol",
   title_pt:"O Protocolo de 60 Segundos Antes da Interação",
   body:`<p>Do this before any important interaction. It takes a minute. It changes your state.</p>
<p><strong>Breath.</strong> Four counts in through the nose, six counts out through the mouth. Three times. This activates ventral vagal mode. It drops cortisol. It physically softens jaw and shoulder tension.</p>
<p><strong>Posture reset.</strong> Feet hip-width apart. Weight even. Shoulders back and <em>down</em>, not up in a stiff power pose. Sternum slightly lifted. Hands visible and still.</p>
<p><strong>Face reset.</strong> Unclench the jaw. Let the lips part slightly. Soften the muscles around the eyes. This one change alone transforms how warm and approachable you appear.</p>
<p><strong>Voice warm-up.</strong> Say a few sentences at your intended pace. Your voice should feel low, slow, resonant. If it sounds thin or tight, take two more slow breaths before going in.</p>
<p><strong>Intention prime.</strong> Decide what state you want the other person to be in at the end of this interaction. Then decide what version of you produces that. Your body language will become naturally congruent.</p>`,
   body_pt:`<p>Faça isto antes de qualquer interação importante. Leva um minuto. Muda o seu estado.</p>
<p><strong>Respiração.</strong> Quatro tempos puxando pelo nariz, seis tempos soltando pela boca. Três vezes. Isso ativa o modo vagal ventral. Baixa o cortisol. Suaviza fisicamente a tensão da mandíbula e dos ombros.</p>
<p><strong>Postura.</strong> Pés na largura do quadril. Peso igual nos dois. Ombros para trás e para <em>baixo</em>, não para cima numa pose de poder rígida. Esterno levemente erguido. Mãos visíveis e paradas.</p>
<p><strong>Rosto.</strong> Solte a mandíbula. Deixe os lábios se abrirem um pouquinho. Suavize os músculos ao redor dos olhos. Essa única mudança transforma o quanto você parece caloroso e acessível.</p>
<p><strong>Aquecer a voz.</strong> Diga algumas frases no ritmo que pretende usar. Sua voz deve soar grave, lenta, com ressonância. Se sair fina ou presa, faça mais duas respirações lentas antes de entrar.</p>
<p><strong>Imprimir a intenção.</strong> Decida em que estado você quer que a outra pessoa esteja no fim desta interação. Depois decida qual versão sua produz isso. Sua linguagem corporal vai ficar naturalmente congruente.</p>`,
   src:"Human Relations Playbook · Section 7.1"},

  {slug:"n-trade-off-q", type:"quaestio", f:"N",
   title:"Which Trade-off Is This?",
   title_pt:"Qual Troca É Esta?",
   body:`<p>A city proposes raising its minimum wage from $12 to $20 an hour. Supporters say it will help low-wage workers. Opponents say it will cost jobs. Which analysis is Sowell's?</p>`,
   body_pt:`<p>Uma cidade propõe aumentar o salário mínimo de $12 para $20 por hora. Defensores dizem que vai ajudar trabalhadores de baixa renda. Opositores dizem que vai custar empregos. Qual análise é a de Sowell?</p>`,
   opts:["Both are right about something; the question is which effect dominates and for whom","It will help workers; opposition is political","It will cost jobs; support is naive","Nobody can know; economics is unpredictable"],
   opts_pt:["Os dois estão certos em alguma coisa; a questão é qual efeito domina e para quem","Vai ajudar trabalhadores; a oposição é política","Vai custar empregos; o apoio é ingênuo","Ninguém pode saber; economia é imprevisível"],
   correct:0,
   reveal:`<p>The honest Sowell answer: both. Workers whose productivity was already above $20 keep their jobs and might see small raises. Workers whose productivity sat between $12 and $20 lose their chance to be hired. The policy helps one group at the expense of another, and the question of whether this is good depends on which group you were trying to help. If the goal was to raise the floor for already-employed workers, it works. If the goal was to help the most vulnerable workers at the bottom of the skill ladder, it is the opposite of what you want. Most political arguments avoid naming which group they are helping. Sowell's whole project was to make them name it.</p>`,
   reveal_pt:`<p>A resposta honesta de Sowell: os dois. Trabalhadores com produtividade já acima de $20 mantêm os empregos e podem ver aumentos pequenos. Trabalhadores com produtividade entre $12 e $20 perdem a chance de ser contratados. A política ajuda um grupo às custas de outro, e a pergunta de se isso é bom depende de qual grupo você estava tentando ajudar. Se o objetivo era levantar o piso para trabalhadores já empregados, funciona. Se o objetivo era ajudar os trabalhadores mais vulneráveis no fim da escada de habilidades, é o oposto do que você quer. A maioria dos argumentos políticos evita nomear qual grupo está ajudando. O projeto todo de Sowell era fazê-los nomear.</p>`,
   src:"Sowell · Basic Economics on labor markets"},
];

// New ludus games for the newly-dense wings
const LUDI_NEW = [
  // History chronology — four more
  {slug:"lu-hist-ancient", type:"ludus", mode:"sort", f:"H",
   title:"Ludus · Ancient Battles in Order",
   title_pt:"Ludus · Batalhas Antigas em Ordem",
   body:`<p>Four decisive battles of the ancient world. Oldest first.</p>`,
   body_pt:`<p>Quatro batalhas decisivas do mundo antigo. Mais antiga primeiro.</p>`,
   items:[
     {label:"Marathon · Greeks beat Persians", year:-490},
     {label:"Gaugamela · Alexander beats Darius", year:-331},
     {label:"Cannae · Hannibal destroys Rome's army", year:-216},
     {label:"Zama · Scipio beats Hannibal", year:-202}
   ],
   items_pt:[
     {label:"Maratona · gregos vencem persas", year:-490},
     {label:"Gaugamela · Alexandre vence Dario", year:-331},
     {label:"Cannas · Aníbal destrói o exército romano", year:-216},
     {label:"Zama · Cipião vence Aníbal", year:-202}
   ],
   src:"Chronology · Historia II"},

  {slug:"lu-hist-medieval", type:"ludus", mode:"sort", f:"H",
   title:"Ludus · Christendom's Great Hinges",
   title_pt:"Ludus · As Grandes Dobradiças da Cristandade",
   body:`<p>Four moments that turned the course of Christendom. Oldest first.</p>`,
   body_pt:`<p>Quatro momentos que viraram o rumo da cristandade. Mais antigo primeiro.</p>`,
   items:[
     {label:"Chalcedon · 'Peter has spoken through Leo'", year:451},
     {label:"Canossa · the king in the snow", year:1077},
     {label:"Constance · the Western Schism ends", year:1417},
     {label:"Vienna · Sobieski charges the Ottomans", year:1683}
   ],
   items_pt:[
     {label:"Calcedônia · 'Pedro falou por Leão'", year:451},
     {label:"Canossa · o rei na neve", year:1077},
     {label:"Constança · o Cisma do Ocidente acaba", year:1417},
     {label:"Viena · Sobieski carrega os otomanos", year:1683}
   ],
   src:"Chronology · Historia III"},

  // Business/econ match — thinkers to ideas
  {slug:"lu-econ-ideas", type:"ludus", mode:"match", f:"N",
   title:"Ludus · Ideas and Their Owners",
   title_pt:"Ludus · Ideias e Seus Donos",
   body:`<p>Four ideas, four names. Match them.</p>`,
   body_pt:`<p>Quatro ideias, quatro nomes. Combine.</p>`,
   pairs:[
     {q:"There are no solutions, only trade-offs", a:"Sowell"},
     {q:"The seen and the unseen", a:"Bastiat"},
     {q:"Prices as the coordination of dispersed knowledge", a:"Hayek"},
     {q:"Loss aversion: losses hurt twice as much as equivalent gains", a:"Kahneman"}
   ],
   pairs_pt:[
     {q:"Não existem soluções, só trocas", a:"Sowell"},
     {q:"O visto e o não visto", a:"Bastiat"},
     {q:"Preços como coordenação de conhecimento disperso", a:"Hayek"},
     {q:"Aversão à perda: perdas doem o dobro dos ganhos equivalentes", a:"Kahneman"}
   ],
   src:"Thinker Match · Economia"},

  {slug:"lu-neg-tactics", type:"ludus", mode:"match", f:"N",
   title:"Ludus · The Negotiator's Toolkit",
   title_pt:"Ludus · O Kit do Negociador",
   body:`<p>Four tactics, four authors who made them famous. Match.</p>`,
   body_pt:`<p>Quatro táticas, quatro autores que as tornaram famosas. Combine.</p>`,
   pairs:[
     {q:"The Mirror · repeat the last 1-3 words", a:"Voss"},
     {q:"Watch the feet, not the face", a:"Navarro"},
     {q:"Reciprocity · give first, give unexpectedly", a:"Cialdini"},
     {q:"You are the thermostat · absorb and reflect calmer", a:"Porges"}
   ],
   pairs_pt:[
     {q:"O Espelho · repita as últimas 1 a 3 palavras", a:"Voss"},
     {q:"Observe os pés, não o rosto", a:"Navarro"},
     {q:"Reciprocidade · dê primeiro, dê inesperadamente", a:"Cialdini"},
     {q:"Você é o termostato · absorva e devolva mais calmo", a:"Porges"}
   ],
   src:"Tactic Match · Negotium"}
];

// Append IMAGINES + LUDI + HISTORIA + NEGOTIUM_NEW + LUDI_NEW onto FOLIOS
FOLIOS.push(...IMAGINES, ...LUDI, ...HISTORIA, ...NEGOTIUM_NEW, ...LUDI_NEW);

const AXIOM_POOL = AXIOMS;

if (typeof module !== "undefined") module.exports = {FAC, FOLIOS, AXIOM_POOL, IMG, YT};
