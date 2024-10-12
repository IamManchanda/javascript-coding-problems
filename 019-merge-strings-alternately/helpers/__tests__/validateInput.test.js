import { validateInput } from "../validateInput";

describe("validateInput", () => {
  test("should throw an error if the input is not a string", () => {
    expect(() => validateInput(1, "abc")).toThrow("Invalid input");
    expect(() => validateInput("abc", 1)).toThrow("Invalid input");
    expect(() => validateInput(1, 1)).toThrow("Invalid input");
  });

  test("should throw an error if the input is an empty string", () => {
    expect(() => validateInput("", "abc")).toThrow("Empty strings are not allowed");
    expect(() => validateInput("abc", "")).toThrow("Empty strings are not allowed");
    expect(() => validateInput("", "")).toThrow("Empty strings are not allowed");
  });

  test("should throw an error if the input contains invalid characters", () => {
    expect(() => validateInput("abc", "123")).toThrow("Invalid characters");
    expect(() => validateInput("abc", "ABC")).toThrow("Invalid characters");
    expect(() => validateInput("abc", "a b c")).toThrow("Invalid characters");
  });

  test("should not throw an error if the input is valid", () => {
    expect(() => validateInput("abc", "def")).not.toThrow();
  });
});
