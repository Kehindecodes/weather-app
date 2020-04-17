  // init storage
  const storage = new Storage();
  // Get stored location data
  const weatherLocation = storage.getLocationData()
  
  // Init weather object
  const weather = new Weather (weatherLocation.city);
  // init UI Object
  const ui = new UI(); 
// get weather on Dom load
document.addEventListener('DOMContentLoaded',getWeather)

// change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value
    // const state = document.getElementById('state').value
    weather.changeLocation(city)
    storage.setLocationData(city);
    // get and display weather
     getWeather();
     //close modal
     $('#locModal').modal('hide');
})

  


  function getWeather(){
  weather.getWeather()
  .then(result => {ui.paint(result)
console.log(result)})
  .catch(err=> console.log(err))
  }