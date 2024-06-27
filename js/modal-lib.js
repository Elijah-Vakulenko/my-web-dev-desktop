
const libFolder = document.querySelector('#lib-collection');
const crossBtn = document.querySelector('#cross-lib');
const windowlib = document.querySelector('.mw-lib');
const overlay = document.querySelector('#lib-overlay');
libFolder.addEventListener('click', openlib);
crossBtn.addEventListener('click', closelib);

function openlib() {
    windowlib.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closelib() {
     windowlib.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closelib();
    }
});
