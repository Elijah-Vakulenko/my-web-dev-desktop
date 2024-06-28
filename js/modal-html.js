
const htmlFolder = document.querySelector('#html-collection');
const crossBtn = document.querySelector('#cross-html');
const windowHTML = document.querySelector('.mw-html');
const overlay = document.querySelector('#html-overlay');

htmlFolder.addEventListener('click', openHtml);
crossBtn.addEventListener('click', closeHtml);

function openHtml() {
    windowHTML.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closeHtml() {
     windowHTML.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeHtml();
    }
});
