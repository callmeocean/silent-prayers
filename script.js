// Smooth Scrolling for Hero Button and Section Navigation
document.querySelectorAll('.scroll-btn, .section-nav').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let target = this.getAttribute('href');
      const targetSection = document.querySelector(target);

      if (target == '#trailer') {
        document.getElementById('hero').style.display = 'none';

        let trailer = document.getElementById('trailer');

        trailer.style.display = 'flex';

        let player = new Vimeo.Player(trailer.querySelector('iframe'));

        player.play();

        setTimeout(() => { player.requestFullscreen(); }, 1000);
      }
      else {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

document.addEventListener('DOMContentLoaded', () => {
  let copyrightYear = document.getElementById('copyrightYear');

  copyrightYear.textContent = new Date().getFullYear();
});