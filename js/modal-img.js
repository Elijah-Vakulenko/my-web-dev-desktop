
const imgFolder = document.querySelector('#img-collection');
const crossBtn = document.querySelector('#cross-img');
const windowimg = document.querySelector('.mw-img');

imgFolder.addEventListener('click', openimg);
crossBtn.addEventListener('click', closeimg);

function openimg() {
    windowimg.classList.add('is-open');
}

function closeimg() {
     windowimg.classList.remove('is-open');
}