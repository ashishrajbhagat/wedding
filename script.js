// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 2000);
}

// Countdown Timer
const weddingDate = new Date("2025-04-30T00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "The Wedding Day is Here!";
  }
}, 1000);

document.querySelector('.scroll-down').addEventListener('click', function() {
  const target = document.querySelector(this.getAttribute('data-target'));
  target.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // Prevent right click
});

document.addEventListener("selectstart", (event) => {
  event.preventDefault(); // Prevent text selection
});