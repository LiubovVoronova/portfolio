"use strict"

// MENU-DROPDOWN
document.addEventListener('click', function(event) {
    let target = event.target; 
    let subMenuList = document.querySelectorAll('ul.sub-menu');    
    if (target.closest('.menu-item')) {
        closeMenu();
        target.querySelector('ul.sub-menu').style.visibility = "visible";
        } else {
            closeMenu();
        }
    function closeMenu() {
        for (let i = 0; i < subMenuList.length; i++) {
            subMenuList[i].style.visibility = "hidden";
        }
    }    
});

// WEATHER 
let weatherRequest = new XMLHttpRequest();
let url = new URL('http://api.openweathermap.org/data/2.5/weather');
url.searchParams.set('lat', '59.93');
url.searchParams.set('lon', '30.31');
url.searchParams.set('appid', '8531afc05368e7ed4171872b5b9c8b7f');
url.searchParams.set('units', 'metric');
url.searchParams.set('lang', 'ru');
weatherRequest.open('GET', url, true);
weatherRequest.send();

let weatherBlock = document.querySelector('.weather');

weatherRequest.onload = function() {    
    let response = JSON.parse(this.response);
    let weatherData = response.main;

    //Icon
    let weatherInfo = response.weather[0];
    let iconData = weatherInfo.icon;
    let icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/wn/${iconData}.png`;
    weatherBlock.appendChild(icon);

    //Temperature
    let temperatureData =  weatherData.temp;
    temperatureData = Math.round(temperatureData);
    let temp = document.createElement('p');
    if (temperatureData > 0) {
        temp.textContent = " + " + temperatureData + " ℃";
    } else {
        temp.textContent = temperatureData + " ℃";
    }         
    temp.classList.add('degrees'); 
    weatherBlock.appendChild(temp);
    
    //Description
    let descriptionData = weatherInfo.description;
    createWeatherElement(descriptionData, 'p');
}
function createWeatherElement(element, tagName) {
    let newElement = document.createElement(tagName);
    newElement.textContent = element;
    weatherBlock.appendChild(newElement);
}
