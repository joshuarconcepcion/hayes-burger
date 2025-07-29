import singleBurger from './assets/images/menuItems/singleBurger.png';
import doubleBurger from './assets/images/menuItems/doubleBurger.png';
import tripleBurger from './assets/images/menuItems/tripleBurger.png';
import fries from './assets/images/menuItems/fries.png';
import curlyFries from './assets/images/menuItems/curlyFries.jpg';

const burgerItems = [
    {name: 'Single Burger', image: singleBurger, price: '$5.99'},
    {name: 'Double Burger', image: doubleBurger, price: '$7.99'},
    {name: 'Triple Burger', image: tripleBurger, price: '$9.99'}
];

const sideItems = [
    {name: 'Fries', image: fries, price: '$3.50'},
    {name: 'Curly Fries', image: curlyFries, price: '$4.50'}
];

export default function loadMenu(container) {
    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid-container';
    container.appendChild(gridContainer);

    const burgerGrid = document.createElement('div');
    burgerGrid.classList.add('menu-grid');
    const burgerGridHeader = document.createElement('h1');
    burgerGridHeader.textContent = 'Burgers'
    gridContainer.appendChild(burgerGridHeader);

    burgerItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item')

        const menuItemImg = document.createElement('div');
        menuItemImg.classList.add('menu-item-img');

        const img = new Image();
        img.src = item.image;

        menuItemImg.appendChild(img);

        const menuItemContent = document.createElement('div');
        menuItemContent.classList.add('menu-item-content');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;
        menuItemContent.appendChild(itemName);
        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        menuItemContent.appendChild(itemPrice)

        menuItem.appendChild(menuItemImg);
        menuItem.appendChild(menuItemContent);

        burgerGrid.appendChild(menuItem);
    })

    gridContainer.appendChild(burgerGrid);

    const sideGrid = document.createElement('div');
    sideGrid.classList.add('menu-grid');
    const sideGridHeader = document.createElement('h1');
    sideGridHeader.textContent = 'Sides'
    gridContainer.appendChild(sideGridHeader);

    sideItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item')

        const menuItemImg = document.createElement('div');
        menuItemImg.classList.add('menu-item-img');

        const img = new Image();
        img.src = item.image;

        menuItemImg.appendChild(img);

        const menuItemContent = document.createElement('div');
        menuItemContent.classList.add('menu-item-content');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;
        menuItemContent.appendChild(itemName);
        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        menuItemContent.appendChild(itemPrice)

        menuItem.appendChild(menuItemImg);
        menuItem.appendChild(menuItemContent);

        sideGrid.appendChild(menuItem);
    })

    gridContainer.appendChild(sideGrid);
}