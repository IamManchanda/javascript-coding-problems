import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('longestSubstringWithoutDuplication (sliding-window)', () => {
  sharedTests(() => new Solution(), false);
});
