export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "seats": [1] },
    "expectedOutput": -1
  }`, () => {
    input = {
      seats: [1],
    };
    expectedOutput = -1;
  });

  test(`Test Case 2: {
    "input": { "seats": [1, 0, 1, 0, 0, 0, 1] },
    "expectedOutput": 4
  }`, () => {
    input = {
      seats: [1, 0, 1, 0, 0, 0, 1],
    };
    expectedOutput = 4;
  });

  test(`Test Case 3: {
    "input": { "seats": [1, 0, 1] },
    "expectedOutput": 1
  }`, () => {
    input = {
      seats: [1, 0, 1],
    };
    expectedOutput = 1;
  });

  test(`Test Case 4: {
    "input": { "seats": [1, 0, 0, 1] },
    "expectedOutput": 1
  }`, () => {
    input = {
      seats: [1, 0, 0, 1],
    };
    expectedOutput = 1;
  });

  test(`Test Case 5: {
    "input": { "seats": [1, 1, 1] },
    "expectedOutput": -1
  }`, () => {
    input = {
      seats: [1, 1, 1],
    };
    expectedOutput = -1;
  });

  test(`Test Case 6: {
    "input": { "seats": [1, 0, 0, 1, 0, 0, 1] },
    "expectedOutput": 1
  }`, () => {
    input = {
      seats: [1, 0, 0, 1, 0, 0, 1],
    };
    expectedOutput = 1;
  });

  test(`Test Case 7: {
    "input": { "seats": [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1] },
    "expectedOutput": 3
  }`, () => {
    input = {
      seats: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    };
    expectedOutput = 3;
  });

  test(`Test Case 8: {
    "input": { "seats": [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1] },
    "expectedOutput": 4
  }`, () => {
    input = {
      seats: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    };
    expectedOutput = 4;
  });

  test(`Test Case 9: {
    "input": { "seats": [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1] },
    "expectedOutput": 4
  }`, () => {
    input = {
      seats: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    };
    expectedOutput = 4;
  });

  test(`Test Case 10: {
    "input": { "seats": [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
    "expectedOutput": 13
  }`, () => {
    input = {
      seats: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    };
    expectedOutput = 13;
  });

  test(`Test Case 11: {
    "input": { "seats": [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1] },
    "expectedOutput": 13
  }`, () => {
    input = {
      seats: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    };
    expectedOutput = 13;
  });

  test(`Test Case 12: {
    "input": { "seats": [1, 0, 0, 0, 1, 0, 0, 0, 0, 1] },
    "expectedOutput": 6
  }`, () => {
    input = {
      seats: [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    };
    expectedOutput = 6;
  });

  test(`Test Case 13: {
    "input": { "seats": [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1] },
    "expectedOutput": 3
  }`, () => {
    input = {
      seats: [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    };
    expectedOutput = 3;
  });

  test(`Test Case 14: {
    "input": { "seats": [1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1] },
    "expectedOutput": 5
  }`, () => {
    input = {
      seats: [1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    };
    expectedOutput = 5;
  });

  afterEach(() => {
    const actualOutput = solution.bestSeat(input.seats);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
