export function ensureSingleItem<T>(arr: T[]): T {
  if (arr.length !== 1) {
    throw new Error(`Expected exactly one item, but got ${arr.length} items.`);
  }
  return arr[0];
}
