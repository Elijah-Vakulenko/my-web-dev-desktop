const orgFolder = document.querySelector('#org-collection');
const crossBtn = document.querySelector('#cross-org');
const windoworg = document.querySelector('.mw-org');
const overlay = document.querySelector('#org-overlay');
orgFolder.addEventListener('click', openorg);
crossBtn.addEventListener('click', closeorg);

function openorg() {
    windoworg.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closeorg() {
     windoworg.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeorg();
    }
});
