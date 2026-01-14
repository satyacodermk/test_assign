/**
 * weatherModule.js
 * Manages the data structure for weather information.
 */

let allCitiesWeather = [];

export function addCity(city, temp, condition) {
    const newCity = {
        city: city,
        temp: parseFloat(temp),
        condition: condition,
        id: Date.now() // Unique ID for potential future use (e.g. key in React)
    };
    allCitiesWeather.push(newCity);
}

export function getData() {
    return allCitiesWeather;
}

export function setData(data) {
    if (Array.isArray(data)) {
        allCitiesWeather = data;
    }
}

export function clearData() {
    allCitiesWeather = [];
}
