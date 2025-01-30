import { validateInput } from "../validateInput";

describe("validateInput", () => {
  test("should throw an error if one or both of the inputs is not a number", () => {
    expect(() => validateInput("abc", 2)).toThrow("Invalid input");
    expect(() => validateInput(null, 2)).toThrow("Invalid input");
    expect(() => validateInput(undefined, 2)).toThrow("Invalid input");
    expect(() => validateInput({}, 2)).toThrow("Invalid input");
    expect(() => validateInput(2, "abc")).toThrow("Invalid input");
    expect(() => validateInput(2, null)).toThrow("Invalid input");
    expect(() => validateInput(2, undefined)).toThrow("Invalid input");
    expect(() => validateInput(2, {})).toThrow("Invalid input");
    expect(() => validateInput("abc", "def")).toThrow("Invalid input");
    expect(() => validateInput(null, undefined)).toThrow("Invalid input");
    expect(() => validateInput({}, {})).toThrow("Invalid input");
  });

  test("should throw an error if one or both of the inputs is a negative number", () => {
    expect(() => validateInput(-1, 2)).toThrow("Negative numbers are not allowed");
    expect(() => validateInput(2, -1)).toThrow("Negative numbers are not allowed");
    expect(() => validateInput(-1, -2)).toThrow("Negative numbers are not allowed");
  });

  test("should not throw an error if both the inputs are a non-negative number", () => {
    expect(() => validateInput(0, 0)).not.toThrow();
    expect(() => validateInput(5, 5)).not.toThrow();
    expect(() => validateInput(100, 100)).not.toThrow();
  });
});
