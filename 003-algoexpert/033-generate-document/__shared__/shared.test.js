export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "characters": "Bste!hetsi ogEAxpelrt x ", "document": "AlgoExpert is the Best!"},
    "expectedOutput": true
  }`, () => {
    input = {
      characters: "Bste!hetsi ogEAxpelrt x ",
      document: "AlgoExpert is the Best!",
    };
    expectedOutput = true;
  });

  test(`Test Case 2: {
    "input": { "characters": "A", "document": "a"},
    "expectedOutput": false
  }`, () => {
    input = {
      characters: "A",
      document: "a",
    };
    expectedOutput = false;
  });

  test(`Test Case 3: {
    "input": { "characters": "a", "document": "a"},
    "expectedOutput": true
  }`, () => {
    input = {
      characters: "a",
      document: "a",
    };
    expectedOutput = true;
  });

  test(`Test Case 4: {
    "input": { "characters": "a hsgalhsa sanbjksbdkjba kjx", "document": ""},
    "expectedOutput": true
  }`, () => {
    input = {
      characters: "a hsgalhsa sanbjksbdkjba kjx",
      document: "",
    };
    expectedOutput = true;
  });

  test(`Test Case 5: {
    "input": { "characters": "", "document": "hello"},
    "expectedOutput": false
  }`, () => {
    input = {
      characters: "",
      document: "hello",
    };
    expectedOutput = false;
  });

  test(`Test Case 6: {
    "input": { "characters": "", "document": ""},
    "expectedOutput": true
  }`, () => {
    input = {
      characters: "",
      document: "",
    };
    expectedOutput = true;
  });

  test(`Test Case 7: {
    "input": { "characters": "aheaollabbhb", "document": "hello"},
    "expectedOutput": true
  }`, () => {
    input = {
      characters: "aheaollabbhb",
      document: "hello",
    };
    expectedOutput = true;
  });

  test(`Test Case 8: {
    "input": { "characters": "aheaolabbhb", "document": "hello"},
    "expectedOutput": false
  }`, () => {
    input = {
      characters: "aheaolabbhb",
      document: "hello",
    };
    expectedOutput = false;
  });

  test(`Test Case 9: {
    "input": { "characters": "estssa", "document": "testing"},
    "expectedOutput": false
  }`, () => {
    input = {
      characters: "estssa",
      document: "testing",
    };
    expectedOutput = false;
  });

  test(`Test Case 10: {
    "input": { "characters": "Bste!hetsi ogEAxpert", "document": "AlgoExpert is the Best!"},
    "expectedOutput": false
  }`, () => {
    input = {
      characters: "Bste!hetsi ogEAxpert",
      document: "AlgoExpert is the Best!",
    };
    expectedOutput = false;
  });

  test(`Test Case 11: {
    "input": { "characters": "helloworld", "document": "hello wOrld"},
    "expectedOutput": false
  }`, () => {
    input = {
      characters: "helloworld",
      document: "hello wOrld",
    };
    expectedOutput = false;
  });

  test(`Test Case 12: {
    "input": { "characters": "helloworldO", "document": "hello wOrld"},
    "expectedOutput": false
  }`, () => {
    input = {
      characters: "helloworldO",
      document: "hello wOrld",
    };
    expectedOutput = false;
  });

  test(`Test Case 13: {
    "input": { "characters": "helloworldO", "document": "hello wOrld"},
    "expectedOutput": false
  }`, () => {
    input = {
      characters: "helloworldO",
      document: "hello wOrld",
    };
    expectedOutput = false;
  });

  test(`Test Case 14: {
    "input": { "characters": "&*&you^a%^&8766 _=-09 docanCMakemthisdocument", "document": "Can you make this document &"},
    "expectedOutput": false
  }`, () => {
    input = {
      characters: "&*&you^a%^&8766 _=-09 docanCMakemthisdocument",
      document: "Can you make this document &",
    };
    expectedOutput = false;
  });

  test(`Test Case 15: {
    "input": { "characters": "abcabcabcacbcdaabc", "document": "bacaccadac"},
    "expectedOutput": true
  }`, () => {
    input = {
      characters: "abcabcabcacbcdaabc",
      document: "bacaccadac",
    };
    expectedOutput = true;
  });

  afterEach(() => {
    const actualOutput = solution.generateDocument(
      input.characters,
      input.document,
    );
    expect(actualOutput).toEqual(expectedOutput);
  });
};
