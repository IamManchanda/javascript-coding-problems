export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "words": ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"] },
    "expectedOutput": [["yo", "oy"], ["act", "tac", "cat"], ["flop", "olfp"], ["foo"]]
  }`, () => {
    input = {
      words: ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"],
    };
    expectedOutput = [
      ["yo", "oy"],
      ["act", "tac", "cat"],
      ["flop", "olfp"],
      ["foo"],
    ];
  });

  test(`Test Case 2: {
    "input": { "words": [] },
    "expectedOutput": []
  }`, () => {
    input = {
      words: [],
    };
    expectedOutput = [];
  });

  test(`Test Case 3: {
    "input": { "words": ["test"] },
  }`, () => {
    input = {
      words: ["test"],
    };
    expectedOutput = [
      ["test"],
    ];
  });

  test(`Test Case 4: {
    "input": { "words": ["abc", "dabd", "bca", "cab", "ddba"] },
  }`, () => {
    input = {
      words: ["abc", "dabd", "bca", "cab", "ddba"],
    };
    expectedOutput = [
      ["abc", "bca", "cab"],
      ["dabd", "ddba"],
    ];
  });

  test(`Test Case 5: {
    "input": { "words": ["abc", "cba", "bca"] },
    "expectedOutput": [["abc", "cba", "bca"]]
  }`, () => {
    input = {
      words: ["abc", "cba", "bca"],
    };
    expectedOutput = [
      ["abc", "cba", "bca"],
    ];
  });

  test(`Test Case 6: {
    "input": { "words": ["zxc", "asd", "weq", "sda", "qwe", "xcz"] },
    "expectedOutput": [["zxc", "xcz"], ["asd", "sda"], ["weq", "qwe"]]
  }`, () => {
    input = {
      words: ["zxc", "asd", "weq", "sda", "qwe", "xcz"],
    };
    expectedOutput = [
      ["zxc", "xcz"],
      ["asd", "sda"],
      ["weq", "qwe"],
    ];
  });

  test(`Test Case 7: {
    "input": { "words": ["cinema", "a", "flop", "iceman", "meacyne", "lofp", "olfp"] },
    "expectedOutput": [["cinema", "iceman"], ["a"], ["flop", "lofp", "olfp"], ["meacyne"]]
  }`, () => {
    input = {
      words: ["cinema", "a", "flop", "iceman", "meacyne", "lofp", "olfp"],
    };
    expectedOutput = [
      ["cinema", "iceman"],
      ["a"],
      ["flop", "lofp", "olfp"],
      ["meacyne"],
    ];
  });

  test(`Test Case 8: {
    "input": { "words": ["abc", "abe", "abf", "abg"] },
    "expectedOutput": [["abc"], ["abe"], ["abf"], ["abg"]]
  }`, () => {
    input = {
      words: ["abc", "abe", "abf", "abg"],
    };
    expectedOutput = [
      ["abc"],
      ["abe"],
      ["abf"],
      ["abg"],
    ];
  });

  test(`Test Case 9: {
    "input": { "words": ["aaa", "a"] },
    "expectedOutput": [["aaa"], ["a"]]
  }`, () => {
    input = {
      words: ["aaa", "a"],
    };
    expectedOutput = [
      ["aaa"],
      ["a"],
    ];
  });

  test(`Test Case 10: {
    "input": { "words": ["bob", "boo"] },
    "expectedOutput": [["bob"], ["boo"]]
  }`, () => {
    input = {
      words: ["bob", "boo"],
    };
    expectedOutput = [
      ["bob"],
      ["boo"],
    ];
  });

  test(`Test Case 11: {
    "input": { "words": ["ill", "duh"] },
    "expectedOutput": [["ill"], ["duh"]]
  }`, () => {
    input = {
      words: ["ill", "duh"],
    };
    expectedOutput = [
      ["ill"],
      ["duh"],
    ];
  });

  test(`Test Case 12: {
    "input": { "words": ["yo", "oy", "zn"] },
    "expectedOutput": [["yo", "oy"], ["zn"]]
  }`, () => {
    input = {
      words: ["yo", "oy", "zn"],
    };
    expectedOutput = [
      ["yo", "oy"],
      ["zn"],
    ];
  });

  test(`Test Case 13: {
    "input": { "words": ["yyo", "yo"] },
    "expectedOutput": [["yyo"], ["yo"]]
  }`, () => {
    input = {
      words: ["yyo", "yo"],
    };
    expectedOutput = [
      ["yyo"],
      ["yo"],
    ];
  });

  test(`Test Case 14: {
    "input": { "words": ["aca", "bba"] },
    "expectedOutput": [["aca"], ["bba"]]
  }`, () => {
    input = {
      words: ["aca", "bba"],
    };
    expectedOutput = [
      ["aca"],
      ["bba"],
    ];
  });

  afterEach(() => {
    let actualOutput = solution.groupAnagrams(input.words);
    actualOutput = actualOutput.map((array) => array.sort());
    expectedOutput = expectedOutput.map((array) => array.sort());
    expect(actualOutput.length).toBe(expectedOutput.length);
    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });
};
