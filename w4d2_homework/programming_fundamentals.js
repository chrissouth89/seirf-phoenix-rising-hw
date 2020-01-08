// DRY
// do not repeat yourself.
// KISS
// keep it simple, stupid.
// Avoid creating a YAGNI
// you arent gonna need it.
// Do the simplest thing that could possibly work
// keeps us on the path towards simplicity in design.
// Don't make me think
// title of a book by Steve Krug, web usability, if code requires too much thinking from an observer to understand, then it can probably be simplified.
// Write code for the maintainer
// "Always code as if the person who will maintain your code is a violent psychopath who knows where you live."
// Single responsibility principle
// a component should perform a single defined task.
// Avoid premature optimization
// do not optomize unless your code is working, but slower than you want. (avoiding premature optimization seems to be giving me the most issues)
// Separation of concerns
// different areas of functionality should be managed by distinct and minimally overlapping modules of code.

// function called f with L parameter
const f = l => {
    // assigning letters to number variables
    let es = 0, p = 0, c = 1, n = 0
    // making a while loop saying while c is less than or equal to 1
    while (c <= l) {
    // have n = c + p
      n = c + p;
    // have the array c, p = to the array n, c
      [c, p] = [n, c]
    // have es add to the modulus of c and 2 then evaluate if truthy to 0
      es += (c % 2 === 0) ? c : 0
    }
    // return the value of es
    return es
  }
  // console log the function f with a value of 55
  console.log(f(55))
/////////////////////////////////////////////////////////
  const f2 = (limit) => {
    let evenSum = 0
    let previous = 0
    let current = 1
    while (current <= limit) {
      let next = current + previous
      previous = current
      current = next
      if (current % 2 === 0) {
        evenSum += current
      }
    }
    return evenSum
  }
  
  
//   console.log(f2(55))

  // 1 - a more semantic namae for the function could have been
  // 2 - f2
  // 3 - SyntaxError: Invalid left-hand side in assignment