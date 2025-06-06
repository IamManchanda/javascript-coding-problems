class Solution {
  debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }
}

export default Solution;
