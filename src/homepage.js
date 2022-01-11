
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
            homeButtonDiv.classList = 'navButton';
        } else if (i == 1) {
            const menuButtonDiv = document.createElement('div')
            headerNavItems.appendChild(menuButtonDiv).innerText = 'Menu';
            menuButtonDiv.classList = 'navButton';
        } else if (i == 2) {
            const contactButtonDiv = document.createElement('div')
            headerNavItems.appendChild(contactButtonDiv).innerText = 'Contact';
            contactButtonDiv.classList = 'navButton';
        }
    };
};

//<-- Main Info Area -->
function createMainContent() {
    //const img = document.createElement('img');
    //img.src = '../src/images/mexicanfood.jpeg';

    //creates main area container
    const homePageDescription = document.createElement('div');
    contentModule.appendChild(homePageDescription).innerText = 'Main Info';
    homePageDescription.classList = 'homePageMainArea';
    //contentModule.appendChild(img);

    const navChoices = document.querySelectorAll('.navButton');
    for (let j = 0; j < navChoices.length; j++) {
        navChoices[j].addEventListener('mouseenter', function() {
            this.classList = 'navButtonHover'
        });

        navChoices[j].addEventListener('mouseleave', function() {
            this.classList = 'navButton';
        })
    };
};


//Loads page
function pageLoad() {
    createHeader();
    createMainContent();
};

export {pageLoad};