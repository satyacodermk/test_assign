// DOM Elements
const elements = {
    card: document.getElementById('flashcard'),
    cardTerm: document.getElementById('card-term'),
    cardDefinition: document.getElementById('card-definition'),
    currentCount: document.getElementById('current-card-count'),
    totalCount: document.getElementById('total-card-count'),
    knownCount: document.getElementById('known-count'),
    completedList: document.getElementById('completed-list'),
    studyScreen: document.getElementById('study-screen'),
    progressScreen: document.getElementById('progress-screen'),
    toggleViewBtn: document.getElementById('toggle-view-btn')
};

export function updateCardDisplay(card, currentIdx, total, isFlipped) {
    if (!card) {
        elements.cardTerm.textContent = "No more cards! 🎉";
        elements.cardDefinition.textContent = "";
        elements.currentCount.textContent = 0;
        elements.totalCount.textContent = 0;
        // Disable flip maybe?
        elements.card.classList.remove('flipped');
        return;
    }

    elements.cardTerm.textContent = card.term;
    elements.cardDefinition.textContent = card.definition;
    elements.currentCount.textContent = total > 0 ? currentIdx + 1 : 0;
    elements.totalCount.textContent = total;

    if (isFlipped) {
        elements.card.classList.add('flipped');
    } else {
        elements.card.classList.remove('flipped');
    }
}

export function updateProgressDisplay(knownCards) {
    elements.knownCount.textContent = knownCards.length;

    elements.completedList.innerHTML = '';
    knownCards.forEach(card => {
        const li = document.createElement('li');
        li.textContent = card.term;
        elements.completedList.appendChild(li);
    });
}

export function toggleScreen() {
    const isStudyActive = elements.studyScreen.classList.contains('active');

    if (isStudyActive) {
        elements.studyScreen.classList.remove('active');
        elements.studyScreen.classList.add('hidden');
        elements.progressScreen.classList.remove('hidden');
        elements.progressScreen.classList.add('active');
        elements.toggleViewBtn.textContent = 'Back to Study';
    } else {
        elements.progressScreen.classList.remove('active');
        elements.progressScreen.classList.add('hidden');
        elements.studyScreen.classList.remove('hidden');
        elements.studyScreen.classList.add('active');
        elements.toggleViewBtn.textContent = 'View Progress';
    }
}

export function animateFlip() {
    // Relying on CSS class toggle in updateCardDisplay for state-based flip.
    // However, if we want to visually toggle without state update (pure DOM), we can
    // but we are state-driven.
}
