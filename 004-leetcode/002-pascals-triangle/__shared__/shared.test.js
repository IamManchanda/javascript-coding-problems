export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
      "input": { "numRows": 5 },
      "expectedOutput": [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
    }`, () => {
    input = {
      numRows: 5,
    };
    expectedOutput = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
  });

  test(`Test Case 2: {
    "input": { "numRows": 1 },
    "expectedOutput": [[1]]
  }`, () => {
  input = {
    numRows: 1,
  };
  expectedOutput = [[1]];
});

  afterEach(() => {
    const actualOutput = solution.generate(input.numRows);
    expect(actualOutput.length).toBe(expectedOutput.length);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
