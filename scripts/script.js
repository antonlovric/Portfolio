var swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: 'bulletActive',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    // slidesPerView: "auto",
    spaceBetween: 30,
});

const overlays = document.querySelectorAll('.projectOverlay');

overlays.forEach((overlay) => {
    overlay.addEventListener('click', function () {
        toggleOverlay(overlay);
    });
});

function refreshButtons(buttons, show) {
    if (show) {
        buttons.forEach((button) => {
            button.disabled = false;
            button.style.visibility = 'visible';
        });
    } else {
        buttons.forEach((button) => {
            button.disabled = true;
            button.style.visibility = 'hidden';
        });
    }
}

function toggleOverlay(overlay) {
    overlay.classList.toggle('showOverlay');
    const buttons = overlay.querySelectorAll('button');
    if (overlay.classList.contains('showOverlay')) {
        refreshButtons(buttons, true);
    } else refreshButtons(buttons, false);
}

swiper.on('slideChange', updateProjectTitle);

function updateProjectTitle() {
    const index = swiper.realIndex;
    const projectTitle = document.querySelector('.projectTitle');
    const projects = [
        'Free Bird Music',
        'Alojzije Janković Project',
        'BMI Calculator',
        'Portfolio Website',
        'Sunnyside Agency Landing Page',
        'freeCodeCamp Certification',
        'MOOC Certification',
    ];
    projectTitle.innerText = projects[index];
}

const target = document.querySelector('#bio');

function handleIntersection(entries) {
    console.log(entries);
    const header = document.querySelector('.navbar');
    console.log(header);
    entries.forEach((entry) => {
        if (entry.isIntersecting == true) {
            header.classList.add('grayBackground');
        } else {
            header.classList.remove('grayBackground');
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px 0px -80% 0px',
    threshold: 0,
};

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(target);
