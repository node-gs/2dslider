let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "").replace(" prev", "").replace(" next", "");
  }
  
  slides[slideIndex-1].className += " active";
  if(slideIndex < slides.length) {slides[slideIndex].className += " next";}
  if(slideIndex > 1) { slides[slideIndex-2].className += " prev";}
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    if (e.keyCode == '37') {
       plusSlides(-1);
    }
    else if (e.keyCode == '39') {
       plusSlides(1);
    }

}