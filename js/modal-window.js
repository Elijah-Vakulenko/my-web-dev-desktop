const GoitFolder = document.querySelector('#goit-collection');
const crossBtn = document.querySelector('.cross-icon');
const window = document.querySelector('.mw-goit');
const overlay = document.querySelector('#goit-overlay');

GoitFolder.addEventListener('click', windowOpen);
crossBtn.addEventListener('click', windowClose);

function windowOpen() {
    window.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function windowClose() {
     window.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        windowClose();
    }
});
