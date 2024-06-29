const htmlFolder = document.querySelector('#html-collection');
const crossBtn = document.querySelector('#cross-html');
const windowhtml = document.querySelector('.mw-html');
const overlay = document.querySelector('#html-overlay');

htmlFolder.addEventListener('click', openhtml);
crossBtn.addEventListener('click', closehtml);

function openhtml() {
    windowhtml.classList.add('is-open');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closehtml() {
    windowhtml.classList.remove('is-open');
    overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closehtml();
    }
});