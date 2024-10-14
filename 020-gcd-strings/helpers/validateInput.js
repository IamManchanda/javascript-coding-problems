export const validateInput = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('Invalid input');
  }

  if (str1.length === 0 || str2.length === 0) {
    throw new Error('Empty strings are not allowed');
  }

  if (!/^[A-Z]*$/.test(str1) || !/^[A-Z]*$/.test(str2)) {
    throw new Error('Invalid characters');
  }

  if (str1.length > 100 || str2.length > 100) {
    throw new Error('Strings are too long');
  }
}
