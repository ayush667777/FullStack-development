// Menu toggle
const menuButton = document.getElementById('menu-button');
const navLinks = document.getElementById('nav-links');

function toggleMenu() {
  navLinks.classList.toggle('open');
  const isExpanded = navLinks.classList.contains('open');
  menuButton.setAttribute('aria-expanded', isExpanded);
  menuButton.textContent = isExpanded ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) toggleMenu();
  });
});

// Scroll progress bar
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const pct = (scrolled / height) * 100;
  progressBar.style.width = pct + '%';
});

// Contact form handling
const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');
if (contactForm && messageDiv) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    if (!nameInput || !emailInput) {
      messageDiv.textContent = 'Please fill out the required fields.';
      messageDiv.style.color = 'tomato';
      return;
    }
    // Mock successful submission
    messageDiv.textContent = 'Thank you! Your message has been received.';
    messageDiv.style.color = 'lightgreen';
    contactForm.reset();
  });
}

// Auto update year
document.getElementById('year').textContent = new Date().getFullYear();
