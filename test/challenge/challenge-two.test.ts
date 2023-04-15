import { countHours } from "../../src/challenge/challenge-two";

describe("Challenge two: countHours", () => {
  test("deberia ser una funcion", () => {
    expectTypeOf(countHours).toBeFunction();
  });

  test("deberia recibir un entero como anio", () => {
    expectTypeOf(countHours).parameter(0).toBeNumber();
  });

  test("deberia de recibir un arreglo de strings como segundo parametro", () => {
    expectTypeOf(countHours).parameter(1).toBeArray();
    expectTypeOf(countHours).parameter(1).items.toEqualTypeOf<string>();
  });

  test("deberia retornar el numero de horas", () => {
    expectTypeOf(countHours).returns.toBeNumber();
  });

  test("deberia retornar 2 si holydays es ['03/25']", () => {
    expect(countHours(2023, ["03/25"])).toBe(2);
  });

  test("deberia retornar 4", () => {
    expect(countHours(2022, ["01/06", "04/01", "12/25"])).toBe(4);
  });

  test("deberia retornar 0", () => {
    expect(countHours(2022, ["12/04", "11/14"])).toBe(0);
    // expect(countHours(2023, ["04/09", "04/08"])).toBe(0);
  });
});
