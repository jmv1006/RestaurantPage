import {contentModule} from './index.js';
import {loadActivePage} from './index.js';

function createMenuPageContent() {
    const menuPageMainContainer = document.createElement('div');
    contentModule.appendChild(menuPageMainContainer);
    menuPageMainContainer.id = 'menuPageMainContainer';

//////////////////////////////////////////////////////////////////////////
    //<---- Starters ---->
    const startersContainer = document.createElement('div');
    menuPageMainContainer.appendChild(startersContainer);
    startersContainer.classList = 'menuSectionContainer'

    const startersHeadContainer = document.createElement('div');
    startersContainer.appendChild(startersHeadContainer);
    startersHeadContainer.classList = 'menuHeadingContainer'

    const startersHead = document.createElement('div');
    startersHeadContainer.appendChild(startersHead);
    startersHead.classList = 'menuHeading';
    startersHead.innerHTML = 'Starters';

    const startersItemsContainer = document.createElement('div');
    startersContainer.appendChild(startersItemsContainer);
    startersItemsContainer.id = 'startersItemContainer';

    for (let i = 0; i < 4; i ++) {
        let starteritemDiv = document.createElement('div');
        starteritemDiv.id = `starter${i}`
        startersItemsContainer.appendChild(starteritemDiv);
    }

    let starters = [];

    class Starter {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    };

    const starter1 = new Starter('Chicken Wings', '13');
    starters.push(starter1);
    const starter2 = new Starter('Garlic Bread', '9');
    starters.push(starter2);
    const starter3 = new Starter('House Salad', '11');
    starters.push(starter3);
    const starter4 = new Starter('Sliders', '14');
    starters.push(starter4);

    for (let j = 0; j < starters.length; j++) {
        let starterDiv = document.getElementById(`starter${j}`)
        starterDiv.innerHTML = `${starters[j].name}......${starters[j].price}`
    };

////////////////////////////////////////////////////////////////////
    //<---- Main Courses ---->
    const mainCourseContainer = document.createElement('div');
    menuPageMainContainer.appendChild(mainCourseContainer);
    mainCourseContainer.classList = 'menuSectionContainer';

    const mainCourseHeadContainer = document.createElement('div');
    mainCourseContainer.appendChild(mainCourseHeadContainer);
    mainCourseHeadContainer.classList = 'menuHeadingContainer';

    const mainCourseHead = document.createElement('div');
    mainCourseHeadContainer.appendChild(mainCourseHead);
    mainCourseHead.classList = 'menuHeading';
    mainCourseHead.innerHTML = 'Main Course';

    const mainCourseItemsContainer = document.createElement('div');
    mainCourseContainer.appendChild(mainCourseItemsContainer);
    mainCourseItemsContainer.id = 'mainCourseItemContainer';

    for (let j = 0; j < 8; j ++) {
        let mcItemDiv = document.createElement('div');
        mcItemDiv.id = `maincourse${j}`
        mainCourseItemsContainer.appendChild(mcItemDiv);
    };

    let mainItems = [];

    class MainItems {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    };

    const mainItem1 = new MainItems('New York Steak', '34');
    mainItems.push(mainItem1);
    const mainItem2 = new MainItems('Deluxe Angus Cheeseburger', '23')
    mainItems.push(mainItem2);
    const mainItem3 = new MainItems('Grilled Lemon Salmon', '26')
    mainItems.push(mainItem3);
    const mainItem4 = new MainItems('Seaside Pasta with Shrimp', '24')
    mainItems.push(mainItem4);
    const mainItem5 = new MainItems('Filet Mignon & Lobster Tail', '54')
    mainItems.push(mainItem5);
    const mainItem6 = new MainItems('Premium Macaroni and Cheese', '24')
    mainItems.push(mainItem6);
    const mainItem7 = new MainItems('Vegan Pizza', '26')
    mainItems.push(mainItem7);
    const mainItem8 = new MainItems('Escargo', '39')
    mainItems.push(mainItem8);

    for (let i = 0; i < mainItems.length; i++) {
        let mainItemDiv = document.getElementById(`maincourse${i}`)
        mainItemDiv.innerHTML = `${mainItems[i].name}......${mainItems[i].price}`
    };

/////////////////////////////////////////////////////////////////////////////////////////
    //<---- Desserts ---->
    const dessertContainer = document.createElement('div');
    menuPageMainContainer.appendChild(dessertContainer);
    dessertContainer.id ='dessertContainer';


    //<---- Drinks ---->
    const drinksContainer = document.createElement('div');
    menuPageMainContainer.appendChild(drinksContainer);
    drinksContainer.id = 'drinksContainer';

};

function menuPageLoad() {
    createMenuPageContent();
    menuPageEventList();
};

export {menuPageLoad};

function menuPageEventList() {
    document.getElementById('homeTabBtn').addEventListener('click', function() {
        loadActivePage('main');
    });
};

