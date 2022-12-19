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
  test("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });
});

describe("walk", () => {
  test("increases fitness by 4", () => {
    const pet = new Pet("Fido");
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
  test("increases fitness by to a maximum of 10", () => {
    const pet = new Pet("Fido");
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  test("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
  test("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
});

describe("feed", () => {
  test("decreases hunger by 3", () => {
    const pet = new Pet("Fido");
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });
  test("decreased hunger by to a minimum of 0", () => {
    const pet = new Pet("Fido");
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
  test("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("checkup", () => {
  test("returns walk need statement if fitness is 3 or less", () => {
    const pet = new Pet("Fido");
    pet.fitness = 3;
    expect(pet.checkup()).toEqual("I need a walk");
  });
  test("returns hungry statement if hunger is 5 or more", () => {
    const pet = new Pet("Fido");
    pet.hunger = 5;
    expect(pet.checkup()).toEqual("I am hungry");
  });
  test("returns hungry and walk need statement if hunger is 5 or more and fitness is 3 or less", () => {
    const pet = new Pet("Fido");
    pet.hunger = 7;
    pet.fitness = 2;
    expect(pet.checkup()).toEqual("I am hungry AND I need a walk");
  });
  test("returns great statement if hunger is less than 5 and fitness is more than 3", () => {
    const pet = new Pet("Fido");
    pet.hunger = 2;
    pet.fitness = 5;
    expect(pet.checkup()).toEqual("I feel great!");
  });
  test("returns not alive string if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(pet.checkup()).toEqual("Your pet is no longer alive :(");
  });
});

describe("isAlive", () => {
  test("returns false if fitness is 0 or less", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    expect(pet.isAlive).toEqual(false);
  });
  test("returns false if age is 30 or more", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(pet.isAlive).toEqual(false);
  });
  test("returns false if hunger is 10", () => {
    const pet = new Pet("Fido");
    pet.hunger = 10;
    expect(pet.isAlive).toEqual(false);
  });
  test("returns true if hunger is less than 10, age is less than 30 and fitness is more than 0", () => {
    const pet = new Pet("Fido");
    pet.hunger = 9;
    pet.age = 29;
    pet.fitness = 1;
    pet.age = expect(pet.isAlive).toEqual(true);
  });
});

describe("adoptChild", () => {
  test("ensures pet has children property", () => {
    const pet = new Pet("Fido");
    expect(pet.children).toEqual([]);
  });
  test("adds the second pet as the first element in the original parent children array property", () => {
    const pet1 = new Pet("Fido");
    const pet2 = new Pet("Goldie");
    pet1.adoptChild(pet2);
    expect(pet1.children).toEqual([pet2]);
  });
  test("adds the second pet as the first element in the original parent children array property and third pet as second element in the array.", () => {
    const pet1 = new Pet("Fido");
    const pet2 = new Pet("Goldie");
    const pet3 = new Pet("Loof");
    pet1.adoptChild(pet2);
    pet1.adoptChild(pet3);
    expect(pet1.children).toEqual([pet2, pet3]);
  });
});

describe("haveBaby", () => {
  test("creates baby pet and adds to children array when function is called", () => {
    const pet1 = new Pet("Fido");
    const pet2 = new Pet("Goldie");
    pet1.haveBaby(pet2);
    expect(pet1.children).toEqual([pet2]);
  });
  test("adds baby pet to children array with existing elements", () => {
    const pet1 = new Pet("Fido");
    const pet2 = new Pet("Goldie");
    pet1.children = ["Billy"];
    pet1.haveBaby(pet2);
    expect(pet1.children).toEqual(["Billy", pet2]);
  });
});
