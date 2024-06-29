const GoitFolder = document.querySelector('#goit-collection');
const crossBtn = document.querySelector('#cross-icon');
const modalWindow = document.querySelector('.mw-goit');
const overlay = document.querySelector('#goit-overlay');

GoitFolder.addEventListener('click', windowOpen);
crossBtn.addEventListener('click', windowClose);

function windowOpen() {
    modalWindow.classList.add('is-open');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function windowClose() {
    modalWindow.classList.remove('is-open');
    overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 300); 
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        windowClose();
    }
});

const anchors = document.querySelectorAll('.window-menu a[href^="#"]');
anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });

            event.stopPropagation();
        }
    });
});
