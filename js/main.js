/**
 * main.js
 * Entry point for the application. Initialization only.
 */

import { initEventListeners } from './eventHandlingModule.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Weather Dashboard Initialized 🚀');
    initEventListeners();
});
