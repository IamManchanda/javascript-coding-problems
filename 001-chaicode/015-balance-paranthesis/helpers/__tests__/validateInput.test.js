import { validateInput } from '../validateInput';

describe('validateInput', () => {
  test('should throw error if input is not an array', () => {
    expect(() => validateInput('')).toThrow('Input should be an array');
  });

  test('should throw error if input array contains non-string values', () => {
    expect(() => validateInput([1, 2, 3])).toThrow('Input array should only contain strings');
  });

  test('should throw error if input array contains string with length greater than 1', () => {
    expect(() => validateInput(['(', '))'])).toThrow('Input array should only contain single character strings');
  });

  test('should throw error if input array contains string other than "(" or ")"', () => {
    expect(() => validateInput(['(', '[', ']'])).toThrow("Input array should only contain '(' or ')' characters");
  });

  test('should not throw error for valid input', () => {
    expect(() => validateInput(['(', ')'])).not.toThrow();
  });
});