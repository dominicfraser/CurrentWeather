import WeatherInformation from './weatherInformation'

window.addEventListener('load', () => {

  const weatherInformation = new WeatherInformation()
  weatherInformation.getWeather()

})