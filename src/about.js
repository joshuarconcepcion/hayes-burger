import hayesPeople from './assets/images/hayesPeople.png'

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
    aboutTextHeader.id = 'about-header'
    aboutTextHeader.textContent = 'About Us'
    aboutLeft.appendChild(aboutTextHeader);

    const aboutTextContent = document.createElement('p');
    aboutTextContent.id = 'about-content';
    aboutTextContent.innerHTML = `
    <p>Welcome to Hayes—where good burgers, good vibes, and good people come together.</p>

    <p>Tucked into a cozy corner of the neighborhood, Hayes is a small shop with big flavor. We’re not here to reinvent the wheel—we’re here to make sure it’s grilled to perfection, stacked high, and served with a side of nostalgia.</p>

    <p>We built Hayes for the community. For the regulars who know their order by heart. For the kids riding up on bikes. For anyone craving a burger that’s just done right—no gimmicks, no shortcuts. Just honest ingredients, scratch-made sauces, and that golden sear that hits different every time.</p>

    <p>At Hayes, we keep it simple:<br>
    Burgers. Fries. Sodas.<br>
    Classic American staples, made with care and loaded with flavor.</p>

    <p>Whether you're grabbing a bite after work, bringing the crew for lunch, or just want a spot that feels like home—Hayes is your place. We’re proud to be part of this community, one burger at a time.</p>
    `
    aboutLeft.appendChild(aboutTextContent);
}