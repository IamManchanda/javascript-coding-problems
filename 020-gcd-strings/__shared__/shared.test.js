export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test("should return the greatest common divisor of strings that does have a common divisor", () => {
    expect(solution.gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
    expect(solution.gcdOfStrings("ABABAB", "AB")).toBe("AB");
  });

  test("should return an empty string when the strings do not have a common divisor", () => {
    expect(solution.gcdOfStrings("LEET", "CODE")).toBe("");
    expect(solution.gcdOfStrings("ABCDEF", "ABC")).toBe("");
  });

  test("should throw an error if the input is not a string", () => {
    expect(() => solution.gcdOfStrings(1, "ABC")).toThrow("Invalid input");
    expect(() => solution.gcdOfStrings("ABC", 1)).toThrow("Invalid input");
    expect(() => solution.gcdOfStrings(1, 1)).toThrow("Invalid input");
  });

  test("should throw an error if the input is an empty string", () => {
    expect(() => solution.gcdOfStrings("", "ABC")).toThrow("Empty strings are not allowed");
    expect(() => solution.gcdOfStrings("ABC", "")).toThrow("Empty strings are not allowed");
    expect(() => solution.gcdOfStrings("", "")).toThrow("Empty strings are not allowed");
  });

  test("should throw an error if the input contains invalid characters", () => {
    expect(() => solution.gcdOfStrings("ABC", "123")).toThrow("Invalid characters");
    expect(() => solution.gcdOfStrings("ABC", "abc")).toThrow("Invalid characters");
    expect(() => solution.gcdOfStrings("ABC", "A B C")).toThrow("Invalid characters");
  });

  test("should throw an error if the input is too long", () => {
    expect(() => solution.gcdOfStrings("A".repeat(101), "ABC")).toThrow("Strings are too long");
    expect(() => solution.gcdOfStrings("ABC", "A".repeat(101))).toThrow("Strings are too long");
    expect(() => solution.gcdOfStrings("A".repeat(101), "A".repeat(101))).toThrow("Strings are too long");
  });

  test("should not throw an error if the input is valid", () => {
    expect(() => solution.gcdOfStrings("ABC", "DEF")).not.toThrow();
  });
};