import { everyBrainrot } from '@/constants';

export const randomBrainrot = () => everyBrainrot[Math.floor(Math.random() * everyBrainrot.length)];

export const secToMs = (sec: number) => sec * 1000;
