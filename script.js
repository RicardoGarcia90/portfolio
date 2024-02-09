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

const linkMaisOrangePortfolio = document.querySelector(
  '.verMaisOrangePortfolio'
);
const linkMaisCalculadora = document.querySelector('.verMaisCalculadora');
const linkMais321Buy = document.querySelector('.verMais321Buy');
const linkMaisChezBistro = document.querySelector('.verMaisChezBistro');
const linkMaisStyleVista = document.querySelector('.verMaisStyleVista');
const linkMaisInfoSphere = document.querySelector('.verMaisInfoSphere');
const linkMaisTrilhandoRiquezas = document.querySelector(
  '.verMaisTrilhandoRiquezas'
);
const linkMaisTaskPlanner = document.querySelector('.verMaisTaskPlanner');
const linkMaisMoveMaster = document.querySelector('.verMaisMoveMaster');
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

// ORANGE PORTFOLIO - MODAL
linkMaisOrangePortfolio.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // ORANGE PORTFOLIO - DESCRICAO MODAL
  titleModal.textContent = 'Orange Portfolio';
  descriptionModal.textContent =
    'Este projeto foi desenvolvido em um hackathon, cujo objetivo era criar uma aplicação navegável e responsiva denominada Orange Portfólio, a qual permite aos usuários cadastrar e exibir projetos desenvolvidos.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://orange-portfolio-squad-6.vercel.app/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-orangePortfolio2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// CALCULADORA - MODAL
linkMaisCalculadora.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // CALCULADORA - DESCRICAO MODAL
  titleModal.textContent = 'Calculadora';
  descriptionModal.textContent =
    'Calculadora criada com foco em praticar o gerenciamento de estados e componentes mais estruturados, que necessitam de várias transições diferentes. Este projeto foi desenvolvido usando React e CSS, com ênfase na utilização do hook useReducer.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://ricardo-calculadora.netlify.app/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-calculadora2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// TASKPLANNER - MODAL
linkMaisTaskPlanner.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // TASKPLANNER - DESCRICAO MODAL
  titleModal.textContent = 'TaskPlanner';
  descriptionModal.textContent =
    'Aplicativo em que você pode gerenciar suas atividades diárias, adicionando, concluindo, editando e excluindo tarefas.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://taskplannerlist.netlify.app/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-taskPlanner2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// APP CLIMA- MODAL
linkMaisAppClima.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // APP CLIMA - DESCRICAO MODAL
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
    "Este aplicativo gera números aleatórios para serem utilizados em apostas na loteria. No aplicativo, você encontrará três jogos: 'Mega-Sena', 'Lotofácil' e 'Lotomania'.";

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

// FORKIFY - MODAL
linkMaisForkify.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Forkify';
  descriptionModal.textContent =
    'Este aplicativo permite pesquisar receitas. Criado como projeto final do curso de JavaScript, nele é possível buscar novas receitas, além de adicionar e editar as suas próprias.';

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

// MAPTY - MODAL
linkMaisMapty.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Mapty';
  descriptionModal.textContent =
    'Este aplicativo permite que você registre os dados de uma atividade física realizada. Ao clicar no mapa, sua localização será habilitada, e um formulário aparecerá para você registrar informações como: distância percorrida, tempo de duração da atividade e tipo de atividade realizada.';

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

// BANKIST - MODAL
linkMaisBankist.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Bankist';
  descriptionModal.textContent =
    'Este projeto foi criado durante um curso de JavaScript e tem como objetivo simular um banco digital. Nele, é possível realizar transferências e empréstimos. Para fazer login, preencha os campos da seguinte forma: (usuário: js, senha: 1111) ou (usuário: js, senha: 2222). Você pode transferir diferentes quantias entre contas.';

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

