export const validateInput = (target, coins) => {
  if (typeof target !== 'number' || !Array.isArray(coins)) {
    throw new Error('Invalid input');
  }

  if (target < 0) {
    throw new Error('Negative numbers are not allowed');
  }

  if (coins.some(coin => typeof coin !== 'number' || coin < 0)) {
    throw new Error('Invalid coins');
  }
}
