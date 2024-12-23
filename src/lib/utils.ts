export const secToMs = (sec: number): number => sec * 1000;

export const minToMs = (min: number): number => secToMs(min * 60);

export const base64 = {
	encode: (input: string): string => btoa(input),
	decode: (input: string): string => atob(input)
};
