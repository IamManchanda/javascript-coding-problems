import { validateInput } from "../validateInput";

describe("validateInput", () => {
  test("should throw an error if the input is not an array of numbers and a number", () => {
    expect(() => validateInput("abc", 2)).toThrow("Invalid input");
    expect(() => validateInput([1, 2, 3], "abc")).toThrow("Invalid input");
  });

  test("should throw an error if the input is an empty array", () => {
    expect(() => validateInput([], 2)).toThrow("Invalid input");
  });

  test("should throw an error if the input is too short or too long", () => {
    expect(() => validateInput([1], 2)).toThrow("Invalid input");
    expect(() => validateInput(new Array(101).fill(1), 2)).toThrow("Invalid input");
  });

  test("should throw an error if the input contains invalid numbers", () => {
    expect(() => validateInput([0, 1, 2], 2)).toThrow("Invalid input");
    expect(() => validateInput([1, 101, 2], 2)).toThrow("Invalid input");
  });

  test("should throw an error if the extra candies are too few or too many", () => {
    expect(() => validateInput([1, 2, 3], 0)).toThrow("Invalid input");
    expect(() => validateInput([1, 2, 3], 51)).toThrow("Invalid input");
  });

  test("should not throw an error if the input is valid", () => {
    expect(() => validateInput([1, 2, 3], 2)).not.toThrow();
  });
});
