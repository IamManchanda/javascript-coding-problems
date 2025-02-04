export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [2, 1, 5, 2, 3, 3, 4] },
    "expectedOutput": 2 
  }`, () => {
    input = {
      array: [2, 1, 5, 2, 3, 3, 4],
    };
    expectedOutput = 2;
  });

  test(`Test Case 2: {
    "input": { "array": [2, 1, 5, 3, 3, 2, 4] },
    "expectedOutput": 3
  }`, () => {
    input = {
      array: [2, 1, 5, 3, 3, 2, 4],
    };
    expectedOutput = 3;
  });

  test(`Test Case 3: {
    "input": { "array": [1, 1, 2, 3, 3, 2, 2] },
    "expectedOutput": 1
  }`, () => {
    input = {
      array: [1, 1, 2, 3, 3, 2, 2],
    };
    expectedOutput = 1;
  });

  test(`Test Case 4: {
    "input": { "array": [3, 1, 3, 1, 1, 4, 4] },
    "expectedOutput": 3
  }`, () => {
    input = {
      array: [3, 1, 3, 1, 1, 4, 4],
    };
    expectedOutput = 3;
  });

  test(`Test Case 5: {
    "input": { "array": [] },
    "expectedOutput": -1
  }`, () => {
    input = {
      array: [],
    };
    expectedOutput = -1;
  });

  test(`Test Case 6: {
    "input": { "array": [1] },
    "expectedOutput": -1
  }`, () => {
    input = {
      array: [1],
    };
    expectedOutput = -1;
  });

  test(`Test Case 7: {
    "input": { "array": [1, 1] },
    "expectedOutput": 1
  }`, () => {
    input = {
      array: [1, 1],
    };
    expectedOutput = 1;
  });

  test(`Test Case 8: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10] },
    "expectedOutput": 10
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10],
    };
    expectedOutput = 10;
  });

  test(`Test Case 9: {
    "input": { "array": [2, 1, 1] },
    "expectedOutput": 1
  }`, () => {
    input = {
      array: [2, 1, 1],
    };
    expectedOutput = 1;
  });

  test(`Test Case 10: {
    "input": { "array": [2, 2, 2, 2, 2, 2, 2, 2, 2] },
    "expectedOutput": 2
  }`, () => {
    input = {
      array: [2, 2, 2, 2, 2, 2, 2, 2, 2],
    };
    expectedOutput = 2;
  });

  afterEach(() => {
    const actualOutput = solution.firstDuplicateValue(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
