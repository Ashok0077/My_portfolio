document.getElementById('menuIcon').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
});

window.addEventListener('load', () => {
    const headerImage = new Image();
    headerImage.src = 'assets/header.webp';

    headerImage.onload = function () {
        document.body.classList.add('loaded'); 
    };
});