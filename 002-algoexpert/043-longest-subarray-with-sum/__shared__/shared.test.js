export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [1, 2, 3, 4, 3, 3, 1, 2, 1], "targetSum": 10 },
    "expectedOutput": [4, 8]
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 3, 3, 1, 2, 1],
      targetSum: 10,
    };
    expectedOutput = [4, 8];
  });

  test(`Test Case 2: {
    "input": { "array": [1, 2, 3, 4, 0, 0, 0, 0, 0, 3, 3, 1, 2, 1], "targetSum": 10 },
    "expectedOutput": [4, 13]
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 0, 0, 0, 0, 0, 3, 3, 1, 2, 1],
      targetSum: 10,
    };
    expectedOutput = [4, 13];
  });

  test(`Test Case 3: {
    "input": { "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], "targetSum": 1 },
    "expectedOutput": [0, 9]
  }`, () => {
    input = {
      array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      targetSum: 1,
    };
    expectedOutput = [0, 9];
  });

  test(`Test Case 4: {
    "input": { "array": [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], "targetSum": 1 },
    "expectedOutput": [0, 9]
  }`, () => {
    input = {
      array: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      targetSum: 1,
    };
    expectedOutput = [0, 9];
  });

  test(`Test Case 5: {
    "input": { "array": [25, 25, 25, 25, 100, 0, 0, 0, 0, 0, 0, 0], "targetSum": 100 },
    "expectedOutput": [4, 11]
  }`, () => {
    input = {
      array: [25, 25, 25, 25, 100, 0, 0, 0, 0, 0, 0, 0],
      targetSum: 100,
    };
    expectedOutput = [4, 11];
  });

  test(`Test Case 6: {
    "input": { "array": [1, 2, 3, 4, 5, 5, 5, 5], "targetSum": 15 },
    "expectedOutput": [0, 4]
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 5, 5, 5],
      targetSum: 15,
    };
    expectedOutput = [0, 4];
  });

  test(`Test Case 7: {
    "input": { "array": [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1], "targetSum": 20 },
    "expectedOutput": [11, 23]
  }`, () => {
    input = {
      array: [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
      targetSum: 20,
    };
    expectedOutput = [11, 23];
  });

  test(`Test Case 8: {
    "input": { "array": [1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10], "targetSum": 15 },
    "expectedOutput": [0, 7]
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10],
      targetSum: 15,
    };
    expectedOutput = [0, 7];
  });

  test(`Test Case 9: {
    "input": { "array": [61, 54, 1, 499, 2212, 4059, 1, 2, 3, 1, 3], "targetSum": 19 },
    "expectedOutput": []
  }`, () => {
    input = {
      array: [61, 54, 1, 499, 2212, 4059, 1, 2, 3, 1, 3],
      targetSum: 19,
    };
    expectedOutput = [];
  });

  test(`Test Case 10: {
    "input": { "array": [0], "targetSum": 0 },
    "expectedOutput": [0, 0]
  }`, () => {
    input = {
      array: [0],
      targetSum: 0,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 11: {
    "input": { "array": [10], "targetSum": 10 },
    "expectedOutput": [0, 0]
  }`, () => {
    input = {
      array: [10],
      targetSum: 10,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 12: {
    "input": { "array": [5], "targetSum": 0 },
    "expectedOutput": []
  }`, () => {
    input = {
      array: [5],
      targetSum: 0,
    };
    expectedOutput = [];
  });

  test(`Test Case 13: {
    "input": { "array": [5], "targetSum": 10 },
    "expectedOutput": []
  }`, () => {
    input = {
      array: [5],
      targetSum: 10,
    };
    expectedOutput = [];
  });

  test(`Test Case 14: {
    "input": { "array": [0, 1, 0, 1], "targetSum": 3 },
    "expectedOutput": []
  }`, () => {
    input = {
      array: [0, 1, 0, 1],
      targetSum: 3,
    };
    expectedOutput = [];
  });

  test(`Test Case 15: {
    "input": { "array": [0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 28, 10], "targetSum": 39 },
    "expectedOutput": [0, 9]
  }`, () => {
    input = {
      array: [0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 28, 10],
      targetSum: 39,
    };
    expectedOutput = [0, 9];
  });

  test(`Test Case 16: {
    "input": { "array": [1, 4, 10, 15, 31, 7, 1, 40, 0, 20, 1, 1, 1, 1, 2, 1], "targetSum": 68 },
    "expectedOutput": [6, 15]
  }`, () => {
    input = {
      array: [1, 4, 10, 15, 31, 7, 1, 40, 0, 20, 1, 1, 1, 1, 2, 1],
      targetSum: 68,
    };
    expectedOutput = [6, 15];
  });

  test(`Test Case 17: {
    "input": { "array": [1, 4, 10, 15, 31, 7, 1, 40, 0, 20, 1, 1, 1, 1, 2, 1], "targetSum": 0 },
    "expectedOutput": [8, 8]
  }`, () => {
    input = {
      array: [1, 4, 10, 15, 31, 7, 1, 40, 0, 20, 1, 1, 1, 1, 2, 1],
      targetSum: 0,
    };
    expectedOutput = [8, 8];
  });

  test(`Test Case 18: {
    "input": { "array": [1, 4, 10, 15, 31, 7, 1, 40, 5, 20, 1, 1, 1, 1, 2, 1], "targetSum": 0 },
    "expectedOutput": []
  }`, () => {
    input = {
      array: [1, 4, 10, 15, 31, 7, 1, 40, 5, 20, 1, 1, 1, 1, 2, 1],
      targetSum: 0,
    };
    expectedOutput = [];
  });

  test(`Test Case 19: {
    "input": { "array": [1, 2, 3, 4, 5], "targetSum": 0 },
    "expectedOutput": []
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5],
      targetSum: 0,
    };
    expectedOutput = [];
  });

  afterEach(() => {
    const actualOutput = solution.longestSubarrayWithSum(input.array, input.targetSum);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
