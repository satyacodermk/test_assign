/**
 * welcome.js
 * A simple Node.js script that greets the user from the command line.
 */

// process.argv[2] holds the first user-provided argument
// If no name is provided, default to "Learner"
const name = process.argv[2] || "Learner";

// Display the greeting message
console.log(`Welcome to the platform, ${name}! Let's begin your JavaScript journey.`);
