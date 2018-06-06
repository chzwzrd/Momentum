$(document).ready(() => {
    const loadWeather = () => {
        // AJAX request to OpenWeatherMap (current temp)
        $.get('http://api.openweathermap.org/data/2.5/weather?q=Santa%20Ana,us&units=imperial&APPID=cc83d4566e8e30e3a2f93204703a9134', weatherData => {
            console.log(weatherData);

            // extract data from API
            const weatherObj = {
                city: weatherData.name,
                icon: weatherData.weather[0].icon,
                temp: weatherData.main.temp
            };

            // create virtual div for weather icon/city/temp & append to navbar
            const weather = $("<div>");
            weather.addClass('weather');
            const icon = $("<img>");
            icon.addClass('weather-icon').attr('src', `http://openweathermap.org/img/w/${weatherObj.icon}.png`);
            const temp = $("<p>");
            temp.addClass('temp').html(`${weatherObj.temp.toFixed(0)}&deg;F`);
            const city = $("<p>");
            city.addClass('city-name').html(weatherObj.city);
            weather.append(icon).append(temp).append(city);
            $("nav").append(weather);
        });
    }

    const getForecast = () => {
        // AJAX request to OpenWeatherMap (5 day forecast)
        $.get('http://api.openweathermap.org/data/2.5/forecast?q=Santa%20Ana,us&cnt=1&units=imperial&APPID=cc83d4566e8e30e3a2f93204703a9134', forecastData => {
            console.log(forecastData);;
        });
    }

    loadWeather();
});
