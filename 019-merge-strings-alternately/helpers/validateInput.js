export const validateInput = (word1, word2) => {
  if (typeof word1 !== 'string' || typeof word2 !== 'string') {
    throw new Error('Invalid input');
  }

  if (word1.length === 0 || word2.length === 0) {
    throw new Error('Empty strings are not allowed');
  }

  if (!/^[a-z]*$/.test(word1) || !/^[a-z]*$/.test(word2)) {
    throw new Error('Invalid characters');
  }
}
