const listener = document.querySelector(".adaptive__menu");
const sidemenu = document.querySelector('.side-menu')
if(listener) {
    listener.addEventListener('click', toggleMenu);
}

function toggleMenu() {
    listener.classList.toggle("open");
    sidemenu.classList.toggle('close');
}


console.log("Вёрстка валидная +10 \n Вёрстка семантическая +20 \n Вёрстка соответствует макету +48 \n Требования к css + 12 \n Интерактивность, реализуемая через css +20 \n ");