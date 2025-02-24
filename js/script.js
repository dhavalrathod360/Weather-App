const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2c31004ff4msh7b194a3063611b2p1721c8jsn98f6f9558353',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function fetchWeather(city) {

    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + city;

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(!response.ok)
            {
                throw new Error(`Error: ` + result.message);
            }
        console.log(result);
       
        cityName.innerHTML = city;

        condition.innerHTML = result.current.condition.text;
        temp_1.innerHTML = result.current.temp_c;
        temp_c.innerHTML = result.current.temp_c;
        humidity.innerHTML = result.current.humidity;
        feels_like.innerHTML = result.current.feelslike_c;
        wind_1.innerHTML = result.current.wind_kph;
        wind.innerHTML = result.current.wind_kph;
        wind_dir.innerHTML = result.current.wind_dir;
        windchill_c.innerHTML = result.current.windchill_c;
        cloud.innerHTML = result.current.cloud;
        precip_in.innerHTML = result.current.precip_in;
        pressure_in.innerHTML = result.current.pressure_in;
        
        $('#msg').text('Showing result for '+ city);
        $('#msg').css('color', 'green');

    } catch (error) {
        console.error(error.json);
        $('#msg').text(error.message);
        $('#msg').css('color', 'red');
    }
}

//call on submit
$("#searchForm").submit(function (e) { 
    e.preventDefault();
    var city = $('#city').val();
    if(!(city))
    {
        console.log('Empty city value');
        $('#msg').text('Please Enter a City name!');
        $('#msg').css('color', 'red');
    }
    else {
        fetchWeather(city);
        
    }
    
});

// Call the function, when 1st page load data search for mumbai region
fetchWeather("Mumbai");

// TODO : Improve code Reusablity avoiding Hard Coded Fetch request

async function fetchWeatherbangalore() {

    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=bangalore';

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        bangalore_condition.innerHTML = result.current.condition.text;
        bangalore_temp_c.innerHTML = result.current.temp_c;
        bangalore_humidity.innerHTML = result.current.humidity;
        bangalore_feels_like.innerHTML = result.current.feelslike_c;
        bangalore_wind.innerHTML = result.current.wind_kph;       
        bangalore_cloud.innerHTML = result.current.cloud;    
    } catch (error) {
        console.error(error.json + 'bangalore');
    }
}
fetchWeatherbangalore();

async function fetchWeathernagpur() {

    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=nagpur';

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        nagpur_condition.innerHTML = result.current.condition.text;
        nagpur_temp_c.innerHTML = result.current.temp_c;
        nagpur_humidity.innerHTML = result.current.humidity;
        nagpur_feels_like.innerHTML = result.current.feelslike_c;
        nagpur_wind.innerHTML = result.current.wind_kph;       
        nagpur_cloud.innerHTML = result.current.cloud;    
    } catch (error) {
        console.error(error.json + 'nagpur');
    }
}
fetchWeathernagpur();

async function fetchWeatherPune() {

    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Pune';

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        pune_condition.innerHTML = result.current.condition.text;
        pune_temp_c.innerHTML = result.current.temp_c;
        pune_humidity.innerHTML = result.current.humidity;
        pune_feels_like.innerHTML = result.current.feelslike_c;
        pune_wind.innerHTML = result.current.wind_kph;       
        pune_cloud.innerHTML = result.current.cloud;    
    } catch (error) {
        console.error(error.json + 'Pune');
    }
}
fetchWeatherPune();

async function fetchWeatherkolkata() {

    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=kolkata';

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        kolkata_condition.innerHTML = result.current.condition.text;
        kolkata_temp_c.innerHTML = result.current.temp_c;
        kolkata_humidity.innerHTML = result.current.humidity;
        kolkata_feels_like.innerHTML = result.current.feelslike_c;
        kolkata_wind.innerHTML = result.current.wind_kph;       
        kolkata_cloud.innerHTML = result.current.cloud;    
    } catch (error) {
        console.error(error.json + 'kolkata');
    }
}
fetchWeatherkolkata();

async function fetchWeatherahmedabad() {

    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=ahmedabad';

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        ahmedabad_condition.innerHTML = result.current.condition.text;
        ahmedabad_temp_c.innerHTML = result.current.temp_c;
        ahmedabad_humidity.innerHTML = result.current.humidity;
        ahmedabad_feels_like.innerHTML = result.current.feelslike_c;
        ahmedabad_wind.innerHTML = result.current.wind_kph;       
        ahmedabad_cloud.innerHTML = result.current.cloud;    
    } catch (error) {
        console.error(error.json + 'ahmedabad');
    }
}
fetchWeatherahmedabad();

async function fetchWeatherjaipur() {

    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=jaipur';

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        jaipur_condition.innerHTML = result.current.condition.text;
        jaipur_temp_c.innerHTML = result.current.temp_c;
        jaipur_humidity.innerHTML = result.current.humidity;
        jaipur_feels_like.innerHTML = result.current.feelslike_c;
        jaipur_wind.innerHTML = result.current.wind_kph;       
        jaipur_cloud.innerHTML = result.current.cloud;    
    } catch (error) {
        console.error(error.json + 'jaipur');
    }
}
fetchWeatherjaipur();