class MathsHelper {

  convertTemp(unit){
    let currentTempValue = parseInt(document.getElementById('temperature').innerText)
    let currentUnit = unit
    let newUnit = currentUnit == 'C' ? 'F' : 'C'

    document.getElementById('tempUnit').innerText = newUnit

    if (newUnit == 'C'){
      let cTemp = (currentTempValue - 32) * 5/9
      document.getElementById('temperature').innerText = cTemp
    } else {
      let fTemp = currentTempValue * 9/5 + 32
      document.getElementById('temperature').innerText = fTemp
    }

    //TODO limit to 2 decimal places
  }

}

export default MathsHelper