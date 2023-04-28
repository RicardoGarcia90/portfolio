'use strict';

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

// FORKIFY
linkMaisForkify.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Forkify';
  descriptionModal.textContent =
    'App para pesquisar receitas, nesse app criado como projeto final do curso de JavaScript é possível pesquisar novas receitas, além de adicionar e editar as suas próprias.';
});

// MAPTY
linkMaisMapty.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Mapty';
  descriptionModal.textContent =
    'App de registro de atividade física, nesse projeto é possível adicionar distância percorrida, tempo e tipo de atividade. Esse projeto foi realizado durante curso de JavaScript já concluído.';
});

// BANKIST
linkMaisBankist.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Bankist';
  descriptionModal.textContent =
    'Projeto criado durante curso de JavaScript, este projeto simula um banco digital, nele é possível simular transferências e empréstimos. Para realizar login no site veja o README no GitHub clicando em "Ver Código".';
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
const mobileApps = document.getElementById('mobileApp');
const games = document.getElementById('games');

const forkifySubtitle = document.getElementById('forkify-p');
const maptySubtitle = document.getElementById('mapty_p');
const bankistSubtitle = document.getElementById('bankist_p');
const omnifoodSubtitle = document.getElementById('omnifood_p');

const visitarSite = document.querySelectorAll('.visitarSite');
const verCodigo = document.querySelectorAll('.verCodigo');
const saberMais = document.querySelectorAll('.saberMais');

console.log(visitarSite);

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
  My name is Ricardo and here you will find not only my projects, but also my journey of growth as a developer. Feel free to explore and get to know a little more about me and my skills. Thanks for the visit!
  </p>`;

  // ABOUT ME change language for EN
  titleSectionAboutMe.textContent = languageEN.sobre;
  titleTextAboutMe.textContent =
    'I am passionate about technology and the ability it offers us to create and innovate.';
  textAboutMe.textContent =
    'Although I have worked in other areas, it was in technology that I found my true professional passion, building websites and applications using technologies such as Javascript, React.js, HTML and CSS/Sass. Currently, I dedicate my time to improving my knowledge in development, putting them into practice and challenging myself in new projects. In my spare time I like to play the guitar, play with my dog and walk in the park with my family.';

  // PROJECTS change language for EN
  appDesktop.textContent = 'Web Apps';
  sites.textContent = 'Websites';
  mobileApps.textContent = 'Mobile Apps';
  games.textContent = 'Games';

  forkifySubtitle.textContent = 'Recipe search app';
  maptySubtitle.textContent = 'App for recording physical activity';
  bankistSubtitle.textContent = 'App that simulates a digital bank';
  omnifoodSubtitle.textContent =
    'Landing page simulating a healthy food company';

  visitarSite.forEach(text => (text.textContent = 'Visit Website'));
  verCodigo.forEach(text => (text.textContent = 'View Code'));
  saberMais.forEach(text => (text.textContent = 'Read More'));
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
  desenvolvedor. Sinta-se à vontade para explorar e conhecer um pouco
  mais sobre mim e minhas habilidades. Obrigado pela visita!
  </p>`;

  // ABOUT ME change language for PT
  titleSectionAboutMe.textContent = languagePT.about;
  titleTextAboutMe.textContent =
    'Sou apaixonado por tecnologia e pela capacidade que ela nos oferece de criar e inovar.';
  textAboutMe.textContent =
    'Embora tenha trabalhado em outras áreas, foi na tecnologia que encontrei minha verdadeira paixão profissional, construindo sites e aplicações utilizando tecnologias como Javascript, React.js, HTML e CSS/Sass. Atualmente, dedico meu tempo a aprimorar meus conhecimentos em desenvolvimento, colocando-os em prática e me desafiando em novos projetos. Nas horas vagas, gosto de tocar guitarra, brincar com meu cachorro e caminhar no parque com minha família.';

  // PROJECTS change language for PT
  appDesktop.textContent = 'Aplicativos Web';
  sites.textContent = 'Sites';
  mobileApps.textContent = 'Aplicativos Mobile';
  games.textContent = 'Jogos';

  forkifySubtitle.textContent = 'App para busca de receitas';
  maptySubtitle.textContent = 'App para registro de atividade física';
  bankistSubtitle.textContent = 'App que simula um banco digital';
  omnifoodSubtitle.textContent =
    'Landing page simulando uma empresa de comidas saudáveis';

  visitarSite.forEach(text => (text.textContent = 'Visitar Site'));
  verCodigo.forEach(text => (text.textContent = 'Ver Código'));
  saberMais.forEach(text => (text.textContent = 'Saber Mais'));
});
