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
// Smooth scroll for navbar links
document.querySelectorAll(".nav-links a, .hero-btn").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
// Fade-in on scroll
const sections = document.querySelectorAll("section, .project-card, #skills");

function revealSections() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
