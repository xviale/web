// script.js

document.getElementById('playMusic').addEventListener('click', function() {
    const audio = new Audio('music/musica.mp3');
    audio.play();
});

document.querySelectorAll('.play-song').forEach(button => {
    button.addEventListener('click', function() {
        const songSrc = this.getAttribute('data-src');
        const audio = new Audio(songSrc);
        audio.play();
    });
});

const videoContainer = document.querySelector('.video-container');
const floatingMessage = document.getElementById('floatingMessage');

videoContainer.addEventListener('mouseenter', function() {
    floatingMessage.style.display = 'block';
});

videoContainer.addEventListener('mouseleave', function() {
    floatingMessage.style.display = 'none';
});