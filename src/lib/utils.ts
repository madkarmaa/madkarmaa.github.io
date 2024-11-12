import { everyBrainrot } from '@/constants';

export function randomBrainrot() {
	return everyBrainrot[Math.floor(Math.random() * everyBrainrot.length)];
}
