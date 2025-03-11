export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
      "input": { "matrix": [[1, 1, 1], [1, 0, 1], [1, 1, 1]] },
      "expectedOutput": [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
    }`, () => {
    input = {
      matrix: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
    };
    expectedOutput = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];
  });

  test(`Test Case 2: {
    "input": { "matrix": [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]] },
    "expectedOutput": [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]
  }`, () => {
    input = {
      matrix: [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
      ],
    };
    expectedOutput = [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ];
  });

  test(`Test Case 3: {
    "input": { "matrix": [[1, 1, 1, 1], [1, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 1]] },
    "expectedOutput": [[0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  }`, () => {
    input = {
      matrix: [
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 0, 1],
        [0, 1, 1, 1],
      ],
    };
    expectedOutput = [
      [0, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
  });

  afterEach(() => {
    const actualOutput = solution.setZeroes(input.matrix);
    expect(actualOutput.length).toBe(expectedOutput.length);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
