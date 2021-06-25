// VARIABLES
const toggle = document.querySelector('#toggle');
const nav = document.querySelector('#nav');
// FUNCTIONS

// EVENTS
toggle.addEventListener('click', () => {
  if (nav.classList.contains('hide')) {
    nav.classList.remove('hide');
  } else {
    nav.classList.add('hide');
  }
});
