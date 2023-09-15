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

export function hx(...args: ClassValue[]) {
  return args
    .filter((x) => typeof x === "string")
    .join(" ")
    .trim();
}
