const monkMessages = [
  "WE ARE BREAKING OUR VOW OF SILENCE",
  "TALENT IS GIVEN TRUE SKILL IS EARNED",
  "BE FLEXIBLE TO CHANGE AND STURDY IN CONVICTION",
  "USE MANY SKILLS YET WORK AS ONE",
  "TO MASTER ANYTHING FIND INTEREST IN EVERYTHING",
  "INDIDUALS FLOURISH IF CULTURE AND WISDOM ARE SHARED",
  "TRAIN FOR PERFECTION BUT AIM FOR MORE",
  "TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE",
  "TEMPORARY SACRIFICE BRINGS LASTING RESULTS",
  "BECOME A MONK",
];

const disclaimerMessages = [
  "In Januray 2011, after a decade of digital, we opened the doors to our temple.",
  "Follow our noble eightfold path to digital enlightenment here.",
  "Interested in joining our monastery?",
  "Check out our openings on ",
  "Mail ons",
  "Facebook",
  "Twiiter",
];

let newPositionX = 0;
let slideIndex = 0;
var windowHeight = 0;
var windowWidth = 0;
const containerCarousel = document.getElementsByClassName("container-carousel");
const carousel = document.getElementsByClassName("carousels");
let nextDiv = document.getElementById("nextDiv");
let slide = document.getElementById("divSlide");
let introductionDiv = document.getElementById("introductionDiv");
let introductionImage = document.getElementById("introductionImage");
let introMessage2 = document.getElementById("introMessage2");
const slideMessages = document.getElementById("slideMessage");
const slideParagraph = document.getElementsByTagName("p");
let previousArrow = document.getElementsByClassName("prev");
let nextArrow = document.getElementsByClassName("next");
const buttons = document.getElementsByClassName("slide-button");
init();
messageOnSlide(slideIndex);
setDisclaimerMessages(slideIndex);

/* Calculate window dimensions */
function setWindowDimensions() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  document.body.style.height = windowHeight + "px";
  document.body.style.width = windowWidth + "px";
  document.body.style.margin = "0";
}
/* calculate window dimensions on resizing the window */
window.addEventListener("resize", setWindowDimensions, false);

/* Initial function to set window dimensions to other elements */
function init() {
  setWindowDimensions();
  nextDiv.style.height = containerCarousel[0].style.height =
    windowHeight + "px";
  nextDiv.style.backgroundSize = "8190px " + windowHeight + "px";
  introductionImage.style.transform = "scale(1.5)";
  introMessage2.style.display = "none";
  previousArrow[0].hidden = true;

  /* time delay after which to show the introduction message 'young padawan' */
  setTimeout(function () {
    introMessage2.style.display = "block";
    introMessage2.style.transition = "1s";
    introMessage2.style.left = "0";
  }, 3000);

  /* time delay after which to show the first slide at index 0 */
  setTimeout(function () {
    introductionDiv.style.display = "none";
    nextDiv.style.display = "block";
  }, 3500);
}

/* Function to set the current slide when going through them in random order */
function currentSlide(slideNumber) {
  let mapImageWithButtonPosition = slideNumber * -800;
  nextArrow[0].hidden = slideNumber === 9 ? true : false;
  previousArrow[0].hidden = slideNumber >= 1 && slideNumber < 10 ? false : true;
  calculateNewPosition(mapImageWithButtonPosition);
  styleMessagesOnSlide(slideNumber);
  messageOnSlide(slideNumber);
  setDisclaimerMessages(slideNumber);
  buttonEventListener(slideNumber);
}

/* Click on next arrow to go through the slides */
function plusSlides(n) {
  if (slideIndex === 9) {
    slideIndex = 0;
    nextSlide((slideIndex += n));
  } else {
    nextSlide((slideIndex += n));
  }
}

/* Click on previous arrow to go through the slides */
function minusSlides(n) {
  prevSlide((slideIndex += n));
}

/* Assign the background position for the bacground image on each slide */
function calculateNewPosition(position) {
  nextDiv.style.backgroundPositionX = position + "px";
}

/* Function to set the previous slide */
function prevSlide(slideNumber) {
  if (slideNumber > -1) {
    nextArrow[0].hidden = slideNumber === 9 ? true : false;
    previousArrow[0].hidden =
      slideNumber >= 1 && slideNumber < 10 ? false : true;
    newPositionX = newPositionX + 800;
    calculateNewPosition(newPositionX);
    styleMessagesOnSlide(slideNumber);
    messageOnSlide(slideNumber);
    setDisclaimerMessages(slideNumber);
    buttonEventListener(slideNumber);
  }
}

