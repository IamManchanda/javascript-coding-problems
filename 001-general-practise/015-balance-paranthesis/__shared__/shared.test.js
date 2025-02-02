export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return true for empty array', () => {
    expect(solution.balanceParenthesis([])).toBe(true);
  });

  test('should return true for valid balanced parenthesis', () => {
    expect(solution.balanceParenthesis(['(', ')'])).toBe(true);
    expect(solution.balanceParenthesis(['(', '(', ')', ')'])).toBe(true);
    expect(solution.balanceParenthesis(['(', '(', ')', ')', '(', ')'])).toBe(true);
  });

  test('should return false for invalid unbalanced parenthesis', () => {
    expect(solution.balanceParenthesis(['(', ')', ')'])).toBe(false);
    expect(solution.balanceParenthesis(['(', ')', ')', '('])).toBe(false);
    expect(solution.balanceParenthesis(['(', ')', '(', ')', ')'])).toBe(false);
    expect(solution.balanceParenthesis(['(', ')', ')', '(', ')'])).toBe(false);
  });

  test('should throw error for invalid input', () => {
    expect(() => solution.balanceParenthesis('')).toThrow('Input should be an array');
    expect(() => solution.balanceParenthesis([1, 2, 3])).toThrow('Input array should only contain strings');
    expect(() => solution.balanceParenthesis(['(', '))'])).toThrow('Input array should only contain single character strings');
    expect(() => solution.balanceParenthesis(['(', '[', ']'])).toThrow("Input array should only contain '(' or ')' characters");
  });

  test('should not throw error for valid input', () => {
    expect(() => solution.balanceParenthesis(['(', ')'])).not.toThrow();
  });
};