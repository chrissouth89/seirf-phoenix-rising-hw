// console.log("Hello World!")

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = [
      {
        name: "SprinkleSpray",
        damage: 5
      },
      {
        name: "SugarShock",
        damage: 10
      }
    ];
    this.catchPhrases = [
      `I\'m fresher than day old pizza`,
      `You can\'t count my calories`
    ];
  }
  randomNumGen(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  talkSass() {
    console.log(this.catchPhrases[this.randomNumGen(this.catchPhrases)]);
  }
  announceHealth() {
    console.log(
      `I have ${this.health} health left! Why would I announce this to you?!`
    );
  }
  randomWeapon() {
    return this.weapons[this.randomNumGen(this.weapons)];
  }
  fight(enemy) {
    let weapon = this.randomWeapon();
    enemy.health -= weapon.damage;
    console.log(`${weapon.name} does ${weapon.damage} damage to ${enemy.name}`);
  }
}
const dougie = new Hero(`Dougie the Donut`);

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = [
      { name: "Pepperoni Stars", damage: 5, name: "Cheese Grease", damage: 10 }
    ];
    this.catchPhrases = [
      `I\'m Youtube famous`,
      `I\'m more dangerous than an uncovered sewer`
    ];
  }
  ranNumGen(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  talkSmack() {
    console.log(this.catchPhrases[this.ranNumGen(this.catchPhrases)]);
  }
  announceHealth() {
    console.log(
      `I have ${this.health} health left! Why am I telling you this?!`
    );
  }
  randomWeapon() {
    return this.weapons[this.ranNumGen(this.weapons)];
  }
  fight(enemy) {
    let weapon = this.randomWeapon();
    enemy.health -= weapon.damage;
    console.log(`${weapon.name} does ${weapon.damage} damage to ${enemy.name}`);
  }
}

const rat = new Enemy(`Pizza Rat`);

// console.log(dougie.talkSass())
// console.log(rat.talkSmack())
// console.log(dougie.announceHealth())

console.log(rat.fight(dougie))
console.log(dougie.fight(rat));
console.log(dougie.announceHealth())
console.log(rat.announceHealth())