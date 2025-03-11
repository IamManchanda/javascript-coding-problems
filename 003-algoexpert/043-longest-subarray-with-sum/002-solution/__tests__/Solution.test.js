import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('longestSubarrayWithSum (sliding-window)', () => {
  sharedTests(() => new Solution(), false);
});
