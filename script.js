// Smooth scroll (same page like video)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Active menu on scroll
window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('.navbar a');

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(a => a.classList.remove('active'));
      document
        .querySelector('.navbar a[href="#' + id + '"]')
        .classList.add('active');
    }
  });
});