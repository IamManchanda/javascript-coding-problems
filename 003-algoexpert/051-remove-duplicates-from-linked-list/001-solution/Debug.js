import Solution, { LinkedList as SolutionLinkedList } from "./Solution.js";
import { createLinkedList } from "../helpers/linkedList.js";

const LinkedList = createLinkedList(SolutionLinkedList);
const solution = new Solution();
const input = {
  linkedList: {
    // 1 -> 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6
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

const inputLinkedList = new LinkedList(input.linkedList.nodes[0].value).addMany(
  input.linkedList.nodes.slice(1).map((node) => node.value),
);
const resultLinkedList =
  solution.removeDuplicatesFromLinkedList(inputLinkedList);
const resultNodesInArray = resultLinkedList.getNodesInArray();
const result = resultNodesInArray.join(" -> ");
console.log(result); // 1 -> 3 -> 4 -> 5 -> 6
