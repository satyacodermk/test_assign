/**
 * domUpdateModule.js
 * Handles all direct DOM manipulation to update the UI.
 */

import { toFahrenheit } from './conversionModule.js';

const cityList = document.getElementById('cityList');
const alertArea = document.getElementById('alertArea');

export function renderList(data, currentUnit) {
    // Clear existing list
    cityList.innerHTML = '';

    data.forEach(cityData => {
        const li = createListItem(cityData, currentUnit);
        cityList.appendChild(li);
    });
}

function createListItem(cityData, unit) {
    const li = document.createElement('li');
    li.classList.add('city-item');

    // Calculate display temperature
    let displayTemp = cityData.temp;
    // We assume stored data is always in Celsius (base unit). 
    // If the data was stored in whatever unit the user selected, math would be harder.
    // Let's assume standard input is Celsius for simplicity, OR we handle conversion based on toggled unit.
    // Wait, the prompt implies "Input" has no unit selector, but there is a global toggle.
    // Standard approach: Store raw input value, but usually inputs imply a specific unit.
    // Let's assume the user enters Celsius by default, or the raw value is just "units".
    // Actually, to make the toggle work bidirectionally accurately, it's best to normalize storage or convert on fly.
    // Let's assume the stored value is in Celsius (standard). 

    // However, if the user is in F mode and adds 100, is it 100F or 100C?
    // Start simple: The input is just "Temperature". The global toggle dictates what that number means?
    // Or simpler: The number in the DB is C. If global is F, convert C -> F.
    // BUT if the user is viewing F, they probably want to input F.
    // Complex. Let's stick to the prompt's implied flow:
    // "Click Celsius/Fahrenheit toggle... program iterates... performs conversion"
    // This implies the values in memory might need to change, or just the display.
    // BEST PRACTICE: Store neutral or base unit (Celsius). Convert on render.
    // If User inputs 50 while in 'F' mode, we should convert 50F -> C and store that.

    // For this beginner implementation, let's keep it simple as per "What You Will Implement":
    // "Temperature Conversion -> You'll build functions to convert temperatures... offering flexibility"
    // Let's assume the array stores the value as entered, but we might arguably want to track the unit it was entered in.
    // BUT the simplest interpretation of the prompt: 
    // "Updates display... 25C to 77F".
    // Let's assume base storage is CELSIUS.

    if (unit === 'F') {
        displayTemp = toFahrenheit(cityData.temp);
    }

    // Formatting to 1 decimal place if needed
    displayTemp = Math.round(displayTemp * 10) / 10;

    li.innerHTML = `
        <div class="city-info">
            <h3>${cityData.city}</h3>
            <span class="condition">${cityData.condition}</span>
        </div>
        <div class="city-temp">${displayTemp}°${unit}</div>
    `;

    return li;
}

export function showAlert(message, type = 'error') {
    alertArea.innerHTML = `<div class="alert alert-${type}">${message}</div>`;

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        alertArea.innerHTML = '';
    }, 3000);
}

export function clearInputs() {
    document.getElementById('cityInput').value = '';
    document.getElementById('tempInput').value = '';
    document.getElementById('conditionInput').selectedIndex = 0;
}
