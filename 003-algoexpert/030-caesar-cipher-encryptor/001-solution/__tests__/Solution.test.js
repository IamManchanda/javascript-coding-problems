import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('caesarCipherEncryptor (ascii-based-transformation)', () => {
  sharedTests(() => new Solution(), false);
});
