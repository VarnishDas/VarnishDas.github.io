const greetings = ["नमस्ते", "Ciao", "مرحبًا", "Hallo", "Moi", "Hola", "Hej", "こんにちは", "Bonjour", "নমস্কাৰ", "Hello"];

const greetingElement = document.getElementById("greeting");
const mainContentElement = document.getElementById("mainContent");
const navbarElement = document.getElementById("navbar");
const midHomeElement = document.querySelector(".midHome");

let index = 0;

function displayGreetings() {
  if (index < greetings.length) {
    greetingElement.innerText = greetings[index];
    index++;
  }
  else {
    clearInterval(interval);
    transitionBackground();
    setTimeout(mainContentElementRelative, 1025);
    setTimeout(startTextLoad, 1025);
    greetings.splice(0,greetings.length)
    greetings.push("Home")
    console.log(greetings)
  }
}

function transitionBackground() {
  mainContentElement.style.height = "100%";
  mainContentElement.style.backgroundColor = "white";
  navbarElement.style.position = "absolute";
}

function mainContentElementRelative() {
  mainContentElement.style.position = "relative";
  midHomeElement.style.display = "block";
}

const interval = setInterval(displayGreetings, 150);

window.onload = displayGreetings;

function startTextLoad() {

  /**
   * Typing Text Animation by CodingLab (https://youtu.be/nxoHR9lltK0?si=mGUOklxIpHty_HD9)
   */

  const text = document.querySelector('.secondText');

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Student";
    }, 0);
    setTimeout(() => {
      text.textContent = "Software Engineer";
    }, 4000);
    setTimeout(() => {
      text.textContent = "Freelancer";
    }, 8000);
  }


  textLoad();
  setInterval(textLoad, 12000);
}
