export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return the power of a number', () => {
    expect(solution.power(2, 3)).toBe(8);
    expect(solution.power(3, 3)).toBe(27);
    expect(solution.power(5, 2)).toBe(25);
    expect(solution.power(10, 2)).toBe(100);
  });

  test('should return 1 if exponent is 0', () => {
    expect(solution.power(2, 0)).toBe(1);
    expect(solution.power(3, 0)).toBe(1);
    expect(solution.power(5, 0)).toBe(1);
    expect(solution.power(10, 0)).toBe(1);
  });

  test('should return the base if exponent is 1', () => {
    expect(solution.power(2, 1)).toBe(2);
    expect(solution.power(3, 1)).toBe(3);
    expect(solution.power(5, 1)).toBe(5);
    expect(solution.power(10, 1)).toBe(10);
  });

  test('should throw an error if base and/or exponent not a number', () => {
    expect(() => solution.power('a', 2)).toThrow();
    expect(() => solution.power(2, 'b')).toThrow();
    expect(() => solution.power('c', 'd')).toThrow();
  });

  test('should throw an error base and/or exponent are negative numbers', () => {
    expect(() => solution.power(-1, 2)).toThrow();
    expect(() => solution.power(2, -3)).toThrow();
    expect(() => solution.power(-4, -5)).toThrow();
  });

  test('should not throw an error if both base and exponent non-negative numbers', () => {
    expect(() => solution.power(2, 3)).not.toThrow();
  });
};