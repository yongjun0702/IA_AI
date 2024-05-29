window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.content-section');
    const cards = document.querySelectorAll('.card');
    const typewriter = document.querySelector('.typewriter');

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - windowHeight + sectionHeight / 4) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
        }
    });

    cards.forEach((card, index) => {
        const cardTop = card.offsetTop;
        const cardHeight = card.offsetHeight;

        if (scrollPosition >= cardTop - windowHeight + cardHeight / 2) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        } else {
            card.style.transitionDelay = '0s';
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
        }
    });

    // typewriter animation 초기화
    if (scrollPosition === 0) {
        typewriter.style.animation = 'none';
        setTimeout(() => {
            typewriter.style.animation = '';
        }, 10);  
    }
});

// 모달 팝업 기능 추가
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.locker-card').forEach(card => {
    card.addEventListener('click', () => {
        const lockerInfo = card.getAttribute('data-locker-info');
        const lockerImage = card.querySelector('img').src;
        modalText.textContent = lockerInfo;
        modalImage.src = lockerImage;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
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
