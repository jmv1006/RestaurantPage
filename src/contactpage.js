import {contentModule} from './index.js';
import {loadActivePage} from './index.js';

function createContactPageContent() {
    const contactPageMainContainer = document.createElement('div');
    contentModule.appendChild(contactPageMainContainer);
    contactPageMainContainer.id = 'contactPageMainContainer';

    const contactPageImgContainer = document.createElement('div');
    contactPageMainContainer.appendChild(contactPageImgContainer);
    contactPageImgContainer.id = 'contactImgContainer';

    const contactPageImg = document.createElement('img');
    contactPageImgContainer.appendChild(contactPageImg)
    contactPageImg.id = 'contactPageImg'
    contactPageImg.src = '../src/images/fantasyatrium.jpeg'

    const locationContainer = document.createElement('div');
    contactPageMainContainer.appendChild(locationContainer);
    locationContainer.id = 'locationContainer';

    const locationContainerHead = document.createElement('div');
    locationContainer.appendChild(locationContainerHead);
    locationContainerHead.classList = 'contactHeader';
    locationContainerHead.innerHTML = 'Location';

    const locationContainerBody = document.createElement('div');
    locationContainer.appendChild(locationContainerBody);
    locationContainerBody.classList = 'contactBody';
    locationContainerBody.innerHTML = `We are located on deck 3 of the Disney Fantasy
    cruise ship near the main atrium. We are open for lunch & dinner on all days of a given itinerary
    except for debarkation day.`;

    const reservationInfoContainer = document.createElement('div');
    contactPageMainContainer.appendChild(reservationInfoContainer);
    reservationInfoContainer.id = 'reservationContainer';

    const reservationContainerHead  = document.createElement('div');
    reservationInfoContainer.appendChild(reservationContainerHead);
    reservationContainerHead.classList = 'contactHeader';
    reservationContainerHead.innerHTML = 'Reservation Info';

    const reservationContainerBody = document.createElement('div');
    reservationInfoContainer.appendChild(reservationContainerBody);
    reservationContainerBody.classList = 'contactBody';
    reservationContainerBody.innerHTML = 'info goes here';




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
    });
    document.getElementById('headerTitle').addEventListener('click', function() {
        loadActivePage('main');
    })
};
