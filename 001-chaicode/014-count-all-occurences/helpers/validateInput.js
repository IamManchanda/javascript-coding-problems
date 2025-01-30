export const validateInput = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  if (arr.some((num) => typeof num !== 'number')) {
    throw new Error('Array must contain only numbers');
  }

  if (arr.some((num) => !Number.isInteger(num))) {
    throw new Error('Array must contain only integers');
  }

  if (typeof key !== 'number') {
    throw new Error('Key must be a number');
  }

  if (!Number.isInteger(key)) {
    throw new Error('Key must be an integer');
  }
}
