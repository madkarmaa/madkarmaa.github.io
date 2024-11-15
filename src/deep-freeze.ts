const originalFreeze = Object.freeze;
const originalSeal = Object.seal;

/**
 * Recursively freezes and seals an object and all its nested properties.
 * @param obj The object to freeze and seal.
 * @returns The frozen and sealed object.
 */
function deepFreezeAndSeal<T extends Record<string, any>>(obj: T): Readonly<T> {
	Object.getOwnPropertyNames(obj).forEach((prop) => {
		const value = obj[prop];
		if (value && typeof value === 'object') deepFreezeAndSeal(value);
	});

	originalSeal(obj);
	return originalFreeze(obj);
}

Object.freeze = deepFreezeAndSeal;
