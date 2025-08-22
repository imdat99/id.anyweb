import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function isObject(value: any): value is Record<string, any> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
export function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K | K[]): Omit<T, K> {
  if (!isObject(obj)) {
    throw new Error('First argument must be an object');
  }
  const keysArray = Array.isArray(keys) ? keys : [keys];
  const result = { ...obj };
  for (const key of keysArray) {
    delete result[key];
  }
  return result;
}