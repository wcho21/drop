export function findOrThrow<T>(array: T[], predicate: (elem: T) => boolean): T {
  const found = array.find(predicate);
  if (found === undefined) {
    throw new Error(`Element not found in array '${array}'`);
  }

  return found;
}
