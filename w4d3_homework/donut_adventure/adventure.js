// console.log("Hello World!")

class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = { sprinkleSpray: 5, sugarShock: 10 }
        this.catchPhrases = [`I\'m fresher than day old pizza`, 
        `You can\'t count my calories`]
    } 
    randomNumGen() {
        return Math.floor(Math.random() * this.catchPhrases.length)
    }
    talkSass() {
        console.log(this.catchPhrases[this.randomNumGen(this.catchPhrases)]);
    }
    announceHealth() {
        console.log(`I have ${this.health} health left!`)
    }
    fight() {
        console.log(`I\'m ready to rumble!`)
    }
}
const dougie = new Hero(`Dougie the Donut`);

