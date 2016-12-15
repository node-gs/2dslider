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
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className
      .replace(" active", "")
      .replace(" active-previous", "")
      .replace(" active-next", "");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // slides[slideIndex-1].style.display = "block";

  slides[slideIndex-1].className += " active";

  if(slideIndex < slides.length) {slides[slideIndex].className += " active-next";}

  if(slideIndex > 1) { slides[slideIndex-2].className += " active-previous";}

  dots[slideIndex-1].className += " active";
}