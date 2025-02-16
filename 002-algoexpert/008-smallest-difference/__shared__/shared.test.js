export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
      "input": { "arrayOne": [-1, 5, 10, 20, 28, 3], "arrayTwo": [26, 134, 135, 15, 17] },
      "expectedOutput": [28, 26]
    }`, () => {
    input = {
      arrayOne: [-1, 5, 10, 20, 28, 3],
      arrayTwo: [26, 134, 135, 15, 17],
    };
    expectedOutput = [28, 26];
  });

  test(`Test Case 2: {
      "input": { "arrayOne": [-1, 5, 10, 20, 3], "arrayTwo": [26, 134, 135, 15, 17] },
      "expectedOutput": [20, 17]
    }`, () => {
    input = {
      arrayOne: [-1, 5, 10, 20, 3],
      arrayTwo: [26, 134, 135, 15, 17],
    };
    expectedOutput = [20, 17];
  });

  test(`Test Case 3: {
      "input": { "arrayOne": [10, 0, 20, 25], "arrayTwo": [1005, 1006, 1014, 1032, 1031] },
      "expectedOutput": [25, 1005]
    }`, () => {
    input = {
      arrayOne: [10, 0, 20, 25],
      arrayTwo: [1005, 1006, 1014, 1032, 1031],
    };
    expectedOutput = [25, 1005];
  });

  test(`Test Case 4: {
      "input": { "arrayOne": [10, 0, 20, 25, 2200], "arrayTwo": [1005, 1006, 1014, 1032, 1031] },
      "expectedOutput": [25, 1005]
    }`, () => {
    input = {
      arrayOne: [10, 0, 20, 25, 2200],
      arrayTwo: [1005, 1006, 1014, 1032, 1031],
    };
    expectedOutput = [25, 1005];
  });

  test(`Test Case 5: {
      "input": { "arrayOne": [10, 0, 20, 25, 2000], "arrayTwo": [1005, 1006, 1014, 1032, 1031] },
      "expectedOutput": [25, 1005]
    }`, () => {
    input = {
      arrayOne: [10, 0, 20, 25, 2000],
      arrayTwo: [1005, 1006, 1014, 1032, 1031],
    };
    expectedOutput = [2000, 1032];
  });

  test(`Test Case 6: {
      "input": { "arrayOne": [240, 124, 86, 111, 2, 84, 954, 27, 89], "arrayTwo": [1, 3, 954, 19, 8] },
      "expectedOutput": [954, 954]
    }`, () => {
    input = {
      arrayOne: [240, 124, 86, 111, 2, 84, 954, 27, 89],
      arrayTwo: [1, 3, 954, 19, 8],
    };
    expectedOutput = [954, 954];
  });

  test(`Test Case 7: {
      "input": { "arrayOne": [0, 20], "arrayTwo": [21, -2] },
      "expectedOutput": [20, 21]
    }`, () => {
    input = {
      arrayOne: [0, 20],
      arrayTwo: [21, -2],
    };
    expectedOutput = [20, 21];
  });

  test(`Test Case 8: {
      "input": { "arrayOne": [10, 1000], "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530] },
      "expectedOutput": [1000, 1014]
    }`, () => {
    input = {
      arrayOne: [10, 1000],
      arrayTwo: [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530],
    };
    expectedOutput = [1000, 1014];
  });

  test(`Test Case 9: {
      "input": { "arrayOne": [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123], "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530] },
      "expectedOutput": [-123, -124]
    }`, () => {
    input = {
      arrayOne: [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123],
      arrayTwo: [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530],
    };
    expectedOutput = [-123, -124];
  });

  test(`Test Case 10: {
      "input": { "arrayOne": [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530], "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530] },
      "expectedOutput": [530, 530]
    }`, () => {
    input = {
      arrayOne: [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],
      arrayTwo: [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530],
    };
    expectedOutput = [530, 530];
  });

  afterEach(() => {
    const actualOutput = solution.smallestDifference(input.arrayOne, input.arrayTwo);
    expect(actualOutput.length).toBe(expectedOutput.length);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
