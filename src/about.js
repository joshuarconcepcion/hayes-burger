export default function loadAbout(container) {
    const aboutPage = document.createElement('div');
    aboutPage.id = 'about-page';
    container.appendChild(aboutPage);

    const aboutLeft = document.createElement('div');
    aboutLeft.id = 'about-left';
    aboutPage.appendChild(aboutLeft);

    const aboutRight = document.createElement('div');
    aboutRight.id = 'about-right';
    aboutPage.appendChild(aboutRight);

    const aboutTextHeader = document.createElement('h1');
}