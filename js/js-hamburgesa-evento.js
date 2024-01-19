document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.checkbtn');
    const navLinks = document.querySelector('.nav__links');

    menuButton.addEventListener('click', function () {
      navLinks.classList.toggle('show-links');
    });
  });

function redirigirLogin(){
  window.location.href='/layouts/login.html'
}