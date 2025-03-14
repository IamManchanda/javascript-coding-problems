export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
      "input": { "nums": [1, 2, 3] },
      "expectedOutput": [1, 3, 2]
    }`, () => {
    input = {
      nums: [1, 2, 3],
    };
    expectedOutput = [1, 3, 2];
  });

  test(`Test Case 2: {
      "input": { "nums": [3, 2, 1] },
      "expectedOutput": [1, 2, 3]
    }`, () => {
    input = {
      nums: [3, 2, 1],
    };
    expectedOutput = [1, 2, 3];
  });

  test(`Test Case 3: {
    "input": { "nums": [1, 1, 5] },
    "expectedOutput": [1, 5, 1]
  }`, () => {
    input = {
      nums: [1, 1, 5],
    };
    expectedOutput = [1, 5, 1];
  });

  afterEach(() => {
    const actualOutput = solution.nextPermutation(input.nums);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
