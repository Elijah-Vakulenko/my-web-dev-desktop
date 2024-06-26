const orgFolder = document.querySelector('#org-collection');
const crossBtn = document.querySelector('#cross-org');
const windoworg = document.querySelector('.mw-org');

orgFolder.addEventListener('click', openorg);
crossBtn.addEventListener('click', closeorg);

function openorg() {
    windoworg.classList.add('is-open');
}

function closeorg() {
     windoworg.classList.remove('is-open');
}