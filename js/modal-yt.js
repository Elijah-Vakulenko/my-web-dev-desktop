
const ytFolder = document.querySelector('#yt-collection');
const crossBtn = document.querySelector('#cross-yt');
const windowyt = document.querySelector('.mw-yt');

ytFolder.addEventListener('click', openyt);
crossBtn.addEventListener('click', closeyt);

function openyt() {
    windowyt.classList.add('is-open');
}

function closeyt() {
     windowyt.classList.remove('is-open');
}