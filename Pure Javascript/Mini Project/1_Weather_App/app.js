const tempDescripton = document.querySelector(".temperature-description");
const tempDegree = document.querySelector(".temperature-degree");
const locationTimezone = document.querySelector(".location-timezone");
const weatherStatus = document.querySelector("#weather-stats");
const proxy = "https://cors-anywhere.herokuapp.com/";
const API = `https://api.openweathermap.org/data/2.5/weather?q=Pamekasan&units=metric&appid=63c705ba5aafaf02c8a1a0d072d704c1`;

fetch(API)
  .then((res) => {
    if (!res.ok) {
      throw new Error("not 2xx response");
    } else {
      return res.json();
    }
  })
  .then((data) => {
    // Set DOM Elements from the API
    tempDegree.textContent = data.main.temp;
    tempDescripton.textContent = data.weather[0].description;
    locationTimezone.textContent = data.name;
    weatherStatus.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  })
  .catch((err) => console.log(err));
