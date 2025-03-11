export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]] },
    "expectedOutput": [[1, 2], [3, 8], [9, 10]]
  }`, () => {
    input = {
      array: [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]],
    };
    expectedOutput = [[1, 2], [3, 8], [9, 10]];
  });
  
  test(`Test Case 2: {
    "input": { "array": [[1, 3], [2, 8], [9, 10]] },
    "expectedOutput": [[1, 8], [9, 10]]
  }`, () => {
    input = {
      array: [[1, 3], [2, 8], [9, 10]],
    };
    expectedOutput = [[1, 8], [9, 10]];
  });

  test(`Test Case 3: {
    "input": { "array": [[1, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90, 100]] },
    "expectedOutput": [[1, 100]]
  }`, () => {
    input = {
      array: [[1, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90, 100]],
    };
    expectedOutput = [[1, 100]];
  });

  test(`Test Case 4: {
    "input": { "array": [[1, 10], [11, 20], [21, 30], [31, 40], [41, 50], [51, 60], [61, 70], [71, 80], [81, 90], [91, 100]] },
    "expectedOutput": [[1, 10], [11, 20], [21, 30], [31, 40], [41, 50], [51, 60], [61, 70], [71, 80], [81, 90], [91, 100]]
  }`, () => {
    input = {
      array: [[1, 10], [11, 20], [21, 30], [31, 40], [41, 50], [51, 60], [61, 70], [71, 80], [81, 90], [91, 100]],
    };
    expectedOutput = [[1, 10], [11, 20], [21, 30], [31, 40], [41, 50], [51, 60], [61, 70], [71, 80], [81, 90], [91, 100]];
  });

  test(`Test Case 5: {
    "input": { "array": [[100, 105], [1, 104]] },
    "expectedOutput": [[1, 105]]
  }`, () => {
    input = {
      array: [[100, 105], [1, 104]],
    };
    expectedOutput = [[1, 105]];
  });

  test(`Test Case 6: {
    "input": { "array": [[89, 90], [-10, 20], [-50, 0], [70, 90], [90, 91], [90, 95]] },
    "expectedOutput": [[-50, 20], [70, 95]]
  }`, () => {
    input = {
      array: [[89, 90], [-10, 20], [-50, 0], [70, 90], [90, 91], [90, 95]],
    };
    expectedOutput = [[-50, 20], [70, 95]];
  });

  test(`Test Case 7: {
    "input": { "array": [[-5, -4], [-4, -3], [-3, -2], [-2, -1], [-1, 0]] },
    "expectedOutput": [[-5, 0]]
  }`, () => {
    input = {
      array: [[-5, -4], [-4, -3], [-3, -2], [-2, -1], [-1, 0]],
    };
    expectedOutput = [[-5, 0]];
  });

  test(`Test Case 8: {
    "input": { "array": [[43, 49], [9, 12], [12, 54], [45, 90], [91, 93]] },
    "expectedOutput": [[9, 90], [91, 93]]
  }`, () => {
    input = {
      array: [[43, 49], [9, 12], [12, 54], [45, 90], [91, 93]],
    };
    expectedOutput = [[9, 90], [91, 93]];
  });

  test(`Test Case 9: {
    "input": { "array": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]] },
    "expectedOutput": [[0, 0]]
  }`, () => {
    input = {
      array:  [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
    };
    expectedOutput = [[0, 0]];
  });

  test(`Test Case 10: {
    "input": { "array": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 1]] },
    "expectedOutput": [[0, 1]]
  }`, () => {
    input = {
      array: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 1]],
    };
    expectedOutput = [[0, 1]];
  });

  test(`Test Case 11: {
    "input": { "array": [[1, 22], [-20, 30]] },
    "expectedOutput": [[-20, 30]]
  }`, () => {
    input = {
      array: [[1, 22], [-20, 30]],
    };
    expectedOutput = [[-20, 30]];
  });

  test(`Test Case 12: {
    "input": { "array": [[20, 21], [22, 23], [0, 1], [3, 4], [23, 24], [25, 27], [5, 6], [7, 19]] },
    "expectedOutput": [[0, 1], [3, 4], [5, 6], [7, 19], [20, 21], [22, 24], [25, 27]]
  }`, () => {
    input = {
      array: [[20, 21], [22, 23], [0, 1], [3, 4], [23, 24], [25, 27], [5, 6], [7, 19]],
    };
    expectedOutput = [[0, 1], [3, 4], [5, 6], [7, 19], [20, 21], [22, 24], [25, 27]];
  });

  test(`Test Case 13: {
    "input": { "array": [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]] },
    "expectedOutput": [[1, 10]]
  }`, () => {
    input = {
      array: [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]],
    };
    expectedOutput = [[1, 10]];
  });

  afterEach(() => {
    const actualOutput = solution.mergeOverlappingIntervals(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
