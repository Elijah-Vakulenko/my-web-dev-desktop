
const cssFolder = document.querySelector('#css-collection');
const crossBtn = document.querySelector('#cross-css');
const windowCSS = document.querySelector('.mw-css');

cssFolder.addEventListener('click', openCss);
crossBtn.addEventListener('click', closeCss);

function openCss() {
    windowCSS.classList.add('is-open');
}

function closeCss() {
     windowCSS.classList.remove('is-open');
}