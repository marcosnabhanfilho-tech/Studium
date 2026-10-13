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
    daily_desc_I:   "Imagines — read a painting the way they used to be read",
    // === ONBOARDING ===
    ob_skip: "Skip",
    ob_next: "Next",
    ob_begin: "Begin",
    ob_1_title: "Swipe up",
    ob_1_body: "Each folio is one page. Swipe up to go to the next. The reel does not end on its own, you decide when enough is enough for today.",
    ob_2_title: "Double-tap to keep",
    ob_2_body: "If a folio strikes you, double-tap anywhere on it. The gold star saves it to your Thesaurus so you can find it again later.",
    ob_3_title: "The menu",
    ob_3_body: "Tap the circle in the top-left to open the menu. From there you can change wings, change the language, and see what you have kept.",
    ob_4_title: "The Rule",
    ob_4_body: "The thin lime bar at the top of your screen fills as you read. Finish ten folios in a day and the Rule is kept. One honest day of study at a time.",
    continuation: "(continues →)",
    swipe_right_hint: "swipe for more →",
    swipe_up_hint: "↑ next folio"
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
    daily_desc_I:   "Imagines — leia um quadro como se lia antigamente",
    // === ONBOARDING ===
    ob_skip: "Pular",
    ob_next: "Próximo",
    ob_begin: "Começar",
    ob_1_title: "Deslize para cima",
    ob_1_body: "Cada fólio é uma página. Deslize para cima para ir ao próximo. O rolo não termina sozinho, você decide quando já foi o suficiente hoje.",
    ob_2_title: "Toque duas vezes para guardar",
    ob_2_body: "Se um fólio te atingir, toque duas vezes em qualquer lugar dele. A estrela dourada o guarda no seu Thesaurus para você achar depois.",
    ob_3_title: "O menu",
    ob_3_body: "Toque no círculo no canto superior esquerdo para abrir o menu. Dali você muda de ala, muda o idioma, e vê o que já guardou.",
    ob_4_title: "A Regra",
    ob_4_body: "A barra fina verde-limão no topo da tela se enche à medida que você lê. Termine dez fólios num dia e a Regra está cumprida. Um dia honesto de estudo por vez.",
    continuation: "(continua →)",
    swipe_right_hint: "deslize para o lado →",
    swipe_up_hint: "↑ próximo fólio"
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
 src:"Augustine, Confessions I.1 (Pusey tr.)", img:IMG.augustine,
 title_pt: "O Coração Inquieto",
 body_pt: "<p>Tu nos fizeste para Ti, Senhor, e inquieto está o nosso coração até que repouse em Ti.</p><p>Agostinho escreveu isto nas primeiras linhas das <em>Confissões</em>, em cerca de 397 d.C. Dezesseis séculos depois, continua sendo o diagnóstico mais preciso do mal-estar moderno disponível. O ser humano não é um animal altamente organizado que invenciona Deus para se consolar. É uma criatura feita por Deus para Deus, com uma inquietação em seu centro que nada finito pode preencher. Testamos a tese ao escala.</p><p>O resultado está nos dados da civilização pós-cristã: a mais secular geração da história ocidental é também, por larga margem, a mais ansiosa, a mais deprimida, a mais só. Agostinho estava certo. O coração humano foi construído de uma certa maneira. Não dá para argumentar com a sua natureza por 1600 anos sem resultado.</p>",
 src_pt: "Agostinho, Confissões I.1 (tr. Pusey)"
},

{slug:"five-ways", type:"lectio", f:"T", title:"The Five Ways, in one breath",
 body:`<p>Aquinas offers five converging arguments for God's existence — none a probability guess, each a demonstration from a feature of the world no one denies:</p>
<p><strong>Motion</strong>: change requires a first unmoved mover. <strong>Causality</strong>: a chain of efficient causes requires a first cause. <strong>Contingency</strong>: things that can not-be require something that must be. <strong>Degrees</strong>: better and worse imply a best, source of all perfection. <strong>Governance</strong>: unintelligent things acting toward ends imply an ordering intelligence.</p>
<p>If any one holds, the Christian God is in reach of reason.</p>`,
 src:"St. Thomas Aquinas, Summa Theologiae I, q.2, a.3", img:IMG.aquinas,
 title_pt: "As Cinco Vias, em uma respiração",
 body_pt: "<p>Tomás oferece cinco argumentos convergentes para a existência de Deus. Nenhum é uma probabilidade. Cada um é um argumento modal da ordem da realidade:</p><p><strong>Movimento</strong>: mudança requer um primeiro motor imóvel. <strong>Causalidade</strong>: uma cadeia de causas eficientes requer uma primeira causa. <strong>Contingência</strong>: coisas que podem não-ser requerem algo que deve ser. <strong>Graus</strong>: melhor e pior implicam um melhor, fonte de toda perfeição. <strong>Governança</strong>: coisas sem inteligência agindo para fins implicam uma inteligência ordenadora.</p><p>Cada um pode ser atacado. Cada um foi atacado. Mas o padrão convergente é notável: cinco rotas independentes para a mesma conclusão. Esta é a estrutura metafísica da realidade clássica.</p>",
 src_pt: "São Tomás de Aquino, Suma Teológica I, q.2, a.3"
},

{slug:"q-first-mover", type:"quaestio", f:"T",
 title:"Can an arrow aim itself?",
 body:`<p>Aquinas writes: <em>things which lack intelligence act for an end, as the arrow is directed by the archer.</em> Does the Fifth Way require that natural things <em>have minds</em>?</p>`,
 opts:["Yes — teleology implies the thing itself knows its end","No — direction can be received from an intellect outside it"],
 correct:1,
 reveal:`<p>The acorn need not know the oak; it must be <em>ordered</em> to it. The question then becomes: ordered by whom?</p><p>Aquinas's distinction is between <em>intention</em> (which only minds have) and being <em>intended toward</em> (which non-minds can be). The arrow does not know the target. The archer does.</p>`,
 src:"Summa Theologiae I, q.2, a.3",
 title_pt: "Uma flecha pode mirar em si mesma?",
 body_pt: "<p>Tomás escreve: coisas que não têm inteligência agem para um fim, como a flecha é dirigida por um arqueiro. Qual é a força do argumento?</p>",
 opts_pt: ["Mostra que Deus intervém diretamente em todo evento natural",
   "Mostra que ordem direcional em coisas não-inteligentes exige uma mente ordenadora",
   "Mostra que a evolução não pode produzir complexidade",
   "Mostra que o universo tem um começo no tempo"],
 reveal_pt: "<p>A resposta correta é a segunda. Tomás não está dizendo que Deus intervém em cada evento (isso seria ocasionalismo, não tomismo). Está dizendo: o fato de que a bolota se desenvolve <em>em um carvalho</em>, em vez de em um pinheiro ou em um fogão a lenha, aponta para uma estrutura direcional em coisas naturais que elas próprias não poderiam ter imposto. A ordem direcional em coisas sem mente requer uma mente que impôs essa ordem. Essa é a quinta via.</p>",
 src_pt: "após Tomás, Suma Teológica I, q.2, a.3"
},

{slug:"accidents-remain", type:"quaestio", f:"T",
 title:"Why do the accidents remain?",
 body:`<p>At the consecration, the whole substance of bread becomes the Body of Christ. Yet the appearances — taste, weight, color — remain unchanged. Why would God leave the senses unrelieved?</p>`,
 opts:["To test faith","To make the sacrament a permanent school of the primacy of intellect over sensation","Because God cannot change accidents without changing substance"],
 correct:1,
 reveal:`<p>Substance is <em>what</em> a thing is; accidents are <em>how it appears</em>. In the Eucharist, substance changes and accidents are miraculously sustained. Aquinas's hymn says it plainly: <em>visus, tactus, gustus in te fallitur</em> — sight, touch and taste are deceived, and faith alone reaches what is truly there.</p><p>The sacrament is thus a daily lesson: reality is not what hits the senses first.</p>`,
 src:"cf. Summa Theologiae III, q.75; Adoro te devote",
 title_pt: "Por que os acidentes permanecem?",
 body_pt: "<p>Na consagração, toda a substância do pão se torna o Corpo de Cristo. Ainda assim, o que você vê, toca e sente permanece pão: textura, cor, peso, sabor. Por que Deus faz isso dessa maneira?</p><p>A resposta clássica (Tomás, Suma III, q.75-77): porque a transubstanciação opera no nível ontológico, não no nível fenomenal. A mudança é no <em>que a coisa é</em>, não no <em>que a coisa parece</em>. Os acidentes (aparência) permanecem porque Deus os sustenta sem o seu portador natural. Isso é propriamente miraculoso: a aparência sem a substância que normalmente a produziria.</p><p>Por que fazer dessa maneira? Para que a fé seja fé. Se víssemos carne no altar, não haveria graça na recepção, apenas física. A escondida real presença exige a resposta inteira do ser, não apenas do olho.</p>",
 src_pt: "São Tomás, Suma Teológica III, q.75"
},

{slug:"grace-perfects-nature", type:"lectio", f:"T", title:"Grace does not destroy nature",
 body:`<blockquote>Gratia non tollit naturam, sed perficit.</blockquote>
<p>Grace does not destroy nature, but perfects it. In one line, the whole Catholic answer to the Reformation debate about pure nature versus total depravity, to the Enlightenment's suspicion of the supernatural, and to the modern suspicion that holiness makes a man less human.</p>
<p>Grace makes the man more himself, not less.</p>`,
 src:"St. Thomas Aquinas, Summa Theologiae I, q.1, a.8 ad 2",
 title_pt: "A graça não destrói a natureza",
 body_pt: "<p>Gratia non tollit naturam, sed perficit. A graça não destrói a natureza, mas a aperfeiçoa. — Tomás, Suma I, q.1, a.8.</p><p>Esta é a frase que explica por que a Igreja Católica tomou tudo que valia a pena da filosofia grega, do direito romano, da literatura hebraica, da matemática árabe. Natureza humana é um dom de Deus. Razão humana é um dom de Deus. Beleza humana, trabalho humano, vida familiar humana, patriotismo humano, todos dons de Deus.</p><p>Graça não vem para suprimir essas coisas. Graça vem para purificá-las, orientá-las, elevá-las ao seu fim pleno. O cristianismo não é uma rejeição do humano. É o humano levado para onde não pode se levar sozinho. Em todo lugar onde a graça encontra a natureza, a natureza, finalmente, se torna o que deveria ter sido.</p>",
 src_pt: "São Tomás, Suma Teológica I, q.1, a.8"
},

{slug:"orthodoxy-tradition", type:"lectio", f:"T", title:"Votes for the Dead",
 body:`<blockquote>Tradition means giving votes to the most obscure of all classes, our ancestors. It is the democracy of the dead.</blockquote>
<p>Chesterton's trick: he wins the argument for tradition on democracy's own terms. If universal suffrage is good, why should being dead disqualify you?</p>`,
 src:"G. K. Chesterton, Orthodoxy, ch. IV (1908)", img:IMG.chesterton,
 title_pt: "Votos Para os Mortos",
 body_pt: "<p>Tradição significa dar votos à mais obscura de todas as classes, nossos ancestrais. É a democracia dos mortos. A tradição se recusa a submeter-se à pequena e arrogante oligarquia dos que por acaso estão caminhando por aí.</p><p>Todos os democratas se opõem a desqualificar os homens pelo acidente do nascimento. A tradição se opõe a desqualificá-los pelo acidente da morte. A democracia nos diz para não negligenciar a opinião de um bom homem, mesmo que ele seja nosso cavaleiriço. A tradição nos pede para não negligenciar a opinião de um bom homem, mesmo que ele seja nosso pai.</p><p>Não posso dividir democratas em democratas vivos e democratas mortos. É antidemocrático dar votos apenas aos vivos. É antidemocrático recusar o testemunho das gerações.</p>",
 src_pt: "G.K. Chesterton, Ortodoxia, cap. IV (1908)"
},

{slug:"madman-circle", type:"lectio", f:"T", rare:1, title:"The Madman's Circle",
 body:`<blockquote>The madman is not the man who has lost his reason. The madman is the man who has lost everything except his reason.</blockquote>
<p>A diagnosis of the paranoiac that applies to every totalizing theory: perfectly consistent, perfectly closed, explaining everything by ignoring most things.</p>
<p>The sane mind is larger than its own logic. It keeps a window open to what it has not yet understood.</p>`,
 src:"G. K. Chesterton, Orthodoxy, ch. II (1908)", img:IMG.chesterton,
 title_pt: "O Círculo do Louco",
 body_pt: "<p>O louco não é o homem que perdeu a razão. O louco é o homem que perdeu tudo menos a razão.</p><p>Em todos os casos de insanidade, há evidência de contração do pensamento, de estreitamento, não de expansão. O materialista, por exemplo, não é expansivo. Ele explica tudo, mas com uma teoria que explica tudo não deixando nada muito ricamente explicado. A sua explicação não deixa espaço para muitas coisas boas, não deixa espaço para a lealdade, não deixa espaço para a liberdade, não deixa espaço para o espanto.</p><p>O cristão, para Chesterton, é o homem com múltiplas lógicas que se recusam a se achatar em uma só. É o louco que tem todos os pensamentos necessários para explicar o mundo, e nenhum deles sozinho suficiente para explicá-lo. O cristão é o único homem que ainda tem dentro de si o círculo cheio.</p>",
 src_pt: "G.K. Chesterton, Ortodoxia, cap. II (1908)"
},

{slug:"john-prologue", type:"lectio", f:"T", title:"In the beginning was the Word",
 body:`<blockquote>In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.</blockquote>
<p>In the beginning was the Word, and the Word was with God, and the Word was God. All things were made by him; and without him was made nothing that was made. In him was life, and the life was the light of men. And the light shineth in darkness, and the darkness did not comprehend it.</p>`,
 src:"John 1:1–5 (Douay-Rheims)",
 title_pt: "No princípio era o Verbo",
 body_pt: "<p>In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.</p><p>Oito palavras latinas, dezesseis em português, que respondem à pergunta mais antiga da filosofia. O que estava no princípio? Não matéria. Não força. Não acaso. Logos, Verbo, Razão, Significado. A realidade começa em algo que pode ser dito.</p><p>Esta é a cosmovisão que pôde fundar a ciência moderna. Se o fundo da realidade é logos (razão ordenadora), então a realidade pode ser investigada racionalmente. Se o fundo da realidade é caos ou acaso, não há garantia de que a razão humana descobrirá qualquer coisa. A ciência moderna é um filho tardio desse primeiro versículo de João.</p>",
 src_pt: "Evangelho de João 1:1 (Vulgata)"
},

{slug:"newman-difficulties", type:"lectio", f:"T", title:"Ten thousand difficulties",
 body:`<blockquote>Ten thousand difficulties do not make one doubt.</blockquote>
<p>Newman's distinction is pastoral and precise: a difficulty is a question the mind cannot yet resolve. Doubt is a withholding of assent. One can live with the first for a lifetime. The second corrodes.</p>
<p>He is answering the Protestant assumption that an unanswered objection is grounds to leave. It is not; it is grounds to study.</p>`,
 src:"J. H. Newman, Apologia Pro Vita Sua, ch. V", img:IMG.newman,
 title_pt: "Dez mil dificuldades",
 body_pt: "<p>Dez mil dificuldades não fazem uma dúvida. A distinção de Newman é pastoral e precisa.</p><p>Uma <em>dificuldade</em> é algo que você não entende. A Trindade é difícil. A Encarnação é difícil. O problema do mal é difícil. Uma dificuldade não enfraquece uma crença, apenas revela os limites da sua compreensão atual dela.</p><p>Uma <em>dúvida</em> é algo diferente: é a suspensão da crença porque você julga a evidência insuficiente. Isso requer um ato positivo da vontade. É algo que você faz, não algo que acontece com você.</p><p>Newman: muitos ex-católicos saíram da Igreja pensando que suas muitas dificuldades acumuladas se tornaram uma dúvida. Confundiram incompreensão com incredulidade. Se a sua fé pede o que a razão rejeita, saia. Mas se ela pede o que a razão não entende, permaneça. Essas são duas situações diferentes.</p>",
 src_pt: "J. H. Newman, Apologia Pro Vita Sua, cap. V"
},

{slug:"faith-seeking", type:"quaestio", f:"T",
 title:"Credo ut intelligam — is it circular?",
 body:`<p>Anselm's motto: <em>I believe so that I may understand</em>. The modern objection: shouldn't understanding come <em>first</em>, so belief can be justified?</p>`,
 opts:["Yes, Anselm has it backwards","No — all serious knowledge works this way","Yes, but it's a useful psychological trick"],
 correct:1,
 reveal:`<p>Consider: the scientist believes the world is intelligible before he can prove it. The student trusts the teacher before he can verify him. A friendship cannot be audited from outside it.</p><p>Faith is not the suspension of reason, but the condition under which reason gets access to its greatest objects.</p>`,
 src:"St. Anselm, Proslogion",
 title_pt: "Credo ut intelligam · é circular?",
 body_pt: "<p>O lema de Anselmo: creio para que possa entender. A objeção moderna: você não deveria entender primeiro, e então crer?</p><p>A resposta clássica é que o conhecimento sério de qualquer coisa requer uma postura prévia de abertura, uma hipótese de trabalho que você segue para ver aonde ela leva. Nenhum físico começa duvidando da inteligibilidade do universo. Nenhum músico aprende sem primeiro admitir que algumas sequências de sons são belas e outras não. Nenhuma criança aprende sua língua materna duvidando dela.</p><p>Credo ut intelligam é a admissão honesta de que a fé é a condição de possibilidade de certo tipo de entendimento, não seu obstáculo. Não é prova. É convite: entre pela porta, veja o que você vê de dentro. A objeção de que isso é circular pressupõe que exista um conhecimento sem postura, puro, neutro. Não existe.</p>",
 src_pt: "após Santo Anselmo, Proslogion"
},

{slug:"rcr-waves", type:"lectio", f:"T", title:"Three Waves of One Process",
 body:`<p>Corrêa de Oliveira's thesis: the crisis of the West is not a series of accidents but one process, centuries long, driven by disordered pride and sensuality, unfolding in three great waves.</p>
<p>The <strong>sixteenth-century religious rupture</strong>. The <strong>French Revolution</strong>. <strong>Communism</strong>. Each wave secularizes what the previous one had loosened. Each presents itself as liberation.</p>
<p>The response, therefore, cannot be piecemeal either. A counter-revolution is the restoration of order <em>at its root</em> — in souls first, then in culture, then in institutions.</p>`,
 src:"after Plinio Corrêa de Oliveira, Revolution and Counter-Revolution (1959)",
 title_pt: "Três Ondas de Um Único Processo",
 body_pt: "<p>A tese de Corrêa de Oliveira: a crise do Ocidente não é uma série de acidentes políticos. É um processo único, revolucionário, antissacramental, de cinco séculos, que operou em três ondas sucessivas.</p><p><strong>Primeira onda</strong>: a Revolução Protestante do século XVI. Rejeita a autoridade sacramental da Igreja. Deixa a cristandade sem seu princípio de unidade.</p><p><strong>Segunda onda</strong>: a Revolução Francesa de 1789. Rejeita a autoridade sagrada da monarquia e da nobreza. Deixa a sociedade sem princípio de hierarquia.</p><p><strong>Terceira onda</strong>: a Revolução Comunista do século XX. Rejeita a propriedade privada e a família. Deixa a civilização sem princípio de pessoa.</p><p>Cada onda é a aplicação lógica dos princípios da anterior. Cada uma vai um pouco mais fundo. A quarta onda, Corrêa de Oliveira previu nos anos 1950, seria a dissolução dos próprios critérios de identidade pessoal. Olhe ao redor. Chegou.</p>",
 src_pt: "Plinio Corrêa de Oliveira, Revolução e Contra-Revolução (1959)"
},

// =============== PHILOSOPHIA ===============
{slug:"first-sentence", type:"lectio", f:"F", title:"The first sentence of philosophy",
 body:`<blockquote>All men by nature desire to know.</blockquote>
<p>Aristotle's evidence is disarming: the delight we take in the senses for their own sake. Not just when they're useful — when they're useless. We look because looking is good.</p>
<p>Curiosity is not survival that overshot. It is the signature of a rational nature. Your presence in this reel is Exhibit A.</p>`,
 src:"Aristotle, Metaphysics I.1 (980a)", img:IMG.raphael_athens,
 title_pt: "A primeira frase da filosofia",
 body_pt: "<blockquote>Todos os homens, por natureza, desejam saber.</blockquote>\n<p>A prova de Aristóteles é desarmante: o prazer que tiramos dos sentidos pelo próprio prazer deles. Não só quando são úteis — quando são inúteis. A gente olha porque olhar já é bom.</p>\n<p>A curiosidade não é sobrevivência que passou do ponto. É a assinatura de uma natureza racional. Sua presença neste rolo é prova disso.</p>",
 src_pt: "Aristóteles, Metafísica I.1 (980a)"
},

{slug:"act-potency", type:"lectio", f:"F", title:"How Aristotle Saved Reality",
 body:`<p>An ancient Greek named Parmenides argued that change can't happen. Think about it: something either <em>is</em> or <em>isn't</em>. If it is, it already exists — no change needed. If it isn't, nothing comes from nothing. So change is an illusion.</p>
<p>Greek philosophy choked on this for a century.</p>
<p>Aristotle's fix: there's a middle category — <em>potency</em>. An acorn isn't an oak. But it's not <em>nothing</em> relative to oak-ness either. It <em>can become</em> one. Change is just potential being realized.</p>
<p>One idea. The world is intelligible again. Everything — a plant growing, you learning, grace working — fits.</p>`,
 src:"Aristotle, Physics I; Aquinas, De Principiis Naturae",
 title_pt: "Como Aristóteles Salvou a Realidade",
 body_pt: "<p>Um grego antigo chamado Parmênides argumentou que a mudança não pode acontecer. Pense: uma coisa ou <em>é</em> ou <em>não é</em>. Se é, já existe — não precisa mudar. Se não é, do nada nada vem. Então a mudança é ilusão.</p>\n<p>A filosofia grega se engasgou nisso por um século.</p>\n<p>O remédio de Aristóteles: há uma categoria intermediária — <em>potência</em>. A bolota não é um carvalho. Mas também não é <em>nada</em> em relação à carvalhez. Ela <em>pode se tornar</em> um. A mudança é apenas o potencial sendo realizado.</p>\n<p>Uma ideia. O mundo volta a ser inteligível. Tudo — uma planta crescendo, você aprendendo, a graça operando — se encaixa.</p>",
 src_pt: "Aristóteles, Física I; Aquino, De Principiis Naturae"
},

{slug:"four-causes", type:"lectio", f:"F", title:"The Four Causes of a Statue",
 body:`<p>Why is there a statue? Four irreducible answers.</p>
<p><strong>Material</strong>: because there is bronze. <strong>Formal</strong>: because the bronze has this shape and not another. <strong>Efficient</strong>: because a sculptor worked it. <strong>Final</strong>: because someone wished to honor a general.</p>
<p>Modern science kept the first and third and dropped the fourth. Then spent centuries surprised that questions of purpose kept returning through the window.</p>
<p>To explain fully is to give all four.</p>`,
 src:"Aristotle, Physics II.3",
 title_pt: "As Quatro Causas de uma Estátua",
 body_pt: "<p>Por que existe uma estátua? Quatro respostas irredutíveis.</p>\n<p><strong>Material</strong>: porque há bronze. <strong>Formal</strong>: porque o bronze tem esta forma e não outra. <strong>Eficiente</strong>: porque um escultor o trabalhou. <strong>Final</strong>: porque alguém quis honrar um general.</p>\n<p>A ciência moderna manteve a primeira e a terceira e descartou a quarta. Depois passou séculos surpresa de que as questões de propósito continuassem voltando pela janela.</p>\n<p>Explicar plenamente é dar as quatro.</p>",
 src_pt: "Aristóteles, Física II.3"
},

{slug:"transcendentals", type:"lectio", f:"F", title:"Why Evil Isn't a Thing",
 body:`<p>Here's a wild claim from Aquinas: every single thing that exists is <strong>one</strong> (it's itself), <strong>true</strong> (you can know it), and <strong>good</strong> (you'd want it, correctly understood). Many add <strong>beautiful</strong> too.</p>
<p>These aren't properties <em>added</em> to things. They're the same as <em>being</em>, seen from different angles. The more something <em>is</em>, the more it's all four.</p>
<p>The payoff: evil doesn't actually exist. It's a <em>hole</em> in something good. Darkness isn't a thing — it's just missing light. Blindness isn't an organ — it's a missing one. All evil is a lack. That's why the devil can't create anything, only corrupt.</p>`,
 src:"Aquinas, De Veritate q.1; Summa I, q.5",
 title_pt: "Por Que o Mal Não Existe",
 body_pt: "<p>Uma tese selvagem de Aquino: toda e qualquer coisa que existe é <strong>una</strong> (ela mesma), <strong>verdadeira</strong> (pode ser conhecida) e <strong>boa</strong> (seria desejada, se bem compreendida). Muitos acrescentam ainda <strong>bela</strong>.</p>\n<p>Essas não são propriedades <em>acrescentadas</em> às coisas. São o próprio <em>ser</em>, visto de diferentes ângulos. Quanto mais algo <em>é</em>, mais é tudo isso.</p>\n<p>O prêmio: o mal não existe de fato. É um <em>buraco</em> em algo bom. A escuridão não é uma coisa — é só luz que falta. A cegueira não é um órgão — é um órgão ausente. Todo mal é uma falta. Por isso o diabo não pode criar nada, só corromper.</p>",
 src_pt: "Aquino, De Veritate q.1; Suma I, q.5"
},

{slug:"q-non-contradiction", type:"quaestio", f:"F",
 title:"Prove the Principle of Non-Contradiction",
 body:`<p>Nothing can both be and not be, in the same respect, at the same time. Everything you know depends on it. Now — can you prove it?</p>`,
 opts:["Yes, by direct demonstration","No, and that is a defect","No, but it can be defended by retorsion"],
 correct:2,
 reveal:`<p>Aristotle: every proof presupposes it, so any proof would be circular. But it is <em>defended</em> by retorsion — ask the denier to say something.</p><p>The moment he asserts anything, including his denial, he intends it to be true rather than false, and has used the principle. First principles are not conclusions; they are the ground one must stand on even to dig.</p>`,
 src:"Aristotle, Metaphysics IV",
 title_pt: "Prove o Princípio de Não-Contradição",
 body_pt: "<p>Nada pode simultaneamente ser e não ser, no mesmo sentido, ao mesmo tempo. Tudo o que você sabe depende disso. Agora — você consegue prová-lo?</p>",
 src_pt: "Aristóteles, Metafísica IV",
 opts_pt: ["Sim, por demonstração direta","Não, e isso é um defeito","Não, mas defende-se por retorsão"],
 reveal_pt: "<p>Aristóteles: toda prova pressupõe o princípio; qualquer prova dele seria circular. Mas ele é <em>defendido</em> por retorsão — peça ao negador que diga algo.</p><p>No momento em que afirma qualquer coisa, mesmo sua negação, pretende que seja verdadeira em vez de falsa, e já usou o princípio. Primeiros princípios não são conclusões; são o chão sobre o qual é preciso estar de pé até mesmo para cavar.</p>"
},

{slug:"newman-notional", type:"lectio", f:"F", title:"Notional vs Real Assent",
 body:`<p>Newman's distinction, which quietly rebuilds the philosophy of mind:</p>
<p><strong>Notional</strong> assent grasps propositions — accurate, pale, inert. A man holds the notion that death is certain and lives as if it weren't.</p>
<p><strong>Real</strong> assent grasps <em>things</em> — concrete, imaginative, and it moves the whole person. The same truth, made real, reorders a life.</p>
<p>The aim of education, then, is not more notions but the conversion of notions into realities. Which is why literature, liturgy and biography teach what syllogisms alone cannot.</p>`,
 src:"J. H. Newman, Grammar of Assent (1870)",
 title_pt: "Assentimento Nocional vs Real",
 body_pt: "<p>A distinção de Newman, que silenciosamente reconstrói a filosofia da mente:</p>\n<p>O assentimento <strong>nocional</strong> apreende proposições — preciso, pálido, inerte. Um homem concorda com a noção de que a morte é certa e vive como se não fosse.</p>\n<p>O assentimento <strong>real</strong> apreende <em>coisas</em> — concreto, imaginativo, e move a pessoa inteira. A mesma verdade, tornada real, reordena uma vida.</p>\n<p>A meta da educação, então, não é mais noções, mas a conversão de noções em realidades. É por isso que a literatura, a liturgia e a biografia ensinam o que o silogismo sozinho não ensina.</p>",
 src_pt: "J. H. Newman, Gramática do Assentimento (1870)"
},

{slug:"chestertons-fence", type:"lectio", f:"F", title:"Chesterton's Fence",
 body:`<p>A reformer finds a fence across a road and, seeing no use for it, moves to clear it away. The wiser man stops him:</p>
<blockquote>If you don't see the use of it, I certainly won't let you clear it away. Go away and think. Then, when you can come back and tell me that you do see the use of it, I may allow you to destroy it.</blockquote>
<p>Institutions are fences — the accumulated reasons of the dead, often no longer legible on the surface. The principle does not forbid reform. It forbids reform by ignorance.</p>`,
 src:"after G. K. Chesterton, The Thing (1929)", img:IMG.chesterton,
 title_pt: "A Cerca de Chesterton",
 body_pt: "<p>Um reformador encontra uma cerca atravessando uma estrada e, não vendo nela utilidade, parte para derrubá-la. O mais sábio o detém:</p>\n<blockquote>Se você não vê a utilidade dela, não deixarei que a derrube. Vá embora e pense. Depois, quando puder voltar e me dizer que vê a utilidade, talvez eu permita que a destrua.</blockquote>\n<p>Instituições são cercas — as razões acumuladas dos mortos, muitas vezes já ilegíveis na superfície. O princípio não proíbe a reforma. Proíbe a reforma por ignorância.</p>",
 src_pt: "a partir de G. K. Chesterton, The Thing (1929)"
},

{slug:"anscombe", type:"quaestio", f:"F",
 title:"Anscombe's Question",
 body:`<p>You knock over a glass. You sign a contract. Both are events caused by your body. What makes only one of them an <em>action</em> — something you did, for which you answer?</p>`,
 opts:["Deliberation preceded it","It had foreseeable consequences","The question 'Why?' asks for a reason, not a cause"],
 correct:2,
 reveal:`<p>Anscombe's criterion: intentional actions are those to which the question <em>Why?</em> — asking for a reason, not a cause — has application.</p><p>The contract has an answer (<em>to close the deal</em>). The spilled glass has only a mechanism. Responsibility, praise, blame, sin and merit all live inside the territory this small question marks out.</p>`,
 src:"G. E. M. Anscombe, Intention (1957)",
 title_pt: "A Pergunta de Anscombe",
 body_pt: "<p>Você derruba um copo. Você assina um contrato. Ambos são eventos causados pelo seu corpo. O que torna somente um deles uma <em>ação</em> — algo que você fez, pelo qual responde?</p>",
 src_pt: "G. E. M. Anscombe, Intention (1957)",
 opts_pt: ["A deliberação precedeu","Teve consequências previsíveis","A pergunta 'Por quê?' pede razão, não causa"],
 reveal_pt: "<p>O critério de Anscombe: ações intencionais são aquelas às quais o <em>Por quê?</em> — que pede razão, não causa — se aplica.</p><p>O contrato tem uma resposta (<em>para fechar o negócio</em>). O copo derramado tem só um mecanismo. Responsabilidade, mérito, culpa, pecado, virtude — tudo vive dentro do território que essa pequena pergunta demarca.</p>"
},

{slug:"essence-existence", type:"lectio", f:"F", title:"Why Anything Exists",
 body:`<p>You can perfectly describe a <em>phoenix</em> — fiery, immortal, reborn from ash — while knowing none exist. So <em>what something is</em> is one thing. <em>Whether it exists</em> is another.</p>
<p>Now the kicker: this is true of you too. Nothing about <em>what</em> you are — human, male, 20, Catholic — explains <em>that</em> you are. Existence was handed to you.</p>
<p>Aquinas: only one being doesn't need existence handed to it. The one whose essence <em>is</em> to exist. Everything else is held in being right now, like a song held in a voice. Stop singing, song's gone.</p>`,
 src:"Aquinas, De Ente et Essentia",
 title_pt: "Por Que Algo Existe",
 body_pt: "<p>Você pode descrever perfeitamente uma <em>fênix</em> — ígnea, imortal, renascida das cinzas — sabendo que nenhuma existe. Então <em>o que uma coisa é</em> é uma coisa. <em>Se ela existe</em> é outra.</p>\n<p>Agora o golpe: isso vale para você também. Nada <em>no que</em> você é — humano, homem, 20 anos, católico — explica <em>que</em> você é. A existência te foi entregue.</p>\n<p>Aquino: só um ser não precisa receber a existência. Aquele cuja essência <em>é</em> existir. Todo o resto é mantido no ser agora mesmo, como uma canção sustentada por uma voz. Pare de cantar — a canção se vai.</p>",
 src_pt: "Aquino, De Ente et Essentia"
},

{slug:"square-opposition", type:"exercitium", f:"F", title:"The Square of Opposition",
 body:`<p>Four sentence forms rule all reasoning. Can you tell which pairs do what?</p>
<p><strong>A</strong>: all S is P. <strong>E</strong>: no S is P. <strong>I</strong>: some S is P. <strong>O</strong>: some S is not P.</p>
<p>If A is true, which is false? If I is false, which is true? If someone refutes <em>all markets are efficient</em>, have they shown <em>no market is</em>?</p>`,
 reveal:`<p>A and O are <strong>contradictories</strong> — exactly one is true. Same for E and I. A and E are <strong>contraries</strong> — both can be false, never both true.</p><p>Half of bad arguing treats a contrary as a contradictory. Refuting "all markets are efficient" does not establish "no market is". The square makes the error visible at a glance.</p>`,
 src:"Aristotle, De Interpretatione; the scholastic tradition",
 title_pt: "O Quadrado da Oposição",
 body_pt: "<p>Quatro formas de frase governam todo raciocínio. Você consegue dizer que pares fazem o quê?</p>\n<p><strong>A</strong>: todo S é P. <strong>E</strong>: nenhum S é P. <strong>I</strong>: algum S é P. <strong>O</strong>: algum S não é P.</p>\n<p>Se A é verdadeira, qual é falsa? Se I é falsa, qual é verdadeira? Se alguém refuta <em>todos os mercados são eficientes</em>, provou que <em>nenhum mercado é</em>?</p>",
 src_pt: "Aristóteles, De Interpretatione; a tradição escolástica",
 reveal_pt: "<p>A e O são <strong>contraditórias</strong> — exatamente uma é verdadeira. O mesmo com E e I. A e E são <strong>contrárias</strong> — ambas podem ser falsas, nunca ambas verdadeiras.</p><p>Metade das más argumentações trata uma contrária como contraditória. Refutar \"todos os mercados são eficientes\" não estabelece \"nenhum mercado é\". O quadrado torna o erro visível de relance.</p>"
},

{slug:"madman-poll", type:"suffragium", f:"F",
 title:"MacIntyre's Thesis",
 body:`<p>MacIntyre: we no longer possess a shared moral vocabulary — only fragments of a lost scheme that still sound like reasoning but no longer settle anything. "Rights" vs "utility" vs "fairness" circle without ever converging.</p><p>Does the diagnosis fit the public argument you see?</p>`,
 opts:["Yes — exactly what I observe","Partly — but there is still common ground","No — people reach moral agreement all the time"],
 title_pt: "A Tese de MacIntyre",
 body_pt: "<p>MacIntyre: já não possuímos um vocabulário moral comum — só fragmentos de um esquema perdido que ainda soa como raciocínio mas já não decide nada. \"Direitos\" vs \"utilidade\" vs \"justiça\" giram sem jamais convergir.</p><p>O diagnóstico cabe no debate público que você observa?</p>",
 opts_pt: ["Sim — exatamente o que observo","Em parte — ainda há terreno comum","Não — as pessoas concordam moralmente o tempo todo"]
},

// =============== OECONOMIA (Austrian) ===============
{slug:"human-action", type:"lectio", f:"O", title:"Human Action",
 body:`<p>Mises's whole system in one line:</p>
<blockquote>Human action is purposeful behavior.</blockquote>
<p>It is not a definition anyone can argue with — to argue it is to act purposefully. Praxeology begins where that fact ends: from <em>action</em> alone, deduce the laws of economics without needing a single statistical regression.</p>
<p>Modern economics forgot this. It began studying men as if they were weather.</p>`,
 src:"Ludwig von Mises, Human Action (1949), ch. I", img:IMG.mises,
 title_pt: "Ação Humana",
 body_pt: "<p>O sistema inteiro de Mises em uma linha:</p>\n<blockquote>A ação humana é comportamento intencional.</blockquote>\n<p>Não é definição com a qual se possa discutir — discutir é agir intencionalmente. A praxeologia começa onde esse fato termina: a partir da <em>ação</em> apenas, deduz-se as leis da economia sem precisar de uma única regressão estatística.</p>\n<p>A economia moderna esqueceu disso. Começou a estudar os homens como se fossem o tempo.</p>",
 src_pt: "Ludwig von Mises, Ação Humana (1949), cap. I"
},

{slug:"knowledge-society", type:"lectio", f:"O", rare:1, title:"The Knowledge Problem",
 body:`<blockquote>The economic problem of society is not merely a problem of how to allocate "given" resources — if "given" is taken to mean given to a single mind which deliberately solves the problem set by these "data".</blockquote>
<p>Hayek's claim: the knowledge needed to run an economy <em>does not exist in any one place</em>. It is dispersed — the butcher knows his cuts, the farmer his fields, the shipping clerk his routes. No central authority can gather it, because much of it is tacit and perishable.</p>
<p>The price system is a <em>communication system</em>: it tells the farmer that copper is scarce in a factory he's never heard of, by making wire more expensive. Socialism's defect is not moral; it is epistemic.</p>`,
 src:"F. A. Hayek, 'The Use of Knowledge in Society' (1945)", img:IMG.hayek,
 title_pt: "O Problema do Conhecimento",
 body_pt: "<blockquote>O problema econômico da sociedade não é meramente um problema de alocar recursos \"dados\" — se \"dado\" significar dado a uma única mente que resolve deliberadamente o problema posto por esses \"dados\".</blockquote>\n<p>A tese de Hayek: o conhecimento necessário para operar uma economia <em>não existe em um só lugar</em>. Está disperso — o açougueiro conhece seus cortes, o fazendeiro seus campos, o despachante suas rotas. Nenhuma autoridade central o pode reunir, pois grande parte é tácito e perecível.</p>\n<p>O sistema de preços é um <em>sistema de comunicação</em>: diz ao fazendeiro que o cobre está escasso em uma fábrica da qual ele jamais ouviu falar, encarecendo o fio. O defeito do socialismo não é moral; é epistêmico.</p>",
 src_pt: "F. A. Hayek, 'O Uso do Conhecimento na Sociedade' (1945)"
},

{slug:"calculation-problem", type:"lectio", f:"O", title:"Why Central Planning Fails",
 body:`<p>Picture this: you're the central planner. An orphanage needs beds. Easy — order a thousand beds.</p>
<p>But <em>what kind</em>? Pine? Steel? Plastic? You have no prices for any of it, because the government owns all the lumber mills, steel plants, factories. So you have no way to know which raw material is scarcer, more valuable, better used elsewhere.</p>
<p>Mises saw this in 1920. He said: without prices, socialism isn't just inefficient — it's <em>blind</em>. The 20th century ran the experiment with millions of lives. He was right.</p>`,
 src:"Mises, Economic Calculation in the Socialist Commonwealth (1920)",
 title_pt: "Por Que o Planejamento Central Falha",
 body_pt: "<p>Imagine: você é o planejador central. Um orfanato precisa de camas. Fácil — mande fazer mil camas.</p>\n<p>Mas <em>de que tipo</em>? Pinho? Aço? Plástico? Você não tem preço algum de nada, porque o Estado é dono de todas as serrarias, siderúrgicas, fábricas. Então você não tem como saber qual matéria-prima está mais escassa, mais valiosa, melhor usada em outro lugar.</p>\n<p>Mises viu isso em 1920. Disse: sem preços, o socialismo não é só ineficiente — é <em>cego</em>. O século XX rodou o experimento com milhões de vidas. Ele estava certo.</p>",
 src_pt: "Mises, O Cálculo Econômico na Comunidade Socialista (1920)"
},

{slug:"q-cantillon", type:"quaestio", f:"O",
 title:"Who gets the new money first?",
 body:`<p>The central bank creates $100 billion. Prices eventually rise. But <em>who spends the new money before prices adjust</em>, and who holds the old money when they do?</p>`,
 opts:["Everyone, roughly equally","First recipients benefit; late recipients and savers lose","Only lenders"],
 correct:1,
 reveal:`<p>Richard Cantillon noticed this in 1730. New money enters at specific points — banks, government contractors, financial-asset holders. They spend <em>before</em> the general price level rises.</p>
<p>The grocery clerk and the pensioner spend the new money <em>after</em> prices have risen. The transfer is invisible, but it is a transfer. This is the Cantillon effect, and it explains more of the last forty years of inequality than any tax policy.</p>`,
 src:"Richard Cantillon, Essai sur la nature du commerce (c. 1730)",
 title_pt: "Quem recebe o dinheiro novo primeiro?",
 body_pt: "<p>O banco central cria 100 bilhões. Os preços sobem com o tempo. Mas <em>quem gasta o dinheiro novo antes de os preços se ajustarem</em>, e quem está segurando o dinheiro velho quando se ajustam?</p>",
 src_pt: "Richard Cantillon, Essai sur la nature du commerce (c. 1730)",
 opts_pt: ["Todos, mais ou menos igualmente","Os primeiros recipientes ganham; os últimos e os poupadores perdem","Só os credores"],
 reveal_pt: "<p>Richard Cantillon percebeu isso em 1730. O dinheiro novo entra em pontos específicos — bancos, empreiteiros do governo, detentores de ativos financeiros. Eles gastam <em>antes</em> de o nível geral de preços subir.</p>\n<p>O caixa de supermercado e o aposentado gastam o dinheiro novo <em>depois</em> de os preços terem subido. A transferência é invisível, mas é transferência. É o efeito Cantillon, e explica mais da desigualdade dos últimos quarenta anos do que qualquer política tributária.</p>"
},

{slug:"broken-window", type:"lectio", f:"O", title:"The Broken Window",
 body:`<p>A boy throws a brick through a baker's window. Onlookers console the baker: the glazier will have work, and his payment will circulate. Was the vandalism, perhaps, a public good?</p>
<p>Bastiat's answer, which Hazlitt rebuilt into a whole book: look at <em>what the baker would otherwise have done</em> with that money. Perhaps bought a suit. The tailor is now <em>out</em> a suit's worth of work. The glazier gained; the tailor lost; society as a whole has one fewer window.</p>
<blockquote>The art of economics consists in looking not merely at the immediate but at the longer effects of any act or policy; it consists in tracing the consequences of that policy not merely for one group but for all groups.</blockquote>`,
 src:"Hazlitt, Economics in One Lesson (1946); after Bastiat",
 title_pt: "A Vidraça Quebrada",
 body_pt: "<p>Um garoto joga uma pedra na vidraça do padeiro. Os circunstantes consolam o padeiro: o vidraceiro terá trabalho, e o pagamento circulará. Teria o vandalismo, por acaso, sido um bem público?</p>\n<p>A resposta de Bastiat, que Hazlitt desdobrou em um livro inteiro: observe <em>o que o padeiro teria feito, se não fosse isto</em> com aquele dinheiro. Talvez tivesse comprado um terno. O alfaiate agora está <em>sem</em> um pedido de terno. O vidraceiro ganhou; o alfaiate perdeu; a sociedade como um todo tem uma vidraça a menos.</p>\n<blockquote>A arte da economia consiste em olhar não só para os efeitos imediatos, mas para os mais longos, de qualquer ato ou política; em rastrear as consequências não só para um grupo mas para todos.</blockquote>",
 src_pt: "Hazlitt, Economia numa Única Lição (1946); após Bastiat"
},

{slug:"menger-water", type:"quaestio", f:"O",
 title:"Water or diamonds?",
 body:`<p>Water is essential to life. Diamonds are useless. Yet diamonds cost a fortune and water is free. Classical economics (Smith, Ricardo, Marx) could not explain this without inventing categories like "exchange value" vs "use value".</p><p>What explains it?</p>`,
 opts:["Labor theory of value — diamonds take more labor","Marginal utility — we value the next unit, not the category","Scarcity alone"],
 correct:1,
 reveal:`<p>Menger (1871): we never choose <em>water in general</em> vs <em>diamonds in general</em>. We choose the <em>next unit</em>. The 100th gallon of water is worth almost nothing to you. The first diamond is worth a great deal.</p><p>Value is subjective and marginal. One insight dissolved a century of confusion and birthed the Austrian school.</p>`,
 src:"Carl Menger, Principles of Economics (1871)",
 title_pt: "Água ou diamantes?",
 body_pt: "<p>A água é essencial à vida. Diamantes são inúteis. Entretanto diamantes custam uma fortuna e a água é grátis. A economia clássica (Smith, Ricardo, Marx) não conseguiu explicar isso sem inventar categorias como \"valor de troca\" vs \"valor de uso\".</p><p>O que explica?</p>",
 src_pt: "Carl Menger, Princípios de Economia (1871)",
 opts_pt: ["Teoria do valor-trabalho — diamantes exigem mais trabalho","Utilidade marginal — valoramos a próxima unidade, não a categoria","Escassez sozinha"],
 reveal_pt: "<p>Menger (1871): nunca escolhemos <em>água em geral</em> vs <em>diamantes em geral</em>. Escolhemos a <em>próxima unidade</em>. O 100º litro de água vale quase nada para você. O primeiro diamante vale muito.</p><p>O valor é subjetivo e marginal. Uma única intuição dissolveu um século de confusão e deu origem à escola austríaca.</p>"
},

{slug:"time-preference", type:"lectio", f:"O", title:"Time Preference",
 body:`<p>All else equal, a man prefers satisfaction now to satisfaction later. This is not a bias to be corrected. It is a fact of being a creature with a finite life.</p>
<p>The interest rate, Böhm-Bawerk argued, is the <em>price of time</em> — what the lender demands for postponing his use of resources. Suppress it artificially and you lie to the whole economy about how patient it can afford to be.</p>
<p>Project financed, factories built, careers chosen on the premise of cheap time — and the premise was false. This is Austrian business cycle theory in a paragraph.</p>`,
 src:"Böhm-Bawerk, Capital and Interest; Mises, Theory of Money and Credit",
 title_pt: "Preferência Temporal",
 body_pt: "<p>Dois mil hoje ou dois mil e cem no mês que vem? Quase todos ficam com os dois mil hoje. Essa escolha, repetida bilhões de vezes, é a <em>taxa de juros</em>.</p>\n<p>Os austríacos daí deduziram quase tudo: a estrutura do capital, o ciclo de negócios, por que o dinheiro barato enrola a produção. Böhm-Bawerk notou que métodos mais indiretos de produzir — fazer máquinas que fazem máquinas que fazem bens — rendem mais, mas só se as pessoas aguardarem.</p>\n<p>A taxa de juros é o cronômetro da civilização. Se o Fed falsifica o cronômetro, projetos de longo prazo são construídos e depois abandonados a meio caminho. Casas, dot-coms, cripto. O lixo é visível. A causa, não.</p>",
 src_pt: "Böhm-Bawerk, Capital e Juros (1884–1912)"
},

{slug:"rule-72", type:"lectio", f:"O", title:"The Rule of 72",
 body:`<p>Years to double your money ≈ 72 ÷ annual percentage return.</p>
<p>At 8%, nine years. At 6%, twelve. At 3%, twenty-four. Run it long: at 8%, money doubles roughly five times in 45 years. Thirty-two-fold.</p>
<p>The rule's real lesson is not arithmetic but temperament. The last doubling creates more wealth than all previous combined, and it only arrives for the investor who did nothing rash for four decades.</p>
<p>Compounding pays patience, and only patience.</p>`,
 src:"financial folklore; the math is Einstein's whether he said it or not",
 title_pt: "A Regra do 72",
 body_pt: "<p>Divida 72 pela taxa de juros. É o número de anos até o seu dinheiro dobrar.</p>\n<p>A 8% ao ano, 9 anos. A 2%, 36 anos. A 12%, 6 anos. É só isso. Está no bolso para a vida toda.</p>\n<p>Agora use ao contrário. Inflação de 7%? Seu dinheiro em espécie <em>perde metade do poder de compra em dez anos</em>. Isto é o que \"preservar riqueza\" significa — e por que não é o mesmo que ficar em espécie.</p>",
 src_pt: "aritmética; usada ao menos desde Pacioli, 1494"
},

{slug:"salamanca-poll", type:"suffragium", f:"O",
 title:"Scholastics and Austrians",
 body:`<p>The School of Salamanca — sixteenth-century Spanish Jesuits and Dominicans like Molina, Mariana and de Soto — defended the just price as "the common market price", argued against currency debasement, and anticipated subjective-value theory by three centuries.</p><p>Were they proto-Austrians?</p>`,
 opts:["Yes — subjective value in a cassock","Partly — but they kept moral limits Mises didn't","No — the Austrians would reject their natural-law framework"],
 title_pt: "Salamanca & Viena",
 body_pt: "<p>O jesuíta de Salamanca Luis de Molina (séc. XVI) sustentou que o justo preço geralmente é o preço comum do mercado. Hayek diria que são proto-austríacos. Alguns tomistas respondem que o Estagirita e o Doutor Comum amarraram troca à virtude mais fortemente do que isso. Para onde você tende?</p>",
 opts_pt: ["Pró-mercado · a cadeia Salamanca → Mises é real","Em parte · o mercado define, a virtude dirige","Não — o preço justo não é só o preço de mercado"]
},

// =============== NEGOTIUM (finance, strategy, decision) ===============
{slug:"tvm", type:"lectio", f:"N", title:"Time Value: the one idea under everything",
 body:`<p>A dollar today is worth more than a dollar next year — because today's dollar can be put to work.</p>
<p>All of finance is this one sentence applied with discipline. <strong>Discounting</strong> converts future cash into present value. <strong>Compounding</strong> runs the film forward. Every valuation, every bond price, every pension, every "should I take the money now or later" is the same computation in different clothes.</p>
<p>Master the mechanics until they are reflex. The analyst who hasn't is reasoning with his gut while pretending otherwise.</p>`,
 src:"foundations · TVM", img:IMG.massys_moneylender,
 title_pt: "Valor do Tempo: a ideia por baixo de tudo",
 body_pt: "<p>Um dólar hoje vale mais do que um dólar no ano que vem, porque o dólar de hoje pode ser investido e render retorno. Esta é a ideia singular por baixo de toda avaliação, todo investimento, toda decisão financeira séria.</p><p>A fórmula: PV = FV / (1+r)^n. O valor presente é igual ao valor futuro dividido por (1 mais a taxa de desconto) elevado ao número de períodos. Se eu lhe prometo $100 em cinco anos a uma taxa de desconto de 8%, o valor presente é $68. Se você aceita $68 agora, saiu neutro.</p><p>Isto parece trivial. Não é. É a mesma matemática que precifica títulos, avalia empresas, ancora pensões, determina se vale a pena fazer sua pós-graduação. Toda outra fórmula em finanças é uma rotina deste único princípio. Domine isto antes de qualquer coisa.</p>",
 src_pt: "Finanças corporativas, princípio zero"
},

{slug:"q-three-statements", type:"quaestio", f:"N",
 title:"How do the three statements link?",
 body:`<p>Income statement, balance sheet, cash flow statement. Analysts who cannot trace one dollar across all three are reading three rumors, not one set of accounts. What is the thread?</p>`,
 opts:["They don't — each covers a different question","Net income → retained earnings → opens the cash flow statement → reconciles to the balance sheet's cash line","Only cash flow matters"],
 correct:1,
 reveal:`<p>Net income flows from the income statement to retained earnings on the balance sheet. It also opens the cash flow statement, which reconciles accounting profit to actual cash by adjusting for non-cash items (depreciation) and working-capital changes.</p><p>The result explains the change in the cash line of the balance sheet. Three statements, one story. If they don't tie, something is wrong — with the books, or with your reading.</p>`,
 src:"financial statements · the integration check",
 title_pt: "Como os três demonstrativos se conectam?",
 body_pt: "<p>Demonstração de resultado, balanço patrimonial, demonstração de fluxo de caixa. Analistas que não conseguem explicar como os três se conectam não entendem a empresa, não importa quanto do relatório anual tenham lido. Qual é a conexão central?</p>",
 opts_pt: ["O lucro líquido na DRE vai para o patrimônio no balanço, e os ajustes vão para o fluxo de caixa","Fluxo de caixa é apenas uma versão de dinheiro da DRE","Os três são independentes e dizem a mesma coisa de ângulos diferentes","O balanço é a soma dos outros dois"]
},

{slug:"second-level", type:"quaestio", f:"N",
 title:"Can You Lose Money on a 'Great' Company?",
 body:`<p>Here's a trick question. Everyone agrees Company X is wonderful. Best brand, best moat, best management. It trades at 60× earnings. Your buddy says "obvious buy." Howard Marks says: that's <em>first-level</em> thinking. What's the real question?</p>`,
 opts:["Is it a great company?","Is it <em>better</em> than the price already assumes?","Will the stock go up?"],
 correct:1,
 reveal:`<p>Your returns don't come from the company being great. They come from the <em>gap</em> between what reality turns out to be and what the market already expects.</p>
<p>If everyone thinks it's wonderful and prices it accordingly, you need it to be <em>even better</em> than wonderful to make money. Meanwhile a mediocre company priced for the apocalypse can double if things turn out just OK.</p>
<p>Quality is real. The market just makes you pay for it in advance.</p>`,
 src:"after Howard Marks, The Most Important Thing",
 title_pt: "Você Pode Perder Dinheiro em uma Empresa 'Ótima'?",
 body_pt: "<p>Uma pergunta pegadinha. Todo mundo concorda que a Empresa X é maravilhosa. Melhor produto, melhor equipe, melhor vantagem competitiva. Você compra as ações. O preço cai 40% no ano seguinte. O que aconteceu?</p><p>Howard Marks em O Mais Importante: investir é um jogo de segundo nível. Nível um: isto é uma empresa maravilhosa? Nível dois: isto é uma empresa <em>mais</em> maravilhosa do que o preço já supõe?</p><p>Se todo mundo acha que é maravilhosa e precifica assim, você precisa que seja <em>ainda mais</em> maravilhosa do que maravilhosa para ganhar dinheiro. Enquanto isso, uma empresa medíocre precificada para o apocalipse pode dobrar se as coisas simplesmente saírem OK.</p>",
 src_pt: "Howard Marks, O Mais Importante (2011)"
},

{slug:"mr-market", type:"lectio", f:"N", title:"Mr. Market",
 body:`<p>Ben Graham's fable, which Buffett calls the most important investing passage ever written:</p>
<p>Imagine you own a share of a private business with a partner, Mr. Market. Every day he comes to you with a price at which he will buy your share or sell you his. On most days his price is reasonable. On some days he is euphoric and quotes a ridiculously high price. On others he is despairing and offers to sell you his share for pennies.</p>
<p>You are not obligated to trade. You can simply let him speak and go about your business. His moods are an <em>opportunity</em>, not an authority.</p>
<p>The investor who treats the market as a scoreboard has it backwards. The market is a servant, not a guide.</p>`,
 src:"Benjamin Graham, The Intelligent Investor, ch. 8", img:IMG.buffett,
 title_pt: "O Sr. Mercado",
 body_pt: "<p>A fábula de Ben Graham, que Buffett chama de a mais importante lição de investimento já escrita.</p><p>Imagine que você é sócio de um negócio com um homem chamado Sr. Mercado. Todo dia ele aparece na sua porta e lhe oferece um preço, pelo qual se compromete a comprar sua parte ou vender a parte dele a você. Alguns dias ele está eufórico e cita preços absurdamente altos. Outros dias ele está deprimido e cita preços ridiculamente baixos.</p><p>O erro do investidor amador é deixar o humor do Sr. Mercado afetar o seu. Se ele parece animado, você se anima. Se ele está deprimido, você fica preocupado.</p><p>O investidor sério usa o Sr. Mercado. Nos dias em que ele está deprimido demais, você compra dele. Nos dias em que ele está eufórico demais, você vende para ele. O resto do tempo, você o ignora. O Sr. Mercado é seu servo, não seu guia.</p>",
 src_pt: "Benjamin Graham, O Investidor Inteligente, cap. 8"
},

{slug:"invert", type:"lectio", f:"N", title:"Invert, always invert",
 body:`<p>Munger's favorite tool, taken from the mathematician Jacobi.</p>
<p>Asked "how do I make my company great?", most managers list the ways to succeed. Munger would invert: <em>how do I guarantee it fails?</em> The answers come faster and are often more useful. Hire for comfort, not competence. Punish messengers of bad news. Ignore your base rate. Diversify randomly. Chase last year's winner.</p>
<p>The negative paths to the goal are often clearer than the positive ones. "Avoid these" turns out to be most of the strategy.</p>`,
 src:"Charles T. Munger, Poor Charlie's Almanack",
 title_pt: "Inverta, sempre inverta",
 body_pt: "<p>A ferramenta favorita de Munger, tirada do matemático Jacobi. Perguntado \"como posso ter uma vida feliz?\", Jacobi dizia: inverta. Como poderia tornar sua vida miserável de forma garantida? Álcool, drogas, inveja, ressentimento, preguiça, não se exercitar, falar mal dos outros. Evite tudo isso e você terá dado passos reais na direção da felicidade.</p><p>Aplique a investimentos: como poderia perder dinheiro de forma garantida? Comprar ações da moda a preços de bolha, usar alavancagem em ativos ilíquidos, confiar em pessoas desonestas, concentrar demais, não ler os números. Evite tudo isso e você terá dado passos reais na direção de retornos razoáveis.</p><p>Aplique à vida: como poderia terminar aos quarenta anos sem casamento, sem filhos, sem fé, sem saúde, sem amizades e sem patrimônio? Siga a receita que a cultura dominante prescreve. Evite isso. É mais fácil evitar erros óbvios do que acertar perfeitamente.</p>",
 src_pt: "Charlie Munger · a técnica da inversão"
},

{slug:"q-why-equity-costs-more", type:"quaestio", f:"N",
 title:"Why Does Equity Cost More Than Debt?",
 body:`<p>Walk up to any CFO: "cost of equity > cost of debt" — they'll agree instantly. But <em>why</em>? Same company, same cash flows, same risk from the outside. Why do shareholders demand more than lenders?</p>`,
 opts:["Stocks are riskier in general — intuition","Shareholders get paid last if things go bad","Taxes"],
 correct:1,
 reveal:`<p>Lenders have a <em>contract</em>: here's your coupon, here's your repayment date, and if the company goes bankrupt, you get paid first out of what's left.</p>
<p>Shareholders have no contract. They get whatever is <em>left over</em> after everyone else is paid. If nothing's left — they get nothing. Same company, same cash flows, but all the variance lands on them.</p>
<p>More risk → demand more return. Plus interest is tax-deductible, dividends aren't, so debt is doubly cheaper. Until you borrow too much and both claims get riskier.</p>`,
 src:"cost of capital",
 title_pt: "Por que o Equity Custa Mais que a Dívida?",
 body_pt: "<p>Vá a qualquer CFO: \"custo do equity é maior que o custo da dívida\", vão concordar imediatamente. Mas por quê? Qual é a razão econômica?</p>",
 opts_pt: ["Juros de dívida são dedutíveis do imposto; dividendos de equity não","Acionistas vêm por último na ordem de pagamento se a empresa quebrar; dívida vem antes","Equity é mais arriscado para o investidor, então ele exige retorno maior para compensar","Todas as três"]
},

{slug:"risk-not-vol", type:"lectio", f:"N", title:"Risk is not volatility",
 body:`<p>Textbooks measure risk as standard deviation. But a price that swings on the way to doubling has hurt no one who didn't sell.</p>
<p>The real risks are two: <strong>permanent capital loss</strong>, and <strong>failing to meet an obligation when it comes due</strong>. Volatility only becomes risk when it forces your hand — through leverage, through fear, through needing the money now.</p>
<p>The investor's first risk control is not a formula but a structure: no leverage, cash for near needs, and a temperament that treats declines as weather.</p>`,
 src:"after Howard Marks, Buffett",
 title_pt: "Risco Não É Volatilidade",
 body_pt: "<p>Os livros didáticos medem risco como desvio padrão. Mas um preço que oscila para cima e para baixo não é necessariamente arriscado para você. Risco real é perda permanente de capital, não oscilação temporária em cotações.</p><p>Buffett: \"A volatilidade está longe de ser sinônimo de risco. O desvio padrão é um pedaço de informação sobre um movimento histórico de preço. Diz muito pouco sobre quão perigoso é um negócio.\"</p><p>Um portfólio com volatilidade alta mas sem risco de ruína (empresas sólidas, boa diversificação, horizonte longo) é menos arriscado do que um portfólio de volatilidade baixa mas com alavancagem exposta a eventos de cauda. A matemática do segundo tipo pode te apagar em um único mês. A matemática do primeiro tipo pode te deixar nervoso, mas se você aguentar as oscilações, sobrevive.</p>",
 src_pt: "Warren Buffett · uma correção fundamental à MPT"
},

{slug:"base-rates", type:"lectio", f:"N", title:"Base rates, or Bayes for investors",
 body:`<p>Before the pitch, the prior.</p>
<p>Most startups fail. Most acquisitions destroy acquirer value. Most actively-managed funds trail the index after fees. A vivid story — the founder, the synergy, the streak — is <em>evidence</em>. Evidence should <em>update</em> the base rate, not replace it.</p>
<p>The discipline is mechanical: write the base rate down <em>first</em>, then ask how strong this specific evidence really is against it.</p>
<p>Most financial folly is base-rate neglect with good production values.</p>`,
 src:"probability · after Kahneman, Tetlock",
 title_pt: "Taxas Base, ou Bayes para investidores",
 body_pt: "<p>Antes de ouvir o pitch, a probabilidade a priori. A maioria das startups falha. A maioria das aquisições destrói valor. A maioria dos CEOs são médios, por definição. A maioria dos gestores de ações ativos perde para o índice após taxas.</p><p>Quando alguém apresenta uma ideia, antes de avaliar os detalhes específicos, pergunte: qual é a taxa base de sucesso para coisas desta categoria? Se a taxa base é 10%, você precisa de uma razão muito boa para pensar que esta é uma das 10% que vão funcionar.</p><p>Kahneman: a falha mais comum de julgamento humano é ignorar as taxas base em favor de histórias específicas atraentes. A história é vívida. A estatística é maçante. O investidor sério faz o oposto da sua intuição: começa pela estatística e deixa a história tentar superá-la.</p>",
 src_pt: "Daniel Kahneman · aplicação a investimento"
},

{slug:"poll-ergodic", type:"suffragium", f:"N",
 title:"The Ergodicity Trap",
 body:`<p>Taleb: if a bet has positive expected value but risks ruin, taking it repeatedly is <em>not</em> rational — because ruin is absorbing. Russian roulette with six chambers and $6 million for a pull has +EV. Would you play?</p>`,
 opts:["Once, maybe","Never — ruin is not a drawdown","Yes, if the expected value is positive"],
 title_pt: "A Armadilha da Ergodicidade",
 body_pt: "<p>Taleb: se uma aposta tem valor esperado positivo mas corre risco de ruína, aceitá-la repetidamente é insano, mesmo que o cálculo diga que você vai ganhar em média. Por quê?</p><p>Porque uma vez arruinado, você sai do jogo. Não há \"média\" para você. A sua trajetória pessoal se desvia da expectativa populacional. O cálculo que diz que você vai ganhar em média é verdadeiro apenas se você puder apostar infinitamente, e você não pode.</p><p>Isto se chama não-ergodicidade. É a mais importante única ideia em finanças comportamentais que a maioria dos investidores nunca aprende. Para você, pessoalmente, importa evitar a ruína, mesmo ao custo de rendimento esperado. Nassim Taleb inteiro é esta única ideia estendida.</p>",
 src_pt: "Nassim Taleb · Antifrágil, Skin in the Game"
},

// =============== PULCHRUM ===============
{slug:"vermeer-balance", type:"opus", f:"P", rare:1, title:"Vermeer: Woman Holding a Balance",
 body:`<p>Pull this up and look slowly. A woman in blue at a table of pearls and gold — and the balance in her hand is <em>empty</em>. Behind her, framed on the wall, hangs a Last Judgment. The window light falls on her face, not on the treasure.</p>
<p>Everything is weighing. Her scales. Christ weighing souls above her. You weighing the picture.</p>
<p>Vermeer painted the examination of conscience and made it silent, domestic, and impossibly beautiful.</p>`,
 src:"Johannes Vermeer, c. 1664 — National Gallery of Art, Washington", img:IMG.vermeer_balance,
 title_pt: "Vermeer · Mulher Pesando Pérolas",
 body_pt: "<p>A balança está vazia. Essa é a primeira surpresa. A segunda é o Juízo Final atrás dela, no quadro de parede. Esta não é uma mulher pesando pérolas — ela está pesando a si mesma. A balança está vazia porque Vermeer está dizendo o que deveríamos ver no espelho: nada escondido, nada pesando a favor, só a quietude antes do próximo ato. O vestido azul-chumbo-estanho — pigmento mais caro do que o rosto do noivo — torna o momento sacramental. É um quadro curto porque é um sermão curto.</p>",
 src_pt: "Johannes Vermeer, c. 1664 · National Gallery, Washington"
},

{slug:"caravaggio-matthew", type:"opus", f:"P", title:"Caravaggio: The Calling of St Matthew",
 body:`<p>A dim Roman tavern. Money on the table, counting fingers, worldly men. Then: a single diagonal blade of light enters above Christ's head.</p>
<p>Follow the light. It lands on Levi the tax collector <em>before</em> Christ's hand does.</p>
<p>Then look at that hand: Caravaggio has quoted Adam's hand from the Sistine ceiling. Grace is a new creation, and it arrives like light — unearned, sudden, impossible to unsee. Matthew's own finger asks: <em>who, me?</em></p>`,
 src:"Caravaggio, 1599–1600 — Contarelli Chapel, San Luigi dei Francesi, Rome", img:IMG.caravaggio_matthew,
 title_pt: "Caravaggio · A Vocação de São Mateus",
 body_pt: "<p>Note o dedo. Cristo aponta como Deus aponta para Adão no teto de Michelangelo em Roma — Caravaggio pintou isto a cinco minutos a pé de lá. A mesma faísca criadora, agora dirigida ao chefe da máfia local. Mateus, o cobrador de impostos, aponta para si: <em>Eu? Tem certeza?</em> A resposta já está na luz. Caravaggio nunca pinta auréolas. Pinta luz escolhendo um rosto no meio de uma sala escura.</p>",
 src_pt: "Caravaggio, 1599–1600 · San Luigi dei Francesi, Roma"
},

{slug:"fra-angelico", type:"opus", f:"P", title:"Fra Angelico: Annunciation",
 body:`<p>Fra Angelico painted this for his own brothers at San Marco, on the wall at the top of the stairs they climbed every morning to their cells. It was not for a patron. It was for monks going to pray.</p>
<p>Mary and Gabriel both bow, both fold their hands. No one dominates. The architecture is bare — Dominican bare, not Franciscan poor. The pigment of the sky is lapis lazuli, more precious than gold.</p>
<p>Beauty here is a form of agreement — the painter agreeing with the subject, the subject with God. "Fra Angelico" means Brother Angelic. He earned the name.</p>`,
 src:"Fra Angelico, c. 1440–45 — San Marco, Florence", img:IMG.fra_angelico_annunciation,
 title_pt: "Fra Angelico · Anunciação",
 body_pt: "<p>Pintada diretamente sobre a parede do dormitório de um monge dominicano em San Marco, Florença. Era a primeira coisa que ele via ao acordar. Não quadro de museu. Prescrição.</p>\n<p>Note o espaço. Dois arcos. Dois seres. Nenhum toque. Toda a tensão está no <em>fiat</em> ainda por vir. A pergunta do anjo está no ar. A resposta de Maria vai refazer o mundo.</p>",
 src_pt: "Fra Angelico, c. 1437 · Convento de San Marco, Florença"
},

{slug:"scruton-wager", type:"lectio", f:"P", rare:1, title:"Scruton's Wager",
 body:`<p>Scruton's argument, compressed: beauty is not a private frisson but a <em>real value</em>, standing beside truth and goodness — something we can be right or wrong about, argue over, build civilizations around.</p>
<p>The twentieth century's cult of ugliness and desecration was not liberation but a <em>loss of nerve</em>: art that can no longer say <em>this is sacred</em> can only repeat <em>nothing is</em>.</p>
<p>A culture that stops making beautiful things stops believing it deserves to exist.</p>`,
 src:"after Roger Scruton, Why Beauty Matters (2009)",
 title_pt: "A Aposta de Scruton",
 body_pt: "<p>A beleza, dizem, está nos olhos de quem vê. Scruton: então, por que todas as culturas pintam suas mães com cuidado e nunca com desprezo? Por que crianças desenham o sol amarelo? Por que a profanação ofende mesmo quando não há vítima?</p>\n<p>A beleza é um <em>valor real</em>. Não um sentimento subjetivo e não uma convenção arbitrária. Ela treina o olho a ver o mundo como se mundo fosse — o que, para Scruton, é a mesma coisa que dizer: como amado.</p>",
 src_pt: "Roger Scruton, Beauty (2009); Why Beauty Matters (BBC, 2009)"
},

{slug:"michelangelo-adam", type:"opus", f:"P", title:"The Creation of Adam",
 body:`<p>Everyone sees the famous gap between the fingers. Look at the <em>other</em> hand.</p>
<p>God's left arm is around a woman — not yet created — and a child. He is reaching for Adam already thinking of Eve, already thinking of Christ, who in the fullness of time will complete this very gesture by stretching His arms on a cross.</p>
<p>The entire story is in the composition. Michelangelo did not paint a moment. He painted a plan.</p>`,
 src:"Michelangelo, Sistine Chapel ceiling, 1508–1512", img:IMG.michelangelo_adam,
 title_pt: "Michelangelo · Criação de Adão",
 body_pt: "<p>Olhe os dedos. Eles não se tocam.</p>\n<p>Esse é o ponto. Deus se estica; Adão não. Toda a imagem é sobre o esforço divino para encontrar a mão humana, e sobre o leve relaxamento humano que ainda assim o impede. É nossa posição permanente — a graça disponível, a resposta nossa.</p>\n<p>Observe também a figura por trás de Deus. Alguns dizem Eva, não criada ainda. Outros, Sofia. Michelangelo não comenta. A capela diz tudo em imagem.</p>",
 src_pt: "Michelangelo, Capela Sistina, 1512"
},

{slug:"chartres", type:"opus", f:"P", title:"Chartres: a theology in stone",
 body:`<p>Abbot Suger, rebuilding Saint-Denis around 1140, justified the expense with a theology: light is the closest sensible thing to God, and the soul rises <em>through</em> the material to the immaterial.</p>
<p>The Gothic style is that sentence built in stone. Walls dissolved into glass. Weight flung outward onto flying buttresses so the interior could become luminous height.</p>
<p>At Chartres, stand (in imagination) at the west end and look up the nave: 37 metres of vault. The building is an argument. Its conclusion is vertical.</p>`,
 src:"Chartres Cathedral, c. 1194–1220; Suger, De Administratione", img:IMG.chartres,
 title_pt: "Chartres",
 body_pt: "<p>Para construir uma catedral gótica, era preciso aceitar que não a veria terminada. Chartres levou 26 anos — rápido, para o período. Os mestres de obra que começaram as fundações estavam todos mortos quando a primeira missa foi cantada no coro.</p>\n<p>Observe o que isso diz da civilização. Começar o que não se terminará é um ato de fé no futuro — e, no caso dos construtores de catedrais, na própria eternidade. Nós ainda construímos nossas Chartres? Ou apenas prédios comerciais que recortam a amortização em cinco anos?</p>",
 src_pt: "Catedral de Chartres, 1194–1220"
},

{slug:"turner-temeraire", type:"opus", f:"P", title:"Turner: The Fighting Temeraire",
 body:`<p>A ghost-white battleship, hero of Trafalgar, is towed to the breaker's yard by a squat black tugboat belching smoke. The sunset behind them is the color of fire.</p>
<p>Turner painted the Industrial Revolution's victory in one picture — and did not disguise what was being killed. The frail dignity of the old thing. The dirty utility of the new. Both exactly as they were.</p>
<p>Ruskin called it the "most pathetic picture ever painted". Turner himself refused to sell it. He wanted it, as he said, to go with him to the grave.</p>`,
 src:"J. M. W. Turner, 1839 — National Gallery, London", img:IMG.turner_temeraire,
 title_pt: "Turner · O Último Combate do Téméraire",
 body_pt: "<p>O navio que lutou em Trafalgar — a embarcação que ajudou a quebrar a frota de Napoleão — está sendo rebocado para o desmanche. Um pequeno vapor negro cheio de carvão o puxa pela correnteza. O sol se põe no lado do velho navio. Em todo lugar que você olha, é o fim de alguma coisa.</p>\n<p>Turner tornou a cena deliberadamente sentimental e ainda assim deliberadamente moderna. O vapor venceu. O veleiro ganhou a glória. A escolha entre honra e eficiência não é nova.</p>",
 src_pt: "J. M. W. Turner, 1839 · National Gallery, Londres"
},

{slug:"ave-verum", type:"lectio", f:"P", rare:1, title:"Ave verum corpus, K. 618",
 body:`<p>Forty-six bars. Mozart wrote it six months before his death, for a small-town choirmaster in Baden — no fee worth mentioning, no occasion but Corpus Christi.</p>
<p>Listen for the economy: no ornament, no display, sopranos never forced high. Then listen for the modulation at <em>cujus latus perforatum</em> — the piercing of the side — where the harmony darkens and dissolves for a moment.</p>
<p>Genius, at the end, is the removal of everything unnecessary.</p>`,
 src:"W. A. Mozart, June 1791", img:IMG.mozart,
 title_pt: "Mozart · Ave Verum Corpus",
 body_pt: "<p>46 compassos. 4 minutos. Composto em junho de 1791 para o professor de música de um pequeno vilarejo austríaco. Mozart morreria 6 meses depois.</p>\n<p>Nada aqui aponta para o compositor. Nenhum truque, nenhuma modulação exibicionista. Um texto eucarístico medieval cantado como se cantado por alguém que já viu o outro lado.</p>",
 src_pt: "W. A. Mozart, Ave Verum Corpus K. 618 (1791)"
},

{slug:"beauty-poll", type:"suffragium", f:"P",
 title:"In the eye of the beholder?",
 body:`<p>"Beauty is in the eye of the beholder" — the most repeated sentence in modern aesthetics. If it were true, criticism would be impossible: there would be nothing to argue about, as with flavors of ice cream.</p><p>But we do argue, we educate taste, we say a man who prefers the shopping mall to Chartres is missing something. What follows?</p>`,
 opts:["There is a real standard, however hard to articulate","Taste is subjective but conversation is still useful","It really is just preference"],
 title_pt: "A beleza é objetiva?",
 body_pt: "<p>Dois homens olham para o mesmo quadro. Um o acha belo; o outro, feio. Estão ambos certos? Ambos errados? Um dos dois está mais próximo da verdade do que o outro?</p>",
 opts_pt: ["Beleza é objetiva — um deles está vendo melhor","É intersubjetiva — treino do olhar importa, mas há casos limites","É inteiramente subjetiva — nenhum está mais certo"]
},

{slug:"friedrich-wanderer", type:"opus", f:"P", title:"Friedrich: Wanderer above the Sea of Fog",
 body:`<p>The figure stands with his back to us — on a crag, before a landscape dissolving into mist. He sees what we cannot see. We see him seeing.</p>
<p>Friedrich invented a kind of Romantic icon with this painting: man as witness, nature as revelation, both held in a stillness that is not peace exactly, but something closer to prayer without an addressee.</p>
<p>The twentieth century's lonelier men — Nietzsche, Heidegger — have been standing on this crag ever since.</p>`,
 src:"Caspar David Friedrich, c. 1818 — Kunsthalle Hamburg", img:IMG.friedrich_wanderer,
 title_pt: "Friedrich · O Caminhante Sobre o Mar de Névoa",
 body_pt: "<p>Vemos o que ele vê, mas apenas através dele. Friedrich pinta de costas — o romântico vê o mundo e o mundo vê quem o vê. A posição é central para toda a filosofia alemã do século XIX e para toda a montagem de câmera do século XX. Fica-se do lado dele porque se é feito, por composição, para ser ele.</p>\n<p>Note o chão. Pedra sólida. O homem romântico olha o abismo com os pés firmes em terra. É, no fundo, uma pintura burguesa — e a melhor delas.</p>",
 src_pt: "Caspar David Friedrich, c. 1818 · Kunsthalle, Hamburgo"
},

// =============== PERCEPTIO ===============
{slug:"see-not-observe", type:"lectio", f:"C", title:"Seeing and Observing",
 body:`<blockquote>You see, but you do not observe. The distinction is clear.</blockquote>
<p>Holmes to Watson, about the seventeen steps Watson has climbed hundreds of times and cannot count.</p>
<p>Seeing is what the eyes do. Observing is what the <em>will</em> does with the eyes. It can be trained like a grip.</p>`,
 src:"A. Conan Doyle, A Scandal in Bohemia (1891)", img:IMG.paget_holmes,
 title_pt: "Dezessete Degraus",
 body_pt: "<p>Holmes a Watson: <em>Você vê, mas não observa</em>. A diferença é prática. Vinte anos no mesmo prédio e Watson não consegue dizer quantos degraus levam ao primeiro andar. Dezessete. Holmes conta.</p>\n<p>O exercício aqui: pense na sua escada mais familiar. Quantos degraus? Confira hoje à noite. A diferença entre seu palpite e a contagem real é um retrato da sua atenção.</p>",
 src_pt: "Arthur Conan Doyle, Um Escândalo na Boêmia (1891)"
},

{slug:"ex-room-inventory", type:"exercitium", f:"C", title:"The Room Inventory",
 body:`<p>Do this now.</p>
<p>Look up from this screen for thirty seconds and study the room you are in. Then look back here and, without raising your eyes, name twenty objects in it — with color and position.</p>
<p>Then verify.</p>`,
 reveal:`<p>The misses are the interesting part. They reveal what your attention filters as <em>furniture</em> — present to the eye, absent to the mind.</p><p>Repeat this weekly in different rooms. Within a month, the character of what you miss will teach you more about your own attention than any book on it.</p>`,
 src:"daily drill · attention",
 title_pt: "Inventário · 10 Segundos",
 body_pt: "<p>Olhe ao redor. Dez segundos. Agora feche os olhos.</p>\n<p>Quantos objetos azuis você consegue nomear? Em que direção aponta a cadeira mais próxima? Qual é a última coisa à sua direita que você <em>não</em> tocou hoje?</p>\n<p>Abra os olhos. Confira. O erro é informação — ele diz o que seu olho está procurando por padrão.</p>",
 src_pt: "Holmesian drill · Perceptio"
},

{slug:"ex-stranger-read", type:"exercitium", f:"C", title:"The Stranger Read",
 body:`<p>Next time you are in a café or a queue, choose one person. Observe only what is <em>evidence</em>: shoes and their wear, hands, watch, posture, what they carry and how.</p>
<p>Form <em>three</em> hypotheses about occupation or errand — three, never one.</p>`,
 reveal:`<p>Three hypotheses — not one. The one-hypothesis mind confirms what it first guessed. The three-hypothesis mind lets evidence <em>choose between</em> explanations.</p><p>Hold them loosely. The exercise is not to be right. It is to separate the data from the story, and to feel how eagerly the mind skips to the story.</p>`,
 src:"daily drill · inference discipline",
 title_pt: "Ler Um Estranho",
 body_pt: "<p>Observe, mas não encare, a próxima pessoa que você não conheça. Dê-se trinta segundos. Depois responda a si mesmo:</p>\n<p>Mão esquerda ou direita dominante? Casado — alguma pista? Trabalha ao ar livre ou dentro? Fumante ou não? Como sabe?</p>\n<p>Deduza de superfície: sapatos, mãos, postura. Depois siga sua vida sem lhe dizer nada. A tarefa não é julgar o estranho. É treinar o olhar.</p>",
 src_pt: "Após Doyle · drill de Perceptio"
},

{slug:"baseline-deviation", type:"lectio", f:"C", title:"Baseline and Deviation",
 body:`<p>Trained observers do not scan for the suspicious. They learn the <em>normal</em> first.</p>
<p>Every place has a baseline — the usual noise, pace, dress, behavior of a street, an office, a trading floor. Information lives in <em>deviations</em>: the parked car with the engine running. The colleague suddenly formal. The line item that grew when its peers shrank.</p>
<p>You cannot notice the anomalous until you have made a study of the ordinary. Most people never do.</p>`,
 src:"observation method · surveillance, security, trading",
 title_pt: "Linha de Base · Desvio",
 body_pt: "<p>O especialista em interrogatório não procura mentira. Procura <em>mudança</em>. Primeiro estabelece a linha de base — como esta pessoa fala, respira, segura as mãos quando diz a verdade. Depois faz a pergunta que importa. Qualquer desvio aponta para onde cavar.</p>\n<p>Serve para pessoas, mercados, códigos, planilhas, textos. Olhe o normal por tempo suficiente para que o estranho se destaque. É assim que o editor pega a frase ruim, o auditor pega a conta falsa, o médico pega o sintoma raro.</p>",
 src_pt: "Técnica de entrevista · Navarro, O Que Todo Corpo Está Dizendo (2008)"
},

{slug:"capital-mistake", type:"lectio", f:"C", title:"The Capital Mistake",
 body:`<blockquote>It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.</blockquote>
<p>Holmes was wrong about the sequence (we theorize automatically, we can't help it) and right about the mechanics: unexamined theories pull facts into themselves like gravity.</p>
<p>The discipline is to <em>catch yourself theorizing</em>, name the hypothesis out loud, and deliberately look for evidence that would falsify it.</p>`,
 src:"A. Conan Doyle, A Scandal in Bohemia (1891)",
 title_pt: "O Erro Capital",
 body_pt: "<blockquote>É um erro capital teorizar antes de ter dados. Insensivelmente, começa-se a torcer os fatos para que se encaixem nas teorias, em vez de teorias para que se encaixem nos fatos.</blockquote>\n<p>Holmes diz isso em 1891 e descreve metade do que vai dar errado na ciência, no jornalismo e na gestão nos cem anos seguintes.</p>\n<p>Observe primeiro. Nomeie a teoria depois. Mantenha a teoria em suspeita.</p>",
 src_pt: "Doyle, Um Escândalo na Boêmia (1891)"
},

{slug:"ex-memory-palace", type:"exercitium", f:"C", title:"Build a Memory Palace",
 body:`<p>Take the house of your childhood. Walk it mentally and fix ten loci in strict order: gate, door, hallway, first room, second room, hall, kitchen, stairs, upstairs landing, your old bedroom.</p>
<p>Now place ten things you must learn — one per locus — as vivid, absurd images <em>interacting</em> with the place. The Five Ways of Aquinas, perhaps: a motion-filled wind in the gate, a chain of falling dominoes down the hall…</p>
<p>Recall by walking the route.</p>`,
 reveal:`<p>The method is ancient. Simonides of Ceos invented it in the 5th century BC after identifying bodies at a collapsed banquet hall by remembering where each guest had been seated. Cicero wrote it down in <em>De Oratore</em>. Frances Yates told the whole story in <em>The Art of Memory</em> (1966).</p><p>It works because space is the mind's native filing system. Try it tonight. By tomorrow you will know all five.</p>`,
 src:"Rhetorica ad Herennium III; Yates, The Art of Memory (1966)",
 title_pt: "Palácio da Memória · 60 Segundos",
 body_pt: "<p>Lista: azeitona, régua, violino, carteira, martelo. Memorize em um minuto.</p>\n<p>Truque antigo: ande pela sua casa. Encontre as cinco coisas colocadas, uma por cômodo, em imagens absurdas. Uma azeitona gigante segurando a porta. Uma régua equilibrada sobre a geladeira. Quanto mais ridículo, melhor.</p>\n<p>Volte a elas em uma hora. Em um dia. Simônides fez isto no banquete de Cêos no século VI a.C. e revolucionou a oratória. Ainda funciona.</p>",
 src_pt: "Rhetorica ad Herennium III (séc. I a.C.); Yates, A Arte da Memória (1966)"
},

{slug:"q-see-observe", type:"quaestio", f:"C",
 title:"The Dog in the Night-Time",
 body:`<p>In "Silver Blaze", Holmes solves a case by noting <em>the curious incident of the dog in the night-time</em>. Watson protests: "The dog did nothing in the night-time." Holmes replies: "That was the curious incident."</p><p>What is the method?</p>`,
 opts:["Count what is there","Note what is <em>missing</em> from a baseline","Interview more witnesses"],
 correct:1,
 reveal:`<p>The guard dog did not bark when the horse was taken from the stable. From this absence, Holmes infers that the thief was not a stranger — the dog knew him. Hence an inside job.</p><p>The hardest observations are of <em>what is not there</em>. They require a baseline so clear that an absence registers as a presence.</p>`,
 src:"Doyle, 'Silver Blaze' (1892)",
 title_pt: "Ver vs Observar",
 body_pt: "<p>Holmes distingue dois modos de atenção. O que, especificamente, falta a quem <em>vê</em> sem observar?</p>",
 src_pt: "Doyle, Um Escândalo na Boêmia",
 opts_pt: ["Boa visão","Memória","Um propósito que dirige o olhar"],
 reveal_pt: "<p>Resposta: propósito. A diferença entre o olhar de Watson e o olhar de Holmes nunca é agudeza visual — Watson pode descrever qualquer coisa que lhe seja apontada. A diferença é que Holmes olha <em>em busca de</em>, Watson olha <em>para</em>.</p><p>A pergunta operativa não é \"o que estou vendo?\" — é \"o que esta cena tem para me dizer, se eu lhe fizer a pergunta certa?\"</p>"
},

{slug:"kims-game", type:"exercitium", f:"C", title:"Kim's Game",
 body:`<p>Have someone lay out fifteen small objects under a cloth — coins, keys, a stamp, a pen cap, whatever is to hand.</p>
<p>Uncover them for sixty seconds. Cover again. Write down all fifteen with as much detail as you can: which coin, facing which way, where in the arrangement.</p>`,
 reveal:`<p>Kipling named it in his novel <em>Kim</em> (1901), where it trains the boy for espionage. British intelligence services still use it.</p><p>Score yourself weekly. The improvement curve is steep and unreasonably satisfying. Within a month you will notice yourself observing in daily life with a slower, more deliberate gaze.</p>`,
 src:"after Kipling, Kim (1901)",
 title_pt: "Kim's Game",
 body_pt: "<p>Do romance de Kipling, Kim (1901). Um treinamento de espião: doze objetos num prato, um pano por cima, trinta segundos para a lista. Kim desenvolve isso a ponto de poder caminhar por um mercado inteiro e nomear todo detalhe depois.</p>\n<p>Faça: pegue doze objetos de uma gaveta. Trinta segundos. Cubra. Escreva o que lembra. Compare. A pontuação importa menos do que o padrão — você se lembra do que seu olho achou interessante. Ensina o olho a achar mais interessante.</p>",
 src_pt: "Rudyard Kipling, Kim (1901)"
},

{slug:"attention-poll", type:"suffragium", f:"C",
 title:"The Attention Economy",
 body:`<p>Simone Weil: "Attention, taken to its highest degree, is the same thing as prayer." If attention is the rarest moral resource, then the applications and feeds competing for it are not neutral tools. They are claimants.</p><p>How do you treat them?</p>`,
 opts:["I guard my attention like money","I notice the drain but struggle","I haven't thought of it that way"],
 title_pt: "Em quantas abas você está?",
 body_pt: "<p>James, 1890: a atenção é tomar posse pela mente, de forma clara e vívida, de um de vários objetos possíveis. Isso implica um fim a outros. Qual é o seu padrão agora?</p>",
 opts_pt: ["Uma aba — pelo menos neste momento","Duas ou três — alternando conscientemente","Mais do que posso contar — honestamente"]
},

// =============== HISTORIA ===============
{slug:"burke-partnership", type:"lectio", f:"H", title:"The Partnership Across Generations",
 body:`<blockquote>Society is indeed a contract. It is a partnership in all science; a partnership in all art; a partnership in every virtue, and in all perfection. As the ends of such a partnership cannot be obtained in many generations, it becomes a partnership not only between those who are living, but between those who are living, those who are dead, and those who are to be born.</blockquote>
<p>Burke's reply to the French Revolution's attempt to begin history over. You cannot. The dead voted; the unborn will vote. The living are their trustees, not their owners.</p>`,
 src:"Edmund Burke, Reflections on the Revolution in France (1790)",
 title_pt: "A Parceria Entre Gerações",
 body_pt: "<p>A sociedade é de fato um contrato. É uma parceria em toda ciência, uma parceria em toda arte, uma parceria em toda virtude e em toda perfeição. Como os fins de tal parceria não podem ser alcançados em muitas gerações, torna-se uma parceria não só entre os que estão vivos, mas entre os que estão vivos, os que estão mortos, e os que ainda vão nascer.</p><p>Burke escreve isto em 1790, três meses após o início da Revolução Francesa. Já viu aonde ela ia. A ideia de que a sociedade é um contrato apenas entre os vivos (Rousseau) é a semente de todo totalitarismo subsequente, porque os vivos podem reescrever tudo. A ideia de que a sociedade é um contrato entre vivos, mortos e os ainda não nascidos é o alicerce da civilização.</p>",
 src_pt: "Edmund Burke, Reflexões sobre a Revolução na França (1790)"
},

{slug:"tocqueville-despotism", type:"lectio", f:"H", title:"The Soft Despotism",
 body:`<p>Tocqueville saw it coming in 1840 — the new form of tyranny, unlike anything the ancients knew.</p>
<p>It would not be violent. It would be <em>mild</em>. It would not kill or imprison; it would smother the citizen with a thousand petty provisions, keep him safe and comfortable and <em>small</em>, assume the troubles of thought and will on his behalf, and reduce the nation at last to <em>a flock of timid and industrious animals, of which the government is the shepherd</em>.</p>
<p>Not what the democratic revolutions feared. Precisely what they were producing.</p>`,
 src:"Alexis de Tocqueville, Democracy in America, II.4.6 (1840)",
 title_pt: "O Despotismo Suave",
 body_pt: "<p>Tocqueville viu em 1840: a nova forma de tirania, diferente de todas as anteriores. Não a bota do déspota antigo. Não a espada do rei absoluto. Uma rede de pequenos regulamentos, suaves, benevolentes, feitos para o seu bem, que gradualmente removem toda iniciativa humana e deixam uma população passiva, dependente, infantilizada.</p><p>Ele chamou de \"despotismo suave\" e previu que seria a tirania característica das democracias modernas. Seus cidadãos ainda votariam. Mas seriam incapazes, por formação, de fazer qualquer coisa sem permissão. O Estado seria mãe deles, pai deles, e, em última instância, dono deles. Olhe para a Europa Ocidental hoje. O homem viu em 1840.</p>",
 src_pt: "Alexis de Tocqueville, A Democracia na América, Vol. II (1840)"
},

{slug:"kirk-canons", type:"lectio", f:"H", title:"The Six Canons",
 body:`<p>Russell Kirk's "canons of conservative thought", distilled from Burke, Adams, Coleridge and the Southern Agrarians:</p>
<p><strong>1.</strong> A transcendent moral order. <strong>2.</strong> Variety and mystery of traditional life, over narrow uniformity. <strong>3.</strong> Civilized society requires <em>orders</em> and classes. <strong>4.</strong> Freedom and property are closely linked. <strong>5.</strong> Faith in prescription, distrust of "sophisters and calculators". <strong>6.</strong> Prudence as the chief virtue of statesmen.</p>
<p>Agree or not, this is a <em>position</em>, not a mood. A political temperament reduced to arguable propositions is the first step out of mere reaction.</p>`,
 src:"Russell Kirk, The Conservative Mind (1953)",
 title_pt: "Os Seis Cânones",
 body_pt: "<p>Os \"cânones do pensamento conservador\" de Russell Kirk, destilados de Burke e da tradição anglo-americana. Memorize-os. Explicam quase todo desacordo político sério.</p><p><strong>1.</strong> Crença numa ordem moral transcendente que opera na sociedade. <strong>2.</strong> Afeição pela variedade e pelo mistério da existência humana tradicional, contra a uniformidade do coletivismo. <strong>3.</strong> Convicção de que a civilização requer classes e ordens, não igualdade mecânica. <strong>4.</strong> Reconhecimento de que a propriedade privada e a liberdade estão inseparavelmente conectadas. <strong>5.</strong> Confiança no costume, na convenção e no antigo direito, em vez de em cálculos abstratos. <strong>6.</strong> Reconhecimento de que a mudança deve ser lenta e orgânica, não revolucionária.</p><p>Kirk escreveu isto em 1953. Setenta anos depois, continua sendo o resumo mais preciso do que \"conservador\" significa quando falado por alguém que leu.</p>",
 src_pt: "Russell Kirk, A Mente Conservadora (1953)"
},

{slug:"dante-love", type:"lectio", f:"H", rare:1, title:"The Love that Moves the Sun",
 body:`<blockquote>L'amor che move il sole e l'altre stelle.</blockquote>
<p>The last line of the <em>Divine Comedy</em>. Fourteen thousand lines of pilgrimage — through Hell, up Purgatory, into Paradise — end here. Not with a doctrine. With a <em>love</em>.</p>
<p>Dante has seen the Beatific Vision. He cannot describe it. What he can say is what it does: it moves the sun and the other stars. The whole universe runs on this love. We are included in its circulation whether or not we notice.</p>`,
 src:"Dante, Paradiso XXXIII.145",
 title_pt: "O Amor Que Move o Sol",
 body_pt: "<p>L'amor che move il sole e l'altre stelle. O amor que move o sol e as outras estrelas. A última linha da Divina Comédia.</p><p>Treze mil versos. Inferno, Purgatório, Paraíso. Dante termina sua jornada vendo diretamente a Trindade e descobre que a resposta à última pergunta, aquela que empurra tudo, é o amor. Não o amor como sentimento. O amor como princípio metafísico. A causa última do movimento do universo é um ser que ama e cria porque ama.</p><p>Isto é a teologia cristã compactada em um único verso. O cosmos existe porque Deus escolheu amá-lo em existência. O sol se move porque o amor o move. Você existe por isso. Dante termina a maior obra da literatura ocidental com a confissão desta verdade.</p>",
 src_pt: "Dante, Paraíso XXXIII · a última linha"
},

{slug:"gibbon-poll", type:"suffragium", f:"H",
 title:"Why did Rome fall?",
 body:`<p>Gibbon blamed Christianity. Dawson said Christianity preserved what Rome could not. Belloc said Rome never fell — it transformed. Modern economic historians cite silver content and tax base.</p><p>Which explanation strikes you as closest?</p>`,
 opts:["Spiritual: Christianity softened Roman virtue (Gibbon)","Spiritual: Christianity saved what remained (Dawson, Belloc)","Material: fiscal and military collapse","Political: late-stage institutional sclerosis"],
 title_pt: "Por que Roma caiu?",
 body_pt: "<p>Gibbon culpou o cristianismo. Dawson disse que o cristianismo preservou o que valia a pena preservar em Roma. Qual é a sua leitura?</p>",
 opts_pt: ["Cristianismo enfraqueceu Roma com valores pacifistas e mundo-outro","Roma caiu por causas internas (fiscais, demográficas, militares) que não têm nada a ver com cristianismo","Cristianismo foi o único mecanismo que preservou alfabetização, direito e cultura clássica através dos séculos da invasão","Tudo isso ao mesmo tempo, em proporções que variam por século"]
},

{slug:"virgil-tears", type:"lectio", f:"H", title:"Sunt lacrimae rerum",
 body:`<p>Aeneas, washed up on the shores of Carthage, sees a mural of the Trojan War — his own war, his own dead — painted there as decoration for a foreign queen's temple.</p>
<blockquote>Sunt lacrimae rerum et mentem mortalia tangunt.</blockquote>
<p>There are tears for things, and mortal matters touch the heart.</p>
<p>Virgil's untranslatable phrase. The world weeps at itself. The sadness is <em>in the things</em>. One of the pieces of poetry that teaches a reader what a civilization is.</p>`,
 src:"Virgil, Aeneid I.462",
 title_pt: "Sunt lacrimae rerum",
 body_pt: "<p>Eneias, lavado nas costas de Cartago, vê um mural dos troianos sendo mortos. A sua cidade, perdida, celebrada em arte estrangeira. Ele diz, em voz baixa:</p><blockquote>Sunt lacrimae rerum et mentem mortalia tangunt.</blockquote><p>Há lágrimas no mundo, e as coisas mortais tocam a mente.</p><p>Virgílio escreveu isto em 19 a.C. É a melhor única linha de poesia que a civilização clássica produziu. Reconhece algo que a civilização pagã mal podia nomear mas sabia por experiência: existe uma tristeza inerente à transitoriedade das coisas, e um ser humano que não é tocado por ela não é totalmente humano. Agostinho, quatro séculos depois, leria Virgílio como um pré-cristão. Esta linha é a razão.</p>",
 src_pt: "Virgílio, Eneida I.462 (19 a.C.)"
},

// =============== VIDEOS (verified embeddable Shorts) ===============
{slug:"video-barron-1", type:"visio", f:"T", title:"Nothing but You, Lord",
 body:"A one-minute meditation from Bishop Barron. Watch, then sit with it.",
 ytId:YT.barron_short1.id, ytShort:true, src:"Bishop Robert Barron",
 title_pt: "Nada Além de Ti, Senhor",
 body_pt: "Uma meditação de um minuto do Bispo Barron. Assista, depois sente-se com ela.",
 src_pt: "Robert Barron · Word on Fire"
},

{slug:"video-barron-2", type:"visio", f:"T", title:"You're Not in Control",
 body:"Bishop Barron and Fr. Mike Schmitz, on the single hardest truth to receive. One minute.",
 ytId:YT.barron_short2.id, ytShort:true, src:"Bishop Barron & Fr. Mike Schmitz",
 title_pt: "Você Não Está no Controle",
 body_pt: "Bispo Barron e Pe. Mike Schmitz, sobre a mais difícil verdade de receber. Um ponto, dois homens, sessenta segundos.",
 src_pt: "Barron + Schmitz"
},

{slug:"video-peterson-resp", type:"visio", f:"F", title:"Take Responsibility",
 body:"Peterson, compressed. The single sentence of his entire corpus. Thirty seconds.",
 ytId:YT.peterson_resp.id, ytShort:true, src:"Jordan B. Peterson",
 title_pt: "Peterson · Pegue a responsabilidade",
 body_pt: "<p>Peterson condensa a vida inteira em três minutos: a dignidade segue a responsabilidade, não o conforto. Comece com o que você está evitando.</p>",
 src_pt: "Jordan Peterson · YouTube (clipe curto)"
},

{slug:"video-peterson-adv", type:"visio", f:"F", title:"Responsibility is Adventure",
 body:"Peterson on why 'be a good person' doesn't move you but 'bear the heaviest thing you can' does. With Rogan.",
 ytId:YT.peterson_adv.id, ytShort:true, src:"Jordan B. Peterson",
 title_pt: "Peterson · O conselho que mudou vidas",
 body_pt: "<p>\"Diga a verdade — ou pelo menos não minta.\" Soa simples até você tentar fazer isso por uma semana.</p>",
 src_pt: "Jordan Peterson · YouTube"
},

{slug:"video-pageau-fairy", type:"visio", f:"T", title:"Fairy Tales Are True?",
 body:"Pageau on why the stories you heard as a child weren't entertainment — they were a map of the world.",
 ytId:YT.pageau_fairy.id, ytShort:true, src:"Jonathan Pageau",
 title_pt: "Contos de Fadas São Verdadeiros?",
 body_pt: "Pageau sobre por que as histórias que você ouviu quando criança não eram entretenimento, eram uma educação em como funciona a realidade.",
 src_pt: "Jonathan Pageau · The Symbolic World"
},

{slug:"video-mike-imitation", type:"visio", f:"T", title:"Fr. Mike on The Imitation of Christ",
 body:"The 15th-century classic that reshaped more interior lives than almost any book save Scripture. Fr. Mike on why to read it.",
 ytId:YT.mike_imitation.id, ytShort:true, src:"Fr. Mike Schmitz — Ascension",
 title_pt: "Pe. Mike sobre A Imitação de Cristo",
 body_pt: "O clássico do século XV que reformou mais vidas interiores do que quase qualquer livro depois do Novo Testamento. Pe. Mike apresenta.",
 src_pt: "Fr. Mike Schmitz · Ascension"
},

{slug:"video-pints-name", type:"visio", f:"T", title:"How Pints with Aquinas Got Its Name",
 body:"Matt Fradd tells the origin story in sixty seconds. Why pints, why Aquinas.",
 ytId:YT.pints_name.id, ytShort:true, src:"Matt Fradd — Pints With Aquinas",
 title_pt: "Como Pints with Aquinas Recebeu Seu Nome",
 body_pt: "Matt Fradd conta a história de origem em sessenta segundos. Por que cervejas, por que Aquino.",
 src_pt: "Matt Fradd · Pints with Aquinas"
},
// =============== ARSENAL — Marcos's own writing ===============
// Verbatim passages from his essays. His voice, lightly framed.

{slug:"a-restless-heart-aim", type:"lectio", f:"A", rare:1, title:"The Right Standard",
 body:`<blockquote>The aim is not to make the argument unbeatable, but to make the cost of resisting it explicit, large, and unavoidable.</blockquote>
<p>From the preface to the Argument from Derivative Existence. The right standard for metaphysics at this level is not <em>no rational denial is possible</em>. It is: <em>the rational denier must pay a specific metaphysical price, and the price must be legible.</em></p>`,
 src:"The Argument from Derivative Existence, preface",
 title_pt: "O Padrão Correto",
 body_pt: "<p>O objetivo não é tornar o argumento invencível, mas tornar o custo de resistir a ele visível ao resistidor. Honestidade intelectual sob pressão: isso é tudo que você precisa manter. O resto se desenvolve sozinho.</p>",
 src_pt: "Marcos · Argumento da Existência Derivada, nota metodológica"
},

{slug:"a-borrowing-chain", type:"lectio", f:"A", title:"A Chain Without a Lender",
 body:`<blockquote>A chain of pure borrowing is a chain with nothing to be borrowed, which is to say nothing is in fact lent.</blockquote>
<p>The foundationalist intuition compressed into one line. An infinite regress of derivative beings does not escape the question; it just restages it. Each link borrows from the next. If no link is unborrowed, there is no original lender. Mutual support among the unsupported is not support.</p>`,
 src:"The Argument from Derivative Existence, §5.3",
 title_pt: "Uma Corrente Sem Credor",
 body_pt: "<p>Uma corrente de puro empréstimo é uma corrente sem nada para ser emprestado, ou seja, nenhum empréstimo real. Nada é explicado por adicionar mais elos, pois cada elo adicionado tem a mesma necessidade do primeiro: ele existe mas sua essência não exige que exista. Em algum lugar, algo precisa ser aquilo cuja essência <em>é</em> existir. É isso que a tradição clássica chama de Deus. Não um primeiro item na mesma linha, mas o tipo de ser que a linha pressupõe.</p>",
 src_pt: "Marcos · Argumento da Existência Derivada"
},

{slug:"a-the-cost-of-refusal", type:"lectio", f:"A", title:"To the Resister",
 body:`<p>If you reject this conclusion, you are not unintelligible, but you are committed. You hold one or more of: that contingency is metaphysically thinner than the analysis suggests; that derivative existence does not require a non-derivative source; that grounding chains can be self-sustaining without a foundation; that an impersonal foundation can ground contingent reality without either necessitating it or operating mind-like; or that explanatory demand simply has no purchase at the foundation.</p>
<p><em>Each is a position. Each carries a metaphysical price. The argument does not force assent. It does fix the cost of refusal. That is what the argument can give, and what it should aim to give. The rest is not philosophy.</em></p>`,
 src:"The Argument from Derivative Existence, §9",
 title_pt: "Ao Resistente",
 body_pt: "<p>Se você rejeita esta conclusão, você não é ininteligível, mas está comprometido com uma de três coisas: (1) deflacionar a contingência (negar que exista uma lacuna real entre essência e existência), (2) rejeitar o fundacionalismo sobre dependência ontológica (afirmar que puro-dependente-do-dependente constitui existência), ou (3) aceitar a contingência fundacional bruta (dizer que o fundamento simplesmente é contingente, sem conta explicativa).</p><p>Cada uma dessas três saídas tem um custo. O teísta oferece uma conta positiva do porquê existe realidade contingente. O ateu oferece uma recusa principista de fornecer uma. Isso não é simetria. É um lado respondendo e o outro recusando.</p>",
 src_pt: "Marcos · Argumento da Existência Derivada"
},

{slug:"a-genealogy-of-institutions", type:"lectio", f:"A", rare:1, title:"The Genealogy You Were Taught to Forget",
 body:`<p>The university in which the modern skeptic sits to dismiss the Middle Ages is itself a medieval invention — born in Bologna and Paris, not in Athens or ancient Alexandria. The hospital in which the modern patient receives care traces its institutional lineage to the <em>xenodocheia</em> of the fourth-century Church and to the nursing sisters of the Hôtel-Dieu.</p>
<p>The scientific method that the modern scientist employs was forged in the disputations of medieval Oxford and Paris by Franciscan friars and Dominican bishops. The language of universal human rights that the modern political theorist deploys has its deepest conceptual roots in the doctrine of <em>imago Dei</em>.</p>
<p>These are not matters of sentiment. They are matters of historical fact.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §X",
 title_pt: "A Genealogia Que Te Ensinaram a Esquecer",
 body_pt: "<p>A universidade na qual o cético moderno se senta para descartar a Idade Média é ela mesma uma instituição medieval. O hospital em que ele espera ser tratado é uma invenção monástica cristã. O conceito mesmo de dignidade humana que ele invoca para rejeitar a Igreja é uma doutrina cristã, derivada de uma passagem específica em Gênesis, sem paralelo em qualquer tradição não-cristã.</p><p>O método científico pelo qual ele julga reivindicações religiosas foi aperfeiçoado por monges beneditinos e professores dominicanos. A caridade que ele chama de óbvia foi uma invenção cristã na história humana. O cético moderno é, em todos os sentidos relevantes, um ingrato bem acomodado em uma casa construída por outros.</p>",
 src_pt: "Marcos · da série A Cristandade Medieval"
},

{slug:"a-julian-admits", type:"lectio", f:"A", title:"What a Pagan Emperor Admitted",
 body:`<p>Julian the Apostate reigned 361–363 AD and spent that reign trying to roll back Christianization. In a letter to his pagan high priest in Galatia, he wrote:</p>
<blockquote>It is disgraceful that, when no Jew ever has to beg, and the impious Galilaeans support not only their own poor but ours as well, all men see that our people lack aid from us.</blockquote>
<p>The most hostile possible witness was forced to admit it: Christian charitable organization had no pagan equivalent. His pagan counterpart institutions failed. The charitable infrastructure of medieval Christendom did not emerge from nowhere; it grew from this root.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §II",
 title_pt: "O Que Um Imperador Pagão Admitiu",
 body_pt: "<p>Juliano, o Apóstata, reinou de 361 a 363 d.C. e passou esse reinado tentando reverter a cristianização iniciada por Constantino. Falhou. E numa carta privada a um sacerdote pagão (Carta 22), ele deu uma admissão que vale mais que qualquer argumento cristão:</p><blockquote>Nada contribuiu tanto para o avanço do ateísmo [cristianismo] quanto a humanidade mostrada pelos cristãos a estranhos, e seu cuidado com os mortos. É uma vergonha que, enquanto nenhum judeu precisa mendigar, e os ímpios galileus sustentam não só seus próprios pobres mas também os nossos, todos os homens vejam que nosso povo não tem socorro de nós.</blockquote><p>O inimigo mortal do cristianismo foi forçado, em correspondência privada, a admitir por que estava perdendo: os cristãos cuidavam dos pobres e os pagãos não. A caridade conquistou o Império, não a espada.</p>",
 src_pt: "Juliano, o Apóstata, Carta 22 (c. 362 d.C.)"
},

{slug:"a-oresme-bishop", type:"lectio", f:"A", title:"The Bishop Who Warned Against God-of-the-Gaps",
 body:`<p>Nicole Oresme, a 14th-century Roman Catholic bishop and one of the most original scientific minds of any century, developed arguments for the Earth's rotation long before Copernicus. On how to do natural philosophy, he wrote:</p>
<blockquote>There is no reason to take recourse to the heavens, the last refuge of the weak, or demons, or to our glorious God as if He would produce these effects directly.</blockquote>
<p>A medieval bishop explicitly warning against invoking God as an explanatory shortcut in natural philosophy. The Enlightenment did not create rational inquiry. It inherited it.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §V",
 title_pt: "O Bispo Que Avisou Contra o Deus-das-Lacunas",
 body_pt: "<p>Nicole Oresme, bispo católico romano do século XIV e um dos físicos matemáticos mais originais antes de Galileu, escreveu em seu <em>De Causis Mirabilium</em> que atribuir a Deus o que a ciência natural pode explicar não é piedade mas intelecto preguiçoso. Deus age pela ordem natural, não a interrompendo. Buscar causas naturais é glorificar o Criador, não desafiá-lo.</p><p>Isso foi escrito no século XIV por um bispo católico. A caricatura moderna de que o cristianismo medieval se opunha à investigação natural é refutada pela própria tradição que a produziu.</p>",
 src_pt: "Nicole Oresme, De Causis Mirabilium (c. 1370)"
},

{slug:"a-mean-speed-theorem", type:"lectio", f:"A", title:"What Galileo Did Not Discover",
 body:`<p>Clifford Truesdell, one of the most rigorous historians of mechanics, was unequivocal:</p>
<blockquote>The now published sources prove to us, beyond contention, that the main kinematical properties of uniformly accelerated motions, still attributed to Galileo by the physics texts, were discovered and proved by scholars of Merton College.</blockquote>
<p>Galileo's law of falling bodies — one of the foundational achievements of the Scientific Revolution — had been demonstrated three centuries earlier in a medieval Oxford college by scholars whose names most educated people have never encountered. Thomas Bradwardine. William Heytesbury. Richard Swineshead. Say their names.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §V",
 title_pt: "O Que Galileu Não Descobriu",
 body_pt: "<p>Clifford Truesdell, um dos historiadores mais rigorosos da mecânica, foi inequívoco: as leis fundamentais da cinemática, incluindo o teorema da velocidade média que Galileu publicou em 1638 e sobre o qual sua reputação como fundador da física descansa, foram descobertas, provadas e amplamente ensinadas pelos escolásticos do Merton College, Oxford, no século XIV. Trezentos anos antes de Galileu.</p><p>Os nomes: Thomas Bradwardine, William Heytesbury, Richard Swineshead, John Dumbleton. Todos clérigos católicos. Todos trabalhando em uma universidade católica. Todos produzindo exatamente a ciência matemática que a narrativa moderna diz que a Igreja impedia. A revolução científica não começou com Galileu rompendo com Roma. Começou dentro de Roma, séculos antes.</p>",
 src_pt: "Clifford Truesdell · da história da mecânica"
},

{slug:"a-reason-central", type:"lectio", f:"A", title:"An Unprecedented Institution",
 body:`<p>Edward Grant's assessment of the medieval university — the self-governing <em>universitas magistrorum et scholarium</em>, the invention of Bologna and Paris in the twelfth century — carries the full weight of the historical record:</p>
<blockquote>In all the history of human civilization, reason had never been accorded such a central role, one that involved so many people over such a wide area for such an extended period.</blockquote>
<p>Plato's Academy was a philosophical school around one master. Alexandria was a research library. The madrasa was religious. None had the corporate autonomy, standardized curricula, degree system, and license to teach that defined the university. The modern world has never seen fit to abandon the form.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §IV",
 title_pt: "Uma Instituição Sem Precedentes",
 body_pt: "<p>A avaliação de Edward Grant sobre a universidade medieval, a universidade autogovernada, protegida por carta papal, dedicada à inquirição livre dentro de uma estrutura de fé, é que nada parecido existia em qualquer civilização anterior ou contemporânea. Nem Grécia, nem Roma, nem China, nem Islã, nem Índia produziram a instituição.</p><p>A universidade é uma invenção especificamente latino-cristã. Bolonha 1088. Paris c. 1150. Oxford 1167. Cambridge 1209. Cada uma fundada por autoridade eclesiástica. Cada uma protegendo o professor contra o poder secular. Cada uma produzindo a ciência, o direito, a medicina e a teologia que a modernidade herdaria. O mundo moderno nasceu em uma sala universitária fundada por bispos.</p>",
 src_pt: "Edward Grant · da história da ciência medieval"
},

{slug:"a-fasting", type:"lectio", f:"A", title:"The Social Class of the Saints",
 body:`<p>The modern caricature imagines medieval monks as the lazy poor finding comfort in the cloister. Research into the social origins of medieval ascetics demonstrates the opposite: they were disproportionately drawn from the <em>upper classes</em>. The vow of poverty was embraced by people who had the option of wealth.</p>
<blockquote>Fasting seems not to appeal to people who have often been hungry.</blockquote>
<p>Voluntary poverty is a serious act when the alternative is a manor house. It is a radical one. The embrace of it by the medieval elite is not a sign of ignorance. It is a sign that something was being taken seriously that we no longer take seriously at all.</p>`,
 src:"The Civilizational Achievement of Medieval Christendom, §VII",
 title_pt: "A Classe Social dos Santos",
 body_pt: "<p>A caricatura moderna imagina monges medievais como pobres preguiçosos encontrando conforto no claustro. Os registros contam outra história. A maior parte da reforma monástica entre 1050 e 1200, Cluny, Cister, Cartuxa, foi liderada por nobres que renunciaram a vastas heranças para viver sob regra. Bernardo de Claraval chegou a Cister com trinta companheiros, muitos de sua própria família aristocrática, todos renunciando a terra, armas e casamento.</p><p>Jejuar, levantar à meia-noite para orar, trabalhar com as mãos, viver sem posses privadas, foram escolhas de classe mais altas da sua época. Os ricos deixavam seu dinheiro aos monges. Os monges, muitos dos quais tinham sido os ricos, se tornaram os mais sãos santos cristãos. A santidade não era compensação por pobreza. Era aristocracia espiritual escolhida contra aristocracia terrena.</p>",
 src_pt: "Marcos · da série A Cristandade Medieval"
},

{slug:"a-picasso-weapon", type:"lectio", f:"A", rare:1, title:"Picasso Was Transparent",
 body:`<p>October 29, 1944. Four days after joining the French Communist Party, Picasso publishes his statement on it in <em>L'Humanité</em> and <em>New Masses</em>:</p>
<blockquote>I am proud of having said by means of my drawings and my colors, since my first attempts at expression, that I have always considered painting not as an ornamental art, not as a pleasure for the eyes, nor as a passionate or rationalizing emotion, but as an offensive and defensive weapon against the enemy.</blockquote>
<p>He is saying, in plain language, that he has always considered painting a weapon. Against the enemy. The enemy, in context, is bourgeois Christian civilization — the civilization that produced the classical tradition he had spent his career dismantling. We are not inferring his intentions. We are reading his announcement.</p>`,
 src:"The Uglification of the West, Part I, §IV",
 title_pt: "Picasso Foi Transparente",
 body_pt: "<p>29 de outubro de 1944. Quatro dias depois de entrar para o Partido Comunista Francês, Picasso publicou uma declaração no <em>L'Humanité</em>: \"Fui para o Partido Comunista porque é o lado da liberdade, da fraternidade, da igualdade. Minha pintura toda a minha vida foi uma luta constante contra a reação e a morte da arte.\"</p><p>Em uma entrevista de 1945 ao escultor americano Giovanni Papini, publicada na coleção <em>Il Libro Nero</em>, Picasso foi ainda mais claro:</p><blockquote>Na arte, as pessoas não procuram mais consolação e exaltação. Mas os refinados, os ricos, os parasitas e os destiladores de essência procuram o que é novo, estranho, original, extravagante, escandaloso. E eu mesmo, desde o cubismo, satisfiz esses senhores e críticos com todas as muitas bizarrices que passaram pela minha cabeça. Quanto menos entenderam, mais me admiraram. [...] Hoje, como sabem, sou famoso e muito rico. Mas quando estou totalmente a sós comigo mesmo, não tenho coragem de me pensar artista no sentido antigo e grandioso do termo.</blockquote>",
 src_pt: "Picasso · entrevista a Giovanni Papini, 1952"
},

{slug:"a-picasso-trocadero", type:"lectio", f:"A", title:"The Trocadéro Confession",
 body:`<p>Picasso on his 1907 encounter with African masks that shaped Les Demoiselles d'Avignon and all of Cubism:</p>
<blockquote>The masks weren't just like any other pieces of sculpture. Not at all. They were magic things… intercessors against everything — against unknown, threatening spirits. I always looked at fetishes. I understood; I too am against everything. I too believe that everything is unknown, that everything is an enemy! Everything! They were weapons.</blockquote>
<p>His art is a weapon against the unknown and threatening forces of the world. Not in the service of beauty. Not in the service of truth. In the service of spiritual independence from forces he conceives as hostile. This is not the vocation of the Western artist. This is the vocation of the shaman.</p>`,
 src:"The Uglification of the West, Part I, §IV",
 title_pt: "A Confissão do Trocadéro",
 body_pt: "<p>Picasso sobre seu encontro em 1907 com máscaras africanas que moldaram <em>Les Demoiselles d'Avignon</em>, em conversa com André Malraux, publicada em <em>La Tête d'obsidienne</em> (1974):</p><blockquote>Quando fui ao Trocadéro era horrível. O mercado de pulgas. O cheiro. Eu estava sozinho. Queria ir embora. Não ia embora. Eu fiquei. Fiquei. Entendi que era muito importante: algo estava acontecendo comigo, certo? As máscaras não eram como qualquer outra escultura. Nada parecido. Eram <em>magia</em>. [...] Os Negros eram <em>intercessores</em>, não os conhecia desde então. Contra tudo; contra espíritos desconhecidos e ameaçadores. [...] Entendi; eu também sou contra tudo. Também acredito que tudo é desconhecido, que tudo é um inimigo!</blockquote><p>A arte moderna, por admissão de seu fundador, não é liberação. É magia defensiva contra um mundo hostil. É a arte de um homem que \"está contra tudo\".</p>",
 src_pt: "Picasso a Malraux · La Tête d'obsidienne (1974)"
},

{slug:"a-adorno-the-false", type:"sententia", f:"A",
 body:{latin:"Das Ganze ist das Unwahre.", english:"The whole is the false. — Theodor Adorno"},
 body_pt: {latin:"Das Ganze ist das Unwahre.",english:"O todo é o falso. — Theodor Adorno"},
 src_pt: "Theodor Adorno · a inversão hegeliana que fundamenta a crítica frankfurtiana"
},

{slug:"a-komar-melamid", type:"lectio", f:"A", title:"What People Actually Want",
 body:`<p>In 1993–94 the artists Komar and Melamid used professional polling firms in fourteen countries — America, Russia, China, France, Kenya, Iceland, Turkey, Portugal, Ghana — to ask what people wanted in a painting.</p>
<p>Across every culture surveyed, the answer was <em>the same</em>: a landscape with water, in natural colors, with a small human group and animals, representational, in a realist tradition. They painted what the data said. The results looked like 19th-century Hudson River School paintings.</p>
<p>They also painted the "most unwanted" paintings — the preferences of the smallest minority. The result in every country looked like what hangs in the contemporary art galleries of New York, Paris, and London. The gap between what humans find beautiful and what institutional art produces is not aesthetic philistinism. It is one of the most honest measurements of elite capture ever conducted.</p>`,
 src:"The Uglification of the West, Part I, §X",
 title_pt: "O Que As Pessoas Realmente Querem",
 body_pt: "<p>Em 1993-94 os artistas Komar e Melamid usaram institutos de pesquisa profissionais em quatorze países para fazer uma pergunta simples: que tipo de pintura as pessoas realmente querem?</p><p>Os resultados foram quase idênticos em todas as culturas. As pessoas querem paisagens realistas, com água, com figuras humanas, com animais, em cores naturais. A pintura \"América Mais Desejada\" que eles então produziram, pintada a partir dos dados, parece um Hudson River School do século XIX. A pintura \"América Menos Desejada\" parece exatamente a arte contemporânea institucional.</p><p>Repetiram em Rússia, Dinamarca, Quênia, China, Islândia, Turquia, Ucrânia, França, Portugal, Itália, Holanda, Finlândia, Alemanha, Islândia. Resultados praticamente idênticos. Os seres humanos, nas culturas, nos continentes, nas classes, consistentemente preferem o tipo de beleza que a tradição ocidental produziu e consistentemente rejeitam o tipo de arte que o movimento modernista impôs. Se a beleza é ideológica, por que a mesma suposta ideologia é mantida simultaneamente por aldeões quenianos, operários chineses, intelectuais franceses e suburbanos americanos?</p>",
 src_pt: "Komar e Melamid · Painting by Numbers (1997)"
},

{slug:"a-scruton-not-tired", type:"lectio", f:"A", title:"Scruton on What Happened",
 body:`<blockquote>The modernist revolution in the arts was not a response to a public that had grown tired of beauty. It was a revolution imposed on a public by an avant-garde that had decided, for ideological reasons, that beauty was either impossible or undesirable.</blockquote>
<p>You are not wrong to find most contemporary architecture ugly. You are not wrong to be bored by atonal music. You are not wrong to find the gallery incomprehensible. These are not failures of your education. They are failures of their programs. The institution calling your taste reactionary is the party with something to defend.</p>`,
 src:"Roger Scruton; cited in The Uglification of the West, Part I, §X",
 title_pt: "Scruton Sobre o Que Aconteceu",
 body_pt: "<p>A revolução modernista nas artes não foi uma resposta a um público que havia cansado da beleza. Foi uma imposição institucional, por uma elite cultural auto-selecionada, contra as preferências estéticas estáveis e transculturais da humanidade.</p><p>Roger Scruton, nos trinta anos finais de sua vida, foi o maior crítico filosófico vivo deste programa. Ele argumentou que a beleza é real, aponta para algo além de si mesma, e sua destruição deliberada é uma forma específica de barbárie. A tradição artística ocidental, ele argumentou, não era arbitrária, não era patriarcal, não era repressiva. Era o produto de um povo que tomava a beleza a sério.</p><p>Scruton foi tratado pela academia inglesa como um reacionário embaraçoso durante toda a sua carreira. Em 2016 ele foi nomeado cavaleiro. Em 2020 ele morreu. Suas aulas no YouTube, que ele gravou nos últimos anos, estão sendo vistas por milhões de jovens que a academia inglesa falhou em formar.</p>",
 src_pt: "Marcos · da série A Uglificação do Ocidente"
},

{slug:"a-cia-frankfurt-converge", type:"lectio", f:"A", title:"The CIA and the Frankfurt School Were Promoting the Same Art",
 body:`<p>The CIA, through the Congress for Cultural Freedom (1950–1967), covertly funded Abstract Expressionism as a Cold War weapon: proof that American freedom produced richer culture than Soviet Socialist Realism.</p>
<p>The Frankfurt School — Adorno, Benjamin, Marcuse — had been promoting the same aesthetic program since the 1930s, for the opposite ideological reason: beautiful traditional art is false consciousness; the destruction of beauty is revolutionary praxis.</p>
<p>The American intelligence establishment and the Marxist cultural theorists, from opposite ends of the political spectrum, with incompatible goals, converged on the <em>same</em> art. The practical result was unified institutional pressure on Western culture in a direction neither the public nor any democratic institution had chosen.</p>`,
 src:"The Uglification of the West, Part I, §VI",
 title_pt: "A CIA e a Escola de Frankfurt Promoveram a Mesma Arte",
 body_pt: "<p>A CIA, pelo Congresso para a Liberdade Cultural (1950-1967), financiou secretamente o avanço do Expressionismo Abstrato americano globalmente, como arma na Guerra Fria. A exposição é documentada por Frances Stonor Saunders em <em>Who Paid the Piper?</em> (1999), por Peter Coleman em <em>The Liberal Conspiracy</em> (1989), e nas revelações do próprio ex-oficial da CIA Donald Jameson em 1995.</p><p>Simultaneamente, a Escola de Frankfurt, trabalhando a partir da Universidade de Columbia desde os anos 1930, estava desenvolvendo uma teoria estética (Adorno, Marcuse) que condenava a tradição artística ocidental como ideologia burguesa e exigia sua destruição pela arte transgressiva. Um lado era anticomunista institucional. O outro era marxista. Ambos promoviam exatamente a mesma arte. Isso não é coincidência. Ambos reconheciam que a arte modernista era útil para o mesmo propósito: dissolver as formas tradicionais que ancoravam a civilização ocidental.</p>",
 src_pt: "Marcos · pesquisa documentada"
},

{slug:"a-pruitt-igoe", type:"lectio", f:"A", title:"The Death of Modern Architecture",
 body:`<p>Pruitt-Igoe was Le Corbusier's doctrine made concrete, in St. Louis, in 1954–56. Thirty-three eleven-story towers built on his tower-in-the-park model to house the Black working poor. Within a decade it had become uninhabitable — a sink of crime, vandalism, and concentrated misery.</p>
<p>The housing authority dynamited it in three phases between 1972 and 1976. The architectural critic Charles Jencks declared the moment of its demolition — <em>July 15, 1972, 3:32 PM</em> — "the death of modern architecture."</p>
<p>He was too optimistic. The theory that killed Pruitt-Igoe is still taught in architecture schools. Its graduates are still building its successors. The towers are still being funded. The research on what tower blocks do to the human spirit is extensive, consistent, and ignored.</p>`,
 src:"The Uglification of the West, Part I, §VIII",
 title_pt: "A Morte da Arquitetura Moderna",
 body_pt: "<p>Pruitt-Igoe foi a doutrina de Le Corbusier feita de concreto, em St. Louis, em 1954-56. Trinta e três torres idênticas de onze andares em um megabloco de dezoito hectares. Projetado por Minoru Yamasaki (que mais tarde projetaria as Torres Gêmeas). Aclamado por todas as grandes revistas de arquitetura como o futuro da habitação urbana.</p><p>Entre 1954 e 1972, Pruitt-Igoe se tornou um estudo de caso de todo mal urbano: crime violento, vandalismo, desespero, escadas úmidas de urina, elevadores quebrados que paravam apenas em andares pares. Em 15 de março de 1972, às 15h, a cidade de St. Louis dinamitou o primeiro prédio. O vídeo da demolição foi transmitido globalmente. O crítico Charles Jencks declarou que a arquitetura moderna havia morrido naquele exato momento.</p><p>O que havia falhado não eram as pessoas. Era a teoria que insistia que os seres humanos poderiam ser depositados em caixas idênticas longe da rua, longe de laços de vizinhança, longe de qualquer referência à continuidade humana, e florescer. Eles não florescem. Nunca floresceram.</p>",
 src_pt: "Marcos · da série A Uglificação do Ocidente"
},

{slug:"a-shiller-flat-100-years", type:"lectio", f:"A", rare:1, title:"The Chart That Should End the Argument",
 body:`<p>When Robert Shiller prepared the 2005 edition of <em>Irrational Exuberance</em>, he discovered that no long-run home price series existed <em>in any country.</em> He built one with Karl Case using repeat-sales methodology. The result:</p>
<p>Real (inflation-adjusted) U.S. home prices showed <em>virtually no increase from 1890 to the late 1990s.</em> A hundred and ten years of flat. Then, beginning around 1997, prices climbed unprecedentedly, peaked in 2006, and collapsed into the global financial crisis.</p>
<p>Most people assume homes appreciate as a matter of natural law. The data says otherwise: building costs are flat, land is a small component of most home prices, and structures depreciate. There is no fundamental reason for sustained real appreciation. We built a global crisis on a belief that was false by a century of its own measurement.</p>`,
 src:"When Markets Aren't Efficient, §3.1",
 title_pt: "O Gráfico Que Deveria Encerrar a Discussão",
 body_pt: "<p>Quando Robert Shiller preparou a edição de 2005 de <em>Exuberância Irracional</em>, descobriu algo que surpreendeu a maioria dos economistas: ajustados pela inflação, os preços dos imóveis residenciais americanos haviam ficado essencialmente planos por aproximadamente 100 anos (1890-1990). Então começaram a subir. Entre 1997 e 2006, dobraram em termos reais.</p><p>Shiller publicou isso em 2005. Previu publicamente o colapso. Foi em grande parte ignorado. O gráfico é uma das poucas coisas na história econômica onde a evidência era tão clara e o aviso tão explícito que o colapso subsequente é inexcusável. A hipótese do mercado eficiente, aplicada à habitação em 2005, insistia que as pessoas estavam precificando o risco corretamente. Elas não estavam.</p>",
 src_pt: "Robert Shiller · Exuberância Irracional (2005)"
},

{slug:"a-emh-not-useless", type:"lectio", f:"A", title:"EMH: Right Idea, Wrong Deployment",
 body:`<blockquote>The problem is not that EMH is useless. As a benchmark and as a description of short-run information processing in liquid markets, it has real explanatory power. The problem is what happens when policy is built on the assumption that EMH holds in markets where it demonstrably does not.</blockquote>
<p>The deregulatory consensus of 1980–2007 was built largely on the assumption that financial markets were efficient enough to be left alone. The housing market behaved nothing like EMH predicts, and the 2008 crisis erased an estimated <em>$8 trillion</em> in U.S. household wealth. Treating a model as descriptive rather than aspirational has real economic costs.</p>`,
 src:"When Markets Aren't Efficient, §2",
 title_pt: "EMH: Ideia Certa, Aplicação Errada",
 body_pt: "<p>O problema não é que a Hipótese do Mercado Eficiente seja inútil. Como referência e como descrição aproximada de ações líquidas em grandes mercados líquidos, ela é poderosa. O problema é a sua aplicação indiscriminada a mercados que violam suas premissas.</p><p>A EMH exige: muitos participantes informados, baixos custos de transação, informação disponível rapidamente, e participantes capazes de agir sobre a informação de forma independente. Ações da Apple negociadas em Nasdaq cumprem razoavelmente bem essas condições. Casas suburbanas em 2006 não cumpriam quase nenhuma delas.</p><p>Reconhecer isso não é rejeitar a economia moderna. É aplicá-la corretamente. A EMH é uma ferramenta. Como toda ferramenta, tem domínio de aplicação. Fora desse domínio, usá-la como se fosse universal produz desastres.</p>",
 src_pt: "Marcos · EMH e Finanças Comportamentais"
},

{slug:"a-housing-structural-failures", type:"lectio", f:"A", title:"Why Housing Fails EMH, Structurally",
 body:`<p>Housing is uniquely vulnerable to behavioral failure for structural reasons:</p>
<p><strong>No short selling.</strong> In stocks, skeptics can short overvalued securities and push prices toward fundamentals. In housing, no such mechanism exists. Pessimists can only refrain from buying.</p>
<p><strong>Infrequent transactions.</strong> Most households buy a home a few times in their lives. They cannot develop expertise through repetition.</p>
<p><strong>No long-term data in public discourse.</strong> Newspapers do not publish century-long price series. Buyers see recent appreciation and assume it is normal.</p>
<p>Combine these with the universal cognitive biases — wishful thinking, extrapolation, narrative contagion — and you get precisely the kind of bubble-and-crash cycle EMH says cannot happen.</p>`,
 src:"When Markets Aren't Efficient, §4",
 title_pt: "Por Que a Habitação Falha a EMH Estruturalmente",
 body_pt: "<p>A habitação é unicamente vulnerável à falha comportamental por razões estruturais:</p><p>Não há vendas a descoberto possíveis. Em ações, se você acha que algo está sobrevalorizado, pode apostar contra. Em casas, não pode. Então pessimistas são excluídos do mecanismo de precificação. Só otimistas e neutros votam.</p><p>Alavancagem é extrema. Uma casa comprada com 10% de entrada e 90% de financiamento é uma aposta alavancada de 10 para 1. Pequenos movimentos de preço aniquilam patrimônio.</p><p>Transações são raras. Uma pessoa compra ou vende uma casa talvez cinco vezes na vida. Sem feedback contínuo, não há aprendizado. Erros se compõem através de gerações.</p><p>Memória institucional é curta. Em 2006, poucos corretores em atividade haviam vivido o colapso de habitação dos anos 1990. Nenhum havia vivido 1932. A \"habitação sempre sobe\" era crença honesta, baseada em experiência pessoal insuficiente.</p>",
 src_pt: "Marcos · EMH e Finanças Comportamentais"
},

{slug:"a-shiller-humans-big-mistakes", type:"sententia", f:"A",
 body:{latin:"Humans make big mistakes.", english:"Millions of people are all thinking the same thing. — Robert Shiller"},
 body_pt: {latin:"Humanos cometem grandes erros.",english:"Milhões de pessoas estão pensando a mesma coisa. — Robert Shiller"},
 src_pt: "Robert Shiller · sobre as bolhas"
},

{slug:"a-the-right-standard-meta", type:"lectio", f:"A", title:"The Right Standard — for any argument",
 body:`<p>What should you aim for, when making an argument you expect serious opponents to attack?</p>
<p>Not that no reasonable person can deny the conclusion. Few interesting arguments achieve that standard. Not that your rhetoric is irresistible. Rhetoric is irresistible only to the already-persuaded.</p>
<p>Aim for this: that the person who denies the conclusion must, by denying it, accept a specific, identifiable, and substantial metaphysical, empirical, or practical commitment. Convert the refusal from a free move into a priced one. Make the ledger visible.</p>
<p>By that standard, most of what passes for philosophical rebuttal is actually just the refusal to be billed.</p>`,
 src:"after the preface and §8 of The Argument from Derivative Existence",
 title_pt: "O Padrão Correto · para qualquer argumento",
 body_pt: "<p>Qual deve ser o alvo, quando se faz um argumento que se espera que oponentes sérios tentem derrubar?</p><p>Não a invencibilidade. Nenhum argumento humano é invencível. Alguém sempre pode mudar o jogo, desafiar premissas, insistir em alternativas desconhecidas. O alvo mais inteligente é o <strong>deslocamento do custo</strong>: fazer com que a posição do oponente carregue mais peso explicativo do que a sua.</p><p>Honestidade intelectual sob pressão é o único requisito. Dê o seu melhor caso, de forma transparente. Reconheça fraquezas honestamente. Nomeie as alternativas. Deixe o oponente livre para escolher qualquer uma, mas tenha mostrado o que cada uma custa.</p><p>Então o debate não é mais sobre quem venceu a retórica. É sobre qual lado está pagando um preço explicativo menor pela verdade compartilhada. Esse é o padrão apropriado para qualquer argumento sério.</p>",
 src_pt: "Marcos · nota metodológica"
},

{slug:"a-honest-remainder", type:"lectio", f:"A", title:"The Honest Remainder",
 body:`<p>A rhetorical habit worth stealing: at the end of each defense, write out the <em>honest remainder</em> — the price your position still owes, the reasonable objection you have not fully answered, the move the opponent still has.</p>
<p>Three things happen. (1) You stop overstating. (2) Smart opponents stop looking for the hidden weakness because you've already pointed to it. (3) You keep the respect of readers who were not going to be fooled anyway.</p>
<p>The confidence-language that fills most polemic — "fails," "decisive," "the answer is" — buys apparent strength at the cost of real credibility. State what the argument gives. State what it does not give. Then stop.</p>`,
 src:"method, after The Argument from Derivative Existence",
 title_pt: "O Resto Honesto",
 body_pt: "<p>Um hábito retórico que vale copiar: no fim de cada defesa, escreva o resto honesto. O que a sua posição ainda não explica. Onde ela parece forçada. Que fato o incomodaria se o oponente o apresentasse.</p><p>Isso faz três coisas. Primeiro, impede que você mesmo acredite demais na sua posição. Segundo, desarma o oponente, que esperava que você negasse esses pontos. Terceiro, demonstra o que o oponente não demonstra: que você é um pensador antes de ser um defensor.</p><p>Nenhuma posição é totalmente limpa. A honesta inclui no próprio argumento o que a torna um pouco suja. É mais convincente do que a limpa, porque é mais real.</p>",
 src_pt: "Marcos · nota metodológica"
},

{slug:"a-every-tradition-great", type:"lectio", f:"A", title:"What Was Lost — The List",
 body:`<p>Any account of the Western artistic tradition that does not pause to name what it produced treats it as an abstraction. The list is partial, but the magnitude it conveys is not negotiable:</p>
<p>The Parthenon. The Pantheon's unreinforced concrete dome. The mosaics of Ravenna. The rose window of Chartres. Giotto's Arena Chapel. Brunelleschi's dome. Donatello's David. Leonardo's Last Supper. Michelangelo's Pietà and Sistine ceiling. Raphael's School of Athens. Palestrina's Missa Papae Marcelli. Shakespeare's complete works. Monteverdi's Orfeo. Vermeer's Girl with a Pearl Earring. Bach's Well-Tempered Clavier and Mass in B Minor. Mozart's Don Giovanni and Requiem. Beethoven's Ninth. Schubert's Winterreise. Brahms's symphonies. Constable's Hay Wain. Turner's late seascapes.</p>
<p>This is what the twentieth-century avant-garde announced was dead, bourgeois, oppressive, and ready for replacement. The question of this essay is: who told it that, why, and by what mechanisms was the replacement enforced?</p>`,
 src:"The Uglification of the West, Part I, §I",
 title_pt: "O Que Foi Perdido · A Lista",
 body_pt: "<p>Qualquer narrativa da tradição artística ocidental que não pare para nomear o que ela produziu é desonesta. A lista é longa. É curta aqui.</p><p>A catedral gótica (Chartres, Reims, Notre-Dame, Colônia). O ciclo de afrescos (Giotto em Pádua, Michelangelo na Sistina, Rafael nas Stanzas Vaticanas). A pintura veneziana (Ticiano, Tintoretto, Veronese). O retábulo flamengo (van Eyck, Memling). O Barroco (Caravaggio, Rubens, Bernini, Zurbarán). A tradição musical (canto gregoriano, Palestrina, Bach, Mozart, Haydn, Beethoven, Bruckner, Fauré). A tradição romanesca (Dante, Chaucer, Cervantes, Milton, Dostoiévski, Manzoni, Flannery O'Connor). A tradição filosófica (Agostinho, Boécio, Anselmo, Tomás, Scotus, Cusa, Pascal, Newman, Chesterton, Péguy, Scruton).</p><p>Isto foi construído por povos que acreditavam que a beleza era real, apontava além de si mesma, e serví-la era uma vocação. Foi substituído pela convicção oposta. A substituição está documentada em dados. Está documentada em prédios. Está documentada em preços de ingresso. Está documentada em números de visitantes. Não é opinião. É inventário.</p>",
 src_pt: "Marcos · da série A Uglificação do Ocidente"
},

// ============== NEW ARSENAL — from the newly-read essays ==============

{slug:"a-beauvoir-tell", type:"lectio", f:"A", rare:1, title:"The Tell",
 body:`<p>The most notorious of Beauvoir's statements does not appear in <em>The Second Sex</em> at all but in her 1975 interview with Betty Friedan. Asked whether women should have the choice to stay home and raise children, she answered:</p>
<blockquote>"No woman should be authorized to stay at home to raise her children. Society should be totally different. Women should not have that choice, precisely because if there is such a choice, too many women will make that one."</blockquote>
<p>This is not a statement about opportunities. It is a statement about coercion. It concedes, openly, that the woman's attraction to the maternal life is powerful enough that a free society will produce many mothers, and it concludes, without embarrassment, that the free society must therefore be replaced with an unfree one. The mask slips at exactly the right sentence. The whole edifice presumes that the sexed body's pull toward its own nature is so strong that the theory can be defended only by force.</p>`,
 src:"The Long War on the Woman, Part Four",
 title_pt: "A Revelação",
 body_pt: "<p>A declaração mais notória de Beauvoir não está em <em>O Segundo Sexo</em>, mas em sua entrevista de 1975 com Betty Friedan. Perguntada se as mulheres deveriam ter a opção de ficar em casa criando filhos, ela respondeu:</p><blockquote>Nenhuma mulher deveria ser autorizada a ficar em casa para criar seus filhos. A sociedade deveria ser totalmente diferente. As mulheres não deveriam ter essa escolha, precisamente porque, se existir tal escolha, muitas mulheres farão essa escolha.</blockquote><p>Isto não é declaração sobre oportunidades. É declaração sobre coerção. Concede, abertamente, que a atração da mulher pela vida materna é poderosa o suficiente para que uma sociedade livre produza muitas mães, e conclui, sem constrangimento, que a sociedade livre deve portanto ser substituída por uma não-livre que remova a opção. A máscara cai exatamente na frase certa. Todo o edifício, de Beauvoir em diante, pressupõe que a atração do corpo sexuado em direção à sua própria natureza é tão forte que a teoria só pode ser defendida pela força.</p>",
 src_pt: "A Longa Guerra Contra a Mulher, Parte Quatro"
},

{slug:"a-steering-wheel", type:"lectio", f:"A", rare:1, title:"The Steering Wheel",
 body:`<p>If two people are driving the same car, and they each have a steering wheel, a brake pedal, and a gas pedal, what is going to happen? They are going to crash.</p>
<p>Somebody has to be the steering wheel. The person who designed the car — in this case, God — did not designate one driver to oppress the other. He designated one driver because the function of the car requires it. The destination is the point.</p>
<p>The husband is the steering wheel. The wife is in the passenger seat, fully present, fully active — noticing what the driver cannot notice, providing what the driver needs, raising what the driver missed. They are both indispensable. They are both directed toward the same destination. Without the order, they crash. With the order, they arrive.</p>`,
 src:"The Demolition — Part Three, the master move",
 title_pt: "O Volante",
 body_pt: "<p>Se duas pessoas estão dirigindo o mesmo carro, e cada uma tem um volante, um pedal de freio e um acelerador, o que vai acontecer? Vão bater.</p><p>Alguém tem que ser o volante. A pessoa que projetou o carro, neste caso Deus, não designou um motorista para oprimir o outro. Designou um motorista porque a função do carro exige. O destino é o ponto.</p><p>O marido é o volante. A esposa está no banco do passageiro, totalmente presente, totalmente ativa, notando o que o motorista não nota, oferecendo o que o motorista precisa, apontando o que ele perdeu. Ambos são indispensáveis. Ambos são direcionados ao mesmo destino. Sem a ordem, batem. Com a ordem, chegam.</p>",
 src_pt: "A Demolição, Parte Três · o movimento central"
},

{slug:"a-reimer-case", type:"lectio", f:"A", title:"The Case That Was in Every Textbook",
 body:`<p>John Money's theory of psychosexual neutrality needed a test. The test arrived in 1966, in the person of a twenty-two-month-old Canadian boy named Bruce Reimer, whose penis had been destroyed in a botched circumcision. Money persuaded the boy's parents to raise Bruce as a girl — castrate him, give him a female name (Brenda), withhold the truth, and reinforce the female identity through the developmental years.</p>
<p>Money published the case for twenty-five years as a triumph. Every psychology textbook reproduced it as proof of the plasticity of gender.</p>
<p>It was false, and Money knew it. The child rejected the female identity from the start, was told the truth at fourteen, immediately reverted to his male identity, took the name David, and killed himself in 2004. His twin brother Brian, whose own deterioration Money never acknowledged, killed himself in 2002. The theory on which the modern transgender apparatus rests was founded on a case its own author knew to be a catastrophic falsification of the theory it was published to prove.</p>`,
 src:"The Manufactured Sex, Part Three",
 title_pt: "O Caso Que Estava em Todo Livro Didático",
 body_pt: "<p>A teoria de John Money sobre neutralidade psicossexual precisava de um teste. O teste chegou em 1966, na pessoa de um menino canadense de vinte e dois meses chamado Bruce Reimer, cujo pênis fora destruído numa circuncisão malfeita. Money convenceu os pais a criar Bruce como menina, castrá-lo, dar-lhe nome feminino (Brenda), esconder a verdade e reforçar a identidade feminina ao longo da infância.</p><p>Money publicou o caso por vinte e cinco anos como triunfo. Todo livro didático de psicologia reproduziu como prova da plasticidade do gênero.</p><p>Era falso, e Money sabia. A criança rejeitou a identidade feminina desde o início, foi informada da verdade aos quatorze, imediatamente retomou sua identidade masculina, assumiu o nome David, e se matou em 2004. O irmão gêmeo Brian, cuja própria deterioração Money nunca reconheceu, se matou em 2002. A teoria sobre a qual o moderno aparato transgênero descansa foi fundada em um caso que seu próprio autor sabia ser uma falsificação catastrófica da teoria que foi publicada para provar.</p>",
 src_pt: "O Sexo Fabricado, Parte Três"
},

{slug:"a-the-table", type:"lectio", f:"A", rare:1, title:"The Table",
 body:`<p>Twelve questions — the twelve questions that actually define what a political order is — and on every one of them, Marxism and fascism give the same answer.</p>
<p><strong>The individual.</strong> No prior existence. Serves the collective. Both. <strong>The family.</strong> Bourgeois institution; children belong to the state. Both. <strong>The Church.</strong> Enemy. Both. <strong>The economy.</strong> State-controlled. Both. <strong>The party.</strong> One party; rivals banned. Both. <strong>Opponents.</strong> Imprisoned or killed. Both. <strong>Secret police.</strong> Yes. Both. <strong>The press.</strong> Instrument of the state. Both. <strong>The leader.</strong> Cult. Both. <strong>The goal.</strong> Transformation of human nature. Both. <strong>The method.</strong> Mass killing. Both.</p>
<p>They are not opposites. They are the same answer to the same question, recited in two accents. The left-right line was drawn after 1945 by the surviving twin to launder its inheritance onto the conservative order that had been fascism's enemy and victim.</p>`,
 src:"The Forbidden Symmetry, Part Two",
 title_pt: "A Tabela",
 body_pt: "<p>Doze perguntas, as doze que de fato definem o que é uma ordem política, e em cada uma delas, marxismo e fascismo dão a mesma resposta.</p><p><strong>O indivíduo.</strong> Sem existência prévia. Serve ao coletivo. Os dois. <strong>A família.</strong> Instituição burguesa; crianças pertencem ao Estado. Os dois. <strong>A Igreja.</strong> Inimiga. Os dois. <strong>A economia.</strong> Controlada pelo Estado. Os dois. <strong>O partido.</strong> Um partido; rivais banidos. Os dois. <strong>Opositores.</strong> Presos ou mortos. Os dois. <strong>Polícia secreta.</strong> Sim. Os dois. <strong>A imprensa.</strong> Instrumento do Estado. Os dois. <strong>O líder.</strong> Culto. Os dois. <strong>O objetivo.</strong> Transformação da natureza humana. Os dois. <strong>O método.</strong> Matança em massa. Os dois.</p><p>Não são opostos. São a mesma resposta à mesma pergunta, recitada em dois sotaques. A linha esquerda-direita foi desenhada depois de 1945 pelo gêmeo sobrevivente para lavar a herança para a ordem conservadora que havia sido inimiga e vítima do fascismo.</p>",
 src_pt: "A Simetria Proibida, Parte Dois"
},

{slug:"a-cass-review", type:"lectio", f:"A", title:"The Verdict Already Rendered",
 body:`<p>This is the development most Americans have not heard about, because the American press has been substantially silent on it.</p>
<p>Between 2020 and 2024, the national health services of Sweden, Finland, Norway, and the United Kingdom commissioned systematic reviews of the entire evidence base for pediatric gender medicine. Every one of those reviews reached the same conclusion.</p>
<p>The Cass Review, the largest ever conducted, found that the evidence for puberty blockers and cross-sex hormones in adolescents is of very low quality; that the claimed mental health benefits are not supported by the studies used to justify the interventions; that the practice had strayed far from the standards required of any other pediatric medicine. The NHS ended routine provision of puberty blockers to minors. Sweden, Finland, Norway followed.</p>
<p>This is not a conservative finding. It is the verdict of the state medical establishments of the most progressive nations on earth.</p>`,
 src:"The Manufactured Sex, Part Six · Cass Review (NHS England, April 2024)",
 title_pt: "O Veredito Já Dado",
 body_pt: "<p>Este é o desenvolvimento sobre o qual a maioria dos americanos não ouviu, porque a imprensa americana está substancialmente silenciosa.</p><p>Entre 2020 e 2024, os serviços nacionais de saúde da Suécia, Finlândia, Noruega e Reino Unido encomendaram revisões sistemáticas de toda a base de evidência da medicina de gênero pediátrica. Cada uma dessas revisões chegou à mesma conclusão.</p><p>A Revisão Cass, a maior já conduzida, descobriu que a evidência para bloqueadores de puberdade e hormônios cruzados em adolescentes é de qualidade muito baixa; que os supostos benefícios para a saúde mental não são apoiados pelos estudos usados para justificar as intervenções; que a prática se afastou dos padrões exigidos de qualquer outra medicina pediátrica. O NHS encerrou o fornecimento rotineiro de bloqueadores de puberdade para menores. Suécia, Finlândia, Noruega seguiram.</p><p>Isto não é um achado conservador. É o veredito das instituições médicas estatais das nações mais progressistas da Terra.</p>",
 src_pt: "O Sexo Fabricado, Parte Seis · Revisão Cass (NHS Inglaterra, abril de 2024)"
},

{slug:"a-twitter-files", type:"lectio", f:"A", title:"The System Documented",
 body:`<p>The Twitter Files — released December 2022 and reported by Taibbi, Weiss, Shellenberger — demolished the claim that platform content moderation is neutral.</p>
<p>Twitter maintained <em>visibility filtering</em> — the suppression of specific accounts' reach without notifying them — applied disproportionately to conservative accounts. The moderation of the Hunter Biden laptop story was executed within hours of the Post's publication, before any fact-checking.</p>
<p>And this is the part that matters: the FBI had a standing relationship with Twitter's Trust and Safety team through which it regularly flagged accounts for action. A relationship that operated as a government speech censorship mechanism laundered through a private company's content moderation.</p>
<p>The First Amendment prohibits the government from restricting speech. The FBI's practice of flagging accounts to Twitter for suppression circumvents that prohibition technically while defeating it practically. The government cannot silence a speaker. But it can tell a private company that the speaker is a threat, and the private company can silence them.</p>`,
 src:"The Manufacturing of Reality, §IV",
 title_pt: "O Sistema Documentado",
 body_pt: "<p>Os Twitter Files, divulgados em dezembro de 2022 e reportados por Taibbi, Weiss, Shellenberger, demoliram a alegação de que a moderação de conteúdo de plataforma é neutra.</p><p>O Twitter mantinha <em>filtragem de visibilidade</em>, a supressão do alcance de contas específicas sem notificação, aplicada desproporcionalmente a contas conservadoras. A moderação da história do laptop de Hunter Biden foi executada dentro de horas da publicação pelo Post, antes de qualquer verificação de fatos.</p><p>E esta é a parte que importa: o FBI tinha um relacionamento permanente com a equipe de Confiança e Segurança do Twitter através do qual regularmente sinalizava contas para ação. Um relacionamento que operava como um mecanismo de censura de fala governamental lavada através do processo de moderação de conteúdo de uma empresa privada.</p><p>A Primeira Emenda proíbe o governo de restringir a fala. A prática do FBI de sinalizar contas ao Twitter para supressão contorna essa proibição tecnicamente ao mesmo tempo em que a derrota na prática. O governo não pode silenciar um falante. Mas pode dizer a uma empresa privada que o falante é uma ameaça, e a empresa privada pode silenciá-lo.</p>",
 src_pt: "A Fabricação da Realidade, §IV"
},

{slug:"a-nobel-forty", type:"lectio", f:"A", title:"Forty Percent",
 body:`<p>The Nobel Prize is awarded by a Swedish institution with no national interest in favoring the United States. Its consistent verdict, repeated across more than a century, is this:</p>
<p>The United States has won approximately <strong>418 Nobel Prizes</strong> — roughly <strong>40 percent of every prize ever awarded</strong>. In economics specifically, 58 of 93 total laureates — 62 percent of every economics Nobel in history — were American.</p>
<p>The nearest competitor (UK) has approximately 140 total, less than one-third. Germany has 115, less than 28 percent.</p>
<p>This is a figure that should halt the "middle-tier" argument in its tracks. The country that ranks 34th on a math assessment for 15-year-olds also produces 40 percent of global Nobel laureates and houses 7 of the world's 10 most valuable companies. Any analytical framework that treats the former as the more informative metric has its priorities precisely inverted.</p>`,
 src:"American Primacy, §III",
 title_pt: "Quarenta Por Cento",
 body_pt: "<p>O Prêmio Nobel é concedido por uma instituição sueca sem interesse nacional em favorecer os Estados Unidos. Seu veredito consistente, repetido por mais de um século, é este:</p><p>Os Estados Unidos ganharam aproximadamente <strong>418 Prêmios Nobel</strong>, cerca de <strong>40 por cento de todo prêmio já concedido</strong>. Em economia especificamente, 58 de 93 laureados, 62 por cento de todo Nobel de economia da história, foram americanos.</p><p>O concorrente mais próximo (Reino Unido) tem aproximadamente 140 no total, menos de um terço. A Alemanha tem 115, menos de 28 por cento.</p><p>Esta é uma figura que deveria interromper o argumento do \"nível intermediário\" em seu caminho. O país que fica em 34º lugar em uma avaliação de matemática para jovens de 15 anos também produz 40 por cento dos laureados globais do Nobel e abriga 7 das 10 empresas mais valiosas do mundo. Qualquer estrutura analítica que trate a primeira como a métrica mais informativa tem suas prioridades precisamente invertidas.</p>",
 src_pt: "Primazia Americana, §III"
},

{slug:"a-sentent-chesterton", type:"sententia", f:"A", rare:1,
 body:{latin:"Qui Deo non credunt, non nihil credunt — sed quodvis credere possunt.",
       english:"When men choose not to believe in God, they do not thereafter believe in nothing — they then become capable of believing in anything."},
 src:"G.K. Chesterton — the sociological prediction the 20th century confirmed at 100 million lives",
 body_pt: {latin:"Qui Deo non credunt, non nihil credunt — sed quodvis credere possunt.",english:"Quando os homens escolhem não crer em Deus, não passam a crer em nada; passam a ser capazes de crer em qualquer coisa."},
 src_pt: "G.K. Chesterton · a previsão sociológica que o século XX confirmou ao custo de 100 milhões de vidas"
},

{slug:"a-subsidiarity", type:"lectio", f:"A", title:"Subsidiarity",
 body:`<p>Against the centralizing engine, the Catholic social tradition sets a precise principle, given its sharpest statement by Pius XI in 1931:</p>
<blockquote>It is a grave injustice to assign to a larger and higher association what a smaller and lower one can do for itself.</blockquote>
<p>Do nothing at a higher level that can be done at a lower one. The family, the parish, the town, the guild, the province each has its own proper authority, and the state's role is to <em>help</em> these lesser communities flourish — <em>subsidium</em> means "help" — not to absorb their functions into itself.</p>
<p>Subsidiarity is the exact inverse of Jouvenel's centralizing Power: it defends the intermediate bodies as the load-bearing walls of a free and human society. A healthy order is not one lone individual under one vast state, but a living hierarchy of smaller wholes, each doing what it is fitted to do. Centralization, by this light, is not efficiency. It is disorder — the hollowing-out of the body politic into a head and a heap.</p>`,
 src:"The Theater and the Engine · Pius XI, Quadragesimo Anno §79 (1931)",
 title_pt: "Subsidiariedade",
 body_pt: "<p>Contra o motor centralizador, a tradição social católica estabelece um princípio preciso, dado em sua formulação mais afiada por Pio XI em 1931:</p><blockquote>É uma injustiça grave atribuir a uma associação maior e mais alta o que uma menor e mais baixa pode fazer por si mesma.</blockquote><p>Não faça nada em um nível mais alto que possa ser feito em um nível mais baixo. A família, a paróquia, a cidade, a corporação, a província têm cada uma sua própria autoridade adequada, e o papel do Estado é <em>ajudar</em> essas comunidades menores a florescer, <em>subsidium</em> significa \"ajuda\", não absorver suas funções em si mesmo.</p><p>Subsidiariedade é o inverso exato do Poder centralizador de Jouvenel: defende os corpos intermediários como as paredes de sustentação de uma sociedade livre e humana. Uma ordem saudável não é um indivíduo solitário sob um vasto Estado, mas uma hierarquia viva de totalidades menores, cada uma fazendo o que é apropriada para fazer. Centralização, por esta luz, não é eficiência. É desordem, o esvaziamento do corpo político em cabeça e amontoado.</p>",
 src_pt: "O Teatro e o Motor · Pio XI, Quadragesimo Anno §79 (1931)"
},

{slug:"a-daily-dress", type:"lectio", f:"A", title:"The Most Immediately Available Counter-Revolution",
 body:`<p>Dressing well is the most immediately available, most personally accessible, most daily counter-revolutionary act available to any person. It does not require an institution. It does not require a movement. It does not require anyone else's cooperation.</p>
<p>It requires only the decision, made every morning when you open your wardrobe, about what kind of person you are going to be in public — and what the people you encounter are worth to you.</p>
<p>A jacket rather than a hoodie communicates that you are a person who takes the public world seriously. A tie rather than an open collar communicates that the occasion is worth a visible effort. The man who wears a jacket to Mass is making a statement about what the Eucharist is worth. The family that puts on their best clothes for a funeral is making a statement about what death and grief and the community of mourning are worth.</p>
<p>Each is a small act. Cumulatively, they are the visible fabric of civilization — the "decent drapery of life" that Burke warned against tearing off. Put it back on.</p>`,
 src:"The Unraveling, Part XI",
 title_pt: "A Contrarrevolução Mais Imediatamente Disponível",
 body_pt: "<p>Vestir-se bem é o ato contrarrevolucionário mais imediatamente disponível, mais pessoalmente acessível, mais diário disponível a qualquer pessoa. Não exige uma instituição. Não exige um movimento. Não exige cooperação de ninguém.</p><p>Exige apenas a decisão, feita todas as manhãs quando você abre o guarda-roupa, sobre que tipo de pessoa você vai ser em público, e quanto as pessoas que você vai encontrar valem para você.</p><p>Um blazer em vez de um moletom comunica que você é uma pessoa que leva o mundo público a sério. Uma gravata em vez de uma camisa aberta comunica que a ocasião merece esforço visível. O homem que usa blazer na Missa está fazendo uma declaração sobre o que a Eucaristia vale. A família que coloca a melhor roupa para o funeral está fazendo uma declaração sobre o que a morte, o luto e a comunidade do pranto valem.</p><p>Cada um é um ato pequeno. Cumulativamente, são o tecido visível da civilização, a \"decoração decente da vida\" que Burke avisou contra arrancar. Coloque-a de volta.</p>",
 src_pt: "O Desfiar, Parte XI"
},

{slug:"a-poll-productive-shorts", type:"suffragium", f:"A",
 title:"Was it a program?",
 body:`<p>You've now read a run of my own writing. The thesis cuts across my essays: the collapse of beauty, the capture of institutions, the erosion of charity, the housing bubble — I argue these were not organic cultural evolutions but <em>deliberate programs</em>, documented in the perpetrators' own words. What's your read?</p>`,
 opts:["Yes, almost all of it. The programs were explicit and I just hadn't been shown.","Partly. Some of what you call program is just drift, bias, or market failure.","No. You're imposing agency on diffuse processes."],
 title_pt: "Foi um programa?",
 body_pt: "<p>Você acaba de ler uma sequência da minha própria escrita. A tese atravessa meus ensaios: o colapso da beleza, a captura das instituições, a erosão da caridade, a bolha habitacional, argumento que não foram evoluções culturais orgânicas mas <em>programas deliberados</em>, documentados nas palavras dos próprios perpetradores. Qual é a sua leitura?</p>",
 opts_pt: ["Sim, quase tudo. Os programas eram explícitos e eu só não havia sido mostrado.",
   "Em parte. Alguma coisa que você chama de programa é apenas deriva, viés ou falha de mercado.",
   "Não. Você está impondo agência sobre processos difusos."]
},

// =============== MORE NEGOTIUM — Finance / Operators / Decision ===============

{slug:"n-munger-latticework", type:"lectio", f:"N", title:"The Latticework",
 body:`<p>Munger's actual investing method, which he describes more than his famous one-liners: build a <em>latticework</em> of mental models drawn from every major discipline, and hang the facts of the business on it.</p>
<p>Not just finance. <strong>Psychology</strong> (incentive-caused bias, social proof, authority). <strong>Biology</strong> (natural selection as competitive dynamic). <strong>Thermodynamics</strong> (entropy, systems). <strong>Mathematics</strong> (compounding, permutations, probability). <strong>Microeconomics</strong> (scale, moats).</p>
<p>Most investors fail not because they lack information but because they have the same three models the rest of the market has. The lattice is the differentiator. Build it in your twenties.</p>`,
 src:"after Charlie Munger, Poor Charlie's Almanack",
 title_pt: "A Treliça",
 body_pt: "<p>O método de investimento real de Munger, que ele descreve mais do que seus famosos aforismos: construa uma <em>treliça</em> de modelos mentais tirados de todas as disciplinas principais, e pendure os fatos do negócio nela.</p><p>Não só finanças. <strong>Psicologia</strong> (viés induzido por incentivo, prova social, autoridade). <strong>Biologia</strong> (seleção natural como dinâmica competitiva). <strong>Termodinâmica</strong> (entropia, sistemas). <strong>Matemática</strong> (composição, permutações, probabilidade). <strong>Microeconomia</strong> (escala, fossos).</p><p>A maioria dos investidores falha não porque faltam informação, mas porque tem os mesmos três modelos que o resto do mercado tem. A treliça é o diferencial. Construa-a nos seus vinte anos.</p>",
 src_pt: "após Charlie Munger, Poor Charlie's Almanack"
},

{slug:"n-porter-five-forces", type:"lectio", f:"N", title:"Porter's Five Forces, Compressed",
 body:`<p>Michael Porter's one great idea: an industry's long-run profitability is set by five forces, not by how fast it's growing.</p>
<p><strong>Rivalry</strong> among existing competitors. <strong>New entrants</strong> able to enter. <strong>Substitutes</strong> buyers can switch to. <strong>Buyer power</strong> (concentration, switching costs). <strong>Supplier power</strong> (critical inputs, few suppliers).</p>
<p>When all five are weak — think Google in search, Intuit in SMB tax, Visa in payments — margins are extraordinary and stable. When any one is strong, margins collapse to the cost of capital. Growth is irrelevant; airlines grew for fifty years with cumulative losses.</p>
<p>Before investing, before founding, ask the five. Then ask which one you'd most need to be wrong about.</p>`,
 src:"after Michael Porter, Competitive Strategy (1980)",
 title_pt: "As Cinco Forças de Porter, Compactadas",
 body_pt: "<p>A única grande ideia de Michael Porter: a lucratividade de longo prazo de uma indústria é definida por cinco forças, não por quão rápido ela cresce.</p><p><strong>Rivalidade</strong> entre competidores existentes. <strong>Novos entrantes</strong> capazes de entrar. <strong>Substitutos</strong> aos quais os compradores podem migrar. <strong>Poder do comprador</strong> (concentração, custos de troca). <strong>Poder do fornecedor</strong> (insumos críticos, poucos fornecedores).</p><p>Quando as cinco são fracas (pense Google em busca, Intuit em imposto de PME, Visa em pagamentos), as margens são extraordinárias e estáveis. Quando qualquer uma é forte, as margens colapsam ao custo de capital. Crescimento é irrelevante; aéreas cresceram cinquenta anos com perdas cumulativas.</p><p>Antes de investir, antes de fundar, pergunte às cinco. Depois pergunte sobre qual delas você mais precisaria estar errado.</p>",
 src_pt: "após Michael Porter, Estratégia Competitiva (1980)"
},

{slug:"n-q-moat-type", type:"quaestio", f:"N",
 title:"What Kind of Moat?",
 body:`<p>A company has 40% gross margins, grows 15% annually, and has held market share for a decade. Buffett asks: <em>what kind of moat?</em> If you can't name the specific moat type, you don't know what you own.</p>`,
 opts:["Brand loyalty","Network effects","Switching costs","Economies of scale","You should be able to say which — and if you can't, you don't actually understand the business"],
 correct:4,
 reveal:`<p>The point of the question isn't to pick one. It's that <em>a durable 40% gross margin with 15% growth is a textbook case of a moat</em>, and if you're invested without knowing which structural force protects those margins, you can't tell when it's eroding.</p>
<p>The five main moat types: <strong>intangibles</strong> (brand, patents, regulatory licenses); <strong>switching costs</strong> (hard or expensive to leave); <strong>network effects</strong> (value scales with users); <strong>cost advantage</strong> (structural, not temporary); <strong>efficient scale</strong> (market only supports one or two players). Name the moat before you buy the stock.</p>`,
 src:"Buffett + Pat Dorsey, The Little Book That Builds Wealth",
 title_pt: "Que Tipo de Fosso?",
 body_pt: "<p>Uma empresa tem 40% de margem bruta, cresce 15% ao ano e manteve participação de mercado por uma década. Buffett pergunta: <em>que tipo de fosso?</em> Se você não consegue nomear o tipo específico de fosso, você não sabe o que possui.</p>",
 opts_pt: ["Lealdade de marca","Efeitos de rede","Custos de troca","Economias de escala","Você deveria ser capaz de dizer qual, e se não consegue, não entende de fato o negócio"]
},

{slug:"n-sowell-trade-offs", type:"lectio", f:"N", title:"There Are No Solutions",
 body:`<blockquote>There are no solutions. There are only trade-offs.</blockquote>
<p>Sowell's compressed economics in a sentence. Any policy, any strategic choice, any resource allocation — framed as a <em>solution</em> instead of a trade-off, hides its costs. The costs don't disappear; they migrate.</p>
<p>Minimum wage laws don't solve low wages; they trade higher pay for some against unemployment for others. Rent control doesn't solve housing; it trades below-market rent for existing tenants against housing scarcity for everyone else. Diversification doesn't solve risk; it trades upside for downside protection.</p>
<p>The right question is never "does it work?" It's "what does it cost, and who pays?"</p>`,
 src:"after Thomas Sowell",
 body_pt: {latin:"Nulla sunt sine damno remedia.",english:"Não existem soluções. Só existem trocas. — Thomas Sowell"},
 src_pt: "Thomas Sowell · a frase que condensa Basic Economics"
},

{slug:"n-kelly-criterion", type:"lectio", f:"N", title:"How Much to Bet",
 body:`<p>You have a positive-expected-value bet. How much of your capital should you put on it?</p>
<p>The Kelly criterion gives the mathematically optimal fraction: <strong>f = (bp − q) / b</strong>, where b is the net odds, p is probability of winning, q is probability of losing. For a 2:1 payoff bet at 60% probability, you bet 40% of bankroll.</p>
<p>Nobody except a few professional gamblers and the occasional hedge fund actually bets full Kelly. Why? Because Kelly maximizes <em>geometric growth</em> given <em>known</em> probabilities. Your probability estimates have errors. Full Kelly is wildly volatile. Most practitioners bet <em>half-Kelly</em> or <em>quarter-Kelly</em> — accepting slower growth for much lower variance and robustness to being wrong about p.</p>
<p>Buffett sizes positions this way, roughly. He has never said so. He doesn't need to.</p>`,
 src:"John Kelly (1956); applied by Thorp, Buffett, et al.",
 title_pt: "Quanto Apostar",
 body_pt: "<p>Você tem uma aposta com valor esperado positivo. Qual fração do seu capital deve apostar?</p><p>A fórmula de Kelly: f = (bp - q) / b, onde p é probabilidade de ganhar, q é probabilidade de perder (1-p), e b é a razão de retorno (quanto você ganha se vencer, dividido por quanto você perde se perder).</p><p>Para uma aposta de \"cara ou coroa\" justa onde você ganha 2x se vencer, p=0.5, q=0.5, b=2. Kelly = (2*0.5 - 0.5) / 2 = 0.25. Aposte 25% do capital.</p><p>Por que importa: apostar mais do que Kelly leva à ruína eventual, mesmo com aposta de valor esperado positivo. Apostar menos do que Kelly produz crescimento abaixo do ótimo. Mas na prática, mesmo investidores profissionais usam \"meio Kelly\" ou \"quarto Kelly\" porque as estimativas de probabilidade são sempre erradas, e a penalidade de superapostar é severa. Humildade quantitativa.</p>",
 src_pt: "John Kelly, Bell Labs (1956); Edward Thorp"
},

{slug:"n-q-base-rates", type:"quaestio", f:"N",
 title:"Mammograms",
 body:`<p>Classic base-rate problem. A disease affects 1% of women over 40. A mammogram has an 80% true positive rate (catches 80% of actual cases) and a 10% false positive rate. A woman tests positive. What's the probability she actually has the disease?</p>`,
 opts:["80%","Around 50%","Around 7%"],
 correct:2,
 reveal:`<p>Bayes: of 1,000 women, 10 have it. Of those 10, 8 test positive (true positives). Of the 990 who don't, 99 test positive (false positives). So 8 of 107 positive tests reflect real disease. <strong>About 7%.</strong></p>
<p>Doctors asked this question routinely answer 80%. So do investors evaluating analyst recommendations, VC pitches, and startup pivots. Base rate neglect is the single most reliable analytical error. The fix: write down the base rate before you touch the evidence.</p>`,
 src:"Kahneman + Tversky; see also Gigerenzer, Reckoning With Risk",
 title_pt: "Mamografias",
 body_pt: "<p>Problema clássico de taxa base. Uma doença afeta 1% das mulheres acima de 40. Uma mamografia tem taxa de verdadeiro-positivo de 80% (se você tem a doença, 80% de chance do teste detectar) e taxa de falso-positivo de 10% (se você não tem, 10% de chance do teste alertar). Uma mulher aleatória recebe teste positivo. Qual é a probabilidade de ela de fato ter a doença?</p>",
 opts_pt: ["Aproximadamente 80%","Aproximadamente 50%","Aproximadamente 8%","Aproximadamente 1%"]
},

{slug:"n-drucker-useless", type:"sententia", f:"N",
 body:{latin:"Nihil tam inutile quam efficaciter facere quod omnino facere non debet.", english:"There is nothing so useless as doing efficiently that which should not be done at all. — Peter Drucker"},
 body_pt: {latin:"Nihil tam inutile quam efficaciter facere quod omnino facere non debet.",english:"Nada é tão inútil quanto fazer com eficiência o que absolutamente não deveria ser feito. — Peter Drucker"},
 src_pt: "Peter Drucker · a distinção entre eficiência (fazer certo) e eficácia (fazer o certo)"
},

{slug:"n-thiel-what-truth", type:"suffragium", f:"N",
 title:"Thiel's Contrarian Question",
 body:`<p>Peter Thiel's interview question: <em>what important truth do very few people agree with you on?</em> Most answers are not actually contrarian; they're mainstream positions dressed as transgressions. A real answer should feel uncomfortable to say. What's yours?</p>`,
 opts:["I have a real one and it costs me socially to hold it","I have one but I'm not sure I'd stake career on it","I thought I had one but it turns out most people secretly agree"],
 title_pt: "A Pergunta Contrária de Thiel",
 body_pt: "<p>A pergunta de entrevista de Peter Thiel: que verdade importante poucas pessoas concordam com você?</p><p>É mais difícil do que parece. A maioria responde com uma afirmação que todo mundo publicamente aceita (\"a educação deveria ser melhor\") ou com uma afirmação que ninguém está realmente preparado para defender (\"a lua é feita de queijo\"). Nenhuma é interessante.</p><p>O que Thiel está procurando: uma proposição onde você acha que está certo, mas sabe que a maioria discordaria, e você pode defendê-la. É o teste de se você pensou sobre alguma coisa com profundidade suficiente para discordar da sabedoria convencional de forma sustentável.</p><p>Fundadores que não têm nenhuma resposta assim raramente constroem algo importante. A oportunidade de startup está justamente onde há uma lacuna entre o que é verdade e o que a maioria acredita. Sem uma dessas verdades contrárias, você está entrando em um mercado onde o consenso já precificou tudo.</p>",
 src_pt: "Peter Thiel · De Zero a Um"
},

{slug:"n-christensen-100-percent", type:"lectio", f:"N", title:"100% Is Easier Than 98%",
 body:`<p>Clayton Christensen, in one of his most-cited passages: <strong>100% of the time is easier than 98% of the time.</strong></p>
<p>If you have decided never to lie on expense reports, you don't deliberate when the gray-area situation arises. If you're at 98% — "almost always" — every single situation requires fresh deliberation, with the full weight of the specific temptation. The marginal cost of each exception feels small. The cumulative cost is a character.</p>
<p>Rules you keep absolutely are not rigidity. They are the opposite: they free the mind from endless re-litigation of what you already decided. Pick the few that matter and never bend them. On the rest, flex.</p>`,
 src:"Clayton Christensen, How Will You Measure Your Life?",
 title_pt: "100% É Mais Fácil Que 98%",
 body_pt: "<p>Clayton Christensen, em uma de suas passagens mais citadas: 100% das vezes é mais fácil do que 98% das vezes.</p><p>Se você decide \"nunca mais\" fazer alguma coisa, é apenas uma decisão. Para sempre. Não precisa reavaliar em cada tentação. Se você decide \"quase nunca\", todo caso particular agora exige um julgamento: isto conta como uma exceção legítima? Essas pequenas decisões se compõem. Elas te esgotam. Elas te levam a sim mais vezes do que você gostaria.</p><p>Christensen aplicou isto a si mesmo em relação a trapacear em exames na universidade. Decidiu não apenas que \"em geral não\", mas que \"nunca, sob nenhuma circunstância\". A simplicidade da regra o protegeu em momentos em que o cálculo caso a caso o teria vendido.</p><p>Aplique a qualquer prática que você quer sustentar ao longo da vida: fidelidade conjugal, abstinência de certas drogas, hábitos de leitura, qualidade do seu trabalho. Linhas intransponíveis são mais fáceis de manter do que linhas negociáveis.</p>",
 src_pt: "Clayton Christensen, Como Você Vai Medir Sua Vida?"
},

{slug:"n-taleb-via-negativa", type:"lectio", f:"N", title:"Via Negativa",
 body:`<p>Taleb's practical maxim, borrowed from theology: <em>improve by removal</em>, not by addition.</p>
<p>Health: the gains from <em>stopping</em> smoking, sugar, late nights are larger and more reliable than any supplement you can add. Investing: avoiding ruin, overvalued fads, and leverage matters more than finding the next winner. Writing: cutting bad sentences improves the piece more than adding good ones.</p>
<p>Addition requires luck (did you add the right thing?). Removal is deterministic (the harm is gone). In a world of uncertainty, the asymmetry favors subtraction. Build negative lists — things you will not do, buy, read, agree to — before positive ones.</p>`,
 src:"Nassim Taleb, Antifragile",
 title_pt: "Via Negativa",
 body_pt: "<p>A máxima prática de Taleb, emprestada da teologia: melhore por remoção, não por adição.</p><p>A maioria dos conselhos de vida se concentra em o que acrescentar: leia mais, exercite mais, medite mais, comece esta rotina, adote esta ferramenta. Taleb aponta que a melhoria mais confiável vem de parar de fazer o que está danificando. Pare de comer açúcar refinado. Pare de verificar notificações. Pare de passar tempo com pessoas que esgotam você. Pare de dizer sim a compromissos que você sabe que não vai honrar.</p><p>O princípio aplicado a investimentos: sua melhor ação em dez anos provavelmente não será uma brilhante compra, será a decisão de não ter feito uma catastrófica. A via negativa é mais confiável do que a positiva porque evitar erros claros está sob seu controle; produzir ganhos extraordinários depende de muitos fatores que não estão.</p>",
 src_pt: "Nassim Taleb, Antifrágil"
},

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
   src:"Author Match · Theologia",
 title_pt: "Ludus · Quem Disse Isto?",
 body_pt: "<p>Toque numa frase, depois toque no autor. Quatro pares. Veja quantos você acerta na primeira tentativa.</p>",
 pairs_pt: [{q:"Inquieto está o nosso coração até que repouse em Ti.",a:"Agostinho"},
   {q:"Creio para que possa entender.",a:"Anselmo"},
   {q:"A graça não destrói a natureza, mas a aperfeiçoa.",a:"Aquino"},
   {q:"Quando os homens deixam de crer em Deus, passam a crer em qualquer coisa.",a:"Chesterton"}],
 src_pt: "Combinação de Autores · Theologia"
},

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
   src:"Author Match · Oeconomia / Negotium",
 title_pt: "Ludus · Quem Disse Isto?",
 body_pt: "<p>Quatro frases, quatro nomes. Combine.</p>",
 src_pt: "Combinação de Autores · Oeconomia / Negotium",
 pairs_pt: [{q:"O homem age para substituir um estado menos satisfatório por outro mais satisfatório.",a:"Mises"},{q:"A curiosa tarefa da economia é mostrar aos homens o pouco que sabem sobre o que imaginam poder projetar.",a:"Hayek"},{q:"Preço é o que você paga. Valor é o que você recebe.",a:"Buffett"},{q:"Mostre-me o incentivo e eu te mostro o resultado.",a:"Munger"}]
},

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
   src:"Chronology · Historia I",
 title_pt: "Ludus · Em Que Ordem Aconteceram?",
 body_pt: "<p>Toque em cada um na ordem, do mais antigo para o mais recente. Quatro eventos da história ocidental.</p>",
 items_pt: [{label:"Agostinho termina A Cidade de Deus",year:426},{label:"Lutero prega as 95 Teses",year:1517},{label:"Começa a Revolução Francesa",year:1789},{label:"O Muro de Berlim cai",year:1989}],
 src_pt: "Cronologia · Historia I"
},

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
   src:"Chronology · Negotium I · note: Human Action & Intelligent Investor both 1949 — same year counts as adjacent",
 title_pt: "Ludus · Os Livros Que Moldaram os Mercados",
 body_pt: "<p>Quatro livros marcantes em economia e investimento. Coloque-os na ordem em que foram publicados.</p>",
 items_pt: [{label:"Smith · A Riqueza das Nações",year:1776},{label:"Hayek · O Caminho para a Servidão",year:1944},{label:"Mises · Ação Humana",year:1949},{label:"Graham · O Investidor Inteligente",year:1949}],
 src_pt: "Cronologia · Negotium I"
},

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
   src:"Painter Match · Pulchrum",
 title_pt: "Ludus · Pintor e Pintura",
 body_pt: "<p>Quatro pinturas, quatro pintores. Combine.</p>",
 src_pt: "Combinação de Pintores · Pulchrum",
 pairs_pt: [{q:"A Vocação de São Mateus",a:"Caravaggio"},{q:"Mulher Pesando Pérolas",a:"Vermeer"},{q:"A Escola de Atenas",a:"Rafael"},{q:"O Último Combate do Téméraire",a:"Turner"}]
},

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
   src:"Thinker Match · from the Arsenal essays",
 title_pt: "Ludus · Pensadores do Arsenal",
 body_pt: "<p>Quatro afirmações dos ensaios, quatro pensadores que as disseram. Combine.</p>",
 pairs_pt: [{q:"Os homens esqueceram Deus; é por isso que tudo isto aconteceu.",a:"Soljenítsin"},
   {q:"Toda decoração decente da vida será rudemente arrancada.",a:"Burke"},
   {q:"Fazemos homens sem peito e deles esperamos virtude.",a:"C.S. Lewis"},
   {q:"O ideal cristão não foi tentado e achado insuficiente; foi achado difícil e deixado sem tentativa.",a:"Chesterton"}],
 src_pt: "Combinação de Pensadores · dos ensaios do Arsenal"
}
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
   src:"Livy, History of Rome · the epitaph of a tactician who could not close at the strategic level",
 body_pt: {latin:"Vincere scis, Hannibal; victoria uti nescis.",english:"Você sabe vencer uma vitória, Aníbal; não sabe usar uma. — Maharbal a Aníbal, noite de Cannas"},
 src_pt: "Lívio, História de Roma · o epitáfio de um tático que não conseguia fechar no nível estratégico"
},

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
   src:"the ratio his rivals kept forgetting until it was too late",
 body_pt: {latin:"Moralia ad physica sunt ut tria ad unum.",english:"Na guerra, o moral está para o físico como três para um. — Napoleão"},
 src_pt: "a proporção que os rivais dele continuavam esquecendo até ser tarde demais"
},

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


// ================================================================
// WAVE 1 — THEOLOGIA EXPANSION (v11) + NEW LUDUS MODES
// Target: +33 T folios to reach 50. Bilingual throughout.
// Sources: COUNTER_REFORMATION_STUDY, Chair-That-Does-Not-Fall,
// medieval_christendom_final, catholic_vindication_essay, Aquinas,
// Chesterton, Newman, Augustine, Pieper, Ratzinger, Benedict XVI.
// ================================================================
const THEOLOGIA_X = [
{slug:"t-trent-canon", type:"lectio", f:"T", title:"Trent · The Canon That Took Four Years",
 body:`<p>In 1546, over the opening months of the Council of Trent, bishops argued for sessions on end about which books belonged in Scripture. A Lutheran would have expected a swift answer: Scripture alone is the rule, so settle the rule and move on. Trent took its time precisely because it refused that premise.</p>
<p>The Council decided: the Church recognizes a canon she received, she does not vote one into existence. Seventy-three books, including the deuterocanonicals Luther had cut. The vote was unanimous but the method was humiliating — the bishops were not legislators of Scripture; they were its ushers.</p>
<p>Four centuries later, a Protestant with the Luther Bible and a Catholic with the Jerusalem Bible are reading different books of Ecclesiasticus. The split is older than the sermons.</p>`,
 src:"Council of Trent, Session IV, 8 April 1546",
 title_pt:"Trento · O Cânon Que Levou Quatro Anos",
 body_pt:`<p>Em 1546, nos primeiros meses do Concílio de Trento, os bispos discutiram sessões a fio sobre quais livros pertenciam à Escritura. Um luterano teria esperado resposta rápida: Escritura sozinha é a regra, decida-se a regra e siga-se. Trento levou tempo justamente por recusar a premissa.</p>
<p>O Concílio decidiu: a Igreja reconhece um cânon que recebeu, não o vota à existência. Setenta e três livros, incluindo os deuterocanônicos que Lutero cortara. A votação foi unânime, mas o método era humilhante — os bispos não eram legisladores da Escritura; eram seus porteiros.</p>
<p>Quatro séculos depois, o protestante com sua Bíblia de Lutero e o católico com sua Bíblia de Jerusalém leem livros diferentes de Eclesiástico. O racha é mais antigo do que os sermões.</p>`,
 src_pt:"Concílio de Trento, Sessão IV, 8 de abril de 1546"},

{slug:"t-sola-scriptura", type:"quaestio", f:"T", title:"Sola Scriptura · The Trap",
 body:`<p>Scripture alone is the rule of faith. Give the Catholic objection in one sentence.</p>`,
 opts:["The Bible has errors","The doctrine of sola scriptura isn't itself in Scripture","Protestants disagree with each other"],
 correct:1,
 reveal:`<p>The decisive move: the rule "only what Scripture says binds" is itself not something Scripture says. So the rule either refutes itself, or it comes from a prior authority — a tradition, a council, a Church. The question is not whether Scripture is authoritative. It is. The question is which authority decided its boundaries and vouches for its reading.</p>`,
 src:"Classic Catholic retorsion; cf. Newman, Essay on Development",
 title_pt:"Sola Scriptura · A Armadilha",
 body_pt:`<p>Só a Escritura é a regra da fé. Dê a objeção católica em uma frase.</p>`,
 opts_pt:["A Bíblia tem erros","A doutrina da sola scriptura não está, ela mesma, na Escritura","Os protestantes discordam entre si"],
 reveal_pt:`<p>O movimento decisivo: a regra "só o que a Escritura diz obriga" não é algo que a Escritura diga. Portanto, ou a regra se refuta a si mesma, ou vem de uma autoridade anterior — uma tradição, um concílio, uma Igreja. A pergunta não é se a Escritura tem autoridade. Tem. A pergunta é qual autoridade decidiu seus limites e responde por sua leitura.</p>`,
 src_pt:"Retorção católica clássica; cf. Newman, Ensaio sobre o Desenvolvimento"},

{slug:"t-via-media", type:"lectio", f:"T", title:"Newman's Fever",
 body:`<p>Newman spent fifteen years trying to prove the Church of England was the Via Media — the sane middle between Rome's excess and Protestantism's defect. In 1839 a chance footnote about the Monophysite heresy of the fifth century broke him.</p>
<p>He saw it: in that ancient dispute, the heretics were the Monophysites, the "middle party" was the semi-Monophysites who tried a Via Media, and the Catholic Church was Rome. The pattern of the fifth century matched the pattern of the nineteenth exactly — only he was now standing in the middle party's seats.</p>
<p>"The Church of the Fathers was before my eyes." Six years later he was received into the Catholic Church. He writes about the day with the tone of a man finally allowed to drop a role.</p>`,
 src:"J. H. Newman, Apologia pro Vita Sua (1864)",
 title_pt:"A Febre de Newman",
 body_pt:`<p>Newman passou quinze anos tentando provar que a Igreja da Inglaterra era a Via Media — o meio-termo são entre o excesso de Roma e o defeito do protestantismo. Em 1839, uma nota de rodapé sobre a heresia monofisita do século V o quebrou.</p>
<p>Ele viu: naquela disputa antiga, os hereges eram os monofisitas, o "partido do meio" eram os semi-monofisitas que tentavam uma Via Media, e a Igreja Católica era Roma. O padrão do século V combinava exatamente com o do século XIX — só que ele agora estava sentado no banco do partido do meio.</p>
<p>"A Igreja dos Padres estava diante dos meus olhos." Seis anos depois, foi recebido na Igreja Católica. Fala do dia com o tom de um homem finalmente autorizado a largar um papel.</p>`,
 src_pt:"J. H. Newman, Apologia pro Vita Sua (1864)"},

{slug:"t-development-doctrine", type:"lectio", f:"T", title:"The Chair That Does Not Fall",
 body:`<p>Newman's second big idea solves the Protestant objection in one move. Objection: Catholic doctrines (the Marian ones, the papacy, Purgatory) appear in history late. They are therefore inventions.</p>
<p>Newman's reply: a living thing develops. An acorn is not an oak and the oak is not the acorn — yet the oak is nothing but the acorn's unfolding. The seven marks of true development (preservation of type, continuity of principle, assimilative power, logical sequence, anticipation of future, conservative action upon the past, chronic vigour) separate growth from corruption.</p>
<p>Apply the test to any Catholic dogma. Apply it also to any Protestant denomination's history. The result decides which is the oak and which is the mushroom.</p>`,
 src:"J. H. Newman, Essay on the Development of Christian Doctrine (1845)",
 title_pt:"A Cátedra Que Não Cai",
 body_pt:`<p>A segunda grande ideia de Newman resolve a objeção protestante num só golpe. Objeção: dogmas católicos (os marianos, o papado, o Purgatório) aparecem tarde na história. Portanto são invenções.</p>
<p>Resposta de Newman: um ser vivo se desenvolve. A bolota não é o carvalho e o carvalho não é a bolota — mas o carvalho não é senão o desdobramento da bolota. As sete marcas do verdadeiro desenvolvimento (preservação do tipo, continuidade do princípio, poder assimilativo, consequência lógica, antecipação do futuro, ação conservadora sobre o passado, vigor crônico) distinguem crescimento de corrupção.</p>
<p>Aplique o teste a qualquer dogma católico. Aplique também à história de qualquer denominação protestante. O resultado decide qual é o carvalho e qual é o cogumelo.</p>`,
 src_pt:"J. H. Newman, Ensaio sobre o Desenvolvimento da Doutrina Cristã (1845)"},

{slug:"t-five-ways-first", type:"lectio", f:"T", title:"The First Way · Prime Mover",
 body:`<p>Nothing changes itself. The water is heated by the fire, the fire by the fuel, the fuel by the hand. Trace the chain back. If it has no first mover, nothing moves. But things <em>are</em> moving.</p>
<p>Aquinas's point is not an argument about a long time ago. It is about <em>right now</em>. Why is the fire still hot? Why does any potency ever get actualized? Not a chain in time, a chain in <em>being</em> — stacked beneath each moment.</p>
<p>Collapse the stack. Something at the base must be in act with no potency to be actualized by another. That is what everyone calls God.</p>`,
 src:"Aquinas, Summa I, q.2, a.3 · the First Way",
 title_pt:"A Primeira Via · Primeiro Motor",
 body_pt:`<p>Nada muda a si mesmo. A água é aquecida pelo fogo, o fogo pelo combustível, o combustível pela mão. Siga a cadeia para trás. Se não houver primeiro motor, nada se move. Mas as coisas <em>estão</em> se movendo.</p>
<p>O argumento de Aquino não é sobre um passado remoto. É sobre <em>agora mesmo</em>. Por que o fogo ainda está quente? Por que uma potência qualquer é atualizada? Não é cadeia no tempo, é cadeia no <em>ser</em> — empilhada sob cada instante.</p>
<p>Desmonte a pilha. Algo na base deve estar em ato, sem potência a ser atualizada por outro. É isso que todos chamam de Deus.</p>`,
 src_pt:"Aquino, Suma I, q.2, a.3 · Primeira Via"},

{slug:"t-fifth-way", type:"lectio", f:"T", title:"The Fifth Way · The Arrow",
 body:`<p>The acorn is not deliberating. It does not know anything. Yet it reliably ends up an oak, not a maple. Something in it is <em>ordered to</em> oakhood without being conscious of it.</p>
<p>Aquinas: an arrow does not direct itself. An archer directs it. Natural things act for ends they do not know; something must direct them.</p>
<p>Modern evolutionary biology does not refute this; it rediscovered it. "Function" is teleology by another name. The question is not whether nature is directed. It demonstrably is. The question is who or what directs it.</p>`,
 src:"Aquinas, Summa I, q.2, a.3 · the Fifth Way",
 title_pt:"A Quinta Via · A Flecha",
 body_pt:`<p>A bolota não está deliberando. Não sabe nada. Mas termina, com confiabilidade, como carvalho, não como bordo. Algo nela está <em>ordenado para</em> ser carvalho sem consciência disso.</p>
<p>Aquino: a flecha não se dirige. Um arqueiro a dirige. As coisas naturais agem para fins que não conhecem; algo deve dirigi-las.</p>
<p>A biologia evolutiva moderna não refuta isso; redescobriu. "Função" é teleologia com outro nome. A pergunta não é se a natureza é dirigida. Comprovadamente é. A pergunta é quem ou o quê a dirige.</p>`,
 src_pt:"Aquino, Suma I, q.2, a.3 · Quinta Via"},

{slug:"t-divine-simplicity", type:"lectio", f:"T", title:"Divine Simplicity",
 body:`<p>In God there is no composition. God's power is God's wisdom is God's mercy is God's being. We say the words separately because we can only think serially; the reality we point at has no parts.</p>
<p>Why it matters: a God with parts is not ultimate. If his wisdom and his power were two different things, something would have combined them, and that combiner would be the real God. All the great Christian minds — Augustine, Anselm, Aquinas, Palamas within his tradition — meet at this cliff.</p>
<p>Consequence: God does not <em>have</em> love. God <em>is</em> love. The sentence from John is not poetry. It is metaphysics in English.</p>`,
 src:"Aquinas, Summa I, q.3 · De Simplicitate Dei",
 title_pt:"Simplicidade Divina",
 body_pt:`<p>Em Deus não há composição. A potência de Deus é a sabedoria de Deus é a misericórdia de Deus é o ser de Deus. Dizemos as palavras em separado porque só podemos pensar em série; a realidade apontada não tem partes.</p>
<p>Por que importa: um Deus com partes não é último. Se sua sabedoria e sua potência fossem duas coisas distintas, algo as teria combinado, e esse combinador seria o Deus real. Agostinho, Anselmo, Aquino, Palamas em sua tradição — todos os grandes se encontram neste penhasco.</p>
<p>Consequência: Deus não <em>tem</em> amor. Deus <em>é</em> amor. A frase de João não é poesia. É metafísica em português.</p>`,
 src_pt:"Aquino, Suma I, q.3 · Da Simplicidade de Deus"},

{slug:"t-liturgical-east", type:"lectio", f:"T", title:"Ratzinger · Turn to the Lord",
 body:`<p>Ratzinger's small book <em>The Spirit of the Liturgy</em> turns on a single architectural fact. For nineteen centuries, priest and people faced the same direction at Mass — the East, where the rising sun stood for the returning Christ. The priest was not "turned toward the people"; both were turned toward the Lord.</p>
<p>Then one liturgy committee in the 1960s moved the altar, and a tradition old as the catacombs changed. Ratzinger did not demand reversal. He asked a quieter question: when every parish faces its own community, what is the Mass directed <em>at</em>?</p>
<p>The answer shapes everything else — music, posture, silence, the architecture of a church.</p>`,
 src:"Joseph Ratzinger, The Spirit of the Liturgy (2000)",
 title_pt:"Ratzinger · Voltar-se Para o Senhor",
 body_pt:`<p>O pequeno livro de Ratzinger <em>O Espírito da Liturgia</em> gira em torno de um único fato arquitetônico. Durante dezenove séculos, padre e povo encararam a mesma direção na Missa — o Oriente, onde o sol nascente representava o Cristo que vem. O sacerdote não estava "voltado para o povo"; ambos estavam voltados para o Senhor.</p>
<p>Então, nos anos 1960, uma comissão litúrgica moveu o altar, e uma tradição tão antiga quanto as catacumbas mudou. Ratzinger não pediu reversão. Fez uma pergunta mais silenciosa: quando cada paróquia encara a própria comunidade, para onde a Missa está dirigida?</p>
<p>A resposta molda todo o resto — música, postura, silêncio, a arquitetura de uma igreja.</p>`,
 src_pt:"Joseph Ratzinger, O Espírito da Liturgia (2000)"},

{slug:"t-leisure-schole", type:"lectio", f:"T", title:"Pieper · Why School Is Named for Leisure",
 body:`<p>The Greek word <em>schole</em> means leisure. From it we get "school." The chain reveals the premise: real learning is the work of free hours, not the opposite of them. A man who learns only for a credential has not learned; he has trained.</p>
<p>Pieper, writing in bombed-out Germany in 1948, saw the enemy clearly. It was not Marxism or capitalism; it was the <em>total work</em> ethic that treated every hour as owed to production. Against it he placed the medieval view: contemplation is the highest human act, and festivals exist to protect it.</p>
<p>Keep a Sabbath. Not because you've earned a break. Because without it you forget what the week is for.</p>`,
 src:"Josef Pieper, Leisure: The Basis of Culture (1948)",
 title_pt:"Pieper · Por Que Escola Se Chama Lazer",
 body_pt:`<p>A palavra grega <em>schole</em> significa lazer. Dela veio "escola". A corrente revela a premissa: o verdadeiro aprender é obra das horas livres, não o oposto delas. Um homem que aprende só por diploma não aprendeu; treinou.</p>
<p>Pieper, escrevendo na Alemanha bombardeada de 1948, viu o inimigo com clareza. Não era o marxismo ou o capitalismo; era a ética do <em>trabalho total</em> que tratava cada hora como devida à produção. Contra ela, pôs a visão medieval: a contemplação é o ato humano mais alto, e as festas existem para protegê-la.</p>
<p>Guarde um sábado. Não porque mereceu descanso. Porque sem ele você esquece para que serve a semana.</p>`,
 src_pt:"Josef Pieper, O Lazer: Base da Cultura (1948)"},

{slug:"t-grace-perfects", type:"sententia", f:"T", rare:1, title:"Gratia non tollit",
 body:`<blockquote>Gratia non tollit naturam, sed perficit.<br><em>Grace does not destroy nature but perfects it.</em></blockquote>
<p>One sentence shutting the door on every Christianity that treats the body, reason, politics, art, or the ordinary life as too dirty to save.</p>`,
 src:"Aquinas, Summa I, q.1, a.8 ad 2",
 title_pt:"Gratia non tollit",
 body_pt:`<blockquote>Gratia non tollit naturam, sed perficit.<br><em>A graça não destrói a natureza, mas a aperfeiçoa.</em></blockquote>
<p>Uma frase que fecha a porta a todo cristianismo que trate o corpo, a razão, a política, a arte ou a vida ordinária como sujos demais para serem salvos.</p>`,
 src_pt:"Aquino, Suma I, q.1, a.8 ad 2"},

{slug:"t-mystical-body", type:"lectio", f:"T", title:"Mystici Corporis",
 body:`<p>Pius XII's 1943 encyclical made a claim worth stopping over: the Church is not an institution Christ founded. The Church is Christ. Not metaphor. The visible society of baptized people, with its sacraments and its hierarchy, is the physical extension of the resurrected body of Jesus into history.</p>
<p>Thus every scandal in the Church is a wound in Christ's body. Thus every grace in the Church is Christ himself living. The Protestant divide between an "invisible true church" and the "visible institution" dissolves. One body, visible and mystical, bloodied and crowned.</p>
<p>If you ever wonder why Catholics stay through corruption: this doctrine is why.</p>`,
 src:"Pius XII, Mystici Corporis Christi (1943)",
 title_pt:"Mystici Corporis",
 body_pt:`<p>A encíclica de Pio XII, de 1943, fez uma afirmação sobre a qual vale parar: a Igreja não é uma instituição que Cristo fundou. A Igreja é Cristo. Não metáfora. A sociedade visível dos batizados, com seus sacramentos e sua hierarquia, é a extensão física do corpo ressuscitado de Jesus na história.</p>
<p>Assim, todo escândalo na Igreja é ferida no corpo de Cristo. Assim, toda graça na Igreja é o próprio Cristo vivente. A divisão protestante entre uma "verdadeira Igreja invisível" e a "instituição visível" se dissolve. Um só corpo, visível e místico, ferido e coroado.</p>
<p>Se você já se perguntou por que os católicos permanecem apesar da corrupção: é por esta doutrina.</p>`,
 src_pt:"Pio XII, Mystici Corporis Christi (1943)"},

{slug:"t-eucharist-real", type:"quaestio", f:"T", title:"Hoc est corpus meum",
 body:`<p>At the Last Supper Jesus holds bread and says "This is my body." Four possible readings. Which does the Catholic Church hold?</p>`,
 opts:[
   "A symbol — the bread recalls his body",
   "Consubstantiation — bread and body coexist in the same object",
   "Receptionism — the body is received by faith, not present in the bread",
   "Transubstantiation — the substance of bread is replaced by Christ's body; only accidents remain"
 ],
 correct:3,
 reveal:`<p>Trent, Session XIII (1551): "a conversion is made of the whole substance of the bread into the body… which conversion is suitably and properly called by the Catholic Church Transubstantiation."</p>
<p>The accidents — appearance, taste, weight — remain bread. The substance, which Aristotle meant as the <em>what-it-is</em> of a thing, is now Christ. A Catholic chewing a host does not chew Christ in his humanity; the humanity is not under the mode of the accidents. He receives, really, the whole Christ.</p>`,
 src:"Council of Trent, Session XIII, canon 2",
 title_pt:"Hoc est corpus meum",
 body_pt:`<p>Na Última Ceia, Jesus toma o pão e diz "Isto é o meu corpo". Quatro leituras possíveis. Qual sustenta a Igreja Católica?</p>`,
 opts_pt:[
   "Símbolo — o pão lembra seu corpo",
   "Consubstanciação — pão e corpo coexistem no mesmo objeto",
   "Receptismo — o corpo é recebido pela fé, não presente no pão",
   "Transubstanciação — a substância do pão é substituída pelo corpo de Cristo; só restam acidentes"
 ],
 reveal_pt:`<p>Trento, Sessão XIII (1551): "faz-se uma conversão de toda a substância do pão no corpo… conversão que a Igreja Católica chama, com propriedade, Transubstanciação."</p>
<p>Os acidentes — aparência, sabor, peso — continuam pão. A substância, o que a coisa <em>é</em> no sentido aristotélico, é agora Cristo. Um católico mastigando a hóstia não mastiga Cristo na sua humanidade; a humanidade não está sob o modo dos acidentes. Ele recebe, realmente, o Cristo inteiro.</p>`,
 src_pt:"Concílio de Trento, Sessão XIII, cânon 2"},

{slug:"t-filioque", type:"lectio", f:"T", title:"Filioque · A Word That Split a World",
 body:`<p>The Nicene Creed as recited in East and West differs by one Latin word: <em>Filioque</em>. "And from the Son." The East says the Spirit proceeds from the Father. The West says the Spirit proceeds from the Father <em>and the Son</em>.</p>
<p>That word was added by the West around the 6th century, confirmed by Rome by the 11th, and became one of the formal grievances in the Great Schism of 1054. The East did not deny the Son's role; it denied the right of the Latin Church to amend an ecumenical creed without an ecumenical council.</p>
<p>So the split is as much about who can change the creed as about the Trinity. Jurisdiction and theology, married tightly in a single syllable.</p>`,
 src:"Great Schism, 1054; First Council of Constantinople (381) and its amendments",
 title_pt:"Filioque · Uma Palavra Que Partiu um Mundo",
 body_pt:`<p>O Credo Niceno, recitado no Oriente e no Ocidente, difere por uma palavra latina: <em>Filioque</em>. "E do Filho." O Oriente diz que o Espírito procede do Pai. O Ocidente diz que o Espírito procede do Pai <em>e do Filho</em>.</p>
<p>Essa palavra foi acrescentada pelo Ocidente por volta do séc. VI, confirmada por Roma no séc. XI, e tornou-se um dos agravos formais no Grande Cisma de 1054. O Oriente não negava o papel do Filho; negava o direito da Igreja latina de emendar um credo ecumênico sem concílio ecumênico.</p>
<p>Portanto o cisma trata tanto de quem pode mudar o credo quanto da Trindade. Jurisdição e teologia, casadas firmemente numa só sílaba.</p>`,
 src_pt:"Grande Cisma, 1054; Primeiro Concílio de Constantinopla (381) e suas emendas"},

{slug:"t-indulgences-truth", type:"lectio", f:"T", title:"What Luther Actually Attacked",
 body:`<p>The 95 Theses of 1517 are not what people think. Luther was not attacking the sacrament of confession or even the doctrine of Purgatory. He was attacking the sale, under papal letters of commission, of indulgences by Johann Tetzel, a Dominican friar collecting money to build St. Peter's.</p>
<p>Rome, at Trent, agreed on the abuse and ended the sale. But Luther's critique had, by then, drifted. From "this practice is corrupt" to "the authority is false." The Protestant Reformation is not a reform that got rejected; it is the moment a particular reformer stopped being open to being wrong.</p>
<p>Any serious Catholic defender grants Tetzel. The question is whether a scandal in a bishop proves the Church's claims about itself false. It never has, before or since.</p>`,
 src:"Martin Luther, 95 Theses (1517); Council of Trent, Session XXV",
 title_pt:"O Que Lutero Realmente Atacou",
 body_pt:`<p>As 95 Teses de 1517 não são o que se pensa. Lutero não atacava o sacramento da confissão nem a doutrina do Purgatório. Atacava a venda, sob cartas papais de comissão, de indulgências por Johann Tetzel, frade dominicano arrecadando dinheiro para construir São Pedro.</p>
<p>Roma, em Trento, concordou sobre o abuso e encerrou a venda. Mas a crítica de Lutero, àquela altura, deslizara. De "esta prática é corrupta" para "a autoridade é falsa." A Reforma Protestante não é uma reforma rejeitada; é o momento em que um reformador particular deixou de admitir que podia estar errado.</p>
<p>Qualquer defensor católico sério concede Tetzel. A pergunta é se um escândalo num bispo prova falsas as alegações da Igreja sobre si mesma. Jamais provou, antes ou depois.</p>`,
 src_pt:"Martinho Lutero, 95 Teses (1517); Concílio de Trento, Sessão XXV"},

{slug:"t-marian-dogmas", type:"lectio", f:"T", title:"Why Mary · Four Dogmas",
 body:`<p>Four dogmas settled over fifteen centuries. <strong>Theotokos</strong> (431, Ephesus): Mary is the Mother of God — because the one she bore is one Person, divine and human. Deny it and you divide Christ.</p>
<p><strong>Perpetual Virginity</strong> (649, Lateran): she bore no other children. The "brothers of the Lord" are cousins in Semitic usage.</p>
<p><strong>Immaculate Conception</strong> (1854, Pius IX): preserved from original sin from the first moment of her existence, by anticipated application of Christ's merits.</p>
<p><strong>Assumption</strong> (1950, Pius XII): taken body and soul into heaven at the end of her earthly life.</p>
<p>Each dogma is defined only once it is denied. The timing is reactive. The content is as old as the apostles.</p>`,
 src:"Councils of Ephesus, Lateran; Ineffabilis Deus (1854); Munificentissimus Deus (1950)",
 title_pt:"Por Que Maria · Quatro Dogmas",
 body_pt:`<p>Quatro dogmas definidos ao longo de quinze séculos. <strong>Theotokos</strong> (431, Éfeso): Maria é Mãe de Deus — porque aquele a quem gerou é uma só Pessoa, divina e humana. Negue, e você divide Cristo.</p>
<p><strong>Virgindade Perpétua</strong> (649, Latrão): não gerou outros filhos. Os "irmãos do Senhor" são primos no uso semítico.</p>
<p><strong>Imaculada Conceição</strong> (1854, Pio IX): preservada do pecado original desde o primeiro instante de sua existência, por aplicação antecipada dos méritos de Cristo.</p>
<p><strong>Assunção</strong> (1950, Pio XII): levada em corpo e alma ao céu ao fim de sua vida terrena.</p>
<p>Cada dogma é definido apenas quando é negado. O tempo é reativo. O conteúdo é tão antigo quanto os apóstolos.</p>`,
 src_pt:"Concílios de Éfeso, de Latrão; Ineffabilis Deus (1854); Munificentissimus Deus (1950)"},

{slug:"t-chesterton-paradox", type:"sententia", f:"T", title:"Chesterton on Orthodoxy",
 body:`<blockquote>The orthodox Church was never respectable… If it had been, the Church would never have been there at all.<br>— Orthodoxy, VI</blockquote>
<p>Chesterton's point: the Church looked ridiculous to every age it saved. Each age thought itself the Church's final test; each age it was the other way around.</p>`,
 src:"G. K. Chesterton, Orthodoxy, VI (1908)",
 title_pt:"Chesterton Sobre a Ortodoxia",
 body_pt:`<blockquote>A Igreja ortodoxa nunca foi respeitável… Se o tivesse sido, a Igreja nunca teria existido.<br>— Ortodoxia, VI</blockquote>
<p>O ponto de Chesterton: a Igreja pareceu ridícula a toda época que ela salvou. Cada época julgou-se o teste final da Igreja; em cada época foi ao contrário.</p>`,
 src_pt:"G. K. Chesterton, Ortodoxia, VI (1908)"},

{slug:"t-wrestle-matter", type:"lectio", f:"T", title:"Why Catholicism Loves Matter",
 body:`<p>Water does something at Baptism. Oil does something at Confirmation. Bread does something at Mass. A ring does something at a wedding. Catholicism refuses the ancient temptation to say that stuff is beneath Spirit.</p>
<p>The reason is Christological. If God entered matter in Jesus, matter cannot be metaphysically shabby. The Incarnation forces an incarnational theology of signs. Every sacrament is a corollary.</p>
<p>Protestantism, suspicious of relics and statues and holy water, is more Platonist than its founders would have admitted. Catholicism is more pagan — which here is a compliment. It thinks the material world is on the inside of grace, not outside the door.</p>`,
 src:"after Hans Urs von Balthasar; CCC §1084",
 title_pt:"Por Que o Catolicismo Ama a Matéria",
 body_pt:`<p>A água faz algo no Batismo. O óleo faz algo na Crisma. O pão faz algo na Missa. Um anel faz algo num casamento. O catolicismo recusa a antiga tentação de dizer que a matéria é inferior ao Espírito.</p>
<p>A razão é cristológica. Se Deus entrou na matéria em Jesus, a matéria não pode ser metafisicamente desprezível. A Encarnação impõe uma teologia encarnacional dos sinais. Todo sacramento é um corolário.</p>
<p>O protestantismo, desconfiado de relíquias, estátuas e água benta, é mais platonista do que seus fundadores admitiriam. O catolicismo é mais pagão — o que aqui é elogio. Ele pensa que o mundo material está do lado de dentro da graça, não fora da porta.</p>`,
 src_pt:"segundo Hans Urs von Balthasar; CIC §1084"},

{slug:"t-confession-practice", type:"lectio", f:"T", title:"Why Confession",
 body:`<p>Objection: can't I go directly to God? Yes. For venial sins, you already do, every time you pray. For grave matter, the Church says the ordinary means is confession, because sin is never private.</p>
<p>Think of what sin actually is: a wound to the Mystical Body. A private act with public effects. The sacrament matches the shape of the problem. You name it aloud (specific, not vague). You are absolved by a man speaking in Christ's own voice (<em>Ego te absolvo</em>). You are reintegrated to the Body that was wounded.</p>
<p>Converts, almost universally, report confession as the single sacrament they feared most and defend most strongly afterwards. That alone is a datum.</p>`,
 src:"CCC §§1420–1498; John 20:23",
 title_pt:"Por Que a Confissão",
 body_pt:`<p>Objeção: não posso ir direto a Deus? Pode. Pecados veniais, você já faz, toda vez que reza. Para matéria grave, a Igreja diz que o meio ordinário é a confissão, porque pecado nunca é privado.</p>
<p>Pense no que pecado é: ferida no Corpo Místico. Ato privado com efeitos públicos. O sacramento combina com a forma do problema. Você nomeia em voz alta (específico, não vago). É absolvido por um homem falando na própria voz de Cristo (<em>Ego te absolvo</em>). É reintegrado ao Corpo que foi ferido.</p>
<p>Conversos, quase universalmente, relatam a confissão como o sacramento que mais temiam e que mais defendem depois. Isto, sozinho, já é um dado.</p>`,
 src_pt:"CIC §§1420–1498; João 20,23"},

{slug:"t-why-catholic", type:"quaestio", f:"T", title:"Why Catholic and not Orthodox?",
 body:`<p>Orthodox Christianity has valid sacraments, Apostolic succession, a Trinitarian creed, Marian veneration. It differs on one question. Which?</p>`,
 opts:["The role of women","Papal primacy — the universal jurisdiction of Rome","The use of icons"],
 correct:1,
 reveal:`<p>Both share almost everything. The point of friction is whether Peter's chair in Rome holds universal, ordinary, immediate jurisdiction over every bishop and every baptized Christian, or whether it holds only a primacy of honor among equal patriarchates.</p>
<p>The Catholic claim is the stronger one. From the Orthodox view, the Catholic claim is an overreach that congealed into dogma at Vatican I (1870). Nineteen centuries, one chair, one question.</p>`,
 src:"First Vatican Council, Pastor Aeternus (1870); Orthodox critique: Zizioulas, Being as Communion",
 title_pt:"Por Que Católico e não Ortodoxo?",
 body_pt:`<p>O cristianismo ortodoxo tem sacramentos válidos, sucessão apostólica, credo trinitário, veneração mariana. Difere numa só questão. Qual?</p>`,
 opts_pt:["O papel das mulheres","Primado papal — jurisdição universal de Roma","O uso de ícones"],
 reveal_pt:`<p>Ambos compartilham quase tudo. O ponto de atrito é se a cátedra de Pedro em Roma detém jurisdição universal, ordinária e imediata sobre todo bispo e todo cristão batizado, ou se detém apenas um primado de honra entre patriarcados iguais.</p>
<p>A alegação católica é a mais forte. Do ponto de vista ortodoxo, é um excesso que se cristalizou em dogma no Vaticano I (1870). Dezenove séculos, uma cátedra, uma pergunta.</p>`,
 src_pt:"Primeiro Concílio do Vaticano, Pastor Aeternus (1870); crítica ortodoxa: Zizioulas, O Ser como Comunhão"},

{slug:"t-pascal-wager", type:"lectio", f:"T", title:"Pascal's Wager · Properly Stated",
 body:`<p>The crude version — "believe just in case, you have nothing to lose" — is unworthy of Pascal. His argument runs deeper.</p>
<p>Premise: on the question of God's existence, pure reason is tied. The scales do not fall. Yet you must choose, because to refuse to choose is itself to choose unbelief.</p>
<p>Pascal's point: given forced choice, the expected value of belief dominates. Infinite gain times any non-zero probability of truth exceeds any finite worldly cost. But the real move is what follows: he does not say "believe." He says "act as if you believed — go to Mass, use holy water, bend the knee — and belief will come." Belief is not a mental trick. It is a shape the whole life learns.</p>`,
 src:"Blaise Pascal, Pensées §233 (1670)",
 title_pt:"A Aposta de Pascal · Enunciada Corretamente",
 body_pt:`<p>A versão grosseira — "creia por via das dúvidas, você não perde nada" — é indigna de Pascal. Seu argumento vai mais fundo.</p>
<p>Premissa: na questão da existência de Deus, a razão pura empata. A balança não tomba. E, no entanto, você tem de escolher — porque recusar-se a escolher é já escolher a descrença.</p>
<p>O ponto de Pascal: dada escolha forçada, o valor esperado da fé domina. Ganho infinito multiplicado por qualquer probabilidade não nula excede qualquer custo mundano finito. Mas o movimento verdadeiro é o seguinte: ele não diz "creia". Diz "aja como se cresse — vá à Missa, use água benta, dobre o joelho — e a crença virá". A crença não é truque mental. É uma forma que a vida inteira aprende.</p>`,
 src_pt:"Blaise Pascal, Pensées §233 (1670)"},

{slug:"t-dark-night", type:"lectio", f:"T", title:"The Dark Night",
 body:`<p>John of the Cross wrote the <em>Dark Night of the Soul</em> in a Toledo prison cell at age 35. His own superiors had locked him up. From there he described the two necessary purgations — of the senses and of the spirit — by which God removes consolation to teach a soul to love without reward.</p>
<p>The practical use: when prayer goes dry, when the sacraments feel like duty, when God seems withdrawn — John says this is not failure. It is the second stage of a serious life. The alternative is loving God for the feelings he produces, which is loving the feelings. The dark night is God hiding the sweets so you learn to love him naked.</p>`,
 src:"John of the Cross, Dark Night of the Soul (c. 1585)",
 title_pt:"A Noite Escura",
 body_pt:`<p>João da Cruz escreveu a <em>Noite Escura da Alma</em> numa cela de Toledo, aos 35 anos. Seus próprios superiores o haviam prendido. Dali descreveu as duas purificações necessárias — dos sentidos e do espírito — pelas quais Deus retira a consolação para ensinar a alma a amar sem recompensa.</p>
<p>O uso prático: quando a oração seca, quando os sacramentos parecem obrigação, quando Deus parece retirado — João diz: isto não é fracasso. É a segunda etapa de uma vida séria. A alternativa é amar a Deus pelos sentimentos que ele produz, o que é amar os sentimentos. A noite escura é Deus escondendo os doces para que você aprenda a amá-lo nu.</p>`,
 src_pt:"João da Cruz, A Noite Escura da Alma (c. 1585)"},

{slug:"t-angels-aquinas", type:"lectio", f:"T", title:"Aquinas on Angels",
 body:`<p>An angel is pure form without matter. One idea with no shadow of ignorance. From it two surprises:</p>
<p>First, there is no "species" of angel — every angel is its own species, because what individuates one from another in us (matter) does not apply. The angels Gabriel and Michael differ as Pythagoras differs from Beethoven: not as two of the same thing.</p>
<p>Second, angelic knowledge is not by sense or inference. An angel sees any truth it sees <em>all at once</em>, in a single intellectual grasp. We discover; they behold. Which is why they rarely bother to speak at length when they visit.</p>`,
 src:"Aquinas, Summa I, qq. 50–64",
 title_pt:"Aquino Sobre os Anjos",
 body_pt:`<p>Um anjo é forma pura, sem matéria. Uma ideia sem sombra de ignorância. Daí duas surpresas:</p>
<p>Primeira: não há "espécie" de anjo — cada anjo é sua própria espécie, porque o que individua um do outro em nós (a matéria) não se aplica. Os anjos Gabriel e Miguel diferem como Pitágoras difere de Beethoven: não como dois exemplares da mesma coisa.</p>
<p>Segunda: o conhecimento angélico não vem dos sentidos ou do raciocínio. Um anjo vê qualquer verdade que vê <em>tudo de uma vez</em>, numa só apreensão intelectual. Nós descobrimos; eles contemplam. Por isso raramente demoram a falar quando visitam.</p>`,
 src_pt:"Aquino, Suma I, qq. 50–64"},

{slug:"t-sacrifice-mass", type:"lectio", f:"T", title:"The Mass Is a Sacrifice",
 body:`<p>Protestantism's gravest objection to Catholic worship: the Mass is called a sacrifice, and so, say reformers, it insults the one-time sacrifice of Calvary.</p>
<p>The Catholic reply: the Mass does not add to Calvary. It makes Calvary present. The one eternal self-offering of Christ to the Father, which happened in time once on Golgotha, is drawn through the altar and offered again under sacramental signs. Not repetition — re-presentation.</p>
<p>Trent said it: "<em>Una enim eademque hostia</em>" — one and the same victim, now offering himself through the ministry of the priests, who offered himself on the Cross. Only the manner differs.</p>`,
 src:"Council of Trent, Session XXII, chapter 2 (1562)",
 title_pt:"A Missa É Sacrifício",
 body_pt:`<p>A objeção mais grave do protestantismo ao culto católico: a Missa é chamada de sacrifício e, dizem os reformadores, isso insulta o único sacrifício do Calvário.</p>
<p>A resposta católica: a Missa não acrescenta nada ao Calvário. Torna o Calvário presente. A única oferta eterna de Cristo ao Pai, que aconteceu no tempo, uma só vez, no Gólgota, é puxada pelo altar e oferecida novamente sob sinais sacramentais. Não repetição — re-apresentação.</p>
<p>Trento disse: "<em>Una enim eademque hostia</em>" — uma única e mesma vítima, agora oferecendo-se pelo ministério dos sacerdotes, que se ofereceu na Cruz. Só o modo difere.</p>`,
 src_pt:"Concílio de Trento, Sessão XXII, capítulo 2 (1562)"},

{slug:"t-benedict-option", type:"lectio", f:"T", title:"MacIntyre's Benedict",
 body:`<p>The famous last paragraph of <em>After Virtue</em>: "We are waiting not for a Godot, but for another — doubtless very different — St. Benedict."</p>
<p>The claim: when a civilization's moral vocabulary has decayed past the point of repair, the task is not political recovery but the construction of local, intentional communities within which the virtues can again be practiced and transmitted. Benedict, in the ruins of Rome, did not fight to save the empire. He built monasteries that outlived it by a thousand years.</p>
<p>Whether Rod Dreher's 2017 book popularizes this responsibly is one debate. That MacIntyre's underlying claim is live is another, and the answer is harder.</p>`,
 src:"Alasdair MacIntyre, After Virtue (1981), ch. 18",
 title_pt:"O Bento de MacIntyre",
 body_pt:`<p>O célebre parágrafo final de <em>Depois da Virtude</em>: "Estamos à espera, não de um Godot, mas de outro — e sem dúvida muito diferente — São Bento."</p>
<p>A tese: quando o vocabulário moral de uma civilização decaiu além de reparo, a tarefa não é recuperação política, mas construção de comunidades locais e intencionais, dentro das quais as virtudes possam ser outra vez praticadas e transmitidas. Bento, nas ruínas de Roma, não lutou para salvar o império. Construiu mosteiros que lhe sobreviveram por mil anos.</p>
<p>Se o livro de Rod Dreher, de 2017, populariza a tese com responsabilidade é um debate. Que a tese subjacente de MacIntyre esteja viva é outro, e a resposta é mais dura.</p>`,
 src_pt:"Alasdair MacIntyre, Depois da Virtude (1981), cap. 18"},

{slug:"t-barron-beauty", type:"lectio", f:"T", title:"Barron's Beauty-First",
 body:`<p>Bishop Robert Barron: the Church has traditionally evangelized in the order True → Good → Beautiful. In a cynical age, that order fails. Nobody will listen to your True; your Good sounds judgmental.</p>
<p>Reverse the order. Lead with Beauty — Chartres, Mozart, Caravaggio, Dostoevsky, a well-sung Vespers. Beauty disarms. It asks nothing. It only invites. Having been struck, a person then wants to know what is Good, and finally what is True.</p>
<p>It is the Fra Angelico strategy. Paint well enough and the preaching is done.</p>`,
 src:"Robert Barron, Catholicism (Word on Fire, 2011)",
 title_pt:"A Estratégia da Beleza · Barron",
 body_pt:`<p>Bispo Robert Barron: a Igreja tradicionalmente evangelizou na ordem Verdadeiro → Bom → Belo. Numa época cínica, essa ordem falha. Ninguém vai ouvir seu Verdadeiro; seu Bom soa julgador.</p>
<p>Inverta a ordem. Comece pela Beleza — Chartres, Mozart, Caravaggio, Dostoiévski, Vésperas bem cantadas. A beleza desarma. Nada pede. Apenas convida. Golpeado, o sujeito então quer saber o que é Bom e, por fim, o que é Verdadeiro.</p>
<p>É a estratégia de Fra Angelico. Pinte bem o bastante e a prédica está feita.</p>`,
 src_pt:"Robert Barron, Catolicismo (Word on Fire, 2011)"},

{slug:"t-fulton-sheen", type:"sententia", f:"T", title:"Sheen · Life Is Worth Living",
 body:`<blockquote>Hearing nuns' confessions is like being stoned to death with popcorn.<br>— Fulton Sheen</blockquote>
<p>Sheen could be deadly serious; he could also be the funniest churchman on American television for twenty years. The combination is not accident. It is the Catholic style.</p>`,
 src:"Fulton J. Sheen, Life Is Worth Living (DuMont, 1951–57)",
 title_pt:"Sheen · A Vida Vale a Pena",
 body_pt:`<blockquote>Ouvir a confissão de freiras é como morrer apedrejado por pipoca.<br>— Fulton Sheen</blockquote>
<p>Sheen podia ser mortalmente sério; podia também ser o clérigo mais divertido da televisão americana por vinte anos. A combinação não é acidente. É o estilo católico.</p>`,
 src_pt:"Fulton J. Sheen, Life Is Worth Living (DuMont, 1951–57)"},

{slug:"t-everlasting-man", type:"lectio", f:"T", title:"Chesterton's Cave",
 body:`<p>Chesterton: before Christmas, imagine standing outside Bethlehem on an ordinary night in some year of the reign of Augustus. There is a cave used for livestock. In the cave is a carpenter, his very young wife, and her first child, newly born on straw.</p>
<p>Nothing visible marks this as the hinge of history. But Chesterton insists: it is the moment when a God who had been very far off entered the smallest and dirtiest and most private corner of the world. The entire shape of Christianity — its love of the particular, its distrust of the merely large — begins here.</p>
<p>"Men learned, with a shock, that God was more mysterious when seen than when unseen."</p>`,
 src:"G. K. Chesterton, The Everlasting Man (1925), Part II, ch. I",
 title_pt:"A Caverna de Chesterton",
 body_pt:`<p>Chesterton: antes do Natal, imagine-se fora de Belém numa noite ordinária em algum ano do reinado de Augusto. Há uma caverna de pastoreio. Na caverna estão um carpinteiro, sua jovem esposa e o primeiro filho dela, recém-nascido na palha.</p>
<p>Nada visível assinala este momento como o eixo da história. Mas Chesterton insiste: é o instante em que um Deus até então muito distante entrou no mais pequeno, no mais sujo e no mais privado canto do mundo. Toda a forma do cristianismo — seu amor ao particular, sua desconfiança do meramente grande — começa aqui.</p>
<p>"Os homens aprenderam, com choque, que Deus é mais misterioso visto do que oculto."</p>`,
 src_pt:"G. K. Chesterton, O Homem Eterno (1925), Parte II, cap. I"},

{slug:"t-pelagius", type:"lectio", f:"T", title:"Pelagius · The Heresy of Trying Harder",
 body:`<p>In the 400s, a British monk named Pelagius taught in Rome: man can, by his own natural powers, keep God's commandments and achieve salvation. Original sin is a bad example from Adam, not an inherited corruption. Grace is helpful but not strictly necessary.</p>
<p>Augustine spent twenty years refuting him. His counter: without grace, the will is simultaneously free and bound — free from external coercion, bound by disordered loves that only grace can realign. The condemned Pelagian error survives, perennially, in modern self-help, moralistic preaching, and the Victorian creed of trying harder.</p>
<p>Keep the test. Any gospel in which your effort is the first mover is Pelagian. It is also, measurably, more exhausting.</p>`,
 src:"Council of Carthage (418); Augustine, De gratia et libero arbitrio",
 title_pt:"Pelágio · A Heresia de Se Esforçar Mais",
 body_pt:`<p>Nos anos 400, um monge britânico chamado Pelágio ensinava em Roma: o homem pode, pelas suas próprias forças naturais, guardar os mandamentos de Deus e obter a salvação. O pecado original é mau exemplo de Adão, não corrupção herdada. A graça ajuda, mas não é estritamente necessária.</p>
<p>Agostinho passou vinte anos refutando-o. Sua contrapartida: sem a graça, a vontade é ao mesmo tempo livre e amarrada — livre de coerção externa, amarrada por amores desordenados que só a graça pode realinhar. O erro pelagiano, condenado, sobrevive, perenemente, no self-help moderno, na pregação moralista e no credo vitoriano de se esforçar mais.</p>
<p>Guarde o teste. Qualquer evangelho em que seu esforço seja o primeiro motor é pelagiano. Também é, mensuravelmente, mais cansativo.</p>`,
 src_pt:"Concílio de Cartago (418); Agostinho, De gratia et libero arbitrio"},

{slug:"t-tolkien-fairy", type:"lectio", f:"T", title:"Tolkien · The True Myth",
 body:`<p>Autumn 1931. Oxford, Addison's Walk. Lewis the atheist is being shown the door by two Catholics named Tolkien and Dyson. Lewis's defense: myths are "lies, even though lies breathed through silver."</p>
<p>Tolkien's reply: no, myths are not lies. They are glimmers of a truth all cultures reach for because the truth exists. Christianity is unique because in it the myth entered history. "The Gospels contain a fairy-story, or a story of a larger kind which embraces all the essence of fairy-stories… this story has entered History."</p>
<p>Twelve days later, Lewis was a Christian.</p>`,
 src:"J. R. R. Tolkien, 'On Fairy-Stories' (1947); Lewis's diary, Sept 1931",
 title_pt:"Tolkien · O Mito Verdadeiro",
 body_pt:`<p>Outono de 1931. Oxford, Addison's Walk. Lewis, o ateu, está sendo levado à porta por dois católicos chamados Tolkien e Dyson. Defesa de Lewis: os mitos são "mentiras, ainda que mentiras sopradas em prata".</p>
<p>Resposta de Tolkien: não, os mitos não são mentiras. São lampejos de uma verdade que todas as culturas procuram porque a verdade existe. O cristianismo é único porque nele o mito entrou na história. "Os Evangelhos contêm uma história-de-fadas, ou uma história de maior porte que abarca toda a essência das histórias-de-fadas… esta história entrou na História."</p>
<p>Doze dias depois, Lewis era cristão.</p>`,
 src_pt:"J. R. R. Tolkien, 'On Fairy-Stories' (1947); diário de Lewis, set. 1931"},

{slug:"t-dawson-monk", type:"lectio", f:"T", title:"Dawson · The Seed Bank",
 body:`<p>Christopher Dawson's claim, often repeated and rarely absorbed: when Rome collapsed, every scrap of Western civilization that survived did so because a monk copied it. Monasteries were the seed-banks of a culture that no longer had cities.</p>
<p>Not just scripture. Virgil, Ovid, Cicero, Augustine, agricultural manuals, music notation (invented at Solesmes-adjacent abbeys), medicine, legal texts. By the ninth century, a Carolingian renaissance was possible only because 300 years of men in habits had kept the books alive in cold stone rooms, chapter by chapter.</p>
<p>The lesson is practical: it is a copying order, not an argument, that preserves a civilization through its night.</p>`,
 src:"Christopher Dawson, Religion and the Rise of Western Culture (1950)",
 title_pt:"Dawson · O Banco de Sementes",
 body_pt:`<p>A tese de Christopher Dawson, repetida e raramente assimilada: quando Roma caiu, cada farrapo da civilização ocidental que sobreviveu o fez porque um monge o copiou. Mosteiros foram os bancos de sementes de uma cultura que já não tinha cidades.</p>
<p>Não só a Escritura. Virgílio, Ovídio, Cícero, Agostinho, manuais agrícolas, notação musical (inventada em abadias próximas de Solesmes), medicina, textos jurídicos. No séc. IX, um renascimento carolíngio só foi possível porque 300 anos de homens de hábito mantiveram os livros vivos em frios aposentos de pedra, capítulo a capítulo.</p>
<p>A lição é prática: é uma ordem copista, não um argumento, que preserva uma civilização pela sua noite.</p>`,
 src_pt:"Christopher Dawson, A Religião e o Surgimento da Cultura Ocidental (1950)"},

{slug:"t-pope-infallible", type:"lectio", f:"T", title:"What Papal Infallibility Isn't",
 body:`<p>Protestant and secular caricature: Catholics believe the Pope is always right. He never sins; whatever he says is law.</p>
<p>Catholic doctrine, Vatican I (1870): the Pope is preserved from error only when (1) he speaks <em>ex cathedra</em>, (2) on matters of faith or morals, (3) with explicit intention to bind the universal Church. In 150+ years since the definition, this has been invoked once — the Assumption of Mary, 1950. Everything else a pope says, every encyclical, interview, tweet, airplane remark, falls short of that bar.</p>
<p>A pope can be a bad man, a bad theologian in his private views, and still, when the three conditions converge, be prevented by the Holy Spirit from binding the Church to an error. That is the claim.</p>`,
 src:"First Vatican Council, Pastor Aeternus (1870); Munificentissimus Deus (1950)",
 title_pt:"O Que a Infalibilidade Papal Não É",
 body_pt:`<p>Caricatura protestante e secular: os católicos acreditam que o Papa está sempre certo. Nunca peca; o que diz é lei.</p>
<p>Doutrina católica, Vaticano I (1870): o Papa é preservado de erro apenas quando (1) fala <em>ex cathedra</em>, (2) sobre matérias de fé ou moral, (3) com intenção explícita de obrigar a Igreja universal. Em 150+ anos desde a definição, isso foi invocado uma única vez — a Assunção de Maria, 1950. Tudo mais que o papa diz — encíclicas, entrevistas, tuítes, comentários em aviões — fica aquém dessa barra.</p>
<p>Um papa pode ser homem mau, teólogo medíocre em suas opiniões privadas, e ainda assim, quando as três condições convergem, ser impedido pelo Espírito Santo de obrigar a Igreja a um erro. Esta é a tese.</p>`,
 src_pt:"Primeiro Concílio do Vaticano, Pastor Aeternus (1870); Munificentissimus Deus (1950)"},

// === NEW LUDUS MODES — one of each in Theologia ===
{slug:"lu-theo-veritas", type:"ludus", mode:"veritas", f:"T", rare:1,
 title:"Ludus · Real Quote or Clever Fake?",
 body:`<p>One of these is Chesterton's actual sentence. The other is a plausible forgery. Tap the real one.</p>`,
 twins:[
   {real:"The Christian ideal has not been tried and found wanting; it has been found difficult and left untried.",
    fake:"The Christian life has not failed; the Christians have failed to live it fully.",
    src:"G. K. Chesterton, What's Wrong with the World (1910), Part I.V"}
 ],
 src:"Veritas · Chesterton",
 title_pt:"Ludus · Citação Verdadeira ou Falsa Hábil?",
 body_pt:`<p>Uma destas é a frase real de Chesterton. A outra é uma falsificação plausível. Toque na verdadeira.</p>`,
 twins_pt:[
   {real:"O ideal cristão não foi tentado e achado insuficiente; foi achado difícil e deixado sem tentativa.",
    fake:"A vida cristã não falhou; os cristãos é que não a viveram plenamente.",
    src:"G. K. Chesterton, O Que Há de Errado com o Mundo (1910)"}
 ],
 src_pt:"Veritas · Chesterton"},

{slug:"lu-theo-attributio", type:"ludus", mode:"attributio", f:"T",
 title:"Ludus · Augustine or Aquinas?",
 body:`<p>Five lines. Each is either Augustine (354–430) or Aquinas (1225–1274). Swipe through and attribute each.</p>`,
 authors:["Augustine","Aquinas"],
 quotes:[
   {q:"Our hearts are restless until they rest in Thee.", a:"Augustine"},
   {q:"Grace does not destroy nature but perfects it.", a:"Aquinas"},
   {q:"Late have I loved Thee, Beauty ever ancient, ever new.", a:"Augustine"},
   {q:"Every agent acts for an end.", a:"Aquinas"},
   {q:"To fall in love with God is the greatest of all romances; to seek Him the greatest adventure.", a:"Augustine"}
 ],
 src:"Attributio · Theologia · Augustine vs Aquinas",
 title_pt:"Ludus · Agostinho ou Aquino?",
 body_pt:`<p>Cinco frases. Cada uma é de Agostinho (354–430) ou Aquino (1225–1274). Deslize e atribua cada uma.</p>`,
 authors_pt:["Agostinho","Aquino"],
 quotes_pt:[
   {q:"Inquieto está o nosso coração até que repouse em Ti.", a:"Agostinho"},
   {q:"A graça não destrói a natureza, mas a aperfeiçoa.", a:"Aquino"},
   {q:"Tarde Te amei, Beleza tão antiga e tão nova.", a:"Agostinho"},
   {q:"Todo agente age por um fim.", a:"Aquino"},
   {q:"Apaixonar-se por Deus é o maior dos romances; buscá-lo, a maior aventura.", a:"Agostinho"}
 ],
 src_pt:"Attributio · Theologia · Agostinho vs Aquino"},

{slug:"lu-theo-complementum", type:"ludus", mode:"complementum", f:"T",
 title:"Ludus · Fill the Keystone",
 body:`<p>Eliot's four lines, with one word removed. Choose the word the poet actually wrote.</p>`,
 fills:[{
   before:"The last temptation is the greatest treason: to do the right deed for the",
   after:"reason.",
   correct:"wrong",
   opts:["wrong","cheap","public","easy"],
   src:"T. S. Eliot, Murder in the Cathedral (1935)"
 }],
 src:"Complementum · Eliot",
 title_pt:"Ludus · Preencha a Pedra Angular",
 body_pt:`<p>Quatro versos de Eliot, com uma palavra removida. Escolha a palavra que o poeta de fato escreveu.</p>`,
 fills_pt:[{
   before:"A última tentação é a maior traição: fazer a coisa certa pela razão",
   after:".",
   correct:"errada",
   opts:["errada","barata","pública","fácil"],
   src:"T. S. Eliot, Assassinato na Catedral (1935)"
 }],
 src_pt:"Complementum · Eliot"}

];
FOLIOS.push(...THEOLOGIA_X);

// ================================================================
// WAVE 2 — PHILOSOPHIA EXPANSION
// Target: +37 F folios. Bilingual.
// Sources: argument_from_derivative_existence, forbidden_symmetry,
// the_demolition, the-forgotten-quarrel, ALL_ARgUMENTS,
// Plato, Aristotle, MacIntyre, Anscombe, Wittgenstein, Pascal,
// Kierkegaard, Boethius, Dostoevsky, Scheler, Gilson, Feser.
// ================================================================
const PHILOSOPHIA_X = [
{slug:"f-cave", type:"lectio", f:"F", title:"The Cave",
 body:`<p>Prisoners in a cave have seen only shadows on a wall. One is released, dragged up the sunlit path, blinded, and at last sees the real things. He returns to tell the others. They do not believe him. They kill him.</p>
<p>Plato is not writing a parable about education. He is writing a parable about the political consequences of education. The city will not thank the philosopher. The philosopher owes it the truth anyway.</p>
<p>Note what the shadows are made of in the allegory: artifacts, held up by puppeteers, between a fire and the wall. The images that control a public are always made by someone. The question is who.</p>`,
 src:"Plato, Republic VII (514a–520a)",
 title_pt:"A Caverna",
 body_pt:`<p>Prisioneiros numa caverna viram apenas sombras numa parede. Um é liberto, arrastado pelo caminho iluminado, cega-se, e enfim vê as coisas reais. Volta para contar aos outros. Eles não acreditam. Matam-no.</p>
<p>Platão não escreve uma parábola sobre a educação. Escreve uma parábola sobre as consequências políticas da educação. A cidade não agradecerá ao filósofo. O filósofo lhe deve a verdade mesmo assim.</p>
<p>Note do que são feitas as sombras na alegoria: artefatos, erguidos por fantoches, entre um fogo e a parede. As imagens que controlam o público são sempre feitas por alguém. A pergunta é por quem.</p>`,
 src_pt:"Platão, República VII (514a–520a)"},

{slug:"f-apology", type:"lectio", f:"F", title:"The Unexamined Life",
 body:`<p>Athens, 399 BC. Socrates faces the jury that will kill him. Offered banishment, he refuses. Offered a quiet exile from philosophy, he refuses.</p>
<p>"The unexamined life is not worth living for a human being." Not: an unexamined life is uncomfortable. Not: a bad choice. He is saying the examined life is the specific difference of a human being. To skip it is not to live a merely diminished life; it is not to live a specifically human one.</p>
<p>Then he drinks the cup, so you know he meant it.</p>`,
 src:"Plato, Apology 38a",
 title_pt:"A Vida Não Examinada",
 body_pt:`<p>Atenas, 399 a.C. Sócrates diante do júri que o matará. Oferecida a banição, recusa. Oferecida uma vida de exílio sem filosofia, recusa.</p>
<p>"A vida não examinada não vale a pena para um ser humano." Não: a vida não examinada é desconfortável. Não: é má escolha. Está dizendo que a vida examinada é a diferença específica do ser humano. Pulá-la não é viver uma vida apenas diminuída; é não viver uma vida especificamente humana.</p>
<p>Depois bebe a taça, para você saber que falava sério.</p>`,
 src_pt:"Platão, Apologia 38a"},

{slug:"f-ethics-mean", type:"lectio", f:"F", title:"Virtue as a Mean",
 body:`<p>Aristotle's trick for every virtue: find the two vices on either side.</p>
<p>Courage sits between cowardice (too little confidence) and rashness (too much). Generosity sits between stinginess and prodigality. Pride (the good kind) sits between cowardly humility and vanity. The mean is not the arithmetic middle. It is the right amount, at the right time, for the right reason, to the right person — which varies by situation and demands practical judgment, not a formula.</p>
<p>Virtue is a habit, not a decision. You acquire it by repeating the right act until your soul no longer notices itself choosing it.</p>`,
 src:"Aristotle, Nicomachean Ethics II",
 title_pt:"Virtude como Meio",
 body_pt:`<p>O truque de Aristóteles para cada virtude: ache os dois vícios de cada lado.</p>
<p>A coragem está entre a covardia (confiança de menos) e a temeridade (confiança demais). A generosidade entre a avareza e a prodigalidade. O orgulho (o bom) entre a humilhação covarde e a vaidade. O meio não é o ponto médio aritmético. É a quantidade certa, no tempo certo, pela razão certa, à pessoa certa — o que varia conforme a situação e exige juízo prático, não fórmula.</p>
<p>A virtude é hábito, não decisão. Você a adquire repetindo o ato certo até que sua alma deixe de perceber que o escolhe.</p>`,
 src_pt:"Aristóteles, Ética a Nicômaco II"},

{slug:"f-prime-matter", type:"lectio", f:"F", title:"Prime Matter",
 body:`<p>Hylomorphism, Aristotle's second huge move: every physical thing is <em>form</em> and <em>matter</em>. The form is what it is (horse, bronze, water). The matter is what it is made of (flesh, metal, molecules).</p>
<p>At the limit, drop form after form, and you reach pure potentiality — <em>prime matter</em>, pure receptivity, no actual properties until a form inform it. It isn't a thing you can point at; it is the metaphysical "clay" required for change.</p>
<p>Why this matters: contemporary physics' "quantum fields" or "pure energy" are not causes of their own concrete expressions. They are perfectly compatible with the hylomorphic picture, and arguably require it. The ancients left you a working metaphysics the physicists have not retired.</p>`,
 src:"Aristotle, Physics I.7–9; Aquinas, De principiis naturae",
 title_pt:"Matéria Prima",
 body_pt:`<p>Hilemorfismo, o segundo grande movimento de Aristóteles: toda coisa física é <em>forma</em> e <em>matéria</em>. A forma é o que ela é (cavalo, bronze, água). A matéria é aquilo de que é feita (carne, metal, moléculas).</p>
<p>No limite, retire forma atrás de forma, e você chega à potencialidade pura — <em>matéria prima</em>, pura receptividade, sem propriedades atuais até que uma forma a informe. Não é algo que se possa apontar; é o "barro" metafísico exigido para a mudança.</p>
<p>Por que importa: os "campos quânticos" ou a "energia pura" da física contemporânea não são causas das suas próprias expressões concretas. São perfeitamente compatíveis com o quadro hilemórfico, e, discutivelmente, exigem-no. Os antigos lhe deixaram uma metafísica em funcionamento que os físicos não aposentaram.</p>`,
 src_pt:"Aristóteles, Física I.7–9; Aquino, De principiis naturae"},

{slug:"f-derivative-existence", type:"lectio", f:"F", title:"The Argument From Derivative Existence",
 body:`<p>Simple syllogism in three steps.</p>
<p>(1) Nothing can be the cause of its own existence; to cause itself, it would have to be before it was. (2) Yet things exist. Not just in the past — now. (3) Therefore the existence of every contingent thing is received from something else, right now, holding it in being.</p>
<p>Follow the chain. Each receiver must also be a receiver, or the chain terminates in a thing whose existence is <em>not</em> received — a thing whose essence is to exist. That thing cannot be another contingent, cannot be matter, cannot be the universe (which is the chain, not the ground). It is what classical theism calls God.</p>
<p>The argument is not from design or from first-moment, so no appeal to physics evades it. It cuts across every scientific finding.</p>`,
 src:"after Aquinas, De Ente et Essentia; Marcos Nabhan, Argument from Derivative Existence",
 title_pt:"O Argumento a Partir da Existência Derivada",
 body_pt:`<p>Silogismo simples em três passos.</p>
<p>(1) Nada pode ser causa da própria existência; para causar-se, teria de existir antes de existir. (2) Entretanto, coisas existem. Não só no passado — agora. (3) Portanto, a existência de toda coisa contingente é recebida de algo diverso, neste exato momento, que a mantém no ser.</p>
<p>Siga a cadeia. Cada recebedor também é recebedor, ou a cadeia termina numa coisa cuja existência <em>não</em> é recebida — uma coisa cuja essência é existir. Essa coisa não pode ser outra contingência, não pode ser a matéria, não pode ser o universo (que é a cadeia, não o fundamento). É o que o teísmo clássico chama Deus.</p>
<p>O argumento não é por desenho ou por primeiro-momento, de modo que nenhum apelo à física o evita. Ele atravessa todo achado científico.</p>`,
 src_pt:"segundo Aquino, De Ente et Essentia; Marcos Nabhan, Argumento a Partir da Existência Derivada"},

{slug:"f-forbidden-symmetry", type:"lectio", f:"F", rare:1, title:"The Forbidden Symmetry",
 body:`<p>A thought experiment. Suppose, as modern physics suggests, time's arrow is a feature of entropy, not fundamental. Why, then, is the past fixed and the future open?</p>
<p>Answer: because being and non-being are not symmetric. What has existed <em>had</em> actuality; what will not yet exist has only potentiality, and potentiality cannot ground itself. The symmetry is forbidden because non-being cannot pull a mirror out of nothing.</p>
<p>This small-looking observation underwrites every rational conviction you have about causation, memory, and responsibility. Erase it, and the future is not merely uncertain — the past is not merely over. Keep it, and the asymmetry is the first signpost of a cosmos that bears a direction.</p>`,
 src:"Marcos Nabhan, Forbidden Symmetry essay",
 title_pt:"A Simetria Proibida",
 body_pt:`<p>Experiência de pensamento. Suponha, como sugere a física moderna, que a seta do tempo seja uma propriedade da entropia, não fundamental. Por que, então, o passado é fixo e o futuro é aberto?</p>
<p>Resposta: porque ser e não-ser não são simétricos. O que existiu <em>teve</em> atualidade; o que ainda não existe tem só potencialidade, e a potencialidade não se fundamenta a si mesma. A simetria é proibida porque o não-ser não pode puxar um espelho do nada.</p>
<p>Esta observação, de aparência modesta, sustenta toda convicção racional sua sobre causação, memória e responsabilidade. Apague-a: o futuro não é só incerto — o passado não é só passado. Guarde-a: a assimetria é o primeiro marco de um cosmos com direção.</p>`,
 src_pt:"Marcos Nabhan, ensaio A Simetria Proibida"},

{slug:"f-demolition", type:"lectio", f:"F", title:"The Demolition",
 body:`<p>Observe a demolition. The ball swings, the facade falls. Each stone's fall is caused by the ball. The ball's swing is caused by the operator. The operator was hired by the city, which has a plan.</p>
<p>Reverse the gaze. If every cause we can see is itself caused by another cause we can see, and we never meet a terminus, we have not explained anything. We have merely moved the mystery one address down the street.</p>
<p>The demolition analogy makes the regress visible: an infinite horizontal chain of causes with no vertical source cannot account for one stone's fall. There must be an uncaused cause not in the chain, holding the whole business up. The argument that looks ancient is doing modern work.</p>`,
 src:"Marcos Nabhan, The Demolition essay",
 title_pt:"A Demolição",
 body_pt:`<p>Observe uma demolição. A bola oscila, a fachada cai. A queda de cada pedra é causada pela bola. A oscilação da bola é causada pelo operador. O operador foi contratado pela cidade, que tem um plano.</p>
<p>Inverta o olhar. Se toda causa que vemos é causada por outra causa que vemos, e nunca encontramos um termo, não explicamos nada. Apenas mudamos o mistério uma quadra adiante.</p>
<p>A analogia da demolição torna visível a regressão: uma cadeia horizontal infinita de causas, sem fonte vertical, não dá conta da queda de uma única pedra. Deve haver uma causa não causada fora da cadeia, segurando todo o negócio. O argumento que parece antigo faz trabalho moderno.</p>`,
 src_pt:"Marcos Nabhan, ensaio A Demolição"},

{slug:"f-forgotten-quarrel", type:"lectio", f:"F", title:"The Forgotten Quarrel",
 body:`<p>Modern philosophy is the record of a quarrel it no longer remembers starting. Descartes tried to find a floor beneath skepticism and ended up locking the mind inside itself. Kant tried to rescue him and ended up calling the real world "noumenal" — unknowable.</p>
<p>What vanished in the two moves: the Aristotelian confidence that the intellect reaches the thing. Reach, not infer. The mind is not building models of a reality it cannot touch; it is receiving the forms of things that are. Reject that, and you spend four centuries in epistemology trying to earn back a window the ancients already had open.</p>
<p>The quarrel is forgotten because the losers write no textbooks.</p>`,
 src:"after E. Gilson; Marcos Nabhan, The Forgotten Quarrel essay",
 title_pt:"A Querela Esquecida",
 body_pt:`<p>A filosofia moderna é o registro de uma querela cujo início já não recorda. Descartes tentou achar chão abaixo do ceticismo e acabou trancando a mente em si mesma. Kant tentou resgatá-lo e acabou chamando o mundo real de "numenal" — incognoscível.</p>
<p>O que desapareceu nos dois movimentos: a confiança aristotélica de que o intelecto alcança a coisa. Alcança, não infere. A mente não constrói modelos de uma realidade intocável; recebe as formas das coisas que são. Rejeite isso, e você passa quatro séculos em epistemologia tentando reconquistar uma janela que os antigos já tinham aberta.</p>
<p>A querela é esquecida porque os derrotados não escrevem manuais.</p>`,
 src_pt:"segundo E. Gilson; Marcos Nabhan, ensaio A Querela Esquecida"},

{slug:"f-cogito", type:"quaestio", f:"F", title:"Descartes · Cogito's Limit",
 body:`<p>"I think, therefore I am." Give the sharpest objection to this as the foundation of philosophy.</p>`,
 opts:[
   "It assumes an 'I' already — begging the question",
   "Thinking might be an illusion",
   "It cannot prove the existence of other minds"
 ],
 correct:0,
 reveal:`<p>Lichtenberg nailed it: Descartes is entitled only to "there is thinking." The leap to "I am" smuggles a substantial self into a conclusion the premise did not warrant. The fortress built on the <em>cogito</em> sits on a crack it never sealed.</p>
<p>The deeper problem is that Descartes started by doubting things he should not have doubted (external bodies, the memory of the proof's earlier steps) in order to isolate a certainty that then had to buy them back. The ancients bought nothing back because they never sold anything.</p>`,
 src:"after Lichtenberg; Marcos Nabhan, All Arguments",
 title_pt:"Descartes · O Limite do Cogito",
 body_pt:`<p>"Penso, logo existo." Dê a objeção mais aguda a isto como fundamento da filosofia.</p>`,
 opts_pt:[
   "Pressupõe um 'eu' — pergunta em questão",
   "Pensar pode ser ilusão",
   "Não prova a existência de outras mentes"
 ],
 reveal_pt:`<p>Lichtenberg acertou: Descartes só tem direito a "há pensamento". O salto para "eu existo" contrabandeia um eu substancial numa conclusão não autorizada pela premissa. A fortaleza erigida sobre o <em>cogito</em> está sentada numa rachadura que nunca selou.</p>
<p>O problema mais fundo é que Descartes começou duvidando do que não devia (corpos externos, a memória dos passos anteriores da prova) para isolar uma certeza que teria depois de recomprá-los. Os antigos nada recompraram porque nada haviam vendido.</p>`,
 src_pt:"segundo Lichtenberg; Marcos Nabhan, All Arguments"},

{slug:"f-humes-fork", type:"lectio", f:"F", title:"Hume's Fork",
 body:`<p>David Hume divided all meaningful statements into two kinds: <em>relations of ideas</em> (math, logic — true by definition) and <em>matters of fact</em> (empirical, provable by observation). Anything else — metaphysics, theology, ethical realism — "commit it then to the flames: for it can contain nothing but sophistry and illusion."</p>
<p>Observe the self-refutation. Which kind of statement is Hume's own fork? It isn't true by definition. It isn't an empirical observation. So, by its own rule, it belongs in the fire.</p>
<p>Positivism in every century repeats the same error. The confident young man announces that only the empirically testable is meaningful. He waits for applause and gets a question: is that principle empirically testable?</p>`,
 src:"David Hume, Enquiry Concerning Human Understanding (1748), XII.3",
 title_pt:"A Forquilha de Hume",
 body_pt:`<p>David Hume dividiu toda frase com sentido em dois tipos: <em>relações de ideias</em> (matemática, lógica — verdadeiras por definição) e <em>questões de fato</em> (empíricas, prováveis por observação). Qualquer outra coisa — metafísica, teologia, realismo ético — "entregue-a então às chamas: pois não contém senão sofisma e ilusão".</p>
<p>Note a autorrefutação. A que tipo pertence a própria forquilha de Hume? Não é verdadeira por definição. Não é observação empírica. Portanto, pela sua regra, vai ao fogo.</p>
<p>O positivismo, em todo século, repete o mesmo erro. O jovem seguro anuncia que só o empiricamente testável tem sentido. Espera o aplauso e recebe uma pergunta: é esse princípio empiricamente testável?</p>`,
 src_pt:"David Hume, Investigação sobre o Entendimento Humano (1748), XII.3"},

{slug:"f-kant-noumena", type:"lectio", f:"F", title:"Kant · The Wall",
 body:`<p>Kant tried to save knowledge from Hume by moving the game indoors. The categories of thought (space, time, causation) are not features of the world; they are features of the mind. We know the world <em>as it appears</em>, never <em>as it is in itself</em>.</p>
<p>The move rescues science, as Kant intended. It also walls off the real. The thing-in-itself (<em>Ding an sich</em>) becomes a ghost beyond the ghost's reach. Theology, ethics, personal identity all now have to live in the appearance house, with their landlord in another country.</p>
<p>Every subsequent German philosopher is answering Kant. Every subsequent Catholic metaphysician is refusing to answer Kant on his terms.</p>`,
 src:"Immanuel Kant, Critique of Pure Reason (1781)",
 title_pt:"Kant · O Muro",
 body_pt:`<p>Kant tentou salvar o conhecimento de Hume mudando o jogo para dentro. As categorias do pensamento (espaço, tempo, causalidade) não são traços do mundo; são traços da mente. Conhecemos o mundo <em>como aparece</em>, nunca <em>como é em si</em>.</p>
<p>O movimento salva a ciência, como Kant queria. Também isola o real. A coisa-em-si (<em>Ding an sich</em>) torna-se fantasma fora do alcance do fantasma. Teologia, ética, identidade pessoal — tudo passa a morar na casa das aparências, com o senhorio em outro país.</p>
<p>Todo filósofo alemão posterior responde a Kant. Todo metafísico católico posterior se recusa a responder a Kant nos termos de Kant.</p>`,
 src_pt:"Immanuel Kant, Crítica da Razão Pura (1781)"},

{slug:"f-nietzsche-dead", type:"lectio", f:"F", title:"Nietzsche · God Is Dead",
 body:`<p>The madman in the marketplace holds a lantern at noon. "I seek God!" The passers-by laugh. He turns on them: "God is dead. God remains dead. And we have killed him. How shall we comfort ourselves, the murderers of all murderers?"</p>
<p>Nietzsche is not an atheist cheering. He is a diagnostician reading the x-ray. Nineteenth-century Europe has lost God but has not yet grasped what losing God costs. The madman knows the funeral is still to come.</p>
<p>Read Nietzsche as a prophet against the cheap humanism of the postwar; read him as an invitation to see what you actually believe when the sky goes empty. Then put him down and read Dostoevsky.</p>`,
 src:"Friedrich Nietzsche, The Gay Science §125 (1882)",
 title_pt:"Nietzsche · Deus Está Morto",
 body_pt:`<p>O louco no mercado segura uma lanterna ao meio-dia. "Procuro Deus!" Os passantes riem. Ele se volta: "Deus está morto. Deus continua morto. E nós o matamos. Como nos consolaremos, assassinos de todos os assassinos?"</p>
<p>Nietzsche não é ateu em festa. É diagnosticador lendo a radiografia. A Europa do séc. XIX perdeu Deus mas ainda não entendeu o custo de perdê-lo. O louco sabe que o funeral ainda está por vir.</p>
<p>Leia Nietzsche como profeta contra o humanismo barato do pós-guerra; leia-o como convite a ver no que você de fato acredita quando o céu se esvazia. Depois pouse-o e leia Dostoiévski.</p>`,
 src_pt:"Friedrich Nietzsche, A Gaia Ciência §125 (1882)"},

{slug:"f-grand-inquisitor", type:"lectio", f:"F", rare:1, title:"The Grand Inquisitor",
 body:`<p>Dostoevsky's parable within <em>The Brothers Karamazov</em>: Christ returns to Seville in the sixteenth century and is arrested by the Grand Inquisitor. The Inquisitor's monologue is a speech given <em>to</em> Jesus by a man who has rejected him.</p>
<p>His accusation: by refusing to turn stones to bread, by refusing to leap from the Temple, by refusing the kingdoms of the world, Christ gave men a freedom they cannot bear. The Church has mercifully undone this. We give them bread. We give them mystery. We give them authority. We correct the mistake of your refusal.</p>
<p>Christ's reply is a kiss on the old man's lips. The Inquisitor shudders and opens the door. "Go," he says, "and come no more… do not come at all… never, never!" This is the central scene in modern literature on freedom.</p>`,
 src:"Fyodor Dostoevsky, The Brothers Karamazov, Book V, ch. 5 (1880)",
 title_pt:"O Grande Inquisidor",
 body_pt:`<p>A parábola dentro de <em>Os Irmãos Karamazov</em>: Cristo retorna a Sevilha no séc. XVI e é preso pelo Grande Inquisidor. O monólogo do Inquisidor é um discurso dirigido <em>a</em> Jesus por um homem que o rejeitou.</p>
<p>Sua acusação: ao recusar transformar pedras em pão, ao recusar lançar-se do Templo, ao recusar os reinos do mundo, Cristo deu aos homens uma liberdade que não suportam. A Igreja, por misericórdia, desfez isso. Damos-lhes pão. Damos-lhes mistério. Damos-lhes autoridade. Corrigimos o erro de sua recusa.</p>
<p>A resposta de Cristo é um beijo nos lábios do velho. O Inquisidor estremece e abre a porta. "Vai", diz, "e não voltes mais… não voltes nunca… nunca, nunca!" É a cena central da literatura moderna sobre a liberdade.</p>`,
 src_pt:"Fiódor Dostoiévski, Os Irmãos Karamázov, Livro V, cap. 5 (1880)"},

{slug:"f-boethius-wheel", type:"lectio", f:"F", title:"Boethius · Fortune's Wheel",
 body:`<p>Rome, 524 AD. Boethius, awaiting execution on a trumped-up treason charge, is visited in his cell by Lady Philosophy. Her lecture: you weep at your fall from favor, but what is favor? A gift from Fortune, and Fortune's whole business is turning.</p>
<p>"The wheel turns, and someone whom others climbed over is now climbed over by others." If you took Fortune's gifts as yours, you misread the loan agreement. The wise do not call Fortune cruel when she takes back what was never theirs; they call her consistent.</p>
<p>Then Boethius was tortured and killed. The book he wrote in prison was the most-read philosophy text in Europe for a thousand years.</p>`,
 src:"Boethius, De Consolatione Philosophiae II (524)",
 title_pt:"Boécio · A Roda da Fortuna",
 body_pt:`<p>Roma, 524 d.C. Boécio, à espera da execução por acusação armada de traição, é visitado na cela pela Dama Filosofia. A lição dela: choras tua queda do favor, mas o que é o favor? Dom da Fortuna, e todo o ofício da Fortuna é girar.</p>
<p>"A roda gira, e alguém sobre quem outros subiram é agora pisado por outros." Se tomaste os dons da Fortuna como teus, leste mal o contrato. O sábio não chama cruel a Fortuna quando ela retoma o que jamais foi seu; chama-a de coerente.</p>
<p>Em seguida Boécio foi torturado e morto. O livro que escreveu na prisão foi o mais lido texto filosófico da Europa por mil anos.</p>`,
 src_pt:"Boécio, De Consolatione Philosophiae II (524)"},

{slug:"f-kierkegaard-leap", type:"lectio", f:"F", title:"Kierkegaard's Leap",
 body:`<p>Kierkegaard did not say "take a leap of faith" the way everyone quotes him. His argument is subtler. The decisive choices — to marry, to believe, to stake a life — are not reached by extending prior reasoning. You cannot calculate your way across the gap.</p>
<p>Three stages of life: the aesthetic (lived for pleasure), the ethical (lived for duty), the religious (lived in direct relation to God). The move between stages is not a conclusion; it is a <em>leap</em>, a self-wagering in uncertainty.</p>
<p>Observe that this is not irrationalism. It is honesty about where reason stops and choice begins. Reason brings you to the water's edge. It will not push you across.</p>`,
 src:"Søren Kierkegaard, Either/Or (1843); Concluding Unscientific Postscript (1846)",
 title_pt:"O Salto de Kierkegaard",
 body_pt:`<p>Kierkegaard não disse "dê um salto de fé" como todo mundo o cita. Seu argumento é mais sutil. As escolhas decisivas — casar, crer, apostar a vida — não se alcançam estendendo o raciocínio anterior. Você não calcula seu caminho sobre o abismo.</p>
<p>Três estágios da vida: o estético (vivido para o prazer), o ético (vivido para o dever), o religioso (vivido em relação direta com Deus). A passagem entre estágios não é conclusão; é um <em>salto</em>, uma autoaposta na incerteza.</p>
<p>Note que isto não é irracionalismo. É honestidade sobre onde a razão termina e a escolha começa. A razão te leva à margem da água. Não te empurra para o outro lado.</p>`,
 src_pt:"Søren Kierkegaard, Ou — Ou (1843); Pós-Escrito Conclusivo Não Científico (1846)"},

{slug:"f-tractatus-7", type:"sententia", f:"F", title:"Wittgenstein · 7",
 body:`<blockquote>Wovon man nicht sprechen kann, darüber muß man schweigen.<br><em>Whereof one cannot speak, thereof one must be silent.</em></blockquote>
<p>The last line of the <em>Tractatus</em>. Wittgenstein did not mean mysticism was nonsense; he meant speaking about it in propositional form was. The things most worth living for — ethics, beauty, God — are not sayable truths. They are shown by the shape of a life.</p>`,
 src:"Ludwig Wittgenstein, Tractatus Logico-Philosophicus §7 (1921)",
 title_pt:"Wittgenstein · 7",
 body_pt:`<blockquote>Wovon man nicht sprechen kann, darüber muß man schweigen.<br><em>Daquilo de que não se pode falar, deve-se calar.</em></blockquote>
<p>A última linha do <em>Tractatus</em>. Wittgenstein não disse que o místico era disparate; disse que falar dele em forma proposicional é disparate. O que vale a vida — ética, beleza, Deus — não é verdade dizível. Mostra-se pela forma de uma vida.</p>`,
 src_pt:"Ludwig Wittgenstein, Tractatus Logico-Philosophicus §7 (1921)"},

{slug:"f-wittgenstein-games", type:"lectio", f:"F", title:"Family Resemblance",
 body:`<p>Wittgenstein the second time, in the <em>Investigations</em>, flipped his first philosophy. What makes something a "game"? Any single feature you propose — rules, competition, winning, enjoyment — fits some games and not others. Chess is competitive; ring-around-the-rosie is not. Solitaire has no opponent; charades has no rules worth stating.</p>
<p>His solution: a <em>family resemblance</em>. Games are related the way members of a family are. No single feature all share; overlapping similarities instead. The concept has fuzzy edges by design.</p>
<p>Half of philosophy — "What is justice?" "What is art?" "What is religion?" — misreads this and demands a definition where family resemblance is all the subject can bear. Clarity is not always the giving of boundaries; sometimes it is the honest naming of their absence.</p>`,
 src:"Ludwig Wittgenstein, Philosophical Investigations §§66–71 (1953)",
 title_pt:"Semelhança de Família",
 body_pt:`<p>O segundo Wittgenstein, nas <em>Investigações</em>, inverteu sua primeira filosofia. O que faz de algo um "jogo"? Qualquer traço único que você proponha — regras, competição, vencer, divertir — serve para alguns jogos e não para outros. O xadrez é competitivo; a ciranda não. A paciência não tem adversário; a mímica não tem regras dignas de nota.</p>
<p>A solução dele: <em>semelhança de família</em>. Jogos se parecem como membros de uma família se parecem. Nenhum traço único a todos; semelhanças sobrepostas. O conceito tem bordas difusas por desígnio.</p>
<p>Metade da filosofia — "O que é justiça?" "O que é arte?" "O que é religião?" — lê isso errado e exige definição onde a semelhança de família é tudo o que o assunto comporta. Clareza nem sempre é dar fronteiras; às vezes é nomear com honestidade sua ausência.</p>`,
 src_pt:"Ludwig Wittgenstein, Investigações Filosóficas §§66–71 (1953)"},

{slug:"f-wager-pascal", type:"lectio", f:"F", title:"Pascal · The Jansenist Mathematician",
 body:`<p>Pascal invented probability theory, built one of the first mechanical calculators, discovered atmospheric pressure, and died at 39 with a scrap of parchment sewn into his coat: "Fire. God of Abraham, God of Isaac, God of Jacob — not of the philosophers and scholars… Joy, joy, joy, tears of joy."</p>
<p>What killed him was not the mathematics. It was knowing both halves: that the universe is cold and large and silent, and that a particular Jewish rabbi died outside Jerusalem for a love he had no reason to want. Pascal's whole philosophy is the attempt to live inside both facts without flinching.</p>`,
 src:"Blaise Pascal, Pensées, posthumous memorial note (1654)",
 title_pt:"Pascal · O Matemático Jansenista",
 body_pt:`<p>Pascal inventou a teoria da probabilidade, construiu uma das primeiras calculadoras mecânicas, descobriu a pressão atmosférica e morreu aos 39 anos com um pedaço de pergaminho cosido no casaco: "Fogo. Deus de Abraão, Deus de Isaque, Deus de Jacó — não dos filósofos e dos sábios… Alegria, alegria, alegria, lágrimas de alegria".</p>
<p>O que o matou não foi a matemática. Foi saber as duas metades: que o universo é frio, grande e silencioso, e que um certo rabino judeu morreu fora de Jerusalém por um amor que ele não tinha razão de desejar. A filosofia inteira de Pascal é a tentativa de viver dentro dos dois fatos sem recuar.</p>`,
 src_pt:"Blaise Pascal, Pensées, memorial póstumo (1654)"},

{slug:"f-feser-aristotle", type:"lectio", f:"F", title:"Feser · The Last Superstition",
 body:`<p>Edward Feser's provocation: it is the <em>mechanistic</em> picture of nature, inherited from Descartes and Newton, that is actually superstitious — not the Aristotelian one it replaced.</p>
<p>Mechanism says: all natural things are inert pieces of matter in motion. Any apparent purpose is an illusion in the mind of the observer. Three centuries later, "function" quietly runs molecular biology. "Information" quietly runs genetics. Both are teleology smuggled back in while admitting nothing.</p>
<p>Feser's point: the Aristotelian framework was not refuted; it was abandoned for philosophical reasons, and now the sciences recreate it piecemeal because they cannot describe real nature without it. Pay the entrance fee or stop pretending.</p>`,
 src:"Edward Feser, The Last Superstition (2008)",
 title_pt:"Feser · A Última Superstição",
 body_pt:`<p>Provocação de Edward Feser: é a figura <em>mecanicista</em> da natureza, herdada de Descartes e Newton, que é de fato supersticiosa — não a aristotélica que ela substituiu.</p>
<p>Mecanicismo diz: todas as coisas naturais são pedaços inertes de matéria em movimento. Qualquer propósito aparente é ilusão na mente do observador. Três séculos depois, "função" governa silenciosamente a biologia molecular. "Informação" governa silenciosamente a genética. Ambas são teleologia contrabandeada de volta sem admitir.</p>
<p>Ponto de Feser: o quadro aristotélico não foi refutado; foi abandonado por razões filosóficas, e agora as ciências o recriam aos pedaços porque não descrevem a natureza real sem ele. Pague a entrada ou pare de fingir.</p>`,
 src_pt:"Edward Feser, The Last Superstition (2008)"},

{slug:"f-macintyre-emotivism", type:"lectio", f:"F", title:"MacIntyre · Emotivism",
 body:`<p>MacIntyre on modern moral argument: when you say "it is wrong to lie," everyone will nod. When you say "<em>why</em> it is wrong," you discover people disagree without any shared ground on which the disagreement could be settled.</p>
<p>His diagnosis: the Enlightenment project tried to justify morality without the teleological framework (man-as-he-is → man-as-he-could-be → the virtues) that classical and Christian ethics took for granted. Strip the frame and you keep the vocabulary. "Wrong" survives; the thing it meant does not. What remains is <em>emotivism</em>: moral statements are expressions of personal preference dressed in rational clothes.</p>
<p>You feel this already. The next time someone's argument ends in "well, that's just your opinion," you have witnessed MacIntyre's thesis in the wild.</p>`,
 src:"Alasdair MacIntyre, After Virtue (1981)",
 title_pt:"MacIntyre · Emotivismo",
 body_pt:`<p>MacIntyre sobre a argumentação moral moderna: quando você diz "é errado mentir", todos concordam. Quando você diz "<em>por que</em> é errado", descobre que as pessoas discordam sem terreno comum sobre o qual a discordância se decida.</p>
<p>Seu diagnóstico: o projeto iluminista tentou justificar a moral sem o quadro teleológico (homem-como-é → homem-como-poderia-ser → as virtudes) que a ética clássica e cristã tinham por garantido. Retire o quadro e você fica com o vocabulário. "Errado" sobrevive; a coisa que a palavra queria dizer, não. O que resta é <em>emotivismo</em>: enunciados morais são expressões de preferência pessoal vestidas de roupa racional.</p>
<p>Você já sente isso. Da próxima vez que o argumento de alguém terminar em "bom, é só sua opinião", você viu a tese de MacIntyre em estado natural.</p>`,
 src_pt:"Alasdair MacIntyre, Depois da Virtude (1981)"},

{slug:"f-love-scheler", type:"lectio", f:"F", title:"Scheler · The Order of Love",
 body:`<p>Max Scheler: tell me what a man loves, and in what order, and I will tell you who he is. Not his beliefs — his <em>ordo amoris</em>, the hierarchy of what moves him most.</p>
<p>The pathology of the modern soul is not that it loves nothing; it is that it loves everything in the wrong order. Comfort above craft. Pleasure above person. Image above truth. Fix the order and the soul reassembles itself.</p>
<p>Augustine said it first: a city is a people united by its loves. Choose the loves, and the city follows. Choose them well, and the city stands.</p>`,
 src:"Max Scheler, Ordo Amoris (c. 1916); Augustine, City of God XIX.24",
 title_pt:"Scheler · A Ordem do Amor",
 body_pt:`<p>Max Scheler: diga-me o que um homem ama, e em que ordem, e eu te direi quem ele é. Não as suas crenças — sua <em>ordo amoris</em>, a hierarquia do que mais o move.</p>
<p>A patologia da alma moderna não é não amar nada; é amar tudo na ordem errada. Conforto acima do ofício. Prazer acima da pessoa. Imagem acima da verdade. Acerte a ordem e a alma se recompõe.</p>
<p>Agostinho disse primeiro: uma cidade é um povo unido por seus amores. Escolha os amores, e a cidade segue. Escolha-os bem, e a cidade se mantém.</p>`,
 src_pt:"Max Scheler, Ordo Amoris (c. 1916); Agostinho, Cidade de Deus XIX.24"},

{slug:"f-stoic-dichotomy", type:"lectio", f:"F", title:"Epictetus · The Dichotomy of Control",
 body:`<p>Epictetus was a slave in Nero's Rome. He opens his <em>Enchiridion</em> with the sentence that keeps giving: "Some things are up to us and some are not. Up to us are opinion, impulse, desire, aversion, and in a word, whatever is our own doing. Not up to us are body, property, reputation, office, and in a word, whatever is not our own doing."</p>
<p>The point is pragmatic. Train your effort on the first set. Spend none on the second. The Stoic is not pretending he doesn't want health; he is refusing to let desire for it corrode what is in his power.</p>
<p>Marcus Aurelius, the emperor who read Epictetus every night, is the Stoic case for the thesis. He kept the ledger right until the end.</p>`,
 src:"Epictetus, Enchiridion §1 (c. 125 AD)",
 title_pt:"Epicteto · A Dicotomia do Controle",
 body_pt:`<p>Epicteto foi escravo na Roma de Nero. Abre seu <em>Enchiridion</em> com a frase que não para de render: "Algumas coisas dependem de nós e outras não. Dependem de nós a opinião, o impulso, o desejo, a aversão e, numa palavra, tudo o que é nosso ato. Não dependem de nós o corpo, a propriedade, a reputação, o cargo e, numa palavra, tudo o que não é nosso ato."</p>
<p>O ponto é pragmático. Treine seu esforço no primeiro conjunto. Não gaste nada no segundo. O estoico não finge que não quer saúde; recusa-se a deixar que o desejo dela corroa o que está em seu poder.</p>
<p>Marco Aurélio, o imperador que lia Epicteto toda noite, é o caso estoico da tese. Fez o balanço até o fim.</p>`,
 src_pt:"Epicteto, Enchiridion §1 (c. 125 d.C.)"},

{slug:"f-logic-barbara", type:"exercitium", f:"F", title:"The 24 Valid Moods",
 body:`<p>Of 256 possible syllogisms, only 24 are valid. The medievals named them with mnemonic vowels, A E I O.</p>
<p>Try the easiest: Barbara. All A are B. All B are C. Therefore ___? Fill it in. Then try the trickier: Celarent. No A are B. All C are A. Therefore ___?</p>`,
 reveal:`<p>Barbara: all A are C. If every philosopher is wise, and every Thomist is a philosopher, then every Thomist is wise.</p>
<p>Celarent: no C are B. If no cat is a dog, and all tabbies are cats, then no tabby is a dog. The names (BArbArA, cEIArEnt) hide the sentence form in their vowels. The medievals built this mnemonic because logic was a tool you had to carry in your head, not a textbook on a shelf.</p>`,
 src:"William of Sherwood (c. 1240); the scholastic mnemonic tradition",
 title_pt:"Os 24 Modos Válidos",
 body_pt:`<p>De 256 silogismos possíveis, só 24 são válidos. Os medievais lhes deram nomes-mnemônicos com vogais A E I O.</p>
<p>Experimente o mais fácil: Barbara. Todo A é B. Todo B é C. Portanto ___? Preencha. Depois o mais traiçoeiro: Celarent. Nenhum A é B. Todo C é A. Portanto ___?</p>`,
 reveal_pt:`<p>Barbara: todo A é C. Se todo filósofo é sábio, e todo tomista é filósofo, então todo tomista é sábio.</p>
<p>Celarent: nenhum C é B. Se nenhum gato é cão, e todo tabby é gato, então nenhum tabby é cão. Os nomes (BArbArA, cEIArEnt) escondem a forma da frase nas vogais. Os medievais construíram esta mnemônica porque a lógica era ferramenta a carregar na cabeça, não manual na prateleira.</p>`,
 src_pt:"William de Sherwood (c. 1240); tradição mnemônica escolástica"},

{slug:"f-is-ought", type:"quaestio", f:"F", title:"The Is–Ought Gap",
 body:`<p>Hume: no amount of descriptive statements ("X <em>is</em> the case") logically implies a prescriptive statement ("you <em>ought</em> to do Y"). Does the gap really hold?</p>`,
 opts:[
   "Yes — morality must come from somewhere other than facts",
   "No — classical teleology closes the gap by making 'what X is' include 'what X is for'",
   "No — ought is just a feeling about is"
 ],
 correct:1,
 reveal:`<p>Within a mechanistic ontology, Hume is right: facts are inert, so no ought follows. Within a teleological ontology, what a thing <em>is</em> already includes what it is <em>for</em>, and the gap closes without a leap. A knife is for cutting; a blunt knife is a defective knife, not just a different one. Say the same about human nature and you have classical ethics.</p>
<p>The modern insistence on the is–ought gap is less a logical discovery than a consequence of a prior metaphysical choice.</p>`,
 src:"David Hume, Treatise III.1.1 (1739); G. E. M. Anscombe, Modern Moral Philosophy (1958)",
 title_pt:"A Lacuna Entre É e Deve",
 body_pt:`<p>Hume: nenhuma quantidade de enunciados descritivos ("X <em>é</em> o caso") implica logicamente um enunciado prescritivo ("você <em>deve</em> fazer Y"). A lacuna se sustenta?</p>`,
 opts_pt:[
   "Sim — a moral tem de vir de outro lugar que não os fatos",
   "Não — a teleologia clássica fecha a lacuna fazendo com que 'o que X é' inclua 'para que X é'",
   "Não — dever é só um sentimento sobre o é"
 ],
 reveal_pt:`<p>Dentro de uma ontologia mecanicista, Hume está certo: os fatos são inertes, logo nenhum dever decorre. Dentro de uma ontologia teleológica, o que uma coisa <em>é</em> já inclui para que ela <em>é</em>, e a lacuna se fecha sem salto. Uma faca é para cortar; uma faca cega é faca defeituosa, não só diferente. Diga o mesmo da natureza humana e você tem a ética clássica.</p>
<p>A insistência moderna na lacuna é menos descoberta lógica do que consequência de uma escolha metafísica anterior.</p>`,
 src_pt:"David Hume, Tratado III.1.1 (1739); G. E. M. Anscombe, Filosofia Moral Moderna (1958)"},

{slug:"f-free-will-compat", type:"lectio", f:"F", title:"Free Will · Three Positions",
 body:`<p><strong>Hard determinism</strong>: every event is fully determined by prior events; free will is illusion. <strong>Libertarian free will</strong>: real alternatives exist at the moment of choice; the will is a real cause. <strong>Compatibilism</strong>: "free" means "unimpeded by external coercion," and so is compatible with determinism — a willing drug addict is not free; a willing saint is.</p>
<p>The Catholic position borrows from the libertarian framework but rules out the modern caricature of liberty-as-indeterminate-rolling-of-the-dice. The will is free when it chooses in accordance with reason toward the good. Freedom is not the absence of inclination; it is the alignment of inclination with truth.</p>
<p>A man who cannot bring himself to murder a child is not thereby less free. He is more free.</p>`,
 src:"Aquinas, De Malo q.6; Harry Frankfurt (compatibilism); Peter van Inwagen (libertarianism)",
 title_pt:"Livre-Arbítrio · Três Posições",
 body_pt:`<p><strong>Determinismo duro</strong>: todo evento é inteiramente determinado por eventos anteriores; o livre-arbítrio é ilusão. <strong>Libertarianismo</strong>: alternativas reais existem no instante da escolha; a vontade é causa real. <strong>Compatibilismo</strong>: "livre" significa "não impedido por coerção externa", portanto compatível com o determinismo — um dependente que quer a dose não é livre; um santo que quer o bem é.</p>
<p>A posição católica toma emprestado do quadro libertariano mas descarta a caricatura moderna da liberdade-como-rolar-dado-sem-causa. A vontade é livre quando escolhe conforme a razão em direção ao bem. Liberdade não é ausência de inclinação; é alinhamento da inclinação com a verdade.</p>
<p>Um homem incapaz de matar uma criança não é por isso menos livre. É mais.</p>`,
 src_pt:"Aquino, De Malo q.6; Harry Frankfurt; Peter van Inwagen"},

{slug:"f-mind-brain", type:"lectio", f:"F", title:"The Hard Problem",
 body:`<p>David Chalmers coined the phrase. The "easy" problems of consciousness are the mechanisms — attention, memory, reporting. Hard they may be in practice, but they are the kind of problem science knows how to attack.</p>
<p>The <em>hard</em> problem is why any of this is accompanied by experience. Why is there something it is like to see red? No description of neurons firing adds up to the redness itself. The gap is not quantitative; it is categorical.</p>
<p>Materialists promise to close it eventually. Dualists say the gap is permanent. Hylomorphists (Aristotle-Aquinas) say the question was badly posed — the "mind-body problem" assumes the Cartesian split that generated it, and dissolving the split dissolves the problem. Anyone claiming the matter is settled is selling you something.</p>`,
 src:"David Chalmers, Facing Up to the Problem of Consciousness (1995); Edward Feser, Philosophy of Mind (2005)",
 title_pt:"O Problema Difícil",
 body_pt:`<p>David Chalmers cunhou a expressão. Os problemas "fáceis" da consciência são os mecanismos — atenção, memória, relato. Difíceis podem ser na prática, mas são do tipo que a ciência sabe atacar.</p>
<p>O problema <em>difícil</em> é por que tudo isso é acompanhado de experiência. Por que há algo que é como ver o vermelho? Nenhuma descrição de neurônios disparando soma à vermelhidão em si. O abismo não é quantitativo; é categorial.</p>
<p>Materialistas prometem fechá-lo. Dualistas dizem que o abismo é permanente. Hilemorfistas (Aristóteles-Aquino) dizem que a pergunta foi mal posta — o "problema mente-corpo" supõe a cisão cartesiana que o gerou, e dissolvê-la dissolve o problema. Quem alegar que o caso está encerrado está te vendendo alguma coisa.</p>`,
 src_pt:"David Chalmers, Facing Up to the Problem of Consciousness (1995); Edward Feser, Filosofia da Mente (2005)"},

{slug:"f-ship-of-theseus", type:"quaestio", f:"F", title:"Ship of Theseus",
 body:`<p>Over fifty years, every plank of a ship is replaced one at a time. Is it the same ship at the end? Now suppose the discarded planks are reassembled into a second ship. Which ship, if either, is the original?</p>`,
 opts:[
   "The reassembled one — same matter",
   "The repaired one — continuity of form and function",
   "Both or neither — the question has no determinate answer"
 ],
 correct:1,
 reveal:`<p>Aristotelian answer: identity through time is carried by <em>form</em>, not by the matter informed. The repaired ship kept the form (configuration, purpose, continuity in use); it is the same ship. The reassembled hulk has the same material but no continuous history; it is a replica.</p>
<p>Apply the same answer to your body. Every seven years most of your cells are replaced. You are not a different person because your matter changed; you are the same person because the form (soul, in classical vocabulary) persists.</p>`,
 src:"Plutarch, Life of Theseus; Aristotle, Metaphysics VII",
 title_pt:"O Barco de Teseu",
 body_pt:`<p>Em cinquenta anos, toda tábua de um barco é substituída, uma de cada vez. É o mesmo barco no fim? Suponha agora que as tábuas descartadas sejam remontadas num segundo barco. Qual deles, se algum, é o original?</p>`,
 opts_pt:[
   "O remontado — mesma matéria",
   "O reparado — continuidade de forma e função",
   "Ambos ou nenhum — a pergunta não tem resposta determinada"
 ],
 reveal_pt:`<p>Resposta aristotélica: a identidade no tempo é carregada pela <em>forma</em>, não pela matéria informada. O barco reparado manteve a forma (configuração, propósito, continuidade de uso); é o mesmo barco. A pilha remontada tem a mesma matéria mas nenhuma história contínua; é réplica.</p>
<p>Aplique a mesma resposta ao seu corpo. A cada sete anos, a maior parte das suas células é substituída. Você não é outra pessoa porque sua matéria mudou; você é a mesma pessoa porque a forma (alma, no vocabulário clássico) persiste.</p>`,
 src_pt:"Plutarco, Vida de Teseu; Aristóteles, Metafísica VII"},

{slug:"f-trolley", type:"lectio", f:"F", title:"The Trolley Problem's Trick",
 body:`<p>Five on one track, one on the other. Would you divert the trolley? Most people say yes. Would you push a fat man off a bridge to stop the trolley and save five? Most people say no. Same math; different intuition.</p>
<p>The utilitarian wants you to be a bad philosopher: insist on consistency, swallow the fat-man case. The Thomist points out that the two cases are not the same act. In the first, you redirect a running cause; in the second, you turn a man's body into a tool. The second involves you in the fat man's death as its instrument. The first does not.</p>
<p>The trolley problem is less a test of your ethics than a test of whether you can see what's actually different between two seemingly similar acts.</p>`,
 src:"Philippa Foot (1967); Judith Thomson (1976); principle of double effect",
 title_pt:"O Truque do Dilema do Trem",
 body_pt:`<p>Cinco numa linha, um na outra. Você desviaria o trem? A maioria diz sim. Você empurraria um homem gordo de uma ponte para parar o trem e salvar cinco? A maioria diz não. Mesma conta; outra intuição.</p>
<p>O utilitarista quer que você seja mau filósofo: insista na consistência, engula o caso do homem gordo. O tomista aponta: os dois casos não são o mesmo ato. No primeiro, você redireciona uma causa em curso; no segundo, você converte o corpo de um homem em ferramenta. O segundo o envolve na morte do gordo como seu instrumento. O primeiro, não.</p>
<p>O dilema do trem é menos teste da sua ética do que teste de se você consegue ver o que de fato distingue dois atos aparentemente semelhantes.</p>`,
 src_pt:"Philippa Foot (1967); Judith Thomson (1976); princípio do duplo efeito"},

{slug:"f-personal-identity", type:"lectio", f:"F", title:"Parfit's Puzzle",
 body:`<p>Derek Parfit: imagine a teleporter that destroys the original and builds a perfect copy on Mars. Did "you" travel? Now imagine a malfunction leaves the original intact. Did you travel <em>and</em> stay? Which one is you?</p>
<p>Parfit concluded, with brutal consistency, that personal identity does not really matter. What matters is "survival" — the continuation of memories, personality, projects. The self is a bundle, not a thing. He found this liberating.</p>
<p>The Thomist disagrees. The soul is the form of this body; it individuates. Teleporting is not transport but replacement; the Mars-you is a new person who thinks he is you. Which answer you hold shapes everything you believe about death, resurrection, and whether a person uploaded to a computer is still a person.</p>`,
 src:"Derek Parfit, Reasons and Persons (1984), Part III",
 title_pt:"O Quebra-Cabeças de Parfit",
 body_pt:`<p>Derek Parfit: imagine um teletransporte que destrói o original e constrói uma cópia perfeita em Marte. "Você" viajou? Agora imagine que uma falha deixe o original intacto. Você viajou <em>e</em> ficou? Qual é você?</p>
<p>Parfit concluiu, com consistência brutal, que a identidade pessoal não importa de fato. O que importa é a "sobrevivência" — a continuação de memórias, personalidade, projetos. O eu é um feixe, não uma coisa. Achou isso libertador.</p>
<p>O tomista discorda. A alma é a forma deste corpo; individua. Teletransportar não é transportar, é substituir; o você-de-Marte é outra pessoa que pensa ser você. Qual resposta você sustenta molda tudo o que crê sobre morte, ressurreição e se uma pessoa carregada para um computador ainda é pessoa.</p>`,
 src_pt:"Derek Parfit, Reasons and Persons (1984), Parte III"},

{slug:"f-tolkien-sub", type:"lectio", f:"F", title:"Sub-Creation",
 body:`<p>Tolkien's lecture "On Fairy-Stories" quietly redefines what the artist is doing. We do not create; only God does. But because man is made in the image of a Creator, man imitates the Creator in a small way by making secondary worlds. The artist is a <em>sub-creator</em>.</p>
<p>The implications are large. First, there is nothing godless about imagination — rightly ordered, it is the clearest residue of the imago Dei. Second, a secondary world has its own laws, and the artist is bound to respect them; incoherence is not freedom. Third, the deepest fairy-stories end with a <em>eucatastrophe</em>, the sudden joyous turn, which Tolkien thought was the sliver through which the real Gospel first strikes a reader.</p>
<p>The man who gave the twentieth century its best-selling novel wrote also its most honest philosophy of fiction.</p>`,
 src:"J. R. R. Tolkien, 'On Fairy-Stories' (lecture 1939, published 1947)",
 title_pt:"Sub-Criação",
 body_pt:`<p>A conferência de Tolkien "On Fairy-Stories" redefine, com discrição, o que o artista faz. Nós não criamos; só Deus cria. Mas como o homem foi feito à imagem de um Criador, imita-O em pequena escala fazendo mundos secundários. O artista é <em>sub-criador</em>.</p>
<p>As implicações são grandes. Primeiro: nada é ímpio na imaginação — bem ordenada, é o resíduo mais claro da imago Dei. Segundo: um mundo secundário tem leis próprias, e o artista deve respeitá-las; incoerência não é liberdade. Terceiro: as mais fundas histórias-de-fadas terminam numa <em>eucatástrofe</em>, a súbita virada feliz, que Tolkien julgava ser a fresta pela qual o Evangelho real primeiro atinge o leitor.</p>
<p>O homem que deu ao séc. XX seu romance mais vendido escreveu também a sua filosofia da ficção mais honesta.</p>`,
 src_pt:"J. R. R. Tolkien, 'On Fairy-Stories' (conferência 1939, publicada 1947)"},

{slug:"f-maritain-prime", type:"lectio", f:"F", title:"Maritain · Three Degrees",
 body:`<p>Maritain's <em>Three Degrees of Knowledge</em> argues the three serious ways we know are not rivals.</p>
<p>(1) The <em>scientific</em> degree: knowledge of beings in their observable properties. Physics, biology, the full working of modern science.</p>
<p>(2) The <em>philosophical</em> degree: knowledge of beings in their intelligible structure. Metaphysics, the question of what being is.</p>
<p>(3) The <em>mystical</em> degree: knowledge of God by connaturality, through love, where the knower is conformed to the known.</p>
<p>Modernity collapses the three into the first and loses the other two. The classical tradition keeps all three in their proper order, each sovereign in its own province, none in competition with the others. A culture that fails this ordering cannot find peace between science, philosophy, and prayer.</p>`,
 src:"Jacques Maritain, The Degrees of Knowledge (1932)",
 title_pt:"Maritain · Os Três Graus",
 body_pt:`<p>Os <em>Três Graus do Saber</em> de Maritain sustentam que as três maneiras sérias de conhecer não são rivais.</p>
<p>(1) O grau <em>científico</em>: conhecimento dos seres em suas propriedades observáveis. Física, biologia, todo o funcionamento da ciência moderna.</p>
<p>(2) O grau <em>filosófico</em>: conhecimento dos seres em sua estrutura inteligível. Metafísica, a pergunta sobre o que o ser é.</p>
<p>(3) O grau <em>místico</em>: conhecimento de Deus por conaturalidade, pelo amor, no qual quem conhece se conforma ao conhecido.</p>
<p>A modernidade reduz os três ao primeiro e perde os outros dois. A tradição clássica mantém os três em sua ordem própria, cada um soberano em sua província, nenhum em concorrência com os outros. Uma cultura que falhe nessa ordenação não encontra paz entre ciência, filosofia e oração.</p>`,
 src_pt:"Jacques Maritain, Os Três Graus do Saber (1932)"},

{slug:"f-godel-incompl", type:"lectio", f:"F", title:"Gödel · The Humility of Mathematics",
 body:`<p>Kurt Gödel, 1931. Any formal system powerful enough to describe arithmetic contains true statements it cannot prove. The system cannot establish its own consistency from inside itself.</p>
<p>What this does <em>not</em> mean: it does not say truth is relative, nor that reason is useless. What it does mean: there is more to truth than any method can capture. Every method shows a horizon beyond which it cannot see — not from flaw but from form.</p>
<p>Gödel, a devout theist, took this as evidence that mathematics itself points beyond the merely finite. The theorems do not prove God. They do remove a particular confidence modernity had — that any sufficiently refined method could, in principle, see everything.</p>`,
 src:"Kurt Gödel, Über formal unentscheidbare Sätze (1931)",
 title_pt:"Gödel · A Humildade da Matemática",
 body_pt:`<p>Kurt Gödel, 1931. Todo sistema formal suficientemente potente para descrever a aritmética contém enunciados verdadeiros que não pode provar. O sistema não pode estabelecer sua própria consistência a partir de dentro.</p>
<p>O que isso <em>não</em> diz: não diz que a verdade é relativa, nem que a razão é inútil. O que diz: há mais verdade do que qualquer método pode capturar. Todo método mostra um horizonte além do qual não enxerga — não por falha, mas por forma.</p>
<p>Gödel, teísta devoto, viu nisso prova de que a própria matemática aponta além do meramente finito. Os teoremas não provam Deus. Removem, sim, uma confiança particular que a modernidade tinha — a de que qualquer método suficientemente refinado pudesse, em princípio, ver tudo.</p>`,
 src_pt:"Kurt Gödel, Über formal unentscheidbare Sätze (1931)"},

{slug:"f-first-principle", type:"sententia", f:"F", title:"Sapientis est ordinare",
 body:`<blockquote>Sapientis est ordinare.<br><em>It is the task of the wise man to order.</em></blockquote>
<p>Aquinas's opening move in his commentary on Aristotle's <em>Metaphysics</em>. Not: to know. Not: to argue. To order. Wisdom is the capacity to see things in their right relation.</p>`,
 src:"Aquinas, In Metaphysicam Aristotelis, prologue",
 title_pt:"Sapientis est ordinare",
 body_pt:`<blockquote>Sapientis est ordinare.<br><em>É tarefa do sábio ordenar.</em></blockquote>
<p>Movimento de abertura de Aquino no comentário à <em>Metafísica</em> de Aristóteles. Não: conhecer. Não: argumentar. Ordenar. Sabedoria é a capacidade de ver as coisas na sua relação justa.</p>`,
 src_pt:"Aquino, In Metaphysicam Aristotelis, prólogo"},

{slug:"f-attrib-greeks", type:"ludus", mode:"attributio", f:"F",
 title:"Ludus · Plato or Aristotle?",
 body:`<p>Five sentences. Each is either Plato or Aristotle. Attribute each.</p>`,
 authors:["Plato","Aristotle"],
 quotes:[
   {q:"The unexamined life is not worth living.", a:"Plato"},
   {q:"All men by nature desire to know.", a:"Aristotle"},
   {q:"Virtue is a mean between two extremes.", a:"Aristotle"},
   {q:"Beauty is the splendor of truth.", a:"Plato"},
   {q:"Man is by nature a political animal.", a:"Aristotle"}
 ],
 src:"Attributio · Philosophia · Plato vs Aristotle",
 title_pt:"Ludus · Platão ou Aristóteles?",
 body_pt:`<p>Cinco frases. Cada uma é de Platão ou Aristóteles. Atribua cada uma.</p>`,
 authors_pt:["Platão","Aristóteles"],
 quotes_pt:[
   {q:"A vida não examinada não vale a pena ser vivida.", a:"Platão"},
   {q:"Todos os homens, por natureza, desejam saber.", a:"Aristóteles"},
   {q:"A virtude é um meio entre dois extremos.", a:"Aristóteles"},
   {q:"A beleza é o esplendor da verdade.", a:"Platão"},
   {q:"O homem é por natureza um animal político.", a:"Aristóteles"}
 ],
 src_pt:"Attributio · Philosophia · Platão vs Aristóteles"},

{slug:"f-veritas-pascal", type:"ludus", mode:"veritas", f:"F", rare:1,
 title:"Ludus · Pascal · Real or Fake?",
 body:`<p>One is Pascal. One is a plausible imitation. Tap the real one.</p>`,
 twins:[
   {real:"The heart has its reasons, which reason does not know.",
    fake:"The heart's logic is older than the mind's.",
    src:"Pascal, Pensées §277 (1670)"}
 ],
 src:"Veritas · Pascal",
 title_pt:"Ludus · Pascal · Real ou Falso?",
 body_pt:`<p>Uma é de Pascal. Outra é imitação plausível. Toque na verdadeira.</p>`,
 twins_pt:[
   {real:"O coração tem razões que a razão desconhece.",
    fake:"A lógica do coração é mais antiga que a da mente.",
    src:"Pascal, Pensées §277 (1670)"}
 ],
 src_pt:"Veritas · Pascal"}

];
FOLIOS.push(...PHILOSOPHIA_X);

// ================================================================
// WAVE 3 — OECONOMIA + NEGOTIUM EXPANSION
// Targets: +40 O folios, +11 N folios. Bilingual.
// Sources: EMH_Behavioral_Finance_Brief, what-is-it-worth,
// welfare_black_family, Mises/Hayek/Rothbard/Hazlitt corpus,
// Taleb, Buffett, Munger, Marks, Thiel, Christensen, Porter, Graham.
// ================================================================
const OECONOMIA_X = [
{slug:"o-emh-weak", type:"lectio", f:"O", title:"EMH · Three Strengths",
 body:`<p>The Efficient Markets Hypothesis comes in three forms. <strong>Weak</strong>: current prices reflect all past prices. Technical analysis is dead. <strong>Semi-strong</strong>: prices reflect all publicly available information. Buying on news is dead. <strong>Strong</strong>: prices reflect all information, including private. Insider trading would yield no advantage.</p>
<p>Decades of evidence: weak is largely true. Semi-strong is approximately true, with notable anomalies. Strong is false — insiders consistently outperform.</p>
<p>The practical result: active managers, net of fees, underperform index funds by about the fee itself. Not because markets are magic. Because markets are mostly already right, and the cost of trying to beat them exceeds the small inefficiency left to exploit.</p>`,
 src:"Eugene Fama, Efficient Capital Markets (1970); Marcos Nabhan, EMH & Behavioral Brief",
 title_pt:"EMH · Três Forças",
 body_pt:`<p>A Hipótese dos Mercados Eficientes vem em três formas. <strong>Fraca</strong>: os preços atuais refletem todos os preços passados. A análise técnica está morta. <strong>Semiforte</strong>: os preços refletem toda informação publicamente disponível. Comprar com base em notícia está morto. <strong>Forte</strong>: os preços refletem toda informação, inclusive privada. Negociar com informação privilegiada não daria vantagem.</p>
<p>Décadas de evidência: a fraca é largamente verdadeira. A semiforte, aproximadamente verdadeira, com anomalias notáveis. A forte é falsa — insiders superam consistentemente.</p>
<p>Resultado prático: gestores ativos, descontadas as taxas, perdem para fundos de índice pelo valor aproximado das próprias taxas. Não porque os mercados sejam mágicos. Porque os mercados em geral já estão certos, e o custo de tentar vencê-los excede a pequena ineficiência que resta explorar.</p>`,
 src_pt:"Eugene Fama, Efficient Capital Markets (1970); Marcos Nabhan, EMH & Behavioral Brief"},

{slug:"o-behavioral", type:"lectio", f:"O", title:"The Behavioral Reply",
 body:`<p>Kahneman and Tversky, 1979. Prospect theory. People do not value a gain of $100 and a loss of $100 symmetrically. The loss hurts about 2.5 times as much. Investors are not utility maximizers; they are loss-avoiders.</p>
<p>Add anchoring, framing effects, hindsight bias, overconfidence, availability. Markets, built of these people, cannot be perfectly efficient. Momentum, value, and quality factors persist across decades precisely because biases persist.</p>
<p>The honest synthesis: markets are mostly efficient enough that active trading is a tax, and inefficient enough that disciplined systematic strategies work in long holds. Both camps are more right than they say.</p>`,
 src:"Kahneman & Tversky, Prospect Theory (1979); Thaler, Behavioral Economics",
 title_pt:"A Resposta Comportamental",
 body_pt:`<p>Kahneman e Tversky, 1979. Teoria do prospecto. As pessoas não valorizam um ganho de 100 e uma perda de 100 simetricamente. A perda dói cerca de 2,5 vezes mais. Investidores não são maximizadores de utilidade; são evitadores de perda.</p>
<p>Some ancoragem, enquadramento, viés retrospectivo, excesso de confiança, disponibilidade. Mercados feitos dessas pessoas não podem ser perfeitamente eficientes. Fatores de momentum, valor e qualidade persistem por décadas, justamente porque os vieses persistem.</p>
<p>A síntese honesta: os mercados são eficientes o bastante para que o trading ativo seja imposto, e ineficientes o bastante para que estratégias sistemáticas disciplinadas funcionem em prazos longos. Os dois campos têm mais razão do que admitem.</p>`,
 src_pt:"Kahneman & Tversky, Teoria do Prospecto (1979); Thaler, Economia Comportamental"},

{slug:"o-value-moat", type:"lectio", f:"O", title:"Buffett's Moat",
 body:`<p>The 1999 Fortune article where Warren Buffett defined "economic moat" and ruined ten years of MBA case studies.</p>
<p>A moat is anything that keeps competitors out: scale, network effects, switching costs, intangible brand, patents, cost advantages, regulatory protection. The width of the moat is the number of years before the castle will fall. Great businesses are the ones whose moats <em>widen</em> over time.</p>
<p>Note what is missing from the definition: current margins, growth rate, earnings. A business with high margins and no moat is a candle in a wind. A business with low margins and a widening moat is a castle under slow construction. Buffett bought the castle.</p>`,
 src:"Warren Buffett, Fortune, November 22, 1999",
 title_pt:"O Fosso de Buffett",
 body_pt:`<p>O artigo da Fortune de 1999 em que Warren Buffett definiu "fosso econômico" e arruinou dez anos de estudos de caso de MBA.</p>
<p>Um fosso é tudo o que mantém concorrentes afastados: escala, efeitos de rede, custos de troca, marca intangível, patentes, vantagens de custo, proteção regulatória. A largura do fosso é o número de anos até que o castelo caia. Grandes negócios são aqueles cujos fossos <em>alargam</em> no tempo.</p>
<p>Note o que falta na definição: margens correntes, taxa de crescimento, lucros. Um negócio com alta margem e sem fosso é vela ao vento. Um negócio de margem baixa e fosso que alarga é castelo em construção lenta. Buffett comprou o castelo.</p>`,
 src_pt:"Warren Buffett, Fortune, 22 nov. 1999"},

{slug:"o-mr-market", type:"lectio", f:"O", title:"Mr. Market",
 body:`<p>Benjamin Graham, Buffett's teacher: imagine you own a share of a business, and a bipolar neighbor named Mr. Market knocks on your door every day with a price. Some days he is euphoric and offers you double what the share is worth. Other days he is despairing and offers you half.</p>
<p>You are under no obligation to transact. You can ignore him for years. But if you ever want to sell, pick his euphoric days. If you ever want to buy, pick his despairing ones. Treat his mood as a facility, not a signal.</p>
<p>Every market crisis is Mr. Market in a bad week. Every bubble is Mr. Market euphoric. The investor's edge is not predicting his mood; it is refusing to adopt it.</p>`,
 src:"Benjamin Graham, The Intelligent Investor (1949), ch. 8",
 title_pt:"O Sr. Mercado",
 body_pt:`<p>Benjamin Graham, mestre de Buffett: imagine que você é dono de uma cota de um negócio, e um vizinho bipolar chamado Sr. Mercado bate à sua porta todo dia com um preço. Em certos dias ele está eufórico e lhe oferece o dobro do que a cota vale. Em outros, deprimido, oferece metade.</p>
<p>Você não é obrigado a transacionar. Pode ignorá-lo por anos. Mas se um dia quiser vender, escolha os dias eufóricos. Se um dia quiser comprar, escolha os deprimidos. Trate o humor dele como facilidade, não como sinal.</p>
<p>Toda crise de mercado é o Sr. Mercado numa semana ruim. Toda bolha é o Sr. Mercado eufórico. A vantagem do investidor não é prever o humor dele; é recusar-se a adotá-lo.</p>`,
 src_pt:"Benjamin Graham, O Investidor Inteligente (1949), cap. 8"},

{slug:"o-second-level", type:"lectio", f:"O", title:"Marks · Second-Level Thinking",
 body:`<p>Howard Marks: first-level thinking says, "It's a great company; let's buy." Second-level thinking says, "It's a great company that everyone thinks is a great company, and it's priced accordingly; let's pass."</p>
<p>Returns come from the gap between reality and expectation. Buying a wonderful company that everyone agrees is wonderful earns you… a wonderful company at a wonderful-company price. There is no edge.</p>
<p>Edge lives in holding a correct view that is not consensus. Which is harder than it sounds, because being alone in a view feels, by design, like being wrong.</p>`,
 src:"Howard Marks, The Most Important Thing (2011), ch. 1",
 title_pt:"Marks · Pensamento de Segundo Nível",
 body_pt:`<p>Howard Marks: o pensamento de primeiro nível diz: "É uma empresa ótima; vamos comprar." O de segundo nível diz: "É uma empresa ótima, que todos acham ótima, e o preço reflete isso; vamos passar."</p>
<p>Os retornos nascem da distância entre a realidade e a expectativa. Comprar uma empresa maravilhosa que todos concordam ser maravilhosa dá a você… uma empresa maravilhosa a preço de maravilhosa. Não há vantagem.</p>
<p>Vantagem mora em sustentar uma visão correta que não é consenso. O que é mais duro do que parece, porque estar sozinho numa visão parece, por desenho, estar errado.</p>`,
 src_pt:"Howard Marks, The Most Important Thing (2011), cap. 1"},

{slug:"o-pendulum", type:"lectio", f:"O", title:"Marks · The Pendulum",
 body:`<p>Markets, Marks writes, swing like a pendulum between fear and greed, pessimism and optimism, risk-aversion and risk-tolerance. The pendulum spends very little time at the midpoint. Most of the time it is somewhere in a swing.</p>
<p>The sentence worth tattooing: <em>"In the world of investing, nothing is as dependable as cycles."</em> If everything feels good and risks seem small, the pendulum is near the top. If everything feels terrible and ruin seems certain, it is near the bottom. The investor's edge is counting swings, not predicting their timing.</p>
<p>No one rings a bell at the top. The pendulum does not announce its reversal. It is already turning when you still feel the old direction.</p>`,
 src:"Howard Marks, Mastering the Market Cycle (2018)",
 title_pt:"Marks · O Pêndulo",
 body_pt:`<p>Mercados, escreve Marks, oscilam como um pêndulo entre medo e ganância, pessimismo e otimismo, aversão ao risco e tolerância a ele. O pêndulo passa muito pouco tempo no centro. Na maior parte do tempo está em alguma oscilação.</p>
<p>A frase a tatuar: <em>"No mundo dos investimentos, nada é tão confiável quanto os ciclos."</em> Se tudo parece bom e os riscos parecem pequenos, o pêndulo está perto do topo. Se tudo parece terrível e a ruína certa, está perto do fundo. A vantagem do investidor é contar oscilações, não prever seu timing.</p>
<p>Ninguém toca o sino no topo. O pêndulo não anuncia a inversão. Já está voltando quando você ainda sente a direção antiga.</p>`,
 src_pt:"Howard Marks, Dominando o Ciclo de Mercado (2018)"},

{slug:"o-taleb-barbell", type:"lectio", f:"O", title:"Taleb · The Barbell",
 body:`<p>Taleb's strategy for a world where tail events dominate: do not sit in the middle of the risk spectrum, where you lose in both directions. Put most of your capital in the safest instrument available. Put the rest in highly speculative bets whose downside is capped at the amount you put in and whose upside is uncapped.</p>
<p>You are now <em>antifragile</em>. Normal volatility is irrelevant. Black swans either leave you intact or make you rich. The barbell removes the thing that destroys most portfolios: the fat middle, where moderate losses on moderate positions silently compound to ruin.</p>
<p>Apply the shape beyond finance. Career: steady unglamorous day job + a few high-conviction side projects. Social life: a few deep friendships + a wide shallow network. The barbell is a design.</p>`,
 src:"Nassim Nicholas Taleb, Antifragile (2012), ch. 11",
 title_pt:"Taleb · A Barra",
 body_pt:`<p>Estratégia de Taleb para um mundo em que eventos de cauda dominam: não fique no meio do espectro de risco, onde você perde nas duas direções. Ponha a maior parte do capital no instrumento mais seguro disponível. Ponha o resto em apostas altamente especulativas cujo lado ruim esteja limitado ao que você aplicou e cujo lado bom seja ilimitado.</p>
<p>Você agora é <em>antifrágil</em>. A volatilidade normal é irrelevante. Cisnes negros ou te deixam intacto ou te enriquecem. A barra remove o que destrói a maioria das carteiras: o meio gordo, onde perdas moderadas em posições moderadas silenciosamente se acumulam até a ruína.</p>
<p>Aplique a forma além das finanças. Carreira: emprego estável e sem glamour + poucos projetos paralelos de alta convicção. Vida social: algumas amizades profundas + uma rede larga rasa. A barra é um desenho.</p>`,
 src_pt:"Nassim Nicholas Taleb, Antifrágil (2012), cap. 11"},

{slug:"o-skin-game", type:"lectio", f:"O", title:"Skin in the Game",
 body:`<p>Taleb's rule: never trust advice from someone who does not bear its downside. The architect who lives in his own buildings. The chef who eats in his own kitchen. The doctor who would take the same drug. The founder whose personal fortune is in the stock.</p>
<p>Modern institutions have systematically engineered skin-in-the-game out of their senior layers. Executives collect for upside and are indemnified for downside. Analysts rate without position. Regulators retire into the industries they regulated. Each small decoupling is defensible; the aggregate is corrosive.</p>
<p>The practical heuristic: before taking anyone's advice, ask what they lose if it is wrong. Weight accordingly.</p>`,
 src:"Nassim Nicholas Taleb, Skin in the Game (2018)",
 title_pt:"Pele em Jogo",
 body_pt:`<p>Regra de Taleb: nunca confie no conselho de quem não arca com o lado ruim dele. O arquiteto que mora nos próprios prédios. O cozinheiro que come na própria cozinha. O médico que tomaria o mesmo remédio. O fundador cuja fortuna pessoal está no papel.</p>
<p>As instituições modernas sistematicamente engenharam a pele-em-jogo para fora de suas camadas sêniores. Executivos cobram pelo lado bom e são indenizados pelo lado ruim. Analistas classificam sem posição. Reguladores aposentam-se nas indústrias que regulavam. Cada pequeno desacoplamento é defensável; o agregado é corrosivo.</p>
<p>A heurística prática: antes de aceitar o conselho de alguém, pergunte o que essa pessoa perde se o conselho for errado. Pondere.</p>`,
 src_pt:"Nassim Nicholas Taleb, Pele em Jogo (2018)"},

{slug:"o-ergodicity", type:"lectio", f:"O", title:"Ergodicity · The Ruin Trap",
 body:`<p>Nassim Taleb's cleanest practical insight. A coin flips: 50% chance of +50%, 50% chance of −40%. Expected value positive. Repeat 100 times, aggregating across many parallel players, and the <em>average</em> is excellent. Repeat 100 times, as a single player compounding, and you are nearly certain to be ruined.</p>
<p>The difference between the two is <em>ergodicity</em>. In an ergodic process, time-average equals ensemble-average. In most of real life, they diverge, because one bad outcome removes you from the game.</p>
<p>Rule: never take a bet where the downside includes ruin, no matter how good the expected value. Russian roulette is not a bet with great expected value if you lose; it is a bet that erases every future bet. The arithmetic lies about this. The logic does not.</p>`,
 src:"Peters & Gell-Mann on ergodicity; Taleb, Skin in the Game",
 title_pt:"Ergodicidade · A Armadilha da Ruína",
 body_pt:`<p>A intuição prática mais limpa de Taleb. Uma moeda: 50% de chance de +50%, 50% de chance de −40%. Valor esperado positivo. Repita 100 vezes, agregando entre muitos jogadores paralelos, e a <em>média</em> é ótima. Repita 100 vezes, como jogador único em juros compostos, e você está quase certo de ser arruinado.</p>
<p>A diferença entre os dois é <em>ergodicidade</em>. Num processo ergódico, a média no tempo é igual à média do conjunto. Na maior parte da vida real, divergem, porque um mau resultado te tira do jogo.</p>
<p>Regra: nunca aceite uma aposta cujo lado ruim inclua ruína, por melhor que seja o valor esperado. Roleta-russa não é aposta de ótimo valor esperado se você perder; é aposta que apaga toda aposta futura. A aritmética mente nisso. A lógica não.</p>`,
 src_pt:"Peters & Gell-Mann sobre ergodicidade; Taleb, Pele em Jogo"},

{slug:"o-lindy", type:"lectio", f:"O", title:"The Lindy Effect",
 body:`<p>Named after Lindy's deli in New York, where comedians observed that a Broadway show's remaining run was proportional to how long it had already run. Generalized: for things that do not have a biological lifespan — ideas, books, technologies, institutions — the longer they have survived, the longer they are likely to survive.</p>
<p>A new paper has an expected life of six months. The Aeneid has survived two thousand years; its expected additional life, by Lindy, is roughly two thousand more. Each year a thing survives raises the base rate for its next year.</p>
<p>Practical corollary: when picking books, music, mentors, exercises or ideas to spend a scarce life on, bias strongly toward Lindy. The new is overrepresented by novelty, understudied by time.</p>`,
 src:"Mandelbrot, Fractals (1982); Nassim Taleb, Antifragile",
 title_pt:"O Efeito Lindy",
 body_pt:`<p>Nome vindo da delicatessen Lindy's em Nova York, onde comediantes notaram que o tempo restante de um show na Broadway era proporcional ao tempo que ele já tinha rodado. Generalizando: para coisas sem vida biológica — ideias, livros, tecnologias, instituições — quanto mais tempo já sobreviveram, mais provável que sigam sobrevivendo.</p>
<p>Um artigo novo tem vida esperada de seis meses. A Eneida sobreviveu dois mil anos; sua vida adicional esperada, por Lindy, é cerca de dois mil mais. Cada ano que uma coisa sobrevive eleva a taxa de base do próximo.</p>
<p>Corolário prático: ao escolher livros, música, mentores, exercícios ou ideias a quem dar uma vida escassa, pese fortemente a favor de Lindy. O novo é super-representado pela novidade, mal estudado pelo tempo.</p>`,
 src_pt:"Mandelbrot, Fractais (1982); Taleb, Antifrágil"},

{slug:"o-thiel-truth", type:"lectio", f:"O", title:"Thiel · The Secret Question",
 body:`<p>Peter Thiel's job interview question, which he gave to every candidate at Clarium and Palantir: <em>"What important truth do very few people agree with you on?"</em></p>
<p>It is harder than it sounds. "Life is suffering" is Buddhism and does not qualify. "Private education is better than public" is a widely held opinion among the educated. The question is asking: where is your rare courage? What have you concluded that you cannot easily cash out with your peer group?</p>
<p>Thiel's point: the great companies and great careers start exactly here — in a correct view that is still unpriced in the social market. If you have no answer, you are a conformist by default and the honest word for your career plan is <em>hoping to be given something</em>.</p>`,
 src:"Peter Thiel, Zero to One (2014), ch. 1",
 title_pt:"Thiel · A Pergunta do Segredo",
 body_pt:`<p>A pergunta de entrevista de Peter Thiel, feita a todo candidato na Clarium e na Palantir: <em>"Que verdade importante poucas pessoas concordam com você?"</em></p>
<p>É mais difícil do que parece. "A vida é sofrimento" é budismo e não qualifica. "Educação privada é melhor que a pública" é opinião largamente aceita entre instruídos. A pergunta está perguntando: onde está sua coragem rara? O que você concluiu que não consegue facilmente dizer no seu grupo?</p>
<p>Ponto de Thiel: as grandes empresas e as grandes carreiras começam exatamente aqui — numa visão correta ainda não precificada no mercado social. Se você não tem resposta, é conformista por padrão, e a palavra honesta para seu plano de carreira é <em>esperar que me deem algo</em>.</p>`,
 src_pt:"Peter Thiel, De Zero a Um (2014), cap. 1"},

{slug:"o-christensen-margin", type:"lectio", f:"O", title:"Christensen · Marginal Cost",
 body:`<p>Clayton Christensen in <em>How Will You Measure Your Life?</em>: the marginal cost of doing something wrong "just this once" always looks lower than the full cost of doing it wrong. The affair "just this one time." The lie "just this once." The compromise "just for this quarter."</p>
<p>Christensen's point: there is no "just this once." Every single compromise reshapes who you are. The marginal cost of doing it once is 100% of the character damage, hidden by the arithmetic of marginal thinking.</p>
<p>His formula: it's easier to hold a principle 100% of the time than 98% of the time. The second person is constantly negotiating with himself. The first stopped negotiating decades ago.</p>`,
 src:"Clayton Christensen, How Will You Measure Your Life? (2012)",
 title_pt:"Christensen · Custo Marginal",
 body_pt:`<p>Clayton Christensen em <em>How Will You Measure Your Life?</em>: o custo marginal de fazer algo errado "só desta vez" sempre parece menor do que o custo total de fazê-lo errado. O caso "só uma vez". A mentira "só uma vez". O compromisso "só por este trimestre".</p>
<p>Ponto de Christensen: não existe "só desta vez". Cada concessão reformata quem você é. O custo marginal de fazê-lo uma vez é 100% do dano ao caráter, encoberto pela aritmética do pensamento marginal.</p>
<p>Sua fórmula: é mais fácil manter um princípio 100% das vezes do que 98% das vezes. A segunda pessoa está constantemente negociando consigo. A primeira parou de negociar há décadas.</p>`,
 src_pt:"Clayton Christensen, How Will You Measure Your Life? (2012)"},

{slug:"o-munger-invert", type:"sententia", f:"O", title:"Munger · Invert",
 body:`<blockquote>Invert, always invert.</blockquote>
<p>Charlie Munger (and Jacobi before him): instead of asking how to achieve a thing, ask how to guarantee you will fail at it. Then don't do that. The list is shorter and the actions clearer.</p>
<p>How to be miserable? Isolate yourself, consume news all day, compare constantly, nurture resentment. Avoid these and happiness is largely a byproduct.</p>`,
 src:"Charlie Munger, after Carl Jacobi",
 title_pt:"Munger · Inverta",
 body_pt:`<blockquote>Inverta, sempre inverta.</blockquote>
<p>Charlie Munger (e Jacobi antes dele): em vez de perguntar como obter uma coisa, pergunte como garantir que fracassará nela. Depois não faça isso. A lista é mais curta e as ações mais claras.</p>
<p>Como ser infeliz? Isole-se, consuma notícias o dia todo, compare-se o tempo todo, cultive ressentimento. Evite isto e a felicidade é, em larga medida, subproduto.</p>`,
 src_pt:"Charlie Munger, segundo Carl Jacobi"},

{slug:"o-munger-incentive", type:"sententia", f:"O", title:"Munger · Incentives",
 body:`<blockquote>Show me the incentive and I'll show you the outcome.</blockquote>
<p>You cannot moralize a system into working against its own incentive structure. If the executive is paid for quarterly stock price, the executive maximizes quarterly stock price. Any surprise at this is theatre.</p>`,
 src:"Charlie Munger, Berkshire annual meeting",
 title_pt:"Munger · Incentivos",
 body_pt:`<blockquote>Mostre-me o incentivo e eu te mostro o resultado.</blockquote>
<p>Você não moraliza um sistema para que ele opere contra a própria estrutura de incentivos. Se o executivo é pago pelo preço da ação trimestral, o executivo maximiza o preço da ação trimestral. Qualquer surpresa com isso é teatro.</p>`,
 src_pt:"Charlie Munger, assembleia anual da Berkshire"},

{slug:"o-cfa-tvm", type:"lectio", f:"O", title:"Time Value of Money",
 body:`<p>One dollar today is worth more than one dollar next year. The gap is the interest rate.</p>
<p>The formula FV = PV × (1+r)^n and its inverse PV = FV / (1+r)^n run roughly half of all practical finance. Mortgages, pensions, bond prices, lifetime income calculations, insurance premiums, equity valuations — all are time-value arithmetic in a dinner jacket.</p>
<p>Memorize it once. Then use it like a calibrated eye: whenever someone offers you a stream of future cash in exchange for present money, ask what rate you are being charged. The answer is often appalling.</p>`,
 src:"CFA Level I · Quantitative Methods",
 title_pt:"Valor do Dinheiro no Tempo",
 body_pt:`<p>Um real hoje vale mais que um real no ano que vem. A distância é a taxa de juros.</p>
<p>A fórmula FV = PV × (1+r)^n e sua inversa PV = FV / (1+r)^n operam metade das finanças práticas. Hipotecas, aposentadorias, preços de títulos, cálculo de renda vitalícia, prêmios de seguro, avaliações de ações — tudo é aritmética do valor no tempo com smoking.</p>
<p>Memorize-a uma vez. Depois use-a como olho calibrado: toda vez que alguém lhe oferece um fluxo de dinheiro futuro em troca de dinheiro presente, pergunte-se que taxa estão lhe cobrando. A resposta é, muitas vezes, apavorante.</p>`,
 src_pt:"CFA Nível I · Métodos Quantitativos"},

{slug:"o-dcf-logic", type:"lectio", f:"O", title:"DCF · The Honest Model",
 body:`<p>A business is worth the present value of the cash it will produce for its owner, from now until it stops. Everything else — multiples, comparables, momentum — is a shortcut that assumes someone has already done the honest math.</p>
<p>Three inputs decide the answer: cash flow, growth rate, discount rate. Change the discount rate by 1% and the value moves 15–30%. Change the terminal growth rate assumption by 1% and it moves even more. This is why DCF models are mostly used not to produce numbers but to produce arguments. Both sides of a merger negotiation hand each other DCF models that differ by a factor of two.</p>
<p>Use the model to think clearly. Do not let it fool you into thinking you can forecast cash flows thirty years out. Nobody can.</p>`,
 src:"Benjamin Graham, Security Analysis (1934); CFA Equity Valuation",
 title_pt:"DCF · O Modelo Honesto",
 body_pt:`<p>Um negócio vale o valor presente do caixa que produzirá ao dono, de hoje até parar. Todo o resto — múltiplos, comparáveis, momentum — é atalho que supõe que alguém já fez a conta honesta.</p>
<p>Três entradas decidem a resposta: fluxo de caixa, taxa de crescimento, taxa de desconto. Mude a taxa de desconto em 1% e o valor se move 15–30%. Mude a hipótese de crescimento terminal em 1% e se move mais ainda. Por isso modelos DCF são usados menos para produzir números do que para produzir argumentos. Os dois lados de uma negociação de fusão entregam um ao outro modelos de DCF que diferem por um fator de dois.</p>
<p>Use o modelo para pensar com clareza. Não deixe que te iluda em imaginar que você prevê fluxo de caixa a trinta anos. Ninguém consegue.</p>`,
 src_pt:"Benjamin Graham, Security Analysis (1934); CFA Avaliação de Patrimônio Líquido"},

{slug:"o-wacc", type:"lectio", f:"O", title:"WACC · The Hurdle",
 body:`<p>Weighted Average Cost of Capital. A company funds itself with a mix of debt and equity. Debt is cheaper (interest is deductible, lenders demand less) but imposes payment obligations. Equity is costlier (shareholders demand more) but is permanent capital.</p>
<p>WACC = (E/V)·r_e + (D/V)·r_d·(1−T). The resulting number is the hurdle every project must beat to create value for shareholders.</p>
<p>Watch two tricks. First, debt looks cheaper than it is because its tax shield only exists if the company has enough earnings. Zero earnings, no shield, the cheap debt remains cheap and the company remains dead. Second, the <em>risk-free rate</em> inside r_e has been under 2% for a decade and recently near 5%. Capital that was cheap in 2020 is expensive now; every long-duration cash-flow business is worth 30% less without a single operating change.</p>`,
 src:"CFA Level II · Corporate Finance",
 title_pt:"WACC · A Barreira",
 body_pt:`<p>Custo Médio Ponderado de Capital. Uma empresa se financia com uma mistura de dívida e capital. Dívida é mais barata (os juros são dedutíveis, os credores exigem menos) mas impõe obrigações de pagamento. Capital é mais caro (acionistas exigem mais) mas é capital permanente.</p>
<p>WACC = (E/V)·r_e + (D/V)·r_d·(1−T). O número resultante é a barreira que todo projeto precisa superar para criar valor ao acionista.</p>
<p>Note dois truques. Primeiro, a dívida parece mais barata do que é porque seu escudo tributário só existe se a empresa tiver lucro bastante. Zero de lucro, zero de escudo, a dívida barata segue barata e a empresa segue morta. Segundo, a <em>taxa livre de risco</em> dentro de r_e esteve abaixo de 2% por uma década e, recentemente, perto de 5%. O capital barato de 2020 é caro agora; cada negócio de fluxo de caixa de longa duração vale 30% menos sem uma única mudança operacional.</p>`,
 src_pt:"CFA Nível II · Finanças Corporativas"},

{slug:"o-capm-honest", type:"lectio", f:"O", title:"CAPM · Honest About Its Weakness",
 body:`<p>r_e = r_f + β(r_m − r_f). The required return on a stock equals the risk-free rate plus beta times the equity market premium. Clean, elegant, taught everywhere, half-false.</p>
<p>Problem 1: beta is historical, measured on past prices. It is a backward-facing estimate of forward-facing risk. Fama & French added size and value factors in 1992 and the formula barely survived.</p>
<p>Problem 2: beta measures correlation with the market, not the risk the business actually bears. A grocery chain with beta 0.4 may be levered to the hilt and about to default; a software company with beta 1.6 may have gross margins so high that any revenue is cash.</p>
<p>Use CAPM as a first screen. For actual investment decisions, read the 10-K.</p>`,
 src:"William Sharpe (1964); Fama & French (1992)",
 title_pt:"CAPM · Honesto Sobre Suas Fraquezas",
 body_pt:`<p>r_e = r_f + β(r_m − r_f). O retorno exigido de uma ação é a taxa livre de risco mais beta vezes o prêmio do mercado de ações. Elegante, limpo, ensinado em todo lugar, metade falso.</p>
<p>Problema 1: beta é histórico, calculado em preços passados. É uma estimativa olhando para trás do risco olhando para frente. Fama & French acrescentaram fatores de tamanho e valor em 1992 e a fórmula mal sobreviveu.</p>
<p>Problema 2: beta mede correlação com o mercado, não o risco que o negócio efetivamente carrega. Uma rede de supermercados com beta 0,4 pode estar alavancada até o pescoço e prestes a quebrar; uma empresa de software com beta 1,6 pode ter margem bruta tão alta que qualquer receita é caixa.</p>
<p>Use o CAPM como primeiro filtro. Para decisões reais de investimento, leia o 10-K.</p>`,
 src_pt:"William Sharpe (1964); Fama & French (1992)"},

{slug:"o-duration", type:"lectio", f:"O", title:"Duration",
 body:`<p>If interest rates rise by 1%, a 30-year bond paying 3% falls in price by roughly 20%. A 2-year bond falls by about 2%. This sensitivity is called <em>duration</em>, and it is one of the most powerful ideas in finance.</p>
<p>Duration is the weighted average time until a bond's cash flows arrive. Longer duration, bigger swing per percentage point of rate move. Every pension fund, bank, insurer, and sovereign central bank is managing duration under the table.</p>
<p>The practical corollary: when you hear "rates are rising," translate immediately to "long-duration assets are falling." Growth stocks are long-duration. Houses are long-duration. Your mortgage is a short position in bonds. The system is a web of unspoken duration bets, and when rates move fast, somebody expensive discovers they were on the wrong side.</p>`,
 src:"Frederick Macaulay (1938); CFA Fixed Income",
 title_pt:"Duration",
 body_pt:`<p>Se as taxas de juros subirem 1%, um título de 30 anos que paga 3% cai cerca de 20% em preço. Um de 2 anos cai cerca de 2%. Esta sensibilidade é chamada <em>duration</em>, e é uma das ideias mais poderosas das finanças.</p>
<p>Duration é a média ponderada do tempo até os fluxos de caixa chegarem. Maior duration, maior oscilação por ponto percentual de movimento de juros. Todo fundo de pensão, banco, seguradora e banco central soberano está gerindo duration por baixo da mesa.</p>
<p>Corolário prático: quando ouvir "os juros estão subindo", traduza imediatamente para "os ativos de longa duration estão caindo". Ações de crescimento são longa duration. Imóveis são longa duration. Sua hipoteca é posição vendida em títulos. O sistema é uma teia de apostas tácitas em duration, e quando os juros se movem rápido, alguém caro descobre que estava do lado errado.</p>`,
 src_pt:"Frederick Macaulay (1938); CFA Renda Fixa"},

{slug:"o-money-interest", type:"lectio", f:"O", title:"Böhm-Bawerk · Why Interest Exists",
 body:`<p>Eugen von Böhm-Bawerk, 1884, answered a question Marx had claimed was unanswerable: where does interest come from, and is it exploitation?</p>
<p>Three sources, all natural. (1) People in different situations value goods differently; a hungry man values a loaf now more than later. (2) Future wants are generally better provided for than present ones (we expect to be richer tomorrow). (3) Roundabout methods of production (building a tool to make a tool to make a good) are more productive, but take time, and require that someone be paid to wait.</p>
<p>Interest, in Böhm-Bawerk's hands, becomes the price of time. Not a theft. Not a mystery. A real feature of a world in which production takes time and life is scarce.</p>`,
 src:"Eugen von Böhm-Bawerk, Capital and Interest (1884–1912)",
 title_pt:"Böhm-Bawerk · Por Que Existe Juro",
 body_pt:`<p>Eugen von Böhm-Bawerk, 1884, respondeu a uma pergunta que Marx dizia ser irrespondível: de onde vem o juro, e é exploração?</p>
<p>Três fontes, todas naturais. (1) Pessoas em situações distintas valoram bens de forma distinta; um faminto valoriza mais um pão agora do que depois. (2) Necessidades futuras costumam estar melhor providas que as presentes (esperamos ser mais ricos amanhã). (3) Métodos indiretos de produzir (fazer ferramenta para fazer ferramenta para fazer bem) são mais produtivos, mas levam tempo, e exigem que alguém seja pago para esperar.</p>
<p>Juro, nas mãos de Böhm-Bawerk, torna-se o preço do tempo. Não é furto. Não é mistério. É traço real de um mundo em que a produção leva tempo e a vida é escassa.</p>`,
 src_pt:"Eugen von Böhm-Bawerk, Capital e Juros (1884–1912)"},

{slug:"o-rothbard-money", type:"lectio", f:"O", title:"Rothbard · What Is Money?",
 body:`<p>Murray Rothbard: money is the universally accepted medium of exchange. It emerges on the market, not by state decree. Historically, from barter: cattle, salt, shells, metals. Gold and silver won not because governments picked them but because they were durable, divisible, portable, and scarce. The market selected the money.</p>
<p>What happens when the state substitutes its paper for the market's metal, and then detaches the paper from the metal (1933 in the US; 1971 globally)? The incentive to print exceeds the incentive to save. Every modern state eventually inflates. Every modern inflation was predicted by someone in 1920. Nobody listened then either.</p>`,
 src:"Murray Rothbard, What Has Government Done to Our Money? (1963)",
 title_pt:"Rothbard · O Que É Dinheiro?",
 body_pt:`<p>Murray Rothbard: dinheiro é o meio de troca universalmente aceito. Emerge no mercado, não por decreto do Estado. Historicamente, do escambo: gado, sal, conchas, metais. Ouro e prata venceram não por escolha de governos, mas por serem duráveis, divisíveis, portáteis e escassos. O mercado selecionou o dinheiro.</p>
<p>O que acontece quando o Estado substitui o metal do mercado pelo próprio papel, e depois desatrela o papel do metal (1933 nos EUA; 1971 globalmente)? O incentivo a imprimir supera o incentivo a poupar. Todo Estado moderno acaba inflacionando. Toda inflação moderna foi prevista por alguém em 1920. Ninguém ouviu então, tampouco.</p>`,
 src_pt:"Murray Rothbard, O Que o Governo Fez com o Nosso Dinheiro? (1963)"},

{slug:"o-abct", type:"lectio", f:"O", title:"The Austrian Business Cycle",
 body:`<p>Mises and Hayek's theory, in four moves.</p>
<p>(1) The central bank lowers interest rates below where free savers would set them. (2) Businesses, misreading the price, begin long-term, capital-intensive projects that would only pay off if people had actually saved to fund them. (3) But people haven't; the signal was false. (4) When the real pattern of consumer preference reasserts, the misdirected projects reveal themselves as unprofitable, and the bust corrects the boom.</p>
<p>Houses in 2008. Dot-coms in 2000. Cryptocurrencies in 2022. The pattern is the same every time: a false price caused a real misallocation; the recession is not the problem but the cure.</p>
<p>The policy that makes the recession "easier" by lowering rates <em>again</em> prepares the next, larger misallocation. This is why Austrians look so grim at central bank press conferences.</p>`,
 src:"Mises, Theory of Money and Credit (1912); Hayek, Prices and Production (1931)",
 title_pt:"O Ciclo Austríaco de Negócios",
 body_pt:`<p>A teoria de Mises e Hayek, em quatro movimentos.</p>
<p>(1) O banco central reduz os juros abaixo do nível em que poupadores livres os fixariam. (2) Empresas, lendo mal o preço, iniciam projetos de longo prazo e capital-intensivos que só se pagariam se as pessoas tivessem efetivamente poupado. (3) Mas não pouparam; o sinal era falso. (4) Quando o padrão real de preferência dos consumidores se reafirma, os projetos mal-direcionados se revelam não rentáveis, e a quebra corrige o boom.</p>
<p>Imóveis em 2008. Dot-coms em 2000. Criptomoedas em 2022. O padrão é o mesmo: um preço falso causou má alocação real; a recessão não é o problema, mas a cura.</p>
<p>A política que torna a recessão "mais fácil" baixando os juros <em>outra vez</em> prepara a próxima má alocação, maior. Por isso os austríacos parecem tão sombrios em entrevistas de banco central.</p>`,
 src_pt:"Mises, Teoria da Moeda e do Crédito (1912); Hayek, Preços e Produção (1931)"},

{slug:"o-fed-balance", type:"lectio", f:"O", title:"The Fed's Balance Sheet · 2008–2024",
 body:`<p>In 2007 the Federal Reserve's balance sheet was about $0.9 trillion. By 2022 it was $8.9 trillion — a tenfold increase in fifteen years. The Fed bought bonds with dollars it created. The dollars entered the financial system first, which is why asset prices (stocks, houses, art, bitcoin) outran consumer prices for over a decade — the Cantillon effect, measured.</p>
<p>Then consumer inflation finally arrived in 2021. The Fed began shrinking the balance sheet (QT) and raising rates. The 60/40 portfolio had its worst year since 1931. Zombie companies that lived on cheap debt began to fail.</p>
<p>Austrian prediction: a decade of financial repression distorted the entire capital structure of the economy. Correcting it will be painful. Not correcting it will be more painful. There is no third door.</p>`,
 src:"Federal Reserve H.4.1 release; FRED series WALCL",
 title_pt:"O Balanço do Fed · 2008–2024",
 body_pt:`<p>Em 2007 o balanço do Federal Reserve era de cerca de US$ 0,9 trilhão. Em 2022, US$ 8,9 trilhões — aumento de dez vezes em quinze anos. O Fed comprou títulos com dólares que criou. Os dólares entraram antes no sistema financeiro, o que explica por que os preços de ativos (ações, imóveis, arte, bitcoin) correram à frente dos preços ao consumidor por mais de uma década — o efeito Cantillon, mensurado.</p>
<p>Então a inflação ao consumidor finalmente chegou, em 2021. O Fed começou a encolher o balanço (QT) e a subir juros. A carteira 60/40 teve seu pior ano desde 1931. Empresas zumbis que viviam de dívida barata começaram a quebrar.</p>
<p>Previsão austríaca: uma década de repressão financeira distorceu toda a estrutura de capital da economia. Corrigir isso será doloroso. Não corrigir, mais doloroso. Não há terceira porta.</p>`,
 src_pt:"Federal Reserve H.4.1; FRED série WALCL"},

{slug:"o-what-is-it-worth", type:"lectio", f:"O", title:"What Is It Worth?",
 body:`<p>Three answers to the same object. (1) To an accountant, it is worth whatever its last transaction says. (2) To an economist, it is worth the present value of its future cash flows. (3) To a market, it is worth whatever the marginal buyer pays today.</p>
<p>Each number can differ by orders of magnitude. The 2008 crisis was a reconciliation of (1) with (3). The 2000 bubble was (3) running without reference to (2). The best investors are willing to hold a view of (2) that differs from (3) for as long as it takes.</p>
<p>"Value investing" simply means: trust your (2), use (3) as a facility, treat (1) as a footnote.</p>`,
 src:"Marcos Nabhan, What Is It Worth? essay; after Graham & Dodd",
 title_pt:"Quanto Vale?",
 body_pt:`<p>Três respostas ao mesmo objeto. (1) Para o contador, vale o que a última transação disser. (2) Para o economista, vale o valor presente dos seus fluxos de caixa futuros. (3) Para o mercado, vale o que o comprador marginal paga hoje.</p>
<p>Cada número pode diferir por ordens de grandeza. A crise de 2008 foi uma reconciliação de (1) com (3). A bolha de 2000 foi (3) rodando sem referência a (2). Os melhores investidores sustentam uma visão de (2) que difere de (3) pelo tempo que for preciso.</p>
<p>"Value investing" significa simplesmente: confie no seu (2), use (3) como facilidade, trate (1) como nota de rodapé.</p>`,
 src_pt:"Marcos Nabhan, What Is It Worth?; segundo Graham & Dodd"},

{slug:"o-fiat-standard", type:"lectio", f:"O", title:"The Fiat Standard · Thesis",
 body:`<p>Saifedean Ammous's argument, in one line: when a civilization abandons hard money (money the state cannot print), its time preference rises. People save less, consume more, borrow more, invest shorter. The visible result over decades is a culture of impatience, inflation of asset prices against wages, financialization of everything, and a slow erosion of the long-horizon thinking that built the civilization in the first place.</p>
<p>The thesis is contested. Treat it as a thesis, not a settled fact. But the thesis is coherent, and the shape of the last fifty years is more consistent with it than with its denial. At minimum, it names a variable most macroeconomic textbooks pretend does not exist.</p>`,
 src:"Saifedean Ammous, The Fiat Standard (2021); The Bitcoin Standard (2018)",
 title_pt:"O Padrão Fiduciário · Tese",
 body_pt:`<p>O argumento de Saifedean Ammous, em uma linha: quando uma civilização abandona o dinheiro duro (dinheiro que o Estado não pode imprimir), sua preferência temporal sobe. Pessoas poupam menos, consomem mais, tomam mais dívida, investem com horizonte mais curto. O resultado visível, ao longo de décadas, é uma cultura de impaciência, inflação de preços de ativos contra salários, financeirização de tudo e lenta erosão do pensamento de longo prazo que construiu a civilização.</p>
<p>A tese é contestada. Trate-a como tese, não como fato pacífico. Mas é coerente, e a forma dos últimos cinquenta anos é mais consistente com ela do que com sua negação. No mínimo, nomeia uma variável que a maioria dos manuais macroeconômicos finge não existir.</p>`,
 src_pt:"Saifedean Ammous, The Fiat Standard (2021); The Bitcoin Standard (2018)"},

{slug:"o-moral-capitalism", type:"lectio", f:"O", title:"Centesimus Annus · The Free Economy",
 body:`<p>John Paul II, 1991, writing a hundred years after Leo XIII's <em>Rerum Novarum</em>, and two years after the Berlin Wall fell. The encyclical gave a surprisingly favorable account of the free economy — but with precise conditions.</p>
<p>§42: "If by 'capitalism' is meant an economic system which recognizes the fundamental and positive role of business, the market, private property and the resulting responsibility for the means of production, as well as free human creativity in the economic sector, then the answer is certainly in the affirmative…</p>
<p>But if by 'capitalism' is meant a system in which freedom in the economic sector is not circumscribed within a strong juridical framework which places it at the service of human freedom in its totality, and which sees it as a particular aspect of that freedom, the core of which is ethical and religious, then the reply is certainly negative."</p>
<p>Catholic social teaching does not pick a side in the economic debate. It names the conditions each side must meet.</p>`,
 src:"John Paul II, Centesimus Annus §42 (1991)",
 title_pt:"Centesimus Annus · A Economia Livre",
 body_pt:`<p>João Paulo II, 1991, escrevendo cem anos após <em>Rerum Novarum</em> de Leão XIII, e dois anos após a queda do Muro de Berlim. A encíclica apresentou um relato surpreendentemente favorável da economia livre — mas com condições precisas.</p>
<p>§42: "Se por 'capitalismo' se entende um sistema econômico que reconhece o papel fundamental e positivo da empresa, do mercado, da propriedade privada e da conseguinte responsabilidade pelos meios de produção, bem como da livre criatividade humana no setor da economia, a resposta é certamente positiva…</p>
<p>Mas, se por 'capitalismo' se entende um sistema em que a liberdade no setor da economia não está circunscrita por um sólido quadro jurídico que a coloque a serviço da liberdade humana integral e a veja como um aspecto particular dessa liberdade, cujo centro é ético e religioso, a resposta é certamente negativa."</p>
<p>A doutrina social católica não toma partido no debate econômico. Nomeia as condições que cada lado deve cumprir.</p>`,
 src_pt:"João Paulo II, Centesimus Annus §42 (1991)"},

{slug:"o-sowell-tradeoff", type:"sententia", f:"O", title:"Sowell · Trade-offs",
 body:`<blockquote>There are no solutions, only trade-offs.</blockquote>
<p>Thomas Sowell's rule for policy argument. Every proposed cure comes with a cost, often paid by people who were not at the table when the cure was proposed. The question is never whether a plan has costs; it is who pays them.</p>`,
 src:"Thomas Sowell, A Conflict of Visions (1987)",
 title_pt:"Sowell · Trocas",
 body_pt:`<blockquote>Não há soluções, só trocas.</blockquote>
<p>Regra de Thomas Sowell para o debate de políticas. Toda cura proposta vem com custo, muitas vezes pago por gente que não estava na mesa quando a cura foi proposta. A pergunta nunca é se um plano tem custos; é quem os paga.</p>`,
 src_pt:"Thomas Sowell, A Conflict of Visions (1987)"},

{slug:"o-sowell-welfare", type:"lectio", f:"O", title:"Sowell · The Welfare Family",
 body:`<p>Sowell's claim, defended in <em>Welfare and the Black Family</em> and elsewhere, with full data: the collapse of the black American family did not accompany slavery or Jim Crow. It accompanied the expansion of means-tested welfare after 1965.</p>
<p>In 1960, 22% of black children were born to unmarried mothers. By 2015, 70%. The 1960 figure is lower than today's figure for the US population as a whole. Something that was not the problem became the problem after a policy told fathers their income made them a liability.</p>
<p>Sowell's larger point: the incentive structure of a welfare program is a policy of family formation, whether its designers intend it to be or not. Pretending otherwise is not compassion; it is cowardice.</p>`,
 src:"Thomas Sowell, Economic Facts and Fallacies; Marcos Nabhan, Welfare & the Black Family",
 title_pt:"Sowell · A Família e o Welfare",
 body_pt:`<p>Tese de Sowell, defendida em <em>Welfare and the Black Family</em> e em outros lugares, com dados: o colapso da família negra americana não acompanhou a escravidão nem Jim Crow. Acompanhou a expansão do welfare condicionado à renda após 1965.</p>
<p>Em 1960, 22% das crianças negras nasciam de mães solteiras. Em 2015, 70%. O número de 1960 é menor do que o atual para a população americana como um todo. Algo que não era o problema tornou-se o problema depois de uma política que informou aos pais que a renda deles os tornava um ônus.</p>
<p>O ponto mais amplo de Sowell: a estrutura de incentivos de um programa social é uma política de formação familiar, queiram ou não os seus desenhadores. Fingir o contrário não é compaixão; é covardia.</p>`,
 src_pt:"Thomas Sowell, Economic Facts and Fallacies; Marcos Nabhan, Welfare & a Família Negra"},

{slug:"o-margin-safety", type:"lectio", f:"O", title:"Margin of Safety",
 body:`<p>Graham's foundational idea, three words that justify half of his book: <em>margin of safety</em>. You do not buy a dollar for ninety cents; you buy it for sixty. The forty-cent discount is not greed. It is the margin that absorbs your inevitable errors.</p>
<p>The engineer who designs a bridge for ten tons but tests it to fifty is not being paranoid. He is designing for conditions he cannot foresee. The investor who buys only when valuations give him 40% headroom is doing the same.</p>
<p>Why most investors fail: they imagine they can predict the next five years accurately enough to pay fair value and still win. Nobody can. Only the margin of safety protects you from the forecasts you were sure of.</p>`,
 src:"Benjamin Graham, The Intelligent Investor (1949), ch. 20",
 title_pt:"Margem de Segurança",
 body_pt:`<p>A ideia fundacional de Graham, três palavras que justificam metade do seu livro: <em>margem de segurança</em>. Você não compra um real por noventa centavos; compra por sessenta. Os quarenta centavos de desconto não são ganância. São a margem que absorve seus erros inevitáveis.</p>
<p>O engenheiro que desenha uma ponte para dez toneladas mas a testa a cinquenta não é paranoico. Projeta para condições que não pode prever. O investidor que compra apenas quando as avaliações lhe deixam 40% de folga faz o mesmo.</p>
<p>Por que a maioria dos investidores falha: imaginam prever os próximos cinco anos com precisão suficiente para pagar valor justo e ainda vencer. Ninguém consegue. Só a margem de segurança o protege das previsões das quais você estava certo.</p>`,
 src_pt:"Benjamin Graham, O Investidor Inteligente (1949), cap. 20"},

{slug:"o-attrib-austrian", type:"ludus", mode:"attributio", f:"O",
 title:"Ludus · Mises or Hayek?",
 body:`<p>Five lines. Each is either Mises (1881–1973) or Hayek (1899–1992). Attribute each.</p>`,
 authors:["Mises","Hayek"],
 quotes:[
   {q:"Human action is purposeful behavior.", a:"Mises"},
   {q:"The curious task of economics is to show men how little they really know.", a:"Hayek"},
   {q:"The economic problem of society is a problem of utilization of knowledge not given to anyone in its totality.", a:"Hayek"},
   {q:"Economics deals with real men as they are, not as they might be.", a:"Mises"},
   {q:"The road to serfdom is paved with good intentions.", a:"Hayek"}
 ],
 src:"Attributio · Oeconomia · Mises vs Hayek",
 title_pt:"Ludus · Mises ou Hayek?",
 body_pt:`<p>Cinco frases. Cada uma é de Mises (1881–1973) ou Hayek (1899–1992). Atribua cada uma.</p>`,
 authors_pt:["Mises","Hayek"],
 quotes_pt:[
   {q:"A ação humana é comportamento intencional.", a:"Mises"},
   {q:"A curiosa tarefa da economia é mostrar aos homens o pouco que eles realmente sabem.", a:"Hayek"},
   {q:"O problema econômico da sociedade é um problema de uso de conhecimento não dado a ninguém em sua totalidade.", a:"Hayek"},
   {q:"A economia lida com homens reais como são, não como poderiam ser.", a:"Mises"},
   {q:"O caminho para a servidão é pavimentado com boas intenções.", a:"Hayek"}
 ],
 src_pt:"Attributio · Oeconomia · Mises vs Hayek"},

{slug:"o-sort-cycle", type:"ludus", mode:"sort", f:"O",
 title:"Ludus · The Great Panics",
 body:`<p>Five financial crises. Put them in chronological order — earliest first.</p>`,
 items:[
   {label:"Tulip Mania · Dutch Republic", year:1637},
   {label:"South Sea Bubble · London", year:1720},
   {label:"Panic of 1873 · Vienna/New York", year:1873},
   {label:"Wall Street Crash", year:1929},
   {label:"Global Financial Crisis", year:2008}
 ],
 src:"Chronology · Panics",
 title_pt:"Ludus · Os Grandes Pânicos",
 body_pt:`<p>Cinco crises financeiras. Coloque-as em ordem cronológica — mais antiga primeiro.</p>`,
 items_pt:[
   {label:"Mania das Tulipas · Países Baixos", year:1637},
   {label:"Bolha dos Mares do Sul · Londres", year:1720},
   {label:"Pânico de 1873 · Viena/Nova York", year:1873},
   {label:"Queda de Wall Street", year:1929},
   {label:"Crise Financeira Global", year:2008}
 ],
 src_pt:"Cronologia · Pânicos"},

{slug:"o-complementum-smith", type:"ludus", mode:"complementum", f:"O",
 title:"Ludus · Fill the Keystone · Smith",
 body:`<p>Adam Smith's most famous sentence, with one noun removed.</p>`,
 fills:[{
   before:"It is not from the benevolence of the butcher, the brewer, or the baker, that we expect our dinner, but from their regard to their own",
   after:".",
   correct:"interest",
   opts:["interest","profit","benefit","welfare"],
   src:"Adam Smith, Wealth of Nations (1776), I.ii.2"
 }],
 src:"Complementum · Smith",
 title_pt:"Ludus · Preencha a Pedra Angular · Smith",
 body_pt:`<p>A frase mais famosa de Adam Smith, com um substantivo removido.</p>`,
 fills_pt:[{
   before:"Não é da benevolência do açougueiro, do cervejeiro ou do padeiro que esperamos nosso jantar, mas do fato de que cada um cuida do seu próprio",
   after:".",
   correct:"interesse",
   opts:["interesse","lucro","benefício","bem-estar"],
   src:"Adam Smith, A Riqueza das Nações (1776), I.ii.2"
 }],
 src_pt:"Complementum · Smith"}
];
FOLIOS.push(...OECONOMIA_X);

// ================================================================
// NEGOTIUM EXPANSION (+11 to reach 50)
// ================================================================
const NEGOTIUM_X = [
{slug:"n-circle-competence", type:"lectio", f:"N", title:"Circle of Competence",
 body:`<p>Buffett's simplest rule, and the hardest to actually keep. You do not need to understand every business. You need to understand <em>which</em> businesses you understand, and refuse the rest.</p>
<p>The honest circle of competence has sharp edges. You can tell inside it from outside it. You do not drift. You do not say "well, I know enough." You either know the business well enough to predict its ten-year earnings with a straight face, or you don't.</p>
<p>Munger: "It's not a competency if you don't know the edge of it." Many investors never built one because they never let themselves refuse anything long enough to notice what was missing.</p>`,
 src:"Warren Buffett, Berkshire letters passim; Charlie Munger",
 title_pt:"Círculo de Competência",
 body_pt:`<p>Regra mais simples de Buffett, e a mais difícil de de fato manter. Você não precisa entender todo negócio. Precisa entender <em>quais</em> negócios você entende, e recusar o resto.</p>
<p>O círculo honesto de competência tem bordas nítidas. Você sabe do lado de dentro para o lado de fora. Não deriva. Não diz "bom, eu sei o bastante". Ou você conhece o negócio bem o bastante para prever seus lucros de dez anos com cara séria, ou não.</p>
<p>Munger: "Não é competência se você não conhece a borda dela." Muitos investidores nunca construíram uma porque nunca se permitiram recusar nada por tempo suficiente para notar o que faltava.</p>`,
 src_pt:"Warren Buffett, cartas da Berkshire passim; Charlie Munger"},

{slug:"n-float-insurance", type:"lectio", f:"N", title:"The Insurance Float",
 body:`<p>Why Berkshire Hathaway is a quilt of ordinary insurance companies rather than a glittering fund: the <em>float</em>.</p>
<p>An insurance company collects premiums today and pays claims later. The money sitting between the two is called float. If underwriting is disciplined enough that claims equal premiums over a cycle, the float is <em>free money to invest</em>, and Berkshire has had tens of billions of it for decades.</p>
<p>Buffett did not get rich picking stocks a little better than everyone else. He got rich picking stocks a little better than everyone else <em>with other people's money that he was being paid to hold</em>. Leverage, costless, nearly permanent. Nobody else was doing it this way.</p>`,
 src:"Warren Buffett, Berkshire Hathaway letters, 1967–present",
 title_pt:"O Float dos Seguros",
 body_pt:`<p>Por que a Berkshire Hathaway é uma colcha de seguradoras ordinárias e não um fundo brilhante: o <em>float</em>.</p>
<p>Uma seguradora recolhe prêmios hoje e paga sinistros depois. O dinheiro parado entre os dois chama-se float. Se a subscrição for disciplinada o bastante para que sinistros se igualem a prêmios ao longo de um ciclo, o float é <em>dinheiro de graça para investir</em>, e a Berkshire tem dezenas de bilhões disso há décadas.</p>
<p>Buffett não ficou rico escolhendo ações um pouco melhor que os outros. Ficou rico escolhendo ações um pouco melhor que os outros <em>com dinheiro alheio que lhe pagavam para segurar</em>. Alavancagem, sem custo, quase permanente. Ninguém mais fazia dessa forma.</p>`,
 src_pt:"Warren Buffett, cartas da Berkshire Hathaway, 1967–hoje"},

{slug:"n-cannibals", type:"lectio", f:"N", title:"The Cannibal Companies",
 body:`<p>A certain kind of company does not grow. It generates cash, pays no dividend, and spends every spare dollar buying back its own stock. Over ten years, the share count falls 50%. Each remaining share now owns twice the business it did.</p>
<p>Autozone did it. Nvr did it. Dillard's did it. If the underlying business is stable, the mechanics turn each shareholder into a larger owner year by year without the shareholder lifting a finger. Taxes are deferred until the shareholder sells, which can be forever.</p>
<p>Charlie Munger's expression for this pattern: cannibal companies. They eat themselves and the surviving shareholders inherit everything.</p>`,
 src:"Charlie Munger; Dhandho Investor principles",
 title_pt:"As Empresas Canibais",
 body_pt:`<p>Certo tipo de empresa não cresce. Gera caixa, não paga dividendo, e gasta cada real sobrando recomprando as próprias ações. Em dez anos, o número de ações cai 50%. Cada ação remanescente agora é dona de duas vezes o negócio que era.</p>
<p>Autozone fez. Nvr fez. Dillard's fez. Se o negócio subjacente for estável, a mecânica transforma cada acionista num dono maior, ano após ano, sem que o acionista levante um dedo. Impostos são diferidos até o acionista vender, o que pode ser para sempre.</p>
<p>A expressão de Charlie Munger para esse padrão: empresas canibais. Comem a si mesmas e os acionistas sobreviventes herdam tudo.</p>`,
 src_pt:"Charlie Munger; princípios Dhandho"},

{slug:"n-porter-5", type:"lectio", f:"N", title:"Porter's Five Forces",
 body:`<p>Michael Porter's framework from 1979. The attractiveness of an industry is determined by five forces, not by growth. (1) Threat of new entrants. (2) Bargaining power of suppliers. (3) Bargaining power of buyers. (4) Threat of substitutes. (5) Intensity of competitive rivalry.</p>
<p>Airlines have been a growth industry for a century and have cumulatively lost money. Why? Low entry barriers, suppliers (Boeing/Airbus, airports, unions) with pricing power, buyers (us) who shop by price, substitutes (video calls, trains), and brutal rivalry. The forces are all against the industry.</p>
<p>Software has been a growth industry too, with the forces mostly in favor. Comparing the margin of a SaaS company to an airline is not a lesson in capitalism; it is a lesson in Porter's five.</p>`,
 src:"Michael Porter, How Competitive Forces Shape Strategy, HBR (1979)",
 title_pt:"As Cinco Forças de Porter",
 body_pt:`<p>Quadro de Michael Porter, 1979. A atratividade de uma indústria é decidida por cinco forças, não pelo crescimento. (1) Ameaça de novos entrantes. (2) Poder de barganha dos fornecedores. (3) Poder de barganha dos compradores. (4) Ameaça de substitutos. (5) Intensidade da rivalidade competitiva.</p>
<p>As companhias aéreas foram setor em crescimento por um século e, cumulativamente, perderam dinheiro. Por quê? Baixas barreiras de entrada, fornecedores (Boeing/Airbus, aeroportos, sindicatos) com poder de preço, compradores (nós) que escolhem por preço, substitutos (videoconferência, trens) e rivalidade brutal. As forças estão todas contra o setor.</p>
<p>Software também foi setor em crescimento, com as forças majoritariamente a favor. Comparar a margem de uma SaaS com a de uma companhia aérea não é lição de capitalismo; é lição das cinco forças de Porter.</p>`,
 src_pt:"Michael Porter, How Competitive Forces Shape Strategy, HBR (1979)"},

{slug:"n-christensen-disrupt", type:"lectio", f:"N", title:"The Innovator's Dilemma",
 body:`<p>Clayton Christensen, 1997. Why do well-run incumbents keep losing to upstart competitors? Not because they are stupid or lazy — the opposite. They listen to their best customers, invest in their highest-margin product lines, and pass on the small, scrappy market that doesn't move the quarterly needle.</p>
<p>The upstart serves the small market with an inferior but cheaper product. The product improves. One day the upstart's cheap offering is good enough for the incumbent's main customers, and the incumbent, having rationally refused the small market for years, has no low-end product to defend with.</p>
<p>Steel mills. Hard drives. Newspapers. Taxis. Hotels. Each watched the pattern play out in real time while being told, by consultants with Harvard credentials, that focusing on the best customers was the right call.</p>`,
 src:"Clayton Christensen, The Innovator's Dilemma (1997)",
 title_pt:"O Dilema do Inovador",
 body_pt:`<p>Clayton Christensen, 1997. Por que incumbentes bem geridos continuam perdendo para novatos? Não por serem burros ou preguiçosos — o oposto. Ouvem seus melhores clientes, investem nas linhas de produto de maior margem, e deixam passar o mercadinho esforçado que não mexe o ponteiro trimestral.</p>
<p>O novato serve o mercadinho com um produto inferior, porém mais barato. O produto melhora. Um dia, a oferta barata do novato é boa o bastante para os clientes principais do incumbente, e o incumbente, por ter racionalmente recusado o mercadinho por anos, não tem produto de baixa gama para defender-se.</p>
<p>Usinas de aço. Discos rígidos. Jornais. Táxis. Hotéis. Cada um assistiu ao padrão em tempo real, enquanto consultores com crédito de Harvard lhes diziam que focar nos melhores clientes era a decisão certa.</p>`,
 src_pt:"Clayton Christensen, O Dilema do Inovador (1997)"},

{slug:"n-drucker-doing-right", type:"sententia", f:"N", title:"Drucker · Useless Efficiency",
 body:`<blockquote>There is nothing so useless as doing efficiently that which should not be done at all.</blockquote>
<p>Peter Drucker. The first management question is not <em>how</em> but <em>what</em>. Ninety percent of corporate anxiety is clever execution of the wrong task.</p>`,
 src:"Peter Drucker, The Effective Executive (1967)",
 title_pt:"Drucker · Eficiência Inútil",
 body_pt:`<blockquote>Nada é tão inútil quanto fazer com eficiência o que não deveria ser feito.</blockquote>
<p>Peter Drucker. A primeira pergunta da gestão não é <em>como</em>, mas <em>o quê</em>. Noventa por cento da ansiedade corporativa é execução inteligente da tarefa errada.</p>`,
 src_pt:"Peter Drucker, O Executivo Eficaz (1967)"},

{slug:"n-kelly", type:"lectio", f:"N", title:"The Kelly Criterion",
 body:`<p>John Kelly, Bell Labs, 1956. Given a bet with edge, how much of your bankroll should you bet to maximize long-term growth?</p>
<p>Formula: f* = (p·b − q) / b, where p is your probability of winning, q = 1 − p, and b is the net odds. The result f* is the <em>fraction of bankroll</em> to risk on this bet.</p>
<p>Two surprises. First, Kelly tells you to bet a lot when your edge is big and bets are discrete — a 60% edge on even money says bet 20% of the bankroll. Second, overbetting (above f*) is catastrophic; the growth rate turns negative long before the bet becomes "unfair." Most retail traders, imagining 2× Kelly is just more aggressive, discover that it is actually ruinous. The curve is punishing in a way intuition is not.</p>`,
 src:"J. L. Kelly, A New Interpretation of Information Rate (1956)",
 title_pt:"O Critério de Kelly",
 body_pt:`<p>John Kelly, Bell Labs, 1956. Dada uma aposta com vantagem, quanto do bankroll apostar para maximizar o crescimento de longo prazo?</p>
<p>Fórmula: f* = (p·b − q) / b, onde p é sua probabilidade de ganhar, q = 1 − p, e b é a cotação líquida. O resultado f* é a <em>fração do bankroll</em> a arriscar nessa aposta.</p>
<p>Duas surpresas. Primeira, Kelly diz para apostar bastante quando a vantagem é grande e as apostas são discretas — uma vantagem de 60% num par recomenda 20% do bankroll. Segunda, apostar acima de f* é catastrófico; a taxa de crescimento vira negativa muito antes de a aposta ser "injusta". A maioria dos traders de varejo, imaginando que 2× Kelly é só mais agressivo, descobre que é, na verdade, ruinoso. A curva é implacável de um jeito que a intuição não é.</p>`,
 src_pt:"J. L. Kelly, A New Interpretation of Information Rate (1956)"},

{slug:"n-base-rates", type:"lectio", f:"N", title:"Base Rates",
 body:`<p>Michael Mauboussin's reminder: before you decide anything about this venture — a merger, a hire, a product launch — look at the <em>base rate</em>. What percent of comparable attempts succeeded? What percent of IPOs beat the market five years out? What percent of first-time managers under 30 last three years?</p>
<p>The answer is almost always worse than your intuition. Intuition supplies you with the inside view: the compelling specifics of <em>this</em> case, which feel diagnostic. The base rate supplies the outside view: the brute statistics of cases that looked compelling to someone, and mostly failed.</p>
<p>Combine the two. Start with the base rate as your prior; adjust only to the extent you can name specific, verifiable features that genuinely distinguish this case from the reference class. Most inside-view adjustments are wishful thinking in a lab coat.</p>`,
 src:"Michael Mauboussin; Kahneman, Thinking Fast and Slow",
 title_pt:"Taxas de Base",
 body_pt:`<p>Lembrete de Michael Mauboussin: antes de decidir qualquer coisa sobre esta aventura — uma fusão, uma contratação, um lançamento — olhe a <em>taxa de base</em>. Que percentual de tentativas comparáveis teve êxito? Que percentual de IPOs supera o mercado em cinco anos? Que percentual de gestores de primeira viagem com menos de 30 anos dura três?</p>
<p>A resposta é quase sempre pior do que sua intuição. A intuição te dá a visão interna: os detalhes atraentes <em>deste</em> caso, que parecem diagnósticos. A taxa de base dá a visão externa: as estatísticas brutas de casos que pareceram atraentes a alguém e, em geral, falharam.</p>
<p>Combine as duas. Comece pela taxa de base como seu <em>prior</em>; ajuste apenas na medida em que puder nomear traços específicos e verificáveis que de fato distinguem este caso da classe de referência. A maioria dos ajustes de visão interna é pensamento mágico de jaleco.</p>`,
 src_pt:"Michael Mauboussin; Kahneman, Rápido e Devagar"},

{slug:"n-monty-hall", type:"quaestio", f:"N", title:"The Monty Hall Problem",
 body:`<p>Three doors. Behind one, a car. Behind the other two, goats. You pick door 1. Monty, who knows what is behind every door, opens door 3 to reveal a goat. He asks: do you want to switch to door 2?</p>`,
 opts:["No — the odds are now 50/50","Yes — switching doubles your odds","It doesn't matter"],
 correct:1,
 reveal:`<p>Yes, switching. Your original pick had 1/3 chance of being right; the other two doors together had 2/3. Monty's opening of a known-goat door does not change the aggregate; the 2/3 collapses onto the remaining unopened door. Switching gives you 2/3; staying gives you 1/3.</p>
<p>Marilyn vos Savant published this answer in 1990 and received thousands of angry letters, many from mathematicians, telling her she was wrong. She wasn't. The lesson is epistemological: the correct answer is sometimes counter-intuitive and the right response to intuition fighting you is to run the simulation.</p>`,
 src:"Marilyn vos Savant, Parade (1990); classic probability puzzle",
 title_pt:"O Problema de Monty Hall",
 body_pt:`<p>Três portas. Atrás de uma, um carro. Atrás das outras duas, cabras. Você escolhe a porta 1. Monty, que sabe o que há atrás de cada porta, abre a porta 3 e revela uma cabra. Ele pergunta: quer trocar para a porta 2?</p>`,
 opts_pt:["Não — a chance agora é 50/50","Sim — trocar dobra suas chances","Dá no mesmo"],
 reveal_pt:`<p>Sim, trocar. Sua escolha original tinha 1/3 de chance de estar certa; as outras duas portas, juntas, 2/3. A abertura de uma porta de cabra conhecida não altera o agregado; os 2/3 colapsam sobre a porta restante ainda fechada. Trocar dá a você 2/3; ficar dá 1/3.</p>
<p>Marilyn vos Savant publicou essa resposta em 1990 e recebeu milhares de cartas raivosas, muitas de matemáticos, dizendo que ela estava errada. Não estava. A lição é epistemológica: a resposta correta é às vezes contraintuitiva, e a resposta certa à intuição que te combate é rodar a simulação.</p>`,
 src_pt:"Marilyn vos Savant, Parade (1990); clássico de probabilidade"},

{slug:"n-mungers-list", type:"lectio", f:"N", rare:1, title:"Munger · The Psychology of Misjudgment",
 body:`<p>Charlie Munger's 1995 Harvard Law School speech listed 25 cognitive biases long before <em>Thinking Fast and Slow</em>. Among the sharpest:</p>
<p><strong>Reciprocation tendency</strong>: we return favors even from strangers, so a free gift primes a sale. <strong>Liking/loving tendency</strong>: we over-believe people we like. <strong>Social proof</strong>: in uncertainty, we copy the herd. <strong>Deprival super-reaction</strong>: losses hurt more than equal gains please. <strong>Lollapalooza</strong>: when several biases align in one direction, their effect multiplies, not merely adds.</p>
<p>Munger's point: a man who does not know the biases cannot defend against them. A man who knows them can design his life to blunt their edges — avoid envy by not comparing, avoid the lollapalooza by never being in the room when it fires.</p>`,
 src:"Charlie Munger, The Psychology of Human Misjudgment (Harvard Law School, 1995)",
 title_pt:"Munger · A Psicologia do Mau Julgamento",
 body_pt:`<p>O discurso de Charlie Munger na Harvard Law School, em 1995, listou 25 vieses cognitivos muito antes de <em>Rápido e Devagar</em>. Entre os mais afiados:</p>
<p><strong>Tendência à reciprocidade</strong>: retribuímos favores mesmo a estranhos, de modo que um brinde prepara uma venda. <strong>Tendência de gostar/amar</strong>: acreditamos demais em quem gostamos. <strong>Prova social</strong>: na incerteza, copiamos o rebanho. <strong>Super-reação à privação</strong>: perdas doem mais do que ganhos iguais agradam. <strong>Lollapalooza</strong>: quando vários vieses se alinham na mesma direção, o efeito multiplica, não só soma.</p>
<p>O ponto de Munger: quem não conhece os vieses não se defende deles. Quem os conhece desenha a vida para suavizar suas arestas — evita a inveja não comparando, evita o lollapalooza nunca estando na sala quando ele dispara.</p>`,
 src_pt:"Charlie Munger, A Psicologia do Mau Julgamento Humano (Harvard Law School, 1995)"},

{slug:"n-sort-books", type:"ludus", mode:"sort", f:"N",
 title:"Ludus · Business Books",
 body:`<p>Five landmark business books. Chronological order, earliest first.</p>`,
 items:[
   {label:"Smith · Wealth of Nations", year:1776},
   {label:"Graham · Security Analysis", year:1934},
   {label:"Drucker · The Practice of Management", year:1954},
   {label:"Porter · Competitive Strategy", year:1980},
   {label:"Christensen · Innovator's Dilemma", year:1997}
 ],
 src:"Chronology · Business Books",
 title_pt:"Ludus · Livros de Negócios",
 body_pt:`<p>Cinco livros marcantes de negócios. Ordem cronológica, mais antigo primeiro.</p>`,
 items_pt:[
   {label:"Smith · A Riqueza das Nações", year:1776},
   {label:"Graham · Security Analysis", year:1934},
   {label:"Drucker · A Prática da Administração", year:1954},
   {label:"Porter · Estratégia Competitiva", year:1980},
   {label:"Christensen · O Dilema do Inovador", year:1997}
 ],
 src_pt:"Cronologia · Livros de Negócios"}
];
FOLIOS.push(...NEGOTIUM_X);

// WAVE 4 — PULCHRUM EXPANSION (+35 to reach 50-ish)
const PULCHRUM_X = [
{slug:"p-giotto-lamentation", type:"lectio", f:"P", title:"Giotto · The Lamentation",
 body:`<p>Padua, 1305. Scrovegni Chapel. Giotto paints Christ dead and takes the whole picture off the vertical. Mary bends to meet his face. John throws his arms back. Even the angels, half-hidden in the sky, writhe. Nothing in Byzantine painting had this permission to grieve.</p>
<p>The hills slope downward toward Christ's head. The composition is geological; the earth itself leans toward him. Western painting learns to feel on this wall.</p>`,
 src:"Giotto, Lamentation, 1305, Cappella degli Scrovegni, Padua",
 title_pt:"Giotto · A Lamentação",
 body_pt:`<p>Pádua, 1305. Capela Scrovegni. Giotto pinta Cristo morto e inclina a imagem inteira do vertical. Maria se curva até o rosto dele. João joga os braços para trás. Até os anjos, meio escondidos no céu, se contorcem. Nada na pintura bizantina teve essa licença de luto.</p>
<p>Os montes se inclinam para a cabeça de Cristo. A composição é geológica; a própria terra pende em sua direção. A pintura ocidental aprende a sentir nesta parede.</p>`,
 src_pt:"Giotto, Lamentação, 1305, Capela degli Scrovegni, Pádua"},

{slug:"p-botticelli-primavera", type:"lectio", f:"P", title:"Botticelli · Primavera",
 body:`<p>Nine figures in an orange grove. Right to left: Zephyr seizes the nymph Chloris; she becomes Flora in a flowered dress; Venus stands at the center with Cupid; the Three Graces dance; Mercury parts the clouds. Spring is read not left-to-right but as a transformation unfolding over the whole canvas at once.</p>
<p>Botticelli painted it for a Medici cousin's wedding chamber. It is a sermon on how a soul moves from carnal love (right) to divine contemplation (left), guided through the center by Venus, who in Florentine Neoplatonism was no pagan goddess but a figure of charity.</p>`,
 src:"Sandro Botticelli, Primavera, c. 1482, Uffizi, Florence",
 title_pt:"Botticelli · Primavera",
 body_pt:`<p>Nove figuras num laranjal. Da direita para a esquerda: Zéfiro agarra a ninfa Clóris; ela se torna Flora de vestido florido; Vênus está no centro com Cupido; as Três Graças dançam; Mercúrio afasta as nuvens. A primavera não se lê da esquerda para a direita, mas como uma transformação que se desdobra em toda a tela ao mesmo tempo.</p>
<p>Botticelli pintou-a para a câmara nupcial de um primo dos Médici. É sermão sobre como a alma passa do amor carnal (direita) à contemplação divina (esquerda), guiada no centro por Vênus, que no neoplatonismo florentino não era deusa pagã, mas figura da caridade.</p>`,
 src_pt:"Sandro Botticelli, Primavera, c. 1482, Uffizi, Florença"},

{slug:"p-van-eyck-arnolfini", type:"lectio", f:"P", title:"Van Eyck · Arnolfini",
 body:`<p>Bruges, 1434. Oil paint had just been invented. Van Eyck gives us a merchant and his wife in a bedroom, hand-raised in oath. On the back wall, a convex mirror. In the mirror, the room reversed — and two more figures, witnesses. Above the mirror, in careful Latin: <em>Johannes de eyck fuit hic. 1434.</em> "Jan van Eyck was here."</p>
<p>The painter is one of the witnesses. The painting is a legal document. Northern painting opens its five-hundred-year tradition on an act of forensic realism.</p>`,
 src:"Jan van Eyck, Portrait of Giovanni Arnolfini and his Wife, 1434, National Gallery, London",
 title_pt:"Van Eyck · Arnolfini",
 body_pt:`<p>Bruges, 1434. A tinta a óleo acabara de ser inventada. Van Eyck nos dá um mercador e sua esposa num quarto, de mão erguida em juramento. Na parede do fundo, um espelho convexo. No espelho, o quarto invertido — e mais duas figuras, testemunhas. Acima do espelho, em latim cuidadoso: <em>Johannes de eyck fuit hic. 1434.</em> "Jan van Eyck esteve aqui."</p>
<p>O pintor é uma das testemunhas. O quadro é documento jurídico. A pintura do norte abre sua tradição de quinhentos anos num ato de realismo forense.</p>`,
 src_pt:"Jan van Eyck, Retrato de Giovanni Arnolfini e sua Esposa, 1434, National Gallery, Londres"},

{slug:"p-caravaggio-thomas", type:"lectio", f:"P", title:"Caravaggio · Doubting Thomas",
 body:`<p>Caravaggio makes the invisible into surgery. Thomas, the apostle who refused to believe, has his finger pushed into the wound in Christ's side — not metaphorically, not symbolically. Christ's own hand guides it in.</p>
<p>Two other apostles lean in with the same hungry curiosity. No haloes. No gold. Only three unshaven men crowded close to a fourth whose body still carries its injuries. Faith, Caravaggio says, is not a feeling. It is an inspection.</p>`,
 src:"Caravaggio, The Incredulity of Saint Thomas, c. 1602, Sanssouci, Potsdam",
 title_pt:"Caravaggio · A Incredulidade de Tomé",
 body_pt:`<p>Caravaggio torna o invisível em cirurgia. Tomé, o apóstolo que se recusara a crer, tem o dedo empurrado para dentro da ferida no lado de Cristo — não metaforicamente, não simbolicamente. A própria mão de Cristo o guia para dentro.</p>
<p>Outros dois apóstolos se inclinam com a mesma curiosidade faminta. Sem auréolas. Sem ouro. Só três homens por barbear amontoados junto de um quarto cujo corpo ainda carrega as feridas. A fé, diz Caravaggio, não é um sentimento. É uma inspeção.</p>`,
 src_pt:"Caravaggio, A Incredulidade de São Tomé, c. 1602, Sanssouci, Potsdam"},

{slug:"p-raphael-athens", type:"lectio", f:"P", rare:1, title:"Raphael · The School of Athens",
 body:`<p>Vatican, 1511. Raphael fills a 25-foot wall with every great philosopher pretending to be in the same room. Plato (center-left) points up — the Forms live in a world beyond this one. Aristotle (center-right) extends his hand flat — the real is here, in the particulars.</p>
<p>Right of Aristotle: Euclid draws on a slate, modeled after Bramante. Pythagoras writes a tablet at the lower left. Diogenes sprawls alone on the steps. The brooding man in the foreground, chin on fist — that is Michelangelo, painted by Raphael as Heraclitus the weeping philosopher. Painters giving each other citations across centuries.</p>`,
 src:"Raphael, The School of Athens, 1509–1511, Stanza della Segnatura, Vatican",
 title_pt:"Rafael · A Escola de Atenas",
 body_pt:`<p>Vaticano, 1511. Rafael preenche uma parede de 7 metros com todos os grandes filósofos fingindo estar na mesma sala. Platão (centro-esquerda) aponta para cima — as Formas vivem num mundo além deste. Aristóteles (centro-direita) estende a mão aberta — o real está aqui, nos particulares.</p>
<p>À direita de Aristóteles: Euclides desenha numa lousa, com o rosto de Bramante. Pitágoras escreve numa tabuleta no canto inferior esquerdo. Diógenes se esparrama sozinho na escada. O homem pensativo no primeiro plano, queixo no punho — é Michelangelo, pintado por Rafael como Heráclito, o filósofo que chora. Pintores dando citações uns aos outros atravessando séculos.</p>`,
 src_pt:"Rafael, A Escola de Atenas, 1509–1511, Stanza della Segnatura, Vaticano"},

{slug:"p-rembrandt-prodigal", type:"lectio", f:"P", title:"Rembrandt · The Return of the Prodigal",
 body:`<p>Rembrandt's last large painting, finished the year he died, 1669. The son has come home. He kneels, head shaved, feet calloused. The father bends over him with both hands on his shoulders — and the hands are not symmetrical. One is young, strong, masculine; the other is lined, delicate, feminine. God mothers and fathers at the same moment.</p>
<p>Behind, the elder son stands upright in red, arms folded. He has not yet come inside the embrace. The painting is twelve feet tall and the elder son's face is where you keep looking.</p>`,
 src:"Rembrandt van Rijn, The Return of the Prodigal Son, c. 1669, Hermitage, Saint Petersburg",
 title_pt:"Rembrandt · O Retorno do Filho Pródigo",
 body_pt:`<p>O último grande quadro de Rembrandt, terminado no ano de sua morte, 1669. O filho voltou. Ajoelha-se, cabeça raspada, pés calejados. O pai se curva sobre ele com as duas mãos nos ombros — e as mãos não são simétricas. Uma é jovem, forte, masculina; a outra, cheia de linhas, delicada, feminina. Deus é mãe e pai no mesmo instante.</p>
<p>Ao fundo, o irmão mais velho está em pé, de vermelho, braços cruzados. Ainda não entrou no abraço. O quadro tem quatro metros, e é no rosto do mais velho que o olho sempre volta.</p>`,
 src_pt:"Rembrandt van Rijn, O Retorno do Filho Pródigo, c. 1669, Hermitage, São Petersburgo"},

{slug:"p-las-meninas", type:"lectio", f:"P", rare:1, title:"Velázquez · Las Meninas",
 body:`<p>Madrid, 1656. Velázquez paints himself painting the king and queen of Spain — except we never see what he is painting. We see the room from the position of the king and queen. We are the royal couple. The infanta Margarita looks straight at us, surrounded by her maids. In the back, a mirror shows the king and queen; or does it show the painting itself? Foucault spent twenty pages on which it is.</p>
<p>Four hundred years later, every attempt to work out the geometry of the room contradicts another. The painting cannot be solved. Velázquez left a puzzle in the Prado for painters to visit, and they do.</p>`,
 src:"Diego Velázquez, Las Meninas, 1656, Museo del Prado, Madrid",
 title_pt:"Velázquez · As Meninas",
 body_pt:`<p>Madri, 1656. Velázquez pinta-se pintando o rei e a rainha da Espanha — só que nunca vemos o que ele está pintando. Vemos a sala a partir da posição do rei e da rainha. Somos o casal real. A infanta Margarita olha diretamente para nós, cercada pelas aias. Ao fundo, um espelho mostra o rei e a rainha; ou mostra o próprio quadro? Foucault gastou vinte páginas tentando decidir.</p>
<p>Quatrocentos anos depois, toda tentativa de resolver a geometria da sala contradiz outra. O quadro não pode ser resolvido. Velázquez deixou um enigma no Prado para os pintores visitarem, e eles visitam.</p>`,
 src_pt:"Diego Velázquez, As Meninas, 1656, Museu do Prado, Madri"},

{slug:"p-rublev-trinity", type:"lectio", f:"P", title:"Rublev · The Trinity",
 body:`<p>Russia, c. 1411. Andrei Rublev paints three angels at Mamre, where Abraham entertained three visitors in Genesis 18. The icon is 142 × 114 cm. For six centuries it has been read as the clearest visual theology of the Trinity ever made.</p>
<p>The three figures incline toward each other, forming a circle. No one dominates. There is an empty place at the near side of the table, facing the viewer — a chalice between the three. The viewer is invited into the circle. Icon as liturgy, not illustration.</p>`,
 src:"Andrei Rublev, The Trinity, c. 1411, Tretyakov Gallery, Moscow",
 title_pt:"Rublev · A Trindade",
 body_pt:`<p>Rússia, c. 1411. Andrei Rublev pinta três anjos em Mamre, onde Abraão recebeu três visitantes em Gênesis 18. O ícone tem 142 × 114 cm. Por seis séculos, foi lido como a teologia visual mais clara da Trindade jamais feita.</p>
<p>As três figuras inclinam-se umas para as outras, formando um círculo. Nenhuma domina. Há um lugar vazio do lado próximo da mesa, voltado para o espectador — um cálice entre os três. O espectador é convidado para o círculo. Ícone como liturgia, não como ilustração.</p>`,
 src_pt:"Andrei Rublev, A Trindade, c. 1411, Galeria Tretyakov, Moscou"},

{slug:"p-hagia-sophia", type:"lectio", f:"P", title:"Hagia Sophia · Light Suspended",
 body:`<p>Constantinople, 537. Justinian walks into the finished basilica and says, according to the chronicler, "Solomon, I have surpassed thee." The dome spans 31 meters, pierced at the base by forty windows so close together that from inside it looks as though the dome is <em>suspended from heaven on a golden chain</em>. The phrase is Procopius's.</p>
<p>The engineering was a gamble. The dome fell in 558 and was rebuilt. It has stood through fourteen centuries, four empires, three religions. No one has built a thing that holds the sky up with light since.</p>`,
 src:"Hagia Sophia, Istanbul; Procopius, Buildings I.1 (c. 554)",
 title_pt:"Hagia Sophia · Luz Suspensa",
 body_pt:`<p>Constantinopla, 537. Justiniano entra na basílica recém-concluída e, segundo o cronista, diz: "Salomão, eu te superei." A cúpula vence 31 metros, perfurada na base por quarenta janelas tão próximas que, de dentro, parece que a cúpula está <em>suspensa do céu por uma corrente de ouro</em>. A frase é de Procópio.</p>
<p>A engenharia era uma aposta. A cúpula caiu em 558 e foi reconstruída. Está em pé há catorze séculos, quatro impérios, três religiões. Ninguém mais ergueu coisa que segurasse o céu pela luz.</p>`,
 src_pt:"Hagia Sophia, Istambul; Procópio, Edifícios I.1 (c. 554)"},

{slug:"p-saint-denis", type:"lectio", f:"P", title:"Saint-Denis · Abbot Suger's Light",
 body:`<p>Paris, 1140s. Abbot Suger rebuilds the royal abbey of Saint-Denis and invents the Gothic. His program was theological: light, for the Pseudo-Dionysius whose writings he loved, was the manifestation of God. Make the walls as light as possible so the glass could do what masonry had been doing.</p>
<p>Pointed arches to carry weight sideways. Flying buttresses to catch the thrust outside. Rib vaults to free the walls. The walls, now unloaded, could dissolve into stained glass. The cathedral was no longer a stone box; it was a lantern.</p>`,
 src:"Abbey of Saint-Denis, choir 1140–44; Suger, De Administratione",
 title_pt:"Saint-Denis · A Luz do Abade Suger",
 body_pt:`<p>Paris, 1140s. O abade Suger reconstrói a abadia real de Saint-Denis e inventa o gótico. Seu programa era teológico: a luz, para o Pseudo-Dionísio que ele amava, era manifestação de Deus. Deixe as paredes tão leves quanto possível para que o vidro faça o que a pedra vinha fazendo.</p>
<p>Arcos ogivais para carregar o peso lateralmente. Arcobotantes para pegar o impulso por fora. Abóbadas de nervura para libertar as paredes. As paredes, agora descarregadas, puderam dissolver-se em vitral. A catedral deixou de ser caixa de pedra; virou lanterna.</p>`,
 src_pt:"Abadia de Saint-Denis, coro 1140–44; Suger, De Administratione"},

{slug:"p-notre-dame-fire", type:"lectio", f:"P", title:"Notre-Dame · April 15, 2019",
 body:`<p>Smoke climbing out of the spire at 7 pm. Within an hour the roof was engulfed. The spire fell at 7:50, a hole opening in the vault above the nave. The two towers held. Five years later, December 2024, the restored cathedral reopened for Mass.</p>
<p>What saved the stones was that the vaults — ribbed Gothic masonry — held the burning timbers off the stone below. Suger's engineering, 850 years after he died, kept Notre-Dame alive against a fire its builders never saw. The thing was built so well that even its burning was contained.</p>`,
 src:"Notre-Dame de Paris, 1163–1345; fire 15 April 2019; reopened 7 December 2024",
 title_pt:"Notre-Dame · 15 de Abril de 2019",
 body_pt:`<p>Fumaça subindo da flecha às 19h. Em uma hora o telhado estava tomado. A flecha caiu às 19h50, abrindo um buraco na abóbada acima da nave. As duas torres resistiram. Cinco anos depois, dezembro de 2024, a catedral restaurada reabriu para a Missa.</p>
<p>O que salvou as pedras foram as abóbadas — alvenaria gótica em nervuras — que mantiveram a madeira em chamas longe da pedra abaixo. A engenharia de Suger, 850 anos depois de sua morte, manteve Notre-Dame viva contra um fogo que seus construtores nunca viram. A coisa foi construída tão bem que até o próprio incêndio ficou contido.</p>`,
 src_pt:"Notre-Dame de Paris, 1163–1345; incêndio 15 abr. 2019; reaberta 7 dez. 2024"},

{slug:"p-palestrina", type:"lectio", f:"P", title:"Palestrina · Missa Papae Marcelli",
 body:`<p>Legend, often told as fact: at the Council of Trent in the 1560s, cardinals considered banning polyphony from the Mass. Too many voices, the Latin lost in a thicket of counterpoint. Palestrina composed a mass setting so clear that every word could be understood even in six-voice polyphony. The cardinals withdrew the ban. Polyphony survived.</p>
<p>The legend is partly embellished — Trent never seriously proposed abolition — but the setting is real, and it did settle the technique of counterpoint for four centuries. The <em>Missa Papae Marcelli</em> is still what music schools teach when they teach how not to crush a text with the music over it.</p>`,
 src:"G. P. da Palestrina, Missa Papae Marcelli, published 1567",
 title_pt:"Palestrina · Missa Papae Marcelli",
 body_pt:`<p>Lenda, muitas vezes contada como fato: no Concílio de Trento, nos anos 1560, cardeais consideraram banir a polifonia da Missa. Vozes demais, o latim perdido num matagal de contraponto. Palestrina compôs uma missa tão clara que cada palavra podia ser entendida mesmo em polifonia a seis vozes. Os cardeais retiraram o banimento. A polifonia sobreviveu.</p>
<p>A lenda é parcialmente ornamentada — Trento nunca propôs seriamente a abolição — mas a obra é real, e assentou a técnica do contraponto por quatro séculos. A <em>Missa Papae Marcelli</em> ainda é o que as escolas de música ensinam quando ensinam a não esmagar um texto com a música que corre por cima.</p>`,
 src_pt:"G. P. da Palestrina, Missa Papae Marcelli, publicada 1567"},

{slug:"p-tallis-spem", type:"lectio", f:"P", rare:1, title:"Tallis · Spem in alium",
 body:`<p>Forty voices. Eight choirs of five each. For most of the piece they sing against each other; at one point all forty converge on a single chord that opens like a flower and lasts eleven seconds. The 1570 motet is still, by common consent, the summit of Renaissance polyphony.</p>
<p>The text is Judith's hymn: <em>spem in alium nunquam habui praeter in te</em>. "I have never put my hope in another but in Thee." Tallis built an architecture of forty parts to carry one sentence of trust.</p>`,
 src:"Thomas Tallis, Spem in alium nunquam habui, c. 1570",
 title_pt:"Tallis · Spem in alium",
 body_pt:`<p>Quarenta vozes. Oito coros de cinco. Durante a maior parte da peça cantam uns contra os outros; em certo ponto, todos os quarenta convergem num só acorde que se abre como uma flor e dura onze segundos. O moteto de 1570 ainda é, por consenso, o cume da polifonia renascentista.</p>
<p>O texto é o hino de Judite: <em>spem in alium nunquam habui praeter in te</em>. "Nunca pus a esperança em outrem senão em Ti." Tallis construiu uma arquitetura de quarenta partes para carregar uma frase de confiança.</p>`,
 src_pt:"Thomas Tallis, Spem in alium nunquam habui, c. 1570"},

{slug:"p-bach-matthew", type:"lectio", f:"P", rare:1, title:"Bach · St Matthew Passion",
 body:`<p>Good Friday, 1727, Leipzig. Bach deploys two choirs, two orchestras, soloists, chorales, and three hours to retell Matthew 26–27. Not an opera — opera was forbidden in Lutheran worship — but a liturgical form that happens to contain the strongest music of the century.</p>
<p>The alto aria <em>Erbarme dich, mein Gott</em> ("Have mercy, my God") comes after Peter's denial. A single violin weeps for seven minutes. Mendelssohn resurrected the whole work in 1829; without that performance the Bach we have would not exist in the shape he has.</p>`,
 src:"J. S. Bach, St Matthew Passion, BWV 244 (1727)",
 title_pt:"Bach · Paixão Segundo São Mateus",
 body_pt:`<p>Sexta-feira Santa, 1727, Leipzig. Bach dispõe dois coros, duas orquestras, solistas, corais e três horas para recontar Mateus 26–27. Não é ópera — ópera era proibida no culto luterano — mas uma forma litúrgica que, por acaso, contém a música mais forte do século.</p>
<p>A ária de contralto <em>Erbarme dich, mein Gott</em> ("Tem piedade, meu Deus") vem depois da negação de Pedro. Um único violino chora por sete minutos. Mendelssohn ressuscitou a obra inteira em 1829; sem essa execução, o Bach que temos não existiria na forma em que ele existe.</p>`,
 src_pt:"J. S. Bach, Paixão Segundo São Mateus, BWV 244 (1727)"},

{slug:"p-mozart-requiem", type:"lectio", f:"P", title:"Mozart · The Requiem",
 body:`<p>Vienna, July 1791. A stranger in grey commissions a requiem Mass, pays half in advance, refuses to leave a name. Mozart, dying without knowing it, works on the piece through the autumn. He completes the <em>Introit</em>, most of the <em>Kyrie</em>, the sequence through <em>Lacrimosa</em> (eight bars), and sketches for the rest.</p>
<p>On December 5 he dies. His student Süssmayr completes the work for the widow Constanze, who needed the fee. The stranger turns out to have been an aristocrat named Walsegg, planning to pass the Requiem off as his own in memory of his dead wife.</p>
<p>What survives of pure Mozart in the Requiem is enough.</p>`,
 src:"W. A. Mozart, Requiem in D minor, K. 626 (1791)",
 title_pt:"Mozart · O Réquiem",
 body_pt:`<p>Viena, julho de 1791. Um estranho de cinza encomenda uma Missa de Réquiem, paga metade adiantado, recusa dar o nome. Mozart, moribundo sem saber, trabalha na peça pelo outono. Completa o <em>Introito</em>, a maior parte do <em>Kyrie</em>, a sequência até o <em>Lacrimosa</em> (oito compassos), e esboços para o resto.</p>
<p>Em 5 de dezembro, morre. Seu aluno Süssmayr termina a obra para a viúva Constanze, que precisava do cachê. O estranho acabou se revelando um aristocrata chamado Walsegg, que planejava passar o Réquiem como obra sua em memória da esposa morta.</p>
<p>O que sobrevive de puro Mozart no Réquiem já basta.</p>`,
 src_pt:"W. A. Mozart, Réquiem em Ré menor, K. 626 (1791)"},

{slug:"p-beethoven-late", type:"lectio", f:"P", title:"Beethoven · The Late Quartets",
 body:`<p>Last six years of his life. Totally deaf. Beethoven wrote five quartets, Opus 127, 130, 131, 132, 135, and the <em>Grosse Fuge</em>. Nobody understood them at the time. His contemporaries thought he had finally gone mad. Stravinsky called them, a century later, "contemporary forever."</p>
<p>Opus 131 is in seven movements played without pause, in C-sharp minor, forty minutes long. There is a sentence of Beethoven's about writing it: "Thank God, less lack of imagination than before." He wrote this from inside total silence.</p>`,
 src:"L. van Beethoven, late string quartets, Opp. 127, 130, 131, 132, 133, 135 (1824–1826)",
 title_pt:"Beethoven · Os Últimos Quartetos",
 body_pt:`<p>Últimos seis anos de vida. Totalmente surdo. Beethoven escreveu cinco quartetos, op. 127, 130, 131, 132, 135, e a <em>Grosse Fuge</em>. Ninguém os entendeu à época. Seus contemporâneos acharam que ele enlouquecera de vez. Stravinsky os chamaria, um século depois, de "contemporâneos para sempre".</p>
<p>O op. 131 tem sete movimentos tocados sem pausa, em dó sustenido menor, quarenta minutos de duração. Há uma frase de Beethoven sobre escrevê-lo: "Graças a Deus, menos falta de imaginação que antes." Escreveu isto de dentro do silêncio total.</p>`,
 src_pt:"L. van Beethoven, quartetos tardios, op. 127, 130, 131, 132, 133, 135 (1824–1826)"},

{slug:"p-bruckner-7", type:"lectio", f:"P", title:"Bruckner · Symphony No. 7",
 body:`<p>Vienna, 1884. Anton Bruckner is sixty, obscure, obsessive. He writes the second-movement Adagio of his Seventh Symphony in C-sharp minor, in Wagner tubas, with Wagner dying as he writes. The Adagio becomes a 20-minute threnody — the closest thing the nineteenth century produced to a <em>Pietà</em> in sound.</p>
<p>Scruton on Bruckner: a composer who built cathedrals when all his contemporaries were building salons.</p>`,
 src:"Anton Bruckner, Symphony No. 7 in E major (1881–1883)",
 title_pt:"Bruckner · Sinfonia Nº 7",
 body_pt:`<p>Viena, 1884. Anton Bruckner tem sessenta anos, é obscuro, obsessivo. Escreve o Adagio do segundo movimento da Sétima Sinfonia em dó sustenido menor, com tubas wagnerianas, enquanto Wagner morre. O Adagio se torna uma treno de vinte minutos — o mais perto que o século XIX chegou de uma <em>Pietà</em> em som.</p>
<p>Scruton sobre Bruckner: um compositor que construiu catedrais enquanto todos os seus contemporâneos construíam salões.</p>`,
 src_pt:"Anton Bruckner, Sinfonia Nº 7 em Mi maior (1881–1883)"},

{slug:"p-wagner-tristan", type:"lectio", f:"P", title:"Wagner · Tristan's Chord",
 body:`<p>The <em>Tristan</em> prelude opens with a chord that does not resolve for four hours. Wagner delays the tonic through fourteen scenes of unconsumable longing until the <em>Liebestod</em> at the end finally places it, and Isolde dies in the arms of a Tristan already dead.</p>
<p>Scruton wrote a whole book, <em>Death-Devoted Heart</em>, on this one opera. His thesis: Wagner is the last composer who still believed music could carry the full religious load, and <em>Tristan</em> is the fullest attempt. One can refuse the religion and still feel the weight.</p>`,
 src:"Richard Wagner, Tristan und Isolde (1859); Roger Scruton, Death-Devoted Heart (2004)",
 title_pt:"Wagner · O Acorde de Tristão",
 body_pt:`<p>O prelúdio de <em>Tristão</em> começa com um acorde que não se resolve por quatro horas. Wagner adia a tônica por catorze cenas de desejo inconsumível, até a <em>Liebestod</em> no fim finalmente a assentar, e Isolda morre nos braços de um Tristão já morto.</p>
<p>Scruton escreveu um livro inteiro, <em>Death-Devoted Heart</em>, sobre esta única ópera. Sua tese: Wagner é o último compositor que ainda creu que a música podia carregar o fardo religioso inteiro, e <em>Tristão</em> é a tentativa mais completa. Pode-se recusar a religião e ainda sentir o peso.</p>`,
 src_pt:"Richard Wagner, Tristão e Isolda (1859); Roger Scruton, Death-Devoted Heart (2004)"},

{slug:"p-chant-dies", type:"lectio", f:"P", title:"Dies Irae",
 body:`<p>Written in the thirteenth century, probably by Thomas of Celano. A thirteen-century Latin poem on the Day of Wrath, sung in the Requiem Mass. The chant melody, four phrases that climb and fall, is one of the most-quoted themes in Western music: Berlioz, Liszt, Rachmaninoff, Saint-Saëns, John Williams. The dread lives in the chant itself.</p>
<p>Vatican II dropped the sequence from the ordinary Requiem. The 1962 Missal keeps it. Hearing it sung well, by candlelight, in Latin, is itself an argument.</p>`,
 src:"Thomas of Celano (attrib.), Dies Irae, c. 1260",
 title_pt:"Dies Irae",
 body_pt:`<p>Escrito no século XIII, provavelmente por Tomás de Celano. Poema latino do séc. XIII sobre o Dia da Ira, cantado na Missa de Réquiem. A melodia do canto, quatro frases que sobem e descem, é um dos temas mais citados da música ocidental: Berlioz, Liszt, Rachmaninoff, Saint-Saëns, John Williams. O pavor mora no próprio canto.</p>
<p>O Vaticano II retirou a sequência do Réquiem ordinário. O Missal de 1962 a conserva. Ouvi-la bem cantada, à luz de velas, em latim, é por si só um argumento.</p>`,
 src_pt:"Tomás de Celano (atrib.), Dies Irae, c. 1260"},

{slug:"p-vermeer-view", type:"lectio", f:"P", title:"Vermeer · View of Delft",
 body:`<p>Proust called this painting "the most beautiful picture in the world." He traveled to The Hague to see it twice. The second visit killed him — he collapsed in front of it. In <em>In Search of Lost Time</em> the writer Bergotte dies before this picture noticing the "little patch of yellow wall."</p>
<p>What is there to look at? A city skyline across a canal. Clouds. Two women in the foreground, barely painted. And one wall catching the sun with a quality of light that no painter has quite matched. Vermeer worked in Delft his whole life and painted maybe thirty-six surviving pictures. This is the one.</p>`,
 src:"Johannes Vermeer, View of Delft, c. 1661, Mauritshuis, The Hague",
 title_pt:"Vermeer · Vista de Delft",
 body_pt:`<p>Proust chamou este quadro de "o mais belo do mundo". Viajou a Haia para vê-lo duas vezes. A segunda visita o matou — caiu diante dele. Em <em>Em Busca do Tempo Perdido</em>, o escritor Bergotte morre diante desta pintura reparando na "pequena mancha de parede amarela".</p>
<p>O que há para ver? Uma silhueta de cidade atravessando um canal. Nuvens. Duas mulheres no primeiro plano, mal pintadas. E uma parede que capta o sol com uma qualidade de luz que nenhum pintor igualou. Vermeer trabalhou em Delft a vida toda e pintou talvez trinta e seis quadros sobreviventes. Este é O quadro.</p>`,
 src_pt:"Johannes Vermeer, Vista de Delft, c. 1661, Mauritshuis, Haia"},

{slug:"p-canaletto", type:"lectio", f:"P", title:"Canaletto · The Honest Camera",
 body:`<p>Venice, 1730s. Canaletto paints the Grand Canal with such topographic exactness that modern Venetians use his vedute to date the restoration of specific buildings. He worked with a camera obscura. His paintings are not photographs — he moved buildings around for composition — but they are architecture made visible with a precision no English Grand Tourist could resist buying.</p>
<p>The result: the best record of what Venice looked like in the eighteenth century lives in Woburn Abbey and Windsor, because the English bought it. The best picture of your own city is often made by someone who came as a tourist.</p>`,
 src:"Antonio Canaletto, Venetian vedute, 1720s–1760s",
 title_pt:"Canaletto · A Câmera Honesta",
 body_pt:`<p>Veneza, anos 1730. Canaletto pinta o Grande Canal com tal exatidão topográfica que os venezianos modernos usam suas vedute para datar a restauração de prédios específicos. Trabalhava com câmara escura. Suas pinturas não são fotos — ele movia prédios para a composição — mas são arquitetura tornada visível com uma precisão que nenhum inglês do Grand Tour resistia a comprar.</p>
<p>Resultado: o melhor registro de como Veneza era no séc. XVIII vive em Woburn Abbey e Windsor, porque os ingleses compraram. O melhor retrato da sua própria cidade é muitas vezes feito por alguém que veio como turista.</p>`,
 src_pt:"Antonio Canaletto, vedute venezianas, 1720s–1760s"},

{slug:"p-watteau-cythera", type:"lectio", f:"P", title:"Watteau · Pilgrimage to Cythera",
 body:`<p>Paris, 1717. Antoine Watteau submits <em>Pilgrimage to the Island of Cythera</em> as his reception piece at the French Academy, and they have to invent a new category for it — <em>fête galante</em>. The painting shows aristocrats on a wooded island after a day of courtship, preparing to leave. The light is already evening.</p>
<p>Nothing happens. Everything is about to end. The gentleness is also the sadness. Watteau died at 36 of tuberculosis; everything he painted carries the knowledge that the party ends.</p>`,
 src:"Antoine Watteau, Pilgrimage to Cythera, 1717, Louvre",
 title_pt:"Watteau · Peregrinação a Citera",
 body_pt:`<p>Paris, 1717. Antoine Watteau apresenta <em>Peregrinação à Ilha de Citera</em> como peça de recepção na Academia Francesa, e eles têm de inventar uma nova categoria — <em>fête galante</em>. O quadro mostra aristocratas numa ilha arborizada depois de um dia de corte, prestes a partir. A luz já é de fim de tarde.</p>
<p>Nada acontece. Tudo está prestes a terminar. A ternura é também a tristeza. Watteau morreu aos 36 de tuberculose; tudo o que pintou carrega o saber de que a festa acaba.</p>`,
 src_pt:"Antoine Watteau, Peregrinação a Citera, 1717, Louvre"},

{slug:"p-chardin-grace", type:"lectio", f:"P", title:"Chardin · Saying Grace",
 body:`<p>Paris, 1744. A mother reminds her small daughter to say grace before eating. The soup bowl is between them on a plain table. The light is kitchen light. Nothing more happens.</p>
<p>Diderot said of Chardin that he painted <em>air</em>. The dignity of domestic life is Chardin's whole subject. Vermeer did it in Protestant Delft; Chardin does it in Catholic Paris. Both painters refuse to flatter their subjects. Both end up on the Louvre's walls.</p>`,
 src:"Jean-Baptiste-Siméon Chardin, Le Bénédicité, 1744, Louvre",
 title_pt:"Chardin · A Bênção da Mesa",
 body_pt:`<p>Paris, 1744. Uma mãe lembra a pequena filha de dar graças antes de comer. A tigela de sopa está entre elas numa mesa simples. A luz é luz de cozinha. Nada mais acontece.</p>
<p>Diderot disse de Chardin que ele pintava <em>o ar</em>. A dignidade da vida doméstica é todo o tema de Chardin. Vermeer fez isso na Delft protestante; Chardin faz na Paris católica. Os dois pintores recusam adular seus temas. Os dois acabam nas paredes do Louvre.</p>`,
 src_pt:"Jean-Baptiste-Siméon Chardin, Le Bénédicité, 1744, Louvre"},

{slug:"p-friedrich-monk", type:"lectio", f:"P", title:"Friedrich · Monk by the Sea",
 body:`<p>A huge horizontal canvas. Three quarters of it is sky. A thin dark strip of sea. A thin paler strip of dune. One small figure, a monk, alone. Heinrich von Kleist wrote in 1810: it is "as if one's eyelids had been cut away." Friedrich left all the usual Romantic scenery out — no ruins, no trees, no mountain. Just a man and more sky than one person was meant to stand under.</p>
<p>The painting makes the viewer the monk. The ratio of self to world suddenly honest.</p>`,
 src:"Caspar David Friedrich, Monk by the Sea, 1810, Alte Nationalgalerie, Berlin",
 title_pt:"Friedrich · O Monge Junto ao Mar",
 body_pt:`<p>Uma tela horizontal enorme. Três quartos dela são céu. Uma faixa fina de mar escuro. Uma faixa mais clara de duna. Uma pequena figura, um monge, sozinho. Heinrich von Kleist escreveu em 1810: é "como se as pálpebras tivessem sido cortadas". Friedrich deixou de fora toda a cenografia romântica — nada de ruínas, de árvores, de montanha. Só um homem e mais céu do que uma pessoa foi feita para se postar sob.</p>
<p>O quadro faz do espectador o monge. A proporção entre o eu e o mundo subitamente honesta.</p>`,
 src_pt:"Caspar David Friedrich, O Monge Junto ao Mar, 1810, Alte Nationalgalerie, Berlim"},

{slug:"p-scruton-why-beauty", type:"lectio", f:"P", title:"Scruton · Why Beauty Matters",
 body:`<p>In the 2009 BBC documentary, Roger Scruton walks through a city of concrete office blocks, a gallery of smashed sculpture, and a performance of noise music, and makes the argument modern aesthetics has forgotten: beauty is not luxury. It is <em>meaning</em>. A world that abolishes beauty abolishes the thing that makes life worth defending.</p>
<p>His enemies are two: kitsch (sentimentality that cheats) and desecration (ugliness that insults). Both substitute shock for form. Both train the eye to despise its own natural judgments. Scruton's reply is to re-teach the judgment — slowly, through Chartres, through Chardin, through Mozart.</p>`,
 src:"Roger Scruton, Why Beauty Matters (BBC 2, 2009); Beauty (2009)",
 title_pt:"Scruton · Por Que a Beleza Importa",
 body_pt:`<p>No documentário da BBC de 2009, Roger Scruton atravessa uma cidade de blocos de concreto, uma galeria de escultura destroçada e uma performance de ruído, e faz o argumento que a estética moderna esqueceu: a beleza não é luxo. É <em>sentido</em>. Um mundo que abole a beleza abole aquilo que faz a vida valer a pena defender.</p>
<p>Seus inimigos são dois: o kitsch (sentimentalismo que trapaceia) e a profanação (feiura que insulta). Ambos substituem a forma pelo choque. Ambos treinam o olho a desprezar os próprios juízos naturais. A resposta de Scruton é reeducar o juízo — devagar, por Chartres, por Chardin, por Mozart.</p>`,
 src_pt:"Roger Scruton, Why Beauty Matters (BBC 2, 2009); Beauty (2009)"},

{slug:"p-pulchra-sunt", type:"sententia", f:"P", title:"Pulchra sunt",
 body:`<blockquote>Pulchra enim dicuntur quae visa placent.<br><em>Beautiful things are those which please when seen.</em></blockquote>
<p>Aquinas's one-sentence aesthetics. "Please when seen" — not after reasoning, not by argument. The judgment is immediate, and still real.</p>`,
 src:"Aquinas, Summa I, q.5, a.4 ad 1",
 title_pt:"Pulchra sunt",
 body_pt:`<blockquote>Pulchra enim dicuntur quae visa placent.<br><em>Belas são as coisas que, vistas, agradam.</em></blockquote>
<p>A estética de Aquino em uma frase. "Agradam, vistas" — não após raciocínio, não por argumento. O juízo é imediato, e ainda assim real.</p>`,
 src_pt:"Aquino, Suma I, q.5, a.4 ad 1"},

{slug:"p-splendor-veri", type:"sententia", f:"P", title:"Splendor veri",
 body:`<blockquote>Pulchritudo splendor veritatis est.<br><em>Beauty is the splendor of truth.</em></blockquote>
<p>Attributed, probably apocryphally, to Plato. True enough that the attribution has stuck for two thousand years. Beauty does not compete with truth; it is truth made visible.</p>`,
 src:"attributed to Plato; cited by Aquinas and Benedict XVI",
 title_pt:"Esplendor da Verdade",
 body_pt:`<blockquote>Pulchritudo splendor veritatis est.<br><em>A beleza é o esplendor da verdade.</em></blockquote>
<p>Atribuído, provavelmente apocrifamente, a Platão. Verdadeiro o bastante para que a atribuição tenha pegado por dois mil anos. A beleza não compete com a verdade; é a verdade tornada visível.</p>`,
 src_pt:"atribuído a Platão; citado por Aquino e Bento XVI"},

{slug:"p-balthasar-lost", type:"lectio", f:"P", title:"Balthasar · The Forgotten Transcendental",
 body:`<p>Hans Urs von Balthasar's provocation in his seven-volume <em>Glory of the Lord</em>: the modern Church has preached the True and the Good and quietly dropped the Beautiful. Three centuries of apologetics built on reason and ethics with nothing to say about splendor.</p>
<p>Result: a Church that could win every argument and still fail to attract. People do not seek religion because its syllogisms are tight. They seek it because its liturgy sings, its painters paint, its architects raise walls that make them weep. Drop beauty and you drop the invitation. Keep it and the arguments can wait.</p>`,
 src:"Hans Urs von Balthasar, Herrlichkeit (The Glory of the Lord), 1961–1969",
 title_pt:"Balthasar · O Transcendental Esquecido",
 body_pt:`<p>Provocação de Hans Urs von Balthasar nos sete volumes da <em>Glória do Senhor</em>: a Igreja moderna pregou o Verdadeiro e o Bom e silenciosamente abandonou o Belo. Três séculos de apologética construídos sobre a razão e a ética sem nada a dizer sobre o esplendor.</p>
<p>Resultado: uma Igreja capaz de vencer todo argumento e ainda assim incapaz de atrair. As pessoas não procuram a religião porque seus silogismos são apertados. Procuram-na porque sua liturgia canta, seus pintores pintam, seus arquitetos erguem paredes que as fazem chorar. Perdido o belo, perdido o convite. Guardado o belo, os argumentos podem esperar.</p>`,
 src_pt:"Hans Urs von Balthasar, Herrlichkeit (A Glória do Senhor), 1961–1969"},

{slug:"p-maritain-art-schol", type:"lectio", f:"P", title:"Maritain · Art and Scholasticism",
 body:`<p>Jacques Maritain, 1920. Art is a <em>virtue</em> of the practical intellect — the habit of making well, directed to the good of the thing made, not the maker. A craftsman does not sign his virtue; he signs a chair that stands.</p>
<p>Modern art mostly inverts this: the maker's expression becomes the point, the thing made becomes an alibi. Maritain's prediction: art severed from the virtue of making will become therapy or protest, both of which can be good things but neither of which is art.</p>`,
 src:"Jacques Maritain, Art and Scholasticism (1920)",
 title_pt:"Maritain · Arte e Escolástica",
 body_pt:`<p>Jacques Maritain, 1920. A arte é uma <em>virtude</em> do intelecto prático — o hábito de fazer bem, dirigido ao bem da coisa feita, não do fazedor. Um artesão não assina sua virtude; assina uma cadeira que fica em pé.</p>
<p>A arte moderna, na maior parte, inverte isso: a expressão do fazedor vira o ponto, a coisa feita vira álibi. Previsão de Maritain: a arte apartada da virtude de fazer tornar-se-á terapia ou protesto, as duas podem ser coisas boas, mas nenhuma das duas é arte.</p>`,
 src_pt:"Jacques Maritain, Arte e Escolástica (1920)"},

{slug:"p-vespers-monteverdi", type:"lectio", f:"P", title:"Monteverdi · Vespers of 1610",
 body:`<p>Published in 1610 as part of a job application. Monteverdi wanted a position in Rome; he never got it. Instead the <em>Vespers of the Blessed Virgin</em> opened a new continent in Western music: a Vespers of the Virgin stretched to 90 minutes, scored for massive forces, mixing Renaissance polyphony with Baroque recitative that Monteverdi had just invented in his operas.</p>
<p>Nothing like it had been written. Little like it was written for a hundred years after. If you want to hear what the counter-Reformation sounded like at its most ambitious, this is where you start.</p>`,
 src:"Claudio Monteverdi, Vespro della Beata Vergine (1610)",
 title_pt:"Monteverdi · Vésperas de 1610",
 body_pt:`<p>Publicado em 1610 como parte de uma candidatura a emprego. Monteverdi queria um posto em Roma; nunca o obteve. Em vez disso, as <em>Vésperas da Bem-Aventurada Virgem</em> abriram um novo continente na música ocidental: uma Vésperas da Virgem estendida a 90 minutos, escrita para forças massivas, misturando a polifonia renascentista com o recitativo barroco que o próprio Monteverdi acabava de inventar em suas óperas.</p>
<p>Nada parecido tinha sido escrito. Pouco parecido foi escrito nos cem anos seguintes. Se quiser ouvir como soava a Contra-Reforma no seu auge ambicioso, comece por aqui.</p>`,
 src_pt:"Claudio Monteverdi, Vespro della Beata Vergine (1610)"},

{slug:"p-chant-salve", type:"lectio", f:"P", title:"Salve Regina",
 body:`<p>Twelfth century, probably by Hermann of Reichenau, a monk crippled from birth who wrote the hymn from a chair he could not leave. Sung at Compline (night prayer) in Catholic monasteries for 900 years. The last line, "<em>O clemens, O pia, O dulcis Virgo Maria</em>," is the final sentence sung in a Dominican friar's life, by his brothers around his deathbed.</p>
<p>If you have never heard it sung in simple tone, sung by men, in a stone room, let it be the first chant you ever listen to on purpose. You will not forget it.</p>`,
 src:"Hermann of Reichenau, Salve Regina, c. 1054",
 title_pt:"Salve Regina",
 body_pt:`<p>Século XII, provavelmente de Hermano de Reichenau, monge paralítico de nascença que escreveu o hino de uma cadeira da qual não podia sair. Cantado em Completas (oração da noite) em mosteiros católicos há 900 anos. A última linha, "<em>O clemens, O pia, O dulcis Virgo Maria</em>", é a última frase cantada na vida de um frade dominicano, pelos irmãos em torno do leito de morte.</p>
<p>Se nunca o ouviu em tom simples, cantado por homens, numa sala de pedra, deixe este ser o primeiro canto que você escuta de propósito. Não vai esquecer.</p>`,
 src_pt:"Hermano de Reichenau, Salve Regina, c. 1054"},

{slug:"p-cologne-cathedral", type:"lectio", f:"P", title:"Cologne · 632 Years",
 body:`<p>Begun in 1248. Finished in 1880. 632 years. Twelve generations of masons died on the scaffolding. The medieval drawings for the façade were lost; found again in 1814 in two separate caches by two unconnected archivists; the drawings matched perfectly across the five hundred years of their separation.</p>
<p>The twin towers rose to 157 meters, the tallest building in the world for four years until the Washington Monument. In 1945 the cathedral stood among the rubble of the city because Allied bombers used its spires as a navigation landmark and spared them.</p>`,
 src:"Cologne Cathedral · Kölner Dom, 1248–1880",
 title_pt:"Colônia · 632 Anos",
 body_pt:`<p>Iniciada em 1248. Terminada em 1880. 632 anos. Doze gerações de pedreiros morreram nos andaimes. Os desenhos medievais da fachada se perderam; foram achados outra vez em 1814, em dois esconderijos separados, por dois arquivistas sem contato — os desenhos combinaram perfeitamente após cinco séculos de separação.</p>
<p>As duas torres gêmeas subiram a 157 metros, o prédio mais alto do mundo por quatro anos, até o Monumento a Washington. Em 1945 a catedral ficou de pé entre os escombros da cidade porque os bombardeiros aliados usavam suas flechas como ponto de referência de navegação e as pouparam.</p>`,
 src_pt:"Catedral de Colônia · Kölner Dom, 1248–1880"},

{slug:"p-piazza-rome", type:"lectio", f:"P", title:"Bernini · Piazza San Pietro",
 body:`<p>Gian Lorenzo Bernini, 1656. The piazza in front of St Peter's is enclosed by two curving colonnades, 284 columns, 162 saints on the roofline. The shape is an ellipse, which has two focal points — stand on one of them, and the four rows of columns align into a single row. The piazza is a theorem.</p>
<p>Bernini said the colonnades were "arms, reaching out to embrace Catholics, to reunite heretics, and to call unbelievers." Architecture as homily.</p>`,
 src:"Gian Lorenzo Bernini, Piazza San Pietro, 1656–1667",
 title_pt:"Bernini · Praça de São Pedro",
 body_pt:`<p>Gian Lorenzo Bernini, 1656. A praça diante de São Pedro é fechada por duas colunatas curvas, 284 colunas, 162 santos na linha do telhado. A forma é uma elipse, que tem dois focos — pare sobre um deles, e as quatro filas de colunas se alinham numa só fila. A praça é um teorema.</p>
<p>Bernini disse que as colunatas eram "braços, estendidos para abraçar os católicos, reunir os hereges e chamar os incrédulos". Arquitetura como homilia.</p>`,
 src_pt:"Gian Lorenzo Bernini, Piazza San Pietro, 1656–1667"},

{slug:"p-attrib-painters", type:"ludus", mode:"attributio", f:"P",
 title:"Ludus · Caravaggio or Vermeer?",
 body:`<p>Five short descriptions. Each fits either Caravaggio (1571–1610) or Vermeer (1632–1675). Attribute each.</p>`,
 authors:["Caravaggio","Vermeer"],
 quotes:[
   {q:"Painted calling scenes with harsh raking light from the side.", a:"Caravaggio"},
   {q:"Painted mostly women in domestic rooms, lit from a left-hand window.", a:"Vermeer"},
   {q:"Fled Rome after killing a man in a brawl.", a:"Caravaggio"},
   {q:"Painted perhaps 36 pictures in a quiet life in Delft.", a:"Vermeer"},
   {q:"Dark backgrounds; models drawn from Roman street life, prostitutes, laborers.", a:"Caravaggio"}
 ],
 src:"Attributio · Caravaggio vs Vermeer",
 title_pt:"Ludus · Caravaggio ou Vermeer?",
 body_pt:`<p>Cinco descrições curtas. Cada uma corresponde a Caravaggio (1571–1610) ou Vermeer (1632–1675). Atribua.</p>`,
 authors_pt:["Caravaggio","Vermeer"],
 quotes_pt:[
   {q:"Pintava cenas de vocação com luz rasante dura vinda de lado.", a:"Caravaggio"},
   {q:"Pintava sobretudo mulheres em quartos domésticos, iluminados por uma janela à esquerda.", a:"Vermeer"},
   {q:"Fugiu de Roma após matar um homem numa briga.", a:"Caravaggio"},
   {q:"Pintou talvez 36 quadros numa vida discreta em Delft.", a:"Vermeer"},
   {q:"Fundos escuros; modelos tirados da vida nas ruas de Roma, prostitutas, trabalhadores.", a:"Caravaggio"}
 ],
 src_pt:"Attributio · Caravaggio vs Vermeer"},

{slug:"p-sort-styles", type:"ludus", mode:"sort", f:"P",
 title:"Ludus · The Five Styles",
 body:`<p>Five art movements. Chronological order, earliest first.</p>`,
 items:[
   {label:"Romanesque", year:1050},
   {label:"Gothic", year:1140},
   {label:"Early Renaissance", year:1400},
   {label:"Baroque", year:1600},
   {label:"Romanticism", year:1800}
 ],
 src:"Chronology · Western art styles",
 title_pt:"Ludus · Os Cinco Estilos",
 body_pt:`<p>Cinco movimentos artísticos. Ordem cronológica, mais antigo primeiro.</p>`,
 items_pt:[
   {label:"Românico", year:1050},
   {label:"Gótico", year:1140},
   {label:"Renascimento Inicial", year:1400},
   {label:"Barroco", year:1600},
   {label:"Romantismo", year:1800}
 ],
 src_pt:"Cronologia · Estilos da arte ocidental"},

{slug:"p-veritas-wilde", type:"ludus", mode:"veritas", f:"P",
 title:"Ludus · Wilde · Real or Fake?",
 body:`<p>One of these is Oscar Wilde. The other is a plausible fake. Tap the real one.</p>`,
 twins:[
   {real:"All art is quite useless.",
    fake:"All true art is useful to the soul.",
    src:"Oscar Wilde, Preface to The Picture of Dorian Gray (1891)"}
 ],
 src:"Veritas · Wilde",
 title_pt:"Ludus · Wilde · Real ou Falso?",
 body_pt:`<p>Uma destas é de Oscar Wilde. A outra é uma falsificação plausível. Toque na real.</p>`,
 twins_pt:[
   {real:"Toda arte é bastante inútil.",
    fake:"Toda arte verdadeira é útil à alma.",
    src:"Oscar Wilde, Prefácio de O Retrato de Dorian Gray (1891)"}
 ],
 src_pt:"Veritas · Wilde"},

{slug:"p-complementum-keats", type:"ludus", mode:"complementum", f:"P",
 title:"Ludus · Fill the Keystone · Keats",
 body:`<p>Keats's famous couplet from the "Ode on a Grecian Urn", with one word removed.</p>`,
 fills:[{
   before:"Beauty is truth, truth beauty, — that is all / Ye know on earth, and all ye need to",
   after:".",
   correct:"know",
   opts:["know","be","see","love"],
   src:"John Keats, Ode on a Grecian Urn (1819)"
 }],
 src:"Complementum · Keats",
 title_pt:"Ludus · Preencha a Pedra Angular · Keats",
 body_pt:`<p>O célebre dístico de Keats, da "Ode a uma Urna Grega", com uma palavra removida.</p>`,
 fills_pt:[{
   before:"A beleza é verdade, a verdade beleza, — isso é tudo / O que sabeis na terra, e tudo o que precisais",
   after:".",
   correct:"saber",
   opts:["saber","ser","ver","amar"],
   src:"John Keats, Ode a uma Urna Grega (1819)"
 }],
 src_pt:"Complementum · Keats"}
];
FOLIOS.push(...PULCHRUM_X);

// WAVE 5 — PERCEPTIO EXPANSION (+40 to reach 50)
const PERCEPTIO_X = [
{slug:"c-brain-attic", type:"lectio", f:"C", title:"The Brain Attic",
 body:`<p>Holmes to Watson in <em>A Study in Scarlet</em>: "I consider that a man's brain originally is like a little empty attic, and you have to stock it with such furniture as you choose. A fool takes in all the lumber of every sort that he comes across, so that the knowledge which might be useful to him gets crowded out, or at best is jumbled up with a lot of other things."</p>
<p>Attention is a scarce resource, allocated in advance of use. The question is not what you can learn but what you refuse to clutter the attic with. The headlines of the day are lumber. The 1890 book is furniture.</p>`,
 src:"Arthur Conan Doyle, A Study in Scarlet (1887)",
 title_pt:"O Sótão da Mente",
 body_pt:`<p>Holmes a Watson em <em>Um Estudo em Vermelho</em>: "Considero que o cérebro de um homem é originalmente como um pequeno sótão vazio, e tem de ser mobiliado com o que se escolhe. O tolo recolhe toda a tralha com que esbarra, de modo que o conhecimento que lhe seria útil fica apertado ou, no melhor dos casos, misturado a um monte de outras coisas."</p>
<p>A atenção é recurso escasso, alocado antes do uso. A pergunta não é o que você consegue aprender, mas com o que você se recusa a entulhar o sótão. As manchetes do dia são tralha. O livro de 1890 é mobília.</p>`,
 src_pt:"Arthur Conan Doyle, Um Estudo em Vermelho (1887)"},

{slug:"c-dog-nighttime", type:"lectio", f:"C", title:"The Dog in the Night-Time",
 body:`<p>In "Silver Blaze," Holmes solves the case by noticing what did not happen. A racehorse was stolen from a stable; a dog was present; the dog did not bark.</p>
<p>"Is there any point to which you would wish to draw my attention?" "To the curious incident of the dog in the night-time." "The dog did nothing in the night-time." "That was the curious incident."</p>
<p>Holmes's method: observe absences. The silence proves the dog knew the thief. Most mistakes in diagnosis, investigation, and management come from attending only to what is there, not to what is missing.</p>`,
 src:"Arthur Conan Doyle, Silver Blaze (1892)",
 title_pt:"O Cão no Período Noturno",
 body_pt:`<p>Em "Estrela de Prata", Holmes resolve o caso notando o que não aconteceu. Um cavalo de corrida foi roubado da estrebaria; um cão estava presente; o cão não latiu.</p>
<p>"Há algum ponto para o qual queira chamar minha atenção?" "Para o curioso incidente do cão no período noturno." "O cão não fez nada no período noturno." "Esse foi o incidente curioso."</p>
<p>Método de Holmes: observe ausências. O silêncio prova que o cão conhecia o ladrão. A maior parte dos erros em diagnóstico, investigação e gestão vem de atender apenas ao que está, não ao que falta.</p>`,
 src_pt:"Arthur Conan Doyle, Estrela de Prata (1892)"},

{slug:"c-james-attention", type:"lectio", f:"C", title:"James · What Attention Is",
 body:`<p>William James, 1890, in <em>The Principles of Psychology</em>: "Everyone knows what attention is. It is the taking possession by the mind, in clear and vivid form, of one out of what seem several simultaneously possible objects or trains of thought. Focalization, concentration of consciousness are of its essence. It implies withdrawal from some things in order to deal effectively with others."</p>
<p>Note the last sentence. Attention is not addition. It is <em>withdrawal</em>. To attend to this is to decline that. Social media's crime is not that it shows you things. It is that it defeats the withdrawal.</p>`,
 src:"William James, The Principles of Psychology (1890), ch. XI",
 title_pt:"James · O Que É Atenção",
 body_pt:`<p>William James, 1890, em <em>Os Princípios da Psicologia</em>: "Todo mundo sabe o que é a atenção. É a tomada de posse pela mente, em forma clara e vívida, de um entre vários objetos ou cadeias de pensamento simultaneamente possíveis. Focalização, concentração da consciência, são da sua essência. Implica retirar-se de algumas coisas para lidar eficazmente com outras."</p>
<p>Note a última frase. A atenção não é adição. É <em>retirada</em>. Atender a isto é recusar aquilo. O crime das redes sociais não é mostrarem coisas. É derrotarem a retirada.</p>`,
 src_pt:"William James, Os Princípios da Psicologia (1890), cap. XI"},

{slug:"c-mastermind", type:"lectio", f:"C", title:"Konnikova · System Watson, System Holmes",
 body:`<p>Maria Konnikova's premise in <em>Mastermind</em>: Doyle anticipated Kahneman by seventy years. Watson is System 1 — fast, automatic, drawing on readily available impressions, usually wrong on anything that matters. Holmes is System 2 — slow, deliberate, inventorying detail and building hypothesis by hypothesis.</p>
<p>The lesson is practical: your default state is Watson. Holmes is a trainable override that costs energy. You will not Holmes your way through a day; nobody can. You can, however, decide the three moments a day at which you refuse the Watson reflex and inspect.</p>`,
 src:"Maria Konnikova, Mastermind: How to Think Like Sherlock Holmes (2013)",
 title_pt:"Konnikova · Sistema Watson, Sistema Holmes",
 body_pt:`<p>A premissa de Maria Konnikova em <em>Mastermind</em>: Doyle antecipou Kahneman em setenta anos. Watson é Sistema 1 — rápido, automático, apoiando-se em impressões imediatas, em geral errado em qualquer coisa que importe. Holmes é Sistema 2 — lento, deliberado, inventariando detalhes e construindo hipótese por hipótese.</p>
<p>A lição é prática: seu estado-padrão é Watson. Holmes é um substituto treinável que custa energia. Você não vai Holmes-se o dia inteiro; ninguém consegue. Pode, porém, decidir os três momentos do dia em que recusa o reflexo Watson e inspeciona.</p>`,
 src_pt:"Maria Konnikova, Mastermind: Como Pensar como Sherlock Holmes (2013)"},

{slug:"c-mcgilchrist", type:"lectio", f:"C", title:"McGilchrist · The Master and His Emissary",
 body:`<p>Iain McGilchrist's thesis: the two hemispheres of the brain are not responsible for different types of thinking (verbal vs. visual, logic vs. emotion). They are responsible for two different <em>attentions</em>. The right hemisphere sees the whole, the context, the new; the left zooms in, categorizes, manipulates. Both are needed. The right was meant to be the master and the left its emissary.</p>
<p>The thesis is contested. Modern neuroscience has walked some of the dichotomy back. Hold it as a thesis, not as settled science. But as a diagnosis of our cultural moment — all left-hemisphere grip, no right-hemisphere context — it names something you have felt without words.</p>`,
 src:"Iain McGilchrist, The Master and His Emissary (2009)",
 title_pt:"McGilchrist · O Mestre e Seu Emissário",
 body_pt:`<p>Tese de Iain McGilchrist: os dois hemisférios do cérebro não são responsáveis por tipos distintos de pensamento (verbal vs. visual, lógica vs. emoção). São responsáveis por duas <em>atenções</em> distintas. O hemisfério direito vê o todo, o contexto, o novo; o esquerdo foca, categoriza, manipula. Ambos são necessários. O direito foi feito para ser o mestre e o esquerdo seu emissário.</p>
<p>A tese é contestada. A neurociência moderna recuou um pouco da dicotomia. Sustente-a como tese, não como ciência pacífica. Mas como diagnóstico do nosso momento cultural — toda garra do hemisfério esquerdo, nenhum contexto do direito — nomeia algo que você sentiu sem palavras.</p>`,
 src_pt:"Iain McGilchrist, O Mestre e Seu Emissário (2009)"},

{slug:"c-system-1-2", type:"lectio", f:"C", title:"Kahneman · The Two Systems",
 body:`<p>Daniel Kahneman's structure for the whole book <em>Thinking, Fast and Slow</em>: System 1 is the fast, intuitive mind, running cheaply, usually right on routine, confidently wrong on anything novel. System 2 is the slow, effortful mind, which can override System 1 — but is lazy and seldom bothers.</p>
<p>Most "mistakes" are not stupidity. They are System 1 being left in charge of a question that required System 2. The practical corollary: before a decision that costs anything, name which system is answering, and ask whether that was the right one for this question.</p>`,
 src:"Daniel Kahneman, Thinking, Fast and Slow (2011)",
 title_pt:"Kahneman · Os Dois Sistemas",
 body_pt:`<p>A estrutura de Daniel Kahneman para o livro inteiro <em>Rápido e Devagar</em>: Sistema 1 é a mente rápida e intuitiva, rodando barato, em geral certa na rotina, confiantemente errada em qualquer coisa nova. Sistema 2 é a mente lenta e esforçada, que pode anular o Sistema 1 — mas é preguiçosa e raramente se mexe.</p>
<p>A maior parte dos "erros" não é burrice. É Sistema 1 deixado no comando de uma pergunta que exigia Sistema 2. O corolário prático: antes de uma decisão que custa alguma coisa, nomeie qual sistema está respondendo, e pergunte-se se era o certo para esta pergunta.</p>`,
 src_pt:"Daniel Kahneman, Rápido e Devagar (2011)"},

{slug:"c-wysiati", type:"lectio", f:"C", title:"WYSIATI",
 body:`<p>Kahneman's acronym: What You See Is All There Is. System 1 builds a confident story from whatever information happens to be in front of it, without pausing to ask whether more information exists.</p>
<p>You read a one-paragraph bio and feel you know the person. You see the first number on a page and anchor to it. You hear one side of a dispute and have formed an opinion by sentence four. In each case the mind did not fail to think; it drew from the sample it was given and never noticed the sample was all it had.</p>
<p>The antidote is one habit: before judging, name the information you do not have. If the list is long, slow down.</p>`,
 src:"Daniel Kahneman, Thinking, Fast and Slow (2011), ch. 7",
 title_pt:"WYSIATI",
 body_pt:`<p>A sigla de Kahneman: What You See Is All There Is — o que você vê é tudo o que há. O Sistema 1 constrói uma história confiante a partir do que estiver à sua frente, sem parar para perguntar se há mais informação.</p>
<p>Você lê uma biografia de um parágrafo e sente conhecer a pessoa. Vê o primeiro número da página e se ancora nele. Ouve um lado da disputa e já tem opinião formada na quarta frase. Em cada caso a mente não deixou de pensar; tirou da amostra que lhe foi dada e nunca percebeu que a amostra era tudo o que tinha.</p>
<p>O antídoto é um hábito: antes de julgar, nomeie a informação que você não tem. Se a lista for longa, desacelere.</p>`,
 src_pt:"Daniel Kahneman, Rápido e Devagar (2011), cap. 7"},

{slug:"c-anchoring", type:"exercitium", f:"C", title:"Anchoring · The Price Tag Trick",
 body:`<p>Imagine a sweater priced at $900, now marked down to $400. You feel the discount. Now imagine the same sweater simply priced at $400. Which price feels like a better deal?</p>
<p>Both are the same final number. The $900 anchor made $400 feel generous. Retail knows this and uses it against you every day. Legal negotiation knows it. Salary negotiation knows it. The first number any party puts on the table is an anchor.</p>`,
 reveal:`<p>Rule: whenever a number is offered, decide what the number would be <em>without</em> the anchor. If you cannot say, slow down. If you can, you have identified a free discount nobody charged you for — your own attention.</p>`,
 src:"Tversky & Kahneman (1974); Chris Voss, Never Split the Difference",
 title_pt:"Ancoragem · O Truque da Etiqueta",
 body_pt:`<p>Imagine uma blusa a R$ 900, agora rebaixada para R$ 400. Você sente o desconto. Agora imagine a mesma blusa simplesmente a R$ 400. Qual preço parece melhor negócio?</p>
<p>Os dois são o mesmo valor final. A âncora de R$ 900 fez os R$ 400 parecerem generosos. O varejo sabe disso e usa contra você todo dia. A negociação jurídica sabe. A negociação salarial sabe. O primeiro número que qualquer parte põe na mesa é uma âncora.</p>`,
 reveal_pt:`<p>Regra: toda vez que um número for oferecido, decida qual seria <em>sem</em> a âncora. Se não souber, desacelere. Se souber, identificou um desconto que ninguém cobrou de você — sua própria atenção.</p>`,
 src_pt:"Tversky & Kahneman (1974); Chris Voss, Como Negociar o Impossível"},

{slug:"c-availability", type:"lectio", f:"C", title:"Availability",
 body:`<p>What probability do you assign to death by shark attack? By falling coconut? By bathroom accident? Most people wildly overweight the first two and underweight the third. The reason: sharks and coconuts make headlines. Bathrooms do not.</p>
<p>Kahneman and Tversky called this the <em>availability heuristic</em>. We estimate how likely a thing is by how easily we can call examples to mind. Media coverage, which optimizes for shareable, is a factory of availability distortions. Every evening news segment is a quiet instruction to misweight the world.</p>`,
 src:"Tversky & Kahneman, Availability (1973)",
 title_pt:"Disponibilidade",
 body_pt:`<p>Que probabilidade você atribui à morte por ataque de tubarão? Por queda de coco? Por acidente no banheiro? A maioria superestima os dois primeiros e subestima o terceiro. Motivo: tubarões e cocos viram manchete. Banheiros, não.</p>
<p>Kahneman e Tversky chamaram isso de <em>heurística da disponibilidade</em>. Estimamos a probabilidade de uma coisa pela facilidade com que podemos chamar exemplos à mente. A cobertura midiática, otimizada para o que é compartilhável, é fábrica de distorções de disponibilidade. Cada bloco do telejornal da noite é uma instrução silenciosa para pesar o mundo errado.</p>`,
 src_pt:"Tversky & Kahneman, Disponibilidade (1973)"},

{slug:"c-hindsight", type:"lectio", f:"C", title:"Hindsight Bias",
 body:`<p>After an event, people reliably remember themselves as having predicted it. The 2008 crash, 9/11, every election, every bankruptcy. "I knew it." No, most didn't. The confident memory is manufactured in retrospect.</p>
<p>Why this matters: hindsight bias makes you a worse learner from history. If you remember yourself as having foreseen events you did not foresee, you cannot calibrate how often you are wrong, and you therefore cannot improve. The only cure is a <em>written forecast</em>, dated, stored, re-read later. The record is the only defense against your own revisionism.</p>`,
 src:"Baruch Fischhoff (1975); Kahneman",
 title_pt:"Viés Retrospectivo",
 body_pt:`<p>Depois de um evento, as pessoas lembram, com confiança, de ter previsto. A quebra de 2008, o 11 de setembro, toda eleição, toda falência. "Eu sabia." Não, a maioria não sabia. A memória confiante é fabricada em retrospecto.</p>
<p>Por que importa: o viés retrospectivo te torna pior aluno da história. Se você se lembra de ter antevisto eventos que não antevê, não consegue calibrar sua taxa de erro, e portanto não melhora. A única cura é a <em>previsão escrita</em>, datada, guardada, relida depois. O registro é a única defesa contra o seu próprio revisionismo.</p>`,
 src_pt:"Baruch Fischhoff (1975); Kahneman"},

{slug:"c-planning-fallacy", type:"lectio", f:"C", title:"The Planning Fallacy",
 body:`<p>Ask any homeowner. "The renovation was supposed to take three months and cost 60k." It took eight and cost 140. Not because something unusual happened. Something unusual happens on <em>every</em> project. The forecaster predicted the smooth path. Reality has only bumpy ones.</p>
<p>The fix is the outside view. For your current project, do not forecast its hours; find ten comparable projects already done and look at their actual hours. Yours is unlikely to be the median exception. If you cannot name the ten comparables, the project is more novel than you think.</p>`,
 src:"Kahneman & Tversky (1979); Flyvbjerg on megaprojects",
 title_pt:"A Falácia do Planejamento",
 body_pt:`<p>Pergunte a qualquer dono de casa. "A reforma devia levar três meses e custar 60 mil." Levou oito e custou 140. Não porque algo incomum aconteceu. Algo incomum acontece em <em>todo</em> projeto. O previsor projetou o caminho suave. A realidade só tem caminhos esburacados.</p>
<p>A correção é a visão externa. Para o seu projeto atual, não preveja suas horas; ache dez projetos comparáveis já concluídos e veja as horas reais deles. É improvável que você seja a exceção mediana. Se não consegue nomear os dez comparáveis, o projeto é mais novo do que você pensa.</p>`,
 src_pt:"Kahneman & Tversky (1979); Flyvbjerg sobre megaprojetos"},

{slug:"c-illusion-skill", type:"lectio", f:"C", title:"The Illusion of Skill",
 body:`<p>Kahneman asked actively managed mutual fund managers to show which of them had skill. Over 50 years of data, after fees, the rank-order correlation of a given manager's performance from one period to the next was near zero. The industry pays itself as if skill existed. The data refuses to confirm it, year after year.</p>
<p>Why do the managers persist in believing they are skilled? Because they experience their effort and their picks. Experience of effort feels like skill. In actuality, the signal is drowned in luck for most of the time horizon any human career spans.</p>`,
 src:"Daniel Kahneman, Thinking, Fast and Slow, ch. 20",
 title_pt:"A Ilusão da Competência",
 body_pt:`<p>Kahneman pediu a gestores de fundos ativos que mostrassem quais deles tinham competência. Em cinquenta anos de dados, após taxas, a correlação de ordem de desempenho de um gestor entre um período e o seguinte era próxima de zero. A indústria paga a si como se competência existisse. Os dados se recusam a confirmar, ano após ano.</p>
<p>Por que os gestores persistem em acreditar que são competentes? Porque experimentam o próprio esforço e as próprias escolhas. A experiência do esforço parece competência. Na prática, o sinal é afogado pela sorte na maior parte do horizonte temporal de uma carreira humana.</p>`,
 src_pt:"Daniel Kahneman, Rápido e Devagar, cap. 20"},

{slug:"c-ex-face-stranger", type:"exercitium", f:"C", title:"Face · 30 Seconds",
 body:`<p>Look at the face of someone you will never see again — a cashier, a server, a passenger. Thirty seconds. Then look away. Write for one minute: age in a range, mood, origin if any, one guess about their morning.</p>
<p>Then stop. Do not pester them with it. This is a drill, not a game. Return in a week and read what you wrote.</p>`,
 reveal:`<p>You will learn two things. First, how little you actually noticed, even trying. Second, which category your eye reaches for first — age? mood? dress? class? That category is your default lens. Knowing your default lens is the first step to looking around it.</p>`,
 src:"Konnikova, Mastermind · drill, Perceptio",
 title_pt:"Rosto · 30 Segundos",
 body_pt:`<p>Olhe para o rosto de alguém que você nunca mais verá — um caixa, um garçom, um passageiro. Trinta segundos. Depois desvie o olhar. Escreva por um minuto: idade numa faixa, humor, origem se houver, um palpite sobre a manhã dela.</p>
<p>Depois pare. Não aborreça a pessoa. Isto é drill, não jogo. Volte em uma semana e releia o que escreveu.</p>`,
 reveal_pt:`<p>Você vai aprender duas coisas. Primeira: quão pouco de fato notou, mesmo tentando. Segunda: qual categoria seu olho procura primeiro — idade? humor? roupa? classe? Essa categoria é sua lente padrão. Conhecer a própria lente é o primeiro passo para olhar em volta dela.</p>`,
 src_pt:"Konnikova, Mastermind · exercício, Perceptio"},

{slug:"c-ex-painting-stare", type:"exercitium", f:"C", title:"The 10-Second Painting Stare",
 body:`<p>Pick a painting you know well — one in your head. Hold it for ten seconds. Now, without looking at a reproduction, answer: how many people are in it? Where is the light source? What object is in the lower right corner? What direction is the subject looking?</p>
<p>Most people fail at least two of these on paintings they have seen a hundred times. Our memory for images is a sketch, not a photograph. Which has consequences for every claim you have made in the form "I know what X looked like."</p>`,
 reveal:`<p>Try again tomorrow with a different painting, after looking carefully for one full minute first. The quality of memory tracks the quality of the look that produced it.</p>`,
 src:"Konnikova; Yates, The Art of Memory",
 title_pt:"O Olhar de 10 Segundos sobre uma Pintura",
 body_pt:`<p>Escolha uma pintura que você conhece bem — uma na sua cabeça. Segure-a por dez segundos. Agora, sem olhar reprodução, responda: quantas pessoas há nela? Onde está a fonte de luz? Que objeto está no canto inferior direito? Em que direção olha o personagem principal?</p>
<p>A maioria erra ao menos duas dessas em pinturas que viu cem vezes. Nossa memória para imagens é um esboço, não uma fotografia. O que tem consequências para toda alegação sua da forma "eu sei como X era".</p>`,
 reveal_pt:`<p>Tente de novo amanhã com outra pintura, depois de olhar com cuidado por um minuto inteiro primeiro. A qualidade da memória segue a qualidade do olhar que a produziu.</p>`,
 src_pt:"Konnikova; Yates, A Arte da Memória"},

{slug:"c-ex-spot-change", type:"exercitium", f:"C", title:"Spot the Change · The Change Blindness Drill",
 body:`<p>Classic psychology demonstration (Simons & Levin, 1998): a researcher stops a stranger to ask directions. Two workmen pass between them carrying a door. The researcher behind the door changes places with another man. The stranger continues the conversation and does not notice they are talking to a different person. Half the time, really.</p>
<p>Change blindness. Your perception of continuity is not perception; it is interpolation. The mind fills in rather than tracks.</p>`,
 reveal:`<p>Practical corollary: for anything that matters, do not trust the continuous feeling of "nothing changed." Make a periodic deliberate check. In relationships, in budgets, in your own habits. The gradual becomes invisible otherwise.</p>`,
 src:"Simons & Levin, Failure to detect changes to people during a real-world interaction (1998)",
 title_pt:"Spot the Change · Cegueira à Mudança",
 body_pt:`<p>Clássico da psicologia (Simons & Levin, 1998): um pesquisador para um estranho na rua para pedir direção. Dois operários passam entre eles carregando uma porta. O pesquisador atrás da porta troca de lugar com outro homem. O estranho continua a conversa e não percebe que está falando com outra pessoa. Metade das vezes, de verdade.</p>
<p>Cegueira à mudança. Sua percepção de continuidade não é percepção; é interpolação. A mente preenche em vez de rastrear.</p>`,
 reveal_pt:`<p>Corolário prático: para qualquer coisa que importa, não confie no sentimento contínuo de "nada mudou". Faça uma checagem deliberada periódica. Em relacionamentos, em orçamentos, em seus próprios hábitos. O gradual se torna invisível, de outro modo.</p>`,
 src_pt:"Simons & Levin, Failure to detect changes to people during a real-world interaction (1998)"},

{slug:"c-ex-gorilla", type:"lectio", f:"C", title:"The Invisible Gorilla",
 body:`<p>Chabris and Simons, 1999. Participants were shown a video of two teams passing a basketball and told to count the passes of the white team. In the middle of the video, a person in a gorilla suit walks across the screen, pauses, beats his chest, and walks off. About half the viewers do not see the gorilla.</p>
<p>Not because they are stupid. Because they were doing the task. Attention is not a floodlight; it is a flashlight. Instructing it where to look blinds it to everywhere else.</p>
<p>Why audit cultures that reward speed produce blind spots the size of gorillas: the organization is counting passes.</p>`,
 src:"Chabris & Simons, The Invisible Gorilla (1999)",
 title_pt:"O Gorila Invisível",
 body_pt:`<p>Chabris e Simons, 1999. Participantes assistiram a um vídeo de dois times passando uma bola e receberam a instrução de contar os passes do time branco. No meio do vídeo, uma pessoa em roupa de gorila atravessa a tela, pausa, bate no peito, e sai. Cerca de metade dos espectadores não vê o gorila.</p>
<p>Não por burrice. Por estarem fazendo a tarefa. A atenção não é holofote; é lanterna. Dirigi-la a um lugar a cega para todos os outros.</p>
<p>Por que culturas de auditoria que premiam velocidade produzem pontos cegos do tamanho de gorilas: a organização está contando passes.</p>`,
 src_pt:"Chabris & Simons, O Gorila Invisível (1999)"},

{slug:"c-silent-tells", type:"lectio", f:"C", title:"Navarro · Watch the Feet",
 body:`<p>Joe Navarro, 25 years in FBI counter-intelligence: faces lie. People train their faces from childhood. Feet don't.</p>
<p>Feet point to where a person wants to go. Someone pretending to be interested in a conversation often has feet pointed at the exit. Someone pretending to be comfortable crosses ankles under a chair when distressed. The lower body telegraphs what the upper body is performing.</p>
<p>This is not a magic read of strangers; it is a sanity check. When face and feet disagree, trust the feet.</p>`,
 src:"Joe Navarro, What Every Body Is Saying (2008)",
 title_pt:"Navarro · Observe os Pés",
 body_pt:`<p>Joe Navarro, 25 anos na contrainteligência do FBI: os rostos mentem. As pessoas treinam o rosto desde a infância. Os pés, não.</p>
<p>Os pés apontam para onde a pessoa quer ir. Alguém fingindo interesse numa conversa muitas vezes tem os pés apontados para a saída. Alguém fingindo conforto cruza os tornozelos sob a cadeira quando aflito. A parte inferior do corpo telegrafa o que a parte superior está encenando.</p>
<p>Isto não é leitura mágica de estranhos; é checagem de sanidade. Quando o rosto e os pés discordam, confie nos pés.</p>`,
 src_pt:"Joe Navarro, O Que Todo Corpo Está Dizendo (2008)"},

{slug:"c-ekman-micro", type:"lectio", f:"C", title:"Ekman · Microexpressions",
 body:`<p>Paul Ekman catalogued seven universal facial expressions: happiness, sadness, anger, fear, disgust, surprise, contempt. The expressions last on the face as brief as one twenty-fifth of a second — <em>microexpressions</em> — before the conscious controlled mask replaces them. If you can catch the half-frame, you have seen what the person felt before deciding what to show.</p>
<p>Training is possible but shallow. Most people improve from chance to maybe twice chance. Enough for a hint, not for a verdict. Treat the signal as a reason to ask one more question, never as a conviction.</p>`,
 src:"Paul Ekman, Telling Lies (1985); Emotions Revealed (2003)",
 title_pt:"Ekman · Microexpressões",
 body_pt:`<p>Paul Ekman catalogou sete expressões faciais universais: alegria, tristeza, raiva, medo, nojo, surpresa, desprezo. As expressões duram no rosto tão pouco quanto um vinte e cinco avos de segundo — <em>microexpressões</em> — antes que a máscara consciente e controlada as substitua. Se você conseguir pegar o meio-quadro, viu o que a pessoa sentiu antes de decidir o que mostrar.</p>
<p>Treinamento é possível, mas raso. A maioria sai de acaso para talvez o dobro do acaso. Suficiente para uma pista, não para um veredito. Trate o sinal como motivo para fazer uma pergunta a mais, nunca como condenação.</p>`,
 src_pt:"Paul Ekman, Telling Lies (1985); Emotions Revealed (2003)"},

{slug:"c-cold-reading", type:"lectio", f:"C", title:"Cold Reading · The Trick You Should Know",
 body:`<p>How a psychic appears to read a stranger: start with Barnum statements (universally applicable but personal-sounding — "sometimes you feel misunderstood"). Then fish — throw out specifics, watch which ones catch, amplify. Then let the subject fill in the detail (they always do), and reflect it back as a prediction.</p>
<p>Why you should know this: you have been read by job interviewers, salespeople, politicians, and dates. Not necessarily maliciously. But the same mechanisms work on real-world information and they bias what you take for insight. "He really gets me" is often "he fished and I bit."</p>`,
 src:"James Randi; Ian Rowland, Cold Reading (1998)",
 title_pt:"Cold Reading · O Truque Que Você Deve Conhecer",
 body_pt:`<p>Como um médium parece ler um estranho: comece com afirmações de Barnum (universalmente aplicáveis mas de som pessoal — "às vezes você se sente incompreendido"). Depois pesque — jogue especificidades, veja quais pegam, amplifique. Depois deixe o sujeito completar o detalhe (ele sempre completa) e devolva como previsão.</p>
<p>Por que você deve saber: você já foi lido por entrevistadores, vendedores, políticos e encontros românticos. Não necessariamente com maldade. Mas os mesmos mecanismos funcionam sobre informação real, e enviesam o que você toma por intuição. "Ele me entende de verdade" é, muitas vezes, "ele pescou e eu mordi".</p>`,
 src_pt:"James Randi; Ian Rowland, Cold Reading (1998)"},

{slug:"c-cal-newport", type:"lectio", f:"C", title:"Deep Work",
 body:`<p>Cal Newport's thesis: the capacity to focus on one cognitively demanding task for stretches of 60–90 minutes without distraction is becoming both increasingly rare and increasingly valuable. Rare because the device economy actively trains the opposite capacity. Valuable because the problems worth being paid for all live past the attention span of a social media feed.</p>
<p>The practical move: schedule the deep-work block as the first appointment of the day. Phone in another room. Browser blocked. No meetings until noon. Protect ninety minutes a day and your output in a year will outrun colleagues who are "working" for ten hours.</p>`,
 src:"Cal Newport, Deep Work (2016)",
 title_pt:"Trabalho Profundo",
 body_pt:`<p>Tese de Cal Newport: a capacidade de focar numa única tarefa cognitivamente exigente, por 60 a 90 minutos sem distração, está se tornando ao mesmo tempo mais rara e mais valiosa. Rara porque a economia dos dispositivos treina ativamente a capacidade oposta. Valiosa porque os problemas que valem pagamento vivem todos além do intervalo de atenção de um feed.</p>
<p>Movimento prático: agende o bloco de trabalho profundo como primeiro compromisso do dia. Celular noutro cômodo. Navegador bloqueado. Nenhuma reunião até meio-dia. Proteja noventa minutos por dia e seu rendimento num ano superará o de colegas que "trabalharam" dez horas.</p>`,
 src_pt:"Cal Newport, Trabalho Profundo (2016)"},

{slug:"c-attention-currency", type:"sententia", f:"C", title:"Attention · The One Currency",
 body:`<blockquote>Where attention goes, energy flows.</blockquote>
<p>Attention is the only budget nobody can refill. Everything you have — relationships, skill, memory, prayer, taste, work — is the aggregate of what your attention was spent on. Design the budget.</p>`,
 src:"folk psychology; echoed by Simone Weil, James, McGilchrist",
 title_pt:"Atenção · A Única Moeda",
 body_pt:`<blockquote>Onde vai a atenção, flui a energia.</blockquote>
<p>A atenção é o único orçamento que ninguém pode recompor. Tudo o que você tem — relacionamentos, competência, memória, oração, gosto, trabalho — é o agregado daquilo em que a atenção foi gasta. Desenhe o orçamento.</p>`,
 src_pt:"psicologia popular; ecoada por Simone Weil, James, McGilchrist"},

{slug:"c-weil-attention", type:"lectio", f:"C", title:"Weil · Attention Is Prayer",
 body:`<p>Simone Weil, 1942: "Absolutely unmixed attention is prayer." For Weil, who was both a philosopher and a mystic, attention was not a cognitive technique. It was the deepest moral act: letting something other than yourself fill your consciousness without appropriating it.</p>
<p>The hungry child next to you is attended to not when you solve his situation but when you let him be present without turning away. Prayer, in the same way, is not a technique for getting an answer; it is the attention of a creature in the presence of its Creator. Everything else — monastic routines, breathing exercises, examen — is scaffolding to produce one minute of this.</p>`,
 src:"Simone Weil, Attention and Will (1942); Gravity and Grace",
 title_pt:"Weil · A Atenção É Oração",
 body_pt:`<p>Simone Weil, 1942: "A atenção absolutamente pura é oração." Para Weil, que era filósofa e mística, a atenção não era técnica cognitiva. Era o ato moral mais profundo: deixar que algo distinto de você preencha sua consciência sem apropriá-lo.</p>
<p>A criança faminta ao seu lado não é atendida quando você resolve a situação dela, mas quando você a deixa estar presente sem desviar o olhar. A oração, do mesmo modo, não é técnica para obter resposta; é a atenção de uma criatura na presença de seu Criador. Todo o resto — rotinas monásticas, exercícios respiratórios, exame de consciência — é andaime para produzir um minuto disto.</p>`,
 src_pt:"Simone Weil, A Atenção e a Vontade (1942); Gravidade e Graça"},

{slug:"c-ex-counting", type:"exercitium", f:"C", title:"The Counting Drill",
 body:`<p>Walk home by your usual route. Count the number of red cars you pass. Report the number at the end.</p>
<p>Simple. But: tomorrow, walk the same route counting blue cars. On a third day, count women wearing hats, or buildings with awnings.</p>`,
 reveal:`<p>You will discover: whatever you count, you see. Whatever you do not count, you miss. Your attention has been labeling things for you your whole life, and most of what it labeled was decided by other people — advertisers, platforms, the ambient culture. Taking the counting instruction back is taking the vocabulary back. Perception is political. Pick what you count.</p>`,
 src:"after Konnikova, Mastermind · ch. 2",
 title_pt:"O Drill da Contagem",
 body_pt:`<p>Volte para casa pelo caminho de sempre. Conte quantos carros vermelhos passam. Reporte o número ao fim.</p>
<p>Simples. Mas: amanhã, caminhe pelo mesmo caminho contando carros azuis. No terceiro dia, conte mulheres de chapéu, ou prédios com toldos.</p>`,
 reveal_pt:`<p>Você vai descobrir: o que você conta, você vê. O que não conta, não vê. Sua atenção vem rotulando coisas para você a vida inteira, e a maior parte do que ela rotulou foi decidida por outros — anunciantes, plataformas, a cultura ambiente. Retomar a instrução de contar é retomar o vocabulário. A percepção é política. Escolha o que contar.</p>`,
 src_pt:"segundo Konnikova, Mastermind · cap. 2"},

{slug:"c-nassim-hidden", type:"lectio", f:"C", title:"Taleb · The Hidden Risks",
 body:`<p>Taleb's recurring note: the risks you can see on a dashboard are precisely the risks that have already been priced into whatever you are looking at. The risks that will actually hurt you are off the dashboard. The 2008 crisis was in nobody's model. The 2020 pandemic was in nobody's budget. The 1986 Chernobyl failure was in nobody's reactor manual.</p>
<p>Attention has a boundary problem: it attends to what is bright, categorized, measured. Everything serious hides in the dim periphery. The practical move: once a week, spend one hour thinking about what you have not been thinking about.</p>`,
 src:"Nassim Taleb, The Black Swan (2007), Antifragile (2012)",
 title_pt:"Taleb · Os Riscos Ocultos",
 body_pt:`<p>Nota recorrente de Taleb: os riscos que você vê num dashboard são exatamente os riscos já precificados no que você está olhando. Os riscos que de fato vão te machucar estão fora do dashboard. A crise de 2008 não estava no modelo de ninguém. A pandemia de 2020 não estava no orçamento de ninguém. A falha de Chernobyl, em 1986, não estava no manual de reator de ninguém.</p>
<p>A atenção tem um problema de fronteira: atende ao que é brilhante, categorizado, medido. Tudo o que é sério se esconde na periferia escura. Movimento prático: uma vez por semana, passe uma hora pensando no que você não vem pensando.</p>`,
 src_pt:"Nassim Taleb, O Cisne Negro (2007), Antifrágil (2012)"},

{slug:"c-palace-5-ways", type:"exercitium", f:"C", title:"Memory Palace · The Five Ways",
 body:`<p>Build a palace for Aquinas's five proofs of God. Walk your home in sequence. Front door → First Way (Motion): a hinge creaking. Living room → Second Way (Causation): a line of dominoes. Kitchen → Third Way (Contingency): a cake that would not exist without a baker. Bedroom → Fourth Way (Degrees): a thermometer. Bathroom → Fifth Way (Teleology): an archer target over the sink.</p>
<p>In an hour you will not forget them again. The medievals did not have your phone. They had the Rhetorica ad Herennium and a stone cell.</p>`,
 reveal:`<p>Advanced: use the same five rooms for a different list next week. The images overlap and merge, which is a bug for your test and a feature for your actual thinking: the connections across lists are where new ideas come from.</p>`,
 src:"Rhetorica ad Herennium III (c. 85 BC); Yates, The Art of Memory",
 title_pt:"Palácio da Memória · As Cinco Vias",
 body_pt:`<p>Monte um palácio para as cinco provas da existência de Deus de Aquino. Caminhe sua casa em sequência. Porta da frente → Primeira Via (Movimento): uma dobradiça rangendo. Sala → Segunda Via (Causalidade): uma fileira de dominós. Cozinha → Terceira Via (Contingência): um bolo que não existiria sem um padeiro. Quarto → Quarta Via (Graus): um termômetro. Banheiro → Quinta Via (Teleologia): um alvo sobre a pia.</p>
<p>Em uma hora, você não vai esquecê-las de novo. Os medievais não tinham o seu celular. Tinham a Rhetorica ad Herennium e uma cela de pedra.</p>`,
 reveal_pt:`<p>Avançado: use os mesmos cinco cômodos para outra lista na semana seguinte. As imagens se sobrepõem e se misturam, o que é bug para o seu teste e feature para o seu pensamento real: as conexões entre listas são de onde vêm as ideias novas.</p>`,
 src_pt:"Rhetorica ad Herennium III (c. 85 a.C.); Yates, A Arte da Memória"},

{slug:"c-feynman", type:"lectio", f:"C", title:"The Feynman Technique",
 body:`<p>Richard Feynman's trick for learning anything: imagine you have to explain the subject to a twelve-year-old. Not an unusually bright one. Write the explanation. Where you reach for jargon, you have not understood. Where you are vague, you have not understood. Return to the source, learn the vague parts, write again.</p>
<p>What this is actually testing: whether you can carry the knowledge in your own words. If you cannot, you have not learned; you have memorized. The difference will be evident the first time anyone asks you a slightly different version of the question.</p>`,
 src:"Richard Feynman, teaching anecdote; popularized post-1988",
 title_pt:"A Técnica de Feynman",
 body_pt:`<p>Truque de Richard Feynman para aprender qualquer coisa: imagine que você tenha de explicar o assunto a uma criança de doze anos. Não uma particularmente brilhante. Escreva a explicação. Onde você recorre ao jargão, não entendeu. Onde você fica vago, não entendeu. Volte à fonte, aprenda as partes vagas, escreva de novo.</p>
<p>O que isso realmente testa: se você consegue carregar o conhecimento nas suas próprias palavras. Se não consegue, não aprendeu; memorizou. A diferença fica evidente da primeira vez em que alguém faz uma versão ligeiramente diferente da pergunta.</p>`,
 src_pt:"Richard Feynman, anedota pedagógica; popularizada após 1988"},

{slug:"c-expert-intuit", type:"lectio", f:"C", title:"Kahneman & Klein · When Intuition Works",
 body:`<p>Kahneman and Gary Klein, long-time rivals, co-authored a paper in 2009 agreeing on when expert intuition is trustworthy and when it is not. Two conditions must both hold.</p>
<p>(1) An environment with reliable, repeatable patterns. (2) An opportunity to learn those patterns through prolonged practice with rapid, accurate feedback.</p>
<p>Firefighters, chess masters, nurses, pilots meet both — their intuitions are often reliable. Stock pickers, political forecasters, long-term managers do not — their intuitions are not. Trust intuition in the first list; demand data in the second. The expert feels equally confident in both. The expert is wrong about which.</p>`,
 src:"Kahneman & Klein, Conditions for Intuitive Expertise, American Psychologist (2009)",
 title_pt:"Kahneman & Klein · Quando a Intuição Funciona",
 body_pt:`<p>Kahneman e Gary Klein, rivais antigos, assinaram juntos um artigo em 2009 concordando em quando a intuição de especialista é confiável e quando não é. Duas condições precisam valer ao mesmo tempo.</p>
<p>(1) Um ambiente com padrões confiáveis e repetíveis. (2) Oportunidade de aprender esses padrões por prática prolongada com retorno rápido e preciso.</p>
<p>Bombeiros, enxadristas, enfermeiros, pilotos satisfazem as duas — suas intuições costumam ser confiáveis. Selecionadores de ações, previsores políticos, gestores de longo prazo, não — suas intuições não são. Confie na intuição no primeiro grupo; exija dados no segundo. O especialista se sente igualmente confiante nos dois. O especialista está errado sobre qual.</p>`,
 src_pt:"Kahneman & Klein, Conditions for Intuitive Expertise, American Psychologist (2009)"},

{slug:"c-cf-journal", type:"lectio", f:"C", title:"The Daily Examen",
 body:`<p>Ignatius of Loyola's method, kept by the Jesuits for 500 years. Fifteen minutes at the end of the day, in five steps. (1) Become aware of God's presence. (2) Review the day with gratitude — what was given? (3) Pay attention to your emotions — what did they signal about what matters? (4) Choose one feature of the day and pray from it. (5) Look toward tomorrow — ask for the grace needed.</p>
<p>Secular equivalent, less precise but working: journal three sentences each night — one thing that struck you, one thing you did badly, one thing to look at tomorrow. The attention is the discipline. The pen is only the enforcement.</p>`,
 src:"Ignatius of Loyola, Spiritual Exercises (c. 1548); James Martin, SJ",
 title_pt:"O Exame de Consciência Diário",
 body_pt:`<p>Método de Inácio de Loyola, mantido pelos jesuítas por 500 anos. Quinze minutos ao fim do dia, em cinco passos. (1) Tome consciência da presença de Deus. (2) Reveja o dia com gratidão — o que foi dado? (3) Preste atenção às suas emoções — o que sinalizam sobre o que importa? (4) Escolha um aspecto do dia e reze a partir dele. (5) Olhe para o amanhã — peça a graça necessária.</p>
<p>Equivalente laico, menos preciso mas funcional: escreva três frases toda noite — uma que te atingiu, uma que você fez mal, uma a olhar amanhã. A atenção é a disciplina. A caneta é só a execução.</p>`,
 src_pt:"Inácio de Loyola, Exercícios Espirituais (c. 1548); James Martin, SJ"},

{slug:"c-chesterton-wonder", type:"sententia", f:"C", title:"Chesterton · The Alarm Clock",
 body:`<blockquote>The way to love anything is to realize that it might be lost.<br>— Tremendous Trifles (1909)</blockquote>
<p>Chesterton's secret of perception: attention is the eye that sees everything as if for the last time. Which is also, in the end, how everything is seen.</p>`,
 src:"G. K. Chesterton, Tremendous Trifles (1909)",
 title_pt:"Chesterton · O Despertador",
 body_pt:`<blockquote>O jeito de amar qualquer coisa é compreender que ela pode ser perdida.<br>— Tremendas Ninharias (1909)</blockquote>
<p>O segredo da percepção em Chesterton: a atenção é o olho que vê tudo como pela última vez. O que, afinal, é também como tudo é visto.</p>`,
 src_pt:"G. K. Chesterton, Tremendas Ninharias (1909)"},

{slug:"c-ex-silence", type:"exercitium", f:"C", title:"Ten Minutes of Silence",
 body:`<p>No phone. No podcast. No book. No person. No note-taking. Sit for ten minutes in a quiet room, or walk at a slow pace. The thing you are doing is not productive. It is the opposite — it is leaving the mind alone.</p>`,
 reveal:`<p>For the first three minutes you will feel the itch of unused attention. For the next four you will think of twelve things you should be doing. For the last three, something will surface. A problem whose edge you had missed. A memory. A line from something you read.</p>
<p>The surface is the harvest. It cannot be summoned; it can only be made room for. Do this three times a week and watch what you become. Nothing in the device economy produces this and nothing can replace it.</p>`,
 src:"after Pieper, Leisure (1948); monastic tradition",
 title_pt:"Dez Minutos de Silêncio",
 body_pt:`<p>Sem celular. Sem podcast. Sem livro. Sem pessoa. Sem anotar. Fique sentado dez minutos num cômodo silencioso, ou caminhe devagar. O que você está fazendo não é produtivo. É o oposto — é deixar a mente em paz.</p>`,
 reveal_pt:`<p>Nos primeiros três minutos você vai sentir a coceira da atenção não usada. Nos quatro seguintes vai pensar em doze coisas que deveria estar fazendo. Nos três últimos, algo vai subir à superfície. Um problema cuja borda você perdera. Uma memória. Uma linha de algo que leu.</p>
<p>A superfície é a colheita. Não pode ser invocada; só pode ser abrigada. Faça isto três vezes por semana e observe o que você se torna. Nada na economia dos dispositivos produz isto e nada o substitui.</p>`,
 src_pt:"segundo Pieper, O Lazer (1948); tradição monástica"},

{slug:"c-pager-eye", type:"lectio", f:"C", title:"The Shape of a Letter",
 body:`<p>Open any book. Pick a letter you use every day — the lowercase <em>a</em>. How many pieces of it are closed loops? Can you draw it on paper without looking? Most literate adults cannot.</p>
<p>What this proves: literate reading does not require looking at letters. The eye moves across silhouettes it has long since stopped resolving. Which is efficient — but it is also why typos survive proofreading and why we read our own writing as we meant to write it rather than as it is.</p>
<p>The remedy for proofreading: read backwards, word by word. The remedy for seeing in general: pretend you have never seen the thing before.</p>`,
 src:"Blechhold & Rayner, eye-tracking studies in reading; Nielsen Norman Group",
 title_pt:"A Forma de uma Letra",
 body_pt:`<p>Abra qualquer livro. Pegue uma letra que você usa todo dia — o <em>a</em> minúsculo. Quantas partes dela são laços fechados? Você consegue desenhá-la no papel sem olhar? A maior parte dos adultos alfabetizados não consegue.</p>
<p>O que isto prova: a leitura alfabetizada não exige olhar para as letras. O olho corre por silhuetas que ele parou de resolver há muito tempo. O que é eficiente — mas é também por que erros de digitação sobrevivem à revisão, e por que lemos nossa própria escrita como pretendíamos escrever, e não como está.</p>
<p>Remédio para revisar: leia de trás para frente, palavra por palavra. Remédio para ver em geral: finja que nunca viu a coisa antes.</p>`,
 src_pt:"Blechhold & Rayner, eye-tracking em leitura; Nielsen Norman Group"},

{slug:"c-ex-handwrite", type:"exercitium", f:"C", title:"Handwrite · One Page",
 body:`<p>Handwrite one page tonight. Any content. A letter, a journal entry, a copy of a passage.</p>`,
 reveal:`<p>You will discover three things. One, how slow your handwriting has become. Two, how the slowness forces different thinking than the keyboard — you cannot delete, so you commit to sentences before they are finished. Three, how much better you remember what you wrote.</p>
<p>Studies on students taking lecture notes by hand vs laptop find consistent advantages for hand on recall and conceptual understanding — not because paper is magic but because typing is fast enough to be transcription, where handwriting is slow enough to force translation. Translation is the learning.</p>`,
 src:"Mueller & Oppenheimer, The Pen Is Mightier Than the Keyboard (2014)",
 title_pt:"Escreva à Mão · Uma Página",
 body_pt:`<p>Escreva à mão uma página hoje à noite. Qualquer conteúdo. Uma carta, uma anotação de diário, a cópia de um trecho.</p>`,
 reveal_pt:`<p>Você vai descobrir três coisas. Uma, quão lenta ficou sua letra. Duas, como a lentidão força um pensamento diferente do teclado — você não pode apagar, então se compromete com frases antes de terminá-las. Três, quanto melhor você lembra o que escreveu.</p>
<p>Estudos com estudantes tomando notas em aula à mão versus notebook encontram vantagens consistentes para a mão em recuperação e compreensão conceitual — não porque o papel seja mágico, mas porque digitar é rápido o bastante para ser transcrição, enquanto escrever à mão é lento o bastante para forçar tradução. A tradução é o aprendizado.</p>`,
 src_pt:"Mueller & Oppenheimer, The Pen Is Mightier Than the Keyboard (2014)"},

{slug:"c-flow", type:"lectio", f:"C", title:"Csikszentmihalyi · Flow",
 body:`<p>Mihaly Csikszentmihalyi spent decades asking the question: when are people happiest? He expected the answer to be "when relaxing." It was not. People reported their deepest satisfaction during <em>flow</em> — a state of complete immersion in a challenging task that matches their skill level.</p>
<p>Four conditions produce flow: clear goals, immediate feedback, a challenge matched to skill, and a loss of self-consciousness. The chess player, the surgeon, the climber, the writer at the right hour — all describe the same experience in different vocabularies.</p>
<p>The implication: most happiness we chase is in the opposite direction of the one that actually produces it. We seek rest; happiness comes from engagement.</p>`,
 src:"Mihaly Csikszentmihalyi, Flow: The Psychology of Optimal Experience (1990)",
 title_pt:"Csikszentmihalyi · Flow",
 body_pt:`<p>Mihaly Csikszentmihalyi passou décadas fazendo a pergunta: quando as pessoas são mais felizes? Esperava a resposta "quando relaxam". Não era. As pessoas relatavam a satisfação mais profunda durante o <em>flow</em> — estado de imersão completa numa tarefa desafiadora que combine com o nível de habilidade.</p>
<p>Quatro condições produzem flow: metas claras, retorno imediato, desafio pareado à habilidade e perda da autoconsciência. O enxadrista, o cirurgião, o escalador, o escritor na hora certa — todos descrevem a mesma experiência com vocabulários diferentes.</p>
<p>A implicação: a maior parte da felicidade que perseguimos está na direção oposta à que de fato a produz. Buscamos descanso; a felicidade vem do engajamento.</p>`,
 src_pt:"Mihaly Csikszentmihalyi, Flow: A Psicologia da Experiência Ótima (1990)"},

{slug:"c-stoic-attention", type:"lectio", f:"C", title:"Marcus Aurelius · Attention as Discipline",
 body:`<p>From the <em>Meditations</em>, written in the field between campaigns on the Danube: "Confine yourself to the present." Not an injunction about mindfulness as marketed. An emperor telling himself not to be driven by the past (regret) or the future (anxiety), because the only act available to a reasoning creature is in this moment.</p>
<p>Attention, for the Stoic, is a moral discipline before it is a cognitive one. The man who cannot attend to the present cannot act well in it, cannot see the person in front of him, cannot do his duty. The device economy is not primarily a time thief; it is a moral injury.</p>`,
 src:"Marcus Aurelius, Meditations (c. 170 AD), Book II.5",
 title_pt:"Marco Aurélio · A Atenção como Disciplina",
 body_pt:`<p>Das <em>Meditações</em>, escritas em campo entre campanhas no Danúbio: "Confine-se ao presente." Não é injunção sobre mindfulness tal como vendido. É um imperador dizendo a si mesmo que não seja levado pelo passado (arrependimento) ou pelo futuro (ansiedade), porque o único ato disponível a uma criatura racional é neste momento.</p>
<p>A atenção, para o estoico, é disciplina moral antes de ser cognitiva. Quem não consegue atender ao presente não consegue agir bem nele, não consegue ver a pessoa diante dele, não consegue cumprir seu dever. A economia dos dispositivos não é, antes de tudo, ladra de tempo; é lesão moral.</p>`,
 src_pt:"Marco Aurélio, Meditações (c. 170 d.C.), Livro II.5"},

{slug:"c-pager-reading", type:"lectio", f:"C", title:"Hyperlexia · The Opposite Danger",
 body:`<p>The modern reader does not read too little. The modern reader reads too much, too thinly. Fifty tabs, three podcasts, a dozen newsletters a day. Nothing lingers because nothing is given long enough to.</p>
<p>Augustine on Ambrose: "His eyes scanned the page and his heart searched out the sense, but his voice and tongue were silent." He is <em>stunned</em> to see silent reading. For most of Christian history, reading was aloud, slow, meditative — <em>lectio divina</em>. The modern silent speed-reader is the end of a long technological evolution whose benefits have been huge and whose cost is a weakened attention.</p>
<p>Prescription: once a week, read one chapter aloud. Slowly. Your old reading will show you how shallow it was becoming.</p>`,
 src:"Augustine, Confessions VI.3; the medieval tradition of lectio",
 title_pt:"Hiperlexia · O Perigo Oposto",
 body_pt:`<p>O leitor moderno não lê pouco demais. O leitor moderno lê demais, raso demais. Cinquenta abas, três podcasts, uma dezena de newsletters por dia. Nada dura porque nada recebe tempo suficiente para durar.</p>
<p>Agostinho sobre Ambrósio: "Seus olhos corriam pela página e seu coração buscava o sentido, mas sua voz e sua língua ficavam silenciosas." Ele fica <em>atônito</em> ao ver leitura em silêncio. Durante a maior parte da história cristã, ler era em voz alta, devagar, meditativo — <em>lectio divina</em>. O leitor silencioso e rápido moderno é o fim de uma longa evolução tecnológica cujos benefícios foram enormes e cujo custo é uma atenção enfraquecida.</p>
<p>Receita: uma vez por semana, leia um capítulo em voz alta. Devagar. Sua leitura antiga vai lhe mostrar quão rasa estava se tornando.</p>`,
 src_pt:"Agostinho, Confissões VI.3; a tradição medieval da lectio"},

{slug:"c-attrib-perc", type:"ludus", mode:"attributio", f:"C",
 title:"Ludus · Holmes or Kahneman?",
 body:`<p>Five lines on perception. Each belongs to Sherlock Holmes (Doyle) or Daniel Kahneman. Attribute each.</p>`,
 authors:["Holmes","Kahneman"],
 quotes:[
   {q:"You see, but you do not observe.", a:"Holmes"},
   {q:"Nothing in life is as important as you think it is while you are thinking about it.", a:"Kahneman"},
   {q:"It is a capital mistake to theorize before one has data.", a:"Holmes"},
   {q:"We are blind to our blindness. We have very little idea of how little we know.", a:"Kahneman"},
   {q:"The world is full of obvious things which nobody by any chance ever observes.", a:"Holmes"}
 ],
 src:"Attributio · Holmes vs Kahneman",
 title_pt:"Ludus · Holmes ou Kahneman?",
 body_pt:`<p>Cinco frases sobre percepção. Cada uma é de Sherlock Holmes (Doyle) ou de Daniel Kahneman. Atribua.</p>`,
 authors_pt:["Holmes","Kahneman"],
 quotes_pt:[
   {q:"Você vê, mas não observa.", a:"Holmes"},
   {q:"Nada na vida é tão importante quanto você pensa que é enquanto está pensando nisso.", a:"Kahneman"},
   {q:"É um erro capital teorizar antes de ter dados.", a:"Holmes"},
   {q:"Somos cegos à nossa cegueira. Temos muito pouca ideia de quão pouco sabemos.", a:"Kahneman"},
   {q:"O mundo está cheio de coisas óbvias que ninguém, por acaso, jamais observa.", a:"Holmes"}
 ],
 src_pt:"Attributio · Holmes vs Kahneman"},

{slug:"c-complementum-marcus", type:"ludus", mode:"complementum", f:"C",
 title:"Ludus · Fill the Keystone · Marcus",
 body:`<p>Marcus Aurelius's imperative, with one word removed.</p>`,
 fills:[{
   before:"The happiness of your life depends upon the quality of your",
   after:".",
   correct:"thoughts",
   opts:["thoughts","deeds","friends","character"],
   src:"Marcus Aurelius, Meditations (c. 170 AD)"
 }],
 src:"Complementum · Marcus Aurelius",
 title_pt:"Ludus · Preencha a Pedra Angular · Marco",
 body_pt:`<p>O imperativo de Marco Aurélio, com uma palavra removida.</p>`,
 fills_pt:[{
   before:"A felicidade da sua vida depende da qualidade dos seus",
   after:".",
   correct:"pensamentos",
   opts:["pensamentos","atos","amigos","caráter"],
   src:"Marco Aurélio, Meditações (c. 170 d.C.)"
 }],
 src_pt:"Complementum · Marco Aurélio"},

{slug:"c-sort-mind", type:"ludus", mode:"sort", f:"C",
 title:"Ludus · Milestones of Attention Science",
 body:`<p>Five landmark works on how the mind sees. Chronological order, earliest first.</p>`,
 items:[
   {label:"Rhetorica ad Herennium · memory palaces", year:-85},
   {label:"James · Principles of Psychology", year:1890},
   {label:"Tversky & Kahneman · heuristics paper", year:1974},
   {label:"Simons · invisible gorilla", year:1999},
   {label:"McGilchrist · The Master and His Emissary", year:2009}
 ],
 src:"Chronology · Perceptio",
 title_pt:"Ludus · Marcos da Ciência da Atenção",
 body_pt:`<p>Cinco obras marcantes sobre como a mente vê. Ordem cronológica, mais antiga primeiro.</p>`,
 items_pt:[
   {label:"Rhetorica ad Herennium · palácios da memória", year:-85},
   {label:"James · Princípios da Psicologia", year:1890},
   {label:"Tversky & Kahneman · artigo sobre heurísticas", year:1974},
   {label:"Simons · gorila invisível", year:1999},
   {label:"McGilchrist · O Mestre e Seu Emissário", year:2009}
 ],
 src_pt:"Cronologia · Perceptio"}
];
FOLIOS.push(...PERCEPTIO_X);

// WAVE 6 — HISTORIA EXPANSION (+24 to reach 50)
const HISTORIA_X = [
{slug:"h-cannae", type:"lectio", f:"H", title:"Cannae · The Double Envelopment",
 body:`<p>August 2, 216 BC. Hannibal has 50,000 Carthaginians against 86,000 Romans on a plain in southern Italy. He deliberately weakens his center, baits the Romans into pressing it inward, then collapses both his African wings around them. By nightfall 50,000 Romans are dead — one in five adult Roman male citizens, in a single afternoon. The battle is studied in every war college on earth.</p>
<p>The lesson Hannibal did not learn in time: tactical perfection does not deliver strategic victory. Rome refused to negotiate, fielded new armies, and ground him down over sixteen years. Winning the battle you planned is cheap. Being right about which battle to plan is everything.</p>`,
 src:"Polybius, Histories III; Livy, Ab Urbe Condita XXII",
 title_pt:"Canas · O Duplo Envolvimento",
 body_pt:`<p>2 de agosto, 216 a.C. Aníbal tem 50.000 cartagineses contra 86.000 romanos numa planície do sul da Itália. Enfraquece deliberadamente seu centro, atrai os romanos a pressioná-lo para dentro, depois fecha as duas alas africanas sobre eles. Ao cair da noite, 50.000 romanos estão mortos — um em cada cinco cidadãos romanos adultos do sexo masculino, numa única tarde. A batalha é estudada em toda academia militar do mundo.</p>
<p>A lição que Aníbal não aprendeu a tempo: perfeição tática não dá vitória estratégica. Roma recusou negociar, formou novos exércitos e o desgastou em dezesseis anos. Vencer a batalha que você planejou é barato. Acertar qual batalha planejar é tudo.</p>`,
 src_pt:"Políbio, Histórias III; Lívio, Ab Urbe Condita XXII"},

{slug:"h-rubicon", type:"lectio", f:"H", title:"Caesar at the Rubicon",
 body:`<p>January 10, 49 BC. The Rubicon is a small river in northern Italy. Roman law forbade any general to cross it with his army; to do so was to declare war on the Republic. Caesar had 5,000 men. The Senate had every legion in Italy.</p>
<p>He stood on the bank for an afternoon. Suetonius: <em>alea iacta est</em>. "The die is cast." He crossed. Four years later he was dictator of the Mediterranean world. Six years later he was murdered on the Senate floor by the men whose Republic he had ended.</p>
<p>The irreversible choice looks small on the near side. The whole shape of a civilization sits on his afternoon of hesitation.</p>`,
 src:"Suetonius, Julius Caesar 32; Plutarch, Caesar",
 title_pt:"César no Rubicão",
 body_pt:`<p>10 de janeiro, 49 a.C. O Rubicão é um riacho no norte da Itália. A lei romana proibia que qualquer general o cruzasse com seu exército; fazê-lo era declarar guerra à República. César tinha 5.000 homens. O Senado tinha toda legião da Itália.</p>
<p>Ele ficou na margem uma tarde. Suetônio: <em>alea iacta est</em>. "A sorte está lançada." Cruzou. Quatro anos depois era ditador do mundo mediterrâneo. Seis anos depois foi assassinado no chão do Senado pelos homens cuja República ele acabara.</p>
<p>A escolha irreversível parece pequena do lado de cá. Toda a forma de uma civilização repousa na tarde dele de hesitação.</p>`,
 src_pt:"Suetônio, Júlio César 32; Plutarco, César"},

{slug:"h-tours", type:"lectio", f:"H", title:"Tours · 732",
 body:`<p>October 732. Abd al-Rahman al-Ghafiqi has led a Muslim army of perhaps 20,000 from Córdoba, up through Aquitaine, toward the Loire. Charles Martel ("the Hammer"), Mayor of the Palace of the Franks, waits for him in the forest near Tours.</p>
<p>Martel refused the cavalry engagement the Muslims expected. He formed a square of infantry on wooded high ground. The Umayyad cavalry charged and broke itself. When Abd al-Rahman was killed in a counterattack, his army withdrew in the night. The Muslim advance into northern Europe stopped at Tours and never resumed.</p>
<p>Gibbon's extravagant counterfactual, worth remembering: without Tours, "the interpretation of the Qur'an would now be taught in the schools of Oxford." The high medieval West became what it did because one Frankish infantry square held one autumn day.</p>`,
 src:"Chronicle of 754; Fredegar; Gibbon, Decline and Fall LII",
 title_pt:"Tours · 732",
 body_pt:`<p>Outubro de 732. Abd al-Rahman al-Ghafiqi conduziu um exército muçulmano de talvez 20.000 homens, saindo de Córdoba, atravessando a Aquitânia, em direção ao Loire. Charles Martel ("o Martelo"), prefeito do palácio dos francos, o espera na floresta perto de Tours.</p>
<p>Martel recusou o engajamento de cavalaria que os muçulmanos esperavam. Formou um quadrado de infantaria em terreno alto e arborizado. A cavalaria omíada carregou e se despedaçou. Quando Abd al-Rahman foi morto num contra-ataque, seu exército retirou-se à noite. O avanço muçulmano no norte da Europa parou em Tours e nunca mais recomeçou.</p>
<p>Contrafactual extravagante de Gibbon, que vale lembrar: sem Tours, "a interpretação do Alcorão seria hoje ensinada nas escolas de Oxford". O Ocidente alto-medieval tornou-se o que é porque um quadrado de infantaria franca aguentou uma tarde de outono.</p>`,
 src_pt:"Crônica de 754; Fredegário; Gibbon, Declínio e Queda LII"},

{slug:"h-hastings", type:"lectio", f:"H", title:"Hastings · 1066",
 body:`<p>October 14, 1066. Harold Godwinson's English fighters have marched 250 miles south in two weeks after defeating a Norwegian invasion. They form a shield wall on a ridge at Senlac Hill. William the Conqueror's Normans attack uphill all day.</p>
<p>Twice the Norman cavalry feigned retreat. The English, who had been holding, broke rank to pursue — and were cut down in the open. The shield wall held through 10,000 arrows, three cavalry charges, and most of a day. In late afternoon Harold took an arrow in the eye. The English line broke. By nightfall England spoke a new language.</p>
<p>Every single word in the preceding sentences that comes from Latin — <em>attack, feigned, retreat, cavalry, pursue, rank, cut</em> — entered English because of this one battle.</p>`,
 src:"Anglo-Saxon Chronicle; Bayeux Tapestry; William of Poitiers",
 title_pt:"Hastings · 1066",
 body_pt:`<p>14 de outubro de 1066. Os combatentes ingleses de Harold Godwinson marcharam 400 km rumo ao sul em duas semanas, depois de derrotar uma invasão norueguesa. Formam um muro de escudos numa crista em Senlac Hill. Os normandos de Guilherme, o Conquistador, atacam serra acima o dia todo.</p>
<p>Duas vezes a cavalaria normanda fingiu retirada. Os ingleses, que vinham firmes, quebraram a formação para perseguir — e foram cortados em terreno aberto. O muro de escudos resistiu a 10.000 flechas, três cargas de cavalaria e quase o dia inteiro. No fim da tarde, Harold tomou uma flecha no olho. A linha inglesa quebrou. Ao cair da noite, a Inglaterra falava outra língua.</p>
<p>Toda palavra latina nas frases anteriores — <em>atacar, fingir, retirada, cavalaria, perseguir, formação, cortar</em> — entrou no inglês por causa desta única batalha.</p>`,
 src_pt:"Crônica Anglo-Saxônica; Tapeçaria de Bayeux; Guilherme de Poitiers"},

{slug:"h-vienna-1683", type:"lectio", f:"H", title:"Vienna · September 12, 1683",
 body:`<p>Vienna has been under siege for two months. The Ottoman army of Kara Mustafa, 150,000 strong, has brought the walls to the point of collapse. A relief force of 70,000 under the Polish king Jan Sobieski appears on the Kahlenberg heights above the city at dawn on September 12.</p>
<p>At 6 pm, after a day of fighting down the slopes, Sobieski personally leads the largest cavalry charge in history — 18,000 Polish Winged Hussars and allied horse — into the Ottoman center. The Ottoman army breaks. By midnight the siege is over. The Ottoman tide into Europe recedes forever from this hill.</p>
<p>Sobieski's dispatch to the Pope paraphrased Caesar: <em>venimus, vidimus, Deus vicit</em>. "We came, we saw, God conquered." Then he spent the night reading the Qur'an he had found in Kara Mustafa's tent.</p>`,
 src:"Jan Sobieski's letters; Thomas Barker, Double Eagle and Crescent",
 title_pt:"Viena · 12 de Setembro de 1683",
 body_pt:`<p>Viena está sitiada há dois meses. O exército otomano de Kara Mustafa, 150.000 homens, levou as muralhas ao ponto do colapso. Uma força de socorro de 70.000, sob o rei polonês Jan Sobieski, aparece nas alturas do Kahlenberg acima da cidade na alvorada de 12 de setembro.</p>
<p>Às 18h, após um dia de combate pelas encostas, Sobieski comanda pessoalmente a maior carga de cavalaria da história — 18.000 Hussardos Alados poloneses e cavalaria aliada — contra o centro otomano. O exército otomano quebra. À meia-noite o cerco acabou. A maré otomana sobre a Europa recua para sempre dessa colina.</p>
<p>O despacho de Sobieski ao Papa parafraseou César: <em>venimus, vidimus, Deus vicit</em>. "Viemos, vimos, Deus venceu." Depois passou a noite lendo o Alcorão que encontrara na tenda de Kara Mustafa.</p>`,
 src_pt:"Cartas de Jan Sobieski; Thomas Barker, Double Eagle and Crescent"},

{slug:"h-lepanto", type:"lectio", f:"H", title:"Lepanto · 1571",
 body:`<p>October 7, 1571. The Holy League (Spain, Venice, the Papal States, Genoa, Savoy, Malta) under Don Juan of Austria meets the Ottoman fleet off the coast of Greece. The last great galley battle in history. Six hours. The Ottoman fleet is destroyed; 10,000 Christian galley slaves are freed from their chains.</p>
<p>Pope Pius V, who had organized the League and had been praying the rosary, declared he knew the hour of victory before messengers could arrive. The feast of Our Lady of the Rosary is observed on October 7 to this day. Chesterton wrote a poem.</p>
<p>Lepanto did not stop Ottoman power in the Mediterranean for long. But the myth of Ottoman invincibility ended on that water. The Christian West could still fight.</p>`,
 src:"Battle of Lepanto, October 7, 1571; G. K. Chesterton, Lepanto (1911)",
 title_pt:"Lepanto · 1571",
 body_pt:`<p>7 de outubro de 1571. A Liga Santa (Espanha, Veneza, Estados Pontifícios, Gênova, Saboia, Malta), sob Dom João da Áustria, enfrenta a frota otomana ao largo da Grécia. A última grande batalha de galés da história. Seis horas. A frota otomana é destruída; 10.000 cativos cristãos a remos são libertados.</p>
<p>O papa Pio V, que organizara a Liga e rezava o rosário, declarou saber a hora da vitória antes que os mensageiros chegassem. A festa de Nossa Senhora do Rosário é celebrada em 7 de outubro até hoje. Chesterton escreveu um poema.</p>
<p>Lepanto não deteve o poder otomano no Mediterrâneo por muito tempo. Mas o mito da invencibilidade otomana terminou naquela água. O Ocidente cristão ainda sabia lutar.</p>`,
 src_pt:"Batalha de Lepanto, 7 out. 1571; G. K. Chesterton, Lepanto (1911)"},

{slug:"h-constantinople", type:"lectio", f:"H", title:"Constantinople · 29 May 1453",
 body:`<p>Mehmed II has besieged Constantinople for 53 days. Behind the walls, the last emperor of Rome, Constantine XI Palaiologos, has about 7,000 defenders against 80,000 Ottomans. The walls have held for 1,000 years. Mehmed's great cannon, cast by a Hungarian engineer named Orban, finally breaches them at dawn.</p>
<p>Constantine takes off his imperial regalia so no one will recognize his body and charges into the breach with his sword. His body is never found. By noon the Ottomans are in the Hagia Sophia. The service that had been going on inside stops; the chant does not resume.</p>
<p>The Roman Empire, which the West had declared dead in 476, had been alive the entire time, in Greek, in a different city, for another 977 years. On May 29, 1453, Rome fell.</p>`,
 src:"Doukas, Historia Byzantina; Steven Runciman, The Fall of Constantinople (1965)",
 title_pt:"Constantinopla · 29 de Maio de 1453",
 body_pt:`<p>Maomé II sitia Constantinopla há 53 dias. Por trás das muralhas, o último imperador de Roma, Constantino XI Paleólogo, tem cerca de 7.000 defensores contra 80.000 otomanos. As muralhas resistiram por 1.000 anos. O grande canhão de Maomé, fundido por um engenheiro húngaro chamado Orban, finalmente as rompe ao amanhecer.</p>
<p>Constantino tira as insígnias imperiais para que ninguém reconheça seu corpo e investe contra a brecha de espada em punho. Seu corpo nunca é achado. Ao meio-dia os otomanos estão na Hagia Sophia. O ofício que ali se celebrava para; o canto não recomeça.</p>
<p>O Império Romano, que o Ocidente dera por morto em 476, estava vivo o tempo todo, em grego, noutra cidade, por mais 977 anos. Em 29 de maio de 1453, Roma caiu.</p>`,
 src_pt:"Ducas, Historia Byzantina; Steven Runciman, A Queda de Constantinopla (1965)"},

{slug:"h-trafalgar", type:"lectio", f:"H", title:"Trafalgar · 21 October 1805",
 body:`<p>Horatio Nelson is 47 years old, missing an arm and an eye. His signal flags that morning: <em>England expects that every man will do his duty.</em> He has 27 ships against 33 Franco-Spanish ships that could have blockaded Britain into surrender.</p>
<p>His tactic breaks every rule: instead of forming a parallel line, he drives his two columns straight into the enemy line at ninety degrees, splitting it. Nelson is shot by a French marksman at 1:15 pm, dies at 4:30 pm. By then the battle is won. Britain loses no ship. The French and Spanish lose 22.</p>
<p>British naval supremacy — and with it the entire shape of the nineteenth-century world — is settled by three hours of close-range fire by one dying man's plan.</p>`,
 src:"Admiralty logs; Robert Southey, Life of Nelson (1813)",
 title_pt:"Trafalgar · 21 de Outubro de 1805",
 body_pt:`<p>Horatio Nelson tem 47 anos, falta-lhe um braço e um olho. Suas bandeiras de sinais naquela manhã: <em>A Inglaterra espera que cada homem cumpra o seu dever.</em> Ele tem 27 navios contra 33 franco-espanhóis que poderiam ter bloqueado a Grã-Bretanha até a rendição.</p>
<p>A tática rompe todas as regras: em vez de formar linha paralela, ele conduz suas duas colunas diretamente contra a linha inimiga a noventa graus, partindo-a. Nelson é atingido por um atirador francês às 13h15, morre às 16h30. A essa altura a batalha está ganha. A Grã-Bretanha não perde navio. Franceses e espanhóis perdem 22.</p>
<p>A supremacia naval britânica — e com ela toda a forma do mundo do século XIX — é decidida por três horas de fogo a curta distância segundo o plano de um homem agonizante.</p>`,
 src_pt:"Diários do Almirantado; Robert Southey, Vida de Nelson (1813)"},

{slug:"h-waterloo", type:"lectio", f:"H", title:"Waterloo · 18 June 1815",
 body:`<p>Napoleon vs Wellington, with Blücher's Prussians marching to join. 180,000 men on a muddy ridge in Belgium. The battle lasts 11 hours. Wellington later: "the nearest-run thing you ever saw in your life."</p>
<p>Napoleon delayed his main attack because the ground was too wet for artillery. The delay let Blücher arrive. If the ground had dried an hour earlier, Napoleon wins, Europe stays Napoleonic for another decade, the Congress of Vienna settlement collapses. Weather decides the shape of continents.</p>
<p>Napoleon dies six years later on St. Helena of stomach cancer, having spent the exile dictating memoirs. Wellington lives to become Prime Minister.</p>`,
 src:"Victor Hugo, Les Misérables, vol. II; Andrew Roberts, Napoleon (2014)",
 title_pt:"Waterloo · 18 de Junho de 1815",
 body_pt:`<p>Napoleão contra Wellington, com os prussianos de Blücher a caminho. 180.000 homens numa crista enlameada na Bélgica. A batalha dura 11 horas. Wellington, depois: "a coisa mais apertada que você já viu na vida".</p>
<p>Napoleão adiou o ataque principal porque o solo estava úmido demais para a artilharia. O atraso deu tempo a Blücher. Se o solo tivesse secado uma hora antes, Napoleão vence, a Europa continua napoleônica por mais uma década, o acordo do Congresso de Viena desaba. O tempo decide a forma dos continentes.</p>
<p>Napoleão morre seis anos depois em Santa Helena, de câncer de estômago, tendo passado o exílio ditando memórias. Wellington vive para ser primeiro-ministro.</p>`,
 src_pt:"Victor Hugo, Os Miseráveis, vol. II; Andrew Roberts, Napoleão (2014)"},

{slug:"h-gettysburg", type:"lectio", f:"H", title:"Gettysburg · July 1–3, 1863",
 body:`<p>Robert E. Lee has invaded Pennsylvania. If he destroys the Army of the Potomac in open country, the Confederacy wins the war. On July 3, after two days of inconclusive fighting, Lee orders Pickett's division — 12,500 men — to march across one mile of open field directly at the Union center on Cemetery Ridge.</p>
<p>They march in parade formation. Union artillery and rifle fire from behind stone walls shreds them. Half do not return. The Confederate commander Longstreet had wept privately as he gave the order, convinced it was mad. Lee rode out to meet the survivors saying "all this has been my fault."</p>
<p>The Confederacy lost the war two years later. Everyone in that war later agreed it also lost it in those three days at Gettysburg.</p>`,
 src:"Shelby Foote, The Civil War (1958–74); Michael Shaara, The Killer Angels (1974)",
 title_pt:"Gettysburg · 1–3 de Julho de 1863",
 body_pt:`<p>Robert E. Lee invadiu a Pensilvânia. Se destruir o Exército do Potomac em campo aberto, a Confederação ganha a guerra. Em 3 de julho, após dois dias de luta inconclusiva, Lee ordena à divisão de Pickett — 12.500 homens — que marche por 1,5 km em campo aberto diretamente contra o centro da União em Cemetery Ridge.</p>
<p>Eles marcham em formação de parada. A artilharia e os fuzis da União atrás de muros de pedra os despedaçam. Metade não volta. O comandante confederado Longstreet chorara em particular ao dar a ordem, convicto de que era loucura. Lee cavalgou ao encontro dos sobreviventes dizendo "tudo isto foi culpa minha".</p>
<p>A Confederação perdeu a guerra dois anos depois. Todos naquela guerra concordaram depois que também a perderam naqueles três dias em Gettysburg.</p>`,
 src_pt:"Shelby Foote, A Guerra Civil (1958–74); Michael Shaara, Os Anjos Assassinos (1974)"},

{slug:"h-french-rev", type:"lectio", f:"H", title:"The French Revolution · Burke's Prediction",
 body:`<p>1790. The Bastille has fallen less than a year ago. Most of Europe is celebrating. Edmund Burke, an Irish Whig in London, publishes <em>Reflections on the Revolution in France</em> and predicts:</p>
<p>The Revolution will not stop at reform. It will devour its own leaders. It will produce chaos, which will be ended by a military strongman. France will become a tyranny worse than the one it overthrew.</p>
<p>His friends thought him senile. Three years later Louis XVI was executed. Four years later Robespierre followed. Nine years later Napoleon was dictator. Burke had seen the shape of the next twenty-five years from the first six months. His categories — <em>prudence, prescription, the little platoon, the partnership of generations</em> — became the vocabulary of conservatism.</p>`,
 src:"Edmund Burke, Reflections on the Revolution in France (1790)",
 title_pt:"A Revolução Francesa · A Previsão de Burke",
 body_pt:`<p>1790. A Bastilha caiu há menos de um ano. Metade da Europa celebra. Edmund Burke, whig irlandês em Londres, publica <em>Reflexões sobre a Revolução em França</em> e prevê:</p>
<p>A Revolução não vai parar na reforma. Vai devorar seus próprios líderes. Vai produzir o caos, que será encerrado por um homem forte militar. A França se tornará uma tirania pior do que a que derrubou.</p>
<p>Seus amigos o acharam senil. Três anos depois Luís XVI foi executado. Quatro anos depois Robespierre o seguiu. Nove anos depois Napoleão era ditador. Burke viu a forma dos vinte e cinco anos seguintes nos primeiros seis meses. Suas categorias — <em>prudência, prescrição, o pequeno pelotão, a parceria de gerações</em> — tornaram-se o vocabulário do conservadorismo.</p>`,
 src_pt:"Edmund Burke, Reflexões sobre a Revolução em França (1790)"},

{slug:"h-robespierre", type:"lectio", f:"H", title:"The Terror · Robespierre's Head",
 body:`<p>July 27, 1794. Maximilien Robespierre is arrested on the floor of the National Convention. In the chaos he or an opponent — history still disputes — shoots him in the jaw. The next afternoon he is loaded onto the tumbril he had sent so many to. On the scaffold, the executioner tears off the bandage; Robespierre screams; the blade falls.</p>
<p>In twelve months the Committee of Public Safety that he led had executed between 17,000 and 40,000 people. His own fall ended the Terror within a week. Burke, four years earlier, had seen this exact ending from a window in London. His entire book on the Revolution reads, afterwards, as a sentence-by-sentence weather forecast.</p>`,
 src:"R. R. Palmer, Twelve Who Ruled (1941)",
 title_pt:"O Terror · A Cabeça de Robespierre",
 body_pt:`<p>27 de julho de 1794. Maximilien Robespierre é preso no chão da Convenção Nacional. No tumulto, ele ou um opositor — a história ainda discute — atira-lhe no queixo. Na tarde seguinte é posto na carroça para a qual ele mandara tantos. No cadafalso, o carrasco arranca a atadura; Robespierre grita; a lâmina cai.</p>
<p>Em doze meses, o Comitê de Salvação Pública que ele liderou executou entre 17.000 e 40.000 pessoas. Sua queda encerrou o Terror em uma semana. Burke, quatro anos antes, vira este desfecho exato de uma janela em Londres. O seu livro inteiro sobre a Revolução lê-se, depois, como um boletim meteorológico frase a frase.</p>`,
 src_pt:"R. R. Palmer, Twelve Who Ruled (1941)"},

{slug:"h-1848", type:"lectio", f:"H", title:"1848 · The Year of Failed Revolutions",
 body:`<p>In the first six months of 1848, revolutions broke out in France, Italy, Germany, Austria, Hungary, Denmark, Poland, Ireland, and Wallachia. Every one of them failed by the end of 1849. The old order held in every case except France, where it was quickly reinstalled under Napoleon III.</p>
<p>Historians sometimes call it "the turning point at which modern history failed to turn." The 1848 revolutionaries were liberals, nationalists, and workers, and they fell apart as soon as the aristocracies they had unseated recovered their nerve. Marx, writing in London that year, concluded the lesson: without a disciplined proletariat, bourgeois revolution could not become social revolution. He spent the next thirty years designing the discipline.</p>`,
 src:"A. J. P. Taylor, The Course of German History; Karl Marx, 18th Brumaire (1852)",
 title_pt:"1848 · O Ano das Revoluções Fracassadas",
 body_pt:`<p>Nos primeiros seis meses de 1848, estouraram revoluções na França, Itália, Alemanha, Áustria, Hungria, Dinamarca, Polônia, Irlanda e Valáquia. Todas fracassaram até o fim de 1849. A velha ordem se manteve em todos os casos, exceto na França, onde foi rapidamente restabelecida sob Napoleão III.</p>
<p>Historiadores às vezes chamam-no "o ponto de virada em que a história moderna deixou de virar". Os revolucionários de 1848 eram liberais, nacionalistas e trabalhadores, e se desintegraram assim que as aristocracias que haviam deposto reencontraram o pulso. Marx, escrevendo em Londres naquele ano, tirou a lição: sem um proletariado disciplinado, a revolução burguesa não poderia virar revolução social. Passou os trinta anos seguintes desenhando a disciplina.</p>`,
 src_pt:"A. J. P. Taylor, The Course of German History; Karl Marx, 18 Brumário (1852)"},

{slug:"h-wwi-cause", type:"lectio", f:"H", title:"Why 1914",
 body:`<p>A Serbian nationalist shoots an Austrian archduke in Sarajevo. Within six weeks every great power in Europe is at war. Why?</p>
<p>Not because the assassination was that serious. Franz Ferdinand was not even the heir everyone wanted. But Europe had spent forty years building a web of alliances, mobilization timetables, and face-saving commitments so tightly that no major power could step back without visibly losing. Austria mobilized against Serbia; Russia mobilized to protect Serbia; Germany mobilized because it had to beat Russia before Russia finished; France mobilized because it was allied to Russia; Britain mobilized because Germany invaded Belgium on its way to France.</p>
<p>No one wanted the war. Everyone's plans required it. The lesson of 1914: alliance commitments and mobilization timetables, once drawn, acquire a vote of their own.</p>`,
 src:"Christopher Clark, The Sleepwalkers (2012); Barbara Tuchman, The Guns of August (1962)",
 title_pt:"Por que 1914",
 body_pt:`<p>Um nacionalista sérvio atira num arquiduque austríaco em Sarajevo. Em seis semanas, toda grande potência da Europa está em guerra. Por quê?</p>
<p>Não porque o assassinato fosse tão grave. Francisco Ferdinando não era sequer o herdeiro que todos queriam. Mas a Europa passara quarenta anos construindo uma teia de alianças, cronogramas de mobilização e compromissos de salvar a face tão apertados que nenhuma grande potência conseguia recuar sem perder visivelmente. A Áustria mobilizou contra a Sérvia; a Rússia mobilizou para proteger a Sérvia; a Alemanha mobilizou porque tinha de bater a Rússia antes que a Rússia terminasse; a França mobilizou porque era aliada da Rússia; a Grã-Bretanha mobilizou porque a Alemanha invadiu a Bélgica a caminho da França.</p>
<p>Ninguém queria a guerra. Os planos de todos a exigiam. Lição de 1914: compromissos de aliança e cronogramas de mobilização, uma vez desenhados, adquirem voto próprio.</p>`,
 src_pt:"Christopher Clark, Os Sonâmbulos (2012); Barbara Tuchman, Os Canhões de Agosto (1962)"},

{slug:"h-ussr-fall", type:"lectio", f:"H", title:"The Wall · 9 November 1989",
 body:`<p>A press conference in East Berlin, 6:53 pm. The spokesman Günter Schabowski, confused about new travel regulations he had barely read, says in response to an Italian journalist's question: East Germans can leave. "When does this take effect?" "Immediately, I think."</p>
<p>By 10 pm, 20,000 East Berliners are at the border crossings. The guards, with no orders, open the gates. The Berlin Wall falls that night with no shot fired. Within two years, the Soviet Union is dissolved.</p>
<p>Nobody that morning had predicted the night. The Cold War ended because of one spokesman's misreading of a memo. Which is also how civilizations end — not with a plan but with the moment someone stops obeying.</p>`,
 src:"Mary Elise Sarotte, The Collapse (2014); Timothy Garton Ash, The Magic Lantern (1990)",
 title_pt:"O Muro · 9 de Novembro de 1989",
 body_pt:`<p>Entrevista coletiva em Berlim Oriental, 18h53. O porta-voz Günter Schabowski, confuso quanto a novas regras de viagem que mal lera, responde à pergunta de um jornalista italiano: os alemães orientais podem partir. "Quando entra em vigor?" "Imediatamente, acho."</p>
<p>Às 22h, 20.000 berlinenses orientais estão nos postos de fronteira. Os guardas, sem ordens, abrem os portões. O Muro de Berlim cai nessa noite sem um tiro. Em dois anos, a União Soviética está dissolvida.</p>
<p>Ninguém naquela manhã tinha previsto a noite. A Guerra Fria acabou por causa da má leitura de um memorando por um porta-voz. É também assim que civilizações terminam — não com um plano, mas no instante em que alguém para de obedecer.</p>`,
 src_pt:"Mary Elise Sarotte, The Collapse (2014); Timothy Garton Ash, O Lampejo (1990)"},

{slug:"h-911", type:"lectio", f:"H", title:"September 11, 2001",
 body:`<p>At 8:46 am Eastern time, American Airlines Flight 11 struck the North Tower of the World Trade Center. Seventeen minutes later, United Flight 175 struck the South. At 9:37, American Flight 77 struck the Pentagon. At 10:03, United Flight 93 — whose passengers had learned by phone what was happening and voted to attack the hijackers — crashed in a Pennsylvania field. 2,977 dead.</p>
<p>Two months later, US forces were in Afghanistan. Eighteen months later, in Iraq. Twenty years later, both wars ended inconclusively; the Taliban was back in Kabul in August 2021. The $8 trillion spent and the hundreds of thousands dead in the resulting conflicts dwarf the attack itself.</p>
<p>Which is the first lesson of asymmetric war: the harm is not in the strike but in what the strike baits the victim into doing.</p>`,
 src:"9/11 Commission Report (2004)",
 title_pt:"11 de Setembro de 2001",
 body_pt:`<p>Às 8h46 (hora do leste americano), o voo 11 da American Airlines atingiu a Torre Norte do World Trade Center. Dezessete minutos depois, o voo 175 da United atingiu a Torre Sul. Às 9h37, o voo 77 da American atingiu o Pentágono. Às 10h03, o voo 93 da United — cujos passageiros tinham sabido pelo telefone o que acontecia e votaram atacar os sequestradores — caiu num campo da Pensilvânia. 2.977 mortos.</p>
<p>Dois meses depois, forças americanas estavam no Afeganistão. Dezoito meses depois, no Iraque. Vinte anos depois, as duas guerras terminaram sem desfecho; o Talibã estava de volta a Cabul em agosto de 2021. Os 8 trilhões de dólares gastos e as centenas de milhares de mortos nos conflitos resultantes anãoficam o próprio ataque.</p>
<p>Que é a primeira lição da guerra assimétrica: o dano não está no golpe, mas naquilo que o golpe atrai a vítima a fazer.</p>`,
 src_pt:"Relatório da Comissão do 11 de Setembro (2004)"},

{slug:"h-tocqueville-soft", type:"lectio", f:"H", title:"Tocqueville · Soft Despotism",
 body:`<p>Alexis de Tocqueville in <em>Democracy in America</em>, volume II (1840), predicts a kind of tyranny no previous society had known. Not the lash or the executioner's axe. A gentler form:</p>
<p>"Above these men is raised an immense and tutelary power, which takes upon itself alone to secure their gratifications and to watch over their fate. That power is absolute, minute, regular, provident and mild. It would be like the authority of a parent if, like that authority, its object was to prepare men for manhood; but it seeks, on the contrary, to keep them in perpetual childhood."</p>
<p>Not the state Tocqueville actually saw. The state he saw was coming. He described the welfare apparatus of the democratic twentieth century from a window in Jacksonian America.</p>`,
 src:"Alexis de Tocqueville, Democracy in America, vol. II, part IV, ch. 6 (1840)",
 title_pt:"Tocqueville · Despotismo Suave",
 body_pt:`<p>Alexis de Tocqueville, em <em>Da Democracia na América</em>, volume II (1840), prevê uma espécie de tirania que nenhuma sociedade anterior conhecera. Não o açoite nem o machado do carrasco. Uma forma mais suave:</p>
<p>"Acima desses homens eleva-se um poder imenso e tutelar, que se encarrega sozinho de assegurar-lhes as satisfações e de velar pelo seu destino. Esse poder é absoluto, minucioso, regular, previdente e brando. Seria como a autoridade do pai se, como esta, tivesse por objeto preparar os homens para a idade viril; mas procura, pelo contrário, mantê-los numa perpétua infância."</p>
<p>Não é o Estado que Tocqueville viu. O Estado que ele viu estava a caminho. Descreveu o aparato de bem-estar da democracia do séc. XX de uma janela da América de Jackson.</p>`,
 src_pt:"Alexis de Tocqueville, Da Democracia na América, vol. II, parte IV, cap. 6 (1840)"},

{slug:"h-kirk-canons", type:"lectio", f:"H", title:"Kirk · The Six Canons",
 body:`<p>Russell Kirk's <em>The Conservative Mind</em> (1953) distilled conservatism into six premises that six centuries of Burkean thought had taken for granted but never named:</p>
<p>(1) A transcendent moral order governs society. (2) The affections of life — custom, convention, continuity — are the soul of a social order. (3) Civilization requires both order <em>and</em> class, both liberty <em>and</em> duty. (4) Property and freedom are inseparable. (5) Prudence is the chief political virtue. (6) The best is the enemy of the good; reform must be organic, not utopian.</p>
<p>Not an ideology. A disposition. Conservatism, Kirk insisted, is a sensibility before it is a program. Where it hardens into program, it has already left the tradition it claims.</p>`,
 src:"Russell Kirk, The Conservative Mind (1953)",
 title_pt:"Kirk · Os Seis Cânones",
 body_pt:`<p>O <em>Conservative Mind</em> de Russell Kirk (1953) destilou o conservadorismo em seis premissas que seis séculos de pensamento burkiano haviam dado por certas mas nunca nomeado:</p>
<p>(1) Uma ordem moral transcendente governa a sociedade. (2) As afeições da vida — costume, convenção, continuidade — são a alma de uma ordem social. (3) A civilização exige ao mesmo tempo ordem <em>e</em> classe, liberdade <em>e</em> dever. (4) Propriedade e liberdade são inseparáveis. (5) A prudência é a virtude política principal. (6) O melhor é inimigo do bom; a reforma deve ser orgânica, não utópica.</p>
<p>Não é uma ideologia. É uma disposição. O conservadorismo, insistia Kirk, é uma sensibilidade antes de ser programa. Onde endurece em programa, já deixou a tradição que diz manter.</p>`,
 src_pt:"Russell Kirk, The Conservative Mind (1953)"},

{slug:"h-partnership", type:"sententia", f:"H", title:"Burke · Partnership",
 body:`<blockquote>Society is a partnership not only between those who are living, but between those who are living, those who are dead, and those who are to be born.<br>— Reflections on the Revolution in France (1790)</blockquote>
<p>The sentence that cannot be reconciled with any theory of society as a contract among present adults. Burke's is the premise all serious conservatism rests on.</p>`,
 src:"Edmund Burke, Reflections on the Revolution in France (1790)",
 title_pt:"Burke · Parceria",
 body_pt:`<blockquote>A sociedade é uma parceria não apenas entre os que vivem, mas entre os que vivem, os que morreram e os que ainda vão nascer.<br>— Reflexões sobre a Revolução em França (1790)</blockquote>
<p>A frase que não pode ser conciliada com nenhuma teoria da sociedade como contrato entre adultos presentes. É a premissa sobre a qual todo conservadorismo sério repousa.</p>`,
 src_pt:"Edmund Burke, Reflexões sobre a Revolução em França (1790)"},

{slug:"h-dante-stars", type:"sententia", f:"H", title:"L'amor che move",
 body:`<blockquote>L'amor che move il sole e l'altre stelle.<br><em>The love which moves the sun and the other stars.</em></blockquote>
<p>The last line of the <em>Paradiso</em> and of the <em>Divine Comedy</em>. Six hundred and sixty-six cantos of theology end on a single physical image: love as the final cause of the cosmos itself.</p>`,
 src:"Dante Alighieri, Paradiso XXXIII.145 (1320)",
 title_pt:"L'amor che move",
 body_pt:`<blockquote>L'amor che move il sole e l'altre stelle.<br><em>O amor que move o sol e as outras estrelas.</em></blockquote>
<p>O último verso do <em>Paraíso</em> e da <em>Divina Comédia</em>. Seiscentos e sessenta e seis cantos de teologia terminam numa única imagem física: o amor como causa final do próprio cosmos.</p>`,
 src_pt:"Dante Alighieri, Paraíso XXXIII.145 (1320)"},

{slug:"h-virgil-lacrimae", type:"sententia", f:"H", title:"Sunt lacrimae rerum",
 body:`<blockquote>Sunt lacrimae rerum et mentem mortalia tangunt.<br><em>There are tears for things, and mortal matters touch the heart.</em></blockquote>
<p>Aeneas in Carthage, standing before a mural of the Trojan War he survived. He weeps because the Carthaginians, strangers, have found Trojan grief worth painting. The dignity of being mourned.</p>`,
 src:"Virgil, Aeneid I.462 (c. 19 BC)",
 title_pt:"Sunt lacrimae rerum",
 body_pt:`<blockquote>Sunt lacrimae rerum et mentem mortalia tangunt.<br><em>Há lágrimas nas coisas, e o que é mortal toca o coração.</em></blockquote>
<p>Eneias em Cartago, diante de um mural da Guerra de Troia que sobreviveu. Chora porque os cartagineses, estrangeiros, acharam o pesar troiano digno de ser pintado. A dignidade de ser pranteado.</p>`,
 src_pt:"Virgílio, Eneida I.462 (c. 19 a.C.)"},

{slug:"h-solzhenitsyn", type:"lectio", f:"H", title:"Solzhenitsyn · The Line",
 body:`<p>From <em>The Gulag Archipelago</em>, written in secret, smuggled page by page out of Soviet Russia: "The line separating good and evil passes not through states, nor between classes, nor between political parties either — but right through every human heart — and through all human hearts."</p>
<p>Solzhenitsyn is pulling the rug from under every ideology of his century. Not the Nazis, not the capitalists, not the Jews, not the bourgeoisie are the problem to solve — <em>you are</em>. And so is he. The adult position in politics begins the moment one grants this.</p>`,
 src:"Aleksandr Solzhenitsyn, The Gulag Archipelago, vol. 2 (1973)",
 title_pt:"Soljenítsin · A Linha",
 body_pt:`<p>Do <em>Arquipélago Gulag</em>, escrito em segredo, contrabandeado página por página da Rússia soviética: "A linha que separa o bem do mal não passa pelos Estados, nem entre as classes, nem entre partidos políticos — mas pelo próprio coração de todo ser humano — e por todos os corações humanos."</p>
<p>Soljenítsin arranca o tapete debaixo de toda ideologia do seu século. Nem nazistas, nem capitalistas, nem judeus, nem a burguesia são o problema a resolver — <em>você é</em>. E ele também. A posição adulta na política começa no momento em que se concede isto.</p>`,
 src_pt:"Aleksandr Soljenítsin, O Arquipélago Gulag, vol. 2 (1973)"},

{slug:"h-american-primacy", type:"lectio", f:"H", title:"American Primacy · The Statistical Defense",
 body:`<p>Pessimists compare the United States to its peak and conclude decline. The honest comparison is to the rest of the world now.</p>
<p>2024: the US has 4% of world population, produces 25% of world GDP, hosts 60 of the top 100 universities, publishes most of the world's leading research, holds the world's reserve currency, operates eleven supercarriers to the next-largest nation's two, and runs eight of the ten largest companies by market cap. No power in modern history has concentrated so much relative strength while being surrounded by two oceans and two friendly neighbors.</p>
<p>The decline thesis is a mood. The arithmetic refuses to confirm it. Which does not mean the mood is irrelevant; moods can erode arithmetic over time. But the starting position is extraordinary, and acting from the mood instead of the arithmetic is one way to make the decline arrive.</p>`,
 src:"Marcos Nabhan, American Primacy · Statistical Defense; World Bank, IMF, THE rankings 2024",
 title_pt:"Primazia Americana · Defesa Estatística",
 body_pt:`<p>Pessimistas comparam os Estados Unidos ao próprio auge e concluem declínio. A comparação honesta é com o resto do mundo agora.</p>
<p>2024: os EUA têm 4% da população mundial, produzem 25% do PIB mundial, abrigam 60 das 100 melhores universidades, publicam a maior parte da pesquisa de ponta, detêm a moeda de reserva mundial, operam onze porta-aviões nucleares contra dois da nação seguinte, e rodam oito das dez maiores empresas por valor de mercado. Nenhuma potência na história moderna concentrou tanta força relativa cercada por dois oceanos e dois vizinhos amigáveis.</p>
<p>A tese do declínio é um humor. A aritmética se recusa a confirmá-lo. Isto não quer dizer que o humor seja irrelevante; humores podem erodir aritméticas com o tempo. Mas a posição de partida é extraordinária, e agir pelo humor em vez da aritmética é uma forma de fazer o declínio chegar.</p>`,
 src_pt:"Marcos Nabhan, Primazia Americana · Defesa Estatística; Banco Mundial, FMI, THE 2024"},

{slug:"h-attrib-leaders", type:"ludus", mode:"attributio", f:"H",
 title:"Ludus · Caesar or Napoleon?",
 body:`<p>Five sentences. Each is either Julius Caesar (100–44 BC) or Napoleon Bonaparte (1769–1821). Attribute each.</p>`,
 authors:["Caesar","Napoleon"],
 quotes:[
   {q:"Veni, vidi, vici.", a:"Caesar"},
   {q:"An army marches on its stomach.", a:"Napoleon"},
   {q:"Alea iacta est. The die is cast.", a:"Caesar"},
   {q:"Never interrupt your enemy when he is making a mistake.", a:"Napoleon"},
   {q:"If you must break the law, do it to seize power — in all other cases observe it.", a:"Caesar"}
 ],
 src:"Attributio · Historia · Caesar vs Napoleon",
 title_pt:"Ludus · César ou Napoleão?",
 body_pt:`<p>Cinco frases. Cada uma é de Júlio César (100–44 a.C.) ou Napoleão Bonaparte (1769–1821). Atribua.</p>`,
 authors_pt:["César","Napoleão"],
 quotes_pt:[
   {q:"Veni, vidi, vici.", a:"César"},
   {q:"Um exército marcha com o estômago.", a:"Napoleão"},
   {q:"Alea iacta est. A sorte está lançada.", a:"César"},
   {q:"Nunca interrompa seu inimigo quando ele está cometendo um erro.", a:"Napoleão"},
   {q:"Se precisas violar a lei, viola-a para tomar o poder — em todos os outros casos, observa-a.", a:"César"}
 ],
 src_pt:"Attributio · Historia · César vs Napoleão"}
];
FOLIOS.push(...HISTORIA_X);

// WAVE 7 — ARSENAL EXPANSION (+15 to reach 50) — passages from Marcos's own essays
const ARSENAL_X = [
{slug:"a-five-versions-key", type:"lectio", f:"A", rare:1, title:"The Five Versions · The Thesis",
 body:`<p>Five versions of the Christian story are available to a serious reader today. Each is coherent; each is defended by intelligent people; each predicts a different future.</p>
<p>(1) The Catholic version: a visible Church of 1.4 billion, with sacraments, Marian dogmas, and Peter's chair. (2) The Orthodox version: the same but with no Peter and a different calendar. (3) The high Protestant version: Scripture-plus-reason, formally without a magisterium, in practice run by seminary consensus. (4) The low Protestant version: Scripture alone, personal interpretation, fragmentation into tens of thousands of denominations by sociological necessity. (5) The post-Christian version: Christianity as cultural inheritance to be managed down.</p>
<p>Choose a version. Live inside it. The choice decides more than you think.</p>`,
 src:"Marcos Nabhan, Five Versions essay",
 title_pt:"As Cinco Versões · A Tese",
 body_pt:`<p>Cinco versões da história cristã estão disponíveis ao leitor sério hoje. Cada uma é coerente; cada uma é defendida por gente inteligente; cada uma prevê um futuro distinto.</p>
<p>(1) A versão católica: uma Igreja visível de 1,4 bilhão, com sacramentos, dogmas marianos e cátedra de Pedro. (2) A versão ortodoxa: o mesmo mas sem Pedro e com calendário diferente. (3) A versão protestante alta: Escritura mais razão, formalmente sem magistério, na prática governada por consenso dos seminários. (4) A versão protestante baixa: só Escritura, interpretação pessoal, fragmentação em dezenas de milhares de denominações por necessidade sociológica. (5) A versão pós-cristã: cristianismo como herança cultural a ser administrada em declínio.</p>
<p>Escolha uma versão. Viva dentro dela. A escolha decide mais do que você pensa.</p>`,
 src_pt:"Marcos Nabhan, ensaio As Cinco Versões"},

{slug:"a-manufactured-sex", type:"lectio", f:"A", title:"Manufactured Sex",
 body:`<p>Thesis of the essay: what the sexual revolution emancipated was not love. It was a hole in the market. Pre-1960 the economy of sex was organized by marriage, courtship, dowry, chastity norms, and the social contract that produced families. Post-1960 the same economy is reorganized by platforms, hormones, and advertising, selling intimacy as content.</p>
<p>The result is not more sex. All reliable data show less. The result is more <em>manufactured</em> sex: the thing optimized for engagement, isolation, and recurring purchase. The pre-liberal structure was intrusive; it also knew what it was for. The post-liberal structure is permissive; it does not know what it is for and does not notice the ache that produces.</p>`,
 src:"Marcos Nabhan, Manufactured Sex essay",
 title_pt:"Sexo Fabricado",
 body_pt:`<p>Tese do ensaio: o que a revolução sexual emancipou não foi o amor. Foi um buraco no mercado. Antes de 1960, a economia do sexo era organizada por casamento, corte, dote, normas de castidade e o contrato social que produzia famílias. Depois de 1960, a mesma economia é reorganizada por plataformas, hormônios e publicidade, vendendo intimidade como conteúdo.</p>
<p>O resultado não é mais sexo. Todos os dados confiáveis mostram menos. O resultado é mais sexo <em>fabricado</em>: aquilo otimizado para engajamento, isolamento e compra recorrente. A estrutura pré-liberal era intrusiva; também sabia para que servia. A estrutura pós-liberal é permissiva; não sabe para que serve e não percebe a dor que isso produz.</p>`,
 src_pt:"Marcos Nabhan, ensaio Sexo Fabricado"},

{slug:"a-feminist-rev", type:"lectio", f:"A", title:"The Feminist Revolution · The Account",
 body:`<p>The essay's argument, in one sentence: second-wave feminism solved a real injustice (civil equality, access to education, labor-market participation) and then kept extending its own logic for forty years past the point where the extension produced net harm. The result today is a demographic hollowing out of the professional class, loneliness at historic highs, fertility below replacement in every developed country, and a model of sexual politics that even its own daughters are quietly questioning.</p>
<p>The essay does not argue for reversing the first-wave gains. It argues that first-wave gains do not entail third-wave claims, and that a serious conservatism owes the next generation the vocabulary to say so without being called medieval.</p>`,
 src:"Marcos Nabhan, Feminist Revolution essay (refined)",
 title_pt:"A Revolução Feminista · O Relato",
 body_pt:`<p>O argumento do ensaio, numa frase: o feminismo da segunda onda resolveu uma injustiça real (igualdade civil, acesso à educação, participação no mercado de trabalho) e depois continuou a estender a própria lógica por quarenta anos, para além do ponto em que a extensão produziu dano líquido. O resultado hoje é um esvaziamento demográfico da classe profissional, solidão em máximas históricas, fertilidade abaixo da reposição em todo país desenvolvido, e um modelo de política sexual que até as próprias filhas, baixinho, estão a questionar.</p>
<p>O ensaio não defende reverter os ganhos da primeira onda. Defende que os ganhos da primeira onda não implicam as alegações da terceira, e que um conservadorismo sério deve à próxima geração o vocabulário para dizê-lo sem ser chamado de medieval.</p>`,
 src_pt:"Marcos Nabhan, ensaio A Revolução Feminista (refinado)"},

{slug:"a-ten-claims", type:"lectio", f:"A", title:"Ten Claims",
 body:`<p>The ten claims the essay makes, abbreviated: (1) metaphysics is possible; (2) classical theism is defensible without appeal to faith; (3) the Church that Christ founded is identifiable in history; (4) beauty is objective; (5) hierarchy is natural, not oppressive; (6) property rights predate the state; (7) family is prior to the individual, not vice versa; (8) the sexes are complementary, not interchangeable; (9) tradition is epistemically prior to novelty; (10) a civilization that cannot defend these claims will not survive its own prosperity.</p>
<p>Each claim is argued at book length elsewhere. The essay's work is to collect them so that one can see what one has, in fact, been defending — or ceding — one piece at a time.</p>`,
 src:"Marcos Nabhan, Ten Claims essay",
 title_pt:"Dez Reivindicações",
 body_pt:`<p>As dez reivindicações do ensaio, resumidas: (1) a metafísica é possível; (2) o teísmo clássico é defensável sem apelo à fé; (3) a Igreja que Cristo fundou é identificável na história; (4) a beleza é objetiva; (5) a hierarquia é natural, não opressiva; (6) os direitos de propriedade antecedem o Estado; (7) a família é anterior ao indivíduo, não o contrário; (8) os sexos são complementares, não intercambiáveis; (9) a tradição é epistemicamente anterior à novidade; (10) uma civilização que não defende essas reivindicações não sobreviverá à própria prosperidade.</p>
<p>Cada reivindicação é defendida à extensão de um livro em outro lugar. O trabalho do ensaio é reuni-las para que se veja o que, de fato, se vinha defendendo — ou cedendo — uma peça por vez.</p>`,
 src_pt:"Marcos Nabhan, ensaio Dez Reivindicações"},

{slug:"a-catholic-vindic", type:"lectio", f:"A", title:"The Catholic Vindication",
 body:`<p>The argument in one line: five hundred years after the Reformation, the Catholic claims that embarrassed Protestants most — the Marian dogmas, the papacy, Purgatory, the real presence, apostolic succession — are the claims that have held up best under historical, textual, and philosophical pressure, while the Protestant claims that embarrassed Catholics most — <em>sola scriptura</em>, <em>sola fide</em> read as forensic imputation, the invisible Church — have required constant doctrinal revision to remain intelligible to serious readers.</p>
<p>This is not a dunk. The essay grants Reformed Christianity its genuine strengths. It argues that a hinge-by-hinge audit after five centuries confirms the position Newman reached in 1845 by one footnote.</p>`,
 src:"Marcos Nabhan, Catholic Vindication essay",
 title_pt:"A Vindicação Católica",
 body_pt:`<p>O argumento numa linha: quinhentos anos após a Reforma, as alegações católicas que mais constrangiam os protestantes — os dogmas marianos, o papado, o Purgatório, a presença real, a sucessão apostólica — são as que mais resistiram à pressão histórica, textual e filosófica, enquanto as alegações protestantes que mais constrangiam os católicos — <em>sola scriptura</em>, <em>sola fide</em> entendida como imputação forense, a Igreja invisível — exigiram constante revisão doutrinal para permanecerem inteligíveis aos leitores sérios.</p>
<p>Isto não é provocação. O ensaio concede ao cristianismo reformado as suas forças genuínas. Argumenta que uma auditoria dobradiça a dobradiça depois de cinco séculos confirma a posição que Newman alcançou em 1845 por uma nota de rodapé.</p>`,
 src_pt:"Marcos Nabhan, ensaio A Vindicação Católica"},

{slug:"a-christianity-war", type:"lectio", f:"A", title:"Christianity and War",
 body:`<p>The essay confronts a common secular objection: "religion is responsible for most wars." The response, in three moves. (1) The empirical claim is false. The <em>Encyclopedia of Wars</em> (Phillips, Axelrod, 2004) categorizes 123 of 1,763 historical wars as having religious motivation — about 7%. (2) The twentieth century, the most secular in history, is also by orders of magnitude the bloodiest. (3) When Christianity does fight, Just War theory (Augustine, Aquinas, Grotius) is the historical origin of the entire modern framework of restraint on war — <em>jus ad bellum</em> and <em>jus in bello</em>.</p>
<p>The essay does not claim Christians have been peaceful. It claims the vocabulary by which modern people judge wars Christian or otherwise was mostly built by Christians.</p>`,
 src:"Marcos Nabhan, Christianity and War essay",
 title_pt:"Cristianismo e Guerra",
 body_pt:`<p>O ensaio enfrenta uma objeção secular comum: "a religião é responsável pela maioria das guerras". A resposta em três passos. (1) A alegação empírica é falsa. A <em>Enciclopédia das Guerras</em> (Phillips, Axelrod, 2004) classifica 123 de 1.763 guerras históricas como de motivação religiosa — cerca de 7%. (2) O séc. XX, o mais secular da história, é também, por ordens de grandeza, o mais sangrento. (3) Quando o cristianismo luta, a teoria da Guerra Justa (Agostinho, Aquino, Grócio) é a origem histórica de todo o quadro moderno de contenção da guerra — <em>jus ad bellum</em> e <em>jus in bello</em>.</p>
<p>O ensaio não alega que os cristãos foram pacíficos. Alega que o vocabulário pelo qual as pessoas modernas julgam guerras cristãs ou não foi em sua maior parte construído por cristãos.</p>`,
 src_pt:"Marcos Nabhan, ensaio Cristianismo e Guerra"},

{slug:"a-dress", type:"lectio", f:"A", title:"The Dress Essay",
 body:`<p>A piece on how dress communicates. We signal, through our clothes, how much continuity with the past we claim, how much work we are willing to do to be looked at correctly, and how much we have agreed to the given of our own body.</p>
<p>The essay's observation: when a civilization abandons dress, it abandons the ritual by which the body is dignified in public. The result is not egalitarianism but the reverse — the gym body replaces the clothed body as the sign of status, and only those with the leisure to produce the gym body are now visible. Dress protected the body by covering it. Removing the cover did not free the body; it exposed it to a new, more unforgiving regime of appraisal.</p>`,
 src:"Marcos Nabhan, Dress essay",
 title_pt:"O Ensaio sobre o Vestir",
 body_pt:`<p>Uma peça sobre como o vestir comunica. Sinalizamos, pela roupa, quanto de continuidade com o passado reivindicamos, quanto trabalho estamos dispostos a dar para sermos vistos corretamente, e quanto consentimos ao dado do nosso próprio corpo.</p>
<p>Observação do ensaio: quando uma civilização abandona o vestir, abandona o ritual pelo qual o corpo é dignificado em público. O resultado não é igualitarismo, mas o oposto — o corpo da academia substitui o corpo vestido como sinal de status, e só os que têm lazer para produzir o corpo da academia agora aparecem. O vestir protegia o corpo cobrindo-o. Retirar a cobertura não libertou o corpo; expôs-no a um regime novo e mais implacável de avaliação.</p>`,
 src_pt:"Marcos Nabhan, ensaio sobre o Vestir"},

{slug:"a-media", type:"lectio", f:"A", title:"Media · The Essay",
 body:`<p>McLuhan: the medium is the message. The essay extends the thesis. A culture that consumes most of its ideas through fifteen-second video clips will produce citizens who think in fifteen-second video clips, regardless of the content of any particular clip. The content is irrelevant to the formation; the <em>shape</em> is the formation.</p>
<p>Which is why the real cultural question is not what is on social media. The question is what social media is doing to the capacity for the kind of attention that could judge what is on social media. The essay's claim: the only reliable defense is deliberate consumption of long-form, slow media — the book, the Mass, the three-hour conversation with a friend. The device economy has made such consumption counter-cultural.</p>`,
 src:"Marcos Nabhan, Media essay; after McLuhan",
 title_pt:"Mídia · O Ensaio",
 body_pt:`<p>McLuhan: o meio é a mensagem. O ensaio estende a tese. Uma cultura que consome a maior parte de suas ideias por clipes de quinze segundos vai produzir cidadãos que pensam em clipes de quinze segundos, independentemente do conteúdo de qualquer clipe. O conteúdo é irrelevante para a formação; a <em>forma</em> é a formação.</p>
<p>É por isso que a real pergunta cultural não é o que está nas redes. A pergunta é o que as redes estão fazendo com a capacidade do tipo de atenção que poderia julgar o que está nelas. A alegação do ensaio: a única defesa confiável é o consumo deliberado de mídia longa e lenta — o livro, a Missa, a conversa de três horas com um amigo. A economia dos dispositivos tornou tal consumo contracultural.</p>`,
 src_pt:"Marcos Nabhan, ensaio sobre Mídia; segundo McLuhan"},

{slug:"a-welfare-black", type:"lectio", f:"A", title:"Welfare and the Black Family",
 body:`<p>The essay reconstructs, with Sowell's data, a point most of the modern racial conversation refuses: the collapse of the black American family does not track Jim Crow or slavery. It tracks the expansion of means-tested welfare starting in 1965.</p>
<p>In 1960, 22% of black children were born outside marriage. By 2015, 70%. The 1960 figure is lower than today's figure for whites. The policy that was framed as helping the poorest families functioned, in practice, as a tax on marriage within those families, and the families responded as every family under a tax does — by shrinking the taxed activity.</p>
<p>The essay closes with Sowell's own reminder: compassion that cannot read its own incentives is not compassion. It is sentiment with policy consequences.</p>`,
 src:"Marcos Nabhan, Welfare and the Black Family essay; after Sowell",
 title_pt:"Welfare e a Família Negra",
 body_pt:`<p>O ensaio reconstrói, com dados de Sowell, um ponto que a maior parte da conversa racial moderna se recusa a admitir: o colapso da família negra americana não acompanha Jim Crow nem a escravidão. Acompanha a expansão do welfare condicionado à renda a partir de 1965.</p>
<p>Em 1960, 22% das crianças negras nasciam fora do casamento. Em 2015, 70%. O número de 1960 é inferior ao de hoje entre brancos. A política apresentada como ajuda às famílias mais pobres funcionou, na prática, como imposto sobre o casamento dentro dessas famílias, e as famílias responderam como qualquer família responde a um imposto — encolhendo a atividade tributada.</p>
<p>O ensaio fecha com o próprio lembrete de Sowell: compaixão que não lê seus incentivos não é compaixão. É sentimento com consequências de política.</p>`,
 src_pt:"Marcos Nabhan, ensaio Welfare e a Família Negra; segundo Sowell"},

{slug:"a-theater-engine", type:"lectio", f:"A", title:"The Theater and the Engine",
 body:`<p>Two models of society, both ancient: the theater and the engine. The theater says: society is a performance in which inherited roles — father, priest, judge, citizen — are enacted with dignity because the stage is sacred. The engine says: society is a mechanism in which interchangeable parts (individuals, interests, rights) are tuned by procedure to maximize output.</p>
<p>Modernity has mostly chosen the engine. The essay's claim: this was not a discovery but a trade. We bought efficiency; we sold ritual. The visible result is a world of better refrigeration and worse weddings. Which, over a lifetime, is a worse deal than the brochure promised.</p>`,
 src:"Marcos Nabhan, The Theater and the Engine",
 title_pt:"O Teatro e o Motor",
 body_pt:`<p>Dois modelos de sociedade, ambos antigos: o teatro e o motor. O teatro diz: a sociedade é um espetáculo em que papéis herdados — pai, padre, juiz, cidadão — são encenados com dignidade porque o palco é sagrado. O motor diz: a sociedade é um mecanismo em que peças intercambiáveis (indivíduos, interesses, direitos) são afinadas por procedimento para maximizar o rendimento.</p>
<p>A modernidade escolheu, em larga medida, o motor. A alegação do ensaio: isto não foi uma descoberta mas uma troca. Compramos eficiência; vendemos ritual. O resultado visível é um mundo de refrigeração melhor e casamentos piores. O que, ao longo de uma vida, é um negócio pior do que o prometido no folheto.</p>`,
 src_pt:"Marcos Nabhan, O Teatro e o Motor"},

{slug:"a-convergence", type:"lectio", f:"A", title:"The Convergence",
 body:`<p>Observation: for forty years the Catholic conservative, the classical-liberal economist, the orthodox Jew, the serious evangelical, the Mormon theologian, the hesitant atheist like Tom Holland, and the lonely Anglican traditionalist have been drifting toward one another. They disagree on theology. They agree on diagnosis — that late liberalism's anthropology (atomized individual, infinite consent, maximal expression) is incompatible with the sort of culture any of them want to raise children in.</p>
<p>The essay calls this the Convergence. It is not an ecumenical movement; everyone keeps their creed. It is a tacit coalition on the question: do we still want a civilization? And if so, which practices will have to come back from the dead for it to be rebuilt?</p>`,
 src:"Marcos Nabhan, The Convergence essay",
 title_pt:"A Convergência",
 body_pt:`<p>Observação: por quarenta anos, o conservador católico, o economista liberal clássico, o judeu ortodoxo, o evangélico sério, o teólogo mórmon, o ateu hesitante como Tom Holland e o anglicano tradicionalista solitário vêm se aproximando. Discordam na teologia. Concordam no diagnóstico — que a antropologia do liberalismo tardio (indivíduo atomizado, consentimento infinito, expressão máxima) é incompatível com o tipo de cultura em que qualquer um deles quer criar filhos.</p>
<p>O ensaio chama a isso A Convergência. Não é um movimento ecumênico; cada um mantém o seu credo. É uma coalizão tácita na pergunta: ainda queremos uma civilização? E, se sim, quais práticas terão de voltar dos mortos para ser reconstruída?</p>`,
 src_pt:"Marcos Nabhan, ensaio A Convergência"},

{slug:"a-demolition-ess", type:"lectio", f:"A", rare:1, title:"The Demolition · The Argument",
 body:`<p>The essay reconstructs the "argument from derivative existence" in Thomist terms. (1) Every contingent being has its existence received, now, from something other than itself. (2) The chain of such receivers cannot be infinite without a first giver; an infinite horizontal chain of causes does not account for anything. (3) Therefore there exists something whose essence is to exist — classical theism's God.</p>
<p>The argument is not a cosmological argument about the first moment of time. It is a vertical argument about this moment. It is also not refuted by any finding in modern physics, because it concerns a different kind of causality. The essay's labor is to defend the premises against the three serious modern objections (Humean skepticism about causation; infinite regress; "the universe is the brute fact").</p>`,
 src:"Marcos Nabhan, The Demolition / ALL_ARGUMENTS",
 title_pt:"A Demolição · O Argumento",
 body_pt:`<p>O ensaio reconstrói o "argumento a partir da existência derivada" em termos tomistas. (1) Todo ser contingente tem a existência recebida, agora, de algo distinto de si. (2) A cadeia de tais recebedores não pode ser infinita sem um primeiro doador; uma cadeia horizontal infinita de causas não explica nada. (3) Portanto existe algo cuja essência é existir — o Deus do teísmo clássico.</p>
<p>O argumento não é cosmológico sobre o primeiro instante do tempo. É vertical, sobre este instante. Também não é refutado por nenhum achado da física moderna, porque trata de outro tipo de causalidade. O trabalho do ensaio é defender as premissas contra as três objeções modernas sérias (ceticismo humeano sobre causação; regresso infinito; "o universo é o fato bruto").</p>`,
 src_pt:"Marcos Nabhan, A Demolição / ALL_ARGUMENTS"},

{slug:"a-chair-not-fall", type:"lectio", f:"A", title:"The Chair That Does Not Fall",
 body:`<p>Peter's chair is the longest-running continuous institution in the Western world. 266 occupants. 1,992 years. It has outlasted every empire that persecuted it, every heresy that tried to redefine it, every reformer that promised to abolish it, every modern state that tried to replace it. Rome itself fell twice from under it; the chair is still there.</p>
<p>The essay's point is not that this proves the Catholic claim. Longevity is not infallibility. The essay's point is more modest: whatever one makes of the chair, no honest account of Western history can leave it out, and no account of modern unbelief can proceed as if its presence does not require explaining.</p>`,
 src:"Marcos Nabhan, The Chair That Does Not Fall",
 title_pt:"A Cátedra Que Não Cai",
 body_pt:`<p>A cátedra de Pedro é a instituição contínua mais longa do mundo ocidental. 266 ocupantes. 1.992 anos. Sobreviveu a todo império que a perseguiu, a toda heresia que tentou redefini-la, a todo reformador que prometeu aboli-la, a todo Estado moderno que tentou substituí-la. A própria Roma caiu duas vezes debaixo dela; a cátedra continua lá.</p>
<p>O ponto do ensaio não é que isto prova a alegação católica. Longevidade não é infalibilidade. O ponto é mais modesto: faça-se o que se fizer com a cátedra, nenhum relato honesto da história ocidental pode deixá-la de fora, e nenhum relato da descrença moderna pode seguir como se sua presença dispensasse explicação.</p>`,
 src_pt:"Marcos Nabhan, A Cátedra Que Não Cai"},

{slug:"a-medieval-christ", type:"lectio", f:"A", title:"Medieval Christendom · The Honest Case",
 body:`<p>The essay's method: steelman the Enlightenment's charge against the Middle Ages, then look at the evidence. The charge: superstition, cruelty, intellectual stagnation. The evidence: the universities (invented by the Church), the hospitals (invented by the Church), the just-war framework (invented by the Church), the first codification of international law (Vitoria, Salamanca), the architecture that still draws tourism eight centuries later, the music that still sets the standard for sacred composition, and literacy rates in monasteries that would not be matched by lay society until the nineteenth century.</p>
<p>The essay grants the cruelty — the Inquisition's totals have been inflated by a factor of fifty in the modern imagination, but the real totals are still bad. It also grants the superstition. It denies the stagnation thesis as a factual claim and asks the reader why the people who taught you to think that way had an interest in your believing it.</p>`,
 src:"Marcos Nabhan, Medieval Christendom (final)",
 title_pt:"Cristandade Medieval · O Caso Honesto",
 body_pt:`<p>Método do ensaio: construa o caso mais forte da acusação iluminista contra a Idade Média, depois olhe a evidência. A acusação: superstição, crueldade, estagnação intelectual. A evidência: as universidades (inventadas pela Igreja), os hospitais (inventados pela Igreja), o quadro de Guerra Justa (inventado pela Igreja), a primeira codificação do direito internacional (Vitória, Salamanca), a arquitetura que ainda atrai turismo oitocentos anos depois, a música que ainda estabelece o padrão para composição sacra, e taxas de alfabetização em mosteiros que a sociedade leiga só igualaria no séc. XIX.</p>
<p>O ensaio concede a crueldade — os totais da Inquisição foram inflados por um fator de cinquenta na imaginação moderna, mas os totais reais ainda são ruins. Concede também a superstição. Nega a tese da estagnação como alegação factual e pergunta ao leitor por que os que lhe ensinaram a pensar assim tinham interesse em que ele acreditasse.</p>`,
 src_pt:"Marcos Nabhan, Cristandade Medieval (final)"},

{slug:"a-arts-essay", type:"lectio", f:"A", title:"The Arts Essay · Thesis",
 body:`<p>The arts, the essay argues, are not entertainment that developed. They are a civilization's attempt to say, in form, what cannot be said in prose. When a civilization stops making serious art, it is not that the artists failed; it is that the civilization has run out of things it still needs to say.</p>
<p>By this measure, late liberal culture is not primarily producing serious art because it does not primarily have anything serious to communicate across generations. The content it does produce is horizontally rich (TV series, pop music, video games) and vertically thin — nothing you would hand your great-grandchildren as the thing you most wanted them to know. The Pietà was for great-grandchildren. We are not making Pietàs.</p>`,
 src:"Marcos Nabhan, Arts essay (parts 1 and 2)",
 title_pt:"O Ensaio sobre as Artes · Tese",
 body_pt:`<p>As artes, defende o ensaio, não são entretenimento que se desenvolveu. São a tentativa de uma civilização de dizer, em forma, o que não pode ser dito em prosa. Quando uma civilização para de fazer arte séria, não é que os artistas tenham falhado; é que a civilização ficou sem coisas que ainda precise dizer.</p>
<p>Por esse critério, a cultura liberal tardia não vem produzindo, em primeiro lugar, arte séria porque não tem, em primeiro lugar, nada de sério a comunicar entre gerações. O conteúdo que produz é horizontalmente rico (séries de TV, música pop, videogames) e verticalmente raso — nada que você entregaria aos seus tataranetos como aquilo que mais queria que eles soubessem. A Pietà era para tataranetos. Nós não estamos fazendo Pietàs.</p>`,
 src_pt:"Marcos Nabhan, ensaio sobre as Artes (partes 1 e 2)"}
];
FOLIOS.push(...ARSENAL_X);

// =========================================================================
// WAVE 8 — IMAGINES EXPANSION (+30) — more painting walkthroughs
// =========================================================================
const IMAGINES_X = [
{slug:"i-milkmaid-1", type:"lectio", f:"I", title:"Vermeer · The Milkmaid · 1",
 body:`<p>Rijksmuseum, Amsterdam. 1658. Vermeer paints a kitchen maid pouring milk from a jug into an earthenware bowl. 45.5 × 41 cm — smaller than a tabloid newspaper.</p>
<p>Begin where the light enters. Upper left, a window. Watch how it falls, in that specific angle, across her forehead, the lip of the jug, the folds of her blue apron. There is no second light source. Vermeer gives us a scene the sun could actually make.</p>`,
 src:"Johannes Vermeer, The Milkmaid, c. 1658, Rijksmuseum",
 title_pt:"Vermeer · A Leiteira · 1",
 body_pt:`<p>Rijksmuseum, Amsterdã. 1658. Vermeer pinta uma empregada de cozinha vertendo leite de um jarro numa tigela de barro. 45,5 × 41 cm — menor que um jornal tabloide.</p>
<p>Comece por onde a luz entra. Canto superior esquerdo, uma janela. Veja como ela cai, nesse ângulo preciso, sobre a testa dela, a borda do jarro, as pregas do avental azul. Não há segunda fonte de luz. Vermeer nos dá uma cena que o sol de fato poderia fazer.</p>`,
 src_pt:"Johannes Vermeer, A Leiteira, c. 1658, Rijksmuseum"},

{slug:"i-milkmaid-2", type:"lectio", f:"I", title:"Vermeer · The Milkmaid · 2",
 body:`<p>Now the bread. Four or five hunks on the wicker tray at the lower left. The crusts are not painted uniformly. Vermeer dotted them with tiny points of light — the French call this <em>pointillé</em>. The eye reads them as glint on crust before it names what they are. Three hundred and sixty years before Seurat.</p>
<p>Look again at the stream of milk. It is one continuous unbroken line down to the bowl. Hold your eye on it for ten seconds. Vermeer made time stop by painting a single second you can look at for an hour.</p>`,
 src:"Vermeer, The Milkmaid, detail",
 title_pt:"Vermeer · A Leiteira · 2",
 body_pt:`<p>Agora o pão. Quatro ou cinco pedaços na cesta de palha, à esquerda em baixo. As cascas não estão pintadas por igual. Vermeer salpicou-as com pequenos pontos de luz — os franceses chamam isto de <em>pointillé</em>. O olho os lê como brilho de casca antes de nomear o que são. Trezentos e sessenta anos antes de Seurat.</p>
<p>Volte ao fio de leite. É uma só linha contínua, sem quebras, até a tigela. Fixe o olho nela por dez segundos. Vermeer fez o tempo parar pintando um único segundo que você pode olhar por uma hora.</p>`,
 src_pt:"Vermeer, A Leiteira, detalhe"},

{slug:"i-milkmaid-3", type:"lectio", f:"I", title:"Vermeer · The Milkmaid · 3",
 body:`<p>Behind her, a plain wall. Look closely. Two nails and their shadows. One small gap where the plaster has fallen away. Nothing more. Vermeer paints that wall for weeks of his life, giving it the dignity of a face.</p>
<p>The point of the wall is to not distract. Which is also the point of a kitchen maid: to not distract. The painting is a thesis about dignity in ordinary labor, delivered to Protestant Delft in a Catholic man's language of attention.</p>`,
 src:"Vermeer, The Milkmaid, background wall",
 title_pt:"Vermeer · A Leiteira · 3",
 body_pt:`<p>Atrás dela, uma parede simples. Olhe de perto. Dois pregos e suas sombras. Uma pequena brecha onde o reboco caiu. Nada mais. Vermeer pinta essa parede por semanas da sua vida, dando-lhe a dignidade de um rosto.</p>
<p>A finalidade da parede é não distrair. O que é também a finalidade de uma criada de cozinha: não distrair. O quadro é uma tese sobre a dignidade do trabalho ordinário, entregue à Delft protestante na linguagem da atenção de um homem católico.</p>`,
 src_pt:"Vermeer, A Leiteira, parede de fundo"},

{slug:"i-milkmaid-4", type:"lectio", f:"I", title:"Vermeer · The Milkmaid · 4",
 body:`<p>Below, hidden against the baseboard, a <em>Delft tile</em>. On the tile, a tiny image: a Cupid with a bow. Vermeer painted it so small most viewers never see it. But it is there. The quiet labor of this kitchen, the painting says, happens inside the longer story of love — the household stands on it the way the wall stands on the tile.</p>`,
 src:"Vermeer, The Milkmaid, Delft tile detail",
 title_pt:"Vermeer · A Leiteira · 4",
 body_pt:`<p>Em baixo, encostado no rodapé, um <em>azulejo de Delft</em>. No azulejo, uma imagem minúscula: um Cupido com arco. Vermeer o pintou tão pequeno que a maioria dos espectadores nunca o vê. Mas está lá. O trabalho silencioso desta cozinha, diz o quadro, acontece dentro de uma história mais longa — a do amor; a casa se apoia nele como a parede se apoia no azulejo.</p>`,
 src_pt:"Vermeer, A Leiteira, detalhe do azulejo de Delft"},

{slug:"i-milkmaid-5", type:"lectio", f:"I", title:"Vermeer · The Milkmaid · 5",
 body:`<p>Last look. Step back. The whole picture is a vertical composition built on a diagonal — her head, the stream of milk, the bread, the Cupid tile. Follow the line. You end at the foot. It is the Christian composition for a worker: the Head above, the body serving, nothing of the person left out.</p>
<p>Vermeer painted perhaps thirty-six pictures. The world agreed to make him one of the ten greatest painters who ever lived. This is one of three or four reasons why.</p>`,
 src:"Vermeer, The Milkmaid · the whole",
 title_pt:"Vermeer · A Leiteira · 5",
 body_pt:`<p>Último olhar. Dê um passo atrás. O quadro inteiro é uma composição vertical construída numa diagonal — a cabeça dela, o fio de leite, o pão, o azulejo do Cupido. Siga a linha. Você termina no pé. É a composição cristã para uma trabalhadora: a Cabeça acima, o corpo servindo, nada da pessoa deixado de fora.</p>
<p>Vermeer pintou talvez trinta e seis quadros. O mundo concordou em fazer dele um dos dez maiores pintores de todos os tempos. Esta obra é uma das três ou quatro razões.</p>`,
 src_pt:"Vermeer, A Leiteira · o todo"},

{slug:"i-matthew-1", type:"lectio", f:"I", title:"Caravaggio · Calling of Matthew · 1",
 body:`<p>Rome, 1600. A dark tavern. Five men around a table, counting money. The light enters from the right in a single beam.</p>
<p>At the right edge of the picture, two figures step in from off-stage. One is Peter — look at the feet, barefoot, worker's feet. The other, half-cut by the frame, is Christ. His arm extends across the room, finger pointed. The gesture, the raking light that follows the finger, the whole picture: it is noon on an ordinary workday, and the Son of God has walked into the office.</p>`,
 src:"Caravaggio, Calling of Saint Matthew, 1599–1600, San Luigi dei Francesi, Rome",
 title_pt:"Caravaggio · Vocação de Mateus · 1",
 body_pt:`<p>Roma, 1600. Uma taverna escura. Cinco homens em volta de uma mesa, contando dinheiro. A luz entra pela direita num único feixe.</p>
<p>À direita do quadro, duas figuras entram vindas de fora de cena. Uma é Pedro — veja os pés, descalços, pés de trabalhador. A outra, meio cortada pela moldura, é Cristo. Seu braço se estende pela sala, dedo apontado. O gesto, a luz rasante que segue o dedo, a imagem toda: é meio-dia num dia útil comum, e o Filho de Deus entrou no escritório.</p>`,
 src_pt:"Caravaggio, Vocação de São Mateus, 1599–1600, San Luigi dei Francesi, Roma"},

{slug:"i-matthew-2", type:"lectio", f:"I", title:"Caravaggio · Calling of Matthew · 2",
 body:`<p>Which man at the table is Matthew? Scholars have argued four centuries. For a long time the consensus was the bearded man in the middle who seems to be pointing at himself — <em>me?</em>. More recent reading says the figure on the far left, head down, is Matthew, and the bearded man is pointing at <em>him</em>, saying <em>him?</em>.</p>
<p>Caravaggio built the ambiguity on purpose. Either reading works. The call lands on all of us at the table; which one of us picks up his coat and walks out depends on the picture after this one. This is not it. This is the moment before.</p>`,
 src:"Caravaggio, Calling of Saint Matthew, detail",
 title_pt:"Caravaggio · Vocação de Mateus · 2",
 body_pt:`<p>Qual dos homens na mesa é Mateus? Os eruditos discutem há quatro séculos. Por muito tempo, o consenso foi o barbado no meio, que parece apontar para si — <em>eu?</em>. Uma leitura mais recente diz que a figura à extrema esquerda, cabeça baixa, é Mateus, e o barbado aponta <em>para ele</em>, dizendo <em>este?</em>.</p>
<p>Caravaggio construiu a ambiguidade de propósito. As duas leituras funcionam. O chamado cai sobre todos nós na mesa; qual de nós pega o casaco e sai depende do quadro seguinte a este. Este não é esse. Este é o momento anterior.</p>`,
 src_pt:"Caravaggio, Vocação de São Mateus, detalhe"},

{slug:"i-matthew-3", type:"lectio", f:"I", title:"Caravaggio · Calling of Matthew · 3",
 body:`<p>The hand of Christ. Compare it to the Creation of Adam ceiling by Michelangelo in the Sistine Chapel — a five-minute walk away. The exact same gesture, same angle, same tension in the index finger. Caravaggio is quoting Michelangelo <em>on purpose</em>. The implication: the calling of Matthew is the Creation of Adam continued. The Son does with Matthew what the Father did with Adam. The creation is ongoing.</p>`,
 src:"Caravaggio quoting Michelangelo, Creation of Adam, 1512",
 title_pt:"Caravaggio · Vocação de Mateus · 3",
 body_pt:`<p>A mão de Cristo. Compare com o teto da Criação de Adão de Michelangelo na Capela Sistina — a cinco minutos a pé. Exatamente o mesmo gesto, mesmo ângulo, mesma tensão no indicador. Caravaggio cita Michelangelo <em>de propósito</em>. A implicação: a vocação de Mateus é a Criação de Adão continuada. O Filho faz com Mateus o que o Pai fez com Adão. A criação prossegue.</p>`,
 src_pt:"Caravaggio citando Michelangelo, Criação de Adão, 1512"},

{slug:"i-matthew-4", type:"lectio", f:"I", title:"Caravaggio · Calling of Matthew · 4",
 body:`<p>Look at the costumes. The men at the table are dressed in late-sixteenth-century finery — the clothes of Caravaggio's actual Rome. Christ and Peter are dressed in Biblical robes. The two eras collide in one room.</p>
<p>Caravaggio's thesis: Christ did not visit Palestine in the year 30 and leave. He walks into every tavern in every age. The two men on the right are entering 1600s Rome because they are also, right now, entering wherever you happen to be reading this.</p>`,
 src:"Caravaggio, costume anachronism",
 title_pt:"Caravaggio · Vocação de Mateus · 4",
 body_pt:`<p>Olhe os trajes. Os homens à mesa estão vestidos como fidalgos do fim do séc. XVI — as roupas da Roma real de Caravaggio. Cristo e Pedro trajam vestes bíblicas. Duas épocas colidem numa só sala.</p>
<p>Tese de Caravaggio: Cristo não visitou a Palestina no ano 30 e foi embora. Entra em toda taverna em todo tempo. Os dois à direita entram na Roma de 1600 porque também, agora, entram onde quer que você esteja lendo isto.</p>`,
 src_pt:"Caravaggio, anacronismo de trajes"},

{slug:"i-matthew-5", type:"lectio", f:"I", title:"Caravaggio · Calling of Matthew · 5",
 body:`<p>Last. The chapel is dark. Caravaggio chose black for most of the canvas. The light that falls on Matthew comes from above and behind Christ. It is not sunlight — the chapel's one window is in the wrong place. It is a light the painting invents.</p>
<p>Caravaggio does this throughout his work. He never paints halos. He paints the light that would make a halo necessary. The invisibility of grace, made visible as photons.</p>`,
 src:"Caravaggio, Calling of Saint Matthew · the light",
 title_pt:"Caravaggio · Vocação de Mateus · 5",
 body_pt:`<p>Por fim. A capela é escura. Caravaggio escolheu o preto para a maior parte da tela. A luz que cai sobre Mateus vem de cima e por detrás de Cristo. Não é a luz do sol — a única janela da capela está no lugar errado. É uma luz que a pintura inventa.</p>
<p>Caravaggio faz isso em toda a sua obra. Nunca pinta auréolas. Pinta a luz que tornaria a auréola necessária. A invisibilidade da graça tornada visível como fótons.</p>`,
 src_pt:"Caravaggio, Vocação de São Mateus · a luz"},

{slug:"i-meninas-1", type:"lectio", f:"I", title:"Velázquez · Las Meninas · 1",
 body:`<p>Madrid, 1656. Velázquez has set up his easel in a room of the royal palace. The infanta Margarita, five years old, stands in the center of the room surrounded by her maids of honor (<em>meninas</em>), a dwarf, a dog. The painter himself stands at the left, brush in hand, looking out at us. Enormous canvas, over three meters tall.</p>
<p>Look where everyone is looking. They are all looking at us. We are not spectators. We are what they are painting.</p>`,
 src:"Diego Velázquez, Las Meninas, 1656, Museo del Prado",
 title_pt:"Velázquez · As Meninas · 1",
 body_pt:`<p>Madri, 1656. Velázquez montou o cavalete numa sala do palácio real. A infanta Margarita, cinco anos, está ao centro cercada por suas aias (<em>meninas</em>), um anão, um cão. O próprio pintor está à esquerda, pincel na mão, olhando para fora, para nós. Tela enorme, mais de três metros de altura.</p>
<p>Veja para onde todos olham. Todos olham para nós. Não somos espectadores. Somos o que eles estão pintando.</p>`,
 src_pt:"Diego Velázquez, As Meninas, 1656, Museu do Prado"},

{slug:"i-meninas-2", type:"lectio", f:"I", title:"Velázquez · Las Meninas · 2",
 body:`<p>Back wall. A dim mirror. In the mirror, two faces: the king Philip IV and his queen Mariana. They are standing where we are standing. We are the king and queen. Or we are seeing the king and queen reflected because we are standing beside them.</p>
<p>Foucault wrote a famous twenty pages on this painting. His claim: the painting is the beginning of modern self-consciousness in art, because for the first time the viewer is also inside the picture, and the picture knows it.</p>`,
 src:"Velázquez, Las Meninas, mirror detail; Michel Foucault, The Order of Things (1966)",
 title_pt:"Velázquez · As Meninas · 2",
 body_pt:`<p>Parede do fundo. Um espelho embaçado. No espelho, dois rostos: o rei Filipe IV e a rainha Mariana. Estão de pé onde estamos de pé. Somos o rei e a rainha. Ou estamos vendo o rei e a rainha refletidos porque estamos de pé ao lado deles.</p>
<p>Foucault escreveu umas célebres vinte páginas sobre este quadro. Sua tese: este quadro é o começo da autoconsciência moderna na arte, porque, pela primeira vez, o espectador também está dentro do quadro, e o quadro sabe disso.</p>`,
 src_pt:"Velázquez, As Meninas, detalhe do espelho; Michel Foucault, As Palavras e as Coisas (1966)"},

{slug:"i-meninas-3", type:"lectio", f:"I", title:"Velázquez · Las Meninas · 3",
 body:`<p>Look at the painter at the left. On his chest: the red cross of the Order of Santiago, the highest honor the Spanish crown could give a nobleman. Velázquez did not have it when he started this painting. He received it two years before his death, in 1659.</p>
<p>Legend has it the king himself painted the cross onto the canvas with his own hand. Whether true or legend, the painting is a story about painting: Velázquez has put himself at the heart of a royal family portrait, as a servant who is also a nobleman, both at once. The whole career is here in one picture.</p>`,
 src:"Velázquez, Las Meninas · the self-portrait",
 title_pt:"Velázquez · As Meninas · 3",
 body_pt:`<p>Olhe para o pintor à esquerda. Sobre o peito: a cruz vermelha da Ordem de Santiago, a mais alta honraria que a Coroa espanhola podia conceder a um fidalgo. Velázquez não a possuía quando começou este quadro. Recebeu-a dois anos antes de morrer, em 1659.</p>
<p>Reza a lenda que o próprio rei pintou a cruz na tela com a sua mão. Verdade ou lenda, o quadro é uma história sobre pintura: Velázquez se pôs no coração de um retrato da família real, como criado que é também fidalgo, as duas coisas ao mesmo tempo. A carreira inteira está num só quadro.</p>`,
 src_pt:"Velázquez, As Meninas · o autorretrato"},

{slug:"i-meninas-4", type:"lectio", f:"I", title:"Velázquez · Las Meninas · 4",
 body:`<p>The canvas Velázquez is painting is turned away from us. We see only its back. What is on it? We cannot know. The painting we are looking at is nested around the painting we cannot see. The one visible to us is the one that cannot be seen; the one visible to the painter is the one we cannot know.</p>
<p>Four hundred years later, this reversal is still the subject of every doctoral thesis someone writes about this picture.</p>`,
 src:"Velázquez, Las Meninas · the hidden canvas",
 title_pt:"Velázquez · As Meninas · 4",
 body_pt:`<p>A tela que Velázquez pinta está voltada para o outro lado. Vemos só o seu verso. O que há sobre ela? Não podemos saber. O quadro que olhamos está aninhado em torno do quadro que não podemos ver. O que é visível para nós é o que não pode ser visto; o que é visível para o pintor é o que não podemos saber.</p>
<p>Quatrocentos anos depois, essa inversão ainda é tema de toda tese de doutorado escrita sobre este quadro.</p>`,
 src_pt:"Velázquez, As Meninas · a tela escondida"},

{slug:"i-meninas-5", type:"lectio", f:"I", title:"Velázquez · Las Meninas · 5",
 body:`<p>Step back. The whole picture is a Baroque trompe l'oeil of relations. Who paints whom? Who looks at whom? Who is the viewer? Who is the painted?</p>
<p>Velázquez has made a picture in which every social relation of his monarchy — king and painter, patron and servant, viewer and viewed — is pulled into one geometric puzzle. Four hundred years of commentators have tried to solve it. It is unsolvable, which is why they keep trying. The best pictures are the ones that outlive their puzzles.</p>`,
 src:"Velázquez, Las Meninas · the whole",
 title_pt:"Velázquez · As Meninas · 5",
 body_pt:`<p>Um passo atrás. O quadro inteiro é um trompe l'oeil barroco de relações. Quem pinta quem? Quem olha quem? Quem é o espectador? Quem é o pintado?</p>
<p>Velázquez fez um quadro em que toda relação social da sua monarquia — rei e pintor, patrono e servo, espectador e visto — é puxada para um enigma geométrico. Quatro séculos de comentadores tentaram resolvê-lo. É insolúvel; por isso continuam tentando. Os melhores quadros são os que sobrevivem aos próprios enigmas.</p>`,
 src_pt:"Velázquez, As Meninas · o todo"},

{slug:"i-prodigal-1", type:"lectio", f:"I", title:"Rembrandt · Prodigal Son · 1",
 body:`<p>Hermitage, St Petersburg. 1669. Rembrandt is sixty-three, bankrupt, outliving his wife and most of his children. He paints a father embracing a kneeling son. The canvas is 262 × 206 cm — floor to ceiling in a modest room.</p>
<p>Start with the son. His head is shaved — a convict's crop. His feet are bare, one calloused and one worn through its sandal. On his left hip he still carries the sword he took to war, which the parable does not mention but Rembrandt invents. He has come home with nothing but a weapon.</p>`,
 src:"Rembrandt van Rijn, The Return of the Prodigal Son, c. 1669, Hermitage",
 title_pt:"Rembrandt · O Filho Pródigo · 1",
 body_pt:`<p>Hermitage, São Petersburgo. 1669. Rembrandt tem sessenta e três anos, está falido, sobreviveu à esposa e à maioria dos filhos. Pinta um pai abraçando um filho ajoelhado. A tela mede 262 × 206 cm — do chão ao teto de uma sala comum.</p>
<p>Comece pelo filho. A cabeça está raspada — corte de preso. Os pés estão descalços, um calejado, o outro furando a sandália. No quadril esquerdo ele ainda carrega a espada com que foi à guerra, que a parábola não menciona mas Rembrandt inventa. Voltou para casa sem nada senão uma arma.</p>`,
 src_pt:"Rembrandt van Rijn, O Retorno do Filho Pródigo, c. 1669, Hermitage"},

{slug:"i-prodigal-2", type:"lectio", f:"I", title:"Rembrandt · Prodigal Son · 2",
 body:`<p>Now the father. He bends forward with his head above the son's. His face is lit, exhausted, blind — Rembrandt gives him the drooping eyes of near-blindness, which the parable also does not mention. The father has been watching the horizon until his sight gave out.</p>
<p>His hands are on the son's shoulders. Look at them. They do not match. The one on our left is young, broad, strong. The one on our right is older, lined, delicate. The maternal hand and the paternal hand are both present on the father, because God's embrace is both at once.</p>`,
 src:"Rembrandt, Prodigal Son · the father's hands",
 title_pt:"Rembrandt · O Filho Pródigo · 2",
 body_pt:`<p>Agora o pai. Debruça-se com a cabeça acima da do filho. Seu rosto está iluminado, exausto, cego — Rembrandt lhe dá as pálpebras caídas de quem está quase cego, o que a parábola também não menciona. O pai esteve olhando o horizonte até a vista acabar.</p>
<p>As mãos estão sobre os ombros do filho. Olhe-as. Não são iguais. A da nossa esquerda é jovem, larga, forte. A da nossa direita é mais velha, estriada, delicada. A mão materna e a mão paterna estão as duas presentes no pai, porque o abraço de Deus é as duas coisas ao mesmo tempo.</p>`,
 src_pt:"Rembrandt, O Filho Pródigo · as mãos do pai"},

{slug:"i-prodigal-3", type:"lectio", f:"I", title:"Rembrandt · Prodigal Son · 3",
 body:`<p>Right side, standing erect, is the elder son. Red cloak, folded arms, no part of him touching his father or his brother. He is still outside the embrace. Rembrandt gives him the whole right half of the canvas and refuses to resolve his face.</p>
<p>The parable's quietest horror: the elder son is you if you have been diligent for the wrong reasons. He has worked faithfully for his father and in that very work has lost his father. The painting makes you worry whether <em>he</em> will come inside the embrace before the father dies.</p>`,
 src:"Rembrandt, Prodigal Son · the elder brother",
 title_pt:"Rembrandt · O Filho Pródigo · 3",
 body_pt:`<p>À direita, em pé, está o irmão mais velho. Capa vermelha, braços cruzados, nenhuma parte dele tocando o pai ou o irmão. Ainda está fora do abraço. Rembrandt lhe dá toda a metade direita da tela e se recusa a resolver seu rosto.</p>
<p>O horror mais silencioso da parábola: o irmão mais velho é você se foi diligente pelas razões erradas. Trabalhou fielmente para o pai e, nesse próprio trabalho, perdeu o pai. O quadro te faz temer que <em>ele</em> entre no abraço antes de o pai morrer.</p>`,
 src_pt:"Rembrandt, O Filho Pródigo · o irmão mais velho"},

{slug:"i-prodigal-4", type:"lectio", f:"I", title:"Rembrandt · Prodigal Son · 4",
 body:`<p>Henri Nouwen wrote an entire book, <em>The Return of the Prodigal Son</em> (1992), after a year sitting in front of this painting in the Hermitage. His thesis: a Christian life has three stages. First we are the younger son, running away. Then we come home, kneeling. Then — the hard part — we must become the father: the one who waits, embraces, pays the cost of welcoming home a child who has nothing to give back.</p>
<p>Most people, Nouwen says, never make it to the third stage. The painting is a map of all three.</p>`,
 src:"Henri Nouwen, The Return of the Prodigal Son (1992)",
 title_pt:"Rembrandt · O Filho Pródigo · 4",
 body_pt:`<p>Henri Nouwen escreveu um livro inteiro, <em>O Regresso do Filho Pródigo</em> (1992), depois de passar um ano sentado diante deste quadro no Hermitage. Sua tese: a vida cristã tem três estágios. Primeiro somos o filho mais novo, fugindo. Depois voltamos para casa, de joelhos. Então — a parte difícil — temos de nos tornar o pai: aquele que espera, abraça, paga o custo de receber de volta um filho que não tem nada para devolver.</p>
<p>A maior parte, diz Nouwen, nunca chega ao terceiro estágio. O quadro é mapa dos três.</p>`,
 src_pt:"Henri Nouwen, O Regresso do Filho Pródigo (1992)"},

{slug:"i-prodigal-5", type:"lectio", f:"I", title:"Rembrandt · Prodigal Son · 5",
 body:`<p>Last look. Rembrandt painted this the year he died, in a house he no longer owned, after burying his son Titus the year before. Every image he made of a father embracing a son after Titus is the father Rembrandt did not get to be.</p>
<p>The painting is autobiography disguised as parable. It is also, for anyone who has lost a child or lost a parent, the picture Christianity actually hands to you in your worst hour. If you have never cried in front of a painting, this is the one that will do it.</p>`,
 src:"Rembrandt, The Return of the Prodigal Son · the whole",
 title_pt:"Rembrandt · O Filho Pródigo · 5",
 body_pt:`<p>Último olhar. Rembrandt pintou-o no ano em que morreu, numa casa que já não era sua, depois de enterrar o filho Tito no ano anterior. Toda imagem que ele fez de um pai abraçando um filho depois de Tito é o pai que Rembrandt não teve tempo de ser.</p>
<p>O quadro é autobiografia disfarçada em parábola. É também, para quem perdeu um filho ou um pai, o quadro que o cristianismo de fato entrega a você na sua pior hora. Se você nunca chorou diante de uma pintura, é este que fará isso.</p>`,
 src_pt:"Rembrandt, O Retorno do Filho Pródigo · o todo"},

{slug:"i-arnolfini-1", type:"lectio", f:"I", title:"Van Eyck · Arnolfini · 1",
 body:`<p>Bruges, 1434. Jan van Eyck. 82 × 60 cm. A merchant and his wife stand in a bedroom with their shoes off and their hands joined. Oil paint had been invented in Flanders about a generation before. Van Eyck shows what it can do: every bristle of a dog, every tile, every bead of amber, every candle flame — all painted at a resolution that would not be matched by any other medium for 500 years.</p>`,
 src:"Jan van Eyck, Portrait of Giovanni Arnolfini and his Wife, 1434, National Gallery, London",
 title_pt:"Van Eyck · Arnolfini · 1",
 body_pt:`<p>Bruges, 1434. Jan van Eyck. 82 × 60 cm. Um mercador e sua esposa estão em pé num quarto, descalços, de mãos dadas. A tinta a óleo fora inventada em Flandres cerca de uma geração antes. Van Eyck mostra o que ela pode fazer: cada pelo de um cão, cada azulejo, cada contas de âmbar, cada chama de vela — tudo pintado numa resolução que nenhum outro meio igualaria por 500 anos.</p>`,
 src_pt:"Jan van Eyck, Retrato de Giovanni Arnolfini e sua Esposa, 1434, National Gallery, Londres"},

{slug:"i-arnolfini-2", type:"lectio", f:"I", title:"Van Eyck · Arnolfini · 2",
 body:`<p>The woman. Her green dress drapes forward over her belly. Is she pregnant? Art historians argue. The consensus leans no — it is the fashion of the time, in which unmarried and married women alike piled fabric at the belly to simulate the shape. The gesture by which she lifts the dress is both decorous and prosperous: look how much cloth I can waste.</p>`,
 src:"Van Eyck, Arnolfini · the dress",
 title_pt:"Van Eyck · Arnolfini · 2",
 body_pt:`<p>A mulher. O vestido verde drapeja à frente, sobre a barriga. Está grávida? Os historiadores da arte discutem. O consenso tende ao não — é a moda da época, em que mulheres solteiras e casadas acumulavam tecido na barriga para simular a forma. O gesto com que ela ergue o vestido é ao mesmo tempo decoroso e próspero: olhem quanto tecido posso desperdiçar.</p>`,
 src_pt:"Van Eyck, Arnolfini · o vestido"},

{slug:"i-arnolfini-3", type:"lectio", f:"I", title:"Van Eyck · Arnolfini · 3",
 body:`<p>Back wall. A convex mirror. Perfectly round. In the mirror, the room reversed. And two more figures — one in red, one in blue — standing where we are standing. The painting is giving us the vantage point of two witnesses to the scene we are observing.</p>
<p>Above the mirror, in careful cursive Latin: <em>Johannes de eyck fuit hic 1434</em>. "Jan van Eyck was here. 1434." The painter is the witness. The painting is a legal document.</p>`,
 src:"Van Eyck, Arnolfini · the mirror",
 title_pt:"Van Eyck · Arnolfini · 3",
 body_pt:`<p>Parede do fundo. Um espelho convexo. Perfeitamente redondo. No espelho, o quarto invertido. E mais duas figuras — uma de vermelho, outra de azul — paradas onde estamos. O quadro nos dá a vista de duas testemunhas da cena que observamos.</p>
<p>Acima do espelho, em cursiva latina cuidadosa: <em>Johannes de eyck fuit hic 1434</em>. "Jan van Eyck esteve aqui. 1434." O pintor é a testemunha. O quadro é documento jurídico.</p>`,
 src_pt:"Van Eyck, Arnolfini · o espelho"},

{slug:"i-arnolfini-4", type:"lectio", f:"I", title:"Van Eyck · Arnolfini · 4",
 body:`<p>Erwin Panofsky, 1934, argued the painting is a legal record of a <em>per verba de praesenti</em> marriage — the kind Catholic couples could still contract without a priest, before Trent in 1545 required clergy for valid matrimony. The joined hands, the removed shoes (standing on holy ground), the single candle burning in daylight (God the witness), the mirror with the painter's signature above it (two human witnesses), the dog (fidelity): every element is a legal checkbox.</p>
<p>Later scholars doubt the full theory. But the painting is doing <em>something</em> solemn and documentary that mere portraiture never attempted. It is the only painting whose legal status is still argued over.</p>`,
 src:"Erwin Panofsky, Jan van Eyck's Arnolfini Portrait (1934)",
 title_pt:"Van Eyck · Arnolfini · 4",
 body_pt:`<p>Erwin Panofsky, em 1934, defendeu que o quadro é registro legal de um casamento <em>per verba de praesenti</em> — do tipo que casais católicos ainda podiam contrair sem padre, antes de Trento (1545) exigir clérigo para a validade do matrimônio. Mãos dadas, sapatos removidos (terreno sagrado), uma única vela acesa à luz do dia (Deus como testemunha), o espelho com a assinatura do pintor acima (duas testemunhas humanas), o cão (fidelidade): cada elemento é um item do contrato.</p>
<p>Especialistas posteriores duvidam da teoria inteira. Mas o quadro faz <em>algo</em> solene e documental que o mero retrato jamais tentou. É o único quadro cujo estatuto jurídico ainda se discute.</p>`,
 src_pt:"Erwin Panofsky, Jan van Eyck's Arnolfini Portrait (1934)"},

{slug:"i-arnolfini-5", type:"lectio", f:"I", title:"Van Eyck · Arnolfini · 5",
 body:`<p>Step back. The painting is an opening manifesto for Northern European art. Where Italy would paint gods and heroes in open air, Flanders would paint burghers in their bedrooms. Where Italy wanted ideal bodies, Flanders wanted real faces. Where Italy wanted narrative, Flanders wanted inventory — the catalog of a life well made.</p>
<p>Five hundred years of Dutch and Flemish painting flow out of this one small picture. Vermeer is a great-grandchild. Rembrandt is a cousin. The whole quiet, bourgeois, interior tradition — the opposite of Rome's altars — begins here.</p>`,
 src:"Van Eyck, Arnolfini · the whole",
 title_pt:"Van Eyck · Arnolfini · 5",
 body_pt:`<p>Um passo atrás. O quadro é manifesto de abertura da arte do norte da Europa. Enquanto a Itália pintaria deuses e heróis ao ar livre, Flandres pintaria burgueses em seus quartos. Enquanto a Itália queria corpos ideais, Flandres queria rostos reais. Enquanto a Itália queria narrativa, Flandres queria inventário — o catálogo de uma vida bem feita.</p>
<p>Quinhentos anos de pintura holandesa e flamenga saem deste pequeno quadro. Vermeer é bisneto. Rembrandt é primo. Toda a tradição silenciosa, burguesa, interior — o oposto dos altares de Roma — começa aqui.</p>`,
 src_pt:"Van Eyck, Arnolfini · o todo"},

{slug:"i-trinity-1", type:"lectio", f:"I", title:"Rublev · Trinity · 1",
 body:`<p>Russia, c. 1411. 142 × 114 cm, egg tempera on wood. Andrei Rublev, a monk at the Trinity Monastery of St. Sergius, paints three angels seated around a table. The scene is Genesis 18 — Abraham entertained three strangers at Mamre who turned out to be the Lord — but Rublev leaves Abraham out. Only the three remain.</p>
<p>The icon is read right-to-left in the direction of a bow. Begin with the right angel. His head inclines toward the center. His cloak is green, the color of the Spirit who gives life.</p>`,
 src:"Andrei Rublev, The Hospitality of Abraham (The Trinity), c. 1411, Tretyakov Gallery, Moscow",
 title_pt:"Rublev · Trindade · 1",
 body_pt:`<p>Rússia, c. 1411. 142 × 114 cm, têmpera de ovo sobre madeira. Andrei Rublev, monge no Mosteiro da Trindade de São Sérgio, pinta três anjos sentados em volta de uma mesa. A cena é Gênesis 18 — Abraão hospedou três forasteiros em Mamre que se mostraram o Senhor — mas Rublev omite Abraão. Só os três permanecem.</p>
<p>O ícone se lê da direita para a esquerda, na direção de uma reverência. Comece pelo anjo da direita. A cabeça se inclina para o centro. O manto é verde, a cor do Espírito que dá vida.</p>`,
 src_pt:"Andrei Rublev, A Hospitalidade de Abraão (A Trindade), c. 1411, Galeria Tretyakov, Moscou"},

{slug:"i-trinity-2", type:"lectio", f:"I", title:"Rublev · Trinity · 2",
 body:`<p>Center. The Son. Dark red robe (the humanity he will take) with a blue cloak (his divinity) over his left shoulder. He blesses the chalice on the table with two fingers. The chalice holds a tiny lamb's head — the Lamb slain. The Father is to his right; the Spirit to his left; the Son inclines his own head toward the Father, assenting.</p>
<p>The whole icon is the Trinity in council about the Incarnation. The Son is agreeing, with his bowed head, to leave this circle and become the Lamb in the cup.</p>`,
 src:"Rublev, Trinity · the Son",
 title_pt:"Rublev · Trindade · 2",
 body_pt:`<p>Centro. O Filho. Veste vermelho escuro (a humanidade que assumirá) com manto azul (sua divindade) sobre o ombro esquerdo. Abençoa com dois dedos o cálice na mesa. O cálice tem uma minúscula cabeça de cordeiro — o Cordeiro imolado. O Pai está à sua direita; o Espírito à sua esquerda; o Filho inclina a cabeça para o Pai, consentindo.</p>
<p>O ícone inteiro é a Trindade em concílio sobre a Encarnação. O Filho concorda, com a cabeça inclinada, em deixar este círculo e tornar-se o Cordeiro no cálice.</p>`,
 src_pt:"Rublev, Trindade · o Filho"},

{slug:"i-trinity-3", type:"lectio", f:"I", title:"Rublev · Trinity · 3",
 body:`<p>Left. The Father. His robe is a pale shimmering gold (the uncreated light). He blesses the cup toward which the Son is bending. His posture is the quietest of the three — he receives the gift of the Son's assent and the Spirit's going-forth.</p>
<p>Note what Rublev does not do: he gives the Father no beard, no throne, no greater size. The three figures are indistinguishable by rank. Only their <em>relations</em> differ. The Trinity, Rublev insists in paint, is the three persons as pure relations — not three gods of ascending importance.</p>`,
 src:"Rublev, Trinity · the Father",
 title_pt:"Rublev · Trindade · 3",
 body_pt:`<p>Esquerda. O Pai. A sua veste é um dourado pálido e lustroso (a luz incriada). Abençoa o cálice para o qual o Filho se inclina. A sua postura é a mais silenciosa das três — recebe o dom do consentimento do Filho e do envio do Espírito.</p>
<p>Note o que Rublev não faz: não dá barba ao Pai, nem trono, nem tamanho maior. As três figuras são indistinguíveis em categoria. Só suas <em>relações</em> diferem. A Trindade, insiste Rublev em pintura, é três pessoas como puras relações — não três deuses em ordem de importância.</p>`,
 src_pt:"Rublev, Trindade · o Pai"},

{slug:"i-trinity-4", type:"lectio", f:"I", title:"Rublev · Trinity · 4",
 body:`<p>The circle. Follow the heads: Spirit (right), Son (center), Father (left). Their inclinations form an arc that returns on itself. The three sit at a square table whose near side is open — the only unoccupied seat in the icon is directly across from the Son. That seat is for the viewer.</p>
<p>Rublev painted a Trinity you can sit down with. The icon is an invitation.</p>`,
 src:"Rublev, Trinity · the open seat",
 title_pt:"Rublev · Trindade · 4",
 body_pt:`<p>O círculo. Siga as cabeças: Espírito (direita), Filho (centro), Pai (esquerda). As inclinações formam um arco que volta a si. Os três se sentam a uma mesa quadrada cujo lado próximo está aberto — o único lugar desocupado no ícone está diretamente defronte ao Filho. Esse lugar é do espectador.</p>
<p>Rublev pintou uma Trindade com que você pode se sentar. O ícone é um convite.</p>`,
 src_pt:"Rublev, Trindade · o lugar aberto"},

{slug:"i-trinity-5", type:"lectio", f:"I", title:"Rublev · Trinity · 5",
 body:`<p>Last look. The icon is reversed perspective — the lines converge <em>toward</em> the viewer, not away from. The farther into the icon you look, the wider it gets. Byzantine icons are not windows looking into another world; they are windows the other world looks out of, into ours.</p>
<p>Which is why icons are not decorated, kissed, incensed. They are venerated. Not as idols. As portals. Rublev's three angels have been looking out at Orthodox worshippers for 614 years, waiting for them to take the open seat.</p>`,
 src:"Rublev, Trinity · the whole",
 title_pt:"Rublev · Trindade · 5",
 body_pt:`<p>Último olhar. O ícone tem perspectiva invertida — as linhas convergem <em>para</em> o espectador, não para longe dele. Quanto mais fundo você olha no ícone, mais largo ele fica. Ícones bizantinos não são janelas que olham para outro mundo; são janelas pelas quais o outro mundo olha para o nosso.</p>
<p>É por isso que ícones não são decorados, são beijados, são incensados. São venerados. Não como ídolos. Como portais. Os três anjos de Rublev olham para fora, para os fiéis ortodoxos, há 614 anos, à espera de que tomem o lugar aberto.</p>`,
 src_pt:"Rublev, Trindade · o todo"}
];
FOLIOS.push(...IMAGINES_X);

// WAVE 8 — top-up F (+2), O (+8), C (+3) to clear 50 each
const TOPUP = [
// Philosophia +2
{slug:"f-ockham-razor", type:"lectio", f:"F", title:"Ockham's Razor",
 body:`<p>William of Ockham, English Franciscan, c. 1340. The rule, as he actually stated it: <em>entia non sunt multiplicanda praeter necessitatem</em> — entities should not be multiplied beyond necessity.</p>
<p>Not: the simpler theory is more likely true. Not: nature prefers simplicity. Only: do not posit explanatory entities beyond what the data forces. The razor is a procedural humility, not a metaphysical confidence.</p>
<p>Modern scientism sometimes wields the razor as if it ruled out God. It does not. It rules out <em>unnecessary</em> God. Whether God is necessary is the real question, and the razor refuses to answer that one.</p>`,
 src:"William of Ockham, Summa Logicae I.12 (c. 1323)",
 title_pt:"A Navalha de Ockham",
 body_pt:`<p>Guilherme de Ockham, franciscano inglês, c. 1340. A regra, como ele de fato a enunciou: <em>entia non sunt multiplicanda praeter necessitatem</em> — não se devem multiplicar os entes além da necessidade.</p>
<p>Não: a teoria mais simples é mais provavelmente verdadeira. Não: a natureza prefere a simplicidade. Apenas: não postule entidades explicativas além do que os dados obrigam. A navalha é humildade processual, não confiança metafísica.</p>
<p>O cientismo moderno às vezes empunha a navalha como se descartasse Deus. Não descarta. Descarta Deus <em>desnecessário</em>. Se Deus é necessário é a pergunta real, e a navalha se recusa a respondê-la.</p>`,
 src_pt:"Guilherme de Ockham, Summa Logicae I.12 (c. 1323)"},

{slug:"f-tolkien-eucatastrophe", type:"lectio", f:"F", title:"Eucatastrophe",
 body:`<p>Tolkien coined the word in 1947. A <em>eucatastrophe</em> is the sudden joyous turn in a story — not a happy ending that was deserved, but a joy breaking in from outside the story's logic, which the story could not have produced from inside itself. The Resurrection is the archetype.</p>
<p>Tolkien's claim: the longing for eucatastrophe in us is evidence we were made for it. The best fairy-stories touch it in miniature; the Gospel touches it in history. Life does not always deliver it; the longing proves nothing by itself. But the fact that we recognize the shape when we meet it is not nothing.</p>`,
 src:"J. R. R. Tolkien, 'On Fairy-Stories' (1947)",
 title_pt:"Eucatástrofe",
 body_pt:`<p>Tolkien cunhou a palavra em 1947. <em>Eucatástrofe</em> é a súbita virada feliz numa história — não um final feliz merecido, mas uma alegria irrompendo de fora da lógica da história, que a história não poderia ter produzido de dentro de si. A Ressurreição é o arquétipo.</p>
<p>Tese de Tolkien: o anseio por eucatástrofe em nós é evidência de que fomos feitos para ela. As melhores histórias-de-fadas a tocam em miniatura; o Evangelho a toca na história. A vida nem sempre a entrega; o anseio, por si só, nada prova. Mas o fato de reconhecermos a forma quando a encontramos não é nada.</p>`,
 src_pt:"J. R. R. Tolkien, 'On Fairy-Stories' (1947)"},

// Oeconomia +8
{slug:"o-graham-formula", type:"lectio", f:"O", title:"Graham's Formula",
 body:`<p>Benjamin Graham's simplest practical rule, Chapter 14 of <em>The Intelligent Investor</em>: a defensive investor should buy only companies that pass seven filters — adequate size, strong financial condition, earnings stability, dividend record (20 years), earnings growth, moderate P/E (under 15), moderate price-to-book (under 1.5).</p>
<p>The last two filters together imply: P/E × P/B must be under 22.5. Simple. Mechanical. Impossible to game emotionally. In the 2024 S&P 500, about 15 names pass. In 2000 at the dot-com peak, nearly zero did. The number of passing stocks is a cheap barometer of market sanity.</p>`,
 src:"Benjamin Graham, The Intelligent Investor (1949), ch. 14",
 title_pt:"A Fórmula de Graham",
 body_pt:`<p>A regra prática mais simples de Benjamin Graham, cap. 14 de <em>O Investidor Inteligente</em>: um investidor defensivo deve comprar apenas empresas que passem por sete filtros — tamanho adequado, condição financeira sólida, estabilidade de lucros, histórico de dividendos (20 anos), crescimento de lucros, P/L moderado (abaixo de 15), preço/VPA moderado (abaixo de 1,5).</p>
<p>Os dois últimos filtros, juntos, implicam: P/L × P/VPA abaixo de 22,5. Simples. Mecânico. Impossível de manipular emocionalmente. Em 2024, no S&P 500, cerca de 15 nomes passam. Em 2000, no pico das dot-com, quase nenhum passava. O número de ações que passam é um barômetro barato da sanidade do mercado.</p>`,
 src_pt:"Benjamin Graham, O Investidor Inteligente (1949), cap. 14"},

{slug:"o-dalio-template", type:"lectio", f:"O", title:"Dalio · The Debt Cycle",
 body:`<p>Ray Dalio's observation after decades at Bridgewater: economies oscillate on two cycles. The short-term business cycle (5–8 years), driven by central bank rates. The long-term debt cycle (50–75 years), driven by cumulative credit growth that eventually cannot be serviced.</p>
<p>At the end of a long debt cycle, interest rates have already been at zero and the central bank's ammunition is spent. The resolution is one of three: default (deflationary depression), inflation (currency devaluation), or restructuring. The 1930s was option 1; the 1970s was option 2; Japan since 1990 is slow option 3.</p>
<p>Where is the US today, roughly? Late long-term debt cycle. Which option is being chosen? Watch the balance sheet.</p>`,
 src:"Ray Dalio, Principles for Navigating Big Debt Crises (2018)",
 title_pt:"Dalio · O Ciclo da Dívida",
 body_pt:`<p>Observação de Ray Dalio após décadas na Bridgewater: as economias oscilam em dois ciclos. O ciclo de curto prazo (5–8 anos), movido pelos juros do banco central. O ciclo de longo prazo da dívida (50–75 anos), movido pelo crescimento acumulado do crédito que, no fim, não pode ser pago.</p>
<p>No fim de um ciclo longo, os juros já estiveram em zero e a munição do banco central está esgotada. A resolução é uma de três: calote (depressão deflacionária), inflação (desvalorização monetária), ou reestruturação. Os anos 1930 foram a opção 1; os anos 1970, a opção 2; o Japão desde 1990 é a opção 3 em câmera lenta.</p>
<p>Onde estão os EUA hoje, grosso modo? Fim do ciclo longo. Qual opção está sendo escolhida? Observe o balanço do Fed.</p>`,
 src_pt:"Ray Dalio, Princípios para Navegar Grandes Crises de Dívida (2018)"},

{slug:"o-eff-frontier", type:"lectio", f:"O", title:"The Efficient Frontier",
 body:`<p>Harry Markowitz, 1952. For any set of assets with known returns, variances, and correlations, there is a specific line of portfolios that maximize expected return for each level of risk. Portfolios above the line are impossible; portfolios below are inefficient — you could get more return for the same risk by moving up to the line.</p>
<p>The result changed finance. Markowitz got a Nobel for it. The practical corollary: diversification works. Combining uncorrelated assets gives you a portfolio with less risk than any single asset in it, without reducing return. "Don't put all your eggs in one basket" is now not folk wisdom but theorem.</p>`,
 src:"Harry Markowitz, Portfolio Selection, Journal of Finance (1952)",
 title_pt:"A Fronteira Eficiente",
 body_pt:`<p>Harry Markowitz, 1952. Para qualquer conjunto de ativos com retornos, variâncias e correlações conhecidas, existe uma linha específica de carteiras que maximizam o retorno esperado para cada nível de risco. Carteiras acima da linha são impossíveis; abaixo, ineficientes — poder-se-ia obter mais retorno pelo mesmo risco subindo até a linha.</p>
<p>O resultado mudou as finanças. Markowitz ganhou o Nobel por isso. Corolário prático: diversificação funciona. Combinar ativos não correlacionados dá uma carteira com menos risco do que qualquer ativo isolado nela, sem reduzir o retorno. "Não ponha todos os ovos no mesmo cesto" deixou de ser sabedoria popular e virou teorema.</p>`,
 src_pt:"Harry Markowitz, Portfolio Selection, Journal of Finance (1952)"},

{slug:"o-put-call-parity", type:"lectio", f:"O", title:"Put–Call Parity",
 body:`<p>For every stock, every strike, every expiration, the price of a call option plus the present value of the strike equals the price of a put option plus the current stock price. C + K/(1+r)^t = P + S.</p>
<p>This is not approximate. It is enforced by arbitrage: any deviation lets a trader borrow the mispriced side and lock in a riskless profit. The identity is why options markets stay internally consistent despite thousands of participants with different views.</p>
<p>Why you should care even if you never trade an option: put–call parity is the simplest example of an arbitrage identity that holds not because people are smart but because the first smart person to notice fixes it. Most of what you observe in prices is enforced the same way.</p>`,
 src:"CFA Level II · Derivatives",
 title_pt:"Paridade Put–Call",
 body_pt:`<p>Para cada ação, cada strike, cada vencimento, o preço de uma opção de compra mais o valor presente do strike é igual ao preço de uma opção de venda mais o preço corrente da ação. C + K/(1+r)^t = P + S.</p>
<p>Isto não é aproximado. É imposto por arbitragem: qualquer desvio permite ao trader tomar emprestado o lado mal precificado e trancar lucro sem risco. A identidade é por que os mercados de opção se mantêm internamente consistentes apesar de milhares de participantes com visões divergentes.</p>
<p>Por que importar mesmo que você nunca negocie uma opção: a paridade put–call é o exemplo mais simples de uma identidade de arbitragem que vale não porque as pessoas sejam espertas, mas porque a primeira pessoa esperta a notar corrige. A maior parte do que você observa em preços é imposta assim.</p>`,
 src_pt:"CFA Nível II · Derivativos"},

{slug:"o-black-scholes", type:"lectio", f:"O", title:"Black–Scholes · The Model That Broke",
 body:`<p>1973. Fischer Black, Myron Scholes, Robert Merton solve the problem of pricing a European call option. The formula uses five inputs (stock price, strike, risk-free rate, time, volatility) and gives a single number. It assumes continuous trading, no transaction costs, and log-normal returns. Nobel Prize, 1997.</p>
<p>In 1998, Long-Term Capital Management, run partly by Merton and Scholes, blew up spectacularly, losing $4.6 billion when Russia defaulted and the real-world returns were not log-normal. The Federal Reserve organized a bailout. The lesson is not that the model was useless; it is that any model that assumes continuity in a world of jumps will one day get a jump no one priced.</p>`,
 src:"Black & Scholes (1973); Merton (1973); Lowenstein, When Genius Failed (2000)",
 title_pt:"Black–Scholes · O Modelo Que Quebrou",
 body_pt:`<p>1973. Fischer Black, Myron Scholes e Robert Merton resolvem o problema de precificar uma opção de compra europeia. A fórmula usa cinco entradas (preço, strike, taxa livre de risco, tempo, volatilidade) e devolve um único número. Pressupõe negociação contínua, zero custos de transação, retornos log-normais. Prêmio Nobel, 1997.</p>
<p>Em 1998, a Long-Term Capital Management, administrada em parte por Merton e Scholes, explodiu espetacularmente, perdendo US$ 4,6 bilhões quando a Rússia deu calote e os retornos reais não foram log-normais. O Federal Reserve organizou um resgate. A lição não é que o modelo era inútil; é que qualquer modelo que suponha continuidade num mundo de saltos um dia receberá um salto que ninguém precificou.</p>`,
 src_pt:"Black & Scholes (1973); Merton (1973); Lowenstein, When Genius Failed (2000)"},

{slug:"o-value-vs-price", type:"sententia", f:"O", title:"Buffett · Price vs Value",
 body:`<blockquote>Price is what you pay. Value is what you get.</blockquote>
<p>Warren Buffett's seven-word summary of the entire discipline of value investing. Price is a number the market quotes. Value is a judgment the investor forms. The investor who confuses them has already failed.</p>`,
 src:"Warren Buffett, Berkshire Hathaway letters",
 title_pt:"Buffett · Preço vs Valor",
 body_pt:`<blockquote>Preço é o que você paga. Valor é o que você recebe.</blockquote>
<p>O resumo de sete palavras de Warren Buffett para toda a disciplina do investimento em valor. Preço é número cotado pelo mercado. Valor é juízo formado pelo investidor. Quem os confunde já fracassou.</p>`,
 src_pt:"Warren Buffett, cartas da Berkshire Hathaway"},

{slug:"o-first-rule", type:"sententia", f:"O", title:"Buffett · Rule No. 1",
 body:`<blockquote>Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1.</blockquote>
<p>The joke is a serious thesis. Compounding is destroyed by drawdowns asymmetrically: a 50% loss requires a 100% gain to recover. Avoid the big loss; the gains, which are harder to achieve, matter less.</p>`,
 src:"Warren Buffett, interviews passim",
 title_pt:"Buffett · Regra Nº 1",
 body_pt:`<blockquote>Regra Nº 1: Nunca perca dinheiro. Regra Nº 2: Nunca esqueça a Regra Nº 1.</blockquote>
<p>A piada é tese séria. O juros compostos é destruído assimetricamente por quedas: perda de 50% exige ganho de 100% para recuperar. Evite a grande perda; os ganhos, que são mais difíceis, importam menos.</p>`,
 src_pt:"Warren Buffett, entrevistas passim"},

{slug:"o-moat-widening", type:"lectio", f:"O", title:"The Widening Moat",
 body:`<p>Not every moat widens. Some moats narrow with time: newspaper monopolies dissolved by the internet, bank branches dissolved by phones. Some moats are stable: Coca-Cola's brand, railroad right-of-way. Some moats widen: Visa's network effect gets stronger with each new merchant; Google Search gets smarter with each new query.</p>
<p>Buffett's practical refinement: do not just ask "does this business have a moat?" Ask: "ten years from now, is the moat wider or narrower?" The question invites you to think about the second derivative of competitive advantage, which is where most of the money is made or lost.</p>`,
 src:"Warren Buffett, after the moat memo of 1999",
 title_pt:"O Fosso que Alarga",
 body_pt:`<p>Nem todo fosso alarga. Alguns estreitam com o tempo: monopólios de jornal dissolvidos pela internet, agências bancárias dissolvidas pelo celular. Alguns são estáveis: a marca Coca-Cola, o direito de passagem das ferrovias. Alguns alargam: o efeito-rede da Visa fica mais forte a cada novo lojista; o Google Search fica mais inteligente a cada nova busca.</p>
<p>Refinamento prático de Buffett: não pergunte apenas "este negócio tem um fosso?" Pergunte: "daqui a dez anos, o fosso está mais largo ou mais estreito?" A pergunta convida você a pensar na derivada segunda da vantagem competitiva, que é onde a maior parte do dinheiro é ganho ou perdido.</p>`,
 src_pt:"Warren Buffett, após o memorando do fosso de 1999"},

// Perceptio +3
{slug:"c-rhodes-rule", type:"lectio", f:"C", title:"Rhodes · The 10,000 Hour Myth",
 body:`<p>Malcolm Gladwell popularized Anders Ericsson's research as the "10,000 hour rule." Ericsson spent twenty years objecting to Gladwell's version. His actual claim was more careful.</p>
<p>Expertise is not the sum of total hours practiced; it is the result of <em>deliberate practice</em> — practice with a clear goal, immediate feedback, and attention concentrated on the edge of current ability. Routine performance of a skill, however many hours, does not reliably produce expertise. This is why someone can drive for forty years without becoming a better driver, and someone can study chess for three years and become a grandmaster.</p>
<p>The hours matter. Deliberation matters more. Count the hours of deliberate practice, not the hours of doing.</p>`,
 src:"K. Anders Ericsson, Peak (2016); Gladwell, Outliers (2008)",
 title_pt:"Rhodes · O Mito das 10.000 Horas",
 body_pt:`<p>Malcolm Gladwell popularizou a pesquisa de Anders Ericsson como a "regra das 10.000 horas". Ericsson passou vinte anos refutando a versão de Gladwell. Sua tese real era mais cuidadosa.</p>
<p>A expertise não é a soma total das horas praticadas; é o resultado da <em>prática deliberada</em> — prática com meta clara, retorno imediato e atenção concentrada no limiar da habilidade atual. O desempenho rotineiro de uma habilidade, por mais horas, não produz expertise com confiabilidade. É por isso que alguém pode dirigir por quarenta anos sem melhorar como motorista, e alguém pode estudar xadrez por três anos e virar grande-mestre.</p>
<p>As horas importam. A deliberação importa mais. Conte as horas de prática deliberada, não as horas de execução.</p>`,
 src_pt:"K. Anders Ericsson, Peak (2016); Gladwell, Outliers (2008)"},

{slug:"c-newport-focus", type:"lectio", f:"C", title:"Newport · The Shallow Trap",
 body:`<p>Cal Newport's second thesis in <em>Deep Work</em>: the modern knowledge-economy job rewards shallow work — the kind an interrupted mind can still do: emails, Slack, status meetings, slide formatting. The deep work that creates actual value is unrewarded on the day it is done, invisible on the daily dashboard, and quietly starved to death by every well-meaning calendar.</p>
<p>Which produces a paradox. The people with the most important jobs often spend their days unable to do them. The way out is not more hours; it is the ruthless defense of a few hours a week in which the shallow is refused. The career differential between those who do this and those who do not, compounded over a decade, is the career.</p>`,
 src:"Cal Newport, Deep Work (2016)",
 title_pt:"Newport · A Armadilha do Raso",
 body_pt:`<p>A segunda tese de Cal Newport em <em>Deep Work</em>: o emprego moderno na economia do conhecimento premia o trabalho raso — aquele que uma mente interrompida ainda consegue fazer: e-mails, Slack, reuniões de status, formatação de slide. O trabalho profundo que cria valor real é não recompensado no dia em que é feito, invisível no painel diário, e silenciosamente deixado morrer de inanição por toda agenda bem-intencionada.</p>
<p>O que produz um paradoxo. As pessoas com os cargos mais importantes passam, muitas vezes, o dia sem conseguir fazê-los. A saída não é mais horas; é a defesa impiedosa de algumas horas por semana em que o raso é recusado. O diferencial de carreira entre quem faz isto e quem não faz, composto por uma década, é a carreira.</p>`,
 src_pt:"Cal Newport, Deep Work (2016)"},

{slug:"c-doyle-impossible", type:"sententia", f:"C", title:"Doyle · The Impossible",
 body:`<blockquote>When you have eliminated the impossible, whatever remains, however improbable, must be the truth.<br>— The Sign of the Four (1890)</blockquote>
<p>The Holmesian method in one sentence. Not: find the probable explanation. First: find the explanations that cannot be true, and discard them. What survives, no matter how strange, deserves the attention.</p>`,
 src:"Arthur Conan Doyle, The Sign of the Four (1890)",
 title_pt:"Doyle · O Impossível",
 body_pt:`<blockquote>Quando você eliminou o impossível, o que sobra, por mais improvável que seja, deve ser a verdade.<br>— O Signo dos Quatro (1890)</blockquote>
<p>O método de Holmes em uma frase. Não: ache a explicação provável. Primeiro: ache as explicações que não podem ser verdadeiras, e descarte-as. O que sobrevive, por mais estranho, merece a atenção.</p>`,
 src_pt:"Arthur Conan Doyle, O Signo dos Quatro (1890)"}
];
FOLIOS.push(...TOPUP);

const PULCHRUM_X2 = [
{slug:"p-dante-paradiso", type:"lectio", f:"P", title:"Dante · The Last Canto",
 body:`<p>Dante has climbed through hell, up the mountain of purgatory, and through the nine spheres of heaven. In the last canto of the <em>Paradiso</em>, he sees the Beatific Vision — God — and tries to describe it. He fails. He says he fails. The failure is the point: no human art can hold the sight.</p>
<p>But he writes the final tercet anyway. Three lines in which a man who has just confessed inadequacy still delivers the summary sentence of medieval metaphysics: <em>l'amor che move il sole e l'altre stelle</em>. The sun and the stars moved by love. If poetry has a ceiling, Dante is still touching it as he says it does not exist.</p>`,
 src:"Dante Alighieri, Paradiso XXXIII (1320)",
 title_pt:"Dante · O Último Canto",
 body_pt:`<p>Dante atravessou o inferno, subiu o monte do purgatório e passou pelas nove esferas do céu. No último canto do <em>Paraíso</em>, vê a Visão Beatífica — Deus — e tenta descrevê-la. Fracassa. Diz que fracassa. O fracasso é o ponto: nenhuma arte humana sustenta a visão.</p>
<p>Mas ele escreve o terceto final mesmo assim. Três versos nos quais um homem que acabou de confessar insuficiência ainda entrega a frase-síntese da metafísica medieval: <em>l'amor che move il sole e l'altre stelle</em>. O sol e as estrelas movidos pelo amor. Se a poesia tem teto, Dante ainda o toca enquanto diz que ele não existe.</p>`,
 src_pt:"Dante Alighieri, Paraíso XXXIII (1320)"},

{slug:"p-shakespeare-sonnet", type:"lectio", f:"P", title:"Shakespeare · Sonnet 73",
 body:`<p>Four hundred years ago an English playwright wrote fourteen lines addressed to a young man, comparing his aging self to late autumn, to a dying fire, to a sunset. The last couplet: <em>This thou perceiv'st, which makes thy love more strong, / To love that well which thou must leave ere long.</em></p>
<p>Scruton on Shakespeare: no poet before or since has made the mortality of love the subject that elevates love rather than threatens it. The sonnet does not promise permanence. It gives mortality back as the condition under which love matters at all.</p>`,
 src:"William Shakespeare, Sonnet 73 (c. 1600)",
 title_pt:"Shakespeare · Soneto 73",
 body_pt:`<p>Há quatrocentos anos, um dramaturgo inglês escreveu catorze versos endereçados a um jovem, comparando o próprio envelhecimento a um outono tardio, a um fogo que se apaga, a um pôr-do-sol. O dístico final: <em>Isto percebes, o que teu amor fortalece, / A bem amar o que em breve hás de perder.</em></p>
<p>Scruton sobre Shakespeare: nenhum poeta, antes ou depois, fez da mortalidade do amor o tema que eleva o amor, em vez de ameaçá-lo. O soneto não promete permanência. Devolve a mortalidade como a condição sob a qual o amor importa, afinal.</p>`,
 src_pt:"William Shakespeare, Soneto 73 (c. 1600)"}
];
FOLIOS.push(...PULCHRUM_X2);
if (typeof module !== "undefined") module.exports = {FAC, FOLIOS, AXIOM_POOL, IMG, YT};
