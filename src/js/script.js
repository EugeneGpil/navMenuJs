"use strict";

var navMobileButton = document.getElementById("mobile-nav-button");
var navMobile = document.getElementById("nav-mobile");

navMobileButton.addEventListener('click', function () {
    navMobile.classList.remove("hidden");
    navMobile.classList.toggle("bounceInLeft");
    navMobile.classList.toggle("bounceOutLeft");
});