var slideIndex = 1;
showSlides (slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    console.log(slides.length);
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < dots.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

document.getElementById("hamburger-menu").addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
    var x = document.getElementById("nav-links");

    if (x.classList.contains("hidden-nav-links")) {
        x.classList.remove("hidden-nav-links");
    }
    else {
        x.classList.add("hidden-nav-links");
    }

     
    console.log("Hello, World!")
}