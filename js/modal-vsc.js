
const vscFolder = document.querySelector('#vsc-collection');
const crossBtn = document.querySelector('#cross-vsc');
const windowvsc = document.querySelector('.mw-vsc');

vscFolder.addEventListener('click', openvsc);
crossBtn.addEventListener('click', closevsc);

function openvsc() {
    windowvsc.classList.add('is-open');
}

function closevsc() {
     windowvsc.classList.remove('is-open');
}