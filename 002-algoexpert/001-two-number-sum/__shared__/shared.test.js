export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

/* {
  "array": [3, 5, -4, 8, 11, 1, -1, 6],
  "targetSum": 10
}, {
  "result": [-1, 11] // in any order
} */

  test('Test Case 1', () => {
    const array = [3, 5, -4, 8, 11, 1, -1, 6];
    const targetSum = 10;

    const expected = [-1, 11];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });

/* {
  "array": [4, 6],
  "targetSum": 10
}, {
  "result": [4, 6] // in any order
} */

  test('Test Case 2', () => {
    const array = [4, 6];
    const targetSum = 10;

    const expected = [4, 6];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });

/*{
  "array": [4, 6, 1],
  "targetSum": 5
}, {
  "result": [1, 4] // in any order
}*/

  test('Test Case 3', () => {
    const array = [4, 6, 1];
    const targetSum = 5;

    const expected = [1, 4];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });

/* {
  "array": [4, 6, 1, -3],
  "targetSum": 3
}, {
  "result": [-3, 6] // in any order
} */

  test('Test Case 4', () => {
    const array = [4, 6, 1, -3];
    const targetSum = 3;

    const expected = [-3, 6];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });

/* {
  "array": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "targetSum": 17
}, {
  "result": [8, 9] // in any order
} */

  test('Test Case 5', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const targetSum = 17;

    const expected = [8, 9];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });

/* {
  "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
  "targetSum": 18
}, {
  "result": [3, 15] // in any order
} */

  test('Test Case 6', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
    const targetSum = 18;

    const expected = [3, 15];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });

/* {
  "array": [-7, -5, -3, -1, 0, 1, 3, 5, 7],
  "targetSum": -5
}, {
  "result": [-5, 0] // in any order
} */

  test('Test Case 7', () => {
    const array = [-7, -5, -3, -1, 0, 1, 3, 5, 7];
    const targetSum = -5;

    const expected = [-5, 0];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });

/* {
  "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
  "targetSum": 163
}, {
  "result": [-47, 210] // in any order
} */

  test('Test Case 8', () => {
    const array = [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47];
    const targetSum = 163;

    const expected = [-47, 210];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });

/* {
  "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
  "targetSum": 164
}, {
  "result": [] // in any order
} */

  test('Test Case 9', () => {
    const array = [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47];
    const targetSum = 164;

    const expected = [];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });

/* {
  "array": [3, 5, -4, 8, 11, 1, -1, 6],
  "targetSum": 15
}, {
  "result": [] // in any order
} */

  test('Test Case 10', () => {
    const array = [3, 5, -4, 8, 11, 1, -1, 6];
    const targetSum = 15;

    const expected = [];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });

/* {
  "array": [14],
  "targetSum": 15
}, {
  "result": [] // in any order
} */

  test('Test Case 11', () => {
    const array = [14];
    const targetSum = 15;

    const expected = [];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });

/* {
  "array": [15],
  "targetSum": 15
}, {
  "result": [] // in any order
} */

  test('Test Case 12', () => {
    const array = [15];
    const targetSum = 15;

    const expected = [];
    const result = solution.twoNumberSum(array, targetSum);

    expect(result).toEqual(expect.arrayContaining(expected));
  });
};