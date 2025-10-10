const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const backBtn = document.getElementById("backBtn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const val = button.textContent;

    if (button.id === "clear") {
      display.value = "";
    } else if (button.id === "del") {
      display.value = display.value.slice(0, -1);
    } else if (button.id === "equals") {
      try {
        // Replace ^ with ** for power operation
        const expression = display.value.replace(/\^/g, "**");
        display.value = eval(expression);
      } catch {
        display.value = "Error";
      }
    } else if (button.classList.contains("fn")) {
      const fn = button.getAttribute("data-fn");
      try {
        const val = parseFloat(display.value);
        switch (fn) {
          case "sin":
            display.value = Math.sin((val * Math.PI) / 180);
            break;
          case "cos":
            display.value = Math.cos((val * Math.PI) / 180);
            break;
          case "tan":
            display.value = Math.tan((val * Math.PI) / 180);
            break;
          case "log":
            display.value = Math.log10(val);
            break;
          case "sqrt":
            display.value = Math.sqrt(val);
            break;
        }
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += val;
    }
  });
});

backBtn.addEventListener("click", () => {
  window.location.href = "index.html"; // change to your portfolio file
});
