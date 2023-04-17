import { findMissingLetter } from "../../src/codewars/code-wars-one";

describe("findMissingLetter:", () => {
  it("deberia retornar 'P'", () => {
    expect(findMissingLetter(["O", "Q", "R", "S"])).toBe("P");
  });

  it("deberia retornar 'e'", () => {
    expect(findMissingLetter(["a", "b", "c", "d", "f"])).toBe("e");
  });
});
