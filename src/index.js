import './style.css';
import {mainPageLoad} from './homepage.js';
import {menuPageLoad} from './menupage.js';


mainPageLoad();

const menuTab = document.getElementById('menuTabBtn');
menuTab.addEventListener('click', function() {
    menuPageLoad();
});
