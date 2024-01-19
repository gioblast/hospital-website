document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.checkbtn');
  const navLinks = document.querySelector('.nav__links');

  menuButton.addEventListener('click', function () {
    navLinks.classList.toggle('show-links');
  });
});

function redirectToLogin(){
  let nuevaPestana = window.open("/layouts/login.html");
  nuevaPestana.focus();
}
