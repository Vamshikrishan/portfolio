// small helpers: year and mobile nav + smooth scrolling
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');
toggle && toggle.addEventListener('click', () => {
  nav.style.display = (nav.style.display === 'block') ? '' : 'block';
});

// smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // hide mobile nav after click
      if (window.innerWidth <= 800 && nav) nav.style.display = '';
    }
  });
});
