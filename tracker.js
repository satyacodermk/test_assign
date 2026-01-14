// tracker.js
// Calculates study time, progress percentage, and progress bar

import { totalCourseHours, hoursPerSession } from "./config.js";

export function trackProgress(sessions) {
    const totalStudyTime = sessions * hoursPerSession;
    const progressPercent = (totalStudyTime / totalCourseHours) * 100;

    const filledBlocks = Math.min(10, Math.floor(progressPercent / 10));
    const progressBar =
        "█".repeat(filledBlocks) + "░".repeat(10 - filledBlocks);

    console.log(`Total study time: ${totalStudyTime} hours`);
    console.log(`Progress: ${progressPercent.toFixed(2)}%`);
    console.log(`Progress bar: ${progressBar}`);

    return progressPercent;
}
