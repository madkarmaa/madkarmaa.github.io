Array.prototype.choose = function <T extends any[]>(this: T): T[Extract<keyof T, number>] {
	return this[Math.floor(Math.random() * this.length)];
};
