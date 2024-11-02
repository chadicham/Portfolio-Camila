document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enter-button');
    const backButton = document.getElementById('back-to-intro');
    const introSection = document.querySelector('.intro-section');
    const mainContent = document.querySelector('.main-content');

    function showIntro() {
        introSection.classList.remove('intro-hidden');
        mainContent.style.display = 'none';
        document.body.style.overflow = 'hidden'; // Empêche le défilement
    }

    function showContent() {
        introSection.classList.add('intro-hidden');
        mainContent.style.display = 'block';
        document.body.style.overflow = ''; // Réactive le défilement
        window.scrollTo(0, 0); // Assure que la page est au top
    }

    // Initialisation : afficher l'intro au chargement de la page
    showIntro();

    // Gérer le clic sur le bouton "Explore"
    enterButton.addEventListener('click', showContent);

    // Gérer le clic sur "Back to Welcome Page"
    backButton.addEventListener('click', function(e) {
        e.preventDefault();
        showIntro();
    });
});