export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "string": "abcdcba" },
    "expectedOutput": true
  }`, () => {
    input = {
      string: "abcdcba",
    };
    expectedOutput = true;
  });

  test(`Test Case 2: {
    "input": { "string": "a" },
    "expectedOutput": true
  }`, () => {
    input = {
      string: "a",
    };
    expectedOutput = true;
  });

  test(`Test Case 3: {
    "input": { "string": "ab" },
    "expectedOutput": false
  }`, () => {
    input = {
      string: "ab",
    };
    expectedOutput = false;
  });

  test(`Test Case 4: {
    "input": { "string": "aba" },
    "expectedOutput": true
  }`, () => {
    input = {
      string: "aba",
    };
    expectedOutput = true;
  });

  test(`Test Case 5: {
    "input": { "string": "abb" },
    "expectedOutput": false
  }`, () => {
    input = {
      string: "abb",
    };
    expectedOutput = false;
  });

  test(`Test Case 6: {
    "input": { "string": "abba" },
    "expectedOutput": true
  }`, () => {
    input = {
      string: "abba",
    };
    expectedOutput = true;
  });

  test(`Test Case 7: {
    "input": { "string": "abcdefghhgfedcba" },
    "expectedOutput": true
  }`, () => {
    input = {
      string: "abcdefghhgfedcba",
    };
    expectedOutput = true;
  });

  test(`Test Case 8: {
    "input": { "string": "abcdefghihgfedcba" },
    "expectedOutput": true
  }`, () => {
    input = {
      string: "abcdefghihgfedcba",
    };
    expectedOutput = true;
  });

  test(`Test Case 9: {
    "input": { "string": "abcdefghihgfeddcba" },
    "expectedOutput": false
  }`, () => {
    input = {
      string: "abcdefghihgfeddcba",
    };
    expectedOutput = false;
  });

  afterEach(() => {
    const actualOutput = solution.isPalindrome(input.string);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
