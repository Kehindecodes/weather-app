class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
        
      
    }
    paint(weather){
        this.location.textContent =weather.name;
         this.desc.textContent =weather. weather[0].description;
         this.string.innerHTML =`${ weather.main.temp}<span>&#8451;</span>`;
         const iconImg = weather.weather[0].icon
         this.icon.innerHTML = `<img src="http://openweathermap.org/img/w/${iconImg}.png">`;
         this.humidity.innerHTML=`Relative Humidity:  ${weather.main.humidity} <span>&#37;</span>`;
         this.feelsLike.innerHTML=`Feels Like: ${weather.main.feels_like}<span>&#8451;</span> `;
         this.dewpoint.innerHTML=`Cloud: ${weather.clouds.all} `;
         this.wind.innerHTML=`Wind Speed: ${weather.wind.speed}m/s `;
         



    
}
}