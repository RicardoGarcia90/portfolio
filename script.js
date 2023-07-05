'use strict';

// Make mobile navigation work

const btnMobileNav = document.querySelector('.btn-mobile-nav');
const menuNave = document.querySelector('.menu__nav');

window.addEventListener('click', function (event) {
  const clicadoNoBotao = event.target;
  // console.log(clicadoNoBotao);
  //

  if (clicadoNoBotao.classList.contains('icon-mobile-nav')) {
    console.log('clicou no botão');
    menuNave.classList.toggle('menuNav--visible');
  } else {
    console.log('clicou fora do botão');
    menuNave.classList.remove('menuNav--visible');
  }
});
//////////////////////////////////////////////////////////
// SCROLL PARA AS SEÇÕES

const menuItems = document.querySelectorAll('.menu__nav a');

menuItems.forEach(item => {
  item.addEventListener('click', scrolToIdOnClick);
});

function scrolToIdOnClick(event) {
  event.preventDefault();

  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 110,
    behavior: 'smooth',
  });
}
////////////////////////////////////////////////////////
// SOMBRA NO HEADER QUANDO SCROLL

const header = document.querySelector('.header');

function activeShadow() {
  header.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', activeShadow);
///////////////////////////////////////////////////////
// TAB PROJETOS
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  console.log(clicked);

  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////////////////////
// MODAL

const linkMaisAppClima = document.querySelector('.verMaisAppClima');
const linkMaisLoteria = document.querySelector('.verMaisLoteria');
const linkMaisForkify = document.querySelector('.verMaisForkify');
const linkMaisMapty = document.querySelector('.verMaisMapty');
const linkMaisBankist = document.querySelector('.verMaisBankist');
const linkMaisOmnifood = document.querySelector('.verMaisOmnifood');
const linkMaisAndroid = document.querySelector('.verMaisAndroid');
const linkMaisJogoDado = document.querySelector('.verMaisJogoDado');
const linkMaisAdivinharNumero = document.querySelector(
  '.verMaisAdivinharNumero'
);

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const titleModal = document.querySelector('.titleModal');
const descriptionModal = document.querySelector('.descriptionModal');

const btnCloseModal = document.querySelector('.close-modal');

var link = document.createElement('a');
link.textContent = 'Visitar Site';
link.target = '_blank';

// APP CLIMA- MODAL
linkMaisAppClima.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // LOTERIA - DESCRICAO MODAL
  titleModal.textContent = 'E esse clima?';
  descriptionModal.textContent =
    'Aplicativo que exibe o clima da sua cidade. Basta digitar o nome de uma cidade e obterá informações sobre temperatura, umidade, velocidade do vento e condições climáticas atuais. Essa aplicação foi desenvolvida utilizando requisições Fetch na API da OpenWeather';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://aplicacao-clima.netlify.app/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-clima2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// LOTERIA - MODAL
linkMaisLoteria.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // LOTERIA - DESCRICAO MODAL
  titleModal.textContent = 'Loteria';
  descriptionModal.textContent =
    "App que gera números aleatórios para serem apostados na loteria, você encontrará 3 jogos nesse App: 'Mega-Sena', 'Lotofácil', 'Lotomania'";

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://loterias.netlify.app/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-loteria2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// FORKIFY
linkMaisForkify.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Forkify';
  descriptionModal.textContent =
    'App para pesquisar receitas, nesse app criado como projeto final do curso de JavaScript é possível pesquisar novas receitas, além de adicionar e editar as suas próprias.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://forkify-ricardogarcia.netlify.app/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-forkify2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// MAPTY
linkMaisMapty.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Mapty';
  descriptionModal.textContent =
    'App de registro de atividade física, nesse projeto é possível adicionar distância percorrida, tempo e tipo de atividade. Esse projeto foi realizado durante curso de JavaScript já concluído.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://ricardogarcia90.github.io/Mapty/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-mapty2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// BANKIST
linkMaisBankist.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Bankist';
  descriptionModal.textContent =
    'Projeto criado durante curso de JavaScript, este projeto simula um banco digital, nele é possível simular transferências e empréstimos. Para realizar login no site veja o README no GitHub clicando em "Ver Código".';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://ricardogarcia90.github.io/bankist/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-bankist2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// OMNIFOOD
linkMaisOmnifood.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Omnifood';
  descriptionModal.textContent =
    'Projeto criado simulando uma empresa de Delivery que vende planos de refeiçoes saudáveis. Nesse projeto o principal objetivo foi a prática de técnicas e ferramentas utilizadas durante o curso realizado, como: HTML, CSS e JavaScript.';
});

