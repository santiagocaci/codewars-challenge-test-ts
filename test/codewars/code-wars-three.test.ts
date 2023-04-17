import { findNb } from "../../src/codewars/code-wars-three";

describe("Build a pile of Cubes:", () => {
  it("test", () => {
    expect(findNb(4183059834009)).toBe(2022);
  });

  it("test2", () => {
    expect(findNb(24723578342962)).toBe(-1);
  });

  it("test3", () => {
    expect(findNb(135440716410000)).toBe(4824);
  });

  it("test4", () => {
    expect(findNb(40539911473216)).toBe(3568);
  });
});
