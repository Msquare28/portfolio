async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "<p>Please enter a city name!</p>";
    return;
  }

  const apiKey = "cda015153366e2b4f37d8a5ef6191df1"; // <-- replace with your real key (keep quotes, no extra spaces)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  result.innerHTML = "<p>Loading...</p>";

  try {
    const res = await fetch(url);
    console.log("Fetch response status:", res.status);
    const data = await res.json();
    console.log("Fetch response body:", data);

    if (!res.ok) {
      // show exact error from API
      result.innerHTML = `<p>Error ${res.status}: ${
        data.message || "Unknown error"
      }</p>`;
      return;
    }

    // success — display weather
    result.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    console.error("Network or fetch error:", err);
    result.innerHTML = `<p>Network error: ${err.message}</p>`;
  }
}
