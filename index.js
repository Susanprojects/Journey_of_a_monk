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
let newPositionX = 0;
let slideIndex = 0;
var windowHeight = 0;
var windowWidth = 0;
const containerCarousel = document.getElementsByClassName("container-carousel");
const carousel = document.getElementsByClassName("carousels");
let nextDiv = document.getElementById("nextDiv");
let slide = document.getElementById("divSlide");
let introMessage2 = document.getElementById("introMessage2");
let previousArrow = document.getElementsByClassName("prev");
let nextArrow = document.getElementsByClassName("next");
init();
messageOnSlide(slideIndex);

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
  document.getElementById("introductionImage").style.transform = "scale(1.5)";
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
    document.getElementById("introductionDiv").style.display = "none";
    document.getElementById("nextDiv").style.display = "block";
  }, 5000);
}

/* Function to set the current slide when going through them in random order */
function currentSlide(n) {
  let mapImageWithButtonPosition = n * -800;
  calculateNewPosition(mapImageWithButtonPosition);
  styleMessagesOnSlide(n);
  messageOnSlide(n);
  buttonEventListener(n);
}

/* Click on next arrow to go through the slides */
function plusSlides() {
  if (slideIndex > 10) {
    let slideIndex = 0;
    nextSlide((slideIndex += 1));
  }
  nextSlide((slideIndex += 1));
}

/* Click on previous arrow to go through the slides */
function minusSlides() {
  prevSlide((slideIndex += -1));
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
    buttonEventListener(slideNumber);
  }
}

/* Function to set the next slide */
function nextSlide(slideNumber) {
  if (slideNumber >= 1 && slideNumber < 10) {
    nextArrow[0].hidden = slideNumber === 9 ? true : false;
    previousArrow[0].hidden = false;
    newPositionX = newPositionX - 800;
    calculateNewPosition(newPositionX);
    styleMessagesOnSlide(slideNumber);
    messageOnSlide(slideNumber);
  } else {
    previousArrow[0].hidden = true;
  }
  buttonEventListener(slideNumber);
}

/* Style the messages shown on each slide */
function styleMessagesOnSlide(slideNumber) {
  const slideMessages = document.getElementById("slideMessage");
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
  const slideParagraph = document.getElementsByTagName("p");
  /* go through the length of monkMessages array */
  for (i = 0; i < monkMessages.length; i++) {
    if (slideMessageNumber === i) {
      slideParagraph[0].innerText = monkMessages[i];
    }

    /* Check for messages in small fonts on the first and last slide*/
    if (slideMessageNumber === 0) {
      document.getElementsByClassName("disclaimer1")[0].hidden = false;
      document.getElementsByClassName("disclaimer2")[0].hidden = false;
      document.getElementsByClassName("disclaimer3")[0].hidden = true;
      document.getElementsByClassName("disclaimer4")[0].hidden = true;
      document.getElementsByClassName("disclaimer5")[0].hidden = true;
      document.getElementsByClassName("disclaimer6")[0].hidden = true;
      document.getElementsByClassName("disclaimer7")[0].hidden = true;
    } else if (slideMessageNumber !== 9) {
      document.getElementsByClassName("disclaimer1")[0].hidden = true;
      document.getElementsByClassName("disclaimer2")[0].hidden = true;
      document.getElementsByClassName("disclaimer3")[0].hidden = true;
      document.getElementsByClassName("disclaimer4")[0].hidden = true;
      document.getElementsByClassName("disclaimer5")[0].hidden = true;
      document.getElementsByClassName("disclaimer6")[0].hidden = true;
      document.getElementsByClassName("disclaimer7")[0].hidden = true;
    } else {
      document.getElementsByClassName("disclaimer1")[0].hidden = true;
      document.getElementsByClassName("disclaimer2")[0].hidden = true;
      document.getElementsByClassName("disclaimer3")[0].hidden = false;
      document.getElementsByClassName("disclaimer4")[0].hidden = false;
      document.getElementsByClassName("disclaimer5")[0].hidden = false;
      document.getElementsByClassName("disclaimer6")[0].hidden = false;
      document.getElementsByClassName("disclaimer7")[0].hidden = false;
    }
  }
}

/* Button group to go through slides with a click */
function buttonEventListener(slideNumber) {
  const buttons = document.getElementsByClassName("slide-button");
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
