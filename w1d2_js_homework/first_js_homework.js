/* Section 1
1. DRY stands for Do Not Repeat Yourself.
1a. You should pay attention to Dry code to keep code tidy and readable.
1b. You can use for and while loops to write dry code.
//
2. var is globally or block scoped depending on use.
2a. let is block scoped
2b. const is also block scoped but cannot be re-declared.
*/
// Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
/*
a < b
c > d
'Name' === 'Name'
a < b < c
a === a < d
e != 'Kevin'
48 != '48'
f != e
*/
g = 0
console.log(g)
g = b + c
console.log(g)
/*
1. I used let because we needed to redefine in the following line.
2. I do not return an error when not using let or var or const.
3. SyntaxError: Invalid left-hand side in assignment when typing 10 = g.
*/
// Bonus Boolean
console.log(a < (b || f) === !f && e != c)
// Section 3
/*
1. Yes it is an infinite loop, it will continue printing "Do not run this loop"
forever because theres nothing to ever make it false.
2. No, it is not an infinite loop, first it will error, then if you fix the error
of having const isntead of let then it will only run once as the program becomes
false when ran.
*/
// Section 4
/*
1. Q would be 20
while Q is greater than 10 the function will run
the console will log the Q variable
the Q variable will decrease by 1 until it reaches a number less than 10.
*/
// Make a variable for the letter "A"
let letters = "A";
// Make a number variable
let i = 0;
// Start a while loop that will run as long as i is less than 20
while (i < 20) {
// increase the number of "A"'s in the result.
    letters += "A";
// Increase the output by 1 until the while loop is complete.
    i++;
}
// Have the console log out the letters variable from the while loop.
console.log(letters);
// Expected result would be to see 21+ A's in a single line.
// End result is equal to expected result.
// Section 4
/* 1. While and for loops are similar with some differences being for loops are
self contained and while loops are not.
2. the first part of the control panel is the initial condition
3. the second part of the control panel is the condition under which the loop
runs
4. the third part of the control panel is the repeating expression that runs
at the end of the loop.
*/
for (let i=0; i <= 999; i++) {
    console.log(i)
}
// the difference between the two (\ and /) slashes is their use in javascript.
// the / can be used to denote the beginning and end of expressions and
// the \ can be used as an escape character so certain strings are read properly.
// The \ allow the ' to be read as an apostrophe and not a tick
// so you do not have to put " " around the ' in a sentence.
for (let j=999; j >= 0; j--) {
    console.log(j)
}
//
for (let k=0; k <= 10; k++) {
    console.log('The value of k is ' + k + ' of 10')
}
//
for (let m=0; m <= 10; m++) {
    console.log( `the value of m is ${m} of 10`);
}
//
const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
 for (let g=0; g < 1; g++) {
    console.log(starWars)
}
//
 for (let f=0; f < 6; f++) {
    console.log(starWars[f], f)
}
//
 for (let b=0; b <= starWars.length -1; b+=2) {
    console.log(starWars[b], b)
}