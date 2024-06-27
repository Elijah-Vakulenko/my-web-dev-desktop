const engFolder = document.querySelector('#eng-collection');
const crossBtn = document.querySelector('#cross-eng');
const windoweng = document.querySelector('.mw-eng');
const overlay = document.querySelector('#eng-overlay');
engFolder.addEventListener('click', openeng);
crossBtn.addEventListener('click', closeeng);

function openeng() {
    windoweng.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closeeng() {
     windoweng.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeeng();
    }
});
