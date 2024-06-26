
const nodeFolder = document.querySelector('#node-collection');
const crossBtn = document.querySelector('#cross-node');
const windownode = document.querySelector('.mw-node');

nodeFolder.addEventListener('click', opennode);
crossBtn.addEventListener('click', closenode);

function opennode() {
    windownode.classList.add('is-open');
}

function closenode() {
     windownode.classList.remove('is-open');
}