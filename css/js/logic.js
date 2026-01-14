import { state, getCurrentCard, markCurrentAsKnown, resetData } from './flashcard.js';
import { updateCardDisplay, updateProgressDisplay, toggleScreen } from './dom.js';

export function render() {
    const currentCard = getCurrentCard();
    updateCardDisplay(currentCard, state.currentIndex, state.flashcards.length, state.isFlipped);
    updateProgressDisplay(state.knownCards);
}

export function handleFlip() {
    if (state.flashcards.length === 0) return;
    state.isFlipped = !state.isFlipped;
    render();
}

export function handleMarkKnown() {
    if (state.flashcards.length === 0) return;
    markCurrentAsKnown();
    console.log(`Card marked as known. New known cards: ${state.knownCards.length}.`);
    render();
}

export function handleReset() {
    if (confirm('Are you sure you want to reset all progress?')) {
        resetData();
        render();
        console.log('Progress reset.');
    }
}

export function handleToggleView() {
    toggleScreen();
}
