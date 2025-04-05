//we are gonna get information using an api
//get items to be manipulated
const cityName = document.querySelector('#name');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const weatherIcon = document.querySelector('#weather-icon');
//
//

//Get the url and the other constants
const lat = 0.31;
const lon = 32.58;
const api = "db06dbd8eda76e8349d35a4e3fb3622d";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;

//We now create an async function to get the available jsons from the api, or get it and store it in an api.... kinda

async function fetchApi() {
    try {
        //We use await keyword to fetch from url 
        const response = await fetch(url);

        //We now get the data from response with the json thing, but have to first check if the response is ok
        if (response.ok) {
            //we can proceed 
            const data = await response.json();
            
            //Now we can load the results into the function creating the display 
            console.log(data);
            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch(error) {
        console.log("Error fetching weather data",error);
    }

    function displayWeather(data) {
        //Time to put this to the page
        cityName.innerHTML = `${data.name}`;
        temperature.innerHTML = `${data.main.temp}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        description.textContent = `${desc}`;
    }
    
}

fetchApi();