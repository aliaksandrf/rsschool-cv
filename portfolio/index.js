const listener = document.querySelector(".adaptive__menu");
const sidemenu = document.querySelector('.side-menu');
const sideMenuItem = document.querySelector('.side-menu__item');
console.log(sideMenuItem);
if(listener) {
    listener.addEventListener('click', toggleMenu);
}

if (sideMenuItem) {
    sideMenuItem.addEventListener('click', sideMenu);
}

function toggleMenu() {
    listener.classList.toggle("open");
    sidemenu.classList.toggle('close-menu');
    sidemenu.classList.toggle('open-menu');
}

function sideMenu() {
    listener.classList.toggle("open");
    sidemenu.classList.toggle('close-menu');
    sidemenu.classList.toggle('open-menu');

}


console.log("Вёрстка валидная +10 \n Вёрстка семантическая +20 \n Вёрстка соответствует макету +48 \n Требования к css + 12 \n Интерактивность, реализуемая через css +20 \n ");