
const totalInput = document.getElementById("totalData");
const usedInput = document.getElementById("dataUsed");
const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("statusText");
const updateBtn = document.getElementById("updateBtn");
const resetBtn = document.getElementById("resetBtn");
const historyList = document.getElementById("historyList");

// Load saved data when page loads
window.addEventListener("load", () => {
  const savedTotal = localStorage.getItem("totalData");
  const savedUsed = localStorage.getItem("usedData");
  const history = JSON.parse(localStorage.getItem("usageHistory")) || [];

  if (savedTotal && savedUsed) {
    totalInput.value = savedTotal;
    usedInput.value = savedUsed;
    updateProgress(savedTotal, savedUsed);
  }

  displayHistory(history);
});

// Update button
updateBtn.addEventListener("click", () => {
  let total = parseFloat(totalInput.value);
  let used = parseFloat(usedInput.value);

  if (isNaN(total) || isNaN(used) || total <= 0) {
    statusText.textContent = "⚠️ Please enter valid numbers!";
    return;
  }

  // Convert MB to GB if necessary
  if (total > 50) total = total / 1024;
  if (used > 50) used = used / 1024;

  // Save total + used data
  localStorage.setItem("totalData", total.toFixed(2));
  localStorage.setItem("usedData", used.toFixed(2));

  // Add today’s record
  const history = JSON.parse(localStorage.getItem("usageHistory")) || [];
  const today = new Date().toLocaleDateString();

  const todayEntry = { date: today, used: used.toFixed(2) };
  const existing = history.find((item) => item.date === today);

  if (existing) {
    existing.used = used.toFixed(2);
  } else {
    history.push(todayEntry);
  }

  localStorage.setItem("usageHistory", JSON.stringify(history));
  displayHistory(history);

  updateProgress(total, used);
});

// Reset button
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  totalInput.value = "";
  usedInput.value = "";
  historyList.innerHTML = "";
  progressBar.style.width = "0%";
  progressBar.style.backgroundColor = "#4CAF50";
  statusText.textContent = "Reset successful.";
});

// Display daily history
function displayHistory(history) {
  historyList.innerHTML = "";
  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.date}: ${item.used} GB used`;
    historyList.appendChild(li);
  });
}

// Progress update
function updateProgress(total, used) {
  let percent = (used / total) * 100;
  if (percent > 100) percent = 100;

  if (percent < 70) {
    progressBar.style.backgroundColor = "#4CAF50";
  } else if (percent < 90) {
    progressBar.style.backgroundColor = "#FFC107";
  } else {
    progressBar.style.backgroundColor = "#F44336";
  }

  progressBar.style.width = `${percent}%`;
  const remaining = total - used;

  if (remaining <= 0) {
    statusText.textContent = `🚨 You’ve used all your ${total.toFixed(2)} GB!`;
  } else {
    statusText.textContent = `📶 Used: ${used.toFixed(2)} GB / ${total.toFixed(
      2
    )} GB — Remaining: ${remaining.toFixed(2)} GB`;
  }
}
=======
const totalInput = document.getElementById("totalData");
const usedInput = document.getElementById("dataUsed");
const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("statusText");
const updateBtn = document.getElementById("updateBtn");
const resetBtn = document.getElementById("resetBtn");
const historyList = document.getElementById("historyList");

// Load saved data when page loads
window.addEventListener("load", () => {
  const savedTotal = localStorage.getItem("totalData");
  const savedUsed = localStorage.getItem("usedData");
  const history = JSON.parse(localStorage.getItem("usageHistory")) || [];

  if (savedTotal && savedUsed) {
    totalInput.value = savedTotal;
    usedInput.value = savedUsed;
    updateProgress(savedTotal, savedUsed);
  }

  displayHistory(history);
});

// Update button
updateBtn.addEventListener("click", () => {
  let total = parseFloat(totalInput.value);
  let used = parseFloat(usedInput.value);

  if (isNaN(total) || isNaN(used) || total <= 0) {
    statusText.textContent = "⚠️ Please enter valid numbers!";
    return;
  }

  // Convert MB to GB if necessary
  if (total > 50) total = total / 1024;
  if (used > 50) used = used / 1024;

  // Save total + used data
  localStorage.setItem("totalData", total.toFixed(2));
  localStorage.setItem("usedData", used.toFixed(2));

  // Add today’s record
  const history = JSON.parse(localStorage.getItem("usageHistory")) || [];
  const today = new Date().toLocaleDateString();

  const todayEntry = { date: today, used: used.toFixed(2) };
  const existing = history.find((item) => item.date === today);

  if (existing) {
    existing.used = used.toFixed(2);
  } else {
    history.push(todayEntry);
  }

  localStorage.setItem("usageHistory", JSON.stringify(history));
  displayHistory(history);

  updateProgress(total, used);
});

// Reset button
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  totalInput.value = "";
  usedInput.value = "";
  historyList.innerHTML = "";
  progressBar.style.width = "0%";
  progressBar.style.backgroundColor = "#4CAF50";
  statusText.textContent = "Reset successful.";
});

// Display daily history
function displayHistory(history) {
  historyList.innerHTML = "";
  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.date}: ${item.used} GB used`;
    historyList.appendChild(li);
  });
}

// Progress update
function updateProgress(total, used) {
  let percent = (used / total) * 100;
  if (percent > 100) percent = 100;

  if (percent < 70) {
    progressBar.style.backgroundColor = "#4CAF50";
  } else if (percent < 90) {
    progressBar.style.backgroundColor = "#FFC107";
  } else {
    progressBar.style.backgroundColor = "#F44336";
  }

  progressBar.style.width = `${percent}%`;
  const remaining = total - used;

  if (remaining <= 0) {
    statusText.textContent = `🚨 You’ve used all your ${total.toFixed(2)} GB!`;
  } else {
    statusText.textContent = `📶 Used: ${used.toFixed(2)} GB / ${total.toFixed(
      2
    )} GB — Remaining: ${remaining.toFixed(2)} GB`;
  }
}
