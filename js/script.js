const btnQuest = document.querySelector('.btn_quest');
const btnDelivary = document.querySelector('.btn_delivary');
const btnFreight = document.querySelector('.btn_freight');
const btnConnect = document.querySelector('.connect');

btnConnect.addEventListener('click', e => {
    e.preventDefault();

    window.open('form.html', '_self');
})

btnQuest.addEventListener('click', e => {
    e.preventDefault();

    window.open('form.html', '_self');
})

btnDelivary.addEventListener('click', e => {
    e.preventDefault();

    window.open('form.html', '_self');
})

btnFreight.addEventListener('click', e => {
    e.preventDefault();

    window.open('form.html', '_self');
})