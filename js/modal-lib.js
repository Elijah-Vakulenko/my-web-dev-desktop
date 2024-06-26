
const libFolder = document.querySelector('#lib-collection');
const crossBtn = document.querySelector('#cross-lib');
const windowlib = document.querySelector('.mw-lib');

libFolder.addEventListener('click', openlib);
crossBtn.addEventListener('click', closelib);

function openlib() {
    windowlib.classList.add('is-open');
}

function closelib() {
     windowlib.classList.remove('is-open');
}