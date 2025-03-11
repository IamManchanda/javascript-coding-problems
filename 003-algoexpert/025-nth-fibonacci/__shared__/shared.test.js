export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "n": 6 },
    "expectedOutput": 5
  }`, () => {
    input = {
      n: 6,
    };
    expectedOutput = 5;
  });

  test(`Test Case 2: {
    "input": { "n": 1 },
    "expectedOutput": 0
  }`, () => {
    input = {
      n: 1,
    };
    expectedOutput = 0;
  });

  test(`Test Case 3: {
    "input": { "n": 2 },
    "expectedOutput": 1
  }`, () => {
    input = {
      n: 2,
    };
    expectedOutput = 1;
  });

  test(`Test Case 4: {
    "input": { "n": 3 },
    "expectedOutput": 1
  }`, () => {
    input = {
      n: 3,
    };
    expectedOutput = 1;
  });

  test(`Test Case 5: {
    "input": { "n": 4 },
    "expectedOutput": 2
  }`, () => {
    input = {
      n: 4,
    };
    expectedOutput = 2;
  });

  test(`Test Case 6: {
    "input": { "n": 5 },
    "expectedOutput": 3
  }`, () => {
    input = {
      n: 5,
    };
    expectedOutput = 3;
  });

  test(`Test Case 7: {
    "input": { "n": 7 },
    "expectedOutput": 8
  }`, () => {
    input = {
      n: 7,
    };
    expectedOutput = 8;
  });

  test(`Test Case 8: {
    "input": { "n": 8 },
    "expectedOutput": 13
  }`, () => {
    input = {
      n: 8,
    };
    expectedOutput = 13;
  });

  test(`Test Case 9: {
    "input": { "n": 9 },
    "expectedOutput": 21
  }`, () => {
    input = {
      n: 9,
    };
    expectedOutput = 21;
  });

  test(`Test Case 10: {
    "input": { "n": 10 },
    "expectedOutput": 34
  }`, () => {
    input = {
      n: 10,
    };
    expectedOutput = 34;
  });

  test(`Test Case 11: {
    "input": { "n": 11 },
    "expectedOutput": 55
  }`, () => {
    input = {
      n: 11,
    };
    expectedOutput = 55;
  });

  test(`Test Case 12: {
    "input": { "n": 12 },
    "expectedOutput": 89
  }`, () => {
    input = {
      n: 12,
    };
    expectedOutput = 89;
  });

  test(`Test Case 13: {
    "input": { "n": 13 },
    "expectedOutput": 144
  }`, () => {
    input = {
      n: 13,
    };
    expectedOutput = 144;
  });

  test(`Test Case 14: {
    "input": { "n": 14 },
    "expectedOutput": 233
  }`, () => {
    input = {
      n: 14,
    };
    expectedOutput = 233;
  });

  test(`Test Case 15: {
    "input": { "n": 15 },
    "expectedOutput": 377
  }`, () => {
    input = {
      n: 15,
    };
    expectedOutput = 377;
  });

  test(`Test Case 16: {
    "input": { "n": 16 },
    "expectedOutput": 610
  }`, () => {
    input = {
      n: 16,
    };
    expectedOutput = 610;
  });

  test(`Test Case 17: {
    "input": { "n": 17 },
    "expectedOutput": 987
  }`, () => {
    input = {
      n: 17,
    };
    expectedOutput = 987;
  });

  test(`Test Case 18: {
    "input": { "n": 18 },
    "expectedOutput": 1597
  }`, () => {
    input = {
      n: 18,
    };
    expectedOutput = 1597;
  });

  afterEach(() => {
    const actualOutput = solution.getNthFib(input.n);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
