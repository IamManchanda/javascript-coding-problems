export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "words": [] },
    "expectedOutput": []
  }`, () => {
    input = {
      words: [],
    };
    expectedOutput = [];
  });

  test(`Test Case 2: {
    "input": { "words": ["aaa", "bbbb"] },
    "expectedOutput": []
  }`, () => {
    input = {
      words: ["aaa", "bbbb"],
    };
    expectedOutput = [];
  });

  test(`Test Case 3: {
    "input": { "words": ["dog", "god"] },
    "expectedOutput": [["dog", "god"]]
  }`, () => {
    input = {
      words: ["dog", "god"],
    };
    expectedOutput = [["dog", "god"]];
  });

  test(`Test Case 4: {
    "input": { "words": ["dog", "hello", "god"] },
    "expectedOutput": [["dog", "god"]]
  }`, () => {
    input = {
      words: ["dog", "hello", "god"],
    };
    expectedOutput = [["dog", "god"]];
  });

  test(`Test Case 5: {
    "input": { "words": ["dog", "desserts", "god", "stressed"] },
    "expectedOutput": [["desserts", "stressed"], ["dog", "god"]]
  }`, () => {
    input = {
      words: ["dog", "desserts", "god", "stressed"],
    };
    expectedOutput = [
      ["desserts", "stressed"],
      ["dog", "god"],
    ];
  });

  test(`Test Case 6: {
    "input": { "words": ["dog", "hello", "desserts", "test", "god", "stressed"] },
    "expectedOutput": [["desserts", "stressed"], ["dog", "god"]]
  }`, () => {
    input = {
      words: ["dog", "hello", "desserts", "test", "god", "stressed"],
    };
    expectedOutput = [
      ["desserts", "stressed"],
      ["dog", "god"],
    ];
  });

  test(`Test Case 7: {
    "input": { "words": ["abcde", "edcba", "edbc", "edb", "cbde", "abc"] },
    "expectedOutput" : [["abcde", "edcba"], ["cbde", "edbc"]]
  }`, () => {
    input = {
      words: ["abcde", "edcba", "edbc", "edb", "cbde", "abc"],
    };
    expectedOutput = [
      ["abcde", "edcba"],
      ["cbde", "edbc"],
    ];
  });

  test(`Test Case 8: {
    "input": { "words": ["abcde", "bcd", "dcb", "edcba", "aaa"] },
    "expectedOutput": [["abcde", "edcba"], ["bcd", "dcb"]]
  }`, () => {
    input = {
      words: ["abcde", "bcd", "dcb", "edcba", "aaa"],
    };
    expectedOutput = [
      ["abcde", "edcba"],
      ["bcd", "dcb"],
    ];
  });

  test(`Test Case 9: {
    "input": { "words": ["abcdefghijk", "aaa", "hello", "racecar", "kjihgfedcba"] },
    "expectedOutput": [["abcdefghijk", "kjihgfedcba"]]
  }`, () => {
    input = {
      words: ["abcdefghijk", "aaa", "hello", "racecar", "kjihgfedcba"],
    };
    expectedOutput = [["abcdefghijk", "kjihgfedcba"]];
  });

  test(`Test Case 10: {
    "input": { "words": ["liver", "dog", "hello", "desserts", "evil", "test", "god", "stressed", "racecar", "palindromes", "semordnilap", "abcd", "live"] },
    "expectedOutput": [["dog", "god"], ["desserts", "stressed"], ["evil", "live"], ["palindromes", "semordnilap"]]
  }`, () => {
    input = {
      words: [
        "liver",
        "dog",
        "hello",
        "desserts",
        "evil",
        "test",
        "god",
        "stressed",
        "racecar",
        "palindromes",
        "semordnilap",
        "abcd",
        "live",
      ],
    };
    expectedOutput = [
      ["dog", "god"],
      ["desserts", "stressed"],
      ["evil", "live"],
      ["palindromes", "semordnilap"],
    ];
  });

  afterEach(() => {
    let actualOutput = solution.semordnilap(input.words);
    actualOutput = actualOutput.map((array) => array.sort());
    expectedOutput = expectedOutput.map((array) => array.sort());
    expect(actualOutput.length).toBe(expectedOutput.length);
    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });
};
