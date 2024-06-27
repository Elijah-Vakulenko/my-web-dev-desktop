
const jobFolder = document.querySelector('#job-collection');
const crossBtn = document.querySelector('#cross-job');
const windowjob = document.querySelector('.mw-job');
const overlay = document.querySelector('#job-overlay');
jobFolder.addEventListener('click', openjob);
crossBtn.addEventListener('click', closejob);

function openjob() {
    windowjob.classList.add('is-open');
overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
}

function closejob() {
     windowjob.classList.remove('is-open');
overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closejob();
    }
});
