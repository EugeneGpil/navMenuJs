"use strict";

var navMobileButton = document.getElementById("mobile-nav-button");
var navMobile = document.getElementById("nav-mobile");

function toggle(element) {
    element.classList.remove("hidden");
    element.classList.toggle("bounceInLeft");
    element.classList.toggle("bounceOutLeft");
}

navMobileButton.addEventListener('click', function () { toggle(navMobile) });



var secondMenuElement = document.getElementById("second-menu-element");
var submenu = document.getElementById("submenu");

secondMenuElement.addEventListener('click', function () { toggle(submenu) });



var navMobileElementWithSubmenu = document.getElementById("nav-mobile__element-with-submenu");
var navMobileElementSubmenuContainer = document.getElementById("nav-mobile__element-submenu-container");

navMobileElementWithSubmenu.addEventListener('click', function () {
    navMobileElementSubmenuContainer.classList.toggle("hidden");
});