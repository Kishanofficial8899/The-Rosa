const SelectElement = (element) => {
  return document.querySelector(element);
};
let MenuToggle = SelectElement('.menu-toggle');
let body = SelectElement('body');
let bars = SelectElement('.fa-bars');
let Navlink = document.querySelectorAll('.nav-link');

MenuToggle.addEventListener('click', function() {
  body.classList.toggle('open');
});

window.sr = ScrollReveal();

//Scroll Revel
sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});
sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
});
sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
});
sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
});
<<<<<<< HEAD
=======


>>>>>>> c189c77a093872366bd66242a91d70d3533f02fc
