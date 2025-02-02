import { validateInput } from '../validateInput';

describe('validateInput', () => {
  test('should throw an error when input is invalid', () => {
    expect(() => validateInput(123, 3)).toThrow('Invalid input');
    expect(() => validateInput([1, 2, 3], '3')).toThrow('Invalid input');
    expect(() => validateInput([1, 2, 3], 3, '0')).toThrow('Invalid input');
  });

  test('should not throw an error when input is valid', () => {
    expect(() => validateInput([1, 2, 3], 2, 0)).not.toThrow();
  });

  test('should throw an error when array is empty', () => {
    expect(() => validateInput([], 2, 0)).toThrow('Array is empty');
  });

  test('should throw an error when currIndex is out of bounds', () => {
    expect(() => validateInput([1, 2, 3], 2, -1)).toThrow('Invalid index');
    expect(() => validateInput([1, 2, 3], 2, 3)).toThrow('Invalid index');
  });

  test('should not throw an error when currIndex is not provided', () => {
    expect(() => validateInput([1, 2, 3], 2)).not.toThrow();
  });

  test('should throw an error when array contains non-number elements', () => {
    expect(() => validateInput([1, 2, '3'], 2, 0)).toThrow('Array must contain only numbers');
  });
});