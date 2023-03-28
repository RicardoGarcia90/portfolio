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
