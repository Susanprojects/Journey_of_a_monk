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
let slide = document.getElementById("divSlide");
let nextDiv = document.getElementById("nextDiv");
const containerCarousel = document.getElementsByClassName("container-carousel");
const carousel = document.getElementsByClassName("carousels");
init();
messageOnSlide(slideIndex);


function setWindowDimensions() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  document.body.style.height = windowHeight + "px";
  document.body.style.width = windowWidth + "px";
  document.body.style.margin = "0";
  //window.addEventListener("resize", setWindowHeight, false);
}


function init() {
  setWindowDimensions();
  nextDiv.style.height = containerCarousel[0].style.height = windowHeight + 'px';

  // setTimeout(function(){
  //     document.getElementById("introductionDiv").style.display = "none";
  //     document.getElementById("nextDiv").style.display = "block";
  // }, 3000);
}

function currentSlide(n) {
  let mapImageWithButtonPosition = n * -995;
  calculateNewPosition(mapImageWithButtonPosition);
  styleMessagesOnSlide(n);
  messageOnSlide(n);
  buttonEventListener(n);
}

function plusSlides(n) {
  nextSlide((slideIndex += n));
}

function minusSlides(n) {
  prevSlide((slideIndex += n));
}

function calculateNewPosition(position) {
  nextDiv.style.backgroundPositionX = position + "px";
}

function prevSlide(n) {
  if(n > -1) {
    newPositionX = newPositionX + 995;
    calculateNewPosition(newPositionX);
    styleMessagesOnSlide(n);
    messageOnSlide(n);
    buttonEventListener(n);
  }
}

function nextSlide(n) {
  if (n >= 1 && n < 10) {
    newPositionX = newPositionX - 995;
    calculateNewPosition(newPositionX);
    styleMessagesOnSlide(n);
    messageOnSlide(n);
  }
  buttonEventListener(n);
}

function styleMessagesOnSlide(n) {
  const slideMessages = document.getElementById("slideMessage");
  slideMessages.className = "";
  slideMessages.className = "class" + n;
  switch (n) {
    case 1:
      slideMessages.style.top = "315px";
      slideMessages.style.left = "32px";
      break;

    case 2:
      slideMessages.style.top = "315px";
      slideMessages.style.left = "32px";
      break;

    case 3:
      slideMessages.style.top = "315px";
      slideMessages.style.left = "";
      slideMessages.style.right = "0";
      break;

    case 4:
      slideMessages.style.top = "315px";
      slideMessages.style.left = "";
      slideMessages.style.right = "-10px";
      break;

    case 5:
      slideMessages.style.top = "300px";
      slideMessages.style.right = "-10px";
      break;

    case 6:
      slideMessages.style.top = "315px";
      slideMessages.style.left = "32px";
      break;

    case 7:
      slideMessages.style.top = "315px";
      slideMessages.style.left = "32px";
      break;

    case 8:
      slideMessages.style.top = "315px";
      slideMessages.style.left = "32px";
      break;

    case 9:
      slideMessages.style.top = "15px";
      slideMessages.style.left = "";
      slideMessages.style.right = "10px";
      break;

    default:
      slideMessages.style.top = "15px";
      slideMessages.style.left = "15px";
      slideMessages.style.right = "0";
  }
}

function messageOnSlide(n) {
  const slideParagraph = document.getElementsByTagName("p");
  for (i = 0; i < monkMessages.length; i++) {
    if (n === i) {
      slideParagraph[0].innerText = monkMessages[i];
    }
  }
}

function buttonEventListener(n) {
  const buttons = document.getElementsByClassName("slide-button");
  for (i = 0; i < buttons.length; i++) {
    if (n === i && n >= 0) {
      buttons[i].className += " active";
    } else {
      buttons[i].className = buttons[i].className.replace(" active", "");
    }
  }
}
