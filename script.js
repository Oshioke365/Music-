const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

const textArray = [
  "Welcome to Studio",
  "Where your music speaks "
];
const typingSpeed = 90;
const delayBetweenTexts = 1000;
let textIndex = 0;
let charIndex = 0;

const typewriterElement = document.getElementById("typewriter");

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    typewriterElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(deleteText, delayBetweenTexts);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typewriterElement.textContent = textArray[textIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(deleteText, typingSpeed / 2);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", typeText);

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 5000,
  glare: true,
  "max-glare": 0.5,
});
