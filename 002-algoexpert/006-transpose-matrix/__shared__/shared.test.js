export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput, actualOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
    actualOutput = undefined;
  });

  test(`Test Case 1: {
      "input": { "matrix": [[1]] },
      "expectedOutput": [[1]]
    }`, () => {
    input = {
      matrix: [[1]],
    };
    expectedOutput = [[1]];
  });

  test(`Test Case 2: {
    "input": { "matrix":[[1], [-1]] },
    "expectedOutput": [[1, -1]]
  }`, () => {
    input = {
      matrix: [[1], [-1]],
    };
    expectedOutput = [[1, -1]];
  });

  test(`Test Case 3: {
    "input": { "matrix": [[1, 2, 3]] },
    "expectedOutput": [[1], [2], [3]]
  }`, () => {
    input = {
      matrix: [[1, 2, 3]],
    };
    expectedOutput = [[1], [2], [3]];
  });

  test(`Test Case 4: {
    "input": { "matrix": [[1], [2], [3]] },
    "expectedOutput": [[1, 2, 3]]
  }`, () => {
    input = {
      matrix: [[1], [2], [3]],
    };
    expectedOutput = [[1, 2, 3]];
  });

  test(`Test Case 5: {
    "input": { "matrix": [[1, 2, 3], [4, 5, 6]] },
    "expectedOutput": [[1, 4], [2, 5], [3, 6]]
  }`, () => {
    input = {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
      ],
    };
    expectedOutput = [
      [1, 4],
      [2, 5],
      [3, 6],
    ];
  });

  test(`Test Case 6: {
    "input": { "matrix": [[0, 0, 0], [1, 1, 1]] },
    "expectedOutput": [[0, 1], [0, 1], [0, 1]]
  }`, () => {
    input = {
      matrix: [
        [0, 0, 0],
        [1, 1, 1],
      ],
    };
    expectedOutput = [
      [0, 1],
      [0, 1],
      [0, 1],
    ];
  });

  test(`Test Case 7: {
    "input": { "matrix": [[0, 1], [0, 1], [0, 1]] },
    "expectedOutput": [[0, 0, 0], [1, 1, 1]]
  }`, () => {
    input = {
      matrix: [
        [0, 1],
        [0, 1],
        [0, 1],
      ],
    };
    expectedOutput = [
      [0, 0, 0],
      [1, 1, 1],
    ];
  });

  test(`Test Case 8: {
    "input": { "matrix": [[0, 0, 0], [0, 0, 0]] },
    "expectedOutput": [[0, 0], [0, 0], [0, 0]]
  }`, () => {
    input = {
      matrix: [
        [0, 0, 0],
        [0, 0, 0],
      ],
    };
    expectedOutput = [
      [0, 0],
      [0, 0],
      [0, 0],
    ];
  });

  test(`Test Case 9: {
    "input": { "matrix": [[1, 4], [2, 5], [3, 6]] },
    "expectedOutput": [[1, 2, 3], [4, 5, 6]]
  }`, () => {
    input = {
      matrix: [
        [1, 4],
        [2, 5],
        [3, 6],
      ],
    };
    expectedOutput = [
      [1, 2, 3],
      [4, 5, 6],
    ];
  });

  test(`Test Case 10: {
    "input": { "matrix": [[-7, -7], [100, 12], [-33, 17]] },
    "expectedOutput": [[-7, 100, -33], [-7, 12, 17]]
  }`, () => {
    input = {
      matrix: [
        [-7, -7],
        [100, 12],
        [-33, 17],
      ],
    };
    expectedOutput = [
      [-7, 100, -33],
      [-7, 12, 17],
    ];
  });

  test(`Test Case 11: {
    "input": { "matrix": [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    "expectedOutput": [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  }`, () => {
    input = {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    };
    expectedOutput = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ];
  });

  test(`Test Case 12: {
    "input": { "matrix": [[1, 4, 7], [2, 5, 8], [3, 6, 9]] },
    "expectedOutput": [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  }`, () => {
    input = {
      matrix: [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ],
    };
    expectedOutput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
  });

  test(`Test Case 13: {
    "input": { "matrix": [[5, 6, 3, -3, 12], [-3, 6, 5, 2, -1], [0, 0, 3, 12, 3]] },
    "expectedOutput": [[5, -3, 0], [6, 6, 0], [3, 5, 3], [-3, 2, 12], [12, -1, 3]]
  }`, () => {
    input = {
      matrix: [
        [5, 6, 3, -3, 12],
        [-3, 6, 5, 2, -1],
        [0, 0, 3, 12, 3],
      ],
    };
    expectedOutput = [
      [5, -3, 0],
      [6, 6, 0],
      [3, 5, 3],
      [-3, 2, 12],
      [12, -1, 3],
    ];
  });

  test(`Test Case 14: {
    "input": { "matrix": [[0, -1, -2, -3], [4, 5, 6, 7], [2, 3, -2, -3], [42, 100, 30, -42]] },
    "expectedOutput": [[0, 4, 2, 42], [-1, 5, 3, 100], [-2, 6, -2, 30], [-3, 7, -3, -42]]
  }`, () => {
    input = {
      matrix: [
        [0, -1, -2, -3],
        [4, 5, 6, 7],
        [2, 3, -2, -3],
        [42, 100, 30, -42],
      ],
    };
    expectedOutput = [
      [0, 4, 2, 42],
      [-1, 5, 3, 100],
      [-2, 6, -2, 30],
      [-3, 7, -3, -42],
    ];
  });

  test(`Test Case 15: {
    "input": { "matrix": [[1234, 6935, 4205], [-23459, 314159, 0], [100, 3, 987654]] },
    "expectedOutput": [[1234, -23459, 100], [6935, 314159, 3], [4205, 0, 987654]]
  }`, () => {
    input = {
      matrix: [
        [1234, 6935, 4205],
        [-23459, 314159, 0],
        [100, 3, 987654],
      ],
    };
    expectedOutput = [
      [1234, -23459, 100],
      [6935, 314159, 3],
      [4205, 0, 987654],
    ];
  });

  afterEach(() => {
    actualOutput = solution.transposeMatrix(input.matrix);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
};
