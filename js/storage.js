export const STORAGE_KEYS = {
    FLASHCARDS: 'flashcards_data',
    KNOWN_CARDS: 'known_cards_data'
};

export function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`Data saved to localStorage for key: ${key}`);
    } catch (error) {
        console.error('Error saving to localStorage', error);
    }
}

export function loadFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error loading from localStorage', error);
        return null;
    }
}

export function clearStorage() {
    try {
        localStorage.clear();
        console.log('LocalStorage cleared.');
    } catch (error) {
        console.error('Error clearing localStorage', error);
    }
}
