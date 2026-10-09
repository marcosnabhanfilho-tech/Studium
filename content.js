// Studium Generale — content library
// 7 faculties, ~90 folios, mix of lectio/opus/visio/quaestio/exercitium/suffragium/sententia

const FAC = {
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
const YT = {
  // Bishop Barron (verified Oct 2026)
  barron_beauty: "bBMOwZFpZX0",      // Evangelizing Through Beauty
  barron_aquinas: "iUBNTNiqn60",      // Catholicism and Beauty — LA 2018
  // Jordan Peterson
  peterson_meaning: "fIoDbudTNqI",    // Take Responsibility for Yourself
  // Jonathan Pageau
  pageau_symbolic: "lT_ZkFwjzqM",     // The Symbolic World
  // Fr. Mike Schmitz
  mike_prayer: "4K06yPO7KcE",         // From Saying Prayers to Praying
  // Roger Scruton (archive upload)
  scruton_beauty: "OlXuDCkhVLw",      // Sir Roger Scruton & Beauty
  // Pints with Aquinas (Matt Fradd)
  pints_god: "Rhf4X2w7QAA"            // How Reason & Logic Lead to Christianity
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

{slug:"act-potency", type:"lectio", f:"F", title:"Act and Potency",
 body:`<p>Parmenides argued change is impossible: being cannot come from being (it already is) nor from non-being (nothing comes from nothing). Greek philosophy choked for a century on his argument.</p>
<p>Aristotle's answer founded metaphysics. Between pure being and sheer nothing stands <em>potency</em> — real capacity not yet realized. The acorn is not an oak, but it is not <em>nothing</em> with respect to the oak.</p>
<p>Change is the actualization of a potency. One distinction, and the world becomes intelligible again: motion, growth, learning, grace.</p>`,
 src:"Aristotle, Physics I; Aquinas, De Principiis Naturae"},

{slug:"four-causes", type:"lectio", f:"F", title:"The Four Causes of a Statue",
 body:`<p>Why is there a statue? Four irreducible answers.</p>
<p><strong>Material</strong>: because there is bronze. <strong>Formal</strong>: because the bronze has this shape and not another. <strong>Efficient</strong>: because a sculptor worked it. <strong>Final</strong>: because someone wished to honor a general.</p>
<p>Modern science kept the first and third and dropped the fourth. Then spent centuries surprised that questions of purpose kept returning through the window.</p>
<p>To explain fully is to give all four.</p>`,
 src:"Aristotle, Physics II.3"},

{slug:"transcendentals", type:"lectio", f:"F", title:"The Transcendentals",
 body:`<p>Some predicates outrun every category. Whatever exists is <strong>one</strong> (undivided in itself), <strong>true</strong> (intelligible to mind), and <strong>good</strong> (desirable as an end). Many add <strong>beautiful</strong> — the good and the true made splendid to perception.</p>
<p>These are convertible with being itself: to the degree a thing <em>is</em>, it is one, true, good.</p>
<p>Consequence: evil, falsehood and ugliness are not rival substances but <em>privations</em> — holes in being. The dark has no wattage of its own.</p>`,
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

{slug:"essence-existence", type:"lectio", f:"F", title:"Essence and Existence",
 body:`<p>What a thing <em>is</em>, and <em>that</em> it is, are distinct. You can know perfectly what a phoenix would be while knowing none exists.</p>
<p>In every creature, essence <em>receives</em> existence from outside itself. Nothing about <em>what</em> you are explains <em>that</em> you are.</p>
<p>Aquinas's God is the single case where the distinction collapses: His essence is to exist — <em>ipsum esse subsistens</em>. Which is why everything else must be held in being, moment by moment, like a song held in voice.</p>`,
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

{slug:"calculation-problem", type:"lectio", f:"O", title:"The Calculation Problem",
 body:`<p>Mises in 1920: without private ownership of the means of production, there are no prices for capital goods; without those prices, there is no way to calculate whether one method of production uses resources better than another.</p>
<p>The socialist can know that an orphanage needs beds. He cannot know whether to make them of pine, steel, or 3D-printed polymer — because he has no price for pine, steel, or polymer relative to a thousand other uses.</p>
<p>The twentieth century ran the experiment. The verdict is in.</p>`,
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
 title:"Good company, bad stock?",
 body:`<p>A wonderful company that everyone agrees is wonderful trades at 60× earnings. First-level thought: "Great company — buy." Howard Marks: this is <em>first-level</em> thinking, and the market has already priced it. What is the second-level question?</p>`,
 opts:["Is it a great company?","Is it better than the price already assumes?","Will the stock go up?"],
 correct:1,
 reveal:`<p>Returns come from the gap between <em>reality</em> and <em>expectation</em>. A consensus "wonderful" is already in the price. You profit when the future is better than the consensus thought — which may happen with a mediocre company priced for apocalypse as readily as with a great one priced for miracles.</p><p>Quality matters. You pay for it in advance.</p>`,
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
 title:"Why does equity cost more than debt?",
 body:`<p>Every WACC calculation assumes it. State the reason precisely — why must shareholders demand <em>more</em> than lenders from the very same firm, with the very same cash flows?</p>`,
 opts:["Because stocks are riskier in general","Because equity is the residual claim — paid last, junior in bankruptcy","Because of taxes"],
 correct:1,
 reveal:`<p>The lender has a contract: fixed coupons, repayment, first claim in bankruptcy. The shareholder is the <em>residual</em>: paid last, whatever is left, if anything is.</p><p>Same firm, same cash flows — but the equity holder absorbs the variance. Higher risk borne demands higher return promised. Add the tax shield (interest deductible, dividends not) and debt is doubly cheaper — until leverage makes both claims riskier.</p>`,
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

// =============== VIDEOS ===============
{slug:"video-barron-beauty", type:"visio", f:"P", title:"Bishop Barron on Beauty",
 body:"The surest way to the modern soul, Barron argues, is through beauty. Watch this one on your lunch break.",
 ytId:YT.barron_beauty, src:"Bishop Robert Barron — Word on Fire"},

{slug:"video-pageau-symbolic", type:"visio", f:"T", title:"Jonathan Pageau: The Symbolic World",
 body:"Pageau on why pre-modern people saw a world of meaning where moderns see a world of mechanism — and why the symbolic view is making a comeback.",
 ytId:YT.pageau_symbolic, src:"Jonathan Pageau"},

{slug:"video-peterson-meaning", type:"visio", f:"F", title:"Peterson on Meaning",
 body:"Peterson at his most lucid: meaning as what emerges when responsibility, suffering, and love intersect. Secular in vocabulary, surprisingly Catholic in architecture.",
 ytId:YT.peterson_meaning, src:"Jordan B. Peterson"},

{slug:"video-pints-god", type:"visio", f:"T", title:"Pints with Aquinas: Does God Exist?",
 body:"Matt Fradd on the classical arguments — presented not as proofs you win with but as paths you walk down.",
 ytId:YT.pints_god, src:"Matt Fradd — Pints with Aquinas"},

{slug:"video-mike-prayer", type:"visio", f:"T", title:"Fr. Mike Schmitz on Prayer",
 body:"If you have never had a serious prayer life — or if yours has gone quiet — start here. Twelve minutes.",
 ytId:YT.mike_prayer, src:"Fr. Mike Schmitz — Ascension Presents"},
{slug:"video-scruton-beauty", type:"visio", f:"P", rare:1, title:"Scruton on Beauty",
 body:"The man himself, on the thesis that gives Pulchrum its whole shape. Watch this one slowly — ideally twice.",
 ytId:YT.scruton_beauty, src:"Sir Roger Scruton"},

{slug:"video-barron-la", type:"visio", f:"P", title:"Barron: Catholicism and Beauty",
 body:"Bishop Barron's 2018 Los Angeles Religious Congress talk — the fullest statement of his 'beauty-first' approach to evangelization.",
 ytId:YT.barron_aquinas, src:"Bishop Robert Barron"},

];

// Separate axiom pool — inserted every 8th slot
const AXIOM_POOL = AXIOMS;

if (typeof module !== "undefined") module.exports = {FAC, FOLIOS, AXIOM_POOL, IMG, YT};
