import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('caesarCipherEncryptor (alphabet-index-based-transformation)', () => {
  sharedTests(() => new Solution(), false);
});
