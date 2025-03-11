export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "dishes": [], "target": 10 },
    "expectedOutput": [0, 0]
  }`, () => {
    input = {
      dishes: [],
      target: 10,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 2: {
    "input": { "dishes": [4], "target": 10 },
    "expectedOutput": [0, 0]
  }`, () => {
    input = {
      dishes: [4],
      target: 10,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 3: {
    "input": { "dishes": [-5, 10], "target": 4 },
    "expectedOutput": [0, 0]
  }`, () => {
    input = {
      dishes: [-5, 10],
      target: 4,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 4: {
    "input": { "dishes": [], "target": -10 },
    "expectedOutput": [0, 0]
  }`, () => {
    input = {
      dishes: [],
      target: -10,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 5: {
    "input": { "dishes": [4], "target": -10 },
    "expectedOutput": [0, 0]
  }`, () => {
    input = {
      dishes: [4],
      target: -10,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 6: {
    "input": { "dishes": [-5, 10], "target": -4 },
    "expectedOutput": [0, 0]
  }`, () => {
    input = {
      dishes: [-5, 10],
      target: -4,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 7: {
    "input": { "dishes": [5, -10], "target": -4 },
    "expectedOutput": [-10, 5]
  }`, () => {
    input = {
      dishes: [5, -10],
      target: -4,
    };
    expectedOutput = [-10, 5];
  });

  test(`Test Case 8: {
    "input": { "dishes": [-5, 10], "target": 5 },
    "expectedOutput": [-5, 10]
  }`, () => {
    input = {
      dishes: [-5, 10],
      target: 5,
    };
    expectedOutput = [-5, 10];
  });

  test(`Test Case 9: {
    "input": { "dishes": [-5, 10], "target": 0 },
    "expectedOutput":  [0, 0]
  }`, () => {
    input = {
      dishes: [-5, 10],
      target: 0,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 10: {
    "input": { "dishes": [5, -10], "target": 0 },
    "expectedOutput": [-10, 5]
  }`, () => {
    input = {
      dishes: [5, -10],
      target: 0,
    };
    expectedOutput = [-10, 5];
  });

  test(`Test Case 11: {
    "input": { "dishes": [10, -5], "target": 5 },
    "expectedOutput": [-5, 10]
  }`, () => {
    input = {
      dishes: [10, -5],
      target: 5,
    };
    expectedOutput = [-5, 10];
  });

  test(`Test Case 12: {
    "input": { "dishes": [10, -5], "target": 100 },
    "expectedOutput": [-5, 10]
  }`, () => {
    input = {
      dishes: [10, -5],
      target: 100,
    };
    expectedOutput = [-5, 10];
  });

  test(`Test Case 13: {
    "input": { "dishes": [5, -5, 5, -5, 5, -5], "target": 10 },
    "expectedOutput": [-5, 5]
  }`, () => {
    input = {
      dishes: [5, -5, 5, -5, 5, -5],
      target: 10,
    };
    expectedOutput = [-5, 5];
  });

  test(`Test Case 14: {
    "input": { "dishes": [5, -5, 5, -5, 5, -5], "target": 0 },
    "expectedOutput": [-5, 5]
  }`, () => {
    input = {
      dishes: [5, -5, 5, -5, 5, -5],
      target: 0,
    };
    expectedOutput = [-5, 5];
  });

  test(`Test Case 15: {
    "input": { "dishes": [3, 5, 7, 2, 6, 8, 1], "target": 10 },
    "expectedOutput": [0, 0] 
  }`, () => {
    input = {
      dishes: [3, 5, 7, 2, 6, 8, 1],
      target: 10,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 16: {
    "input": { "dishes": [-3, -5, 1, 7], "target": 8 },
    "expectedOutput": [-3, 7]
  }`, () => {
    input = {
      dishes: [-3, -5, 1, 7],
      target: 8,
    };
    expectedOutput = [-3, 7];
  });

  test(`Test Case 17: {
    "input": { "dishes": [-3, -5, 1, 7], "target": 0 },
    "expectedOutput": [-3, 1]
  }`, () => {
    input = {
      dishes: [-3, -5, 1, 7],
      target: 0,
    };
    expectedOutput = [-3, 1];
  });

  test(`Test Case 18: {
    "input": { "dishes": [2, 5, -4, -7, 12, 100, -25], "target": -5 },
    "expectedOutput": [-7, 2]
  }`, () => {
    input = {
      dishes: [2, 5, -4, -7, 12, 100, -25],
      target: -5,
    };
    expectedOutput = [-7, 2];
  });

  test(`Test Case 19: {
    "input": { "dishes": [2, 5, -4, -7, 12, 100, -25], "target": -7 },
    "expectedOutput": [-25, 12]
  }`, () => {
    input = {
      dishes: [2, 5, -4, -7, 12, 100, -25],
      target: -7,
    };
    expectedOutput = [-25, 12];
  });

  test(`Test Case 20: {
    "input": { "dishes": [2, 4, -4, -7, 12, 100, -25], "target": -1 },
    "expectedOutput": [-4, 2]
  }`, () => {
    input = {
      dishes: [2, 4, -4, -7, 12, 100, -25],
      target: -1,
    };
    expectedOutput = [-4, 2];
  });

  test(`Test Case 21: {
    "input": { "dishes": [2, 5, -4, -7, 12, 100, -25], "target": -20 },
    "expectedOutput": [-25, 5]
  }`, () => {
    input = {
      dishes: [2, 5, -4, -7, 12, 100, -25],
      target: -20,
    };
    expectedOutput = [-25, 5];
  });

  test(`Test Case 22: {
    "input": { "dishes": [2, 5, -4, -7, 12, 100, -25], "target": 5 },
    "expectedOutput": [-7, 12]
  }`, () => {
    input = {
      dishes: [2, 5, -4, -7, 12, 100, -25],
      target: 5,
    };
    expectedOutput = [-7, 12];
  });

  test(`Test Case 23: {
    "input": { "dishes": [2, 5, -4, -7, 12, 100, -25], "target": 7 },
    "expectedOutput": [-7, 12]
  }`, () => {
    input = {
      dishes: [2, 5, -4, -7, 12, 100, -25],
      target: 7,
    };
    expectedOutput = [-7, 12];
  });

  test(`Test Case 24: {
    "input": { "dishes": [2, 5, -4, -7, 12, 100, -25], "target": 1 },
    "expectedOutput": [-4, 5]
  }`, () => {
    input = {
      dishes: [2, 5, -4, -7, 12, 100, -25],
      target: 1,
    };
    expectedOutput = [-4, 5];
  });

  test(`Test Case 25: {
    "input": { "dishes": [2, 5, -4, -7, 12, 100, -25], "target": 20 },
    "expectedOutput": [-4, 12]
  }`, () => {
    input = {
      dishes: [2, 5, -4, -7, 12, 100, -25],
      target: 20,
    };
    expectedOutput = [-4, 12];
  });

  test(`Test Case 26: {
    "input": { "dishes": [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], "target": 6 },
    "expectedOutput": [-1, 5]
  }`, () => {
    input = {
      dishes: [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5],
      target: 6,
    };
    expectedOutput = [-1, 5];
  });

  test(`Test Case 27: {
    "input": { "dishes": [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], "target": -6 },
    "expectedOutput": [0, 0]
  }`, () => {
    input = {
      dishes: [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5],
      target: -6,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 28: {
    "input": { "dishes": [17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52], "target": 12 },
    "expectedOutput": [-90, 102]
  }`, () => {
    input = {
      dishes: [17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52],
      target: 12,
    };
    expectedOutput = [-90, 102];
  });

  test(`Test Case 29: {
    "input": { "dishes": [17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52], "target": 11 },
    "expectedOutput": [-102, 102]
  }`, () => {
    input = {
      dishes: [17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52],
      target: 11,
    };
    expectedOutput = [-102, 102];
  });

  test(`Test Case 30: {
    "input": { "dishes": [17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52], "target": -100 },
    "expectedOutput": [0, 0]
  }`, () => {
    input = {
      dishes: [17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52],
      target: -100,
    };
    expectedOutput = [0, 0];
  });

  test(`Test Case 31: {
    "input": { "dishes": [17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52], "target": -28 },
    "expectedOutput": [-90, 53]
  }`, () => {
    input = {
      dishes: [17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52],
      target: -28,
    };
    expectedOutput = [-90, 53];
  });

  test(`Test Case 32: {
    "input": { "dishes": [-12, 13, 100, -53, 540, -538, 53, 76, 32, -63], "target": 0 },
    "expectedOutput": [-53, 53]
  }`, () => {
    input = {
      dishes: [-12, 13, 100, -53, 540, -538, 53, 76, 32, -63],
      target: 0,
    };
    expectedOutput = [-53, 53];
  });

  test(`Test Case 33: {
    "input": { "dishes": [-12, 13, 100, -53, 540, -538, 53, 76, 32, -63], "target": -34 },
    "expectedOutput": [-53, 13]
  }`, () => {
    input = {
      dishes: [-12, 13, 100, -53, 540, -538, 53, 76, 32, -63],
      target: -34,
    };
    expectedOutput = [-53, 13];
  });

  test(`Test Case 34: {
    "input": { "dishes": [-12, 13, 100, -53, 540, -538, 53, 76, 32, -63], "target": -15 },
    "expectedOutput": [-53, 32]
  }`, () => {
    input = {
      dishes: [-12, 13, 100, -53, 540, -538, 53, 76, 32, -63],
      target: -15,
    };
    expectedOutput = [-53, 32];
  });

  test(`Test Case 35: {
    "input": { "dishes": [-12, 13, 100, -53, 540, -538, 53, 76, 32, -63], "target": 42 },
    "expectedOutput": [-12, 53]
  }`, () => {
    input = {
      dishes: [-12, 13, 100, -53, 540, -538, 53, 76, 32, -63],
      target: 42,
    };
    expectedOutput = [-12, 53];
  });

  afterEach(() => {
    const actualOutput = solution.sweetAndSavory(input.dishes, input.target);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
