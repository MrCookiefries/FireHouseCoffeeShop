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
// Review Quotes
let slideIndex = 0;

function changeSlides(num) {
  let quotes = {
    amaya: {
      words: "The support within the YEP community is endless, and has broadened my gratitude for humanity as a whole. Seeing the constant dedication to do the right thing for others can make a huge difference in the way a person perceives life. Helping others is a passion of mine, and YEP has made it easy for me.",
      name: "Amaya Eades",
      index: 0,
      slide: 1
    },
    jameson: {
      words: "Joining YEP was a stressful event for me, but it was one of the most important decisions of my life. I was not sure what to expect from the coffee shop, but what I got was a whole new family and even a new home. The experience of joining YEP has changed me as a person and for that I am grateful. I wouldn’t trade the crew I’ve become a part of for anything. The coffee shop benefited me so greatly, I continued volunteering there even after I graduated from highschool. The coffee shop creates an important experience for anyone who enters its doors. The people I’ve encountered working at the coffee shop have become some of the most important people in my life.",
      name: "Jameson Vannatta",
      index: 1,
      slide: 2
    },
    amber: {
      words: "To serve others in a supportive environment and make a positive impact on the community is something I’ll never forget. YEP was a place of personal growth, friendship, leadership, and a great learning experience.",
      name: "Amber Copeland",
      index: 2,
      slide: 3
    }
  }
  slideIndex += num;
  if (slideIndex > 2) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = 2;
  }

  function switchSlide(n) {
    if (n == 1) {
      $('.quote').hide("drop", {
        direction: "left",
        distance: "10vw"
      });
      $('.quote-author').hide("drop", {
        direction: "left",
        distance: "10vw"
      });
    } else {
      $('.quote').hide("drop", {
        direction: "right",
        distance: "10vw"
      });
      $('.quote-author').hide("drop", {
        direction: "right",
        distance: "10vw"
      });
    }
  }

  function displaySlide(n) {
    if (n == 1) {
      $('.quote').show("drop", {
        direction: "right",
        distance: "10vw"
      });
      $('.quote-author').show("drop", {
        direction: "right",
        distance: "10vw"
      });
    } else {
      $('.quote').show("drop", {
        direction: "left",
        distance: "10vw"
      });
      $('.quote-author').show("drop", {
        direction: "left",
        distance: "10vw"
      });
    }
  }
  switch (slideIndex) {
    case 0:
      switchSlide(num);
      setTimeout(() => {
        $('#quote').html(quotes.amaya.words);
        $('#quote-author').html(quotes.amaya.name);
        $('#slide-number').html(quotes.amaya.slide);
        displaySlide(num);
      }, 600)
      break;
    case 1:
      switchSlide(num);
      setTimeout(() => {
        $('#quote').html(quotes.jameson.words);
        $('#quote-author').html(quotes.jameson.name);
        $('#slide-number').html(quotes.jameson.slide);
        displaySlide(num);
      }, 600)
      break;
    case 2:
      switchSlide(num);
      setTimeout(() => {
        $('#quote').html(quotes.amber.words);
        $('#quote-author').html(quotes.amber.name);
        $('#slide-number').html(quotes.amber.slide);
        displaySlide(num);
      }, 600)
      break;
    default:
      console.log("Error with quotes panel.");
      break;
  }
}
const title = document.querySelectorAll("#main-title path");
for (let i = 0; i < title.length; i++) {
  console.log(`Letter ${i} is ${title[i].getTotalLength()}`);
}