import './style.css';
import hayesLogo from './assets/images/hayesLogo.png';
import hayesBurger from './assets/images/hayesBurger.png';

const header = document.querySelector('header');
const aboutBtn = document.querySelector('#about');
const menuBtn = document.querySelector('#menu');
const mainContent = document.querySelector('#content');

const headerLogo = document.createElement('div');
headerLogo.id = 'header-logo';
const logoImg = new Image();
logoImg.src = hayesLogo;
headerLogo.appendChild(logoImg);
header.insertBefore(headerLogo, menuBtn);

const burgerImg = new Image();
burgerImg.id = 'burger-image';
burgerImg.src = hayesBurger;
// mainContent.appendChild(burgerImg);
