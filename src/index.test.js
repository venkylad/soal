let evenArr = require("./index.js");

test("checking even numbers in Array", () => {
  expect(evenArr([1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual([2, 4, 6, 8]);
});

test("checking parameters not to same as result", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(evenArr(arr)).not.toBe(arr);
});
