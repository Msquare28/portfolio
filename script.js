// Create a welcome message on the page instead of a popup
const welcome = document.createElement("div");
welcome.textContent = "👋 Welcome to my portfolio website!";
welcome.style.background = "#ff8800";
welcome.style.color = "white";
welcome.style.padding = "10px";
welcome.style.textAlign = "center";
welcome.style.fontSize = "18px";

// Add it to the top of the page
document.body.prepend(welcome);
// Open project pages
function openProject(name) {
  if (name === "weather") {
    window.location.href = "weather.html";
  } else if (name === "data") {
    window.location.href = "data.html";
  } else if (name === "portfolio") {
    alert("You are already on the Portfolio Website 😄");
  }
}
