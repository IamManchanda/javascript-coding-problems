export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return count of minimum coins required to make the sum when sum is possible', () => {
    expect(solution.minCoinSum(11, [1, 5, 6])).toBe(2);
    expect(solution.minCoinSum(10, [1, 2, 3])).toBe(4);
    expect(solution.minCoinSum(11, [2, 3, 5])).toBe(3);
  });

  test('should return -1 when sum is not possible', () => {
    expect(solution.minCoinSum(15, [2, 4, 6])).toBe(-1);
  });

  test('should return 0 when target is 0', () => {
    expect(solution.minCoinSum(0, [1, 2, 3])).toBe(0);
  });

  test('should return 0 when target is 0 and coins are empty', () => {
    expect(solution.minCoinSum(0, [])).toBe(0);
  });

  test('should return -1 when target is more than 0 and coins are empty', () => {
    expect(solution.minCoinSum(10, [])).toBe(-1);
  });

  test('should throw an error for invalid input', () => {
    expect(() => solution.minCoinSum("abc", [1, 2, 5, 10, 20, 50, 100, 200])).toThrow("Invalid input");
    expect(() => solution.minCoinSum(200, "abc")).toThrow("Invalid input");
  });

  test('should throw an error for negative target', () => {
    expect(() => solution.minCoinSum(-1, [1, 2, 5, 10, 20, 50, 100, 200])).toThrow("Negative numbers are not allowed");
  });

  test('should throw an error for invalid coins', () => {
    expect(() => solution.minCoinSum(200, [1, 2, 5, 10, 20, 50, 100, "abc"])).toThrow("Invalid coins");
    expect(() => solution.minCoinSum(200, [1, 2, 5, 10, 20, 50, 100, -1])).toThrow("Invalid coins");
  });

  test('should not throw an error for valid input', () => {
    expect(() => solution.minCoinSum(200, [1, 2, 5, 10, 20, 50, 100, 200])).not.toThrow();
  });
};