/**
 * @template T
 * @param {T | null | undefined} value
 * @returns {T | {}}
 */
export function objectOrEmpty(value) {
  return typeof value === 'object' && value !== null ? value : {};
}
