const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = "cf0e70b526ea52acc1b6eedc20790757";
    const city = document.querySelector('.search-box input').value;

    if (city == '') {
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}&lang=tr`).then(response => response.json()).then(json => {
        if (json.cod === '404') {
            container.style.height = '400px';
            weatherBox.classList.remove("fadeIn");
            weatherDetails.classList.remove("fadeIn");
            error404.classList.add("fadeIn");
            return;
        }

        container.style.height = '555px';
        weatherBox.classList.add("fadeIn");
        weatherDetails.classList.add("fadeIn");
        error404.classList.remove("fadeIn");

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');


        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;
            case 'Clouds':
                image.src = 'images/cloud.png';
                break;
            case 'Rain':
                image.src = 'images/rain.png';
                break;
            case 'Snow':
                image.src = 'images/snow.png';
                break;
            case 'Mist':
                image.src = 'images/mist.png';
                break;
            default:
                image.src = 'images/cloud.png';
                break;

        }

        temperature.innerHTML = `${parseInt(json.main.temp)}`;
        humidity.innerHTML = `%${json.main.humidity}`;
        wind.innerHTML = `${parseInt(json.wind.speed)} km/sa`;
        description.innerHTML = json.weather[0].description;
    });
})