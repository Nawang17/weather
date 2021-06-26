let btn = document.querySelector('.btn')
let searchForm = document.querySelector('.search-Form')
const APP_KEY = 'adfbe5d322ee0e5856aee36f778a4e41';
let searchQuery = ''
let form_control = document.querySelector('.form-control')

let result = document.querySelector('.container')
getLocation()
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getIp);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  

async function getIp(position) {
const exampleReq = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude }&lon=${position.coords.longitude}&appid=${APP_KEY}&units=imperial`;
const response = await fetch(exampleReq)
const data = await response.json();

htmlcodes(data);
console.log(data)


}
btn.addEventListener('click', (e) => {
e.preventDefault();
searchQuery = form_control.value
fetchAPI();
})
searchForm.addEventListener('submit', (e) => {
e.preventDefault();
searchQuery = e.target.querySelector('input').value
fetchAPI();
})
async function fetchAPI() {
const exampleReq = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${APP_KEY}&units=imperial`
const response = await fetch(exampleReq)
const data = await response.json();
htmlcodes(data);

form_control.value = '';
console.log(data)


}
function htmlcodes(results){
    let count_temp = Math.floor(results.main.temp)
    let count_speed = Math.floor(results.wind.speed)
    let html =
    
`
<h1 class='lic Location'>${results.name}</h1>
<h3 class='lic Description''>${results.weather[0].description}</h3>
<h3 class='lic Temperature'>${count_temp} °F </h3>

<h3 class='lic Wind'> ${count_speed} mph</h3>
`

result.innerHTML = html;



}
