import Solution, { LinkedList as SolutionLinkedList } from "./Solution.js";
import { createLinkedList } from "../helpers/linkedList.js";

const LinkedList = createLinkedList(SolutionLinkedList);
const solution = new Solution();
const input = {
  linkedList: {
    // 1 -> 2 -> 3
    head: "1",
    nodes: [
      { id: "1", next: "2", value: 1 },
      { id: "2", next: "3", value: 2 },
      { id: "3", next: null, value: 3 },
    ],
  },
};

const inputLinkedList = new LinkedList(input.linkedList.nodes[0].value).addMany(
  input.linkedList.nodes.slice(1).map((node) => node.value),
);
const resultLinkedList = solution.middleNode(inputLinkedList);
const resultNodesInArray = resultLinkedList.getNodesInArray();
const result = resultNodesInArray.join(" -> ");
console.log(result); // 2 -> 3
