const Pet = require("../src/pet");

describe("constructor", () => {
  test("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
  test("sets the name property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
  test("has an initial age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });
  test("has an initial hunger of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.hunger).toEqual(0);
  });
  test("has an initial fitness of 10", () => {
    const pet = new Pet("Fido");
    expect(pet.fitness).toEqual(10);
  });
});

describe("growUp", () => {
  test("increments the age by one", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
  test("increases the hunger property by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
  test("decreases the fitness property by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});
