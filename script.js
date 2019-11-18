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
  //Guide Routes
  $("#guide-address").on('click', event => {
    window.location.href = "./about.html#location-address";
  })
  $("#guide-map").on('click', event => {
    window.location.href = "./about.html#location-map";
  })
  $("#guide-drinks").on('click', event => {
    window.location.href = "./menu.html#location-drinks";
  })
  $("#guide-food").on('click', event => {
    window.location.href = "./menu.html#location-food";
  })
  $("#guide-reviews").on('click', event => {
    window.location.href = "./about.html#location-reviews";
  })
  $("#guide-about").on('click', event => {
    window.location.href = "./about.html#location-about";
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
  //Guide Figure Hover
  $(".guides div figure").on("mouseover", event => {
    $(event.currentTarget).parent().find("span").addClass("current");
    $(event.currentTarget).addClass("current");
  })
  $(".guides div figure").on("mouseleave", event => {
    $(event.currentTarget).parent().find("span").removeClass("current");
    $(event.currentTarget).removeClass("current");
  })
  $(".button-holder div figure").on("mouseover", event => {
    $(event.currentTarget).parent().find("span").addClass("current");
    $(event.currentTarget).addClass("current");
  })
  $(".button-holder div figure").on("mouseleave", event => {
    $(event.currentTarget).parent().find("span").removeClass("current");
    $(event.currentTarget).removeClass("current");
  })
  //Dynamic Menu
  for (let i = 0; i < menu.length; i++) {
    addMenuItem(menu[i]);
  }
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
    },
    darian: {
      words: "Absolutely fantastic people, great food.",
      name: "Darian B.",
      index: 3,
      slide: 4
    },
    sasha: {
      words: "Pleasant atmosphere, great service, good prices.",
      name: "Sasha K.",
      index: 4,
      slide: 5
    },
    sarah: {
      words: "Nice spot to hang out after school.",
      name: "Sarah W.",
      index: 5,
      slide: 6
    }
  }
  slideIndex += num;
  if (slideIndex > Object.keys(quotes).length - 1) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = Object.keys(quotes).length - 1;
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
    case 3:
    switchSlide(num);
    setTimeout(() => {
      $('#quote').html(quotes.darian.words);
      $('#quote-author').html(quotes.darian.name);
      $('#slide-number').html(quotes.darian.slide);
      displaySlide(num);
    }, 600)
    break;
    case 4:
    switchSlide(num);
    setTimeout(() => {
      $('#quote').html(quotes.sasha.words);
      $('#quote-author').html(quotes.sasha.name);
      $('#slide-number').html(quotes.sasha.slide);
      displaySlide(num);
    }, 600)
    break;
    case 5:
    switchSlide(num);
    setTimeout(() => {
      $('#quote').html(quotes.sarah.words);
      $('#quote-author').html(quotes.sarah.name);
      $('#slide-number').html(quotes.sarah.slide);
      displaySlide(num);
    }, 600)
    break;
    default:
    console.log("Error with quotes panel.");
    break;
  }
}
function addMenuItem(item) {
  $(`#menu-${item.type}`).append(`<div class="wrapper scroll">
  <figure>
  <div class="top">
  <div class="photo">
  <img src="./assets/${item.path}" alt="${item.name}">
  </div>
  <div class="text">
  <p>${item.name}</p>
  <p>Price - $${item.cost}</p>
  </div>
  </div>
  <hr>
  <p class="description">${item.info}</p>
  </figure>
  </div>`)
}
const menu = [{name: "Coffee", cost: "1.00", path: "coffee.png", type: "coffee", info: "Basic Cup of Joe"},
{type: "coffee", name: "Iced Coffee", cost: "2.00", path: "icedCoffee.png", info: "Like Coffee, But Cold"},
{type: "coffee", name: "Espresso", cost: "2.50", path: "espresso.png", info: "For Your Caffeine Fix"},
{type: "coffee", name: "Latte", cost: "2.50", path: "latte.png", info: "Like Espresso, But Foamy"},
{type: "coffee", name: "Starbucks Coffee", cost: "2.50", path: "starbucks.png", info: "See Drink Cooler"},
{type: "main", name: "Chicken & Greens Panini", cost: "3.00", path: "chickenNGreensPanini.png", info: "Without Chips or Soda, the Price is $2.50"},
{type: "main", name: "Cheese Panini", cost: "3.00", path: "cheesePanini.png", info: "Without Chips or Soda, the Price is $2.50"},
{type: "main", name: "Tom/Mozz Panini", cost: "3.00", path: "tomMozzPanini.png", info: "Just the Greens"},
{type: "main", name: "Chicken Quesadilla", cost: "2.50", path: "chickenQuesadilla.png", info: "Cheesy Frisbee with Chicken"},
{type: "main", name: "Cheese Quesadilla", cost: "2.00", path: "cheeseQuesadilla.png", info: "Cheesy Frisbee"},
{type: "main", name: "Pepperoni Bosco Sticks", cost: "2.50", path: "pepperoniBoscoSticks.png", info: "Cheese Stick with Meat"},
{type: "main", name: "Cheese Bosco Sticks", cost: "2.00", path: "cheeseBoscoSticks.png", info: "Like a Big Cheese Stick"},
{type: "main", name: "Chicken Wrap", cost: "3.00", path: "chickenWrap.png", info: "Without Chips or Soda, the Price is $2.50"},
{type: "main", name: "Beef Taco Burrito", cost: "3.00", path: "beefTacoBurrito.png", info: "Burrito Taco Style. Only Available on Mondays"},
{type: "main", name: "Chicken Taco Burrito", cost: "3.00", path: "chickenTacoBurrito.png", info: "Burrito Taco Style. Only Available on Mondays"},
{type: "non-coffee", name: "Shake", cost: "2.50", path: "shake.png", info: "See Shake Options In Shop"},
{type: "non-coffee", name: "Smoothie", cost: "2.50", path: "fruitSmoothie.png", info: "Real Fruit Taste"},
{type: "non-coffee", name: "Hot Chocolate", cost: "2.00", path: "hotChocolate.png", info: "Choice of Water or Milk"},
{type: "non-coffee", name: "Steamer", cost: "2.50", path: "steamer.png", info: "Hot Milk"},
{type: "non-coffee", name: "Powerade", cost: "1.50", path: "powerade.png", info: "See Drink Cooler"},
{type: "non-coffee", name: "Bottled Soda", cost: "1.50", path: "jonesSoda.png", info: "See Drink Cooler"},
{type: "non-coffee", name: "Canned Soda", cost: "1.00", path: "soda.png", info: "See Drink Cooler"},
{type: "sides", name: "Chicken Poppers", cost: "2.50", path: "chickenPoppers.png", info: "Bite Sized Chicken"},
{type: "sides", name: "Cheese Balls", cost: "2.50", path: "cheeseBalls.png", info: "Fried Cheese Cubes"},
{type: "sides", name: "Tater Tots", cost: "1.50", path: "taterTots.png", info: "Bite Sized Hashbrowns"},
{type: "sides", name: "French Fries", cost: "2.00", path: "frenchFries.png", info: "Greek Seasoning"},
{type: "sides", name: "Fried Pickles", cost: "2.50", path: "friedPickles.png", info: "Fried in the Air"},
{type: "sides", name: "Cookie", cost: "0.50", path: "cookie.png", info: "See Pastry Selection"},
{type: "sides", name: "Pastries", cost: "_.__", path: "pastries", info: "See Pastry Selection. The price will vary"},
{type: "sides", name: "Chips", cost: "1.00", path: "chips.png", info: "Your Choice of Chips"},
{type: "sides", name: "Beef Ravioli", cost: "2.50", path: "toastedBeefRavioli.png", info: "Toasted Ravioli"}];
