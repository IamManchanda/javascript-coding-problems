import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('getNthFib (dp-iteration)', () => {
  sharedTests(() => new Solution(), true);
});
