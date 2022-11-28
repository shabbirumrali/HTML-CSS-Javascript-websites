console.log("Hello World");

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})