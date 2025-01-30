export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test("should return the correct expected output", () => {
    expect(solution.kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([true, true, true, false, true]);
    expect(solution.kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([true, false, false, false, false]);
    expect(solution.kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
  });

  test("should throw an error if the input is not an array of numbers and a number", () => {
    expect(() => solution.kidsWithCandies("abc", 2)).toThrow("Invalid input");
    expect(() => solution.kidsWithCandies([1, 2, 3], "abc")).toThrow("Invalid input");
  });

  test("should throw an error if the input is an empty array", () => {
    expect(() => solution.kidsWithCandies([], 2)).toThrow("Invalid input");
  });

  test("should throw an error if the input is too short or too long", () => {
    expect(() => solution.kidsWithCandies([1], 2)).toThrow("Invalid input");
    expect(() => solution.kidsWithCandies(new Array(101).fill(1), 2)).toThrow("Invalid input");
  });

  test("should throw an error if the input contains invalid numbers", () => {
    expect(() => solution.kidsWithCandies([0, 1, 2], 2)).toThrow("Invalid input");
    expect(() => solution.kidsWithCandies([1, 101, 2], 2)).toThrow("Invalid input");
  });

  test("should throw an error if the extra candies are too few or too many", () => {
    expect(() => solution.kidsWithCandies([1, 2, 3], 0)).toThrow("Invalid input");
    expect(() => solution.kidsWithCandies([1, 2, 3], 51)).toThrow("Invalid input");
  });

  test("should not throw an error if the input is valid", () => {
    expect(() => solution.kidsWithCandies([1, 2, 3], 2)).not.toThrow();
  });
};