// ANDROID
linkMaisAndroid.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Projeto Android';
  descriptionModal.textContent =
    'Landing page criada como projeto final do primeiro curso realizado de HTML e CSS. Nesse projeto foram utilizados os primeiros aprendizados das ferrmantas de desenvolvimento Front-End.';
});

// JOGO DO DADO
linkMaisJogoDado.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Jogo do Dado';
  descriptionModal.textContent =
    'Jogo onde quem alcançar a maior pontuação primeiro vence. Esse jogo foi desenvolvido durante curso realizado de JavaScript, o jogo é bem simples, cada jogador rola o dado, sendo o valor diferente de 1 o jogador acumula os pontos, se o valor for 1 a jogada passa para o próximo jogador e você perde os pontos acumulados. Para saber mais detalhes leia o README no GitHub clicando em "Ver Código".';
});

// JOGO ADIVINHAR NUMERO
linkMaisAdivinharNumero.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Jogo de Adivinhar o númrero sorteado';
  descriptionModal.textContent =
    'Jogo simples de adivinhação de números. É gerado um número aleatório entre 1 e 20, o usuário digita qual o número ele acha que foi gerado, a cada erro os pontos vão diminuindo até que o chute seja correto.';
});

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});

////////////////////////////////////////////////////////
// LANGUAGE

const languageEN = {
  inicio: 'Start',
  sobre: 'About',
  ferramentas: 'Tools',
  projetos: 'Projects',
  contato: 'Contact',
};

const languagePT = {
  start: 'Início',
  about: 'Sobre',
  tools: 'Ferramentas',
  projects: 'Projetos',
  contact: 'Contato',
};
const iconUSA = document.querySelector('.usaFlag');
const iconBR = document.querySelector('.brFlag');

// NAV elements
const inicioLink = document.getElementById('inicioPT');
const sobreLink = document.getElementById('sobrePT');
const ferramentasLink = document.getElementById('ferramentasPT');
const projetosLink = document.getElementById('projetosPT');
const contatoLink = document.getElementById('contatoPT');

// HERO elements
const textHero = document.querySelector('.textHero');

// ABOUT ME elements
const titleSectionAboutMe = document.querySelector('.titleAboutMe');
const titleTextAboutMe = document.querySelector('.titleTextAboutMe');
const textAboutMe = document.querySelector('.textAboutMe_paragraphy');

// TOOLS elements
const titleTools = document.querySelector('.tools');

// PROJECTS elements
const titleProjects = document.querySelector('.projectsTitle');
const appDesktop = document.getElementById('appWeb');
const sites = document.getElementById('sites');
const games = document.getElementById('games');

const appClimaSubtitle = document.getElementById('appClima-p');
const loteriaSubtitle = document.getElementById('loteria-p');
const forkifySubtitle = document.getElementById('forkify-p');
const maptySubtitle = document.getElementById('mapty_p');
const bankistSubtitle = document.getElementById('bankist_p');
const omnifoodSubtitle = document.getElementById('omnifood_p');
const androidTitle = document.getElementById('android_h3');
const androidSubtitle = document.getElementById('android_p');
const emBreveTitle = document.getElementById('emBreve_h3');
const emBreveSubtitle = document.getElementById('emBreve_p');
const jogoDadoTitle = document.getElementById('jogoDado_h3');
const jogoDadoSubtitle = document.getElementById('jogoDado_p');
const adivNumeroTitle = document.getElementById('adivNumero_h3');
const adivNumeroSubtitle = document.getElementById('adivNumero_p');

const visitarSite = document.querySelectorAll('.visitarSite');
const verCodigo = document.querySelectorAll('.verCodigo');
const saberMais = document.querySelectorAll('.saberMais');

// CTA elements
const ctaTitle = document.getElementById('ctaTitle_h3');
const ctaLabelNome = document.getElementById('labelNome');

const ctaLabelMensagem = document.getElementById('labelMensagem');
const ctaButtonEnviar = document.getElementById('ctaButtonEnviar');

