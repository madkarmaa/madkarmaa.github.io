let lastNumber = 0;

export function generateNext(): string {
	const increment = Math.floor(Math.random() * 50) + 1; // Random increment between 1 and 50
	lastNumber = Math.min(lastNumber + increment, 999999); // Ensure max is 999999

	// Convert the number to a string and pad it to 6 digits
	return lastNumber.toString().padStart(6, '0');
}
