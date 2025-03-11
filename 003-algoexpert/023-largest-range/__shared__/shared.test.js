export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6] },
    "expectedOutput": [0, 7]
  }`, () => {
    input = {
      array: [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6],
    };
    expectedOutput = [0, 7];
  });

  test(`Test Case 2: {
    "input": { "array": [1] },
    "expectedOutput": [1, 1]
  }`, () => {
    input = {
      array: [1],
    };
    expectedOutput = [1, 1];
  });

  test(`Test Case 3: {
    "input": { "array": [1, 2] },
    "expectedOutput": [1, 2]
  }`, () => {
    input = {
      array: [1, 2],
    };
    expectedOutput = [1, 2];
  });

  test(`Test Case 4: {
    "input": { "array": [4, 2, 1, 3] },
    "expectedOutput": [1, 4]
  }`, () => {
    input = {
      array: [4, 2, 1, 3],
    };
    expectedOutput = [1, 4];
  });

  test(`Test Case 5: {
    "input": { "array": [4, 2, 1, 3, 6] },
    "expectedOutput": [1, 4]
  }`, () => {
    input = {
      array: [4, 2, 1, 3, 6],
    };
    expectedOutput = [1, 4];
  });

  test(`Test Case 6: {
    "input": { "array": [8, 4, 2, 10, 3, 6, 7, 9, 1] },
    "expectedOutput": [6, 10]
  }`, () => {
    input = {
      array: [8, 4, 2, 10, 3, 6, 7, 9, 1],
    };
    expectedOutput = [6, 10];
  });

  test(`Test Case 7: {
    "input": { "array": [19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14] },
    "expectedOutput": [10, 19]
  }`, () => {
    input = {
      array: [19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14],
    };
    expectedOutput = [10, 19];
  });

  test(`Test Case 8: {
    "input": { "array": [0, 9, 19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14] },
    "expectedOutput": [-1, 19]
  }`, () => {
    input = {
      array: [0, 9, 19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14],
    };
    expectedOutput = [-1, 19];
  });

  test(`Test Case 9: {
    "input": { "array": [0, -5, 9, 19, -1, 18, 17, 2, -4, -3, 10, 3, 12, 5, 16, 4, 11, 7, -6, -7, 6, 15, 12, 12, 2, 1, 6, 13, 14, -2] },
    "expectedOutput": [-7, 7]
  }`, () => {
    input = {
      array: [0, -5, 9, 19, -1, 18, 17, 2, -4, -3, 10, 3, 12, 5, 16, 4, 11, 7, -6, -7, 6, 15, 12, 12, 2, 1, 6, 13, 14, -2],
    };
    expectedOutput = [-7, 7];
  });

  test(`Test Case 10: {
    "input": { "array": [-7, -7, -7, -7, 8, -8, 0, 9, 19, -1, -3, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, -6, 8, 7, 6, 15, 12, 12, -5, 2, 1, 6, 13, 14, -4, -2] },
    "expectedOutput": [-8, 19]
  }`, () => {
    input = {
      array: [-7, -7, -7, -7, 8, -8, 0, 9, 19, -1, -3, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, -6, 8, 7, 6, 15, 12, 12, -5, 2, 1, 6, 13, 14, -4, -2],
    };
    expectedOutput = [-8, 19];
  });

  test(`Test Case 11: {
    "input": { "array": [1, 1, 1, 3, 4] },
    "expectedOutput": [3, 4]
  }`, () => {
    input = {
      array: [1, 1, 1, 3, 4],
    };
    expectedOutput = [3, 4];
  });

  test(`Test Case 12: {
    "input": { "array": [-1, 0, 1] },
    "expectedOutput": [-1, 1]
  }`, () => {
    input = {
      array: [-1, 0, 1],
    };
    expectedOutput = [-1, 1];
  });

  test(`Test Case 13: {
    "input": { "array": [10, 0, 1] },
    "expectedOutput": [0, 1]
  }`, () => {
    input = {
      array: [10, 0, 1],
    };
    expectedOutput = [0, 1];
  });

  afterEach(() => {
    const actualOutput = solution.largestRange(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
