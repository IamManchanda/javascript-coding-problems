export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test(`Test Case 1: {
      "input": { "array": [1, 2, 3, 5, 6, 8, 9] },
      "expectedOutput": [1, 4, 9, 25, 36, 64, 81]
    }`, () => {
    const { array } = {
      array: [1, 2, 3, 5, 6, 8, 9],
    };

    const expectedOutput = [1, 4, 9, 25, 36, 64, 81];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 2: {
      "input": { "array": [1] },
      "expectedOutput": [1]
    }`, () => {
    const { array } = {
      array: [1],
    };

    const expectedOutput = [1];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 3: {
      "input": { "array": [1, 2] },
      "expectedOutput": [1, 4]
    }`, () => {
    const { array } = {
      array: [1, 2],
    };

    const expectedOutput = [1, 4];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 4: {
      "input": { "array": [1, 2, 3, 4, 5] },
      "expectedOutput": [1, 4, 9, 16, 25]
    }`, () => {
    const { array } = {
      array: [1, 2, 3, 4, 5],
    };

    const expectedOutput = [1, 4, 9, 16, 25];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 5: {
      "input": { "array": [0] },
      "expectedOutput": [0]
    }`, () => {
    const { array } = {
      array: [0],
    };

    const expectedOutput = [0];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 6: {
      "input": { "array": [10] },
      "expectedOutput": [100]
    }`, () => {
    const { array } = {
      array: [10],
    };

    const expectedOutput = [100];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 7: {
      "input": { "array": [-1] },
      "expectedOutput": [1]
    }`, () => {
    const { array } = {
      array: [-1],
    };

    const expectedOutput = [1];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 8: {
      "input": { "array": [-2, -1] },
      "expectedOutput": [1, 4]
    }`, () => {
    const { array } = {
      array: [-2, -1],
    };

    const expectedOutput = [1, 4];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 9: {
      "input": { "array": [-5, -4, -3, -2, -1] },
      "expectedOutput": [1, 4, 9, 16, 25]
    }`, () => {
    const { array } = {
      array: [-5, -4, -3, -2, -1],
    };

    const expectedOutput = [1, 4, 9, 16, 25];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 10: {
      "input": { "array": [-10] },
      "expectedOutput": [100]
    }`, () => {
    const { array } = {
      array: [-10],
    };

    const expectedOutput = [100];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 11: {
      "input": { "array": [-10, -5, 0, 5, 10] },
      "expectedOutput": [0, 25, 25, 100, 100]
    }`, () => {
    const { array } = {
      array: [-10, -5, 0, 5, 10],
    };

    const expectedOutput = [0, 25, 25, 100, 100];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 12: {
      "input": { "array": [-7, -3, 1, 9, 22, 30] },
      "expectedOutput": [1, 9, 49, 81, 484, 900]
    }`, () => {
    const { array } = {
      array: [-7, -3, 1, 9, 22, 30],
    };

    const expectedOutput = [1, 9, 49, 81, 484, 900];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 13: {
      "input": { "array": [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20] },
      "expectedOutput": [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]
    }`, () => {
    const { array } = {
      array: [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20],
    };

    const expectedOutput = [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 14: {
      "input": { "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      "expectedOutput": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }`, () => {
    const { array } = {
      array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };

    const expectedOutput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 15: {
      "input": { "array": [-1, -1, 2, 3, 3, 3, 4] },
      "expectedOutput": [1, 1, 4, 9, 9, 9, 16]
    }`, () => {
    const { array } = {
      array: [-1, -1, 2, 3, 3, 3, 4],
    };

    const expectedOutput = [1, 1, 4, 9, 9, 9, 16];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 16: {
      "input": { "array": [-3, -2, -1] },
      "expectedOutput": [1, 4, 9]
    }`, () => {
    const { array } = {
      array: [-3, -2, -1],
    };

    const expectedOutput = [1, 4, 9];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });

  test(`Test Case 17: {
      "input": { "array": [-3, -2, -1] },
      "expectedOutput": [1, 4, 9]
    }`, () => {
    const { array } = {
      array: [-3, -2, -1],
    };

    const expectedOutput = [1, 4, 9];
    const actualOutput = solution.sortedSquaredArray(array);

    expect(actualOutput).toEqual(expectedOutput);
  });
};
