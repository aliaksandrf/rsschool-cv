let lang = 'en';
let theme = 'dark';


const listener = document.querySelector(".adaptive__menu");
const sideMenu = document.querySelector('.side-menu');
const sideMenuItem = document.querySelector('.side-menu__item');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const portfolioButtons = document.querySelector('.portfolio__buttons-block');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtnForColored = document.querySelectorAll('.portfolio__button');
const language = document.querySelectorAll('.header__language'); // собрали коллекцию языков в виде двух переключателей
const languageChoose = document.querySelectorAll('.header__language_choose');
const langContent = document.querySelectorAll('[data-i18]'); // собрали коллекцию тегов с дата-атрибутами для смены языка
const lightTheme = [document.querySelector('.skills-container'), 
                    document.querySelector('.portfolio'), 
                    document.querySelector(".video"), 
                    document.querySelector('.price')];
const sectionTitle = document.querySelectorAll('.section-title');
const lightDark = document.querySelector(".light-icon");


//adaptive menu
console.log(sideMenuItem);
if(listener) {
    listener.addEventListener('click', toggleMenu);
}

if (sideMenuItem) {
    sideMenuItem.addEventListener('click', sideMenuFunc);
}

function toggleMenu() {
    listener.classList.toggle("open");
    sideMenu.classList.toggle('close-menu');
    sideMenu.classList.toggle('open-menu');
}

function sideMenuFunc() {
    listener.classList.toggle("open");
    sideMenu.classList.toggle('close-menu');
    sideMenu.classList.toggle('open-menu');

}

// end adaptive menu

// cash images

function preloadSummerImages() {
    seasons.forEach((item) => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `../img/portfolio/${item}/${i}.jpg`;
        }

    });
}

preloadSummerImages();

// end cash images

//change photo in portfolio
portfolioButtons.addEventListener('click', changeImage);
function changeImage(event) {
    /* console.log('privet'); */
    
    if(event.target.classList.contains('button')) {
        /* console.log('ura'); */
        let dataset = event.target.dataset.season;
        /* console.log(dataset); */
        portfolioImages.forEach((img, index) => img.src = `./img/portfolio/${event.target.dataset.season}/${index + 1}.jpg`); 
        console.log(portfolioButtons);

        portfolioBtnForColored.forEach((item) => {
            console.log(item.dataset.season);

            if (theme == "dark") {
                item.classList.remove('button_colored');
                item.classList.remove('button-light_colored');
                item.classList.add('button_bordered');
                if (item.dataset.season == event.target.dataset.season) {
                    item.classList.remove('button_bordered');
                    item.classList.add('button_colored');
                }
            } else {
                item.classList.remove('button_colored');
                item.classList.remove('button-light_colored');
                item.classList.add('button-light');
                if (item.dataset.season == event.target.dataset.season) {
                    item.classList.remove('button_bordered');
                    item.classList.add('button-light_colored');
                }
            }            
        });
        }
}

// end change photo in portfolio

// js functional

/* const portfolioBtn = document.querySelector('.portfolio-btn111');
const portfolioImage = document.querySelector('.portfolio-image111');

portfolioBtn.addEventListener('click', () => {
    console.log("ura");
    portfolioImage.src = "../img/portfolio/winter/1.jpg";
}); */







// translate page

import i18Obj from "./translate.js";

language.forEach((item) => item.addEventListener('click', getTranslate)); // перебираем языки и запускаем при клике функцию
function getTranslate(event) {
    langContent.forEach((item) => {
        console.log(event.target.innerText);
        item.textContent = i18Obj[event.target.innerText][item.dataset.i18]; // определяем язык ru/en через содержание тега + добавляем датаатрибут в нужном объекте           
    })
    
    languageChoose.forEach((item) => {
        item.classList.remove("header__language_colored");
     });
    event.target.classList.add("header__language_colored");    
    lang == 'en' ? lang = 'ru' : lang = 'en';
}


function getTranslateRu() {
    langContent.forEach((item) => {
        item.textContent = i18Obj.ru[item.dataset.i18]; // определяем язык ru/en через содержание тега + добавляем датаатрибут в нужном объекте           
    })
    
     languageChoose.forEach((item) => {
        item.classList.remove("header__language_colored");
     });
     document.querySelector("body > header > div > div.header__language > span:nth-child(3)").classList.add("header__language_colored");    
    
}

// dart-white theme (надо подумать по поводу переключения анимации кнопок в светлой теме и цвет шрифтов в кнопке)



lightDark.addEventListener('click', lightChange)

function lightChange () {
    theme == "dark" ? theme = "light" : theme = 'dark';
    lightTheme.forEach((item) => {
        item.classList.toggle('light-theme');

    });
    sectionTitle.forEach((item) => {
        item.classList.toggle('section-title-light');
        item.classList.toggle('section-title-light:before');
        item.classList.toggle('section-title-light:after');
    })

    portfolioBtnForColored.forEach((item) =>{
        if(!item.classList.contains('button_colored')) {
            item.classList.toggle('button-light');
        }       

    });

};




// local storage
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);

}

function getLocalStorage() {
    if(localStorage.getItem('theme')) {
        const lang = localStorage.getItem('lang');
        const theme = localStorage.getItem('theme')
        if (theme == "light") {
            lightChange();
        }
    }

    if(localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        if (lang == "ru") {
            getTranslateRu ();

        }
    }



}

console.log("Смена изображений в секции portfolio +25\nПеревод страницы на два языка +25\nПереключение светлой и тёмной темы +25\nДополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\nДополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5");

