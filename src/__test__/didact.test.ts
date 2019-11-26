import Didact from "../didact";

describe("didact", () => {
  describe("createElement", () => {
    it("with type only", () => {
      const expected = {
        type: "div",
        props: { children: [] }
      };
      expect(Didact.createElement("div")).toStrictEqual(expected);
    });

    it("type and one child", () => {
      const a = { foo: "bar" };
      const expected = {
        type: "div",
        props: { children: [a] }
      };
      expect(Didact.createElement("div", null, a)).toStrictEqual(expected);
    });

    it("type and children", () => {
      const a = { foo: "bar" };
      const b = { baz: 100 };
      const expected = {
        type: "div",
        props: { children: [a, b] }
      };
      expect(Didact.createElement("div", null, a, b)).toStrictEqual(expected);
    });
  });
});
