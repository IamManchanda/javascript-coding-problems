export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3] },
    "expectedOutput": 6
  }`, () => {
    input = {
      array: [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3],
    };
    expectedOutput = 6;
  });

  test(`Test Case 2: {
    "input": { "array": [] },
    "expectedOutput": 0
  }`, () => {
    input = {
      array: [],
    };
    expectedOutput = 0;
  });

  test(`Test Case 3: {
    "input": { "array": [1, 3, 2] },
    "expectedOutput": 3
  }`, () => {
    input = {
      array: [1, 3, 2],
    };
    expectedOutput = 3;
  });

  test(`Test Case 4: {
    "input": { "array": [1, 2, 3, 4, 5, 1] },
    "expectedOutput": 6
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 1],
    };
    expectedOutput = 6;
  });

  test(`Test Case 5: {
    "input": { "array": [5, 4, 3, 2, 1, 2, 1] }, 
    "expectedOutput": 3
  }`, () => {
    input = {
      array: [5, 4, 3, 2, 1, 2, 1],
    };
    expectedOutput = 3;
  });

  test(`Test Case 6: {
    "input": { "array": [5, 4, 3, 2, 1, 2, 10, 12, -3, 5, 6, 7, 10] }, 
    "expectedOutput": 5
  }`, () => {
    input = {
      array: [5, 4, 3, 2, 1, 2, 10, 12, -3, 5, 6, 7, 10],
    };
    expectedOutput = 5;
  });

  test(`Test Case 7: {
    "input": { "array": [5, 4, 3, 2, 1, 2, 10, 12] }, 
    "expectedOutput": 0
  }`, () => {
    input = {
      array: [5, 4, 3, 2, 1, 2, 10, 12],
    };
    expectedOutput = 0;
  });

  test(`Test Case 8: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 10, 100, 1000] }, 
    "expectedOutput": 0
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, 10, 100, 1000],
    };
    expectedOutput = 0;
  });

  test(`Test Case 9: {
    "input": { "array": [1, 2, 3, 3, 2, 1] }, 
    "expectedOutput": 0
  }`, () => {
    input = {
      array: [1, 2, 3, 3, 2, 1],
    };
    expectedOutput = 0;
  });

  test(`Test Case 10: {
    "input": { "array": [1, 1, 3, 2, 1] }, 
    "expectedOutput": 4
  }`, () => {
    input = {
      array: [1, 1, 3, 2, 1],
    };
    expectedOutput = 4;
  });

  test(`Test Case 11: {
    "input": { "array": [1, 2, 3, 2, 1, 1] }, 
    "expectedOutput": 5
  }`, () => {
    input = {
      array: [1, 2, 3, 2, 1, 1],
    };
    expectedOutput = 5;
  });

  test(`Test Case 12: {
    "input": { "array": [1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1] },
    "expectedOutput": 9
  }`, () => {
    input = {
      array: [1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1],
    };
    expectedOutput = 9;
  });

  test(`Test Case 13: {
    "input": { "array": [1, 2, 3, 3, 4, 0, 10] },
    "expectedOutput": 3
  }`, () => {
    input = {
      array: [1, 2, 3, 3, 4, 0, 10],
    };
    expectedOutput = 3;
  });

  /* extra test cases */
  test(`Test Case 14: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    "expectedOutput": 0
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
    expectedOutput = 0;
  });

  test(`Test Case 15: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
    "expectedOutput": 17,
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    };
    expectedOutput = 17;
  });

  afterEach(() => {
    const actualOutput = solution.longestPeak(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
