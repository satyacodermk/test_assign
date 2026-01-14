// run-dashboard.js
// Main entry point that coordinates all modules

import { trackProgress } from "./tracker.js";
import { showMotivation } from "./motivate.js";

// Read CLI argument
const sessions = Number(process.argv[2]);

// Validate input
if (isNaN(sessions) || sessions < 0) {
    console.log("Error: Invalid input!");
    process.exit(1);
}

// Execute workflow
const progressPercent = trackProgress(sessions);
showMotivation(progressPercent);
