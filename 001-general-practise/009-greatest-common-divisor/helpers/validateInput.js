export const validateInput = (m, n) => {
  if (typeof m !== 'number' || typeof n !== 'number') {
    throw new Error('Invalid input');
  }

  if (m < 0 || n < 0) {
    throw new Error('Negative numbers are not allowed');
  }

  if (m === 0 && n === 0) {
    throw new Error('GCD of 0 and 0 is not defined');
  }

  if (m === 0 || n === 0) {
    throw new Error('GCD of 0 and any number is the number itself');
  }
}
