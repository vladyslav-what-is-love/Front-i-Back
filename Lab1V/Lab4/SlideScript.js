
// Вперед/назад стрілочки
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Кружочки обробник
function currentSlide(n) {
  showSlides(slideIndex = n);
}
/*
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/

var slideIndex = 0;



function showSlides() {
var seconds = document.getElementById('number').value;
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  var timing = seconds + "000";
  console.log(timing);
  setTimeout(showSlides, timing); 
}