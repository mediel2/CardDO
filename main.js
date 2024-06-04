const cards = document.querySelectorAll("#card");

const reset_all = document.querySelector(".reset_all");
const pass = document.querySelector(".pass");
const reset_last = document.querySelector(".reset_last");
const main = document.querySelector(".main");

cards.forEach(function (item) {
    item.addEventListener('click', function mark(event) {
        event.preventDefault();
        item.classList.toggle('hide');
    })
});

reset_all.addEventListener('click', r_all);

function r_all(event) {
    event.preventDefault();
    cards.forEach(function (item) {
        item.classList.remove('hide', 'hid')
    })
}

pass.addEventListener('click', pss);

function pss(event) {
    const pass_cards = document.querySelectorAll(".hide")
    event.preventDefault();
    pass_cards.forEach(function (item) {
        item.classList.add('hid')
        item.classList.remove('hide')        
    })
}

reset_last.addEventListener('click', cancel);

function cancel(event) {
    const pass_cards = document.querySelectorAll(".hide")
    event.preventDefault();
    pass_cards.forEach(function (item) {
        item.classList.remove('hide');
    })
}
