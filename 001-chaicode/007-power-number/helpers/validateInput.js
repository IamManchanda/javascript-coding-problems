export const validateInput = (b, e) => {
  if (typeof b !== 'number' || typeof e !== 'number') {
    throw new Error('Invalid input');
  }

  if (b < 0 || e < 0) {
    throw new Error('Negative numbers are not allowed');
  }
}
