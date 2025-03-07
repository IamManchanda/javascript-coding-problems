class Solution {
  throttle(fn, delay) {
    let lastCall = 0;

    return function (...args) {
      const now = Date.now();
      if (now - lastCall < delay) return;

      lastCall = now;
      return fn(...args);
    };
  }
}

export default Solution;
