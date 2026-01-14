import { handleFlip, handleMarkKnown, handleReset, handleToggleView } from './logic.js';

export function setupEventListeners() {
    document.getElementById('flip-btn').addEventListener('click', handleFlip);
    document.getElementById('mark-known-btn').addEventListener('click', handleMarkKnown);
    document.getElementById('reset-btn').addEventListener('click', handleReset);
    document.getElementById('toggle-view-btn').addEventListener('click', handleToggleView);

    // Optional: Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault(); // Prevent scrolling
            handleFlip();
        } else if (e.code === 'Enter') {
            handleMarkKnown();
        }
    });
}
