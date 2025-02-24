export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "string": "xyz", "key": 2 },
    "expectedOutput": "zab"
  }`, () => {
    input = {
      string: "xyz",
      key: 2,
    };
    expectedOutput = "zab";
  });

  test(`Test Case 2: {
    "input": { "string": "abc", "key": 0 },
    "expectedOutput": "abc"
  }`, () => {
    input = {
      string: "abc",
      key: 0,
    };
    expectedOutput = "abc";
  });

  test(`Test Case 3: {
    "input": { "string": "abc", "key": 3 },
    "expectedOutput": "def"
  }`, () => {
    input = {
      string: "abc",
      key: 3,
    };
    expectedOutput = "def";
  });

  test(`Test Case 4: {
    "input": { "string": "xyz", "key": 5 },
    "expectedOutput": "cde"
  }`, () => {
    input = {
      string: "xyz",
      key: 5,
    };
    expectedOutput = "cde";
  });

  test(`Test Case 5: {
    "input": { "string": "abc", "key": 26 },
    "expectedOutput": "abc"
  }`, () => {
    input = {
      string: "abc",
      key: 26,
    };
    expectedOutput = "abc";
  });

  test(`Test Case 6: {
    "input": { "string": "abc", "key": 52 },
    "expectedOutput": "abc"
  }`, () => {
    input = {
      string: "abc",
      key: 52,
    };
    expectedOutput = "abc";
  });

  test(`Test Case 7: {
    "input": { "string": "abc", "key": 57 },
    "expectedOutput": "fgh"
  }`, () => {
    input = {
      string: "abc",
      key: 57,
    };
    expectedOutput = "fgh";
  });

  test(`Test Case 8: {
    "input": { "string": "xyz", "key": 25 },
    "expectedOutput": "wxy"
  }`, () => {
    input = {
      string: "xyz",
      key: 25,
    };
    expectedOutput = "wxy";
  });

  test(`Test Case 9: {
    "input": { "string": "iwufqnkqkqoolxzzlzihqfm", "key": 25 },
    "expectedOutput": "hvtepmjpjpnnkwyykyhgpel"
  }`, () => {
    input = {
      string: "iwufqnkqkqoolxzzlzihqfm",
      key: 25,
    };
    expectedOutput = "hvtepmjpjpnnkwyykyhgpel";
  });

  test(`Test Case 10: {
    "input": { "string": "ovmqkwtujqmfkao", "key": 52 },
    "expectedOutput": "ovmqkwtujqmfkao"
  }`, () => {
    input = {
      string: "ovmqkwtujqmfkao",
      key: 52,
    };
    expectedOutput = "ovmqkwtujqmfkao";
  });

  test(`Test Case 11: {
    "input": { "string": "mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf", "key": 7 },
    "expectedOutput": "tcrshocqjuidxcabatmhmrdpbhnqrgtgdnm"
  }`, () => {
    input = {
      string: "mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf",
      key: 7,
    };
    expectedOutput = "tcrshocqjuidxcabatmhmrdpbhnqrgtgdnm";
  });

  test(`Test Case 12: {
    "input": { "string": "kjwmntauvjjnmsagwgawkagfuaugjhawgnawgjhawjgawbfawghesh", "key": 15 },
    "expectedOutput": "zylbcipjkyycbhpvlvplzpvujpjvywplvcplvywplyvplquplvwthw"
  }`, () => {
    input = {
      string: "kjwmntauvjjnmsagwgawkagfuaugjhawgnawgjhawjgawbfawghesh",
      key: 15,
    };
    expectedOutput = "zylbcipjkyycbhpvlvplzpvujpjvywplvcplvywplyvplquplvwthw";
  });

  afterEach(() => {
    const actualOutput = solution.caesarCipherEncryptor(input.string, input.key);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