// 321BUY - MODAL
linkMais321Buy.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = '3,2,1Buy';
  descriptionModal.textContent =
    'Simulação de e-commerce com produtos diversos. Neste site desenvolvido em Wordpress, com auxílio do WooCommerce e demais plugins, você encontra uma loja virtual com produtos diversos, sendo eles eletrodomésticos, vestuário, smartphones, etc. No site, você pode navegar por categorias, adicionar produtos ao carrinho, calcular o frete de entrega, tudo o que um e-commerce pode oferecer nos dias de hoje.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://dev-321buy.pantheonsite.io/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-321Buy2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// CHEZ BISTRO - MODAL
linkMaisChezBistro.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Chez Bistrô';
  descriptionModal.textContent =
    'Site para restaurante criado com a utilização do Wordpress e alguns plugins que auxiliam no desenvolvimento. No site, é possível realizar reservas, verificar o cardápio, conferir a galeria de fotos, ler depoimentos e acessar um blog com as últimas novidades.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'http://chezbistro.ezzeblog.com/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-chezBistro2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// STYLEVISTA - MODAL
linkMaisStyleVista.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Style Vista';
  descriptionModal.textContent =
    'Site do ramo da moda que traz notícias, dicas e eventos relacionados ao setor. Este site foi criado utilizando o WordPress e alguns plugins que auxiliam em tarefas específicas realizadas por ele.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'http://stylevista.rf.gd/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-styleVista2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// INFOSPHERE - MODAL
linkMaisInfoSphere.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Info Sphere';
  descriptionModal.textContent =
    'Portal de notícias que abrange as principais notícias do mundo. No portal, é possível navegar em diferentes categorias de notícias, tais como: saúde, entretenimento, esportes, viagens, etc.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://dev-jornal-digital.pantheonsite.io/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-infoSphere2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// TRILHANDO RIQUEZAS - MODAL
linkMaisTrilhandoRiquezas.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Trilhando Riquezas';
  descriptionModal.textContent =
    'Blog de finanças onde é possível encontrar dicas e informações, oferecer serviços personalizados, funcionando também como uma landing Page para captação de leads.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'http://trilhandoriquezas.free.nf/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-trilhandoRiquezas2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// MOVEMASTER - MODAL
linkMaisMoveMaster.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'MoveMaster';
  descriptionModal.textContent =
    'Site criado para simular uma empresa do ramo fitness. Neste site, você encontrará serviços, dicas e notícias sobre o mundo fitness. O site foi desenvolvido utilizando ferramentas do WordPress.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://dev-movemaster.pantheonsite.io/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-moveMaster2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// OMNIFOOD - MODAL
linkMaisOmnifood.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Omnifood';
  descriptionModal.textContent =
    'Projeto criado simulando uma empresa de Delivery que vende planos de refeiçoes saudáveis. Nesse projeto o principal objetivo foi a prática de técnicas e ferramentas utilizadas durante o curso realizado, como: HTML, CSS e JavaScript.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://omnifood-ricardogarcia.netlify.app/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-omnifood2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// ANDROID - MODAL
linkMaisAndroid.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Projeto Android';
  descriptionModal.textContent =
    'Landing page criada como projeto final do primeiro curso que realizei de HTML e CSS. Nesse projeto foram utilizados os primeiros aprendizados das ferrmantas de desenvolvimento Front-End.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://ricardogarcia90.github.io/projeto-android/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-projeto-android2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// JOGO DO DADO - MODAL
linkMaisJogoDado.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Jogo do Dado';
  descriptionModal.textContent =
    'Esse jogo foi desenvolvido durante um curso de JavaScript. O jogo é bastante simples: o jogador rola o dado e acumula pontos enquanto o valor do dado for diferente de 1. Os pontos acumulados são os próprios valores apresentados pelo dado. O jogador tem a opção de armazenar esses pontos ou passar a vez para seu adversário. Se o jogador optar por fazer mais uma jogada e o número apresentado pelo dado for igual a 1, a vez é passada para o adversário e o jogador perde todos os pontos que não foram armazenados. O vencedor é aquele que alcançar primeiro os 100 pontos.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://ricardogarcia90.github.io/Pig-Game-JogoDoDado/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-jodoDado2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
});

