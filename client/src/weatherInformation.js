class WeatherInformation {
  constructor(){
    this.defaultLat = 47.4984
    this.defaultLong = 19.0408
    this.currentLat = this.defaultLat
    this.currentLong = this.defaultLong

    this.getCurrentLocationWeather = this.getCurrentLocationWeather.bind(this)
  }

  getWeather(lat, long){
    const url = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        document.getElementById('city').innerText = data.name
        document.getElementById('temperature').innerText = data.main.temp
        document.getElementById('description').innerText = data.weather[0].description
        document.getElementById('icon').src = data.weather[0].icon //TODO handle no icon provided
      })
      .catch((err) => console.log(err))
  }

  displayError(){
    document.getElementById("latlong").innerText = "Could not get geolocation"
  }

  getCurrentLocationWeather(position){
    this.currentLat = position.coords.latitude
    this.currentLong = position.coords.longitude

    document.getElementById("latlong").innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude

    this.getWeather(this.currentLat, this.currentLong)
  }
  
  getLocation(callback) {
    navigator.geolocation.getCurrentPosition(this.getCurrentLocationWeather, this.displayError)
  }

}

export default WeatherInformation