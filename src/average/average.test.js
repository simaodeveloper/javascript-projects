import average from "./average";

describe("average", () => {
  test("should be a function", () => {
    expect(typeof average).toBe("function");
  });

  test("should return null given an undefined or empty array as parameter", () => {
    expect(average()).toBeNull();
    expect(average([])).toBeNull();
  });

  test("should return the average given an array of numbers", () => {
    expect(average([2, 2])).toEqual(2);
  });
});
