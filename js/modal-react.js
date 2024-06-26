
const reactFolder = document.querySelector('#react-collection');
const crossBtn = document.querySelector('#cross-react');
const windowreact = document.querySelector('.mw-react');

reactFolder.addEventListener('click', openreact);
crossBtn.addEventListener('click', closereact);

function openreact() {
    windowreact.classList.add('is-open');
}

function closereact() {
     windowreact.classList.remove('is-open');
}