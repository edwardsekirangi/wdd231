const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//variable 
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=db06dbd8eda76e8349d35a4e3fb3622d';

//function
async function apiFetch() {
    try {
        const response = await fetch(url);

        //storing results in data if they are ok
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch {
        console.log(error);
    }
    
    function displayResults(data) {
        currentTemp.innerHTML = `${data.main.temp}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = `${desc}`;
    }
      
}

apiFetch();