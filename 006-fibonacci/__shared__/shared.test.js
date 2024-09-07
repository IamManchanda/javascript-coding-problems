export const sharedTests = (getSolution, isOptimized = false) => {
  const testWithConditionalSkip = isOptimized ? test : test.skip;

  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return correct Fibonacci value for 0 and 1', () => {
    expect(solution.fibonacci(0)).toBe(0);
    expect(solution.fibonacci(1)).toBe(1);
  });

  test('should return correct Fibonacci value for positive integers', () => {
    expect(solution.fibonacci(2)).toBe(1);
    expect(solution.fibonacci(3)).toBe(2);
    expect(solution.fibonacci(4)).toBe(3);
    expect(solution.fibonacci(5)).toBe(5);
    expect(solution.fibonacci(6)).toBe(8);
    expect(solution.fibonacci(7)).toBe(13);
    expect(solution.fibonacci(8)).toBe(21);
    expect(solution.fibonacci(9)).toBe(34);
  });

  testWithConditionalSkip('should handle large numbers', () => {
    expect(solution.fibonacci(10)).toBe(55);
    expect(solution.fibonacci(20)).toBe(6765);
    expect(solution.fibonacci(30)).toBe(832040);
    expect(solution.fibonacci(40)).toBe(102334155);
    expect(solution.fibonacci(50)).toBe(12586269025);
  });

  test('should throw an error if not a number', () => {
    expect(() => solution.fibonacci('foo'))
      .toThrowError('Invalid input');
    expect(() => solution.fibonacci(null))
      .toThrowError('Invalid input');
    expect(() => solution.fibonacci(undefined))
      .toThrowError('Invalid input');
  });

  test('should throw an error for negative numbers', () => {
    expect(() => solution.fibonacci(-1))
      .toThrowError('Negative numbers are not allowed');
  });

  test('should not throw an error for non-negative numbers', () => {
    expect(() => solution.fibonacci(0)).not.toThrow();
    expect(() => solution.fibonacci(5)).not.toThrow();
  });
};