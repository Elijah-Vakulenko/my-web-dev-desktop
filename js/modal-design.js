const designFolder = document.querySelector('#design-collection');
const crossBtn = document.querySelector('#cross-design');
const windowdesign = document.querySelector('.mw-design');
const overlay = document.querySelector('#design-overlay');
designFolder.addEventListener('click', opendesign);
crossBtn.addEventListener('click', closedesign);

function opendesign() {
    windowdesign.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closedesign() {
     windowdesign.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closedesign();
    }
});
