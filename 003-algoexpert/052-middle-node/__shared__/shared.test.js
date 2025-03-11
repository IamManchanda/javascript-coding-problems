import { createLinkedList } from "../helpers/linkedList";

export const sharedTests = (getSolution, SolutionLinkedList) => {
  const LinkedList = createLinkedList(SolutionLinkedList);
  let solution, input, expectedOutput;

  beforeEach(() => {
    solution = getSolution();
    input = {};
    expectedOutput = undefined;
  });

  test(`Test Case 1: {
    "input": { "linkedList": "1" },
    "expectedOutput": "1"
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [{ id: "1", next: null, value: 1 }],
      },
    };
    expectedOutput = {
      head: "1",
      nodes: [{ id: "1", next: null, value: 1 }],
    };
  });

  test(`Test Case 2: {
    "input": { "linkedList": "1 -> 2 -> 3" },
    "expectedOutput": "2 -> 3",
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "2", value: 1 },
          { id: "2", next: "3", value: 2 },
          { id: "3", next: null, value: 3 },
        ],
      },
    };
    expectedOutput = {
      head: "2",
      nodes: [
        { id: "2", next: "3", value: 2 },
        { id: "3", next: null, value: 3 },
      ],
    };
  });

  test(`Test Case 3: {
    "input": { "linkedList": "5 -> 7 -> 9" },
    "expectedOutput": "7 -> 9",
  }`, () => {
    input = {
      linkedList: {
        head: "5",
        nodes: [
          { id: "5", next: "7", value: 5 },
          { id: "7", next: "9", value: 7 },
          { id: "9", next: null, value: 9 },
        ],
      },
    };
    expectedOutput = {
      head: "7",
      nodes: [
        { id: "7", next: "9", value: 7 },
        { id: "9", next: null, value: 9 },
      ],
    };
  });

  test(`Test Case 4: {
    "input": { "linkedList": "1 -> 2 -> 3 -> 4" },
    "expectedOutput": "3 -> 4",
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "2", value: 1 },
          { id: "2", next: "3", value: 2 },
          { id: "3", next: "4", value: 3 },
          { id: "4", next: null, value: 4 },
        ],
      },
    };
    expectedOutput = {
      head: "3",
      nodes: [
        { id: "3", next: "4", value: 3 },
        { id: "4", next: null, value: 4 },
      ],
    };
  });

  test(`Test Case 5: {
    "input": { "linkedList": "1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9" },
    "expectedOutput": "5 -> 6 -> 7 -> 8 -> 9",
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "2", value: 1 },
          { id: "2", next: "3", value: 2 },
          { id: "3", next: "4", value: 3 },
          { id: "4", next: "5", value: 4 },
          { id: "5", next: "6", value: 5 },
          { id: "6", next: "7", value: 6 },
          { id: "7", next: "8", value: 7 },
          { id: "8", next: "9", value: 8 },
          { id: "9", next: null, value: 9 },
        ],
      },
    };
    expectedOutput = {
      head: "5",
      nodes: [
        { id: "5", next: "6", value: 5 },
        { id: "6", next: "7", value: 6 },
        { id: "7", next: "8", value: 7 },
        { id: "8", next: "9", value: 8 },
        { id: "9", next: null, value: 9 },
      ],
    };
  });

  test(`Test Case 6: {
    "input": { "linkedList": "1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10" },
    "expectedOutput": "6 -> 7 -> 8 -> 9 -> 10",
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "2", value: 1 },
          { id: "2", next: "3", value: 2 },
          { id: "3", next: "4", value: 3 },
          { id: "4", next: "5", value: 4 },
          { id: "5", next: "6", value: 5 },
          { id: "6", next: "7", value: 6 },
          { id: "7", next: "8", value: 7 },
          { id: "8", next: "9", value: 8 },
          { id: "9", next: "10", value: 9 },
          { id: "10", next: null, value: 10 },
        ],
      },
    };
    expectedOutput = {
      head: "6",
      nodes: [
        { id: "6", next: "7", value: 6 },
        { id: "7", next: "8", value: 7 },
        { id: "8", next: "9", value: 8 },
        { id: "9", next: "10", value: 9 },
        { id: "10", next: null, value: 10 },
      ],
    };
  });

  test(`Test Case 7: {
    "input": { "linkedList": "1 -> 3 -> 4 -> 5 -> 9 -> 10" },
    "expectedOutput": "5 -> 9 -> 10",
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "3", value: 1 },
          { id: "3", next: "4", value: 3 },
          { id: "4", next: "5", value: 4 },
          { id: "5", next: "9", value: 5 },
          { id: "9", next: "10", value: 9 },
          { id: "10", next: null, value: 10 },
        ],
      },
    };
    expectedOutput = {
      head: "5",
      nodes: [
        { id: "5", next: "9", value: 5 },
        { id: "9", next: "10", value: 9 },
        { id: "10", next: null, value: 10 },
      ],
    };
  });

  test(`Test Case 8: {
    "input": { "linkedList": "1 -> 1 -> 1 -> 3 -> 4 -> 5 -> 5 -> 5 -> 5 -> 10" },
    "expectedOutput": "5 -> 5 -> 5 -> 5 -> 10",
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "1-2", value: 1 },
          { id: "1-2", next: "1-3", value: 1 },
          { id: "1-3", next: "3", value: 1 },
          { id: "3", next: "4", value: 3 },
          { id: "4", next: "5", value: 4 },
          { id: "5", next: "5-2", value: 5 },
          { id: "5-2", next: "5-3", value: 5 },
          { id: "5-3", next: "5-4", value: 5 },
          { id: "5-4", next: "10", value: 5 },
          { id: "10", next: null, value: 10 },
        ],
      },
    };
    expectedOutput = {
      head: "5",
      nodes: [
        { id: "5", next: "5-2", value: 5 },
        { id: "5-2", next: "5-3", value: 5 },
        { id: "5-3", next: "5-4", value: 5 },
        { id: "5-4", next: "10", value: 5 },
        { id: "10", next: null, value: 10 },
      ],
    };
  });

  test(`Test Case 9: {
    "input": { "linkedList": "1 -> 2 -> 1 -> 4 -> 5 -> 5 -> 7 -> 10" },
    "expectedOutput": "5 -> 5 -> 7 -> 10",
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "2", value: 1 },
          { id: "2", next: "1-2", value: 2 },
          { id: "1-2", next: "4", value: 1 },
          { id: "4", next: "5", value: 4 },
          { id: "5", next: "5-2", value: 5 },
          { id: "5-2", next: "7", value: 5 },
          { id: "7", next: "10", value: 7 },
          { id: "10", next: null, value: 10 },
        ],
      },
    };
    expectedOutput = {
      head: "5",
      nodes: [
        { id: "5", next: "5-2", value: 5 },
        { id: "5-2", next: "7", value: 5 },
        { id: "7", next: "10", value: 7 },
        { id: "10", next: null, value: 10 },
      ],
    };
  });

  test(`Test Case 10: {
    "input": { "linkedList": "1 -> 1 -> 1 -> 1 -> 2 -> 3 -> 4 -> 5 -> 5 -> 7 -> 10" },
    "expectedOutput": "3 -> 4 -> 5 -> 5 -> 7 -> 10",
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "1-2", value: 1 },
          { id: "1-2", next: "1-3", value: 1 },
          { id: "1-3", next: "1-4", value: 1 },
          { id: "1-4", next: "2", value: 1 },
          { id: "2", next: "3", value: 2 },
          { id: "3", next: "4", value: 3 },
          { id: "4", next: "5", value: 4 },
          { id: "5", next: "5-2", value: 5 },
          { id: "5-2", next: "7", value: 5 },
          { id: "7", next: "10", value: 7 },
          { id: "10", next: null, value: 10 },
        ],
      },
    };
    expectedOutput = {
      head: "3",
      nodes: [
        { id: "3", next: "4", value: 3 },
        { id: "4", next: "5", value: 4 },
        { id: "5", next: "5-2", value: 5 },
        { id: "5-2", next: "7", value: 5 },
        { id: "7", next: "10", value: 7 },
        { id: "10", next: null, value: 10 },
      ],
    };
  });

  afterEach(() => {
    // First, let's make sure that the head node is correctly set
    expect(input.linkedList.nodes[0].id).toEqual(input.linkedList.head);
    expect(expectedOutput.nodes[0].id).toEqual(expectedOutput.head);

    // Now, let's check whether the solution works as expected

    const inputLinkedList = new LinkedList(
      input.linkedList.nodes[0].value,
    ).addMany(input.linkedList.nodes.slice(1).map((node) => node.value));

    const actualOutputLinkedList = solution.middleNode(inputLinkedList);
    const actualOutputLinkedListString = actualOutputLinkedList
      .getNodesInArray()
      .join(" -> ");

    const expectedOutputLinkedList = new LinkedList(
      expectedOutput.nodes[0].value,
    ).addMany(expectedOutput.nodes.slice(1).map((node) => node.value));
    const expectedOutputLinkedListString = expectedOutputLinkedList
      .getNodesInArray()
      .join(" -> ");

    expect(actualOutputLinkedList).toEqual(expectedOutputLinkedList);
    expect(actualOutputLinkedListString).toEqual(
      expectedOutputLinkedListString,
    );
  });
};
