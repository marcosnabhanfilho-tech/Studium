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
 ytId:YT.peterson_resp.id, ytShort:true, src:"Jordan B. Peterson"},

{slug:"video-peterson-adv", type:"visio", f:"F", title:"Responsibility is Adventure",
 body:"Peterson on why 'be a good person' doesn't move you but 'bear the heaviest thing you can' does. With Rogan.",
 ytId:YT.peterson_adv.id, ytShort:true, src:"Jordan B. Peterson"},

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

if (typeof module !== "undefined") module.exports = {FAC, FOLIOS, AXIOM_POOL, IMG, YT};
