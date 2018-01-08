import WeatherInformation from './weatherInformation'
import MathsHelper from './mathsHelper'

window.addEventListener('load', () => {

  const weatherInformation = new WeatherInformation()
  const mathsHelper = new MathsHelper()

  weatherInformation.getWeather(weatherInformation.defaultLat, weatherInformation.defaultLong)

  document.getElementById('my_weather').onclick = () => {weatherInformation.getCurrentLocationWeather()}

  document.getElementById('toggle_c_f').onclick = () => {mathsHelper.convertTemp(document.getElementById('tempUnit').innerText)}

})

