export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], "target": 33 },
    "expectedOutput": 3
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
      target: 33,
    };
    expectedOutput = 3;
  });

  test(`Test Case 2: {
    "input": { "array": [1, 5, 23, 111], "target": 111 },
    "expectedOutput": 3
  }`, () => {
    input = {
      array: [1, 5, 23, 111],
      target: 111,
    };
    expectedOutput = 3;
  });

  test(`Test Case 3: {
    "input": { "array": [1, 5, 23, 111], "target": 5 },
    "expectedOutput": 1
  }`, () => {
    input = {
      array: [1, 5, 23, 111],
      target: 5,
    };
    expectedOutput = 1;
  });

  test(`Test Case 4: {
    "input": { "array": [1, 5, 23, 111], "target": 35 },
    "expectedOutput": -1
  }`, () => {
    input = {
      array: [1, 5, 23, 111],
      target: 35,
    };
    expectedOutput = -1;
  });

  test(`Test Case 5: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], "target": 0 },
    "expectedOutput": 0
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
      target: 0,
    };
    expectedOutput = 0;
  });

  test(`Test Case 6: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], "target": 1 },
    "expectedOutput": 1
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
      target: 1,
    };
    expectedOutput = 1;
  });

  test(`Test Case 7: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], "target": 21 },
    "expectedOutput": 2
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
      target: 21,
    };
    expectedOutput = 2;
  });

  test(`Test Case 8: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], "target": 45 },
    "expectedOutput": 4
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
      target: 45,
    };
    expectedOutput = 4;
  });

  test(`Test Case 9: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], "target": 61 },
    "expectedOutput": 6
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
      target: 61,
    };
    expectedOutput = 6;
  });

  test(`Test Case 10: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], "target": 71 },
    "expectedOutput": 7
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
      target: 71,
    };
    expectedOutput = 7;
  });

  test(`Test Case 11: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], "target": 72 },
    "expectedOutput": 8
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
      target: 72,
    };
    expectedOutput = 8;
  });

  test(`Test Case 12: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], "target": 73 },
    "expectedOutput": 9
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
      target: 73,
    };
    expectedOutput = 9;
  });

  test(`Test Case 13: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], "target": 70 },
    "expectedOutput": -1
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
      target: 70,
    };
    expectedOutput = -1;
  });

  test(`Test Case 14: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], "target": 355 },
    "expectedOutput": 10
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355],
      target: 355,
    };
    expectedOutput = 10;
  });

  test(`Test Case 15: {
    "input": { "array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], "target": 354 },
    "expectedOutput": -1
  }`, () => {
    input = {
      array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355],
      target: 354,
    };
    expectedOutput = -1;
  });

  test(`Test Case 16: {
    "input": { "array": [1, 5, 23, 111], "target": 120 },
    "expectedOutput": -1
  }`, () => {
    input = {
      array: [1, 5, 23, 111],
      target: 120,
    };
    expectedOutput = -1;
  });

  test(`Test Case 17: {
    "input": { "array": [5, 23, 111], "target": 3 },
    "expectedOutput": -1
  }`, () => {
    input = {
      array: [5, 23, 111],
      target: 3,
    };
    expectedOutput = -1;
  });

  afterEach(() => {
    const actualOutput = solution.binarySearch(input.array, input.target);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
