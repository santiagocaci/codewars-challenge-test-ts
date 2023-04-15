import { duplicateCount } from "../../src/codewars/code-wars-two";

describe("Counting Duplicates", () => {
  it("deberia retornar 0", () => {
    expect(duplicateCount("")).toBe(0);
  });

  it("deberia retornar 0", () => {
    expect(duplicateCount("abcde")).toBe(0);
  });

  it("deberia retornar 2", () => {
    expect(duplicateCount("aabbcde")).toBe(2);
  });

  it("deberia retornar 2", () => {
    expect(duplicateCount("aabBcde")).toBe(2);
  });

  it("deberia retornar 1", () => {
    expect(duplicateCount("Indivisibility")).toBe(1);
  });

  it("deberia retornar 2", () => {
    expect(duplicateCount("Indivisibilities")).toBe(2);
  });
});
