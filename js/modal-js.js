
const jsFolder = document.querySelector('#js-collection');
const crossBtn = document.querySelector('#cross-js');
const windowjs = document.querySelector('.mw-js');

jsFolder.addEventListener('click', openjs);
crossBtn.addEventListener('click', closejs);

function openjs() {
    windowjs.classList.add('is-open');
}

function closejs() {
     windowjs.classList.remove('is-open');
}