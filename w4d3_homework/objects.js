class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }

  wheelRun() {
    console.log("Squeek Squeek");
  }

  eatFood() {
    console.log("Nibble Nibble");
  }

  getPrice() {
    console.log(this.price)
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet() {
    console.log("Hello " + getName());
  }

  eat() {
    this.weight += 10;
    this.mood++;
  }

  exercise() {
    this.weight -= 5;
  }

  ageUp() {
    this.age++;
    this.height += 4;
    this.weight += 5;
    this.mood -= 1;
    this.bankAccount += 10;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

const jimothy = new Person("Jimmy");

for (let i = 0; i < 5; i += 1) {
  jimothy.ageUp();
}
jimothy.getAge();

for (let i = 0; i < 5; i += 1) {
  jimothy.eat();
}
jimothy.getWeight();

for (let i = 0; i < 5; i += 1) {
  jimothy.exercise();
}
jimothy.getWeight();

for (let i = 5; i < 9; i += 1) {
  jimothy.ageUp();
}
jimothy.ageUp();

const gus = new Hamster("Gus");

gus.owner = "Jimmy";
console.log(gus);

jimothy.buyHamster(gus);
console.log("Jimmy's hamsters: ", jimothy.hamsters);

for (let i = 9; i < 15; i += 1) {
  jimothy.ageUp();
}
jimothy.getAge();

for (let i = 0; i < 2; i += 1) {
  jimothy.eat();
}
jimothy.getWeight();

for (let i = 0; i < 2; i += 1) {
  jimothy.exercise();
}
jimothy.getWeight();

console.log(jimothy);