// --- ENGLISH --- //
iconUSA.addEventListener('click', function () {
  // NAV change language for EN
  inicioLink.textContent = languageEN.inicio;
  sobreLink.textContent = languageEN.sobre;
  ferramentasLink.textContent = languageEN.ferramentas;
  projetosLink.textContent = languageEN.projetos;
  contatoLink.textContent = languageEN.contato;
  titleTools.textContent = languageEN.ferramentas;
  titleProjects.textContent = languageEN.projetos;

  // HERO change language for EN
  textHero.innerHTML = `
  <h1 id="titleHeroPT_h1" class="titleHero">Hello!<span id="titleHeroPT_span" class="colorSpan"> Welcome</span> to my portfolio!
  </h1>
  <br />
  <p class="paragrafoHero">
  My name is Ricardo and here you will find not only my projects, but also my journey of growth as a developer.<br />Feel free to explore and get to know a little more about me and my skills. Thanks for the visit!
  </p>`;

  // ABOUT ME change language for EN
  titleSectionAboutMe.textContent = languageEN.sobre;
  titleTextAboutMe.textContent =
    'I am passionate about technology and the ability it offers us to create and innovate.';
  textAboutMe.textContent =
    'Although I have worked in other areas, it was in technology that I found my true professional passion, building websites and applications using technologies such as Javascript, React.js, HTML and CSS/Sass. Currently, I dedicate my time to improving my knowledge in development, putting them into practice and challenging myself in new projects. In my spare time I like to play the guitar, play with my dog and walk in the park with my family.';

  // PROJECTS change language for EN
  appDesktop.textContent = 'Web Applications';
  sites.textContent = 'Websites';
  games.textContent = 'Games';

  appClimaSubtitle.textContent = 'App that shows the weather of your city';
  loteriaSubtitle.textContent =
    'App that generates random numbers for Lottery games';
  forkifySubtitle.textContent = 'Recipe search app';
  maptySubtitle.textContent = 'App for recording physical activity';
  bankistSubtitle.textContent = 'App that simulates a digital bank';
  omnifoodSubtitle.textContent =
    'Landing page simulating a healthy food company';
  androidTitle.textContent = 'Android Project';
  androidSubtitle.textContent =
    'Landing page about that tells the story of Android';

  jogoDadoTitle.textContent = 'Pig (dice game)';
  jogoDadoSubtitle.textContent =
    'Throw the dice and collect points to be a winner';
  adivNumeroTitle.textContent = 'Guessing game';
  adivNumeroSubtitle.textContent = 'Guess which number was drawn';

  visitarSite.forEach(text => (text.textContent = 'Visit Website'));
  verCodigo.forEach(text => (text.textContent = 'View Code'));
  saberMais.forEach(text => (text.textContent = 'Read More'));

  // APP CLIMA MODAL ENGLISH
  linkMaisAppClima.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'E esse clima?';
    descriptionModal.textContent =
      'An app that displays the weather of your city. Enter the name of a city and receive information about temperature, humidity, wind speed, and current weather conditions. This app was developed using Fetch requests to the OpenWeather API.';

    link.textContent = 'Visit Website';
  });

  // LOTERIA MODAL ENGLISH
  linkMaisLoteria.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Loteria';
    descriptionModal.textContent =
      "An app that generates random numbers to be bet on the lottery, you will find 3 games in this app: 'Mega-Sena', 'Lotofácil', 'Lotomania'.";

    link.textContent = 'Visit Website';
  });

  // FORKIFY MODAL ENGLISH
  linkMaisForkify.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Forkify';
    descriptionModal.textContent =
      'An app to search for recipes. This app was created as a final project for the JavaScript course. It allows you to search for new recipes and also to add and edit your own recipes.';

    link.textContent = 'Visit Website';
  });

  // MAPTY
  linkMaisMapty.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Mapty';
    descriptionModal.textContent =
      'An app for recording physical activity. In this project, it is possible to add the distance covered, time, and type of activity. This project was completed during a JavaScript course.';

    link.textContent = 'Visit Website';
  });

  // BANKIST
  linkMaisBankist.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Bankist';
    descriptionModal.textContent =
      'A project created during a JavaScript course. This project simulates a digital bank where it is possible to simulate transfers and loans. To log in to the site, please see the README on GitHub by clicking on "View Code".';

    link.textContent = 'Visit Website';
  });

  // OMNIFOOD
  linkMaisOmnifood.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Omnifood';
    descriptionModal.textContent =
      'A project was created to simulate a delivery company that sells healthy meal plans. The main objective of this project was to practice the techniques and tools used during the course, such as HTML, CSS, and JavaScript.';

    link.textContent = 'Visit Website';
  });

  // ANDROID
  linkMaisAndroid.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Android Project';
    descriptionModal.textContent =
      'A landing page was created as a final project for the first HTML and CSS course. This project utilized the initial learnings of Front-End development tools.';

    link.textContent = 'Visit Website';
  });

  // JOGO DO DADO
  linkMaisJogoDado.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Pig (dice game)';
    descriptionModal.textContent =
      'A game where the first person to reach the highest score wins. This game was developed during a JavaScript course. The game is very simple: each player rolls the dice, and if the value is different from 1, the player accumulates points. If the value is 1, the turn goes to the next player, and the accumulated points are lost. For more details, please read the README on GitHub by clicking on "View Code".';

    link.textContent = 'Visit Website';
  });

  // JOGO ADIVINHAR NUMERO
  linkMaisAdivinharNumero.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Guessing game';
    descriptionModal.textContent =
      'A simple number guessing game is played by generating a random number between 1 and 20. The user types in a number they think was generated, and with each incorrect guess, the points decrease until the correct answer is given.';

    link.textContent = 'Visit Website';
  });

  // CTA change language for EN
  ctaTitle.textContent = 'Contact';
  ctaLabelNome.textContent = 'Name';
  ctaLabelMensagem.textContent = 'Write your message!';
  ctaButtonEnviar.textContent = 'Send';
});

