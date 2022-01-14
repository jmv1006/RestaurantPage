import {contentModule} from './index.js';
import {loadActivePage} from './index.js';

function createMenuPageContent() {
    const menuPageMainContainer = document.createElement('div');
    contentModule.appendChild(menuPageMainContainer);
    menuPageMainContainer.id = 'menuPageMainContainer';

    const menuPageHeaderContainer = document.createElement('div');
    menuPageMainContainer.appendChild(menuPageHeaderContainer);
    menuPageHeaderContainer.id = 'menuHeaderContainer'

    const menuPageHeader = document.createElement('div');
    menuPageHeaderContainer.appendChild(menuPageHeader);
    menuPageHeader.id = 'menuHeader';
    menuPageHeader.innerHTML = 'Dinner Menu'

    const menuHeaderDesc = document.createElement('div');
    menuPageHeaderContainer.appendChild(menuHeaderDesc);
    menuHeaderDesc.id = 'menuDesc';
    menuHeaderDesc.innerHTML = `All prices are in USD and do not include
    gratuity. If you wish to make any altercations, feel free to let your server
    know.`

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
    dessertContainer.classList = 'menuSectionContainer'

    const dessertHeadContainer = document.createElement('div');
    dessertContainer.appendChild(dessertHeadContainer);
    dessertHeadContainer.classList = 'menuHeadingContainer';

    const dessertHead = document.createElement('div');
    dessertHeadContainer.appendChild(dessertHead);
    dessertHead.classList = 'menuHeading';
    dessertHead.innerHTML = "Dessert";

    const dessertItemsContainer = document.createElement('div');
    dessertContainer.appendChild(dessertItemsContainer);
    dessertItemsContainer.id = 'dessertItemContainer';

    for (let i = 0; i < 4; i++) {
        let dessertItemDiv = document.createElement('div');
        dessertItemDiv.id = `dessert${i}`;
        dessertItemsContainer.appendChild(dessertItemDiv);
    };

    let desserts = [];

    class Desserts {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    };

    const dessert1 = new Desserts('Chocolate Cake', '12')
    desserts.push(dessert1);
    const dessert2 = new Desserts('French Vanilla Ice Cream', '8')
    desserts.push(dessert2);
    const dessert3 = new Desserts('Creme Brulee', '17');
    desserts.push(dessert3);
    const dessert4 = new Desserts('Chocolate Flan', '11');
    desserts.push(dessert4);

    for(let j = 0; j < desserts.length; j++) {
        let dessertDiv = document.getElementById(`dessert${j}`);
        dessertDiv.innerHTML = `${desserts[j].name}......${desserts[j].price}`

    };

    //<---- Drinks ---->
    const drinksContainer = document.createElement('div');
    menuPageMainContainer.appendChild(drinksContainer);
    drinksContainer.classList = 'menuSectionContainer';

    const drinksHeadContainer = document.createElement('div');
    drinksContainer.appendChild(drinksHeadContainer);
    drinksHeadContainer.classList = 'menuHeadingContainer';

    const drinksHead = document.createElement('div');
    drinksHeadContainer.appendChild(drinksHead);
    drinksHead.classList = 'menuHeading';
    drinksHead.innerHTML = 'Drinks';

    const drinksItemContainer = document.createElement('div');
    drinksContainer.appendChild(drinksItemContainer);
    drinksItemContainer.id = 'drinksItemContainer';

    for (let i = 0; i < 6; i++) {
        let drinksItemDiv = document.createElement('div');
        drinksItemDiv.id = `drink${i}`;
        drinksItemContainer.appendChild(drinksItemDiv);
    };

    let drinks = [];

    class Drink {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    };

    const drink1 = new Drink('Soft Drinks', '3')
    drinks.push(drink1);
    const drink2 = new Drink('Tap Beer', '7')
    drinks.push(drink2);
    const drink3 = new Drink('Bottled Beer', '5')
    drinks.push(drink3);
    const drink4 = new Drink('Red Wine', '12')
    drinks.push(drink4);
    const drink5 = new Drink('Whiskey', '9')
    drinks.push(drink5);
    const drink6 = new Drink('Margarita', '9')
    drinks.push(drink6);

    for(let i = 0; i < drinks.length; i++) {
        let drinkDiv = document.getElementById(`drink${i}`);
        drinkDiv.innerHTML = `${drinks[i].name}......${drinks[i].price}`

    };

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

    document.getElementById('contactTabBtn').addEventListener('click', function() {
        loadActivePage('contact');
    })
};

