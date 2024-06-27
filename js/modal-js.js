
const jsFolder = document.querySelector('#js-collection');
const crossBtn = document.querySelector('#cross-js');
const windowjs = document.querySelector('.mw-js');
const overlay = document.querySelector('#js-overlay');
jsFolder.addEventListener('click', openjs);
crossBtn.addEventListener('click', closejs);

function openjs() {
    windowjs.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closejs() {
     windowjs.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closejs();
    }
});
