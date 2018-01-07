class WeatherInformation {

  getWeather(lat, long){
    fetch('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')
      .then((res) => res.json())
      .then((data) => {
        document.getElementById('temperature').innerText = data.main.temp
        document.getElementById('description').innerText = data.weather[0].description
        document.getElementById('icon').src = data.weather[0].icon
      })
      .catch((err) => console.log(err))
  }

}

export default WeatherInformation