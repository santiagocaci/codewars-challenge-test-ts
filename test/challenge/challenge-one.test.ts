import { wrapping } from "../../src/challenge/challenge-one";

describe("Challenge one: Wrapping", () => {
  test("deberia ser una funcion", () => {
    expectTypeOf(wrapping).toBeFunction();
  });

  test("deberia recibir un solo parametro", () => {
    expectTypeOf(wrapping).parameter(0).toBeArray();
    expectTypeOf(wrapping).parameter(0).items.toEqualTypeOf<string>();
  });

  test("deberia retornar un array de strings", () => {
    expectTypeOf(wrapping).returns.toBeArray();
    expectTypeOf(wrapping).returns.not.toBeVoid();
  });

  test("deberia retornar [*****\n*cat*\n*****]", () => {
    expect(wrapping(["cat"])).toEqual(["*****\n*cat*\n*****"]);
  });

  test("deberia retornar ['*****\n*cat*\n*****','******\n*game*\n******','*******\n*socks*\n*******'] ", () => {
    expect(wrapping(["cat", "game", "socks"])).toEqual([
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ]);
  });
});
