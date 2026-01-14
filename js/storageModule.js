/**
 * storageModule.js
 * Wrapper for localStorage operations to ensure persistence.
 */

const STORAGE_KEY = 'weather_dashboard_data';

export function saveToStorage(data) {
    try {
        const jsonString = JSON.stringify(data);
        localStorage.setItem(STORAGE_KEY, jsonString);
    } catch (error) {
        console.error("Error saving to localStorage:", error);
    }
}

export function getFromStorage() {
    try {
        const jsonString = localStorage.getItem(STORAGE_KEY);
        if (jsonString) {
            return JSON.parse(jsonString);
        }
    } catch (error) {
        console.error("Error reading from localStorage:", error);
    }
    return null;
}

export function clearStorage() {
    localStorage.removeItem(STORAGE_KEY);
}
