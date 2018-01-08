import WeatherInformation from './weatherInformation'

window.addEventListener('load', () => {

  const weatherInformation = new WeatherInformation()

  weatherInformation.getWeather(weatherInformation.defaultLat, weatherInformation.defaultLong)

  document.getElementById('my_weather').onclick = weatherInformation.getCurrentLocationWeather()

})

