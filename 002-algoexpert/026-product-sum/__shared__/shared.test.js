export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [5, 2, [7, -1], 3, [6, [-13, 8], 4]] },
    "expectedOutput": 12
  }`, () => {
    input = {
      array: [5, 2, [7, -1], 3, [6, [-13, 8], 4]],
    };
    expectedOutput = 12;
  });

  test(`Test Case 2: {
    "input": { "array": [1, 2, 3, 4, 5] },
    "expectedOutput": 15
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5],
    };
    expectedOutput = 15;
  });

  test(`Test Case 3: {
    "input": { "array": [1, 2, [3], 4, 5] },
    "expectedOutput": 18
  }`, () => {
    input = {
      array: [1, 2, [3], 4, 5],
    };
    expectedOutput = 18;
  });

  test(`Test Case 4: {
    "input": { "array": [[1, 2], 3, [4, 5]] },
    "expectedOutput": 27
  }`, () => {
    input = {
      array: [[1, 2], 3, [4, 5]],
    };
    expectedOutput = 27;
  });

  test(`Test Case 5: {
    "input": { "array": [[[[[5]]]]] },
    "expectedOutput": 600
  }`, () => {
    input = {
      array: [[[[[5]]]]],
    };
    expectedOutput = 600;
  });

  test(`Test Case 6: {
    "input": { "array": [9, [2, -3, 4], 1, [1, 1, [1, 1, 1]], [[[[3, 4, 1]]], 8], [1, 2, 3, 4, 5, [6, 7], -7], [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7], [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]], -3] },
    "expectedOutput": 1351
  }`, () => {
    input = {
      array: [
        9,
        [2, -3, 4],
        1,
        [1, 1, [1, 1, 1]],
        [[[[3, 4, 1]]], 8],
        [1, 2, 3, 4, 5, [6, 7], -7],
        [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7],
        [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]],
        -3,
      ],
    };
    expectedOutput = 1351;
  });

  afterEach(() => {
    const actualOutput = solution.productSum(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
