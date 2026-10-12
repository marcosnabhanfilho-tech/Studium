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
  H: {name:"Historia", color:"#B5856A"}
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
const AXIOM_POOL = AXIOMS;

if (typeof module !== "undefined") module.exports = {FAC, FOLIOS, AXIOM_POOL, IMG, YT};
