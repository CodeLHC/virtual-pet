const MAXIMUM_FITNESS = 10;
const STARTING_HUNGER = 0;
const HUNGER_INCREASE = 5;
const HUNGER_DECREASE = 3;
const FITNESS_DECREASE = 3;
const FITNESS_INCREASE = 4;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    const isFit = this.fitness > 0;
    const isYoung = this.age < 30;
    const isNotHungry = this.hunger < 10;
    return isYoung && isNotHungry && isFit;
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.age += 1;
  this.hunger += HUNGER_INCREASE;
  this.fitness -= FITNESS_DECREASE;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  const incrementedFitness = this.fitness + FITNESS_INCREASE;
  if (incrementedFitness <= MAXIMUM_FITNESS) {
    this.fitness = incrementedFitness;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  const decrementedHunger = this.hunger - HUNGER_DECREASE;
  if (decrementedHunger >= STARTING_HUNGER) {
    this.hunger = decrementedHunger;
  } else {
    this.hunger = STARTING_HUNGER;
  }
};

Pet.prototype.checkup = function () {
  if (!this.isAlive) {
    return "Your pet is no longer alive :(";
  }
  const isHungry = this.hunger >= 5;
  const isUnfit = this.fitness <= 3;

  if (isHungry && isUnfit) {
    return "I am hungry AND I need a walk";
  }
  if (isUnfit) {
    return "I need a walk";
  }
  if (isHungry) {
    return "I am hungry";
  }
  return "I feel great!";
};

Pet.prototype.adoptChild = function (child) {
  this.children.push(child);
};

module.exports = Pet;
