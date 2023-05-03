const links = document.querySelectorAll('.scroll-to-section a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({behavior: 'smooth'});
  });
});
