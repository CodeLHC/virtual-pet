const MAXIMUM_FITNESS = 10;
const HUNGER_INCREASE = 5;
const FITNESS_DECREASE = 3;
const FITNESS_INCREASE = 4;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function () {
  this.age += 1;
  this.hunger += HUNGER_INCREASE;
  this.fitness -= FITNESS_DECREASE;
};

Pet.prototype.walk = function () {
  if (this.fitness + FITNESS_INCREASE <= MAXIMUM_FITNESS) {
    this.fitness += FITNESS_INCREASE;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

module.exports = Pet;
