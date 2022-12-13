const Pet = require("../src/pet");

describe("constructor", () => {
  test("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
  test("sets the name property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
});
