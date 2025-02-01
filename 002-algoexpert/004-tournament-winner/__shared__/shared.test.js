export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test(`Test Case 1: {
      "input": { "competitions": [["HTML","C#"],["C#","Python"],["Python","HTML"]], "results": [0, 0, 1] },
      "expectedOutput": "Python"
    }`, () => {
    const { competitions, results } = {
      competitions: [
        ["HTML", "C#"],
        ["C#", "Python"],
        ["Python", "HTML"],
      ],
      results: [0, 0, 1],
    };

    const expectedOutput = "Python";
    const actualOutput = solution.tournamentWinner(competitions, results);

    expect(actualOutput).toBe(expectedOutput);
  });

  test(`Test Case 2: {
    "input": { "competitions": [["HTML","Java"],["Java","Python"],["Python","HTML"]], "results": [0, 1, 1] },
    "expectedOutput": "Java"
  }`, () => {
    const { competitions, results } = {
      competitions: [
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"],
      ],
      results: [0, 1, 1],
    };

    const expectedOutput = "Java";
    const actualOutput = solution.tournamentWinner(competitions, results);
    
    expect(actualOutput).toBe(expectedOutput);
  });

  test(`Test Case 3: {
    "input": { "competitions": [["HTML","Java"],["Java","Python"],["Python","HTML"],["C#","Python"],["Java","C#"],["C#","HTML"]], "results": [0, 1, 1, 1, 0, 1] },
    "expectedOutput": "C#"
  }`, () => {
    const { competitions, results } = {
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

    const expectedOutput = "C#";
    const actualOutput = solution.tournamentWinner(competitions, results);
    
    expect(actualOutput).toBe(expectedOutput);
  });

  test(`Test Case 4: {
    "input": { "competitions": [["HTML","Java"],["Java","Python"],["Python","HTML"],["C#","Python"],["Java","C#"],["C#","HTML"],["SQL","C#"],["HTML","SQL"],["SQL","Python"],["SQL","Java"]], "results": [0, 1, 1, 1, 0, 1, 0, 1, 1, 0] },
    "expectedOutput": "C#"
  }`, () => {
    const { competitions, results } = {
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

    const expectedOutput = "C#";
    const actualOutput = solution.tournamentWinner(competitions, results);
    
    expect(actualOutput).toBe(expectedOutput);
  });

  test(`Test Case 5: {
    "input": { "competitions": [["Bulls","Eagles"]], "results": [1] },
    "expectedOutput": "Bulls"
  }`, () => {
    const { competitions, results } = {
      competitions: [["Bulls", "Eagles"]],
      results: [1],
    };

    const expectedOutput = "Bulls";
    const actualOutput = solution.tournamentWinner(competitions, results);
    
    expect(actualOutput).toBe(expectedOutput);
  });

  test(`Test Case 6: {
    "input": { "competitions": [["Bulls","Eagles"],["Bulls","Bears"],["Bears","Eagles"]], "results": [0, 0, 0] },
    "expectedOutput": "Eagles"
  }`, () => {
    const { competitions, results } = {
      competitions: [
        ["Bulls", "Eagles"],
        ["Bulls", "Bears"],
        ["Bears", "Eagles"],
      ],
      results: [0, 0, 0],
    };

    const expectedOutput = "Eagles";
    const actualOutput = solution.tournamentWinner(competitions, results);
    
    expect(actualOutput).toBe(expectedOutput);
  });

  test(`Test Case 7: {
    "input": { "competitions": [["Bulls","Eagles"],["Bulls","Bears"],["Bulls","Monkeys"],["Eagles","Bears"],["Eagles","Monkeys"],["Bears","Monkeys"]], "results": [1, 1, 1, 1, 1, 1] },
    "expectedOutput": "Bulls"
  }`, () => {
    const { competitions, results } = {
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

    const expectedOutput = "Bulls";
    const actualOutput = solution.tournamentWinner(competitions, results);
    
    expect(actualOutput).toBe(expectedOutput);
  });

  test(`Test Case 8: {
    "input": { "competitions": [["AlgoMasters","FrontPage Freebirds"],["Runtime Terror","Static Startup"],["WeC#","Hypertext Assassins"],["AlgoMasters","WeC#"],["Static Startup","Hypertext Assassins"],["Runtime Terror","FrontPage Freebirds"],["AlgoMasters","Runtime Terror"],["Hypertext Assassins","FrontPage Freebirds"],["Static Startup","WeC#"],["AlgoMasters","Static Startup"],["FrontPage Freebirds","WeC#"],["Hypertext Assassins","Runtime Terror"],["AlgoMasters","Hypertext Assassins"],["WeC#","Runtime Terror"],["FrontPage Freebirds","Static Startup"]], "results": [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0] },
    "expectedOutput": "AlgoMasters"
  }`, () => {
    const { competitions, results } = {
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

    const expectedOutput = "AlgoMasters";
    const actualOutput = solution.tournamentWinner(competitions, results);
    
    expect(actualOutput).toBe(expectedOutput);
  });

  test(`Test Case 9: {
    "input": { "competitions": [["HTML","Java"],["Java","Python"],["Python","HTML"],["C#","Python"],["Java","C#"],["C#","HTML"],["SQL","C#"],["HTML","SQL"],["SQL","Python"],["SQL","Java"]], "results": [0, 0, 0, 0, 0, 0, 1, 0, 1, 1] },
    "expectedOutput": "SQL"
  }`, () => {
    const { competitions, results } = {
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
    const expectedOutput = "SQL";
    const actualOutput = solution.tournamentWinner(competitions, results);
    
    expect(actualOutput).toBe(expectedOutput);
  });

  test(`Test Case 10: {
    "input": { "competitions": [["A","B"]],"results": [0] },
    "expectedOutput": "B"
  }`, () => {
    const { competitions, results } = {
      competitions: [["A", "B"]],
      results: [0],
    };

    const expectedOutput = "B";
    const actualOutput = solution.tournamentWinner(competitions, results);
    
    expect(actualOutput).toBe(expectedOutput);
  });
};
