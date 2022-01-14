import {contentModule} from './index.js';
import {loadActivePage} from './index.js';

function createContactPageContent() {
    const contactPageMainContainer = document.createElement('div');
    contentModule.appendChild(contactPageMainContainer);
    contactPageMainContainer.id = 'contactPageMainContainer';
    contactPageMainContainer.innerText = 'Contact';
}

function contactPageLoad() {
    createContactPageContent();
    contactPageEventList();
};

export {contactPageLoad};

function contactPageEventList() {
    document.getElementById('homeTabBtn').addEventListener('click', function() {
        loadActivePage('main');
    });
    document.getElementById('menuTabBtn').addEventListener('click', function() {
        loadActivePage('menu');
    })
};
