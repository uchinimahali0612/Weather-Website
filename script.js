function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '0c1920705e3bff979eaca269a5cbbd19'; 
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
        // document.getElementById('hum-wind').style.display = 'block';
    })
    .catch(error => {
        console.log('Error fetching weather data:', error);
    });
  }
  
  function displayWeather(data) {
    const headingpart = document.getElementById('heading-part');
    headingpart.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>`
        const temperature = document.getElementById('temperature');
        const description = document.getElementById('description');
        const humidity = document.getElementById('humidity');
        const windspeed = document.getElementById('windspeed');
        

        temperature.innerHTML=` ${data.main.temp}°C`
        description.innerHTML=`<i>${data.weather[0].description}</i>`
        humidity.innerHTML=`<p><b>Humidity:</b> ${data.main.humidity}%</p>`
        windspeed.innerHTML=`<p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>`
    ;
  }
  