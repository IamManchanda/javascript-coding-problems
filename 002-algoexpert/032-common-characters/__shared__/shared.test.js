export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "strings": ["abc", "bcd", "cbad"] },
    "expectedOutput": ["b", "c"]
  }`, () => {
    input = {
      strings: ["abc", "bcd", "cbad"],
    };
    expectedOutput = ["b", "c"];
  });

  test(`Test Case 2: {
    "input": { "strings": ["a"] },
    "expectedOutput": ["a"]
  }`, () => {
    input = {
      strings: ["a"],
    };
    expectedOutput = ["a"];
  });

  test(`Test Case 3: {
    "input": { "strings": ["a", "b", "c"] },
    "expectedOutput": []
  }`, () => {
    input = {
      strings: ["a", "b", "c"],
    };
    expectedOutput = [];
  });

  test(`Test Case 4: {
    "input": { "strings": ["aa", "aa"] },
    "expectedOutput": ["a"]
  }`, () => {
    input = {
      strings: ["aa", "aa"],
    };
    expectedOutput = ["a"];
  });

  test(`Test Case 5: {
    "input": { "strings": ["aaaa", "a"] },
    "expectedOutput": ["a"]
  }`, () => {
    input = {
      strings: ["aaaa", "a"],
    };
    expectedOutput = ["a"];
  });

  test(`Test Case 6: {
    "input": { "strings": ["abcde", "aa", "foobar", "foobaz", "and this is a string", "aaaaaaaa", "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeea"] },
    "expectedOutput": ["a"]
  }`, () => {
    input = {
      strings: ["abcde", "aa", "foobar", "foobaz", "and this is a string", "aaaaaaaa", "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeea"],
    };
    expectedOutput = ["a"];
  });

  test(`Test Case 7: {
    "input": { "strings": ["abcdef", "fedcba", "abcefd", "aefbcd", "efadbc", "effffffffffffbcda", "eeeeeffffffbbbbbaaaaaccccdddd", "**************abdcef************"] },
    "expectedOutput": ["a", "b", "c", "d", "e", "f"]
  }`, () => {
    input = {
      strings: ["abcdef", "fedcba", "abcefd", "aefbcd", "efadbc", "effffffffffffbcda", "eeeeeffffffbbbbbaaaaaccccdddd", "**************abdcef************"],
    };
    expectedOutput = ["a", "b", "c", "d", "e", "f"];
  });

  test(`Test Case 8: {
    "input": { "strings": ["ab&cdef!", "f!ed&cba", "a&bce!d", "ae&fb!cd", "efa&!dbc", "eff!&fff&fffffffbcda", "eeee!efff&fffbbbbbaaaaaccccdddd", "*******!***&****abdcef************", "*******!***&****a***********f*", "*******!***&****b***********c*"] },
    "expectedOutput": ["&", "!"]
  }`, () => {
    input = {
      strings: ["ab&cdef!", "f!ed&cba", "a&bce!d", "ae&fb!cd", "efa&!dbc", "eff!&fff&fffffffbcda", "eeee!efff&fffbbbbbaaaaaccccdddd", "*******!***&****abdcef************", "*******!***&****a***********f*", "*******!***&****b***********c*"],
    };
    expectedOutput = ["&", "!"];
  });

  test(`Test Case 9: {
    "input": { "strings": ["*abcd", "def*", "******d*****"] },
    "expectedOutput": ["d"]
  }`, () => {
    input = {
      strings: ["*abcd", "def*", "******d*****"],
    };
    expectedOutput = ["d"];
  });

  test(`Test Case 10: {
    "input": { "strings": ["*abc!d", "de!f*", "**!!!****d*****"] },
    "expectedOutput": ["d"]
  }`, () => {
    input = {
      strings: ["*abc!d", "de!f*", "**!!!****d*****"],
    };
    expectedOutput = ["d"];
  });

  afterEach(() => {
    let actualOutput = solution.commonCharacters(input.strings);
    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });
};
