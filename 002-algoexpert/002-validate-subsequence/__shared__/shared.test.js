export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput, actualOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
    actualOutput = undefined;
  });

  test(`Test Case 1: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, 10] },
      "expectedOutput": true
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, 10],
    };
    expectedOutput = true;
  });

  test(`Test Case 2: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, 1, 22, 25, 6, -1, 8, 10] },
      "expectedOutput": true
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 25, 6, -1, 8, 10],
    };
    expectedOutput = true;
  });

  test(`Test Case 3: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, 1, 22, 6, -1, 8, 10] },
      "expectedOutput": true
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 6, -1, 8, 10],
    };
    expectedOutput = true;
  });

  test(`Test Case 4: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [22, 25, 6] },
      "expectedOutput": true
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [22, 25, 6],
    };
    expectedOutput = true;
  });

  test(`Test Case 5: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, 10] },
      "expectedOutput": true
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, 10],
    };
    expectedOutput = true;
  });

  test(`Test Case 6: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, 1, 22, 10] },
      "expectedOutput": true
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 10],
    };
    expectedOutput = true;
  });

  test(`Test Case 7: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, -1, 8, 10] },
      "expectedOutput": true
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, -1, 8, 10],
    };
    expectedOutput = true;
  });

  test(`Test Case 8: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [25] },
      "expectedOutput": true
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [25],
    };
    expectedOutput = true;
  });

  test(`Test Case 9: {
      "input": { "array": [1, 1, 1, 1, 1], "sequence": [1, 1, 1] },
      "expectedOutput": true
    }`, () => {
    input = {
      array: [1, 1, 1, 1, 1],
      sequence: [1, 1, 1],
    };
    expectedOutput = true;
  });

  test(`Test Case 10: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 12] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 25, 6, -1, 8, 10, 12],
    };
    expectedOutput = false;
  });

  test(`Test Case 11: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [4, 5, 1, 22, 25, 6, -1, 8, 10] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [4, 5, 1, 22, 25, 6, -1, 8, 10],
    };
    expectedOutput = false;
  });

  test(`Test Case 12: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, 1, 22, 23, 6, -1, 8, 10] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 23, 6, -1, 8, 10],
    };
    expectedOutput = false;
  });

  test(`Test Case 13: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, 1, 22, 22, 25, 6, -1, 8, 10] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 22, 25, 6, -1, 8, 10],
    };
    expectedOutput = false;
  });

  test(`Test Case 14: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, 1, 22, 22, 6, -1, 8, 10] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 22, 6, -1, 8, 10],
    };
    expectedOutput = false;
  });

  test(`Test Case 15: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, -1] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, -1],
    };
    expectedOutput = false;
  });

  test(`Test Case 16: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, -1, 10] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, -1, 10],
    };
    expectedOutput = false;
  });

  test(`Test Case 17: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, -2] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, -2],
    };
    expectedOutput = false;
  });

  test(`Test Case 18: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [26] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [26],
    };
    expectedOutput = false;
  });

  test(`Test Case 19: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, 1, 25, 22, 6, -1, 8, 10] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 25, 22, 6, -1, 8, 10],
    };
    expectedOutput = false;
  });

  test(`Test Case 20: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, 26, 22, 8] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 26, 22, 8],
    };
    expectedOutput = false;
  });

  test(`Test Case 21: {
      "input": { "array": [1, 1, 6, 1], "sequence": [1, 1, 1, 6] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [1, 1, 6, 1],
      sequence: [1, 1, 1, 6],
    };
    expectedOutput = false;
  });

  test(`Test Case 22: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, 10, 11, 11, 11, 11] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, 10, 11, 11, 11, 11],
    };
    expectedOutput = false;
  });

  test(`Test Case 23: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 10] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 25, 6, -1, 8, 10, 10],
    };
    expectedOutput = false;
  });

  test(`Test Case 24: {
      "input": { "array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, 5] },
      "expectedOutput": false
    }`, () => {
    input = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, 5],
    };
    expectedOutput = false;
  });

  afterEach(() => {
    actualOutput = solution.isValidSubsequence(input.array, input.sequence);
    expect(actualOutput).toBe(expectedOutput);
  });
};