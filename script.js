// Typing effect for header
const title = document.querySelector("h1");
const text = title.textContent;
title.textContent = "";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    title.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();
