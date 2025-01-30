import { validateInput } from "../validateInput";

describe("validateInput", () => {
  test("should throw an error if the input is not a string", () => {
    expect(() => validateInput(1, "ABC")).toThrow("Invalid input");
    expect(() => validateInput("ABC", 1)).toThrow("Invalid input");
    expect(() => validateInput(1, 1)).toThrow("Invalid input");
  });

  test("should throw an error if the input is an empty string", () => {
    expect(() => validateInput("", "ABC")).toThrow("Empty strings are not allowed");
    expect(() => validateInput("ABC", "")).toThrow("Empty strings are not allowed");
    expect(() => validateInput("", "")).toThrow("Empty strings are not allowed");
  });

  test("should throw an error if the input contains invalid characters", () => {
    expect(() => validateInput("ABC", "123")).toThrow("Invalid characters");
    expect(() => validateInput("ABC", "abc")).toThrow("Invalid characters");
    expect(() => validateInput("ABC", "A B C")).toThrow("Invalid characters");
  });

  test("should throw an error if the input is too long", () => {
    expect(() => validateInput("A".repeat(101), "ABC")).toThrow("Strings are too long");
    expect(() => validateInput("ABC", "A".repeat(101))).toThrow("Strings are too long");
    expect(() => validateInput("A".repeat(101), "A".repeat(101))).toThrow("Strings are too long");
  });

  test("should not throw an error if the input is valid", () => {
    expect(() => validateInput("ABC", "DEF")).not.toThrow();
  });
});
