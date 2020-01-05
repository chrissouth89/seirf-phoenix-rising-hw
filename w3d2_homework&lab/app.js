// TOOLS
const tools = [
  { name: "Teeth", income: 1, cost: 0 },
  { name: "Scissors", income: 5, cost: 5 },
  { name: "Old-Timey Push Mower", income: 50, cost: 25 },
  { name: "Fancy-Battery Powered Mower", income: 100, cost: 250 },
  { name: "Team of Starving College Students", income: 200, cost: 500 }
];
// PLAYER
let user = {
  currentTool: tools.shift(),
  bankAccount: 0
};
const startGame = () => {
  alert("Cut the grass and buy new tools to start your landscaping business!");
  alert("You need a Team of Starving College Students and $1000 in the bank to win!")
};
const cutGrass = () => {
  user.bankAccount += user.currentTool.income;
  console.log("Grass cut");
};

const buyTool = () => {
  if (user.bankAccount >= tools[0].cost) {
    user.bankAccount -= tools[0].cost;
    user.currentTool = tools.shift();
    console.log("You bought " + user.currentTool.name);
  } else {
    console.log("You do not have enough money for " + tools[0].name);
  }
};

const checkForWin = () => {
  if (
    user.bankAccount >= 1000 &&
    user.currentTool.name === "Team of Starving College Students"
  ) {
    alert("You win, you have " + user.bankAccount + " and " + user.currentTool.name);
  } else {
    if (
      user.bankAccount <= 1000 ||
      user.currentTool.name != "Team of Starving College Students"
    )
      alert(
        "You still need more money! " + "You only have $" + user.bankAccount
      );
  }
};

const resetGame = () => {
  var refresh = confirm("Are you sure you want to restart?");
  if (refresh) {
    location.reload(true);
  }
};

startGame();
