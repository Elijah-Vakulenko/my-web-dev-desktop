
const cssFolder = document.querySelector('#css-collection');
const crossBtn = document.querySelector('#cross-css');
const windowCSS = document.querySelector('.mw-css');
const overlay = document.querySelector('#css-overlay');

cssFolder.addEventListener('click', openCss);
crossBtn.addEventListener('click', closeCss);

function openCss() {
    windowCSS.classList.add('is-open');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
    document.body.classList.add('no-scroll'); 
}

function closeCss() {
    windowCSS.classList.remove('is-open');
    overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeCss();
    }
});
