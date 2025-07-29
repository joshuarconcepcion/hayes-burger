import './style.css';
import hayesLogo from './assets/images/hayesLogo.png';
import hayesBurger from './assets/images/hayesBurger.png';
import loadAbout from './about';
import loadOrder from './order';
import loadMerch from './merch';
import loadMenu from './menu'

const header = document.querySelector('header');
const navBtns = document.querySelectorAll('.nav-button');
const menuBtn = document.querySelector('#menu');
const mainContent = document.querySelector('#content');

const headerLogo = document.createElement('div');
headerLogo.id = 'header-logo';
const logoLink = document.createElement('a');
logoLink.href = '#';
const logoImg = new Image();
logoImg.src = hayesLogo;
logoLink.appendChild(logoImg);
headerLogo.appendChild(logoLink);
header.insertBefore(headerLogo, menuBtn);

const loadHome = () => {
    mainContent.innerHTML = '';

    const landingPage = document.createElement('div');
    landingPage.id = 'landing-page';
    mainContent.appendChild(landingPage);

    const landingImg = document.createElement('div');
    landingImg.id = 'landing-img';
    const burgerImg = new Image();
    burgerImg.id = 'burger-image';
    burgerImg.src = hayesBurger;
    landingImg.appendChild(burgerImg);
    landingPage.appendChild(landingImg);
}

loadHome();

headerLogo.addEventListener('click', () => {
    loadHome();
});


navBtns.forEach(button => {
    button.addEventListener('click', () => {
        mainContent.innerHTML = '';
        const page = button.id.toLowerCase();

        switch (page) {
            case 'about':
                loadAbout(mainContent);
                break;
            case 'order':
                loadOrder(mainContent);
                break;
            case 'merch':
                loadMerch(mainContent);
                break;
            case 'menu':
                loadMenu(mainContent);
                break;
        }
    });
});
