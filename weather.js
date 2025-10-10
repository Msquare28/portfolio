const apiKey = "c510ef021f300c37120bacb9779d695a"; // Replace this with your real key from OpenWeather

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const weatherCard = document.getElementById("weatherCard");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    // Show loader and hide old card
    document.getElementById("loader").style.display = "flex";
    weatherCard.style.display = "none";
    weatherCard.classList.remove("show");

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found or invalid API key");
    }

    const data = await response.json();

    // Fill the weather details
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temp").textContent = data.main.temp.toFixed(1);
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("wind").textContent = data.wind.speed;

    const description = data.weather[0].description;
    document.getElementById("weatherDesc").textContent = description;

    // Set weather icon dynamically
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("weatherIcon").src = iconUrl;

    // 🌈 Change background based on weather
    let weatherType = data.weather[0].main.toLowerCase();
    let bgGradient = "";

    if (weatherType.includes("clear")) {
      bgGradient =
        "linear-gradient(-45deg, #f9d71c, #fbc531, #ffe66d, #f5d547)";
    } else if (weatherType.includes("cloud")) {
      bgGradient =
        "linear-gradient(-45deg, #95a5a6, #bdc3c7, #7f8c8d, #ecf0f1)";
    } else if (weatherType.includes("rain")) {
      bgGradient =
        "linear-gradient(-45deg, #3498db, #2980b9, #2c3e50, #1a5276)";
    } else if (weatherType.includes("thunder")) {
      bgGradient =
        "linear-gradient(-45deg, #2c3e50, #1f1c2c, #403b4a, #0f2027)";
    } else if (weatherType.includes("snow")) {
      bgGradient =
        "linear-gradient(-45deg, #dfe6e9, #b2bec3, #636e72, #ffffff)";
    } else {
      bgGradient =
        "linear-gradient(-45deg, #0078d7, #00b4d8, #90e0ef, #caf0f8)";
    }

    // Apply the background animation
    document.body.style.background = bgGradient;
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradientBG 15s ease infinite";

    // Hide loader when data is ready
    document.getElementById("loader").style.display = "none";
    // Display the card
    weatherCard.style.display = "block";
    setTimeout(() => {
      weatherCard.classList.add("show");
    }, 50);
  } catch (error) {
    alert("Error fetching weather data: " + error.message);
  }
}
