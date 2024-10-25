// Smooth Scrolling for Hero Button and Section Navigation
document.querySelectorAll('.scroll-btn, .section-nav').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

document.addEventListener('DOMContentLoaded', () => {
  let copyrightYear = document.getElementById('copyrightYear');

  copyrightYear.textContent = new Date().getFullYear();
});