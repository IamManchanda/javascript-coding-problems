import { validateInput } from '../validateInput';

describe('validateInput', () => {
  test('should throw an error if input is not an array', () => {
    expect(() => validateInput('string')).toThrow('Input must be an array');
  });

  test('should throw an error if array contains non-numbers', () => {
    expect(() => validateInput([1, 2, 'string'])).toThrow('Array must contain only numbers');
  });

  test('should throw an error if array contains non-integers', () => {
    expect(() => validateInput([1, 2, 3.5])).toThrow('Array must contain only integers');
  });

  test('should throw an error if key is not a number', () => {
    expect(() => validateInput([1, 2, 3], 'string')).toThrow('Key must be a number');
  });

  test('should throw an error if key is not an integer', () => {
    expect(() => validateInput([1, 2, 3], 3.5)).toThrow('Key must be an integer');
  });

  test('should not throw an error if input is valid', () => {
    expect(() => validateInput([1, 2, 3], 3)).not.toThrow();
  });
});