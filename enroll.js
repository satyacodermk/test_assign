/**
 * enroll.js
 * Interactive Course Enrollment Calculator
 */

import readline from "readline";

function calculateFee(price, discount, currentSeat = null) {
    try {
        // ✅ Correct numeric validation
        if (Number.isNaN(price) || Number.isNaN(discount)) {
            throw new Error("Price and discount must be numbers");
        }

        if (price <= 0) {
            throw new Error("Price must be positive");
        }

        if (discount < 0 || discount > 100) {
            throw new Error("Discount must be between 0 and 100");
        }

        const discountAmount = price * (discount / 100);
        const finalFee = price - discountAmount;

        let result = `Final Fee: ${finalFee}`;

        if (currentSeat !== null && currentSeat <= 10) {
            result += `\nEligible for Early Bird Bonus!`;
        }

        return result;

    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// ---------- CLI INPUT HANDLING ----------

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter course price: ", (priceInput) => {
    rl.question("Enter discount percentage: ", (discountInput) => {
        rl.question("Enter current seat number (optional): ", (seatInput) => {

            const price = Number(priceInput);
            const discount = Number(discountInput);
            const seat = seatInput.trim() === "" ? null : Number(seatInput);

            const result = calculateFee(price, discount, seat);

            console.log("\n--- Enrollment Result ---");
            console.log(result);

            rl.close();
        });
    });
});
