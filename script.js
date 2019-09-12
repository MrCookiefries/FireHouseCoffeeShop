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
  $('.yep figure').on('click', () => {
    $('.yep figure').css({
      "top": "2px",
      "left": "2px"
    });
    setTimeout(() => {
      window.open("https://cfozarks.org/yep/", "_blank");
    }, 200)
  })
  //Email & Phone Contacts
  $('.email').on("click", () => {
    window.open("mailto:tstory@stjschools.org?subject=Visitor%20Of%20The%20Firehouse%20Coffee%20Shop%20Website&body=Type%20Your%20Message%20Here...", "_blank");
  })

  $(".phone-number").on("click", () => {
    window.open("tel:+15732613707", "_blank");
  })
})