export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return true for empty string', () => {
    expect(solution.isPalindrome('')).toBe(true);
  });

  test('should return true for single character string', () => {
    expect(solution.isPalindrome('a')).toBe(true);
  });

  test('should return true for palindrome string', () => {
    expect(solution.isPalindrome('abba')).toBe(true);
    expect(solution.isPalindrome('madam')).toBe(true);
    expect(solution.isPalindrome('racecar')).toBe(true);
  });

  test('should return false for non-palindrome string', () => {
    expect(solution.isPalindrome('abc')).toBe(false);
    expect(solution.isPalindrome('hello')).toBe(false);
  });

  test('should throw error for invalid input', () => {
    expect(() => solution.isPalindrome()).toThrow();
    expect(() => solution.isPalindrome(123)).toThrow();
    expect(() => solution.isPalindrome(null)).toThrow();
  });

  test('should not throw error for valid input', () => {
    expect(() => solution.isPalindrome('hello')).not.toThrow();
    expect(() => solution.isPalindrome('madam')).not.toThrow();
  });
};