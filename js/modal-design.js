const designFolder = document.querySelector('#design-collection');
const crossBtn = document.querySelector('#cross-design');
const windowdesign = document.querySelector('.mw-design');

designFolder.addEventListener('click', opendesign);
crossBtn.addEventListener('click', closedesign);

function opendesign() {
    windowdesign.classList.add('is-open');
}

function closedesign() {
     windowdesign.classList.remove('is-open');
}