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
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlides(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length)
    slideIndex = 1;
    if(n < 1)
    slideIndex = slides.length;
    
    for(i = 0; i < slides.length ; i++)
    {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active"
}