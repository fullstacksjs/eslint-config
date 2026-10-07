/**
 * @typedef {import('../types').Options} Options
 */

/**
 * @param {unknown} value
 * @returns {value is Record<string, unknown>}
 */
function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) return false;
  const proto = Object.getPrototypeOf(value);

  return proto === Object.prototype || proto === null;
}

/**
 * Merges user options into the defaults one level deep. Nested values such as plugins,
 * parsers and `overrides` must keep their identity, so they are never cloned.
 * @param {Options} defaults
 * @param {Options} overrides
 * @returns {Options}
 */
export function mergeOptions(defaults, overrides) {
  const result = { ...defaults };

  for (const [key, value] of Object.entries(overrides)) {
    const defaultValue = result[key];
    result[key] = isPlainObject(defaultValue) && isPlainObject(value) ? { ...defaultValue, ...value } : value;
  }

  return result;
}
