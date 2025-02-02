export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput, actualOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
    actualOutput = undefined;
  });

  test(`Test Case 1: {
      "input": { "array": [12, 3, 1, 2, -6, 5, 0, -8, -1], "targetSum": 0 },
      "expectedOutput": [[-8, 3, 5], [-6, 1, 5], [-1, 0, 1]]
    }`, () => {
    input = {
      array: [12, 3, 1, 2, -6, 5, 0, -8, -1],
      targetSum: 0,
    };
    expectedOutput = [
      [-8, 3, 5],
      [-6, 1, 5],
      [-1, 0, 1],
    ];
  });

  test(`Test Case 2: {
    "input": { "array": [1, 2, 3], "targetSum": 6 },
    "expectedOutput": [[1, 2, 3]]
  }`, () => {
    input = {
      array: [1, 2, 3],
      targetSum: 6,
    };
    expectedOutput = [[1, 2, 3]];
  });

  test(`Test Case 3: {
    "input": { "array": [1, 2, 3], "targetSum": 7 },
    "expectedOutput": []
  }`, () => {
    input = {
      array: [1, 2, 3],
      targetSum: 7,
    };
    expectedOutput = [];
  });

  test(`Test Case 4: {
    "input": { "array": [8, 10, -2, 49, 14], "targetSum": 57 },
    "expectedOutput": [[-2, 10, 49]]
  }`, () => {
    input = {
      array: [8, 10, -2, 49, 14],
      targetSum: 57,
    };
    expectedOutput = [[-2, 10, 49]];
  });

  test(`Test Case 5: {
    "input": { "array": [12, 3, 1, 2, -6, 5, 0, -8, -1], "targetSum": 0 },
    "expectedOutput": [[-8, 3, 5], [-6, 1, 5], [-1, 0, 1]]
  }`, () => {
    input = {
      array: [12, 3, 1, 2, -6, 5, 0, -8, -1],
      targetSum: 0,
    };
    expectedOutput = [
      [-8, 3, 5],
      [-6, 1, 5],
      [-1, 0, 1],
    ];
  });

  test(`Test Case 6: {
    "input": { "array": [12, 3, 1, 2, -6, 5, 0, -8, -1, 6], "targetSum": 0 },
    "expectedOutput": [[-8, 2, 6], [-8, 3, 5], [-6, 0, 6], [-6, 1, 5], [-1, 0, 1]]
  }`, () => {
    input = {
      array: [12, 3, 1, 2, -6, 5, 0, -8, -1, 6],
      targetSum: 0,
    };
    expectedOutput = [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 0, 6],
      [-6, 1, 5],
      [-1, 0, 1],
    ];
  });

  test(`Test Case 7: {
    "input": { "array": [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], "targetSum": 0 },
    "expectedOutput": [[-8, 2, 6], [-8, 3, 5], [-6, 0, 6], [-6, 1, 5], [-5, -1, 6], [-5, 0, 5], [-5, 2, 3], [-1, 0, 1]]
  }`, () => {
    input = {
      array: [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5],
      targetSum: 0,
    };
    expectedOutput = [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 0, 6],
      [-6, 1, 5],
      [-5, -1, 6],
      [-5, 0, 5],
      [-5, 2, 3],
      [-1, 0, 1],
    ];
  });

  test(`Test Case 8: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 18 },
    "expectedOutput": [[1, 2, 15], [1, 8, 9], [2, 7, 9], [3, 6, 9], [3, 7, 8], [4, 5, 9], [4, 6, 8], [5, 6, 7]]
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      targetSum: 18,
    };
    expectedOutput = [
      [1, 2, 15],
      [1, 8, 9],
      [2, 7, 9],
      [3, 6, 9],
      [3, 7, 8],
      [4, 5, 9],
      [4, 6, 8],
      [5, 6, 7],
    ];
  });

  test(`Test Case 9: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 32 },
    "expectedOutput": [[8, 9, 15]]
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      targetSum: 32,
    };
    expectedOutput = [[8, 9, 15]];
  });

  test(`Test Case 10: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 33 },
    "expectedOutput": []
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      targetSum: 33,
    };
    expectedOutput = [];
  });

  test(`Test Case 11: {
    "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 5 },
    "expectedOutput": []
  }`, () => {
    input = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      targetSum: 5,
    };
    expectedOutput = [];
  });

  afterEach(() => {
    actualOutput = solution.threeNumberSum(input.array, input.targetSum);

    if (expectedOutput.length === 0) {
      expect(actualOutput).toEqual([]);
    }
    
    expect(actualOutput).toEqual(expectedOutput);
  });
};
