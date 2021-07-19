import { task632 } from "./task632";

test("task632", () => {
  expect(task632([1, 3, 4, 6, 8], 3, 3)).toEqual([1, 3, 3, 6, 8]);
  expect(task632([1, 2, 3, 4, 5], 2, 4)).toEqual([1, 4, 3, 4, 5]);
  expect(task632([1, 2, 3], 5, 2)).toEqual(NaN);
});
