window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.content-section');
    const cards = document.querySelectorAll('.card');

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - windowHeight + sectionHeight / 4) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });

    cards.forEach((card, index) => {
        const cardTop = card.offsetTop;
        const cardHeight = card.offsetHeight;

        if (scrollPosition >= cardTop - windowHeight + cardHeight / 2) {
            card.style.transitionDelay = `${index * 0.2}s`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        } else {
            card.style.transitionDelay = '0s';
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
        }
    });
});

const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {

	const words = elem.textContent.split(' ');
	elem.innerHTML = '';

	words.forEach((el, index) => {
		words[index] = `<span><i>${words[index]}</i></span>`;
	});

	elem.innerHTML = words.join(' ');

	const children = document.querySelectorAll('span > i');
	children.forEach((node, index) => {
		node.style.animationDelay = `${index * .2}s`;
	});

});