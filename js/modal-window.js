const GoitFolder = document.querySelector('#goit-collection');
const crossBtn = document.querySelector('.cross-icon');
const window = document.querySelector('.modal-window-outside');

GoitFolder.addEventListener('click', windowOpen);

crossBtn.addEventListener('click', windowClose);

function windowOpen() {
    window.classList.add('is-open');
}

function windowClose() {
     window.classList.remove('is-open');
}