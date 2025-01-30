export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return true when sum is possible', () => {
    expect(solution.coinSum(10, [1, 5])).toBe(true);
    expect(solution.coinSum(10, [1, 2, 3])).toBe(true);
    expect(solution.coinSum(10, [2, 3, 5])).toBe(true);
  });

  test('should return false when sum is not possible', () => {
    expect(solution.coinSum(15, [2, 4, 6])).toBe(false);
  });
  
  test('should return true when target is 0', () => {
    expect(solution.coinSum(0, [1, 2, 3])).toBe(true);
  });

  test('should return true when target is 0 and coins are empty', () => {
    expect(solution.coinSum(0, [])).toBe(true);
  });

  test('should return false when target is more than 0 and coins are empty', () => {
    expect(solution.coinSum(10, [])).toBe(false);
  });

  test('should throw an error for invalid input', () => {
    expect(() => solution.coinSum("abc", [1, 2, 5, 10, 20, 50, 100, 200])).toThrow("Invalid input");
    expect(() => solution.coinSum(200, "abc")).toThrow("Invalid input");
  });

  test('should throw an error for negative target', () => {
    expect(() => solution.coinSum(-1, [1, 2, 5, 10, 20, 50, 100, 200])).toThrow("Negative numbers are not allowed");
  });

  test('should throw an error for invalid coins', () => {
    expect(() => solution.coinSum(200, [1, 2, 5, 10, 20, 50, 100, "abc"])).toThrow("Invalid coins");
    expect(() => solution.coinSum(200, [1, 2, 5, 10, 20, 50, 100, -1])).toThrow("Invalid coins");
  });

  test('should not throw an error for valid input', () => {
    expect(() => solution.coinSum(200, [1, 2, 5, 10, 20, 50, 100, 200])).not.toThrow();
  });
};