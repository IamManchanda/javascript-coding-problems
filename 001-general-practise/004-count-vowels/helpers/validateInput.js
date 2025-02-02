export const validateInput = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Invalid input');
  }
}