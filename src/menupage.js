import {contentModule} from './index.js';
import {loadActivePage} from './index.js';

function createMenuPageContent() {
    const menuPageMainContainer = document.createElement('div');
    contentModule.appendChild(menuPageMainContainer);
    menuPageMainContainer.classList = 'PageMainContainer';
    menuPageMainContainer.innerHTML = 'Menu';
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

