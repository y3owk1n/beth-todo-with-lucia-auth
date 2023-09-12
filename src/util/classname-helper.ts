import { twMerge } from "tailwind-merge";

type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];

function cx(...args: ClassValue[]) {
  return args
    .flat()
    .filter((x) => typeof x === "string")
    .join(" ")
    .trim();
}

/**
 * Function to merge Tailwind classes
 * @param {ClassValue[]} inputs - Array of Tailwind classes
 * @returns {string} - Merged Tailwind classes
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(cx(inputs));
}