/* Function to set the next slide */
function nextSlide(slideNumber) {
  if (slideNumber >= 1 && slideNumber < 10) {
    nextArrow[0].hidden = slideNumber === 9 ? true : false;
    previousArrow[0].hidden = false;
    if (newPositionX === -7200) {
      newPositionX = 0;
      calculateNewPosition((newPositionX = newPositionX - 800));
    } else {
      calculateNewPosition((newPositionX = newPositionX - 800));
    }
    styleMessagesOnSlide(slideNumber);
    messageOnSlide(slideNumber);
    setDisclaimerMessages(slideNumber);
  } else {
    previousArrow[0].hidden = true;
  }
  buttonEventListener(slideNumber);
}

/* Style the messages shown on each slide */
function styleMessagesOnSlide(slideNumber) {
  slideMessages.className = "";
  slideMessages.className = "class" + slideNumber;
  switch (slideNumber) {
    case 1:
      slideMessages.style.top = "272px";
      slideMessages.style.left = "35px";
      break;

    case 2:
      slideMessages.style.top = "272px";
      slideMessages.style.left = "35px";
      break;

    case 3:
      slideMessages.style.top = "272px";
      slideMessages.style.left = "1150px";
      slideMessages.style.right = "0";
      break;

    case 4:
      slideMessages.style.top = "272px";
      slideMessages.style.left = "1150";
      slideMessages.style.right = "-10px";
      break;

    case 5:
      slideMessages.style.top = "255px";
      slideMessages.style.right = "-10px";
      break;

    case 6:
      slideMessages.style.top = "272px";
      slideMessages.style.left = "35px";
      break;

    case 7:
      slideMessages.style.top = "272px";
      slideMessages.style.left = "35px";
      break;

    case 8:
      slideMessages.style.top = "272px";
      slideMessages.style.left = "35px";
      break;

    case 9:
      slideMessages.style.top = "15px";
      slideMessages.style.left = "1200px";
      slideMessages.style.right = "0";
      break;

    default:
      slideMessages.style.top = "15px";
      slideMessages.style.left = "15px";
      slideMessages.style.right = "0";
  }
}

/* Show message on each slide */
function messageOnSlide(slideMessageNumber) {
  /* go through the length of monkMessages array */
  for (i = 0; i < monkMessages.length; i++) {
    if (slideMessageNumber === i) {
      slideParagraph[0].innerText = monkMessages[i];
    }
  }
}

/* Function to set disclaimer messages(in small fonts) on first and last slides */
function setDisclaimerMessages(slideNumber) {
  let mediaMonkLink = document.getElementById("siteUrl");
  for (let i = 0; i < disclaimerMessages.length; i++) {
    let disclaimers = document.getElementsByClassName("disclaimer" + i);
    let disclaimerClassNumber = disclaimers[0].className.substr(-1);

    if (slideNumber === 0) {
      if ((i === 0 || i === 1) && i == disclaimerClassNumber) {
        disclaimers[0].innerText = disclaimerMessages[i];
        disclaimers[0].hidden = false;
      } else {
        disclaimers[0].innerText = "";
        disclaimers[0].hidden = true;
      }
      mediaMonkLink.style.display = "none";
    } else if (slideNumber === 9) {
      if (i !== 0 && i !== 1 && i == disclaimerClassNumber) {
        disclaimers[0].innerText = disclaimerMessages[i];
        disclaimers[0].hidden = false;
      } else {
        disclaimers[0].innerText = "";
        disclaimers[0].hidden = true;
      }
      mediaMonkLink.style.display = "block";
    } else {
      disclaimers[0].innerText = "";
      disclaimers[0].hidden = true;
      mediaMonkLink.style.display = "none";
    }
  }
}

/* Button group to go through slides with a click */
function buttonEventListener(slideNumber) {
  if (slideNumber >= 0 && slideNumber < 10) {
    for (i = 0; i < buttons.length; i++) {
      if (slideNumber === i) {
        buttons[i].className += " active";
      } else {
        buttons[i].className = buttons[i].className.replace(" active", "");
      }
    }
  }
}
