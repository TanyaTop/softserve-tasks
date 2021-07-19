export const task632 = (arr, k, p) => {
  if (arr.length < k) {
    return NaN;
  }
  arr.splice(k - 1, 1, p);
  return arr;
};
