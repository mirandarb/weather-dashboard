const weatherApiKey = "04f8de835815bff70c29e289ed2dc38c"



function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
  
}

function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;
    
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getWeather();