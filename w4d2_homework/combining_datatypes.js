const crayonBox = ["Blue", "Green", "Red", "Purple"];
// console.log(crayonBox[2])

const bottle = {
  cap: { material: "metal", color: "red", shape: "circle" }
};
// console.log(bottle.cap.color)

const receipt = [{ name: "cereal", price: "$3" }];
// console.log(receipt[0].name)

const apartmentBuilding = ["a12", "a13", "a14"];
console.log(apartmentBuilding);

const knit = () => {
  let object = { item: "scarf", size: "6ft" };
  return object.item;
};
console.log(knit());

const crayonSelector = () => {
  const crayonBox = ["Blue", "Green", "Red", "Purple"];
  return crayonBox[3];
};
console.log(crayonBox[3]);

const powerButton = () => {
  const options = () => {
    console.log("Select a Song");
  };
  console.log(options());
};
powerButton();

const vendMachine = {
  snacks: [
    { name: "Chips", price: "$1.50" },
    { name: "Fruit Snacks", price: "$1.00" },
    { name: "Snickers", price: "1.25" }
  ],
  dispense(snack) {
    console.log("Dispensing", vendMachine.snacks[snack]);
  }
};
vendMachine.dispense(2);

const add = (num, op) => {
  return op(num);
};

const addition = num => num + 4;
const subtraction = num => num - 22;
const multiply = num => num * 2;
const divide = num => num / 2;
// const calculate = (num1, num2, operates) => {

// }
console.log(add(96, addition));
console.log(add(123, subtraction));
console.log(add(51, multiply));
console.log(add(206, divide));

// const foo = () => {
//   console.log("foo here");
// };

// const bar = () => {
//   console.log("bar here");
// };

// foo();
// bar();



const foo = () => {
    console.log('hi');
}
foo();
// SyntaxError: Missing initializer in const declaration
// you are missing the = in between the foo and the () to make it a proper function.