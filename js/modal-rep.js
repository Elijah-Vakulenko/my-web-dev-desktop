const repFolder = document.querySelector('#rep-collection');
const crossBtn = document.querySelector('#cross-rep');
const windowrep = document.querySelector('.mw-rep');

repFolder.addEventListener('click', openrep);
crossBtn.addEventListener('click', closerep);

function openrep() {
    windowrep.classList.add('is-open');
}

function closerep() {
     windowrep.classList.remove('is-open');
}