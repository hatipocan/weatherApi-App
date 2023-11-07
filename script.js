const searchBox = document.querySelector('#city-search-box');
const addBtn = document.querySelector('.add-button');
const cardContainer = document.querySelector('.city-card-container');



async function getCity() {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=2aee1b349087468b8ad123928232410&q=${searchBox.value}` , {mode: 'cors'}
    );

    const weatherData = await response.json();

    cardContainer.innerHTML += `
    <article >
        <div>Location : ${weatherData.location.name}</div>
        <div>Temperature : ${weatherData.current.temp_c} C</div>
        <div>Feels Like : ${weatherData.current.feelslike_c} C</div>
        <div>Local Date/Time : ${weatherData.location.localtime}</div>
    </article>
    `;
};

addBtn.addEventListener('click', () => {
    getCity();

});