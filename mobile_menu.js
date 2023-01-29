// --- Check initialization ---
console.log('Hello! Mobile menu scripts are connected.');

// --- Constants ---
const burgerNavbar = document.querySelector('.navigation__burger-navbar');
const burgerMenuButtton = document.querySelector('.burgerpill');
const burgerCrossButtton = document.querySelector('.burgerpill-cross');
const navPills = document.querySelectorAll('.navigation-navbar__mobile-pill'); // Collection of elements navigation pills

// --- Event handler for burger menu buttons ---
burgerMenuButtton.addEventListener('click', function () {
    burgerMenuButtton.classList.add('hiden');
    burgerCrossButtton.classList.remove('hiden');
    burgerNavbar.classList.remove('hiden');
    burgerNavbar.classList.add('activemenu');
});

burgerCrossButtton.addEventListener('click', function () {
    burgerCrossButtton.classList.add('hiden');
    burgerMenuButtton.classList.remove('hiden');
    burgerNavbar.classList.remove('activemenu');
    burgerNavbar.classList.add('hiden');
});

// Event handler for collection of elements
navPills.forEach((navPill) => navPill.addEventListener('click', function () {
    burgerCrossButtton.classList.add('hiden');
    burgerMenuButtton.classList.remove('hiden');
    burgerNavbar.classList.remove('activemenu');
    burgerNavbar.classList.add('hiden');
}));