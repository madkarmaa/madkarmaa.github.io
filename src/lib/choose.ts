Array.prototype.choose = function <T>(this: T[]): T | undefined {
	return this[Math.floor(Math.random() * this.length)];
};
