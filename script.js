const searchBox = document.querySelector('#city-search-box');
const addBtn = document.querySelector('.add-button');
const cardContainer = document.querySelector('.city-card-container');



async function getCity() {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=2aee1b349087468b8ad123928232410&q=${searchBox.value}` , {mode: 'cors'}
    );

    const weatherData = await response.json();
    const weatherDataIcon = (`${weatherData.current.condition.icon}`)

    cardContainer.innerHTML += `
    <article>
        <div>Country : ${weatherData.location.country}</div>
        <div>Location : ${weatherData.location.name}</div>
        <div>Local Date/Time : ${weatherData.location.localtime}</div>
        <div>Temperature : ${weatherData.current.temp_c} C</div>
        <div>Feels Like : ${weatherData.current.feelslike_c} C</div>
        <div>Humidity : ${weatherData.current.humidity} %</div>
        <div>Condition : ${weatherData.current.condition.text} <img src="${weatherDataIcon}"> </div>
    </article>
    `;
};

addBtn.addEventListener('click', () => {
    getCity();

});