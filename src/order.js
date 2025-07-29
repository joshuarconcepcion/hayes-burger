export default function loadOrder(container) {
    const comingSoonContainer = document.createElement('div');
    comingSoonContainer.classList.add('coming-soon-container');
    container.appendChild(comingSoonContainer);

    const comingSoonText = document.createElement('h1');
    comingSoonText.classList.add('coming-soon-text');
    comingSoonText.textContent = 'Coming Soon!';
    comingSoonContainer.appendChild(comingSoonText);
}