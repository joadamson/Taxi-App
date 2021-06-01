const $backBtn = document.querySelector('.go-back');

$backBtn.addEventListener('click', e => {
    e.preventDefault();

    window.open('index.html', '_self');
})