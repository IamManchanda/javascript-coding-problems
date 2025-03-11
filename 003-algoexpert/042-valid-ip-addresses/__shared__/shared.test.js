export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "string": "1921680" },
    "expectedOutput": ["1.9.216.80", "1.92.16.80", "1.92.168.0", "19.2.16.80", "19.2.168.0", "19.21.6.80", "19.21.68.0", "19.216.8.0", "192.1.6.80", "192.1.68.0", "192.16.8.0"]
  }`, () => {
    input = {
      string: "1921680",
    };
    expectedOutput = [
      "1.9.216.80",
      "1.92.16.80",
      "1.92.168.0",
      "19.2.16.80",
      "19.2.168.0",
      "19.21.6.80",
      "19.21.68.0",
      "19.216.8.0",
      "192.1.6.80",
      "192.1.68.0",
      "192.16.8.0",
    ];
  });

  test(`Test Case 2: {
    "input": { "string": "3700100" },
    "expectedOutput": ["3.70.0.100", "37.0.0.100"]
  }`, () => {
    input = {
      string: "3700100",
    };
    expectedOutput = ["3.70.0.100", "37.0.0.100"];
  });

  test(`Test Case 3: {
    "input": { "string": "9743" },
    "expectedOutput": ["9.7.4.3"]
  }`, () => {
    input = {
      string: "9743",
    };
    expectedOutput = ["9.7.4.3"];
  });

  test(`Test Case 4: {
    "input": { "string": "97430" },
    "expectedOutput": ["9.7.4.30", "9.7.43.0", "9.74.3.0", "97.4.3.0"]
  }`, () => {
    input = {
      string: "97430",
    };
    expectedOutput = ["9.7.4.30", "9.7.43.0", "9.74.3.0", "97.4.3.0"];
  });

  test(`Test Case 5: {
    "input": { "string": "997430" },
    "expectedOutput":  ["9.9.74.30", "9.97.4.30", "9.97.43.0", "99.7.4.30", "99.7.43.0", "99.74.3.0"]
  }`, () => {
    input = {
      string: "997430",
    };
    expectedOutput = [
      "9.9.74.30",
      "9.97.4.30",
      "9.97.43.0",
      "99.7.4.30",
      "99.7.43.0",
      "99.74.3.0",
    ];
  });

  test(`Test Case 6: {
    "input": { "string": "255255255255" },
    "expectedOutput": ["255.255.255.255"]
  }`, () => {
    input = {
      string: "255255255255",
    };
    expectedOutput = ["255.255.255.255"];
  });

  test(`Test Case 7: {
    "input": { "string": "255255255256" },
    "expectedOutput": []
  }`, () => {
    input = {
      string: "255255255256",
    };
    expectedOutput = [];
  });

  test(`Test Case 8: {
    "input": { "string": "99999999" },
    "expectedOutput": ["99.99.99.99"]
  }`, () => {
    input = {
      string: "99999999",
    };
    expectedOutput = ["99.99.99.99"];
  });

  test(`Test Case 9: {
    "input": { "string": "33133313" },
    "expectedOutput": ["33.13.33.13", "33.133.3.13", "33.133.31.3"]
  }`, () => {
    input = {
      string: "33133313",
    };
    expectedOutput = ["33.13.33.13", "33.133.3.13", "33.133.31.3"];
  });

  test(`Test Case 10: {
    "input": { "string": "00010" },
    "expectedOutput": ["0.0.0.10"]
  }`, () => {
    input = {
      string: "00010",
    };
    expectedOutput = ["0.0.0.10"];
  });

  test(`Test Case 11: {
    "input": { "string": "100100" },
    "expectedOutput": ["1.0.0.100", "10.0.10.0", "100.1.0.0"]
  }`, () => {
    input = {
      string: "100100",
    };
    expectedOutput = ["1.0.0.100", "10.0.10.0", "100.1.0.0"];
  });

  test(`Test Case 12: {
    "input": { "string": "1072310" },
    "expectedOutput": ["10.7.23.10", "10.7.231.0", "10.72.3.10", "10.72.31.0", "107.2.3.10", "107.2.31.0", "107.23.1.0"]
  }`, () => {
    input = {
      string: "1072310",
    };
    expectedOutput = [
      "10.7.23.10",
      "10.7.231.0",
      "10.72.3.10",
      "10.72.31.0",
      "107.2.3.10",
      "107.2.31.0",
      "107.23.1.0",
    ];
  });

  test(`Test Case 13: {
    "input": { "string": "1" },
    "expectedOutput": []
  }`, () => {
    input = {
      string: "1",
    };
    expectedOutput = [];
  });

  test(`Test Case 14: {
    "input": { "string": "11" },
    "expectedOutput": []
  }`, () => {
    input = {
      string: "11",
    };
    expectedOutput = [];
  });

  test(`Test Case 15: {
    "input": { "string": "111" },
    "expectedOutput": []
  }`, () => {
    input = {
      string: "111",
    };
    expectedOutput = [];
  });

  test(`Test Case 16: {
    "input": { "string": "00001" },
    "expectedOutput": []
  }`, () => {
    input = {
      string: "00001",
    };
    expectedOutput = [];
  });

  afterEach(() => {
    const actualOutput = solution.validIPAddresses(input.string);
    expect(actualOutput.length).toBe(expectedOutput.length);
    expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  });
};
