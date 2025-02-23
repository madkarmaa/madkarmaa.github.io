export const secToMs = (sec: number): number => sec * 1000;

export const minToMs = (min: number): number => secToMs(min * 60);

export const base64 = {
	encode: (input: string): string => btoa(input),
	decode: (input: string): string => atob(input)
};

export const randomlyTrue = (probability: number = 50): boolean => {
	if (probability < 0 || probability > 100)
		throw new TypeError('probability must be between 0 and 100');
	return Math.random() * 100 <= probability;
};
