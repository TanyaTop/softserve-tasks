export const task86v = (num) => {
  if (!Number.isInteger(num)) {
    return NaN;
  }

  const arr = String(num)
    .split("")
    .map((num) => {
      return Number(num);
    });
  return arr[0];
};
