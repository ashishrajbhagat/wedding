// Countdown Timer
const weddingDate = new Date("2025-04-16T00:00:00").getTime();

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
