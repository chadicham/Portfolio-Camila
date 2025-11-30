(function() {
    'use strict';
    
    // Cache des éléments DOM
    let elements = {};
    
    function cacheElements() {
        elements = {
            enterButton: document.getElementById('enter-button'),
            backButton: document.getElementById('back-to-intro'),
            introSection: document.querySelector('.intro-section'),
            mainContent: document.querySelector('.main-content'),
            navbar: document.querySelector('.fixed-navbar')
        };
    }
    
    function showIntro() {
        const { navbar, introSection, mainContent } = elements;
        
        if (navbar) navbar.style.display = 'none';
        
        introSection.style.display = 'flex';
        introSection.classList.remove('intro-hidden');
        mainContent.style.display = 'none';
        document.body.style.overflow = 'hidden';
    }
    
    function showContent() {
        const { navbar, introSection, mainContent } = elements;
        
        if (navbar) {
            navbar.style.display = 'block';
            navbar.style.opacity = '0';
            requestAnimationFrame(() => {
                navbar.style.opacity = '1';
            });
        }
        
        introSection.classList.add('intro-hidden');
        mainContent.classList.remove('hidden');
        mainContent.style.display = 'block';
        document.body.style.overflow = '';
        window.scrollTo(0, 0);
        
        setTimeout(() => {
            introSection.style.display = 'none';
        }, 800);
    }
    
    function init() {
        cacheElements();
        showIntro();
        
        elements.enterButton?.addEventListener('click', showContent, { passive: true });
        
        if (elements.backButton) {
            elements.backButton.addEventListener('click', (e) => {
                e.preventDefault();
                showIntro();
            }, { passive: false });
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})(); 