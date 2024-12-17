export const secToMs = (sec: number): number => sec * 1000;

export const minToMs = (min: number): number => secToMs(min * 60);

export const choose = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const base64 = {
	encode: (input: string): string => {
		try {
			return btoa(input);
		} catch (e) {
			throw new Error('Failed to encode: ' + e);
		}
	},

	decode: (input: string): string => {
		try {
			return atob(input);
		} catch (e) {
			throw new Error('Failed to decode: ' + e);
		}
	}
};
