import { totalPageFunc } from "../common/utils/pagination";

describe("Total paginas", () => {
  test("Elementos justos", () => expect(totalPageFunc(16, 8)).toBe(2));
  test("Elementos no justos", () => expect(totalPageFunc(17, 8)).toBe(3));
});
