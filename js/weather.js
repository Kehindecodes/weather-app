class Weather{
    constructor(city){
        this.apiKey ="5edbd2cdaddfa3bb917f860f18c33db7";
        this.city = city;
         
    }
    //fetch weather from API
    async getWeather(){
        const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
        const responseData = await  response.json()
        return responseData;
    }

    // Change  weather Location
    changeLocation(city,state){
        this.city =city;
        this.state = state;
    }
}