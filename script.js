const toggleBtn = document.getElementById('darkToggle');
const body = document.body;
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');
const scrollBtn = document.getElementById('scrollToTopBtn');

if (toggleBtn) {
  toggleBtn.onclick = () => {
    body.classList.toggle('dark');
  };
}

if (menuIcon && navLinks) {
  menuIcon.onclick = () => {
    navLinks.classList.toggle('show');
  };
}

if (scrollBtn) {
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}
