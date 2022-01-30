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

// js functional

/* const portfolioBtn = document.querySelector('.portfolio-btn111');
const portfolioImage = document.querySelector('.portfolio-image111');

portfolioBtn.addEventListener('click', () => {
    console.log("ura");
    portfolioImage.src = "../img/portfolio/winter/1.jpg";
}); */


//change photo in portfolio

const portfolioButtons = document.querySelector('.portfolio__buttons-block');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtnForColored = document.querySelectorAll('.portfolio__button');


portfolioButtons.addEventListener('click', changeImage);


function changeImage(event) {
    /* console.log('privet'); */
    
    if(event.target.classList.contains('button')) {
        /* console.log('ura'); */
        let dataset = event.target.dataset.season;
        /* console.log(dataset); */
        portfolioImages.forEach((img, index) => img.src = `../img/portfolio/${event.target.dataset.season}/${index + 1}.jpg`); 
        console.log(portfolioButtons);

        portfolioBtnForColored.forEach((item) => {
            console.log(item.dataset.season);
            item.classList.remove('button_colored');
            item.classList.add('button_bordered');
            if (item.dataset.season == event.target.dataset.season) {
                item.classList.remove('button_bordered');
                item.classList.add('button_colored');
            }
            
        });

    }
}

// cash images
const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadSummerImages() {
    seasons.forEach((item) => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `../img/portfolio/${item}/${i}.jpg`;
        }

    });
}

preloadSummerImages();


// translate page

import i18Obj from "./translate.js";
const language = document.querySelectorAll('.header__language'); // собрали коллекцию языков в виде двух переключателей
const langContent = document.querySelectorAll('[data-i18]'); // собрали коллекцию тегов с дата-атрибутами для смены языка
language.forEach((item) => item.addEventListener('click', getTranslate)); // перебираем языки и запускаем при клике функцию
function getTranslate(event) {
    langContent.forEach((item) => {
        item.textContent = i18Obj[event.target.innerText][item.dataset.i18]; // определяем язык ru/en через содержание тега + добавляем датаатрибут в нужном объекте           
    })
    language.forEach((item) => {
        item.classList.remove("header__language_colored");
     });
    event.target.classList.add("header__language_colored");    
}

// dart-white theme (надо подумать по поводу переключения анимации кнопок в светлой теме и цвет шрифтов в кнопке)

const lightTheme = [document.querySelector('.skills-container'), 
                    document.querySelector('.portfolio'), 
                    document.querySelector(".video"), 
                    document.querySelector('.price')];
const sectionTitle = document.querySelectorAll('.section-title');
const portfolioBtnForLight = document.querySelectorAll('.portfolio__button');

const lightDark = document.querySelector(".light-icon");

lightDark.addEventListener('click', () => {
    console.log("dark-light");
    lightTheme.forEach((item) => {
        item.classList.toggle('light-theme');

    });
    sectionTitle.forEach((item) => {
        item.classList.toggle('section-title-light');
        item.classList.toggle('section-title-light:before');
        item.classList.toggle('section-title-light:after');
    })

    portfolioBtnForLight.forEach((item) =>{
        if(!item.classList.contains('button_colored')) {
            item.classList.toggle('button-light');
        }       

    });

});
