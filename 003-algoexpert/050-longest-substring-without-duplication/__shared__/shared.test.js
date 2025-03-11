export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "string": "clementisacap" },
    "output": "mentisac"
  }`, () => {
    input = {
      string: "clementisacap",
    };
    expectedOutput = "mentisac";
  });

  test(`Test Case 2: {
    "input": { "string": "a" },
    "expectedOutput": "a"
  }`, () => {
    input = {
      string: "a",
    };
    expectedOutput = "a";
  });

  test(`Test Case 3: {
    "input": { "string": "abc" },
    "expectedOutput": "abc"
  }`, () => {
    input = {
      string: "abc",
    };
    expectedOutput = "abc";
  });

  test(`Test Case 4: {
    "input": { "string": "abcb" },
    "expectedOutput": "abc"
  }`, () => {
    input = {
      string: "abcb",
    };
    expectedOutput = "abc";
  });

  test(`Test Case 5: {
    "input": { "string": "abcdeabcdefc" },
    "expectedOutput": "abcdef"
  }`, () => {
    input = {
      string: "abcdeabcdefc",
    };
    expectedOutput = "abcdef";
  });

  test(`Test Case 6: {
    "input": { "string": "abccdeaabbcddef" },
    "expectedOutput": "cdea"
  }`, () => {
    input = {
      string: "abccdeaabbcddef",
    };
    expectedOutput = "cdea";
  });

  test(`Test Case 7: {
    "input": { "string": "abacacacaaabacaaaeaaafa" },
    "expectedOutput": "bac"
  }`, () => {
    input = {
      string: "abacacacaaabacaaaeaaafa",
    };
    expectedOutput = "bac";
  });

  test(`Test Case 8: {
    "input": { "string": "abcdabcef" },
    "expectedOutput": "dabcef"
  }`, () => {
    input = {
      string: "abcdabcef",
    };
    expectedOutput = "dabcef";
  });

  test(`Test Case 9: {
    "input": { "string": "abcbde" },
    "expectedOutput": "cbde"
  }`, () => {
    input = {
      string: "abcbde",
    };
    expectedOutput = "cbde";
  });

  test(`Test Case 10: {
    "input": { "string": "clementisanarm" },
    "expectedOutput": "mentisa"
  }`, () => {
    input = {
      string: "clementisanarm",
    };
    expectedOutput = "mentisa";
  });

  afterEach(() => {
    const actualOutput = solution.longestSubstringWithoutDuplication(input.string);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
