/**
 * eventHandlingModule.js
 * Manages all user interactions and event listeners.
 */

import * as weatherModule from './weatherModule.js';
import * as domModule from './domUpdateModule.js';
import * as conversionModule from './conversionModule.js';
import * as storageModule from './storageModule.js';

// Application State
let currentUnit = 'C';

export function initEventListeners() {
    const addBtn = document.getElementById('addCityBtn');
    const toggleBtn = document.getElementById('unitToggleBtn');
    const clearBtn = document.getElementById('clearAllBtn');

    addBtn.addEventListener('click', handleAddCity);
    toggleBtn.addEventListener('click', handleToggleUnit);
    clearBtn.addEventListener('click', handleClearAll);

    // Initial Render
    const savedData = storageModule.getFromStorage();
    if (savedData) {
        weatherModule.setData(savedData);
        domModule.renderList(weatherModule.getData(), currentUnit);
    }
}

function handleAddCity() {
    const cityInput = document.getElementById('cityInput').value.trim();
    const tempInput = document.getElementById('tempInput').value;
    const conditionInput = document.getElementById('conditionInput').value;

    // Validation
    if (!cityInput) {
        domModule.showAlert('Please enter a city name.');
        return;
    }
    if (tempInput === '') {
        domModule.showAlert('Please enter a valid temperature.');
        return;
    }
    if (!conditionInput) {
        domModule.showAlert('Please select a condition.');
        return;
    }

    // Logic: If current unit is F, we should probably convert to C for consistent storage?
    // Or we just store it as is and assume it's C?
    // User Guide says: "Simple input... toggle converts." 
    // Let's assume input is ALWAYS Celsius for simplicity of this assignment, 
    // UNLESS we want to get fancy. The prompt doesn't specify input unit.
    // We will treat inputs as Celsius base.

    // Let's handle the edge case where a user might think they are entering F because the toggle is on F.
    // If currentUnit is F, convert input F -> C for storage.
    let tempToStore = parseFloat(tempInput);

    if (currentUnit === 'F') {
        tempToStore = conversionModule.toCelsius(tempToStore);
    }

    // Add Data
    weatherModule.addCity(cityInput, tempToStore, conditionInput);

    // Update UI
    domModule.renderList(weatherModule.getData(), currentUnit);
    domModule.clearInputs();
    domModule.showAlert('City added successfully!', 'success');

    // Save to Storage
    storageModule.saveToStorage(weatherModule.getData());
}

function handleToggleUnit() {
    currentUnit = conversionModule.toggleUnit(currentUnit);

    // Update button text maybe? Or just keep it static as "°C / °F"
    // Let's update the lists
    domModule.renderList(weatherModule.getData(), currentUnit);
}

function handleClearAll() {
    if (weatherModule.getData().length === 0) {
        domModule.showAlert('Nothing to clear.', 'error');
        return;
    }

    if (confirm('Are you sure you want to clear all weather data?')) {
        weatherModule.clearData();
        storageModule.clearStorage();
        domModule.renderList([], currentUnit);
        domModule.showAlert('All data cleared.', 'success');
    }
}
