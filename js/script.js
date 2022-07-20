const button = document.querySelector('#btn-burger');
const menu = document.querySelector('#mobile-menu');
const items = document.querySelectorAll('.mobile-items');

button.addEventListener('click', () => {
    menu.classList.toggle('mobile-hide');
});

items.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.toggle('mobile-hide');
    });
});