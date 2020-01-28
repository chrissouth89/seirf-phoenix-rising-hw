//make the player ship
let rebelShip = {
  name: "X-Wing",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  //add methods for battle here
  attack(enemyShip) {
    console.log("Attacking Empire fighters!");
    // check for hit or miss
    if (Math.random() < this.accuracy) {
      console.log(`You hit ${enemyShip.name}`);
      enemyShip.hull -= this.firepower;
    } else {
      console.log("Miss");
    }
    console.log(enemyShip);
  }
};
//make the empire ship class
class Empire {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  // attack(rebelShip) {
  //   console.log("Empire TIE fighter attacking you!");
  //   //check for hit or miss
  //   if (Math.random() < this.accuracy) {
  //     console.log(`TIE Fighter hit: ${rebelShip.name}`);
  //     rebelShip.hull -= this.firepower;
  //     console.log(`Rebel ship hull remaining: ${rebelShip.hull}`);
  //   } else {
  //     console.log("TIE Fighter missed!");
  //   }
  // }
}
// create name array to pull from
let names = [
  "TIE One",
  "TIE Two",
  "TIE Three",
  "TIE Four",
  "TIE Five",
  "TIE Six",
  "TIE Interceptor"
];

const tieArray = [];
for (let i = 0; i < 6; i++) {
  let name = names.shift();
  let hull = Math.floor(Math.random() * 4 + 3);
  let firepower = Math.floor(Math.random() * 3 + 2);
  let accuracy = Math.floor(Math.random() * 3 + 6) * 0.1;
  tieArray.push(new Empire(name, hull, firepower, accuracy));
}

let enemyShip = tieArray;
// console.log(tieArray);
// Define game object
let gameState = {
  rebelIsAlive: () => {
    //return true if player is alive
    return rebelShip.hull > 0;
  },
  checkWin: () => {
    //return true if player is alive and all enemy ships are destroyed
  }
};
// CheckWin Logic

//create game object
console.log("Generating enemy ships");

//////////////
while (gameState.rebelIsAlive()) {
  // Turn by turn logic
  // Player ship attacks:
  rebelShip.attack(enemyShip[0]); // this is set to a single element in the array because I had trouble finding a way to use .shift in this way.
  // Check if enemy ship is destroyed
  if (enemyShip.hull <= 0) {
    //if enemy ship is destroyed:
    console.log("TIE fighter destroyed!");
    //ask user if they want to continue attacking or retreat:
    let response = prompt("Ship Destroyed, attack or retreat?");
    if (response === "retreat") {
      alert("You retreated, game over");
      break;
    } else if (response === "attack") {
      // keep looping gameplay continues
      console.log("Continuing gameplay");
    }
  } else {
    // enemy ship not destroyed, enemy takes turn
    // Enemy ship attacks:
    // enemyShip.attack(rebelShip); (I have no idea why this line isn't working)
  }
}
//player retreated or lost all their hp
console.log("Game Over");
//end game logic
