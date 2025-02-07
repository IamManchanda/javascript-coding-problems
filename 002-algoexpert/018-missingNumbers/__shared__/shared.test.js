export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "nums": [] },
 ,   "expectedOutput": [1, 2]
  }`, () => {
    input = {
      nums: [],
    };
    expectedOutput = [1, 2];
  });

  test(`Test Case 2: {
    "input": { "nums": [1] },
    "expectedOutput": [2, 3]
  }`, () => {
    input = {
      nums: [1],
    };
    expectedOutput = [2, 3];
  });

  test(`Test Case 3: {
    "input": { "nums": [2] },
    "expectedOutput": [1, 3]
  }`, () => {
    input = {
      nums: [2],
    };
    expectedOutput = [1, 3];
  });

  test(`Test Case 4: {
    "input": { "nums": [3] },
    "expectedOutput": [1, 2]
  }`, () => {
    input = {
      nums: [3],
    };
    expectedOutput = [1, 2];
  });

  test(`Test Case 5: {
    "input": { "nums": [1, 3] },
    "expectedOutput": [2, 4]
  }`, () => {
    input = {
      nums: [1, 3],
    };
    expectedOutput = [2, 4];
  });

  test(`Test Case 6: {
    "input": { "nums": [3, 1] },
    "expectedOutput": [2, 4]
  }`, () => {
    input = {
      nums: [3, 1],
    };
    expectedOutput = [2, 4];
  });

  test(`Test Case 7: {
    "input": { "nums": [1, 2, 3] },
    "expectedOutput": [4, 5]
  }`, () => {
    input = {
      nums: [1, 2, 3],
    };
    expectedOutput = [4, 5];
  });

  test(`Test Case 8: {
    "input": { "nums": [3, 2, 1] },
    "expectedOutput": [4, 5]
  }`, () => {
    input = {
      nums: [3, 2, 1],
    };
    expectedOutput = [4, 5];
  });

  test(`Test Case 9: {
    "input": { "nums": [3, 1, 2] },
    "expectedOutput": [4, 5]
  }`, () => {
    input = {
      nums: [3, 1, 2],
    };
    expectedOutput = [4, 5];
  });

  test(`Test Case 10: {
    "input": { "nums": [3, 4, 5] },
    "expectedOutput": [1, 2]
  }`, () => {
    input = {
      nums: [3, 4, 5],
    };
    expectedOutput = [1, 2];
  });

  test(`Test Case 11: {
    "input": { "nums": [4, 5, 3] },
    "expectedOutput": [1, 2]
  }`, () => {
    input = {
      nums: [4, 5, 3],
    };
    expectedOutput = [1, 2];
  });

  test(`Test Case 12: {
    "input": { "nums": [1, 3, 4, 5] },
    "expectedOutput": [2, 6]
  }`, () => {
    input = {
      nums: [1, 3, 4, 5],
    };
    expectedOutput = [2, 6];
  });

  test(`Test Case 13: {
    "input": { "nums": [4, 5, 1, 3] },
    "expectedOutput": [2, 6]
  }`, () => {
    input = {
      nums: [4, 5, 1, 3],
    };
    expectedOutput = [2, 6];
  });

  test(`Test Case 14: {
    "input": { "nums": [1, 2, 4, 5, 7] },
    "expectedOutput": [3, 6]
  }`, () => {
    input = {
      nums: [1, 2, 4, 5, 7],
    };
    expectedOutput = [3, 6];
  });

  test(`Test Case 15: {
    "input": { "nums": [1, 2, 7, 5, 4] },
    "expectedOutput": [3, 6]
  }`, () => {
    input = {
      nums: [1, 2, 7, 5, 4],
    };
    expectedOutput = [3, 6];
  });

  test(`Test Case 16: {
    "input": { "nums": [1, 2, 3, 4, 5, 6, 7] },
    "expectedOutput": [8, 9]
  }`, () => {
    input = {
      nums: [1, 2, 3, 4, 5, 6, 7],
    };
    expectedOutput = [8, 9];
  });

  test(`Test Case 17: {
    "input": { "nums": [7, 6, 5, 4, 3, 2, 1] },
    "expectedOutput": [8, 9]
  }`, () => {
    input = {
      nums: [7, 6, 5, 4, 3, 2, 1],
    };
    expectedOutput = [8, 9];
  });

  test(`Test Case 18: {
    "input": { "nums": [3, 5, 1, 2, 4, 7, 6] },
    "expectedOutput": [8, 9]
  }`, () => {
    input = {
      nums: [3, 5, 1, 2, 4, 7, 6],
    };
    expectedOutput = [8, 9];
  });

  test(`Test Case 19: {
    "input": { "nums": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22] },
    "expectedOutput": [14, 19]
  }`, () => {
    input = {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22],
    };
    expectedOutput = [14, 19];
  });

  test(`Test Case 20: {
    "input": { "nums": [3, 5, 7, 8, 1, 10, 11, 2, 4, 13, 17, 22, 18, 21, 16, 20, 6, 9, 15, 12] },
    "expectedOutput": [14, 19]
  }`, () => {
    input = {
      nums: [3, 5, 7, 8, 1, 10, 11, 2, 4, 13, 17, 22, 18, 21, 16, 20, 6, 9, 15, 12],
    };
    expectedOutput = [14, 19];
  });

  test(`Test Case 21: {
    "input": { "nums": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
    "expectedOutput": [1, 2]
  }`, () => {
    input = {
      nums: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    };
    expectedOutput = [1, 2];
  });

  test(`Test Case 22: {
    "input": { "nums": [14, 15, 16, 17, 18, 19, 20, 21, 22, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
    "expectedOutput":
  }`, () => {
    input = {
      nums: [14, 15, 16, 17, 18, 19, 20, 21, 22, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    };
    expectedOutput = [1, 2];
  });

  test(`Test Case 23: {
    "input": { "nums": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
    "expectedOutput": [23, 24]
  }`, () => {
    input = {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    };
    expectedOutput = [23, 24];
  });

  test(`Test Case 24: {
    "input": { "nums": [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    "expectedOutput": [23, 24]
  }`, () => {
    input = {
      nums: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    expectedOutput = [23, 24];
  });

  afterEach(() => {
    const actualOutput = solution.missingNumbers(input.nums);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
