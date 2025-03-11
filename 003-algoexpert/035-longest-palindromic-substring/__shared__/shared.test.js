export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "string": "abaxyzzyxf" },
    "expectedOutput": "xyzzyx"
  }`, () => {
    input = {
      string: "abaxyzzyxf",
    };
    expectedOutput = "xyzzyx";
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
    "input": { "string": "it's highnoon" },
    "expectedOutput": "noon"
  }`, () => {
    input = {
      string: "it's highnoon",
    };
    expectedOutput = "noon";
  });

  test(`Test Case 4: {
    "input": { "string": "noon high it is" },
    "expectedOutput": "noon"
  }`, () => {
    input = {
      string: "noon high it is",
    };
    expectedOutput = "noon";
  });

  test(`Test Case 5: {
    "input": { "string": "abccbait's highnoon" },
    "expectedOutput": "abccba"
  }`, () => {
    input = {
      string: "abccbait's highnoon",
    };
    expectedOutput = "abccba";
  });

  test(`Test Case 6: {
    "input": { "string": "abcdefgfedcbazzzzzzzzzzzzzzzzzzzz" },
    "expectedOutput": "zzzzzzzzzzzzzzzzzzzz"
  }`, () => {
    input = {
      string: "abcdefgfedcbazzzzzzzzzzzzzzzzzzzz",
    };
    expectedOutput = "zzzzzzzzzzzzzzzzzzzz";
  });

  test(`Test Case 7: {
    "input": { "string": "abcdefgfedcba" },
    "expectedOutput": "abcdefgfedcba"
  }`, () => {
    input = {
      string: "abcdefgfedcba",
    };
    expectedOutput = "abcdefgfedcba";
  });

  test(`Test Case 8: {
    "input": { "string": "abcdefghfedcbaa" },
    "expectedOutput": "aa"
  }`, () => {
    input = {
      string: "abcdefghfedcbaa",
    };
    expectedOutput = "aa";
  });

  test(`Test Case 9: {
    "input": { "string": "abcdefggfedcba" },
    "expectedOutput": "abcdefggfedcba"
  }`, () => {
    input = {
      string: "abcdefggfedcba",
    };
    expectedOutput = "abcdefggfedcba";
  });

  test(`Test Case 10: {
    "input": { "string": "zzzzzzz2345abbbba5432zzbbababa" },
    "expectedOutput": "zz2345abbbba5432zz"
  }`, () => {
    input = {
      string: "zzzzzzz2345abbbba5432zzbbababa",
    };
    expectedOutput = "zz2345abbbba5432zz";
  });

  test(`Test Case 11: {
    "input": { "string": "z234a5abbbba54a32z" },
    "expectedOutput": "5abbbba5"
  }`, () => {
    input = {
      string: "z234a5abbbba54a32z",
    };
    expectedOutput = "5abbbba5";
  });

  test(`Test Case 12: {
    "input": { "string": "z234a5abbba54a32z" },
    "expectedOutput": "5abbba5"
  }`, () => {
    input = {
      string: "z234a5abbba54a32z",
    };
    expectedOutput = "5abbba5";
  });

  test(`Test Case 13: {
    "input": { "string": "ab12365456321bb" },
    "expectedOutput": "b12365456321b"
  }`, () => {
    input = {
      string: "ab12365456321bb",
    };
    expectedOutput = "b12365456321b";
  });

  test(`Test Case 14: {
    "input": { "string": "aca" },
    "expectedOutput": "aca"
  }`, () => {
    input = {
      string: "aca",
    };
    expectedOutput = "aca";
  });

  afterEach(() => {
    const actualOutput = solution.longestPalindromicSubstring(input.string);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
