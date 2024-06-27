
const vscFolder = document.querySelector('#vsc-collection');
const crossBtn = document.querySelector('#cross-vsc');
const windowvsc = document.querySelector('.mw-vsc');
const overlay = document.querySelector('#vsc-overlay');
vscFolder.addEventListener('click', openvsc);
crossBtn.addEventListener('click', closevsc);

function openvsc() {
    windowvsc.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closevsc() {
     windowvsc.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closevsc();
    }
});
