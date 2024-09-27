document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enter-button');
    const body = document.body;

    enterButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        body.classList.add('transition-active');

        setTimeout(function() {
            window.location.href = enterButton.href;
        }, 1000); // 1000ms = 1s, la durée de votre transition
    });
});