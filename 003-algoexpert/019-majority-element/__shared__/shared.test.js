export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [2] },
    "expectedOutput": 2
  }`, () => {
    input = {
      array: [2],
    };
    expectedOutput = 2;
  });

  test(`Test Case 2: {
    "input": { "array": [1, 2, 1] },
    "expectedOutput": 1
  }`, () => {
    input = {
      array: [1, 2, 1],
    };
    expectedOutput = 1;
  });

  test(`Test Case 3: {
    "input": { "array": [3, 3, 1] },
    "expectedOutput": 3
  }`, () => {
    input = {
      array: [3, 3, 1],
    };
    expectedOutput = 3;
  });

  test(`Test Case 4: {
    "input": { "array": [4, 5, 5] },
    "expectedOutput": 5
  }`, () => {
    input = {
      array: [4, 5, 5],
    };
    expectedOutput = 5;
  });

  test(`Test Case 5: {
    "input": { "array": [1, 2, 3, 2, 2, 1, 2] },
    "expectedOutput": 2
  }`, () => {
    input = {
      array: [1, 2, 3, 2, 2, 1, 2],
    };
    expectedOutput = 2;
  });

  test(`Test Case 6: {
    "input": { "array": [1, 2, 3, 2, 3, 2, 2, 4, 2] },
    "expectedOutput": 2
  }`, () => {
    input = {
      array: [1, 2, 3, 2, 3, 2, 2, 4, 2],
    };
    expectedOutput = 2;
  });

  test(`Test Case 7: {
    "input": { "array": [1, 1, 1, 1, 1, 1, 1] },
    "expectedOutput": 1
  }`, () => {
    input = {
      array: [1, 1, 1, 1, 1, 1, 1],
    };
    expectedOutput = 1;
  });

  test(`Test Case 8: {
    "input": { "array": [5, 4, 3, 2, 1, 1, 1, 1, 1] },
    "expectedOutput": 1
  }`, () => {
    input = {
      array: [5, 4, 3, 2, 1, 1, 1, 1, 1],
    };
    expectedOutput = 1;
  });

  test(`Test Case 9: {
    "input": { "array": [1, 1, 1, 1, 1, 5, 4, 3, 2] },
    "expectedOutput": 1
  }`, () => {
    input = {
      array: [1, 1, 1, 1, 1, 5, 4, 3, 2],
    };
    expectedOutput = 1;
  });

  test(`Test Case 10: {
    "input": { "array": [1, 1, 1, 1, 2, 2, 2, 2, 2] },
    "expectedOutput": 2
  }`, () => {
    input = {
      array: [1, 1, 1, 1, 2, 2, 2, 2, 2],
    };
    expectedOutput = 2;
  });

  test(`Test Case 11: {
    "input": { "array": [435, 6543, 6543, 435, 535, 6543, 6543, 12, 43, 6543, 6543] },
    "expectedOutput": 6543
  }`, () => {
    input = {
      array: [435, 6543, 6543, 435, 535, 6543, 6543, 12, 43, 6543, 6543],
    };
    expectedOutput = 6543;
  });

  test(`Test Case 12: {
    "input": { "array": [1, 2, 2, 2, 1] },
    "expectedOutput": 2
  }`, () => {
    input = {
      array: [1, 2, 2, 2, 1],
    };
    expectedOutput = 2;
  });

  test(`Test Case 13: {
    "input": { "array": [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1] },
    "expectedOutput": 4
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1],
    };
    expectedOutput = 4;
  });

  test(`Test Case 14: {
    "input": { "array": [1, 2, 3, 2, 2, 4, 2, 2, 5, 2, 1] },
    "expectedOutput": 2
  }`, () => {
    input = {
      array: [1, 2, 3, 2, 2, 4, 2, 2, 5, 2, 1],
    };
    expectedOutput = 2;
  });

  afterEach(() => {
    const actualOutput = solution.majorityElement(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
