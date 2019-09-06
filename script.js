$(document).ready(() => {

  $("#home").on('click', () => {
    window.location.href = "./index.html";
  })

  $("#about").on('click', () => {
    window.location.href = "./about.html";
  })

  $("#menu").on('click', () => {
    window.location.href = "./menu.html";
  })

  $('.mobile').on('click', () => {
    $('.nav .desktop').slideToggle();
    $('.navigationSymbol').toggleClass('rotate');
  })

})