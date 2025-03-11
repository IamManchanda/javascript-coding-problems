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
    "input": { "linkedList": "1 -> 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6" },
    "expectedOutput": "1 -> 3 -> 4 -> 5 -> 6"
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "1-2", value: 1 },
          { id: "1-2", next: "1-3", value: 1 },
          { id: "1-3", next: "2", value: 1 },
          { id: "2", next: "3", value: 3 },
          { id: "3", next: "3-2", value: 4 },
          { id: "3-2", next: "3-3", value: 4 },
          { id: "3-3", next: "4", value: 4 },
          { id: "4", next: "5", value: 5 },
          { id: "5", next: "5-2", value: 6 },
          { id: "5-2", next: null, value: 6 },
        ],
      },
    };
    expectedOutput = {
      head: "1",
      nodes: [
        { id: "1", next: "2", value: 1 },
        { id: "2", next: "3", value: 3 },
        { id: "3", next: "4", value: 4 },
        { id: "4", next: "5", value: 5 },
        { id: "5", next: null, value: 6 },
      ],
    };
  });

  test(`Test Case 2: {
    "input": { "linkedList": "1 -> 1 -> 1 -> 1 -> 1 -> 4 -> 4 -> 5 -> 6 -> 6" },
    "expectedOutput": "1 -> 4 -> 5 -> 6"
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "1-2", value: 1 },
          { id: "1-2", next: "1-3", value: 1 },
          { id: "1-3", next: "1-4", value: 1 },
          { id: "1-4", next: "1-5", value: 1 },
          { id: "1-5", next: "4", value: 1 },
          { id: "4", next: "4-2", value: 4 },
          { id: "4-2", next: "5", value: 4 },
          { id: "5", next: "6", value: 5 },
          { id: "6", next: "6-2", value: 6 },
          { id: "6-2", next: null, value: 6 },
        ],
      },
    };
    expectedOutput = {
      head: "1",
      nodes: [
        { id: "1", next: "4", value: 1 },
        { id: "4", next: "5", value: 4 },
        { id: "5", next: "6", value: 5 },
        { id: "6", next: null, value: 6 },
      ],
    };
  });

  test(`Test Case 3: {
    "input": { "linkedList": "1 -> 1 -> 1 -> 1 -> 1 -> 1 -> 1" },
    "expectedOutput": "1"
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "1-2", value: 1 },
          { id: "1-2", next: "1-3", value: 1 },
          { id: "1-3", next: "1-4", value: 1 },
          { id: "1-4", next: "1-5", value: 1 },
          { id: "1-5", next: "1-6", value: 1 },
          { id: "1-6", next: "1-7", value: 1 },
          { id: "1-7", next: null, value: 1 },
        ],
      },
    };
    expectedOutput = {
      head: "1",
      nodes: [{ id: "1", next: null, value: 1 }],
    };
  });

  test(`Test Case 4: {
    "input": { "linkedList": "1 -> 9 -> 11 -> 15 -> 15 -> 16 -> 17" },
    "expectedOutput": "1 -> 9 -> 11 -> 15 -> 16 -> 17"
  }`, () => {
    input = {
      linkedList: {
        head: "1",
        nodes: [
          { id: "1", next: "9", value: 1 },
          { id: "9", next: "11", value: 9 },
          { id: "11", next: "15", value: 11 },
          { id: "15", next: "15-2", value: 15 },
          { id: "15-2", next: "16", value: 15 },
          { id: "16", next: "17", value: 16 },
          { id: "17", next: null, value: 17 },
        ],
      },
    };
    expectedOutput = {
      head: "1",
      nodes: [
        { id: "1", next: "9", value: 1 },
        { id: "9", next: "11", value: 9 },
        { id: "11", next: "15", value: 11 },
        { id: "15", next: "16", value: 15 },
        { id: "16", next: "17", value: 16 },
        { id: "17", next: null, value: 17 },
      ],
    };
  });

  test(`Test Case 5: {
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

  test(`Test Case 6: {
    "input": { "linkedList": "-5 -> -1 -> -1 -> -1 -> 5 -> 5 -> 5 -> 8 -> 8 -> 9 -> 10 -> 11 -> 11" },
    "expectedOutput": "-5 -> -1 -> 5 -> 8 -> 9 -> 10 -> 11"
  }`, () => {
    input = {
      linkedList: {
        head: "-5",
        nodes: [
          { id: "-5", next: "-1", value: -5 },
          { id: "-1", next: "-1-2", value: -1 },
          { id: "-1-2", next: "-1-3", value: -1 },
          { id: "-1-3", next: "5", value: -1 },
          { id: "5", next: "5-2", value: 5 },
          { id: "5-2", next: "5-3", value: 5 },
          { id: "5-3", next: "8", value: 5 },
          { id: "8", next: "8-2", value: 8 },
          { id: "8-2", next: "9", value: 8 },
          { id: "9", next: "10", value: 9 },
          { id: "10", next: "11", value: 10 },
          { id: "11", next: "11-2", value: 11 },
          { id: "11-2", next: null, value: 11 },
        ],
      },
    };
    expectedOutput = {
      head: "-5",
      nodes: [
        { id: "-5", next: "-1", value: -5 },
        { id: "-1", next: "5", value: -1 },
        { id: "5", next: "8", value: 5 },
        { id: "8", next: "9", value: 8 },
        { id: "9", next: "10", value: 9 },
        { id: "10", next: "11", value: 10 },
        { id: "11", next: null, value: 11 },
      ],
    };
  });

  test(`Test Case 7: {
    "input": { "linkedList": "1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 12" },
    "expectedOutput": "1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12"
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
          { id: "10", next: "11", value: 10 },
          { id: "11", next: "12", value: 11 },
          { id: "12", next: "12-2", value: 12 },
          { id: "12-2", next: null, value: 12 },
        ],
      },
    };
    expectedOutput = {
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
        { id: "10", next: "11", value: 10 },
        { id: "11", next: "12", value: 11 },
        { id: "12", next: null, value: 12 },
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

    const actualOutputLinkedList =
      solution.removeDuplicatesFromLinkedList(inputLinkedList);
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
