import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('generateDocument (brute-force)', () => {
  sharedTests(() => new Solution(), false);
});
