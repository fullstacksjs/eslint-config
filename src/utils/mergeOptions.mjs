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
 * Merges user options into the defaults one level deep.
 * Nested values are assigned by reference and are never recursively cloned.
 *
 * @param {Options} defaults
 * @param {Options} overrides
 * @returns {Options}
 */
export function mergeOptions(defaults, overrides) {
  const result = { ...defaults };

  for (const [key, value] of Object.entries(overrides ?? {})) {
    if (value === undefined || key === '__proto__') continue;

    const defaultValue = result[key];

    result[key] = isPlainObject(defaultValue) && isPlainObject(value) ? { ...defaultValue, ...value } : value;
  }

  return result;
}
