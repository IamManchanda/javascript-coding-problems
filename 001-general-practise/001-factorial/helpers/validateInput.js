export const validateInput = (n) => {
  if (typeof n !== 'number') {
    throw new Error('Invalid input');
  }

  if (n < 0) {
    throw new Error('Negative numbers are not allowed');
  }
}
