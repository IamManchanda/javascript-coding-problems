export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return the greatest common divisor', () => {
    expect(solution.gcd(2, 4)).toBe(2);
    expect(solution.gcd(4, 2)).toBe(2);
    expect(solution.gcd(3, 7)).toBe(1);
    expect(solution.gcd(7, 3)).toBe(1);
    expect(solution.gcd(3, 9)).toBe(3);
    expect(solution.gcd(9, 3)).toBe(3);
    expect(solution.gcd(12, 15)).toBe(3);
    expect(solution.gcd(15, 12)).toBe(3);
    expect(solution.gcd(12, 18)).toBe(6);
    expect(solution.gcd(18, 12)).toBe(6);
    expect(solution.gcd(24, 60)).toBe(12);
    expect(solution.gcd(60, 24)).toBe(12);
  });

  test('should throw an error for invalid input', () => {
    expect(() => solution.gcd('a', 2)).toThrow('Invalid input');
    expect(() => solution.gcd(1, 'b')).toThrow('Invalid input');
    expect(() => solution.gcd('a', 'b')).toThrow('Invalid input');
  });

  test('should throw an error for negative numbers', () => {
    expect(() => solution.gcd(-1, 2)).toThrow('Negative numbers are not allowed');
    expect(() => solution.gcd(1, -2)).toThrow('Negative numbers are not allowed');
    expect(() => solution.gcd(-1, -2)).toThrow('Negative numbers are not allowed');
  });

  test('should throw an error for GCD of 0 and 0', () => {
    expect(() => solution.gcd(0, 0)).toThrow('GCD of 0 and 0 is not defined');
  });

  test('should throw an error for GCD of 0 and any number', () => {
    expect(() => solution.gcd(0, 2)).toThrow('GCD of 0 and any number is the number itself');
    expect(() => solution.gcd(2, 0)).toThrow('GCD of 0 and any number is the number itself');
  });
};