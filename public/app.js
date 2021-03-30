const navLinks = document.querySelector('.nav-links');
const toglBtn = document.querySelector('.tgl-btn');
const navbar = document.querySelector('.navbar');

toglBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('nav-open');
    toglBtn.classList.toggle('tgl-btn-open')
})

window.addEventListener('scroll',()=>{
    navbar.classList.toggle('navbar-scroll', window.scrollY > 0);
})

//Image slide JS code
