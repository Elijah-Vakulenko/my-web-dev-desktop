const gitFolder = document.querySelector('#git-collection');
const crossBtn = document.querySelector('#cross-git');
const windowgit = document.querySelector('.mw-git');
const overlay = document.querySelector('#git-overlay');
gitFolder.addEventListener('click', opengit);
crossBtn.addEventListener('click', closegit);

function opengit() {
    windowgit.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closegit() {
     windowgit.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closegit();
    }
});
