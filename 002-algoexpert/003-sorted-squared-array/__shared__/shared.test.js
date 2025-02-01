export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput, actualOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
    actualOutput = undefined;
  });

  test(`Test Case 1: {
      "input": { "array": [1, 2, 3, 5, 6, 8, 9] },
      "expectedOutput": [1, 4, 9, 25, 36, 64, 81]
    }`, () => {
    input = {
      array: [1, 2, 3, 5, 6, 8, 9],
    };
    expectedOutput = [1, 4, 9, 25, 36, 64, 81];
  });

  test(`Test Case 2: {
      "input": { "array": [1] },
      "expectedOutput": [1]
    }`, () => {
    input = {
      array: [1],
    };
    expectedOutput = [1];
  });

  test(`Test Case 3: {
      "input": { "array": [1, 2] },
      "expectedOutput": [1, 4]
    }`, () => {
    input = {
      array: [1, 2],
    };
    expectedOutput = [1, 4];
  });

  test(`Test Case 4: {
      "input": { "array": [1, 2, 3, 4, 5] },
      "expectedOutput": [1, 4, 9, 16, 25]
    }`, () => {
    input = {
      array: [1, 2, 3, 4, 5],
    };
    expectedOutput = [1, 4, 9, 16, 25];
  });

  test(`Test Case 5: {
      "input": { "array": [0] },
      "expectedOutput": [0]
    }`, () => {
    input = {
      array: [0],
    };
    expectedOutput = [0];
  });

  test(`Test Case 6: {
      "input": { "array": [10] },
      "expectedOutput": [100]
    }`, () => {
    input = {
      array: [10],
    };
    expectedOutput = [100];
  });

  test(`Test Case 7: {
      "input": { "array": [-1] },
      "expectedOutput": [1]
    }`, () => {
    input = {
      array: [-1],
    };
    expectedOutput = [1];
  });

  test(`Test Case 8: {
      "input": { "array": [-2, -1] },
      "expectedOutput": [1, 4]
    }`, () => {
    input = {
      array: [-2, -1],
    };
    expectedOutput = [1, 4];
  });

  test(`Test Case 9: {
      "input": { "array": [-5, -4, -3, -2, -1] },
      "expectedOutput": [1, 4, 9, 16, 25]
    }`, () => {
    input = {
      array: [-5, -4, -3, -2, -1],
    };
    expectedOutput = [1, 4, 9, 16, 25];
  });

  test(`Test Case 10: {
      "input": { "array": [-10] },
      "expectedOutput": [100]
    }`, () => {
    input = {
      array: [-10],
    };
    expectedOutput = [100];
  });

  test(`Test Case 11: {
      "input": { "array": [-10, -5, 0, 5, 10] },
      "expectedOutput": [0, 25, 25, 100, 100]
    }`, () => {
    input = {
      array: [-10, -5, 0, 5, 10],
    };
    expectedOutput = [0, 25, 25, 100, 100];
  });

  test(`Test Case 12: {
      "input": { "array": [-7, -3, 1, 9, 22, 30] },
      "expectedOutput": [1, 9, 49, 81, 484, 900]
    }`, () => {
    input = {
      array: [-7, -3, 1, 9, 22, 30],
    };
    expectedOutput = [1, 9, 49, 81, 484, 900];
  });

  test(`Test Case 13: {
      "input": { "array": [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20] },
      "expectedOutput": [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]
    }`, () => {
    input = {
      array: [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20],
    };
    expectedOutput = [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500];
  });

  test(`Test Case 14: {
      "input": { "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      "expectedOutput": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }`, () => {
    input = {
      array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    expectedOutput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  });

  test(`Test Case 15: {
      "input": { "array": [-1, -1, 2, 3, 3, 3, 4] },
      "expectedOutput": [1, 1, 4, 9, 9, 9, 16]
    }`, () => {
    input = {
      array: [-1, -1, 2, 3, 3, 3, 4],
    };
    expectedOutput = [1, 1, 4, 9, 9, 9, 16];
  });

  test(`Test Case 16: {
      "input": { "array": [-3, -2, -1] },
      "expectedOutput": [1, 4, 9]
    }`, () => {
    input = {
      array: [-3, -2, -1],
    };
    expectedOutput = [1, 4, 9];
  });

  test(`Test Case 17: {
      "input": { "array": [-3, -2, -1] },
      "expectedOutput": [1, 4, 9]
    }`, () => {
    input = {
      array: [-3, -2, -1],
    };
    expectedOutput = [1, 4, 9];
  });

  afterEach(() => {
    actualOutput = solution.sortedSquaredArray(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
