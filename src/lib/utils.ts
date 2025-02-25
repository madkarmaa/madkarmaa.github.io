import { browser } from '$app/environment';

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

export const isMobileDevice = (): boolean => {
	// idk if this is the best way of handling the window object not being present but it works
	if (!browser) return false;

	const isHoverSupported = window.matchMedia('(hover: hover)').matches;
	const isTouchSupported = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

	// if the device does not support hover but supports touch, it's likely a mobile device
	return !isHoverSupported && isTouchSupported;
};

export const catchError = async <T, E extends new (message?: string) => Error>(
	promise: Promise<T>,
	errorsToCatch?: E[]
): Promise<[undefined, T] | [InstanceType<E>]> => {
	try {
		const data = await promise;
		return [undefined, data] as [undefined, T];
	} catch (error: any) {
		if (!errorsToCatch) return [error];
		if (errorsToCatch.some((e) => error instanceof e)) return [error];
		throw error;
	}
};
