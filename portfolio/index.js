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
    season.forEach((item) => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `../img/portfolio/${item}/$[i].jpg`;
        }

    });
}

preloadSummerImages();


// translate page
