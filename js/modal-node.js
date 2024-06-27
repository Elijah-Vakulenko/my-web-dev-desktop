
const nodeFolder = document.querySelector('#node-collection');
const crossBtn = document.querySelector('#cross-node');
const windownode = document.querySelector('.mw-node');
const overlay = document.querySelector('#node-overlay');
nodeFolder.addEventListener('click', opennode);
crossBtn.addEventListener('click', closenode);

function opennode() {
    windownode.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closenode() {
     windownode.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closenode();
    }
});
