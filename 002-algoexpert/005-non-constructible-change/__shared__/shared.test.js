export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput, actualOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
    actualOutput = undefined;
  });

  test(`Test Case 1: {
      "input": { "coins": [5, 7, 1, 1, 2, 3, 22] },
      "expectedOutput": 20
    }`, () => {
    input = {
      coins: [5, 7, 1, 1, 2, 3, 22],
    };
    expectedOutput = 20;
  });

  test(`Test Case 2: {
      "input": { "coins": [1, 1, 1, 1, 1] },
      "expectedOutput": 6
    }`, () => {
    input = {
      coins: [1, 1, 1, 1, 1],
    };
    expectedOutput = 6;
  });

  test(`Test Case 3: {
    "input": { "coins": [1, 5, 1, 1, 1, 10, 15, 20, 100] },
    "expectedOutput": 55
  }`, () => {
    input = {
      coins: [1, 5, 1, 1, 1, 10, 15, 20, 100],
    };
    expectedOutput = 55;
  });

  test(`Test Case 4: {
    "input": { "coins": [6, 4, 5, 1, 1, 8, 9] },
    "expectedOutput": 3
  }`, () => {
    input = {
      coins: [6, 4, 5, 1, 1, 8, 9],
    };
    expectedOutput = 3;
  });

  test(`Test Case 5: {
    "input": { "coins": [] },
    "expectedOutput": 1
  }`, () => {
    input = {
      coins: [],
    };
    expectedOutput = 1;
  });

  test(`Test Case 6: {
    "input": { "coins": [87] },
    "expectedOutput": 1
  }`, () => {
    input = {
      coins: [87],
    };
    expectedOutput = 1;
  });

  test(`Test Case 7: {
    "input": { "coins": [5, 6, 1, 1, 2, 3, 4, 9] },
    "expectedOutput": 32
  }`, () => {
    input = {
      coins: [5, 6, 1, 1, 2, 3, 4, 9],
    };
    expectedOutput = 32;
  });

  test(`Test Case 8: {
    "input": { "coins": [5, 6, 1, 1, 2, 3, 43] },
    "expectedOutput": 22
  }`, () => {
    input = {
      coins: [5, 6, 1, 1, 2, 3, 43],
    };
    expectedOutput = 19;
  });

  test(`Test Case 9: {
    "input": { "coins": [1, 1] },
    "expectedOutput": 3
  }`, () => {
    input = {
      coins: [1, 1],
    };
    expectedOutput = 3;
  });

  test(`Test Case 10: {
    "input": { "coins": [2] },
    "expectedOutput": 1
  }`, () => {
    input = {
      coins: [2],
    };
    expectedOutput = 1;
  });

  test(`Test Case 11: {
    "input": { "coins": [1] },
    "expectedOutput": 2
  }`, () => {
    input = {
      coins: [1],
    };
    expectedOutput = 2;
  });

  test(`Test Case 12: {
    "input": { "coins": [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4] },
    "expectedOutput": 87
  }`, () => {
    input = {
      coins: [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4],
    };
    expectedOutput = 87;
  });

  test(`Test Case 13: {
    "input": { "coins": [1, 2, 3, 4, 5, 6, 7] },
    "expectedOutput": 29
  }`, () => {
    input = {
      coins: [1, 2, 3, 4, 5, 6, 7],
    };
    expectedOutput = 29;
  });

  afterEach(() => {
    actualOutput = solution.nonConstructibleChange(input.coins);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
