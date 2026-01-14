import { saveToStorage, loadFromStorage, STORAGE_KEYS } from './storage.js';

// Initial data if nothing is in local storage
const INITIAL_FLASHCARDS = [
    { term: 'HTML Structure', definition: 'Skeleton of web page' },
    { term: 'CSS Styling', definition: 'Visual presentation of web page' },
    { term: 'JavaScript Logic', definition: 'Programming language for behavior' },
    { term: 'DOM Manipulation', definition: 'Interacting with the document structure' },
    { term: 'Event Handling', definition: 'Responding to user actions' },
    { term: 'Arrays', definition: 'Ordered collection of data' },
    { term: 'Objects', definition: 'Key-value pairs for data' },
    { term: 'localStorage', definition: 'Persistent browser storage' }
];

export const state = {
    flashcards: [],
    knownCards: [],
    currentIndex: 0,
    isFlipped: false
};

export function initData() {
    const savedFlashcards = loadFromStorage(STORAGE_KEYS.FLASHCARDS);
    const savedKnownCards = loadFromStorage(STORAGE_KEYS.KNOWN_CARDS);

    if (savedFlashcards && savedFlashcards.length > 0) {
        state.flashcards = savedFlashcards;
    } else if (savedFlashcards === null && savedKnownCards === null) {
        // Only load initial if truly fresh start (both null)
        // If flashcards is [] but knownCards has items, it means completed all.
        // But logic below handles initializing.
        // Let's copy initial so we don't mutate const
        state.flashcards = [...INITIAL_FLASHCARDS];
    } else {
        // savedFlashcards exists but empty (completed all perhaps)
        state.flashcards = savedFlashcards || [];
    }

    state.knownCards = savedKnownCards || [];
    state.currentIndex = 0;
    state.isFlipped = false;

    console.log('Data initialized:', state);
}

export function getCurrentCard() {
    if (state.flashcards.length === 0) return null;
    // ensure index safety
    if (state.currentIndex >= state.flashcards.length) {
        state.currentIndex = 0;
    }
    return state.flashcards[state.currentIndex];
}

export function markCurrentAsKnown() {
    const card = getCurrentCard();
    if (!card) return;

    state.knownCards.push(card);
    state.flashcards.splice(state.currentIndex, 1);

    // Check index bounds after removal
    if (state.currentIndex >= state.flashcards.length) {
        state.currentIndex = 0;
    }

    // Reset flip state for next card
    state.isFlipped = false;

    saveData();
}

export function saveData() {
    saveToStorage(STORAGE_KEYS.FLASHCARDS, state.flashcards);
    saveToStorage(STORAGE_KEYS.KNOWN_CARDS, state.knownCards);
}

export function resetData() {
    state.flashcards = [...INITIAL_FLASHCARDS];
    state.knownCards = [];
    state.currentIndex = 0;
    state.isFlipped = false;
    clearStorage(); // Simply clear storage so next load uses defaults? 
    // Or explicit save:
    // We should save the reset state so a reload keeps it reset.
    // clearStorage clears ALL data. Implementation plan said "clears logic".
    // Requirement: "Reset Action: All data in localStorage related to the flashcards is cleared... and application reloads to display very first flashcard"
    // So let's clear and re-init.
    saveData(); // Save the fresh state
}
