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


console.log("Вёрстка соответствует макету. Вёрстка соответствует макету. Ширина экрана 768px +48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. +15 \nНа ширине экрана 768рх и меньше реализовано адаптивное меню +22 \n Успехов в прохождении курса!!!");