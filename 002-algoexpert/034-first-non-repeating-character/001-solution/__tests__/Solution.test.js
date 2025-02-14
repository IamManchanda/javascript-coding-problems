import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('firstNonRepeatingCharacter (brute-force)', () => {
  sharedTests(() => new Solution(), false);
});
