const imgFolder = document.querySelector('#img-collection');
const crossBtn = document.querySelector('#cross-img');
const windowimg = document.querySelector('.mw-img');
const overlay = document.querySelector('#img-overlay');
imgFolder.addEventListener('click', openimg);
crossBtn.addEventListener('click', closeimg);

function openimg() {
    windowimg.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closeimg() {
     windowimg.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeimg();
    }
});