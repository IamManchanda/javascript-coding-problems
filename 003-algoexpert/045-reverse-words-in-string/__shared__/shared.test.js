export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "string": "AlgoExpert is the best!" },
    "expectedOutput": "best! the is AlgoExpert"
  }`, () => {
    input = {
      string: "AlgoExpert is the best!",
    };
    expectedOutput = "best! the is AlgoExpert";
  });

  test(`Test Case 2: {
    "input": { "string": "Reverse These Words" },
    "expectedOutput": "Words These Reverse"
  }`, () => {
    input = {
      string: "Reverse These Words",
    };
    expectedOutput = "Words These Reverse";
  });

  test(`Test Case 3: {
    "input": { "string": "..H,, hello 678" },
    "expectedOutput": "678 hello ..H,,"
  }`, () => {
    input = {
      string: "..H,, hello 678",
    };
    expectedOutput = "678 hello ..H,,";
  });

  test(`Test Case 4: {
    "input": { "string": "this this words this this this words this" },
    "expectedOutput": "this words this this this words this this"
  }`, () => {
    input = {
      string: "this this words this this this words this",
    };
    expectedOutput = "this words this this this words this this";
  });

  test(`Test Case 5: {
    "input": { "string": "1 12 23 34 56" },
    "expectedOutput": "56 34 23 12 1"
  }`, () => {
    input = {
      string: "1 12 23 34 56",
    };
    expectedOutput = "56 34 23 12 1";
  });

  test(`Test Case 6: {
    "input": { "string": "APPLE PEAR PLUM ORANGE" },
    "expectedOutput": "ORANGE PLUM PEAR APPLE"
  }`, () => {
    input = {
      string: "APPLE PEAR PLUM ORANGE",
    };
    expectedOutput = "ORANGE PLUM PEAR APPLE";
  });

  test(`Test Case 7: {
    "input": { "string": "this-is-one-word" },
    "expectedOutput": "this-is-one-word"
  }`, () => {
    input = {
      string: "this-is-one-word",
    };
    expectedOutput = "this-is-one-word";
  });

  test(`Test Case 8: {
    "input": { "string": "a" },
    "expectedOutput": "a"
  }`, () => {
    input = {
      string: "a",
    };
    expectedOutput = "a";
  });

  test(`Test Case 9: {
    "input": { "string": "ab" },
    "expectedOutput": "ab"
  }`, () => {
    input = {
      string: "ab",
    };
    expectedOutput = "ab";
  });

  test(`Test Case 10: {
    "input": { "string": "" },
    "expectedOutput": ""
  }`, () => {
    input = {
      string: "",
    };
    expectedOutput = "";
  });

  test(`Test Case 11: {
    "input": { "string": "algoexpert is the best platform to use to prepare for coding interviews!" },
    "expectedOutput": "interviews! coding for prepare to use to platform best the is algoexpert"
  }`, () => {
    input = {
      string: "algoexpert is the best platform to use to prepare for coding interviews!",
    };
    expectedOutput = "interviews! coding for prepare to use to platform best the is algoexpert";
  });

  test(`Test Case 12: {
    "input": { "string": "words, separated, by, commas" },
    "expectedOutput": "commas by, separated, words,"
  }`, () => {
    input = {
      string: "words, separated, by, commas",
    };
    expectedOutput = "commas by, separated, words,";
  });

  test(`Test Case 13: {
    "input": { "string": "this      string     has a     lot of   whitespace" },
    "expectedOutput": "whitespace   of lot     a has     string      this"
  }`, () => {
    input = {
      string: "this      string     has a     lot of   whitespace",
    };
    expectedOutput = "whitespace   of lot     a has     string      this";
  });

  test(`Test Case 14: {
    "input": { "string": "a ab a" },
    "expectedOutput": "a ab a"
  }`, () => {
    input = {
      string: "a ab a",
    };
    expectedOutput = "a ab a";
  });

  test(`Test Case 15: {
    "input": { "string": "test        " },
    "expectedOutput": "        test"
  }`, () => {
    input = {
      string: "test        ",
    };
    expectedOutput = "        test";
  });

  test(`Test Case 16: {
    "input": { "string": " " },
    "expectedOutput": " "
  }`, () => {
    input = {
      string: " ",
    };
    expectedOutput = " ";
  });

  afterEach(() => {
    const actualOutput = solution.reverseWordsInString(input.string);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
