const burger = document.getElementsByTagName('li')[0];
const navbar = document.getElementsByTagName('ul')[1];
const cross = document.getElementsByTagName('li')[1];
let isMenuActive = false;

let oldState; 

function onBurgerClick() {
    
    oldState = navbar.style; // Записати в змінну дефолтний стан меню 
    /////Зона проявлення меню//////
    if ( !isMenuActive ) {
        navbar.style.width = '30%';
        isMenuActive = !isMenuActive;

        /////////////////////////////
        cross.style.display = 'flex';
        this.style.display = 'none';
        /////////////////////////////

    } else {
        isMenuActive = !isMenuActive;
        navbar.style = oldState;
    }
    ////////////////////////



}
burger.addEventListener('click', onBurgerClick);

function onCrossClick() {


     ///////////
     if ( isMenuActive ) {
        this.style.display = 'none';
        burger.style.display = 'flex';
        isMenuActive = !isMenuActive;
        navbar.style = oldState;
    }
    ////////////////////////

}
cross.addEventListener('click', onCrossClick);

