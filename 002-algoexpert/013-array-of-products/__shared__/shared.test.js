export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [5, 1, 4, 2] },
    "expectedOutput": [8, 40, 10, 20]
  }`, () => {
    input = {
      array: [5, 1, 4, 2],
    };
    expectedOutput = [8, 40, 10, 20];
  });

  test(`Test Case 2: {
    "input": { "array": [1, 8, 6, 2, 4] },
    "expectedOutput": [384, 48, 64, 192, 96]
  }`, () => {
    input = {
      array: [1, 8, 6, 2, 4],
    };
    expectedOutput = [384, 48, 64, 192, 96];
  });

  test(`Test Case 3: {
    "input": { "array": [-5, 2, -4, 14, -6] },
    "expectedOutput": [672, -1680, 840, -240, 560]
  }`, () => {
    input = {
      array: [-5, 2, -4, 14, -6],
    };
    expectedOutput = [672, -1680, 840, -240, 560];
  });

  test(`Test Case 4: {
    "input": { "array": [9, 3, 2, 1, 9, 5, 3, 2] },
    "expectedOutput": [1620, 4860, 7290, 14580, 1620, 2916, 4860, 7290]
  }`, () => {
    input = {
      array: [9, 3, 2, 1, 9, 5, 3, 2],
    };
    expectedOutput = [1620, 4860, 7290, 14580, 1620, 2916, 4860, 7290];
  });

  test(`Test Case 5: {
    "input": { "array": [4, 4] },
    "expectedOutput": [4, 4]
  }`, () => {
    input = {
      array: [4, 4],
    };
    expectedOutput = [4, 4];
  });

  test(`Test Case 6: {
    "input": { "array": [0, 0, 0, 0] },
    "expectedOutput": [0, 0, 0, 0]
  }`, () => {
    input = {
      array: [0, 0, 0, 0],
    };
    expectedOutput = [0, 0, 0, 0];
  });

  test(`Test Case 7: {
    "input": { "array": [1, 1, 1, 1] },
    "expectedOutput": [1, 1, 1, 1]
  }`, () => {
    input = {
      array: [1, 1, 1, 1],
    };
    expectedOutput = [1, 1, 1, 1];
  });

  test(`Test Case 8: {
    "input": { "array": [-1, -1, -1] },
    "expectedOutput": [1, 1, 1]
  }`, () => {
    input = {
      array: [-1, -1, -1],
    };
    expectedOutput = [1, 1, 1];
  });

  test(`Test Case 9: {
    "input": { "array": [-1, -1, -1, -1] },
    "expectedOutput": [-1, -1, -1, -1]
  }`, () => {
    input = {
      array: [-1, -1, -1, -1],
    };
    expectedOutput = [-1, -1, -1, -1];
  });

  test(`Test Case 10: {
    "input": { "array": [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
    "expectedOutput": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }`, () => {
    input = {
      array: [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
    expectedOutput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  });

  test(`Test Case 11: {
    "input": { "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
    "expectedOutput": [362880, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }`, () => {
    input = {
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
    expectedOutput = [362880, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  });

  afterEach(() => {
    const actualOutput = solution.arrayOfProducts(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
