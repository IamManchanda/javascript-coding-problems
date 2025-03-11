export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "scores": [8, 4, 2, 1, 3, 6, 7, 9, 5] },
    "expectedOutput": 25
  }`, () => {
    input = {
      scores: [8, 4, 2, 1, 3, 6, 7, 9, 5],
    };
    expectedOutput = 25;
  });

  test(`Test Case 2: {
    "input": { "scores": [1] },
    "expectedOutput": 1
  }`, () => {
    input = {
      scores: [1],
    };
    expectedOutput = 1;
  });

  test(`Test Case 3: {
    "input": { "scores": [5, 10] },
    "expectedOutput": 3
  }`, () => {
    input = {
      scores: [5, 10],
    };
    expectedOutput = 3;
  });

  test(`Test Case 4: {
    "input": { "scores": [10, 5] },
    "expectedOutput": 3
  }`, () => {
    input = {
      scores: [10, 5],
    };
    expectedOutput = 3;
  });

  test(`Test Case 5: {
    "input": { "scores": [4, 2, 1, 3] },
    "expectedOutput": 8
  }`, () => {
    input = {
      scores: [4, 2, 1, 3],
    };
    expectedOutput = 8;
  });

  test(`Test Case 6: {
    "input": { "scores": [0, 4, 2, 1, 3] },
    "expectedOutput": 9
  }`, () => {
    input = {
      scores: [0, 4, 2, 1, 3],
    };
    expectedOutput = 9;
  });

  test(`Test Case 7: {
    "input": { "scores": [2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0] },
    "expectedOutput": 52
  }`, () => {
    input = {
      scores: [2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0],
    };
    expectedOutput = 52;
  });

  test(`Test Case 8: {
    "input": { "scores": [2, 1, 4, 3, 6, 5, 8, 7, 10, 9] },
    "expectedOutput": 15
  }`, () => {
    input = {
      scores: [2, 1, 4, 3, 6, 5, 8, 7, 10, 9],
    };
    expectedOutput = 15;
  });

  test(`Test Case 9: {
    "input": { "scores": [800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53] },
    "expectedOutput": 93
  }`, () => {
    input = {
      scores: [800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53],
    };
    expectedOutput = 93;
  });

  afterEach(() => {
    const actualOutput = solution.minRewards(input.scores);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
