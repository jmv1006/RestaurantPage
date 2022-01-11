
const contentModule = document.getElementById('content');

//<-- Header -->
function createHeader() {
    //creates header container
    const homePageHeaderContainer = document.createElement('div');
    contentModule.appendChild(homePageHeaderContainer);
    homePageHeaderContainer.classList = 'header';
    
    //container for header title
    const headerTitle = document.createElement('div')
    homePageHeaderContainer.appendChild(headerTitle).innerHTML = 'The Restaurant';
    headerTitle.classList = 'headerTitle';

    //container for nav items
    const headerNavItems = document.createElement('div');
    homePageHeaderContainer.appendChild(headerNavItems).classList = 'navItems';

    //generate Nav items
    for (let i=0; i < 3; i++) {
        if (i == 0) {
            const homeButtonDiv = document.createElement('div')
            headerNavItems.appendChild(homeButtonDiv).innerText = 'Home';
        } else if (i == 1) {
            const menuButtonDiv = document.createElement('div')
            headerNavItems.appendChild(menuButtonDiv).innerText = 'Menu';
        } else if (i == 2) {
            const contactButtonDiv = document.createElement('div')
            headerNavItems.appendChild(contactButtonDiv).innerText = 'Contact';
        }
    };
};

//<-- Main Info Area -->
function createMainContent() {
    const img = document.createElement('img');
    img.src = '../src/images/mexicanfood.jpeg';
    const homePageDescription = document.createElement('div');
    contentModule.appendChild(homePageDescription).innerText = 'Main Info';
    contentModule.appendChild(img);
}

//Loads page
function pageLoad() {
    createHeader();
    createMainContent();
};

export {pageLoad};