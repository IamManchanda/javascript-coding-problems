import { validateInput } from "../validateInput";

describe("validateInput", () => {
  test("should throw an error if the input is not a number", () => {
    expect(() => validateInput("abc")).toThrow("Invalid input");
    expect(() => validateInput(null)).toThrow("Invalid input");
    expect(() => validateInput(undefined)).toThrow("Invalid input");
    expect(() => validateInput({})).toThrow("Invalid input");
  });

  test("should throw an error if the input is a negative number", () => {
    expect(() => validateInput(-1)).toThrow("Negative numbers are not allowed");
    expect(() => validateInput(-100)).toThrow("Negative numbers are not allowed");
  });

  test("should not throw an error if the input is a non-negative number", () => {
    expect(() => validateInput(0)).not.toThrow();
    expect(() => validateInput(5)).not.toThrow();
    expect(() => validateInput(100)).not.toThrow();
  });
});
