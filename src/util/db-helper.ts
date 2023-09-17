export function ensureSingleItem<T>(arr: T[]): T {
  if (arr.length !== 1) {
    throw new Error(`Expected exactly one item, but got ${arr.length} items.`);
  }
  return arr[0];
}

export function ensureNoUndefinedOrNull<T>(data: T | undefined | null): T {
  if (!data) {
    throw new Error(`No data found`);
  }
  return data;
}
