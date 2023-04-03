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
