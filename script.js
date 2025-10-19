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

// CV card controls: view/download preference and remove/restore
document.addEventListener("DOMContentLoaded", () => {
  const preferView = document.getElementById("prefer-view");
  const cvView = document.getElementById("cv-view");
  const cvDownload = document.getElementById("cv-download");
  const cvRemove = document.getElementById("cv-remove");
  const cvCard = document.getElementById("cv-card");
  const cvRestoreWrap = document.getElementById("cv-restore");
  const cvRestoreBtn = document.getElementById("cv-restore-btn");

  function updateActions() {
    if (!preferView) return;
    // if prefer view is checked, make View the visually primary action
    if (preferView.checked) {
      cvView.style.order = 1;
      cvDownload.style.order = 2;
      cvView.textContent = "View (preferred)";
      cvDownload.textContent = "Download";
    } else {
      cvView.style.order = 2;
      cvDownload.style.order = 1;
      cvView.textContent = "View";
      cvDownload.textContent = "Download (preferred)";
    }
  }

  if (preferView) preferView.addEventListener("change", updateActions);
  updateActions();

  // Remove card (client-side). Shows a small restore button.
  if (cvRemove)
    cvRemove.addEventListener("click", () => {
      if (cvCard) cvCard.style.display = "none";
      if (cvRestoreWrap) cvRestoreWrap.style.display = "block";
    });

  if (cvRestoreBtn)
    cvRestoreBtn.addEventListener("click", () => {
      if (cvCard) cvCard.style.display = "";
      if (cvRestoreWrap) cvRestoreWrap.style.display = "none";
    });
});
