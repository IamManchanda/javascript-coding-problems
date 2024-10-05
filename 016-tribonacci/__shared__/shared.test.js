export const sharedTests = (getSolution, isOptimized = false) => {
  const testWithConditionalSkip = isOptimized ? test : test.skip;

  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return correct Tribonacci value for 0, 1, and 2', () => {
    expect(solution.tribonacci(0)).toBe(0);
    expect(solution.tribonacci(1)).toBe(1);
    expect(solution.tribonacci(2)).toBe(1);
  });

  test('should return correct Tribonacci value for positive integers', () => {
    expect(solution.tribonacci(3)).toBe(2);
    expect(solution.tribonacci(4)).toBe(4);
    expect(solution.tribonacci(5)).toBe(7);
    expect(solution.tribonacci(6)).toBe(13);
    expect(solution.tribonacci(7)).toBe(24);
    expect(solution.tribonacci(8)).toBe(44);
    expect(solution.tribonacci(9)).toBe(81);
  });

  testWithConditionalSkip('should handle large numbers', () => {
    expect(solution.tribonacci(10)).toBe(149);
    expect(solution.tribonacci(15)).toBe(3136);
    expect(solution.tribonacci(20)).toBe(66012);
    expect(solution.tribonacci(25)).toBe(1389537);
    expect(solution.tribonacci(30)).toBe(29249425);
    expect(solution.tribonacci(35)).toBe(615693474);
  });

  test('should throw an error if not a number', () => {
    expect(() => solution.tribonacci('foo'))
      .toThrowError('Invalid input');
    expect(() => solution.tribonacci(null))
      .toThrowError('Invalid input');
    expect(() => solution.tribonacci(undefined))
      .toThrowError('Invalid input');
  });

  test('should throw an error for negative numbers', () => {
    expect(() => solution.tribonacci(-1))
      .toThrowError('Negative numbers are not allowed');
  });

  test('should not throw an error for non-negative numbers', () => {
    expect(() => solution.tribonacci(0)).not.toThrow();
    expect(() => solution.tribonacci(5)).not.toThrow();
  });
};