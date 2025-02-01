export const sharedTests = (getSolution) => {
  let solution, input, expectedOutput, actualOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
    actualOutput = undefined;
  });

  test(`Test Case 1: {
      "input": { "competitions": [["HTML","C#"],["C#","Python"],["Python","HTML"]], "results": [0, 0, 1] },
      "expectedOutput": "Python"
    }`, () => {
    input = {
      competitions: [
        ["HTML", "C#"],
        ["C#", "Python"],
        ["Python", "HTML"],
      ],
      results: [0, 0, 1],
    };
    expectedOutput = "Python";
  });

  test(`Test Case 2: {
    "input": { "competitions": [["HTML","Java"],["Java","Python"],["Python","HTML"]], "results": [0, 1, 1] },
    "expectedOutput": "Java"
  }`, () => {
    input = {
      competitions: [
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"],
      ],
      results: [0, 1, 1],
    };
    expectedOutput = "Java";
  });

  test(`Test Case 3: {
    "input": { "competitions": [["HTML","Java"],["Java","Python"],["Python","HTML"],["C#","Python"],["Java","C#"],["C#","HTML"]], "results": [0, 1, 1, 1, 0, 1] },
    "expectedOutput": "C#"
  }`, () => {
    input = {
      competitions: [
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"],
        ["C#", "Python"],
        ["Java", "C#"],
        ["C#", "HTML"],
      ],
      results: [0, 1, 1, 1, 0, 1],
    };
    expectedOutput = "C#";
  });

  test(`Test Case 4: {
    "input": { "competitions": [["HTML","Java"],["Java","Python"],["Python","HTML"],["C#","Python"],["Java","C#"],["C#","HTML"],["SQL","C#"],["HTML","SQL"],["SQL","Python"],["SQL","Java"]], "results": [0, 1, 1, 1, 0, 1, 0, 1, 1, 0] },
    "expectedOutput": "C#"
  }`, () => {
    input = {
      competitions: [
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"],
        ["C#", "Python"],
        ["Java", "C#"],
        ["C#", "HTML"],
        ["SQL", "C#"],
        ["HTML", "SQL"],
        ["SQL", "Python"],
        ["SQL", "Java"],
      ],
      results: [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
    };
    expectedOutput = "C#";
  });

  test(`Test Case 5: {
    "input": { "competitions": [["Bulls","Eagles"]], "results": [1] },
    "expectedOutput": "Bulls"
  }`, () => {
    input = {
      competitions: [["Bulls", "Eagles"]],
      results: [1],
    };
    expectedOutput = "Bulls";
  });

  test(`Test Case 6: {
    "input": { "competitions": [["Bulls","Eagles"],["Bulls","Bears"],["Bears","Eagles"]], "results": [0, 0, 0] },
    "expectedOutput": "Eagles"
  }`, () => {
    input = {
      competitions: [
        ["Bulls", "Eagles"],
        ["Bulls", "Bears"],
        ["Bears", "Eagles"],
      ],
      results: [0, 0, 0],
    };
    expectedOutput = "Eagles";
  });

  test(`Test Case 7: {
    "input": { "competitions": [["Bulls","Eagles"],["Bulls","Bears"],["Bulls","Monkeys"],["Eagles","Bears"],["Eagles","Monkeys"],["Bears","Monkeys"]], "results": [1, 1, 1, 1, 1, 1] },
    "expectedOutput": "Bulls"
  }`, () => {
    input = {
      competitions: [
        ["Bulls", "Eagles"],
        ["Bulls", "Bears"],
        ["Bulls", "Monkeys"],
        ["Eagles", "Bears"],
        ["Eagles", "Monkeys"],
        ["Bears", "Monkeys"],
      ],
      results: [1, 1, 1, 1, 1, 1],
    };
    expectedOutput = "Bulls";
  });

  test(`Test Case 8: {
    "input": { "competitions": [["AlgoMasters","FrontPage Freebirds"],["Runtime Terror","Static Startup"],["WeC#","Hypertext Assassins"],["AlgoMasters","WeC#"],["Static Startup","Hypertext Assassins"],["Runtime Terror","FrontPage Freebirds"],["AlgoMasters","Runtime Terror"],["Hypertext Assassins","FrontPage Freebirds"],["Static Startup","WeC#"],["AlgoMasters","Static Startup"],["FrontPage Freebirds","WeC#"],["Hypertext Assassins","Runtime Terror"],["AlgoMasters","Hypertext Assassins"],["WeC#","Runtime Terror"],["FrontPage Freebirds","Static Startup"]], "results": [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0] },
    "expectedOutput": "AlgoMasters"
  }`, () => {
    input = {
      competitions: [
        ["AlgoMasters", "FrontPage Freebirds"],
        ["Runtime Terror", "Static Startup"],
        ["WeC#", "Hypertext Assassins"],
        ["AlgoMasters", "WeC#"],
        ["Static Startup", "Hypertext Assassins"],
        ["Runtime Terror", "FrontPage Freebirds"],
        ["AlgoMasters", "Runtime Terror"],
        ["Hypertext Assassins", "FrontPage Freebirds"],
        ["Static Startup", "WeC#"],
        ["AlgoMasters", "Static Startup"],
        ["FrontPage Freebirds", "WeC#"],
        ["Hypertext Assassins", "Runtime Terror"],
        ["AlgoMasters", "Hypertext Assassins"],
        ["WeC#", "Runtime Terror"],
        ["FrontPage Freebirds", "Static Startup"],
      ],
      results: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    };
    expectedOutput = "AlgoMasters";
  });

  test(`Test Case 9: {
    "input": { "competitions": [["HTML","Java"],["Java","Python"],["Python","HTML"],["C#","Python"],["Java","C#"],["C#","HTML"],["SQL","C#"],["HTML","SQL"],["SQL","Python"],["SQL","Java"]], "results": [0, 0, 0, 0, 0, 0, 1, 0, 1, 1] },
    "expectedOutput": "SQL"
  }`, () => {
    input = {
      competitions: [
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"],
        ["C#", "Python"],
        ["Java", "C#"],
        ["C#", "HTML"],
        ["SQL", "C#"],
        ["HTML", "SQL"],
        ["SQL", "Python"],
        ["SQL", "Java"],
      ],
      results: [0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
  };
    expectedOutput = "SQL";
  });

  test(`Test Case 10: {
    "input": { "competitions": [["A","B"]],"results": [0] },
    "expectedOutput": "B"
  }`, () => {
    input = {
      competitions: [["A", "B"]],
      results: [0],
    };
    expectedOutput = "B";
  });

  afterEach(() => {
    actualOutput = solution.tournamentWinner(input.competitions, input.results);
    expect(actualOutput).toBe(expectedOutput);
  });
};
