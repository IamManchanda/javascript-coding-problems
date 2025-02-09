export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19] },
    "expectedOutput": [3, 9]
  }`, () => {
    input = {
      array: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19],
    };
    expectedOutput = [3, 9];
  });

  test(`Test Case 2: {
    "input": { "array": [1, 2] },
    "expectedOutput": [-1, -1]
  }`, () => {
    input = {
      array: [1, 2],
    };
    expectedOutput = [-1, -1];
  });

  test(`Test Case 3: {
    "input": { "array": [2, 1] },
    "expectedOutput": [0, 1]
  }`, () => {
    input = {
      array: [2, 1],
    };
    expectedOutput = [0, 1];
  });

  test(`Test Case 4: {
    "input": { "array": [1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19] },
    "expectedOutput": [4, 9]
  }`, () => {
    input = {
      array: [1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19],
    };
    expectedOutput = [4, 9];
  });

  test(`Test Case 5: {
    "input": { "array": [1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19] },
    "expectedOutput": [4, 6]
  }`, () => {
    input = {
      array: [1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19],
    };
    expectedOutput = [4, 6];
  });

  test(`Test Case 6: {
    "input": { "array": [1, 2, 8, 4, 5] },
    "expectedOutput": [2, 4]
  }`, () => {
    input = {
      array: [1, 2, 8, 4, 5],
    };
    expectedOutput = [2, 4];
  });

  test(`Test Case 7: {
    "input": { "array": [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7] },
    "expectedOutput": [0, 12]
  }`, () => {
    input = {
      array: [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7],
    };
    expectedOutput = [0, 12];
  });

  test(`Test Case 8: {
    "input": { "array": [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57] },
    "expectedOutput": [0, 11]
  }`, () => {
    input = {
      array: [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57],
    };
    expectedOutput = [0, 11];
  });

  test(`Test Case 9: {
    "input": { "array": [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57] },
    "expectedOutput": [1, 11]
  }`, () => {
    input = {
      array: [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57],
    };
    expectedOutput = [1, 11];
  });

  test(`Test Case 10: {
    "input": { "array": [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7] },
    "expectedOutput": [1, 12]
  }`, () => {
    input = {
      array: [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7],
    };
    expectedOutput = [1, 12];
  });

  test(`Test Case 11: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11] },
    "expectedOutput": [6, 7]
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11],
    };
    expectedOutput = [6, 7];
  });

  test(`Test Case 12: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19] },
    "expectedOutput": [6, 16]
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19],
    };
    expectedOutput = [6, 16];
  });

  test(`Test Case 13: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 18, 21, 22, 7, 14, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 4, 14, 11, 6, 33, 35, 41, 55] },
    "expectedOutput": [4, 24]
  }`, () => {
    input = {
      array: [
        1, 2, 3, 4, 5, 6, 18, 21, 22, 7, 14, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        19, 4, 14, 11, 6, 33, 35, 41, 55,
      ],
    };
    expectedOutput = [4, 24];
  });

  test(`Test Case 14: {
    "input": { "array": [1, 2, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
    "expectedOutput": [2, 19]
  }`, () => {
    input = {
      array: [
        1, 2, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ],
    };
    expectedOutput = [2, 19];
  });

  test(`Test Case 15: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2] },
    "expectedOutput": [2, 19]
  }`, () => {
    input = {
      array: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2,
      ],
    };
    expectedOutput = [2, 19];
  });

  test(`Test Case 16: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    "expectedOutput": [-1, -1]
  }`, () => {
    input = {
      array: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
    };
    expectedOutput = [-1, -1];
  });

  test(`Test Case 17: {
    "input": { "array": [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] },
    "expectedOutput": [-1, -1]
  }`, () => {
    input = {
      array: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
    };
    expectedOutput = [-1, -1];
  });

  afterEach(() => {
    const actualOutput = solution.subarraySort(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
