const arrayOps = require("../utils/arrayOps");

describe("Array Operation", () => {
  test("it should be add new item", () => {
    const numbers = [1, 2];
    const output = [1, 2, 3];
    expect(arrayOps.pushItem(numbers, 3)).toEqual(output);
  });

  test("it should be remove one item", () => {
    const numbers = [1, 2];
    const output = 2;
    expect(arrayOps.popItem(numbers, 2)).toEqual(output);
  });

  test("it should be return spesific user", () => {
    const user = [
      { id: 1, name: "ryan" },
      { id: 2, name: "karl" },
    ];
    const output = { id: 2, name: "karl" };
    expect(arrayOps.findUser(user, "karl")).toEqual(output);
  });

  test("it should be return index of item", () => {
    const user = [
      { id: 1, name: "ryan" },
      { id: 2, name: "karl" },
    ];
    const output = 1;
    expect(arrayOps.findIndex(user, { id: 2, name: "karl" })).toEqual(output);
  });

  test("it should be return properties of object", () => {
    const user = { id: 1, name: "ryan" };
    const output = ["id", "name"];
    expect(arrayOps.findKeyProps({ id: 2, name: "karl" })).toEqual(output);
  });
});
