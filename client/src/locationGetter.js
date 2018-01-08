class LocationGetter {
  
  showPosition(position) {
    document.getElementById("latlong").innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
  }

  displayError(){
    document.getElementById("latlong").innerText = "Could not get geolocation"
  }
  
  getLocation() {
    navigator.geolocation.getCurrentPosition(this.showPosition, this.displayError)
  }


}

export default LocationGetter