let weather = {
  apikey: " 86b0bd9b76517148d71f0967cc7de574",
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=86b0bd9b76517148d71f0967cc7de574"
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { main } = data.weather[0];
    console.log(name, description, temp, icon, speed, humidity);
    document.querySelector("#city").textContent = name;
    document.querySelector(".icon-weather").src =
      "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".temp").innerText = temp;
    document.querySelector(".description").innerText = this.mainWeather(main);
    document.querySelector(".wind").innerText = speed;
    document.querySelector(".humidity").innerText = humidity;

    document.querySelector(".weather").classList.remove("loading");
    document.body.style.background =
      "url('https://source.unsplash.com/1600x900/?" + name + ")";
  },
  mainWeather(mainWeather) {
    switch (mainWeather) {
      case "Thunderstorm":
        return "رعد و برق";
        break;
      case "Drizzle":
        return "نم نم باران";
        break;
      case "Rain":
        return "بارانی";
        break;
      case "ُSnow":
        return "برفی";
        break;
      case "Mist":
        return "غبار";
        break;
      case "ُSmoke":
        return "دود";
        break;
      case "Haze":
        return "غبار مه";
        break;
      case "Dust":
        return "گرد و خاک";
        break;
      case "Foge":
        return "مه";
        break;
      case "Sand":
        return "شن";
        break;
      case "Squall":
        return "بوران";
        break;
      case "Ash":
        return "خاکستر آتشفشانی";
        break;
      case "Tornado":
        return "توقان";
        break;
      case "Clear":
        return "صاف";
        break;
      case "Clouds":
        return "ابری";
        break;
    }
  },
  search: function () {
    const cityName = document.querySelector("#search-bar").value;
    this.fetchWeather(cityName);
  },
};
document.querySelector(".btn-icon").addEventListener("click", () => {
  weather.search();
});
document
  .querySelector("#search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });
weather.fetchWeather("Ahvaz");
