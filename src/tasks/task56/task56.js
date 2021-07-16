export function task56(n) {
  const left = n ** 2;
  const right = n
    .toString()
    .split("")
    .reduce((sum, x) => sum + +x, 0);
  return left === right ** 3;
}
