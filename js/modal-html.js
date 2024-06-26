
const htmlFolder = document.querySelector('#html-collection');
const crossBtn = document.querySelector('#cross-html');
const windowHTML = document.querySelector('.mw-html');

htmlFolder.addEventListener('click', openHtml);
crossBtn.addEventListener('click', closeHtml);

function openHtml() {
    windowHTML.classList.add('is-open');
}

function closeHtml() {
     windowHTML.classList.remove('is-open');
}