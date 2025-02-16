import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('groupAnagrams (hash-table-object)', () => {
  sharedTests(() => new Solution(), false);
});
