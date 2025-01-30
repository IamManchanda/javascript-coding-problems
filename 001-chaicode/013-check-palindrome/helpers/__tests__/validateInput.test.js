import { validateInput } from '../validateInput';

describe('validateInput', () => {
  test('should throw an error when input is invalid', () => {
    expect(() => validateInput(123)).toThrow('Invalid input');
    expect(() => validateInput({})).toThrow('Invalid input');
    expect(() => validateInput([])).toThrow('Invalid input');
    expect(() => validateInput(null)).toThrow('Invalid input');
    expect(() => validateInput(undefined)).toThrow('Invalid input');
  });

  test('should not throw an error when input is a valid string', () => {
    expect(() => validateInput('hello')).not.toThrow();
  });
});