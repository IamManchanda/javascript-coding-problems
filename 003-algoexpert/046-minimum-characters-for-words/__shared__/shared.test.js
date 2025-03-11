export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "words": ["this", "that", "did", "deed", "them!", "a"] },
    "expectedOutput": ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
  }`, () => {
    input = {
      words: ["this", "that", "did", "deed", "them!", "a"],
    };
    expectedOutput = [
      "t",
      "t",
      "h",
      "i",
      "s",
      "a",
      "d",
      "d",
      "e",
      "e",
      "m",
      "!",
    ];
  });

  test(`Test Case 2: {
    "input": { "words": ["a", "abc", "ab", "boo"] },
    "expectedOutput": ["a", "b", "c", "o", "o"]
  }`, () => {
    input = {
      words: ["a", "abc", "ab", "boo"],
    };
    expectedOutput = ["a", "b", "c", "o", "o"];
  });

  test(`Test Case 3: {
    "input": { "words": ["a"] },
    "expectedOutput": ["a"]
  }`, () => {
    input = {
      words: ["a"],
    };
    expectedOutput = ["a"];
  });

  test(`Test Case 4: {
    "input": { "words": ["abc", "ab", "b", "bac", "c"] },
    "expectedOutput": ["a", "b", "c"]
  }`, () => {
    input = {
      words: ["abc", "ab", "b", "bac", "c"],
    };
    expectedOutput = ["a", "b", "c"];
  });

  test(`Test Case 5: {
    "input": { "words": ["!!!2", "234", "222", "432"] },
    "expectedOutput": ["!", "!", "!", "2", "2", "2", "3", "4"]
  }`, () => {
    input = {
      words: ["!!!2", "234", "222", "432"],
    };
    expectedOutput = ["!", "!", "!", "2", "2", "2", "3", "4"];
  });

  test(`Test Case 6: {
    "input": { "words": ["this", "that", "they", "them", "their", "there", "time", "is"] },
    "expectedOutput": ["t", "t", "h", "i", "s", "a", "e", "e", "m", "r", "y"]
  }`, () => {
    input = {
      words: ["this", "that", "they", "them", "their", "there", "time", "is"],
    };
    expectedOutput = ["t", "t", "h", "i", "s", "a", "e", "e", "m", "r", "y"];
  });

  test(`Test Case 7: {
    "input": { "words": ["tim", "is", "great"] },
    "expectedOutput": ["t", "i", "m", "s", "g", "r", "e", "a"]
  }`, () => {
    input = {
      words: ["tim", "is", "great"],
    };
    expectedOutput = ["t", "i", "m", "s", "g", "r", "e", "a"];
  });

  test(`Test Case 8: {
    "input": { "words": ["abc", "bavcc", "aaaa", "cde", "efg", "gead"] },
    "expectedOutput": ["a", "a", "a", "a", "b", "c", "c", "d", "e", "f", "g", "v"]
  }`, () => {
    input = {
      words: ["abc", "bavcc", "aaaa", "cde", "efg", "gead"],
    };
    expectedOutput = [
      "a",
      "a",
      "a",
      "a",
      "b",
      "c",
      "c",
      "d",
      "e",
      "f",
      "g",
      "v",
    ];
  });

  test(`Test Case 9: {
    "input": { "words": ["a", "a", "a"] },
    "expectedOutput": ["a"]
  }`, () => {
    input = {
      words: ["a", "a", "a"],
    };
    expectedOutput = ["a"];
  });

  test(`Test Case 10: {
    "input": { "words": ["them", "they", "that", "that", "yes", "yo", "no", "boo", "you", "okay", "too"] },
    "expectedOutput": ["t", "t", "h", "e", "m", "y", "a", "s", "o", "n", "b", "o", "k", "u"]
  }`, () => {
    input = {
      words: [
        "them",
        "they",
        "that",
        "that",
        "yes",
        "yo",
        "no",
        "boo",
        "you",
        "okay",
        "too",
      ],
    };
    expectedOutput = [
      "t",
      "t",
      "h",
      "e",
      "m",
      "y",
      "a",
      "s",
      "o",
      "n",
      "b",
      "o",
      "k",
      "u",
    ];
  });

  test(`Test Case 11: {
    "input": { "words": ["cta", "cat", "tca", "tac", "a", "c", "t"] },
    "expectedOutput": ["a", "c", "t"]
  }`, () => {
    input = {
      words: ["cta", "cat", "tca", "tac", "a", "c", "t"],
    };
    expectedOutput = ["a", "c", "t"];
  });

  test(`Test Case 12: {
    "input": { "words": ["my", "coding", "skills", "are", "great"] },
    "expectedOutput": ["a", "c", "d", "e", "g", "i", "k", "l", "l", "m", "n", "o", "r", "s", "s", "t", "y"]
  }`, () => {
    input = {
      words: ["my", "coding", "skills", "are", "great"],
    };
    expectedOutput = [
      "a",
      "c",
      "d",
      "e",
      "g",
      "i",
      "k",
      "l",
      "l",
      "m",
      "n",
      "o",
      "r",
      "s",
      "s",
      "t",
      "y",
    ];
  });

  test(`Test Case 13: {
    "input": { "words": [] },
    "expectedOutput": []
  }`, () => {
    input = {
      words: [],
    };
    expectedOutput = [];
  });

  test(`Test Case 14: {
    "input": { "words": ["168712hn3;nlsdjhahjdksaxa097918@#$RT%T^&*()_"] },
    "expectedOutput": ["#", "$", "%", "&", "(", ")", "*", "0", "1", "1", "1", "2", "3", "6", "7", "7", "8", "8", "9", "9", ";", "@", "R", "T", "T", "^", "_", "a", "a", "a", "d", "d", "h", "h", "h", "j", "j", "k", "l", "n", "n", "s", "s", "x"]
  }`, () => {
    input = {
      words: ["168712hn3;nlsdjhahjdksaxa097918@#$RT%T^&*()_"],
    };
    expectedOutput = [
      "#",
      "$",
      "%",
      "&",
      "(",
      ")",
      "*",
      "0",
      "1",
      "1",
      "1",
      "2",
      "3",
      "6",
      "7",
      "7",
      "8",
      "8",
      "9",
      "9",
      ";",
      "@",
      "R",
      "T",
      "T",
      "^",
      "_",
      "a",
      "a",
      "a",
      "d",
      "d",
      "h",
      "h",
      "h",
      "j",
      "j",
      "k",
      "l",
      "n",
      "n",
      "s",
      "s",
      "x",
    ];
  });

  test(`Test Case 15: {
    "input": { "words": ["cat", "cAt", "tAc", "Act", "Cat"] },
    "expectedOutput": ["A", "C", "a", "c", "t"]
  }`, () => {
    input = {
      words: ["cat", "cAt", "tAc", "Act", "Cat"],
    };
    expectedOutput = ["A", "C", "a", "c", "t"];
  });

  test(`Test Case 16: {
    "input": { "words": ["Abc", "baVcc", "aaaa", "cdeE", "efg", "gead"] },
    "expectedOutput": ["A", "E", "V", "a", "a", "a", "a", "b", "c", "c", "d", "e", "f", "g"]
  }`, () => {
    input = {
      words: ["Abc", "baVcc", "aaaa", "cdeE", "efg", "gead"],
    };
    expectedOutput = [
      "A",
      "E",
      "V",
      "a",
      "a",
      "a",
      "a",
      "b",
      "c",
      "c",
      "d",
      "e",
      "f",
      "g",
    ];
  });

  test(`Test Case 17: {
    "input": { "words": ["mississippi", "piper", "icing", "ice", "pickle", "piping", "pie", "pi", "sassy", "serpent", "python", "ascii", "sister", "mister"] },
    "expectedOutput": ["a", "c", "e", "e", "g", "h", "i", "i", "i", "i", "k", "l", "m", "n", "o", "p", "p", "r", "s", "s", "s", "s", "t", "y"]
  }`, () => {
    input = {
      words: [
        "mississippi",
        "piper",
        "icing",
        "ice",
        "pickle",
        "piping",
        "pie",
        "pi",
        "sassy",
        "serpent",
        "python",
        "ascii",
        "sister",
        "mister",
      ],
    };
    expectedOutput = [
      "a",
      "c",
      "e",
      "e",
      "g",
      "h",
      "i",
      "i",
      "i",
      "i",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "p",
      "r",
      "s",
      "s",
      "s",
      "s",
      "t",
      "y",
    ];
  });

  afterEach(() => {
    let actualOutput = solution.minimumCharactersForWords(input.words);
    actualOutput = actualOutput.sort();
    expectedOutput = expectedOutput.sort();
    expect(actualOutput.length).toBe(expectedOutput.length);
    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });
};
