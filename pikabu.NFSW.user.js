// ==UserScript==
// @name         Pikabu NFSW bloor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Блюрит NFSW посты. А при кике на пост убирает блюр.
// @author       You
// @match        https://pikabu.ru/*
// @icon         https://www.google.com/s2/favicons?domain=pikabu.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
setInterval(function(){


if(typeof window.NSFWBlocked == "undefined"){
 window.addcss= function (css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) {   // IE
        s.styleSheet.cssText = css;
    } else {                // the world
        s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);
 }
window.addcss('.story__content.story__typography.need_bloor div {    filter: blur(1.5rem);}');
window.addcss('.story__content.story__typography.off_bloor div {    filter: blur(0) !important;}');
window.NSFWBlocked = true;

}

var elements = document.querySelectorAll('[data-tag="NSFW"]');
for (var i = 0; i < elements.length; i++) {
let needAdd = elements[i].parentElement.parentElement.querySelector('.story__content.need_bloor');
if(!needAdd){
if(elements[i].parentElement.parentElement.querySelector('.story__content')){
elements[i].parentElement.parentElement.querySelector('.story__content').classList.add("need_bloor");

elements[i].parentElement.parentElement.addEventListener("click", function(){this.querySelector('.story__content').classList.add("off_bloor")}, false);
}
}

}

},800);
    // Your code here...
})();