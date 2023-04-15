import { distributeGifts } from "../../src/challenge/challenge-three";

describe("Challenge three: distributeGifts", () => {
  test("deberia de ser una funcion", () => {
    expectTypeOf(distributeGifts).toBeFunction();
  });

  test("el primer parametro deberia ser un arreglo de string", () => {
    expectTypeOf(distributeGifts).parameter(0).toBeArray();
    expectTypeOf(distributeGifts).parameter(0).items.toBeString();
  });

  test("el segundo parametro deberia ser un arreglo de string", () => {
    expectTypeOf(distributeGifts).parameter(1).toBeArray();
    expectTypeOf(distributeGifts).parameter(1).items.toBeString();
  });

  test("deberia retornar un number", () => {
    expectTypeOf(distributeGifts).returns.toBeNumber();
  });

  test("deberia retornar 2", () => {
    expect(
      distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])
    ).toBe(2);
  });

  test("deberia retornar 5", () => {
    expect(
      distributeGifts(
        ["game", "videoconsole", "computer"],
        [
          "midudev",
          "pheralb",
          "codingwithdani",
          "carlosble",
          "blasco",
          "facundocapua",
          "madeval",
          "memxd",
        ]
      )
    ).toBe(5);
  });
});
