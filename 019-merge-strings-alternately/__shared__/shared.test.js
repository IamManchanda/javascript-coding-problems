export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test("should merge strings alternately", () => {
    expect(solution.mergeAlternately("abc", "def")).toBe("adbecf");
    expect(solution.mergeAlternately("ab", "xyz")).toBe("axbyz");
    expect(solution.mergeAlternately("a", "b")).toBe("ab");
  });

  test("should merge strings of different lengths", () => {
    expect(solution.mergeAlternately("abc", "de")).toBe("adbec");
    expect(solution.mergeAlternately("ab", "xyzw")).toBe("axbyzw");
  });

  test("should throw an error if the input is not a string", () => {
    expect(() => solution.mergeAlternately(1, "abc")).toThrow("Invalid input");
    expect(() => solution.mergeAlternately("abc", 1)).toThrow("Invalid input");
    expect(() => solution.mergeAlternately(1, 1)).toThrow("Invalid input");
  });

  test("should throw an error if the input is an empty string", () => {
    expect(() => solution.mergeAlternately("", "abc")).toThrow("Empty strings are not allowed");
    expect(() => solution.mergeAlternately("abc", "")).toThrow("Empty strings are not allowed");
    expect(() => solution.mergeAlternately("", "")).toThrow("Empty strings are not allowed");
  });

  test("should throw an error if the input contains invalid characters", () => {
    expect(() => solution.mergeAlternately("abc", "123")).toThrow("Invalid characters");
    expect(() => solution.mergeAlternately("abc", "ABC")).toThrow("Invalid characters");
    expect(() => solution.mergeAlternately("abc", "a b c")).toThrow("Invalid characters");
  });

  test("should throw an error if the input is too long", () => {
    expect(() => solution.mergeAlternately("a".repeat(101), "abc")).toThrow("Strings are too long");
    expect(() => solution.mergeAlternately("abc", "a".repeat(101))).toThrow("Strings are too long");
    expect(() => solution.mergeAlternately("a".repeat(101), "a".repeat(101))).toThrow("Strings are too long");
  });

  test("should not throw an error if the input is valid", () => {
    expect(() => solution.mergeAlternately("abc", "def")).not.toThrow();
  });
};