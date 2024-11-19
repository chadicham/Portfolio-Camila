document.addEventListener('DOMContentLoaded', function() {
    // Premier carousel
    const swiperLeft = new Swiper('.villa-swiper-left .swiper', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: false,
            enabled: true
        },
        speed: 1000, // Durée de la transition
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.villa-swiper-left .swiper-button-next',
            prevEl: '.villa-swiper-left .swiper-button-prev',
        }
    });

    // Second carousel
    const swiperRight = new Swiper('.villa-swiper-right .swiper', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: false,
            enabled: true
        },
        speed: 1000, // Durée de la transition
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.villa-swiper-right .swiper-button-next',
            prevEl: '.villa-swiper-right .swiper-button-prev',
        }
    });

    // Démarrage immédiat des autoplay
    swiperLeft.autoplay.start();
    swiperRight.autoplay.start();
});