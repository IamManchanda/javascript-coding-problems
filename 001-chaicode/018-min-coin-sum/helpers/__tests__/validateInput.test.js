import { validateInput } from "../validateInput";

describe("validateInput", () => {
  test("should throw an error for invalid input", () => {
    expect(() => validateInput("abc", [1, 2, 5, 10, 20, 50, 100, 200])).toThrow("Invalid input");
    expect(() => validateInput(200, "abc")).toThrow("Invalid input");
  });

  test("should throw an error for negative target", () => {
    expect(() => validateInput(-1, [1, 2, 5, 10, 20, 50, 100, 200])).toThrow("Negative numbers are not allowed");
  });

  test("should throw an error for invalid coins", () => {
    expect(() => validateInput(200, [1, 2, 5, 10, 20, 50, 100, "abc"])).toThrow("Invalid coins");
    expect(() => validateInput(200, [1, 2, 5, 10, 20, 50, 100, -1])).toThrow("Invalid coins");
  });

  test("should not throw an error for valid input", () => {
    expect(() => validateInput(200, [1, 2, 5, 10, 20, 50, 100, 200])).not.toThrow();
  });
});
