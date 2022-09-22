function openEmail() {
    window.open('mailto:stevencherian.va@gmail.com')
}

const videoButton = document.querySelector('.video-button');

const videoContainer = document.querySelector('.video-container');

const close = document.querySelector('.close');

videoButton.addEventListener('click', () => {
    videoContainer.classList.add('show');
    document.getElementById('video').play();
})

close.addEventListener('click', () => {
    videoContainer.classList.remove('show');
    document.getElementById('video').pause();

})