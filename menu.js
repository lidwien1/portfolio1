var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav-links');

function openMenu(){
    nav.classList.toggle('nav-active');
}

burger.addEventListener('click', openMenu);