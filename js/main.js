(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _swiper=require("./swiper");!function(){var e=document.querySelector(".container"),t=document.querySelector(".js-family-site-btn-wrap"),c=document.querySelector(".cultural-center-img-wrap .".concat("cultural-center-active")),r=document.querySelector(".js-cultural-center-btn.".concat("cultural-center-active"));function a(e,t){for(;!e.classList.contains(t);)if("BODY"==(e=e.parentNode).nodeName)return void(e=null);return e}e.addEventListener("click",function(e){a(e.target,"js-family-site-btn")&&!t.classList.contains("expand")?t.classList.add("expand"):t.classList.remove("expand");var n=a(e.target,"js-cultural-center-btn");if(n){var s=document.querySelector(".js-cultural-center-img-".concat(n.dataset.imgNum));c.classList.remove("cultural-center-active"),s.classList.add("cultural-center-active"),c=s,r.classList.remove("cultural-center-active"),n.classList.add("cultural-center-active"),r=n}}),window.addEventListener("DOMContentLoaded",function(){document.body.classList.remove("before-load")}),(0,_swiper.init)()}();

},{"./swiper":2}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=void 0;var init=function(){new Swiper(".intro-section .swiper",{effect:"fade",fadeEffect:{crossFade:!0},loop:!0,speed:600,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class="'.concat(i,'">').concat(e+1,"</span>")}}}),new Swiper(".monthly-section .swiper",{centeredSlides:!0,loop:!0,slidesPerView:"auto",spaceBetween:30,speed:800,slideToClickedSlide:!0,autoplay:{delay:3e3}}),new Swiper(".news-section .swiper",{loop:!0,slidesPerView:"auto",spaceBetween:10})};exports.init=init;

},{}]},{},[1]);
