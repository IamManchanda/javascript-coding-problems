import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('fibonacci (dp-iteration)', () => {
  sharedTests(() => new Solution(), true);
});
