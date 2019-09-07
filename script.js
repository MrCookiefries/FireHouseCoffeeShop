$(document).ready(() => {
  //Nav Routes
  $("#home").on('click', () => {
    window.location.href = "./index.html";
  })

  $("#about").on('click', () => {
    window.location.href = "./about.html";
  })

  $("#menu").on('click', () => {
    window.location.href = "./menu.html";
  })
  //Mobile Nav Support
  $('.mobile').on('click', () => {
    $('.nav .desktop').slideToggle();
    $('.navigationSymbol').toggleClass('rotate');
  })
  //Button Routes
  $('.yep button').on('click', () => {
    $('.yep button').css({
      "top": "2px",
      "left": "2px"
    });
    setTimeout(() => {
      window.open("https://cfozarks.org/yep/", "_blank");
    }, 200)
  })
})