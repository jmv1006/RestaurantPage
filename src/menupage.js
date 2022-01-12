const contentModule = document.getElementById('content');
import {createHeader} from './homepage.js';
import {createFooter} from './homepage.js';



function menuPageLoad() {
    contentModule.innerText = '';
    createHeader();
    createFooter();
};


export {menuPageLoad};