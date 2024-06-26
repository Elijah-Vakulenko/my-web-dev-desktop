
const helpFolder = document.querySelector('#help-collection');
const crossBtn = document.querySelector('#cross-help');
const windowhelp = document.querySelector('.mw-help');

helpFolder.addEventListener('click', openhelp);
crossBtn.addEventListener('click', closehelp);

function openhelp() {
    windowhelp.classList.add('is-open');
}

function closehelp() {
     windowhelp.classList.remove('is-open');
}