export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  /* https://www.algoexpert.io/questions/run-length-encoding */

  test(`Test Case 1: {
    "input": { "string": "AAAAAAAAAAAAABBCCCCDD" },
    "expectedOutput": "9A4A2B4C2D",
  }`, () => {
    input = {
      string: "AAAAAAAAAAAAABBCCCCDD",
    };
    expectedOutput = "9A4A2B4C2D";
  });

  test(`Test Case 2: {
    "input": { "string": "aA" },
    "expectedOutput": "1a1A",
  }`, () => {
    input = {
      string: "aA",
    };
    expectedOutput = "1a1A";
  });

  test(`Test Case 3: {
    "input": { "string": "122333" },
    "expectedOutput": "112233",
  }`, () => {
    input = {
      string: "122333",
    };
    expectedOutput = "112233";
  });

  test(`Test Case 4: {
    "input": { "string": "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA" },
    "expectedOutput": "9*3*7^6$7%6!9A9A2A",
  }`, () => {
    input = {
      string: "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA",
    };
    expectedOutput = "9*3*7^6$7%6!9A9A2A";
  });

  test(`Test Case 5: {
    "input": { "string": "aAaAaaaaaAaaaAAAABbbbBBBB" },
    "expectedOutput": "1a1A1a1A5a1A3a4A1B3b4B",
  }`, () => {
    input = {
      string: "aAaAaaaaaAaaaAAAABbbbBBBB",
    };
    expectedOutput = "1a1A1a1A5a1A3a4A1B3b4B";
  });

  test(`Test Case 6: {
    "input": { "string": "                          " },
    "expectedOutput": "9 9 8 ",
  }`, () => {
    input = {
      string: "                          ",
    };
    expectedOutput = "9 9 8 ";
  });

  test(`Test Case 7: {
    "input": { "string": "1  222 333    444  555" },
    "expectedOutput": "112 321 334 342 35",
  }`, () => {
    input = {
      string: "1  222 333    444  555",
    };
    expectedOutput = "112 321 334 342 35";
  });

  test(`Test Case 8: {
    "input": { "string": "1A2BB3CCC4DDDD" },
    "expectedOutput": "111A122B133C144D",
  }`, () => {
    input = {
      string: "1A2BB3CCC4DDDD",
    };
    expectedOutput = "111A122B133C144D";
  });

  test(`Test Case 9: {
    "input": { "string": "........______=========AAAA   AAABBBB   BBB" },
    "expectedOutput": "8.6_9=4A3 3A4B3 3B",
  }`, () => {
    input = {
      string: "........______=========AAAA   AAABBBB   BBB",
    };
    expectedOutput = "8.6_9=4A3 3A4B3 3B";
  });

  test(`Test Case 10: {
    "input": { "string": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
    "expectedOutput": "9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a1a",
  }`, () => {
    input = {
      string: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    };
    expectedOutput = "9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a1a";
  });

  test(`Test Case 11: {
    "input": { "string": "        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
    "expectedOutput": "8 9a9a9a9a9a4a",
  }`, () => {
    input = {
      string: "        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    };
    expectedOutput = "8 9a9a9a9a9a4a";
  });

  test(`Test Case 12: {
    "input": { "string": " " },
    "expectedOutput": "1 ",
  }`, () => {
    input = {
      string: " ",
    };
    expectedOutput = "1 ";
  });

  test(`Test Case 13: {
    "input": { "string": "[(aaaaaaa,bbbbbbb,ccccc,dddddd)]" },
    "expectedOutput": "1[1(7a1,7b1,5c1,6d1)1]",
  }`, () => {
    input = {
      string: "[(aaaaaaa,bbbbbbb,ccccc,dddddd)]",
    };
    expectedOutput = "1[1(7a1,7b1,5c1,6d1)1]";
  });

  test(`Test Case 14: {
    "input": { "string": ";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s" },
    "expectedOutput": "9;3;9'9'2'111273524142311s",
  }`, () => {
    input = {
      string: ";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s",
    };
    expectedOutput = "9;3;9'9'2'111273524142311s";
  });

  test(`Test Case 15: {
    "input": { "string": "AAAAAAAAAAAAABBCCCCDDDDDDDDDDD" },
    "expectedOutput": "9A4A2B4C9D2D",
  }`, () => {
    input = {
      string: "AAAAAAAAAAAAABBCCCCDDDDDDDDDDD",
    };
    expectedOutput = "9A4A2B4C9D2D";
  });

  afterEach(() => {
    let actualOutput = solution.runLengthEncoding(input.string);
    expect(actualOutput).toEqual(expectedOutput);
  });
};
