import { validateInput } from "../validateInput";

describe("validateInput", () => {
  test("should throw an error for invalid input", () => {
    expect(() => validateInput("a", 2)).toThrow("Invalid input");
    expect(() => validateInput(1, "b")).toThrow("Invalid input");
    expect(() => validateInput("a", "b")).toThrow("Invalid input");
  });

  test("should throw an error for negative numbers", () => {
    expect(() => validateInput(-1, 2)).toThrow("Negative numbers are not allowed");
    expect(() => validateInput(1, -2)).toThrow("Negative numbers are not allowed");
    expect(() => validateInput(-1, -2)).toThrow("Negative numbers are not allowed");
  });

  test("should throw an error for GCD of 0 and 0", () => {
    expect(() => validateInput(0, 0)).toThrow("GCD of 0 and 0 is not defined");
  });

  test("should throw an error for GCD of 0 and any number", () => {
    expect(() => validateInput(0, 2)).toThrow("GCD of 0 and any number is the number itself");
    expect(() => validateInput(2, 0)).toThrow("GCD of 0 and any number is the number itself");
  });
});
