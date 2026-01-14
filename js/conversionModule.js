/**
 * conversionModule.js
 * Handles temperature conversions strictly between Celsius and Fahrenheit.
 */

export function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

export function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

export function toggleUnit(currentUnit) {
    return currentUnit === 'C' ? 'F' : 'C';
}
