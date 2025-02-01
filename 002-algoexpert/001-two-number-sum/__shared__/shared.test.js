export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test(`Test Case 1: {
      "input": { "array": [3, 5, -4, 8, 11, 1, -1, 6], "targetSum": 10 },
      "expectedOutput": [-1, 11] // in any order
    }`, () => {
    const { array, targetSum } = {
      array: [3, 5, -4, 8, 11, 1, -1, 6],
      targetSum: 10,
    };

    const expectedOutput = [-1, 11];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });

  test(`Test Case 2: {
      "input": { "array": [4, 6], "targetSum": 10 },
      "expectedOutput": [4, 6] // in any order
    }`, () => {
    const { array, targetSum } = {
      array: [4, 6],
      targetSum: 10,
    };

    const expectedOutput = [4, 6];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });

  test(`Test Case 3: {
      "input": { "array": [4, 6, 1], "targetSum": 5 },
      "expectedOutput": [1, 4] // in any order
    }`, () => {
    const { array, targetSum } = {
      array: [4, 6, 1],
      targetSum: 5,
    };

    const expectedOutput = [1, 4];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });

  test(`Test Case 4: {
      "input": { "array": [4, 6, 1, -3], "targetSum": 3 },
      "expectedOutput": [-3, 6] // in any order
    }`, () => {
    const { array, targetSum } = {
      array: [4, 6, 1, -3],
      targetSum: 3,
    };

    const expectedOutput = [-3, 6];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });

  test(`Test Case 5: {
      "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9], "targetSum": 17 },
      "expectedOutput": [8, 9] // in any order
    }`, () => {
    const { array, targetSum } = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      targetSum: 17,
    };

    const expectedOutput = [8, 9];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });

  test(`Test Case 6: {
      "input": { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 18 },
      "expectedOutput": [3, 15] // in any order
    }`, () => {
    const { array, targetSum } = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      targetSum: 18,
    };

    const expectedOutput = [3, 15];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });

  test(`Test Case 7: {
      "input": { "array": [-7, -5, -3, -1, 0, 1, 3, 5, 7], "targetSum": -5 },
      "expectedOutput": [-5, 0] // in any order
    }`, () => {
    const { array, targetSum } = {
      array: [-7, -5, -3, -1, 0, 1, 3, 5, 7],
      targetSum: -5,
    };

    const expectedOutput = [-5, 0];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });

  test(`Test Case 8: {
      "input": { "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], "targetSum": 163 },
      "expectedOutput": [-47, 210] // in any order
    }`, () => {
    const { array, targetSum } = {
      array: [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
      targetSum: 163,
    };

    const expectedOutput = [-47, 210];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });

  test(`Test Case 9: {
      "input": { "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], "targetSum": 164 },
      "expectedOutput": []
    }`, () => {
    const { array, targetSum } = {
      array: [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
      targetSum: 164,
    };

    const expectedOutput = [];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 10: {
      "input": { "array": [3, 5, -4, 8, 11, 1, -1, 6], "targetSum": 15 },
      "expectedOutput": []
    }`, () => {
    const { array, targetSum } = {
      array: [3, 5, -4, 8, 11, 1, -1, 6],
      targetSum: 15,
    };

    const expectedOutput = [];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 11: {
      "input": { "array": [14], "targetSum": 15 },
      "expectedOutput": []
    }`, () => {
    const { array, targetSum } = {
      array: [14],
      targetSum: 15,
    };

    const expectedOutput = [];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 12: {
      "input": { "array": [15], "targetSum": 15 },
      "expectedOutput": []
    }`, () => {
    const { array, targetSum } = {
      array: [15],
      targetSum: 15,
    };

    const expectedOutput = [];
    const actualOutput = solution.twoNumberSum(array, targetSum);

    expect(actualOutput).toEqual(expectedOutput);
  });
};