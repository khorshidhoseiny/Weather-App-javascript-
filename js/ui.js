class UI{
    constructor(){
        this.CityName=document.getElementById('city');
        this.Temp=document.querySelector('.temp');
        this.Icon=document.querySelector('.icon-weather');
        this.Wind=document.querySelector('.wind');
        this.Humidity=document.querySelector('.humidity');
        this.Description=document.querySelector('.description');

    }
    paint(weather,Location){

        this.CityName.textContent=Location;
        this.Temp.textContent=weather.main.temp;
        this.Icon.setAttribute("src",`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.Description.textContent=this.mainWeather(weather.weather[0].main);
        this.Humidity.textContent=weather.main.humidity;
        this.Wind.textContent=weather.wind.speed;

    }
    mainWeather(mainWeather) {
        switch (mainWeather) {
          case "Thunderstorm":
            return "رعد و برق";
            break;
          case "Drizzle":
            return "نمنم باران";
            break;
          case "Rain":
            return "بارانی";
            break;
          case "Snow":
            return "برفی";
            break;
          case "Mist":
            return "غبار";
            break;
          case "Smoke":
            return "دود";
            break;
          case "Haze":
            return "غبار مه";
            break;
          case "Dust":
            return "گرد و خاک";
            break;
          case "Fog":
            return "مه";
            break;
          case "Sand":
            return "شن";
            break;
          case "Ash":
            return "خاکستر آتشفشانی";
            break;
          case "Squall":
            return "بوران";
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
          default:
            return mainWeather;
        }
    }
}