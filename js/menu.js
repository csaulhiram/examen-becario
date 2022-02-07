let button = document.getElementsByClassName('menu_button')[0];
let menu = document.getElementsByClassName('menu_container')[0];

button.addEventListener('click', function () {
    menu.classList.toggle('translate');
});