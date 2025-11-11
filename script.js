// Set the target date and time
const targetDate = new Date("December 31, 2025 23:59:59").getTime();

// Update countdown every second
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display values
  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

  // When countdown reaches zero
  if (distance <= 0) {
    clearInterval(timer);
    document.querySelector(".timer").style.display = "none";
    document.getElementById("message").textContent = "🎉 Happy New Year 2026!";
  }
}, 1000);
