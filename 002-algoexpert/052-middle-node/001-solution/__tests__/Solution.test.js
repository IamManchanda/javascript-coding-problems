import Solution, { LinkedList as SolutionLinkedList } from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('middleNode (counting-nodes)', () => {
  sharedTests(() => new Solution(), SolutionLinkedList, false);
});