// JOGO ADIVINHAR NUMERO - MODAL
linkMaisAdivinharNumero.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  titleModal.textContent = 'Jogo de Adivinhar o númrero sorteado';
  descriptionModal.textContent =
    'Jogo simples de adivinhação de números. É gerado um número aleatório entre 1 e 20, o usuário digita qual o número ele acha que foi gerado, a cada erro os pontos vão diminuindo até que o chute seja correto.';

  // LINK PARA O SITE DENTRO DO MODAL
  link.href = 'https://ricardogarcia90.github.io/jogoAdivinharNumero/';

  var linkModalSite = document.getElementById('site-link-modal');
  if (linkModalSite.hasChildNodes()) {
    linkModalSite.removeChild(linkModalSite.firstChild); // Remove o link existente
  }

  linkModalSite.appendChild(link);

  // IMAGEM MODAL
  var image = document.createElement('img');
  image.src = 'img/tela-adivinhe-o-numero2.png';

  var imgModal = document.getElementById('img-modal-container');

  // Verifica se já existe uma imagem presente
  if (imgModal.hasChildNodes()) {
    imgModal.removeChild(imgModal.firstChild); // Remove a imagem existente
  }

  imgModal.appendChild(image);
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

const orangePortfolioSubtitle = document.getElementById('orangePortfolio_p');
const calculadoraSubtitle = document.getElementById('calculadora_p');
const subtitle321Buy = document.getElementById('321Buy_p');
const chezBistroSubtitle = document.getElementById('chezBistro_p');
const styleVistaSubtitle = document.getElementById('styleVista_p');
const infoSphereSubtitle = document.getElementById('infoSphere_p');
const trilhandoRiquezasSubtitle = document.getElementById(
  'trilhandoRiquezas_p'
);
const taskPlannerSubtitle = document.getElementById('taskPlanner-p');
const moveMasterSubtitle = document.getElementById('moveMaster_p');
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
    'Finding ways to create and develop solutions using technology is a journey I love to embark on!';
  textAboutMe.textContent =
    'Although I have worked in other fields, it was in technology that I found my true professional passion, building websites and applications using languages and tools such as JavaScript, React.JS, Node.JS, HTML/CSS, and WordPress. I am in search of new opportunities that allow me to contribute significantly and grow professionally.';

  // PROJECTS change language for EN
  appDesktop.textContent = 'Web Applications';
  sites.textContent = 'Websites';
  games.textContent = 'Games';

  orangePortfolioSubtitle.textContent =
    'App for users to register and display their developed projects.';
  calculadoraSubtitle.textContent = 'Calculator with simple operations';
  subtitle321Buy.textContent = 'E-commerce for diverse products';
  chezBistroSubtitle.textContent = 'Restaurant website';
  styleVistaSubtitle.textContent = 'Fashion industry website';
  infoSphereSubtitle.textContent = 'News portal';
  trilhandoRiquezasSubtitle.textContent = 'Finance blog';
  taskPlannerSubtitle.textContent = 'Task management application';
  moveMasterSubtitle.textContent = 'Fitness website with tips and services';
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

  // ORANGE PORTFOLIO MODAL ENGLISH
  linkMaisOrangePortfolio.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Orange Portfolio';
    descriptionModal.textContent =
      'This project was developed in a hackathon where the goal was to create a navigable and responsive application called Orange Portfolio, which will allow users to register and display developed projects.';
    link.textContent = 'Visit Website';
  });

  // CALCULADORA MODAL ENGLISH
  linkMaisCalculadora.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Calculadora';
    descriptionModal.textContent =
      'Calculator created with a focus on practicing structured state management and components that require various different transitions. This project was developed using React and CSS, with an emphasis on the use of the useReducer hook.';

    link.textContent = 'Visit Website';
  });

  // TASKPLANNER MODAL ENGLISH
  linkMaisTaskPlanner.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'TaskPlanner';
    descriptionModal.textContent =
      'An application where you can manage your daily activities by adding, completing, editing, and deleting tasks.';

    link.textContent = 'Visit Website';
  });

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
      "This application generates random numbers to be used for lottery bets. In the app, you will find three games: 'Mega-Sena,' 'Lotofácil,' and 'Lotomania'.";

    link.textContent = 'Visit Website';
  });

  // FORKIFY MODAL ENGLISH
  linkMaisForkify.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Forkify';
    descriptionModal.textContent =
      'This application is used to search for recipes. Created as the final project of the JavaScript course, it allows you to search for new recipes, as well as add and edit your own.';

    link.textContent = 'Visit Website';
  });

  // MAPTY
  linkMaisMapty.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Mapty';
    descriptionModal.textContent =
      'This application allows you to record the data of a physical activity performed. By clicking on the map, your location will be enabled, and a form will appear for you to register information such as: distance covered, duration of the activity, and type of activity performed';

    link.textContent = 'Visit Website';
  });

  // BANKIST
  linkMaisBankist.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Bankist';
    descriptionModal.textContent =
      'This project was created during a JavaScript course and aims to simulate a digital bank. In this project, it is possible to simulate transfers and loans. To log in, fill in the fields as follows: (username: js, password: 1111) or (username: js, password: 2222). You can transfer different amounts between accounts.';

    link.textContent = 'Visit Website';
  });

  // 3,2,1BUY MODAL ENGLISH
  linkMais321Buy.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = '3,2,1Buy';
    descriptionModal.textContent =
      "E-commerce simulation with diverse products. On this website developed in WordPress, with the assistance of WooCommerce and other plugins, you'll find a virtual store with various products, including household appliances, clothing, smartphones, etc. On the site, you can browse through categories, add products to the cart, calculate shipping fees, everything that an e-commerce can offer in today's times.";

    link.textContent = 'Visit Website';
  });

  // CHEZ BISTRO MODAL ENGLISH
  linkMaisChezBistro.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Chez Bistrô';
    descriptionModal.textContent =
      "Restaurant website created using Wordpress and some plugins that assist in development. On the website, it's possible to make reservations, check the menu, browse through a photo gallery, read testimonials, and access a blog with the latest news.";

    link.textContent = 'Visit Website';
  });

  // STYLE VISTA MODAL ENGLISH
  linkMaisStyleVista.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Style Vista';
    descriptionModal.textContent =
      'Website in the fashion industry that brings news, tips, and events related to the sector. This site was created using WordPress and some plugins that assist in specific tasks performed by it.';

    link.textContent = 'Visit Website';
  });

  // INFO SPHERE MODAL ENGLISH
  linkMaisInfoSphere.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Info Sphere';
    descriptionModal.textContent =
      "News portal that encompasses the world's main news. On the portal, it's possible to navigate through different news categories, such as health, entertainment, sports, travel, etc.";

    link.textContent = 'Visit Website';
  });

  // TRILHANDO RIQUEZAS MODAL ENGLISH
  linkMaisTrilhandoRiquezas.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Trilhando Riquezas';
    descriptionModal.textContent =
      'Finance blog where you can find tips and information, offer personalized services, also functioning as a landing page for lead generation.';

    link.textContent = 'Visit Website';
  });

  // MOVEMASTER MODAL ENGLISH
  linkMaisMoveMaster.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'MoveMaster';
    descriptionModal.textContent =
      'Website created to simulate a fitness industry company. On this website, you will find services, tips, and news about the fitness world. The site was developed using WordPress tools.';

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
      'Landing page created as the final project of the first HTML and CSS course I completed. This project incorporated the initial learnings of Front-End development tools.';

    link.textContent = 'Visit Website';
  });

  // JOGO DO DADO
  linkMaisJogoDado.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Pig (dice game)';
    descriptionModal.textContent =
      'This game was developed during a JavaScript course. The game is quite simple: the player rolls the dice and accumulates points as long as the dice value is not 1. The accumulated points are the values shown on the dice. The player has the option to store these points or pass the turn to their opponent. If the player chooses to take another turn and the number shown on the dice is 1, the turn is passed to the opponent, and the player loses all the points that were not stored. The winner is the first player to reach 100 points.';

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
    'Encontrar maneiras de criar e desenvolver soluções utilizando a tecnologia é uma jornada que eu adoro embarcar!';
  textAboutMe.textContent =
    'Embora tenha trabalhado em outras áreas, foi na tecnologia que encontrei minha verdadeira paixão profissional, construindo sites e aplicações com o uso de linguagens e ferramentas como JavaScript, React.JS, Node.JS, HTML/CSS e WordPress. Estou em busca de novas oportunidades que me permitam contribuir de forma significativa e evoluir profissionalmente.';

  // PROJECTS change language for PT
  appDesktop.textContent = 'Aplicações Web';
  sites.textContent = 'Sites';
  games.textContent = 'Jogos';

  orangePortfolioSubtitle.textContent =
    'App para usuários cadastrarem e exibirem seus projetos desenvolvidos';
  calculadoraSubtitle.textContent = 'Calculadora com operações simples';
  subtitle321Buy.textContent = 'E-commerce para produtos diversos';
  chezBistroSubtitle.textContent = 'Site para restaurante';
  styleVistaSubtitle.textContent = 'Site do ramo da moda';
  infoSphereSubtitle.textContent = 'Portal de notícias';
  trilhandoRiquezasSubtitle.textContent = 'Blog de finanças';
  taskPlannerSubtitle.textContent = 'Aplicativo para gerenciar tarefas';
  moveMasterSubtitle.textContent = 'Site fitness com dicas e serviços';
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

  // ORANGE PORTFOLIO MODAL PORTUGUESE
  linkMaisOrangePortfolio.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Orange Portfolio';
    descriptionModal.textContent =
      'Este projeto foi desenvolvido em um hackathon, cujo objetivo era criar uma aplicação navegável e responsiva denominada Orange Portfólio, a qual permitirá aos usuários cadastrar e exibir projetos desenvolvidos.';
    link.textContent = 'Visitar Site';
  });

  // CALCULADORA MODAL PORTUGUESE
  linkMaisCalculadora.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Calculadora';
    descriptionModal.textContent =
      'Calculadora criada com foco em praticar o gerenciamento de estados e componentes mais estruturados, que necessitam de várias transições diferentes. Este projeto foi desenvolvido usando React e CSS, com ênfase na utilização do hook useReducer.';

    link.textContent = 'Visitar Site';
  });

  // TASKPLANNER MODAL PORTUGUESE
  linkMaisTaskPlanner.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'TaskPlanner';
    descriptionModal.textContent =
      'Aplicativo em que você pode gerenciar suas atividades diárias, adicionando, concluindo, editando e excluindo tarefas.';

    link.textContent = 'Visitar Site';
  });

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
      "Este aplicativo gera números aleatórios para serem utilizados em apostas na loteria. No aplicativo, você encontrará três jogos: 'Mega-Sena', 'Lotofácil' e 'Lotomania'.";

    link.textContent = 'Visitar Site';
  });

  // FORKIFY MODAL PORTUGUESE
  linkMaisForkify.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Forkify';
    descriptionModal.textContent =
      'Este aplicativo permite pesquisar receitas. Criado como projeto final do curso de JavaScript, nele é possível buscar novas receitas, além de adicionar e editar as suas próprias.';

    link.textContent = 'Visitar Site';
  });

  // MAPTY MODAL PORTUGUESE
  linkMaisMapty.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Mapty';
    descriptionModal.textContent =
      'Este aplicativo permite que você registre os dados de uma atividade física realizada. Ao clicar no mapa, sua localização será habilitada, e um formulário aparecerá para você registrar informações como: distância percorrida, tempo de duração da atividade e tipo de atividade realizada.';

    link.textContent = 'Visitar Site';
  });

  // BANKIST MODAL PORTUGUESE
  linkMaisBankist.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Bankist';
    descriptionModal.textContent =
      'Este projeto foi criado durante um curso de JavaScript e tem como objetivo simular um banco digital. Nele, é possível realizar transferências e empréstimos. Para fazer login, preencha os campos da seguinte forma: (usuário: js, senha: 1111) ou (usuário: js, senha: 2222). Você pode transferir diferentes quantias entre contas.';

    link.textContent = 'Visitar Site';
  });

  // 3,2,1BUY MODAL PORTUGUESE
  linkMais321Buy.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = '3,2,1Buy';
    descriptionModal.textContent =
      'Simulação de e-commerce com produtos diversos. Neste site desenvolvido em Wordpress, com auxílio do WooCommerce e demais plugins, você encontra uma loja virtual com produtos diversos, sendo eles eletrodomésticos, vestuário, smartphones, etc. No site, você pode navegar por categorias, adicionar produtos ao carrinho, calcular o frete de entrega, tudo o que um e-commerce pode oferecer nos dias de hoje.';

    link.textContent = 'Visitar Site';
  });

  // CHEZ BISTRO MODAL PORTUGUESE
  linkMaisChezBistro.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Chez Bistrô';
    descriptionModal.textContent =
      'Site para restaurante criado com a utilização do Wordpress e alguns plugins que auxiliam no desenvolvimento. No site, é possível realizar reservas, verificar o cardápio, conferir a galeria de fotos, ler depoimentos e acessar um blog com as últimas novidades.';

    link.textContent = 'Visitar Site';
  });

  // STYLE VISTA MODAL PORTUGUESE
  linkMaisStyleVista.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Style Vista';
    descriptionModal.textContent =
      'Site do ramo da moda que traz notícias, dicas e eventos relacionados ao setor. Este site foi criado utilizando o WordPress e alguns plugins que auxiliam em tarefas específicas realizadas por ele.';

    link.textContent = 'Visitar Site';
  });

  // INFO SPHERE MODAL PORTUGUESE
  linkMaisInfoSphere.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Info Sphere';
    descriptionModal.textContent =
      'Portal de notícias que abrange as principais notícias do mundo. No portal, é possível navegar em diferentes categorias de notícias, tais como: saúde, entretenimento, esportes, viagens, etc.';

    link.textContent = 'Visitar Site';
  });

  // TRILHANDO RIQUEZAS MODAL PORTUGUESE
  linkMaisTrilhandoRiquezas.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Trilhando Riquezas';
    descriptionModal.textContent =
      'Blog de finanças onde é possível encontrar dicas e informações, oferecer serviços personalizados, funcionando também como uma landing Page para captação de leads.';

    link.textContent = 'Visitar Site';
  });

  // MOVEMASTER MODAL PORTUGUESE
  linkMaisMoveMaster.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'MoveMaster';
    descriptionModal.textContent =
      'Site criado para simular uma empresa do ramo fitness. Neste site, você encontrará serviços, dicas e notícias sobre o mundo fitness. O site foi desenvolvido utilizando ferramentas do WordPress.';

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
      'Landing page criada como projeto final do primeiro curso que realizei de HTML e CSS. Nesse projeto foram utilizados os primeiros aprendizados das ferrmantas de desenvolvimento Front-End.';

    link.textContent = 'Visitar Site';
  });

  // JOGO DO DADO MODAL PORTUGUESE
  linkMaisJogoDado.addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    titleModal.textContent = 'Jogo do Dado';
    descriptionModal.textContent =
      'Esse jogo foi desenvolvido durante um curso de JavaScript. O jogo é bastante simples: o jogador rola o dado e acumula pontos enquanto o valor do dado for diferente de 1. Os pontos acumulados são os próprios valores apresentados pelo dado. O jogador tem a opção de armazenar esses pontos ou passar a vez para seu adversário. Se o jogador optar por fazer mais uma jogada e o número apresentado pelo dado for igual a 1, a vez é passada para o adversário e o jogador perde todos os pontos que não foram armazenados. O vencedor é aquele que alcançar primeiro os 100 pontos.';

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
