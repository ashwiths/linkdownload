/**
 * Validates whether a given string is a correctly formatted URL
 * @param {string} urlStr - The URL to validate
 * @returns {boolean} True if valid URL
 */
export const isValidUrl = (urlStr) => {
  try {
    const url = new URL(urlStr);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
};
