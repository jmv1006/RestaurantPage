(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var i=t(81),o=t.n(i),r=t(645),a=t.n(r),c=t(667),s=t.n(c),d=new URL(t(536),t.b),l=a()(o()),p=s()(d);l.push([n.id,"@font-face {\n    font-family: 'robotoSlab';\n    src: url("+p+") format('woff');\n}\n\n* {\n    font-family: 'robotoSlab';\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    background-color: #F8F5EB;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n#header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #F8F5EB;\n    width: 100%;\n    height: 100px;\n    gap: 30px;\n    border: 2px solid black;\n    position: fixed;\n    z-index: 100;\n}\n\n.headerTitle {\n    font-size: 25px;\n    font-weight: bold;\n    margin-left: 50px;\n}\n\n.navItems {\n    display: flex;\n    gap: 70px;\n    margin-right: 50px;\n}\n\n.navButton {\n    font-size: 20px;\n}\n\n.navButtonHover {\n    font-size: 20px;\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.PageMainContainer {\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n}\n\n#imgContainer {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    overflow: hidden;\n    margin: none;\n}\n\n#homePageMainImage {\n    display: flex;\n    max-width: 1500px;\n    height: calc(100vh - 55px);\n    max-height: 900px;\n    min-height: 400px;\n    overflow: hidden;\n}\n\n#homePageImgTxt {\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    padding-bottom: 400px;\n    font-size: 6vh;\n    font-weight: bold;\n}\n\n#homePageInfo {\n    width: 100%;\n    height: 250px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    padding-top: 25px;\n    gap:25px;\n    padding-bottom: 100px;\n}\n\n#aboutHeader {\n    display: flex;\n    font-size: 3vh;\n    font-weight: bold;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n}\n\n#aboutParagraph {\n    display: flex;\n    font-size: 2vh;\n    text-align: center;\n}\n\n#homePageResBtn {\n    margin-top: 15px;\n    cursor: pointer;\n    width: 40vh;\n    height: 15vh;\n    background-color: #242424;\n    color: white;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\n#homePageResBtn:hover {\n    cursor: pointer;\n    background-color: #454545;\n}\n\n#footer {\n    position: fixed;\n    display: flex;\n    left: 0;\n    bottom: 0;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    min-height: 35px;\n    max-height: 35px;\n    background-color: #adadad;\n    color: white;\n    gap: 5px;\n}\n\n#gitFooterLogo {\n    width: 2%;\n    height: auto;\n    cursor: pointer;\n}\n\n\n#menuPageMainContainer {\n    height: 100vh;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    padding: 50px;\n    gap: 30px;\n    border: 2px solid black;\n    border-radius: 15px;\n    margin-top: 150px;\n    margin-bottom: 150px;\n}\n\n.menuHeadingContainer {\n    text-align: center;\n    margin-bottom: 15px;\n}\n\n.menuHeading {\n    font-weight: bold;\n    font-size: 20px;\n    text-decoration: underline;\n}\n\n.menuSectionContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n#menuHeaderContainer {\n    border: 2px solid black;\n    border-radius: 10px;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\n#menuHeader {\n    font-size: 30px;\n    font-weight: bolder;\n    text-decoration: underline;\n}\n\n#menuDesc {\n    font-size: 15px;\n    font-style: italic;\n    color: #8a8a8a;\n    text-align: center;\n}\n\n#startersItemContainer {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-column-gap: 100px;\n    grid-row-gap: 15px;\n    text-decoration: underline;\n}\n\n#mainCourseItemContainer {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    grid-column-gap: 150px;\n    grid-row-gap: 15px;\n    text-decoration: underline\n}\n\n#dessertItemContainer {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-column-gap: 85px;\n    grid-row-gap: 15px;\n    text-decoration: underline;\n}\n",""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);i&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],c=0;c<n.length;c++){var s=n[c],d=i.base?s[0]+i.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,i);i.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var c=t(r[a]);e[c].references--}for(var s=i(n,o),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},536:(n,e,t)=>{n.exports=t.p+"da922a97da5962bdb2f2.woff"}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href;var i={};(()=>{t.d(i,{d:()=>f,g:()=>C});var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),c=t.n(a),s=t(565),d=t.n(s),l=t(216),p=t.n(l),u=t(589),m=t.n(u),h=t(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=document.getElementById("content");function v(){const n=document.createElement("div");f.appendChild(n),n.id="header";const e=document.createElement("div");n.appendChild(e).innerHTML="The Restaurant",e.classList="headerTitle";const t=document.createElement("div");n.appendChild(t).classList="navItems";for(let n=0;n<3;n++)if(0==n){const n=document.createElement("div");t.appendChild(n).innerText="Home",n.classList="navButton",n.id="homeTabBtn"}else if(1==n){const n=document.createElement("div");t.appendChild(n).innerText="Menu",n.classList="navButton",n.id="menuTabBtn"}else if(2==n){const n=document.createElement("div");t.appendChild(n).innerText="Contact",n.classList="navButton",n.id="contactTabBtn"}const i=document.querySelectorAll(".navButton");for(let n=0;n<i.length;n++)i[n].addEventListener("mouseenter",(function(){this.classList="navButtonHover"})),i[n].addEventListener("mouseleave",(function(){this.classList="navButton"}))}function x(){const n=document.createElement("div");f.appendChild(n),n.class="footer",n.id="footer",n.innerHTML="Jonathan Andrade Valenzuela 2022";let e=document.createElement("img");e.src="../src/images/git.png",e.id="gitFooterLogo",n.appendChild(e),e.addEventListener("click",(function(){location.href="https://github.com/jmv1006"}))}function C(n){switch(n){case"main":f.innerText="",v(),function(){const n=document.createElement("div");f.appendChild(n),n.classList="PageMainContainer";const e=document.createElement("div");n.appendChild(e),e.id="imgContainer";const t=document.createElement("img");e.appendChild(t),t.id="homePageMainImage",t.src="../src/images/background.jpg";const i=document.createElement("div");n.appendChild(i),i.id="homePageImgTxt",i.innerHTML="Gourmet Dining At Sea";const o=document.createElement("div");n.appendChild(o),o.id="homePageInfo";const r=document.createElement("div");o.appendChild(r),r.id="aboutHeader",r.innerHTML="THE MOST GOURMET DINING EXPERIENCE AT SEA WITH A TOUCH OF MAGIC";const a=document.createElement("div");o.appendChild(a),a.id="aboutParagraph",a.innerHTML="The Restaurant was created in order to give Disney Cruise Line guests \n    a gourmet dining experience without having to leave the magic. Our chefs from around the world pride \n    themselves on their world class cuisine that is sure to leave you wanting more. Our cuisine has deep roots\n    in the traditional cuisines of Central & South America, with a modern twist!";const c=document.createElement("button");o.appendChild(c),c.id="homePageResBtn",c.innerHTML="Make Reservations"}(),document.getElementById("menuTabBtn").addEventListener("click",(function(){C("menu")})),x();break;case"menu":f.innerText="",v(),function(){const n=document.createElement("div");f.appendChild(n),n.id="menuPageMainContainer";const e=document.createElement("div");n.appendChild(e),e.id="menuHeaderContainer";const t=document.createElement("div");e.appendChild(t),t.id="menuHeader",t.innerHTML="Dinner Menu";const i=document.createElement("div");e.appendChild(i),i.id="menuDesc",i.innerHTML="All prices are in USD and do not include\n    gratuity. If you wish to make any altercations, feel free to let your server\n    know.";const o=document.createElement("div");n.appendChild(o),o.classList="menuSectionContainer";const r=document.createElement("div");o.appendChild(r),r.classList="menuHeadingContainer";const a=document.createElement("div");r.appendChild(a),a.classList="menuHeading",a.innerHTML="Starters";const c=document.createElement("div");o.appendChild(c),c.id="startersItemContainer";for(let n=0;n<4;n++){let e=document.createElement("div");e.id=`starter${n}`,c.appendChild(e)}let s=[];class d{constructor(n,e){this.name=n,this.price=e}}const l=new d("Chicken Wings","13");s.push(l);const p=new d("Garlic Bread","9");s.push(p);const u=new d("House Salad","11");s.push(u);const m=new d("Sliders","14");s.push(m);for(let n=0;n<s.length;n++)document.getElementById(`starter${n}`).innerHTML=`${s[n].name}......${s[n].price}`;const h=document.createElement("div");n.appendChild(h),h.classList="menuSectionContainer";const g=document.createElement("div");h.appendChild(g),g.classList="menuHeadingContainer";const v=document.createElement("div");g.appendChild(v),v.classList="menuHeading",v.innerHTML="Main Course";const x=document.createElement("div");h.appendChild(x),x.id="mainCourseItemContainer";for(let n=0;n<8;n++){let e=document.createElement("div");e.id=`maincourse${n}`,x.appendChild(e)}let C=[];class b{constructor(n,e){this.name=n,this.price=e}}const w=new b("New York Steak","34");C.push(w);const y=new b("Deluxe Angus Cheeseburger","23");C.push(y);const E=new b("Grilled Lemon Salmon","26");C.push(E);const T=new b("Seaside Pasta with Shrimp","24");C.push(T);const L=new b("Filet Mignon & Lobster Tail","54");C.push(L);const M=new b("Premium Macaroni and Cheese","24");C.push(M);const H=new b("Vegan Pizza","26");C.push(H);const I=new b("Escargo","39");C.push(I);for(let n=0;n<C.length;n++)document.getElementById(`maincourse${n}`).innerHTML=`${C[n].name}......${C[n].price}`;const S=document.createElement("div");n.appendChild(S),S.classList="menuSectionContainer";const B=document.createElement("div");S.appendChild(B),B.classList="menuHeadingContainer";const P=document.createElement("div");B.appendChild(P),P.classList="menuHeading",P.innerHTML="Dessert";const k=document.createElement("div");S.appendChild(k),k.id="dessertItemContainer";for(let n=0;n<4;n++){let e=document.createElement("div");e.id=`dessert${n}`,k.appendChild(e)}let j=[];class A{constructor(n,e){this.name=n,this.price=e}}const $=new A("Chocolate Cake","12");j.push($);const z=new A("French Vanilla Ice Cream","8");j.push(z);const F=new A("Creme Brulee","17");j.push(F);const R=new A("Chocolate Flan","11");j.push(R);for(let n=0;n<j.length;n++)document.getElementById(`dessert${n}`).innerHTML=`${j[n].name}......${j[n].price}`;const D=document.createElement("div");n.appendChild(D),D.id="drinksContainer"}(),document.getElementById("homeTabBtn").addEventListener("click",(function(){C("main")})),x()}}C("main")})()})();