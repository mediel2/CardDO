const cards = document.querySelectorAll(".card");
const button_reset = document.querySelector(".reset_all");
const button_pass = document.querySelector(".pass");
const button_cancel = document.querySelector(".reset_last");

button_reset.addEventListener('click', resetAll);
button_pass.addEventListener('click', pass);
button_cancel.addEventListener('click', cancel);

cards.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
});

function resetAll() {
    cards.forEach(item => {
        item.classList.remove('active', 'hide');
    })
}

function pass() {
    const pass_cards = document.querySelectorAll(".active")
    pass_cards.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('active');
    })
}

function cancel() {
    const pass_cards = document.querySelectorAll(".active")
    pass_cards.forEach(item => {
        item.classList.remove('active');
    })
}
