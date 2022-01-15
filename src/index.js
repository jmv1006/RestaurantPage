import './style.css';
import {mainPageLoad} from './homepage.js';
import {menuPageLoad} from './menupage.js';
import { contactPageLoad } from './contactpage.js';

const contentModule = document.getElementById('content');
export {contentModule};


// <---- This sets up the header and footer --->
//<-- Header -->
function createHeader() {
    //creates header container
    const homePageHeaderContainer = document.createElement('div');
    contentModule.appendChild(homePageHeaderContainer);
    homePageHeaderContainer.id = 'header';
    
    //container for header title
    const headerTitle = document.createElement('div')
    homePageHeaderContainer.appendChild(headerTitle).innerHTML = 'The Restaurant';
    headerTitle.id = 'headerTitle';

    //container for nav items
    const headerNavItems = document.createElement('div');
    homePageHeaderContainer.appendChild(headerNavItems).classList = 'navItems';

    //generate Nav items
    for (let i=0; i < 3; i++) {
        if (i == 0) {
            const homeButtonDiv = document.createElement('div')
            headerNavItems.appendChild(homeButtonDiv).innerText = 'Home';
            homeButtonDiv.classList = 'navButton';
            homeButtonDiv.id = 'homeTabBtn';
        } else if (i == 1) {
            const menuButtonDiv = document.createElement('div')
            headerNavItems.appendChild(menuButtonDiv).innerText = 'Menu';
            menuButtonDiv.classList = 'navButton';
            menuButtonDiv.id = 'menuTabBtn';
        } else if (i == 2) {
            const contactButtonDiv = document.createElement('div')
            headerNavItems.appendChild(contactButtonDiv).innerText = 'Contact';
            contactButtonDiv.classList = 'navButton';
            contactButtonDiv.id = 'contactTabBtn';
        }
    };

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

function createFooter() {
    const footerContainer = document.createElement('div');
    contentModule.appendChild(footerContainer);
    footerContainer.class = 'footer';
    footerContainer.id = 'footer';
    footerContainer.innerHTML = 'Jonathan Andrade Valenzuela 2022';
    
    let gitLogo = document.createElement('img');
    gitLogo.src = '../src/images/git.png';
    gitLogo.id = 'gitFooterLogo';
    footerContainer.appendChild(gitLogo);

    gitLogo.addEventListener('click', function() {
        location.href = 'https://github.com/jmv1006';
    })
    
}

// <---- Determine Which Page is Loaded ---->
let activePage = 'main';
loadActivePage(activePage);

function loadActivePage(activePage) {
    switch(activePage) {
        case('main'):
            contentModule.innerText ='';
            createHeader();
            mainPageLoad();
            createFooter();
            break;
        case('menu'):
            contentModule.innerText = '';
            createHeader();
            menuPageLoad();
            createFooter();
            break;
        case('contact'):
            contentModule.innerText = '';
            createHeader();
            contactPageLoad();
            createFooter();
            break;
    }
};

export {loadActivePage};






