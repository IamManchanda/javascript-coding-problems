export const validateInput = (candies, extraCandies) => {
  if (!Array.isArray(candies) || typeof extraCandies !== "number") {
    throw new Error("Invalid input");
  }

  if (candies.length < 2 || candies.length > 100) {
    throw new Error("Invalid input");
  }

  if (candies.some((candy) => candy < 1 || candy > 100)) {
    throw new Error("Invalid input");
  }

  if (extraCandies < 1 || extraCandies > 50) {
    throw new Error("Invalid input");
  }
};
