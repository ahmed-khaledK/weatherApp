let currentDate = new Date();
let day = currentDate.getDate();
let dayOfWeek = currentDate.getDay();
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = daysOfWeek[dayOfWeek];
let day2 = daysOfWeek[(dayOfWeek + 1) % 7];
let day3 = daysOfWeek[(dayOfWeek + 2) % 7];
let monthNumber = currentDate.getMonth();
let monthNames = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];
let monthName = monthNames[monthNumber];
async function getWeather(x) {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b4b35bd8bc1a4a3899a155343240711&q=${x ? x : "egypt"}&days=3&aqi=no&alerts=no`)
    let data = await response.json();
    console.log(data);
    await CurrentWeather (data);
    await secWeather (data);
    await thWeather (data);
}
getWeather();

function CurrentWeather(data) {
    let cartona = "";
        cartona +=`<div class="card-body">
              <div class="header-custom-light card-header d-flex justify-content-between">
                <div class="day text-white">${dayName}</div>
                <div class="date text-white">${day}${monthName}</div>
              </div>
              <div class="cardbody">
                <h5 class="text-white">${data.location.name}</h5>
                <div class="deg-cont">
                  <h1 class="text-white">${data.current.temp_c}C</h1>
                </div>
                <p class="weatherCondition text-primary">${data.current.condition.text}</p>
              </div>
            </div>`
            document.getElementById('fcard').innerHTML = cartona;    
        }
function secWeather (data){
    let cartona = "";
    cartona+= `<div class="card bg-dark" id="seccard">
            <div class="card-body">
              <div class="header-custom-light card-header d-flex justify-content-between">
                <div class="day text-white">${day2}</div>
                <div class="date text-white"></div>
              </div>
              <div class="cardbody">
                <div class="deg-cont">
                <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="icon">
                  <h1 class="text-white">${data.forecast.forecastday[1].day.maxtemp_c}C</h1>
                   <h6 class="text-white">${data.forecast.forecastday[1].day.mintemp_c}C</h6>
                </div>
                <p class="weatherCondition text-primary">${data.forecast.forecastday[1].day.condition.text}</p>
              </div>
            </div>
          </div>`
          document.getElementById('seccard').innerHTML = cartona;
}
function thWeather (data){
  let cartona ="";
  cartona+=`<div class="card bg-dark" id="thcard">
            <div class="card-body">
              <div class="header-custom-light card-header d-flex justify-content-between">
                <div class="day text-white">${day3}</div>
                <div class="date text-white"></div>
              </div>
              <div class="cardbody">
                <div class="deg-cont">
                <img src="${data.forecast.forecastday[2].day.condition.icon}" alt="icon">
                  <h1 class="text-white">${data.forecast.forecastday[2].day.maxtemp_c}C</h1>
                  <h6 class="text-white">${data.forecast.forecastday[2].day.mintemp_c}C</h6>
                </div>
                <p class="weatherCondition text-primary">${data.forecast.forecastday[2].day.condition.text}</p>
              </div>
            </div>
          </div>`
          document.getElementById('thcard').innerHTML = cartona;
}
