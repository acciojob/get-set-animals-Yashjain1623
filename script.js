//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log the sound the animal makes
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  // Method to log "woof"
  bark() {
    console.log("woof");
  }
}


class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  // Method to log "purr"
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
