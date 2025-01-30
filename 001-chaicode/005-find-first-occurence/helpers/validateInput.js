export const validateInput = (arr, findMe, currIndex) => {
  if (!Array.isArray(arr) || typeof findMe !== 'number' || (
    typeof currIndex !== 'number' && currIndex !== undefined
  )) {
    throw new Error('Invalid input');
  }

  if (arr.length === 0) {
    throw new Error('Array is empty');
  }

  if (currIndex < 0 || currIndex >= arr.length) {
    throw new Error('Invalid index');
  }

  if (arr.some((el) => typeof el !== 'number')) {
    throw new Error('Array must contain only numbers');
  }
}
