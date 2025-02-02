export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [-1, -5, -10, -1100, -1100, -1101, -1102, -9001] },
    "expectedOutput": true
  }`, () => {
    input = {
      array: [-1, -5, -10, -1100, -1100, -1101, -1102, -9001],
    };
    expectedOutput = true;
  });

  test(`Test Case 2: {
    "input": { "array": [] },
    "expectedOutput": true
  }`, () => {
    input = {
      array: [],
    };
    expectedOutput = true;
  });

  test(`Test Case 3: {
    "input": { "array": [1] },
    "expectedOutput": true
  }`, () => {
    input = {
      array: [1],
    };
    expectedOutput = true;
  });

  test(`Test Case 4: {
    "input": { "array": [1, 2] },
    "expectedOutput": true
  }`, () => {
    input = {
      array: [1, 2],
    };
    expectedOutput = true;
  });

  test(`Test Case 5: {
    "input": { "array": [2, 1] },
    "expectedOutput": true
  }`, () => {
    input = {
      array: [2, 1],
    };
    expectedOutput = true;
  });

  test(`Test Case 6: {
    "input": { "array": [1, 5, 10, 1100, 1101, 1102, 9001] },
    "expectedOutput": true
  }`, () => {
    input = {
      array: [1, 5, 10, 1100, 1101, 1102, 9001],
    };
    expectedOutput = true;
  });

  test(`Test Case 7: {
    "input": { "array": [-1, -5, -10, -1100, -1101, -1102, -9001] },
    "expectedOutput": true
  }`, () => {
    input = {
      array: [-1, -5, -10, -1100, -1101, -1102, -9001],
    };
    expectedOutput = true;
  });

  test(`Test Case 8: {
    "input": { "array": [-1, -5, -10, -1100, -900, -1101, -1102, -9001] },
    "expectedOutput": false
  }`, () => {
    input = {
      array: [-1, -5, -10, -1100, -900, -1101, -1102, -9001],
    };
    expectedOutput = false;
  });

  test(`Test Case 9: {
    "input": { "array": [1, 2, 0] },
    "expectedOutput": false
  }`, () => {
    input = {
      array: [1, 2, 0],
    };
    expectedOutput = false;
  });

  test(`Test Case 10: {
    "input": { "array": [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11] },
    "expectedOutput": false
  }`, () => {
    input = {
      array: [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11],
    };
    expectedOutput = false;
  });

  test(`Test Case 11: {
    "input": { "array": [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11] },
    "expectedOutput": true
  }`, () => {
    input = {
      array: [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11],
    };
    expectedOutput = true;
  });

  test(`Test Case 12: {
    "input": { "array": [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11] },
    "expectedOutput": false
  }`, () => {
    input = {
      array: [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11],
    };
    expectedOutput = false;
  });

  test(`Test Case 13: {
    "input": { "array": [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11] },
    "expectedOutput": true
  }`, () => {
    input = {
      array: [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11],
    };
    expectedOutput = true;
  });

  test(`Test Case 14: {
    "input": { "array": [-1, -1, -1, -1, -1, -1, -1, -1] },
    "expectedOutput": true
  }`, () => {
    input = {
      array: [-1, -1, -1, -1, -1, -1, -1, -1],
    };
    expectedOutput = true;
  });

  test(`Test Case 15: {
    "input": { "array": [1, 2, -1, -2, -5] },
    "expectedOutput": false
  }`, () => {
    input = {
      array: [1, 2, -1, -2, -5],
    };
    expectedOutput = false;
  });

  test(`Test Case 16: {
    "input": { "array": [-1, -5, 10] },
    "expectedOutput": false
  }`, () => {
    input = {
      array: [-1, -5, 10],
    };
    expectedOutput = false;
  });

  test(`Test Case 17: {
    "input": { "array": [2, 2, 2, 1, 4, 5] },
    "expectedOutput": false
  }`, () => {
    input = {
      array: [2, 2, 2, 1, 4, 5],
    };
    expectedOutput = false;
  });

  test(`Test Case 18: {
    "input": { "array": [1, 1, 1, 2, 3, 4, 1] },
    "expectedOutput": false
  }`, () => {
    input = {
      array: [1, 1, 1, 2, 3, 4, 1],
    };
    expectedOutput = false;
  });

  test(`Test Case 19: {
    "input": { "array": [1, 2, 3, 3, 2, 1] },
    "expectedOutput": false
  }`, () => {
    input = {
      array: [1, 2, 3, 3, 2, 1],
    };
    expectedOutput = false;
  });

  afterEach(() => {
    const actualOutput = solution.isMonotonic(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
