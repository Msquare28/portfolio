const labelInput = document.getElementById("labelInput");
const valueInput = document.getElementById("valueInput");
const addBtn = document.getElementById("addBtn");
const tableBody = document.querySelector("#dataTable tbody");
const clearBtn = document.getElementById("clearBtn");
const backBtn = document.getElementById("backBtn");

let data = JSON.parse(localStorage.getItem("simpleData")) || [];

// Display data on load
renderTable();

addBtn.addEventListener("click", () => {
  const label = labelInput.value.trim();
  const value = parseFloat(valueInput.value);

  if (!label || isNaN(value)) return alert("Please enter valid data!");

  data.push({ label, value });
  localStorage.setItem("simpleData", JSON.stringify(data));

  labelInput.value = "";
  valueInput.value = "";
  renderTable();
});

function renderTable() {
  tableBody.innerHTML = "";
  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.label}</td>
      <td>${item.value}</td>
      <td><button class="deleteBtn">🗑️</button></td>
    `;
    row.querySelector(".deleteBtn").addEventListener("click", () => {
      data.splice(index, 1);
      localStorage.setItem("simpleData", JSON.stringify(data));
      renderTable();
    });
    tableBody.appendChild(row);
  });
}

clearBtn.addEventListener("click", () => {
  if (confirm("Clear all data?")) {
    data = [];
    localStorage.removeItem("simpleData");
    renderTable();
  }
});

backBtn.addEventListener("click", () => {
  window.location.href = "index.html"; // change to your portfolio filename
});
