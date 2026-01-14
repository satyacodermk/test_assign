// motivate.js
// Displays motivational messages based on progress

export function showMotivation(progressPercent) {
    let message = "";

    if (progressPercent < 25) {
        message = "Keep going! Every session counts.";
    } else if (progressPercent < 50) {
        message = "Great progress! You're building momentum.";
    } else if (progressPercent < 75) {
        message = "Halfway there! Stay consistent.";
    } else {
        message = "Amazing work! You're almost done!";
    }

    console.log(`Motivation: ${message}`);
}
