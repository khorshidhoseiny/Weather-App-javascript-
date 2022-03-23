class Weather{
    constructor(city){
        this.city=city;
        
        this.apikey="86b0bd9b76517148d71f0967cc7de574"
    }
    async getWeather(){
       const response= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apikey}`);
        if(response.ok){
            const responseData=await response.json();
            return responseData;
        }else{
            throw Error(response.status);
        }

        
    }
    
changeLocation(city){
this.city=city;
}



    get Location(){
        return this.city;
    }
}