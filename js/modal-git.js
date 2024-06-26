const gitFolder = document.querySelector('#git-collection');
const crossBtn = document.querySelector('#cross-git');
const windowgit = document.querySelector('.mw-git');

gitFolder.addEventListener('click', opengit);
crossBtn.addEventListener('click', closegit);

function opengit() {
    windowgit.classList.add('is-open');
}

function closegit() {
     windowgit.classList.remove('is-open');
}