export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "array": [2, 1, 5, 2, 3, 3, 4] },
    "expectedOutput": 2 
  }`, () => {
    input = {
      array: [2, 1, 5, 2, 3, 3, 4],
    };
    expectedOutput = 2;
  });

  test(`Test Case 2: {
    "input": { "array": [2, 1, 5, 3, 3, 2, 4] },
    "expectedOutput": 3
  }`, () => {
    input = {
      array: [2, 1, 5, 3, 3, 2, 4],
    };
    expectedOutput = 3;
  });

  afterEach(() => {
    const actualOutput = solution.firstDuplicateValue(input.array);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
