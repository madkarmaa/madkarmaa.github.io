export function getRandomNumber(min, max) {
	const range = max - min + 1;
	const bytesNeeded = Math.ceil(Math.log2(range) / 8);
	const randomBytes = new Uint8Array(bytesNeeded);
	window.crypto.getRandomValues(randomBytes);

	let randomValue = 0;
	for (let i = 0; i < bytesNeeded; i++) {
		randomValue = (randomValue << 8) + randomBytes[i];
	}

	return min + (randomValue % range);
}
