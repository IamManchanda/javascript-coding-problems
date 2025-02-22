export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "stringOne": "a", "stringTwo": "a" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "a",
      stringTwo: "a",
    };
    expectedOutput = true;
  });

  test(`Test Case 2: {
    "input": { "stringOne": "aaa", "stringTwo": "aaa" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "aaa",
      stringTwo: "aaa",
    };
    expectedOutput = true;
  });

  test(`Test Case 3: {
    "input": { "stringOne": "a", "stringTwo": "b" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "a",
      stringTwo: "b",
    };
    expectedOutput = true;
  });

  test(`Test Case 4: {
    "input": { "stringOne": "ab", "stringTwo": "b" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "ab",
      stringTwo: "b",
    };
    expectedOutput = true;
  });

  test(`Test Case 5: {
    "input": { "stringOne": "abc", "stringTwo": "b" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "abc",
      stringTwo: "b",
    };
    expectedOutput = false;
  });

  test(`Test Case 6: {
    "input": { "stringOne": "ab", "stringTwo": "a" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "ab",
      stringTwo: "a",
    };
    expectedOutput = true;
  });

  test(`Test Case 7: {
    "input": {  "stringOne": "b", "stringTwo": "ab" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "b",
      stringTwo: "ab",
    };
    expectedOutput = true;
  });

  test(`Test Case 8: {
    "input": { "stringOne": "bb", "stringTwo": "a" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "bb",
      stringTwo: "a",
    };
    expectedOutput = false;
  });

  test(`Test Case 9: {
    "input": { "stringOne": "a", "stringTwo": "ab" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "a",
      stringTwo: "ab",
    };
    expectedOutput = true;
  });

  test(`Test Case 10: {
    "input": { "stringOne": "bb", "stringTwo": "ab" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "bb",
      stringTwo: "ab",
    };
    expectedOutput = true;
  });

  test(`Test Case 11: {
    "input": { "stringOne": "ab", "stringTwo": "bb" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "ab",
      stringTwo: "bb",
    };
    expectedOutput = true;
  });

  test(`Test Case 12: {
    "input": { "stringOne": "hello", "stringTwo": "helo" },
  }`, () => {
    input = {
      stringOne: "hello",
      stringTwo: "helo",
    };
    expectedOutput = true;
  });

  test(`Test Case 13: {
    "input": { "stringOne": "hello", "stringTwo": "heo" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "hello",
      stringTwo: "heo",
    };
    expectedOutput = false;
  });

  test(`Test Case 14: {
    "input": { "stringOne": "hello", "stringTwo": "heloo" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "hello",
      stringTwo: "heloo",
    };
    expectedOutput = true;
  });

  test(`Test Case 15: {
    "input": { "stringOne": "hello", "stringTwo": "heloos" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "hello",
      stringTwo: "heloos",
    };
    expectedOutput = false;
  });

  test(`Test Case 16: {
    "input": { "stringOne": "hello", "stringTwo": "heloos" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "hello",
      stringTwo: "heloos",
    };
    expectedOutput = false;
  });

  test(`Test Case 17: {
    "input": { "stringOne": "hello", "stringTwo": "helllo" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "hello",
      stringTwo: "helllo",
    };
    expectedOutput = true;
  });

  test(`Test Case 18: {
    "input": { "stringOne": "hello", "stringTwo": "helllos" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "hello",
      stringTwo: "helllos",
    };
    expectedOutput = false;
  });

  test(`Test Case 19: {
    "input": { "stringOne": "hello", "stringTwo": "ello" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "hello",
      stringTwo: "ello",
    };
    expectedOutput = true;
  });

  test(`Test Case 20: {
    "input": { "stringOne": "hello", "stringTwo": "llo" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "hello",
      stringTwo: "llo",
    };
    expectedOutput = false;
  });

  test(`Test Case 21: {
    "input": { "stringOne": "hello", "stringTwo": "ellos" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "hello",
      stringTwo: "ellos",
    };
    expectedOutput = false;
  });

  test(`Test Case 22: {
    "input": { "stringOne": "hello", "stringTwo": "elllos" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "hello",
      stringTwo: "elllos",
    };
    expectedOutput = false;
  });

  test(`Test Case 23: {
    "input": { "stringOne": "helo", "stringTwo": "helle" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "helo",
      stringTwo: "helle",
    };
    expectedOutput = false;
  });

  test(`Test Case 24: {
    "input": { "stringOne": "abcdefghijklmnopqrstuvwxyz", "stringTwo": "abcdefghijklmnopqrstuvwxyz" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "abcdefghijklmnopqrstuvwxyz",
      stringTwo: "abcdefghijklmnopqrstuvwxyz",
    };
    expectedOutput = true;
  });

  test(`Test Case 25: {
    "input": { "stringOne": "bcdefghijklmnopqrstuvwxyz", "stringTwo": "abcdefghijklmnopqrstuvwxyz" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "bcdefghijklmnopqrstuvwxyz",
      stringTwo: "abcdefghijklmnopqrstuvwxyz",
    };
    expectedOutput = true;
  });

  test(`Test Case 26: {
    "input": { "stringOne": "bcdefgijklmnopqrstuvwxyz", "stringTwo": "abcdefghijklmnopqrstuvwxyz" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "bcdefgijklmnopqrstuvwxyz",
      stringTwo: "abcdefghijklmnopqrstuvwxyz",
    };
    expectedOutput = false;
  });

  test(`Test Case 27: {
    "input": { "stringOne": "bcdefghijklmnopqrstuvwxyz", "stringTwo": "acdefghijklmnopqrstuvwxyz" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "bcdefghijklmnopqrstuvwxyz",
      stringTwo: "acdefghijklmnopqrstuvwxyz",
    };
    expectedOutput = true;
  });

  test(`Test Case 28: {
    "input": { "stringOne": "bcdefghijklmnopqrstuvwxyz", "stringTwo": "abdefghijklmnopqrstuvwxyz" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "bcdefghijklmnopqrstuvwxyz",
      stringTwo: "abdefghijklmnopqrstuvwxyz",
    };
    expectedOutput = false;
  });

  test(`Test Case 29: {
    "input": { "stringOne": "bcdefghijklmnopqrstuvwxyz", "stringTwo": "abcdefghijklmnopqrstuvwxy" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "bcdefghijklmnopqrstuvwxyz",
      stringTwo: "abcdefghijklmnopqrstuvwxy",
    };
    expectedOutput = false;
  });

  test(`Test Case 30: {
    "input": { "stringOne": "bcdefghijklmnopqrstuvwxyz", "stringTwo": "abcdefghijklmnopqrstuvwxyza" },
    "expectedOutput": false
  }`, () => {
    input = {
      stringOne: "bcdefghijklmnopqrstuvwxyz",
      stringTwo: "abcdefghijklmnopqrstuvwxyza",
    };
    expectedOutput = false;
  });

  test(`Test Case 31: {
    "input": { "stringOne": "abcdefghijklmnopqrstuvwxyz", "stringTwo": "abcdefghijklnopqrstuvwxyz" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "abcdefghijklmnopqrstuvwxyz",
      stringTwo: "abcdefghijklnopqrstuvwxyz",
    };
    expectedOutput = true;
  });

  test(`Test Case 32: {
    "input": { "stringOne": "abcdefghijklmnopqrstuvwxyz", "stringTwo": "abcdefghijklmmnopqrstuvwxyz" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "abcdefghijklmnopqrstuvwxyz",
      stringTwo: "abcdefghijklmmnopqrstuvwxyz",
    };
    expectedOutput = true;
  });

  test(`Test Case 33: {
    "input": { "stringOne": "abcdefghijklmnopqrstuvwxyz", "stringTwo": "abcdefghijklnnopqrstuvwxyz" },
    "expectedOutput": true
  }`, () => {
    input = {
      stringOne: "abcdefghijklmnopqrstuvwxyz",
      stringTwo: "abcdefghijklnnopqrstuvwxyz",
    };
    expectedOutput = true;
  });

  afterEach(() => {
    let actualOutput = solution.oneEdit(input.stringOne, input.stringTwo);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
