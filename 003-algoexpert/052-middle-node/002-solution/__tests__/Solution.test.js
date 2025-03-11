import Solution, { LinkedList as SolutionLinkedList } from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('middleNode (floyds-tortoise-and-hare-algorithm)', () => {
  sharedTests(() => new Solution(), SolutionLinkedList, false);
});
