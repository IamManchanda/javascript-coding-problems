export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  /* https://www.algoexpert.io/questions/kadane's-algorithm */

  test(`Test Case 1: {
    "input": { "array": [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4] },
    "expectedOutput": 19
  }`, () => {
    input = {
      array: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4],
    };
    expectedOutput = 19;
  });

  test(`Test Case 2: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    "expectedOutput": 55
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    expectedOutput = 55;
  });

  test(`Test Case 3: {
    "input": { "array": [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10] },
    "expectedOutput": -1
  }`, () => {
    input = {
      array: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10],
    };
    expectedOutput = -1;
  });

  test(`Test Case 4: {
    "input": { "array": [-10, -2, -9, -4, -8, -6, -7, -1, -3, -5] },
    "expectedOutput": -1
  }`, () => {
    input = {
      array: [-10, -2, -9, -4, -8, -6, -7, -1, -3, -5],
    };
    expectedOutput = -1;
  });

  test(`Test Case 5: {
    "input": { "array": [1, 2, 3, 4, 5, 6, -20, 7, 8, 9, 10] },
    "expectedOutput": 35
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, -20, 7, 8, 9, 10],
    };
    expectedOutput = 35;
  });

  test(`Test Case 6: {
    "input": { "array": [1, 2, 3, 4, 5, 6, -22, 7, 8, 9, 10] },
    "expectedOutput": 34
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, -22, 7, 8, 9, 10],
    };
    expectedOutput = 34;
  });

  test(`Test Case 7: {
    "input": { "array": [1, 2, -4, 3, 5, -9, 8, 1, 2] },
    "expectedOutput": 11
  }`, () => {
    input = {
      array: [1, 2, -4, 3, 5, -9, 8, 1, 2],
    };
    expectedOutput = 11;
  });

  test(`Test Case 8: {
    "input": { "array": [3, 4, -6, 7, 8] },
    "expectedOutput": 16
  }`, () => {
    input = {
      array: [3, 4, -6, 7, 8],
    };
    expectedOutput = 16;
  });

  test(`Test Case 9: {
    "input": { "array": [3, 4, -6, 7, 8, -18, 100] },
    "expectedOutput": 100
  }`, () => {
    input = {
      array: [3, 4, -6, 7, 8, -18, 100],
    };
    expectedOutput = 100;
  });

  test(`Test Case 10: {
    "input": { "array": [3, 4, -6, 7, 8, -15, 100] },
    "expectedOutput": 101
  }`, () => {
    input = {
      array: [3, 4, -6, 7, 8, -15, 100],
    };
    expectedOutput = 101;
  });

  test(`Test Case 11: {
    "input": { "array": [8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4] },
    "expectedOutput": 23
  }`, () => {
    input = {
      array: [8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4],
    };
    expectedOutput = 23;
  });

  test(`Test Case 12: {
    "input": { "array": [8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 6] },
    "expectedOutput": 24
  }`, () => {
    input = {
      array: [8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 6],
    };
    expectedOutput = 24;
  });

  test(`Test Case 13: {
    "input": { "array": [8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6] },
    "expectedOutput": 22
  }`, () => {
    input = {
      array: [8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6],
    };
    expectedOutput = 22;
  });

  test(`Test Case 14: {
    "input": { "array": [8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6, 20, -23, 15, 1, -3, 4] },
    "expectedOutput": 35
  }`, () => {
    input = {
      array: [8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6, 20, -23, 15, 1, -3, 4],
    };
    expectedOutput = 35;
  });

  test(`Test Case 15: {
    "input": { "array": [100, 8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6, 20, -23, 15, 1, -3, 4] },
    "expectedOutput": 135
  }`, () => {
    input = {
      array: [100, 8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6, 20, -23, 15, 1, -3, 4],
    };
    expectedOutput = 135;
  });

  test(`Test Case 16: {
    "input": { "array": [-1000, -1000, 2, 4, -5, -6, -7, -8, -2, -100] },
    "expectedOutput": 6
  }`, () => {
    input = {
      array: [-1000, -1000, 2, 4, -5, -6, -7, -8, -2, -100],
    };
    expectedOutput = 6;
  });

  test(`Test Case 17: {
    "input": { "array": [-2, -1] },
    "expectedOutput": -1
  }`, () => {
    input = {
      array: [-2, -1],
    };
    expectedOutput = -1;
  });

  test(`Test Case 18: {
    "input": { "array": [-2, 1] },
    "expectedOutput": 1
  }`, () => {
    input = {
      array: [-2, 1],
    };
    expectedOutput = 1;
  });

  test(`Test Case 19: {
    "input": { "array": [-10] },
    "expectedOutput": -10
  }`, () => {
    input = {
      array: [-10],
    };
    expectedOutput = -10;
  });

  afterEach(() => {
    let actualOutput = solution.kadanesAlgorithm(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
