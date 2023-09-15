/**
 * Hyperscript helper to remove targeted error message if exists
 * @param {string} id
 * @returns {string} htmx string
 */
export function removeErrorMessageIfExistsBeforeHtmxRequest(
  id: string,
): string {
  return `on htmx:beforeRequest if ${id} exists then remove ${id} end`;
}
