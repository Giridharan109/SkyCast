const Api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const ApiKey = "d561a47219915144122bc729aa841b4d";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const Error = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(Api + city + `&appid=${ApiKey}`);
  const data = await response.json();

  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    // Set the weather icon based on weather condition
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "./image/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "./image/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "./image/rain.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "./image/mist.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "./image/drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
