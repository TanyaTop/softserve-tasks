import { task78a } from "./task78a";

test("task78a", () => {
  expect(task78a(2, 2)).toBe(4);
  expect(task78a(6, 4)).toBe(1296);
  expect(task78a(8, 5)).toBe(32_768);
});
