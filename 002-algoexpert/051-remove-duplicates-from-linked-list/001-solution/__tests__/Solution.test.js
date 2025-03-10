import Solution, { LinkedList as SolutionLinkedList } from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('removeDuplicatesFromLinkedList (iterative)', () => {
  sharedTests(() => new Solution(), SolutionLinkedList, false);
});
