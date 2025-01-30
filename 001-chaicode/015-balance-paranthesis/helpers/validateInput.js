export const validateInput = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input should be an array");
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {
      throw new Error("Input array should only contain strings");
    }

    if (arr[i].length !== 1) {
      throw new Error("Input array should only contain single character strings");
    }

    if (arr[i] !== "(" && arr[i] !== ")") {
      throw new Error("Input array should only contain '(' or ')' characters");
    }
  }
}
