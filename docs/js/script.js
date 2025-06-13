// Initialize AOS with custom settings
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// Dark Mode Toggle
const toggle = document.getElementById('toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggle.textContent = isDark ? '☀️' : '🌙';
  
  // Save theme preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Add smooth transition effect
  body.style.transition = 'all 0.3s ease';
  setTimeout(() => {
    body.style.transition = '';
  }, 300);
});

// Enhanced Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 300);
  }, 1000);
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    navbar.style.transform = 'translateY(0)';
  }
  
  // Add background blur when scrolled
  if (currentScroll > 50) {
    navbar.style.background = body.classList.contains('dark') 
      ? 'rgba(15, 23, 42, 0.95)' 
      : 'rgba(255, 255, 255, 0.95)';
  } else {
    navbar.style.background = body.classList.contains('dark') 
      ? 'rgba(15, 23, 42, 0.8)' 
      : 'rgba(255, 255, 255, 0.8)';
  }
  
  lastScroll = currentScroll;
});

// Add typing effect to the main heading
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect when page loads
setTimeout(() => {
  const mainHeading = document.querySelector('#home h2');
  if (mainHeading) {
    const originalText = mainHeading.textContent;
    typeWriter(mainHeading, originalText, 80);
  }
}, 1200);
