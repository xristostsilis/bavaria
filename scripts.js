document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function moveSlide(n) {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (currentItem + n + carouselItems.length) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        moveSlide(-1);
    });

    

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        moveSlide(1);
    });

    setInterval(() => {
        moveSlide(1);
    }, 3000);

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


function acceptCookies() {
    document.getElementById('cookieConsent').style.display = 'none';
    // Set a cookie to remember the user's choice
    document.cookie = "cookiesAccepted=true; path=/; max-age=" + (60 * 60 * 24 * 365); // 1 year
}

function declineCookies() {
    document.getElementById('cookieConsent').style.display = 'none';
    // Set a cookie to remember the user's choice
    document.cookie = "cookiesAccepted=false; path=/; max-age=" + (60 * 60 * 24 * 365); // 1 year
}

function checkCookiesConsent() {
    let cookiesAccepted = document.cookie.split(';').some((item) => item.trim().startsWith('cookiesAccepted='));
    if (!cookiesAccepted) {
        document.getElementById('cookieConsent').style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    checkCookiesConsent();
});
