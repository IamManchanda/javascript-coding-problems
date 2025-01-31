export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, -1, 10]
}, {
  "result": true
} */
  test('Test Case 1', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, 10],
    };

    const expected = true;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [5, 1, 22, 25, 6, -1, 8, 10]
}, {
  "result": true
} */
  test('Test Case 2', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 25, 6, -1, 8, 10],
    };

    const expected = true;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [5, 1, 22, 6, -1, 8, 10]
}, {
  "result": true
} */
  test('Test Case 3', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 6, -1, 8, 10],
    };

    const expected = true;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [22, 25, 6]
}, {
  "result": true
} */
  test('Test Case 4', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [22, 25, 6],
    };

    const expected = true;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, 10]
}, {
  "result": true
} */
  test('Test Case 5', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, 10],
    };

    const expected = true;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [5, 1, 22, 10]
}, {
  "result": true
} */
  test('Test Case 6', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 10],
    };

    const expected = true;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [5, -1, 8, 10]
}, {
  "result": true
} */
  test('Test Case 7', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, -1, 8, 10],
    };

    const expected = true;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [25]
}, {
  "result": true
} */
  test('Test Case 8', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [25],
    };

    const expected = true;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [1, 1, 1, 1, 1],
  "sequence": [1, 1, 1]
}, {
  "result": true
} */
  test('Test Case 9', () => {
    const { array, sequence } = {
      array: [1, 1, 1, 1, 1],
      sequence: [1, 1, 1],
    };

    const expected = true;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 12]
}, {
  "result": false
} */
  test('Test Case 10', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 25, 6, -1, 8, 10, 12],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [4, 5, 1, 22, 25, 6, -1, 8, 10]
}, {
  "result": false
} */
  test('Test Case 11', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [4, 5, 1, 22, 25, 6, -1, 8, 10],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [5, 1, 22, 23, 6, -1, 8, 10]
}, {
  "result": false
} */
  test('Test Case 12', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 23, 6, -1, 8, 10],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [5, 1, 22, 22, 25, 6, -1, 8, 10]
}, {
  "result": false
} */
  test('Test Case 13', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 22, 25, 6, -1, 8, 10],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [5, 1, 22, 22, 6, -1, 8, 10]
}, {
  "result": false
} */
  test('Test Case 14', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 22, 6, -1, 8, 10],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, -1, -1]
}, {
  "result": false
} */
  test('Test Case 15', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, -1],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, -1, -1, 10]
} */
  test('Test Case 16', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, -1, 10],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, -1, -2]
}, {
  "result": false
} */
  test('Test Case 17', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, -2],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [26]
}, {
  "result": false
} */
  test('Test Case 18', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [26],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [5, 1, 25, 22, 6, -1, 8, 10]
}, {
  "result": false
} */
  test('Test Case 19', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 25, 22, 6, -1, 8, 10],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [5, 26, 22, 8]
}, {
  "result": false
} */
  test('Test Case 20', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 26, 22, 8],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [1, 1, 6, 1],
  "sequence": [1, 1, 1, 6]
}, {
  "result": false
} */
  test('Test Case 21', () => {
    const { array, sequence } = {
      array: [1, 1, 6, 1],
      sequence: [1, 1, 1, 6],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, -1, 10, 11, 11, 11, 11]
}, {
  "result": false
} */
  test('Test Case 22', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, 10, 11, 11, 11, 11],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 10]
}, {
  "result": false
} */
  test('Test Case 23', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 25, 6, -1, 8, 10, 10],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });

/* {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, -1, 5]
}, {
  "result": false
} */
  test('Test Case 24', () => {
    const { array, sequence } = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, 5],
    };

    const expected = false;
    const result = solution.isValidSubsequence(array, sequence);

    expect(result).toBe(expected);
  });
};