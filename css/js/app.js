import { initData } from './flashcard.js';
import { render } from './logic.js';
import { setupEventListeners } from './events.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('Initializing Dynamic Flashcard Study Tool...');
        initData();
        setupEventListeners();
        render();
        console.log('Initialization complete.');
    } catch (error) {
        console.error('Initialization failed:', error);
    }
});
