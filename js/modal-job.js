
const jobFolder = document.querySelector('#job-collection');
const crossBtn = document.querySelector('#cross-job');
const windowjob = document.querySelector('.mw-job');

jobFolder.addEventListener('click', openjob);
crossBtn.addEventListener('click', closejob);

function openjob() {
    windowjob.classList.add('is-open');
}

function closejob() {
     windowjob.classList.remove('is-open');
}