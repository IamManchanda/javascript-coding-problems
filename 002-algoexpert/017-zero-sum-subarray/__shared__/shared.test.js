export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "nums": [] },
    "expectedOutput": false
  }`, () => {
    input = {
      nums: [],
    };
    expectedOutput = false;
  });

  test(`Test Case 2: {
    "input": { "nums": [0] },
    "expectedOutput": true
  }`, () => {
    input = {
      nums: [0],
    };
    expectedOutput = true;
  });

  test(`Test Case 3: {
    "input": { "nums": [1] },
    "expectedOutput": false
  }`, () => {
    input = {
      nums: [1],
    };
    expectedOutput = false;
  });

  test(`Test Case 4: {
    "input": { "nums": [1, 2, 3] },
    "expectedOutput": false
  }`, () => {
    input = {
      nums: [1, 2, 3],
    };
    expectedOutput = false;
  });

  test(`Test Case 5: {
    "input": { "nums": [1, 1, 1] },
    "expectedOutput": false
  }`, () => {
    input = {
      nums: [1, 1, 1],
    };
    expectedOutput = false;
  });

  test(`Test Case 6: {
    "input": { "nums": [-1, -1, -1] },
    "expectedOutput": false
  }`, () => {
    input = {
      nums: [-1, -1, -1],
    };
    expectedOutput = false;
  });

  test(`Test Case 7: {
    "input": { "nums": [0, 0, 0] },
    "expectedOutput": true
  }`, () => {
    input = {
      nums: [0, 0, 0],
    };
    expectedOutput = true;
  });

  test(`Test Case 8: {
    "input": { "nums": [1, 2, -2, 3] },
    "expectedOutput": true
  }`, () => {
    input = {
      nums: [1, 2, -2, 3],
    };
    expectedOutput = true;
  });

  test(`Test Case 9: {
    "input": { "nums": [2, -2] },
    "expectedOutput": true
  }`, () => {
    input = {
      nums: [2, -2],
    };
    expectedOutput = true;
  });

  test(`Test Case 10: {
    "input": { "nums": [-1, 2, 3, 4, -5, -3, 1, 2] },
    "expectedOutput": true
  }`, () => {
    input = {
      nums: [-1, 2, 3, 4, -5, -3, 1, 2],
    };
    expectedOutput = true;
  });

  test(`Test Case 11: {
    "input": { "nums": [-2, -3, -1, 2, 3, 4, -5, -3, 1, 2] },
    "expectedOutput": true
  }`, () => {
    input = {
      nums: [-2, -3, -1, 2, 3, 4, -5, -3, 1, 2],
    };
    expectedOutput = true;
  });

  test(`Test Case 12: {
    "input": { "nums": [2, 3, 4, -5, -3, 4, 5] },
    "expectedOutput": true
  }`, () => {
    input = {
      nums: [2, 3, 4, -5, -3, 4, 5],
    };
    expectedOutput = true;
  });

  test(`Test Case 13: {
    "input": { "nums": [2, 3, 4, -5, -3, 5, 5] },
    "expectedOutput": false
  }`, () => {
    input = {
      nums: [2, 3, 4, -5, -3, 5, 5],
    };
    expectedOutput = false;
  });

  test(`Test Case 14: {
    "input": { "nums": [1, 2, 3, 4, 0, 5, 6, 7] },
    "expectedOutput": true
  }`, () => {
    input = {
      nums: [1, 2, 3, 4, 0, 5, 6, 7],
    };
    expectedOutput = true;
  });

  test(`Test Case 15: {
    "input": { "nums": [1, 2, 3, -2, -1] },
    "expectedOutput": true
  }`, () => {
    input = {
      nums: [1, 2, 3, -2, -1],
    };
    expectedOutput = true;
  });

  test(`Test Case 16: {
    "input": { "nums": [-8, -22, 104, 73, -120, 53, 22, -12, 1, 14, -90, 13, -22] },
    "expectedOutput": false
  }`, () => {
    input = {
      nums: [-8, -22, 104, 73, -120, 53, 22, -12, 1, 14, -90, 13, -22],
    };
    expectedOutput = false;
  });

  test(`Test Case 17: {
    "input": { "nums": [-8, -22, 104, 73, -120, 53, 22, 20, 25, -12, 1, 14, -90, 13, -22] },
    "expectedOutput": true
  }`, () => {
    input = {
      nums: [-8, -22, 104, 73, -120, 53, 22, 20, 25, -12, 1, 14, -90, 13, -22],
    };
    expectedOutput = true;
  });

  afterEach(() => {
    const actualOutput = solution.zeroSumSubarray(input.nums);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