// ------------------ //
// --- PORTUGUESE --- //
iconBR.addEventListener('click', function () {
  // NAV change language for PT
  inicioLink.textContent = languagePT.start;
  sobreLink.textContent = languagePT.about;
  ferramentasLink.textContent = languagePT.tools;
  projetosLink.textContent = languagePT.projects;
  contatoLink.textContent = languagePT.contact;
  titleTools.textContent = languagePT.tools;
  titleProjects.textContent = languagePT.projects;

  // HERO change language for PT
  textHero.innerHTML = `
  <h1 id="titleHeroPT_h1" class="titleHero">
  <span id="titleHeroPT_span" class="colorSpan">Olá!</span>
  seja muito
  <span id="titleHeroPT_span" class="colorSpan">bem vindo</span>
  ao meu portifólio!
  </h1>
  <br />
  <p class="paragrafoHero">
  Meu nome é Ricardo e aqui você encontrará não apenas os meus
            projetos, mas também a minha jornada de crescimento como
            desenvolvedor.<br />Sinta-se à vontade para explorar e conhecer um
            pouco mais sobre mim e minhas habilidades. Obrigado pela visita!
  </p>`;

  // ABOUT ME change language for PT
  titleSectionAboutMe.textContent = languagePT.about;
  titleTextAboutMe.textContent =
    'Sou apaixonado por tecnologia e pela capacidade que ela nos oferece de criar e inovar.';
  textAboutMe.textContent =
    'Embora tenha trabalhado em outras áreas, foi na tecnologia que encontrei minha verdadeira paixão profissional, construindo sites e aplicações utilizando tecnologias como Javascript, React.js, HTML e CSS/Sass. Atualmente, dedico meu tempo a aprimorar meus conhecimentos em desenvolvimento, colocando-os em prática e me desafiando em novos projetos. Nas horas vagas, gosto de tocar guitarra, brincar com meu cachorro e caminhar no parque com minha família.';

  // PROJECTS change language for PT
  appDesktop.textContent = 'Aplicações Web';
  sites.textContent = 'Sites';
  games.textContent = 'Jogos';

  appClimaSubtitle.textContent = 'App que mostra o clima de sua cidade';
  loteriaSubtitle.textContent =
    'App que gera números aleatórios para jogos de Loteria';
  forkifySubtitle.textContent = 'App para busca de receitas';
  maptySubtitle.textContent = 'App para registro de atividade física';
  bankistSubtitle.textContent = 'App que simula um banco digital';
  omnifoodSubtitle.textContent =
    'Landing page simulando uma empresa de comidas saudáveis';
  androidSubtitle.textContent =
    'Landing page sobre que conta a história do Android';

  jogoDadoTitle.textContent = 'Jogo do Dado';
  jogoDadoSubtitle.textContent =
    'Jogue os dados e acumule pontos para ser um vencedor';
  adivNumeroTitle.textContent = 'Jogo de adivinhação';
  adivNumeroSubtitle.textContent = 'Adivinhe qual número foi sorteado';

  visitarSite.forEach(text => (text.textContent = 'Visitar Site'));
  verCodigo.forEach(text => (text.textContent = 'Ver Código'));
  saberMais.forEach(text => (text.textContent = 'Saber Mais'));

  // APP CLIMA MODAL PORTUGUESE
  linkMaisAppClima.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'E esse clima?';
    descriptionModal.textContent =
      'Aplicativo que exibe o clima da sua cidade. Basta digitar o nome de uma cidade e obterá informações sobre temperatura, umidade, velocidade do vento e condições climáticas atuais. Essa aplicação foi desenvolvida utilizando requisições Fetch na API da OpenWeather';

    link.textContent = 'Visitar Site';
  });

  // LOTERIA MODAL PORTUGUESE
  linkMaisLoteria.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Loteria';
    descriptionModal.textContent =
      "App que gera números aleatórios para serem apostados na loteria, você encontrará 3 jogos nesse App: 'Mega-Sena', 'Lotofácil', 'Lotomania'";

    link.textContent = 'Visitar Site';
  });

  // FORKIFY MODAL PORTUGUESE
  linkMaisForkify.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Forkify';
    descriptionModal.textContent =
      'App para pesquisar receitas, nesse app criado como projeto final do curso de JavaScript é possível pesquisar novas receitas, além de adicionar e editar as suas próprias.';

    link.textContent = 'Visitar Site';
  });

  // MAPTY MODAL PORTUGUESE
  linkMaisMapty.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Mapty';
    descriptionModal.textContent =
      'App de registro de atividade física, nesse projeto é possível adicionar distância percorrida, tempo e tipo de atividade. Esse projeto foi realizado durante curso de JavaScript já concluído.';

    link.textContent = 'Visitar Site';
  });

  // BANKIST MODAL PORTUGUESE
  linkMaisBankist.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Bankist';
    descriptionModal.textContent =
      'Projeto criado durante curso de JavaScript, este projeto simula um banco digital, nele é possível simular transferências e empréstimos. Para realizar login no site veja o README no GitHub clicando em "Ver Código".';

    link.textContent = 'Visitar Site';
  });

  // OMNIFOOD MODAL PORTUGUESE
  linkMaisOmnifood.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Omnifood';
    descriptionModal.textContent =
      'Projeto criado simulando uma empresa de Delivery que vende planos de refeiçoes saudáveis. Nesse projeto o principal objetivo foi a prática de técnicas e ferramentas utilizadas durante o curso realizado, como: HTML, CSS e JavaScript.';

    link.textContent = 'Visitar Site';
  });

  // ANDROID MODAL PORTUGUESE
  linkMaisAndroid.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Projeto Android';
    descriptionModal.textContent =
      'Landing page criada como projeto final do primeiro curso realizado de HTML e CSS. Nesse projeto foram utilizados os primeiros aprendizados das ferrmantas de desenvolvimento Front-End.';

    link.textContent = 'Visitar Site';
  });

  // JOGO DO DADO MODAL PORTUGUESE
  linkMaisJogoDado.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Jogo do Dado';
    descriptionModal.textContent =
      'Jogo onde quem alcançar a maior pontuação primeiro vence. Esse jogo foi desenvolvido durante curso realizado de JavaScript, o jogo é bem simples, cada jogador rola o dado, sendo o valor diferente de 1 o jogador acumula os pontos, se o valor for 1 a jogada passa para o próximo jogador e você perde os pontos acumulados. Para saber mais detalhes leia o README no GitHub clicando em "Ver Código".';

    link.textContent = 'Visitar Site';
  });

  // JOGO ADIVINHAR NUMERO MODAL PORTUGUESE
  linkMaisAdivinharNumero.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Jogo de Adivinhar o númrero sorteado';
    descriptionModal.textContent =
      'Jogo simples de adivinhação de números. É gerado um número aleatório entre 1 e 20, o usuário digita qual o número ele acha que foi gerado, a cada erro os pontos vão diminuindo até que o chute seja correto.';

    link.textContent = 'Visitar Site';
  });

  // CTA change language for PT
  ctaTitle.textContent = 'Entre em contato';
  ctaLabelNome.textContent = 'Nome';
  ctaLabelMensagem.textContent = 'Deixe sua mensagem!';
  ctaButtonEnviar.textContent = 'Enviar';
});
