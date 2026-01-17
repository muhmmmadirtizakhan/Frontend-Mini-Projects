const apikey = "078bd52af3e70564b823ce5d719e2d85";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cityElem = document.querySelector(".city");
const tempElem = document.querySelector(".temprature"); // match HTML
const humidityElem = document.querySelector(".humidity");
const windElem = document.querySelector(".wind");

async function checkweather(city) {
    const response = await fetch(`${apiurl}q=${city}&appid=${apikey}`);
     if(response.status==404){
         document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        }else{
    const data = await response.json();
    cityElem.innerHTML = data.name;
    tempElem.innerHTML = Math.round(data.main.temp) + "°C";
    humidityElem.innerHTML = data.main.humidity + "%";
    windElem.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png";
    }
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";
    }
}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});
