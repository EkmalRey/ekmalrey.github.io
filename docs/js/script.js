// Init AOS
AOS.init();

// Dark Mode Toggle
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});
