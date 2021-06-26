let btn = document.querySelector('.btn')
let searchForm = document.querySelector('.search-Form')
const APP_KEY = 'bb32a29f95515a107151b35fda44d036';
let searchQuery = ''
let form_control = document.querySelector('.form-control')
let result = document.querySelector('.container')

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
    const exampleReq = `http://api.weatherstack.com/current?access_key=${APP_KEY}&query=${searchQuery}&units=f`;
    const response = await fetch(exampleReq)
    const data = await response.json();
    htmlcodes(data);
    
    form_control.value = '';
    console.log(data)


}
function htmlcodes(results){
    let html =
//    `    <img class='lic'src='${results.current.weather_icons}'>
`
    <h1 class='lic Location'>${results.location.name}</h1>
   <h3 class='lic Description'>${results.current.weather_descriptions}</h3>
   <h3 class='lic Temperature'>${results.current.temperature} °F </h3>
  
    <h3  class='lic Wind'>${results.current.wind_dir} ${results.current.wind_speed} mph</h3>
`
    result.innerHTML = html;

 


}