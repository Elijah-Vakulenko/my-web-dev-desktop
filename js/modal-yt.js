
const ytFolder = document.querySelector('#yt-collection');
const crossBtn = document.querySelector('#cross-yt');
const windowyt = document.querySelector('.mw-yt');
const overlay = document.querySelector('#yt-overlay');
ytFolder.addEventListener('click', openyt);
crossBtn.addEventListener('click', closeyt);

function openyt() {
    windowyt.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closeyt() {
     windowyt.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeyt();
    }
});
