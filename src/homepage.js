import {contentModule} from './index.js';
import {loadActivePage} from './index.js';

//<-- Main Info Area -->
function createMainContent() {
    //creates main area container
    const homePageMainContainer = document.createElement('div');
    contentModule.appendChild(homePageMainContainer);
    homePageMainContainer.classList = 'PageMainContainer';

    const imgContainer = document.createElement('div');
    homePageMainContainer.appendChild(imgContainer);
    imgContainer.id = 'imgContainer';

    const homePageMainImage = document.createElement('img');
    imgContainer.appendChild(homePageMainImage);
    homePageMainImage.id = 'homePageMainImage';
    homePageMainImage.src = "../src/images/background.jpg"

    const homePageImageText = document.createElement('div');
    homePageMainContainer.appendChild(homePageImageText);
    homePageImageText.id = "homePageImgTxt";
    homePageImageText.innerHTML = 'Gourmet Dining At Sea'

    const homePageInfoContainer = document.createElement('div');
    homePageMainContainer.appendChild(homePageInfoContainer);
    homePageInfoContainer.id = "homePageInfo";

    const aboutHeader = document.createElement('div');
    homePageInfoContainer.appendChild(aboutHeader);
    aboutHeader.id = 'aboutHeader';
    aboutHeader.innerHTML = 'THE MOST GOURMET DINING EXPERIENCE AT SEA WITH A TOUCH OF MAGIC';

    const aboutParagraph = document.createElement('div');
    homePageInfoContainer.appendChild(aboutParagraph);
    aboutParagraph.id = "aboutParagraph"
    aboutParagraph.innerHTML = `The Restaurant was created in order to give Disney Cruise Line guests 
    a gourmet dining experience without having to leave the magic. Our chefs from around the world pride 
    themselves on their world class cuisine that is sure to leave you wanting more. Our cuisine has deep roots
    in the traditional cuisines of Central & South America, with a modern twist!`

    const reservationButton = document.createElement('button');
    homePageInfoContainer.appendChild(reservationButton);
    reservationButton.id = "homePageResBtn";
    reservationButton.innerHTML = 'Make Reservations';

};

//Loads page
function mainPageLoad() {
    createMainContent();
    mainPageEventList();
};

export {mainPageLoad};

function mainPageEventList() {
    document.getElementById('menuTabBtn').addEventListener('click', function() {
        loadActivePage('menu');
    });
};
