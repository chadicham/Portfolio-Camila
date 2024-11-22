document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enter-button');
    const backButton = document.getElementById('back-to-intro');
    const introSection = document.querySelector('.intro-section');
    const mainContent = document.querySelector('.main-content');
    const navbar = document.querySelector('.fixed-navbar');

    function showIntro() {
        // Cache la navbar pendant l'intro
        if (navbar) {
            navbar.style.display = 'none';
        }
        
        // Affiche l'intro
        introSection.style.display = 'flex'; // Utilise flex au lieu de block pour le centrage
        introSection.classList.remove('intro-hidden');
        mainContent.style.display = 'none';
        document.body.style.overflow = 'hidden'; // Empêche le défilement
    }

    function showContent() {
        // Affiche la navbar
        if (navbar) {
            navbar.style.display = 'block';
            navbar.style.opacity = '0';
            setTimeout(() => {
                navbar.style.opacity = '1';
            }, 100);
        }

        // Masque l'intro et affiche le contenu principal
        introSection.classList.add('intro-hidden');
        mainContent.classList.remove('hidden'); // Retire la classe hidden
        mainContent.style.display = 'block';
        document.body.style.overflow = ''; // Réactive le défilement
        window.scrollTo(0, 0);

        // Une fois la transition terminée, cache complètement l'intro
        setTimeout(() => {
            introSection.style.display = 'none';
        }, 800);
    }

    // Initialisation
    showIntro();

    // Event listeners
    enterButton.addEventListener('click', showContent);
    
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            showIntro();
        });
    }
}); 