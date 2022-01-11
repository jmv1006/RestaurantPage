
const contentModule = document.getElementById('content');

function createHeader() {
    const homePageHeaderContainer = document.createElement('div');
    contentModule.appendChild(homePageHeaderContainer);
    homePageHeaderContainer.classList = 'header';
    
    for (let i=0; i < 3; i++) {
        if (i == 0) {
            const homeButtonDiv = document.createElement('div')
            homePageHeaderContainer.appendChild(homeButtonDiv).innerText = 'Menu';
        } else if (i == 1) {
            const menuButtonDiv = document.createElement('div')
            homePageHeaderContainer.appendChild(menuButtonDiv).innerText = 'Menu';
        } else if (i == 2) {
            const contactButtonDiv = document.createElement('div')
            homePageHeaderContainer.appendChild(contactButtonDiv).innerText = 'Menu';
        }
    };
};

function createMainContent() {
    const img = document.createElement('img');
    img.src = '../src/images/mexicanfood.jpeg';
    const homePageDescription = document.createElement('div');
    contentModule.appendChild(homePageDescription).innerText = 'Main Info';
    contentModule.appendChild(img);
}
function pageLoad() {
    createHeader();
    createMainContent();
};

export {pageLoad};