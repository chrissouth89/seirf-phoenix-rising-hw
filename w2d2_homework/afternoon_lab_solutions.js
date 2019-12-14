let quotes = ["No, I am your father", "I find your lack of faith disturbing", "Help me, Obi-Wan Kenobi. You're my only hope."]

console.log(quotes)

let randomThings = [1, 10, "Hello", true]

randomThings[0]

randomThings[2] = "World"

console.log(randomThings);

const ourClass = ["Outrun", "Zoom", "Github", "Slack"]

ourClass[2]

ourClass[2] = "Octocat";

ourClass.push = ("Cloud City")

console.log(ourClass)

const myArray = [5, 10, 500, 20];

myArray.push("Egon")
console.log(myArray)
myArray.pop(4)
console.log(myArray)
myArray.unshift("Bob Marley")
console.log(myArray)
myArray.shift();
console.log(myArray)
myArray.reverse(myArray)
console.log(myArray)

if (myArray[0] < 100) {
    console.log("Little Number");
} else if (myArray[0] > 100) {
    console.log("Big Number");
}

if (myArray[3] < 5) {
    console.log("Little Number");
} else if (myArray[3] > 10) {
    console.log("Big Number");
} else {
    console.log("Monkey");
}

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

  kristynsCloset.shift();

  kristynShoe = "Left shoe";

  kristynsCloset.splice(5, 0, "raybans");

  console.log(kristynsCloset);

  kristynsCloset[5] = "stained knit hat";

  thomsCloset[0][0]
  thomsCloset[1][2]
  thomsCloset[2][1]

  console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!")