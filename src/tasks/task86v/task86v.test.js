import { task86v } from "./task86v";

test("task86v", () => {
  expect(task86v(67)).toBe(6);
  expect(task86v(897)).toBe(8);
  expect(task86v("54647")).toBe(NaN);
});
