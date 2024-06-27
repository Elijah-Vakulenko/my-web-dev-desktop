
const reactFolder = document.querySelector('#react-collection');
const crossBtn = document.querySelector('#cross-react');
const windowreact = document.querySelector('.mw-react');
const overlay = document.querySelector('#react-overlay');
reactFolder.addEventListener('click', openreact);
crossBtn.addEventListener('click', closereact);

function openreact() {
    windowreact.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closereact() {
     windowreact.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closereact();
    }
});
