const engFolder = document.querySelector('#eng-collection');
const crossBtn = document.querySelector('#cross-eng');
const windoweng = document.querySelector('.mw-eng');

engFolder.addEventListener('click', openeng);
crossBtn.addEventListener('click', closeeng);

function openeng() {
    windoweng.classList.add('is-open');
}

function closeeng() {
     windoweng.classList.remove('is-open');
}