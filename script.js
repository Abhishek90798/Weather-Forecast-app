let city = "gyanpur";
let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2b23407098mshdb833443151dccdp137197jsnc9b79e0e41b4',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let button = document.getElementById('btnSearch');
button.addEventListener('click', () => {
    let place = document.getElementById('search').value.trim();
    document.getElementById('search').value = "";
    if (place !== "") {
        city = place;
        url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
        document.getElementById('report').innerHTML = `Weather report of <span class="city">${city}</span>`;
        document.getElementById('spiner').style.display = "block";
        document.getElementById('list').style.display = "none";
        async function get() {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                let currTemp = result.temp;
                let humidity = result.humidity;
                let wind_speed = result.wind_speed;
                let date = new Date(result.sunrise);
                document.getElementById('spiner').style.display = "none";
                document.getElementById('list').style.display = "flex";
                let sunriseH = date.getHours();
                let sunriseM = date.getMinutes();
                document.getElementById('temp').innerHTML = `${currTemp}°C`;
                document.getElementById('humidity').innerHTML = `${humidity}%`;
                document.getElementById('wind').innerHTML = `${wind_speed}Km/hr`;
                document.getElementById('sun').innerHTML = `Sunrise-<b>${sunriseH}:${sunriseM}</b> Am`;

            } catch (error) {
                document.getElementById('list').innerHTML = `Error found :${error}`;
            }
        }
        get();
    }
    else {
        alert('enter the place');
    }



})