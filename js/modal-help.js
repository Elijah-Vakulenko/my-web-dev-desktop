
const helpFolder = document.querySelector('#help-collection');
const crossBtn = document.querySelector('#cross-help');
const windowhelp = document.querySelector('.mw-help');
const overlay = document.querySelector('#help-overlay');
helpFolder.addEventListener('click', openhelp);
crossBtn.addEventListener('click', closehelp);

function openhelp() {
    windowhelp.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closehelp() {
     windowhelp.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closehelp();
    }
});
