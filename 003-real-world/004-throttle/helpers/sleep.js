export const sleep = async (delay, fn, ...args) => {
  await new Promise(resolve => setTimeout(resolve, delay));
  return fn(...args);
};