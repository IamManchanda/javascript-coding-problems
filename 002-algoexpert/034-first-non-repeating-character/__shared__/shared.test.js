export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  /* https://www.algoexpert.io/questions/first-non-repeating-character */

  test(`Test Case 1: {
    "input": { "string": "abcdcaf" },
    "expectedOutput": 1
  }`, () => {
    input = {
      string: "abcdcaf",
    };
    expectedOutput = 1;
  });

  test(`Test Case 2: {
    "input": { "string": "faadabcbbebdf" },
    "expectedOutput": 6
  }`, () => {
    input = {
      string: "faadabcbbebdf",
    };
    expectedOutput = 6;
  });

  test(`Test Case 3: {
    "input": { "string": "a" },
    "expectedOutput": 0
  }`, () => {
    input = {
      string: "a",
    };
    expectedOutput = 0;
  });

  test(`Test Case 4: {
    "input": { "string": "ab" },
    "expectedOutput": 0
  }`, () => {
    input = {
      string: "ab",
    };
    expectedOutput = 0;
  });

  test(`Test Case 5: {
    "input": { "string": "abc" },
    "expectedOutput": 0
  }`, () => {
    input = {
      string: "abc",
    };
    expectedOutput = 0;
  });

  test(`Test Case 6: {
    "input": { "string": "abac" },
    "expectedOutput": 1
  }`, () => {
    input = {
      string: "abac",
    };
    expectedOutput = 1;
  });

  test(`Test Case 7: {
    "input": { "string": "ababac" },
    "expectedOutput": 5
  }`, () => {
    input = {
      string: "ababac",
    };
    expectedOutput = 5;
  });

  test(`Test Case 8: {
    "input": { "string": "ababacc" },
    "expectedOutput": -1
  }`, () => {
    input = {
      string: "ababacc",
    };
    expectedOutput = -1;
  });

  test(`Test Case 9: {
    "input": { "string": "lmnopqldsafmnopqsa" },
    "expectedOutput": 7
  }`, () => {
    input = {
      string: "lmnopqldsafmnopqsa",
    };
    expectedOutput = 7;
  });

  test(`Test Case 10: {
    "input": { "string": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy" },
    "expectedOutput": 25
  }`, () => {
    input = {
      string: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy",
    };
    expectedOutput = 25;
  });

  test(`Test Case 11: {
    "input": { "string": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz" },
    "expectedOutput": -1
  }`, () => {
    input = {
      string: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
    };
    expectedOutput = -1;
  });

  test(`Test Case 12: {
    "input": { "string": "" },
    "expectedOutput": -1
  }`, () => {
    input = {
      string: "",
    };
    expectedOutput = -1;
  });

  test(`Test Case 13: {
    "input": { "string": "ggyllaylacrhdzedddjsc" },
    "expectedOutput": 10
  }`, () => {
    input = {
      string: "ggyllaylacrhdzedddjsc",
    };
    expectedOutput = 10;
  });

  test(`Test Case 14: {
    "input": { "string": "aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh" },
    "expectedOutput": -1
  }`, () => {
    input = {
      string: "aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh",
    };
    expectedOutput = -1;
  });

  test(`Test Case 15: {
    "input": { "string": "aabbccddeeff" },
    "expectedOutput": -1
  }`, () => {
    input = {
      string: "aabbccddeeff",
    };
    expectedOutput = -1;
  });

  afterEach(() => {
    let actualOutput = solution.firstNonRepeatingCharacter(input.string);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
