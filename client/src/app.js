import WeatherInformation from './weatherInformation'
import LocationGetter from './locationGetter'

window.addEventListener('load', () => {

  const weatherInformation = new WeatherInformation()
  weatherInformation.getWeather()

  const locationGetter = new LocationGetter()
  locationGetter.getLocation()

})