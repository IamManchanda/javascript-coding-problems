export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test("sum of 0 numbers", () => {
    expect(solution.sum(0)).toBe(0);
  });

  test("sum of 1 number", () => {
    expect(solution.sum(1)).toBe(1);
  });

  test("sum of n numbers", () => {
    expect(solution.sum(5)).toBe(15);
    expect(solution.sum(10)).toBe(55);
    expect(solution.sum(100)).toBe(5050);
  });

  test("should throw an error if n is not a number", () => {
    expect(() => solution.sum("abc")).toThrow("Invalid input");
    expect(() => solution.sum(null)).toThrow("Invalid input");
    expect(() => solution.sum(undefined)).toThrow("Invalid input");
    expect(() => solution.sum({})).toThrow("Invalid input");
  });

  test("should throw an error if n is a negative number", () => {
    expect(() => solution.sum(-1)).toThrow("Negative numbers are not allowed");
    expect(() => solution.sum(-100)).toThrow("Negative numbers are not allowed");
  });

  test("should not throw an error if n is a non-negative number", () => {
    expect(() => solution.sum(0)).not.toThrow();
    expect(() => solution.sum(5)).not.toThrow();
    expect(() => solution.sum(100)).not.toThrow();
  });
};