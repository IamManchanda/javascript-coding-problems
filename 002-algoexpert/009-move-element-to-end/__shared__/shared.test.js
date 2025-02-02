export const sharedTests = (getSolution) => {
  let solution,
    input,
    expectedOutputStart,
    expectedOutputEnd;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutputStart = undefined;
    expectedOutputEnd = undefined;
  });

  test(`Test Case 1: {
      "input": { "array": [2, 1, 2, 2, 2, 3, 4, 2], "toMove": 2 },
      "expectedOutput": [1, 3, 4, 2, 2, 2, 2, 2]
    }`, () => {
    input = {
      array: [2, 1, 2, 2, 2, 3, 4, 2],
      toMove: 2,
    };
    expectedOutputStart = [1, 3, 4];
    expectedOutputEnd = [2, 2, 2, 2, 2];
  });

  test(`Test Case 2: {
      "input": { "array": [], "toMove": 3 },
      "expectedOutput": []
    }`, () => {
    input = {
      array: [],
      toMove: 5,
    };
    expectedOutputStart = [];
    expectedOutputEnd = [];
  });

  test(`Test Case 3: {
      "input": { "array": [1, 2, 4, 5, 6], "toMove": 3 },
      "expectedOutput": [1, 2, 4, 5, 6]
    }`, () => {
    input = {
      array: [1, 2, 4, 5, 6],
      toMove: 3,
    };
    expectedOutputStart = [1, 2, 4, 5, 6];
    expectedOutputEnd = [];
  });

  test(`Test Case 4: {
      "input": { "array": [3, 3, 3, 3, 3], "toMove": 3 },
      "expectedOutput": [3, 3, 3, 3, 3]
    }`, () => {
    input = {
      array: [3, 3, 3, 3, 3],
      toMove: 6,
    };
    expectedOutputStart = [];
    expectedOutputEnd = [3, 3, 3, 3, 3];
  });

  test(`Test Case 5: {
      "input": { "array": [3, 1, 2, 4, 5], "toMove": 3 },
      "expectedOutput": [1, 2, 4, 5, 3],
    }`, () => {
    input = {
      array: [3, 1, 2, 4, 5],
      toMove: 3,
    };
    expectedOutputStart = [1, 2, 4, 5];
    expectedOutputEnd = [3];
  });

  test(`Test Case 6: {
      "input": { "array": [1, 2, 4, 5, 3], "toMove": 5 },
      "expectedOutput": [1, 2, 4, 3, 5]
    }`, () => {
    input = {
      array: [1, 2, 4, 5, 3],
      toMove: 5,
    };
    expectedOutputStart = [1, 2, 4, 3];
    expectedOutputEnd = [5];
  });

  test(`Test Case 7: {
      "input": { "array": [1, 2, 3, 4, 5], "toMove": 3 },
      "expectedOutput": [1, 2, 4, 5, 3]
    }`, () => {
    input = {
      array: [1, 2, 3, 4, 5],
      toMove: 3,
    };
    expectedOutputStart = [1, 2, 4, 5];
    expectedOutputEnd = [3];
  });

  test(`Test Case 8: {
      "input": { "array": [2, 4, 2, 5, 6, 2, 2], "toMove": 2 },
      "expectedOutput": [4, 5, 6, 2, 2, 2, 2]
    }`, () => {
    input = {
      array: [2, 4, 2, 5, 6, 2, 2],
      toMove: 2,
    };
    expectedOutputStart = [4, 5, 6];
    expectedOutputEnd = [2, 2, 2, 2];
  });

  test(`Test Case 9: {
      "input": { "array": [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12], "toMove": 5 },
      "expectedOutput": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5]
    }`, () => {
    input = {
      array: [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
      toMove: 5,
    };
    expectedOutputStart = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
    expectedOutputEnd = [5, 5, 5, 5, 5, 5];
  });

  test(`Test Case 10: {
      "input": { "array": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5], "toMove": 5 },
      "expectedOutput": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5]
    }`, () => {
    input = {
      array: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5],
      toMove: 5,
    };
    expectedOutputStart = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
    expectedOutputEnd = [5, 5, 5, 5, 5, 5];
  });

  test(`Test Case 11: {
      "input": { "array": [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12], "toMove": 5 },
      "expectedOutput": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5]
    }`, () => {
    input = {
      array: [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12],
      toMove: 5,
    };
    expectedOutputStart = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
    expectedOutputEnd = [5, 5, 5, 5, 5, 5];
  });

  afterEach(() => {
    const actualOutput = solution.moveElementToEnd(input.array, input.toMove);
    const eosN = expectedOutputStart.length, eoeN = expectedOutputEnd.length;

    if (eosN === 0 || eoeN === 0) {
      if (eosN === 0 && eoeN === 0) {
        expect(actualOutput).toEqual([]);
      } else if (eosN === 0) {
        expect(actualOutput).toEqual(expectedOutputEnd);
      } else { // eoeN === 0
        expect(actualOutput).toEqual(expect.arrayContaining(expectedOutputStart));
      }

      return;
    }

    const actualOutputStart = actualOutput.slice(0, eosN);
    const actualOutputEnd = actualOutput.slice(eosN);
    expect(actualOutputStart).toEqual(expect.arrayContaining(expectedOutputStart));
    expect(actualOutputEnd).toEqual(expectedOutputEnd);
  });
};
