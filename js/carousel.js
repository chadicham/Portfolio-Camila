(function() {
    'use strict';
    
    // Configuration partagée pour optimiser la mémoire
    const commonConfig = {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        lazy: {
            loadPrevNext: true
        },
        observer: true,
        observeParents: true
    };
    
    function initCarousels() {
        // Vérifier si les éléments existent avant d'initialiser
        const leftEl = document.querySelector('.villa-swiper-left .swiper');
        const rightEl = document.querySelector('.villa-swiper-right .swiper');
        
        if (!leftEl && !rightEl) return;
        
        const swipers = [];
        
        if (leftEl) {
            swipers.push(new Swiper('.villa-swiper-left .swiper', {
                ...commonConfig,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    nextEl: '.villa-swiper-left .swiper-button-next',
                    prevEl: '.villa-swiper-left .swiper-button-prev'
                }
            }));
        }
        
        if (rightEl) {
            swipers.push(new Swiper('.villa-swiper-right .swiper', {
                ...commonConfig,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    nextEl: '.villa-swiper-right .swiper-button-next',
                    prevEl: '.villa-swiper-right .swiper-button-prev'
                }
            }));
        }
        
        // Démarrage des autoplay
        swipers.forEach(swiper => swiper.autoplay?.start());
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCarousels);
    } else {
        initCarousels();
    }
})();
