const repFolder = document.querySelector('#rep-collection');
const crossBtn = document.querySelector('#cross-rep');
const windowrep = document.querySelector('.mw-rep');
const overlay = document.querySelector('#rep-overlay');
repFolder.addEventListener('click', openrep);
crossBtn.addEventListener('click', closerep);

function openrep() {
    windowrep.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closerep() {
     windowrep.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closerep();
    }
});
