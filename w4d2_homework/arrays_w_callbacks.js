const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ];
// every
  console.log(nums.every(num => num >= 0))
  console.log(panagrams.every(word => word.length < 8))
// filter
  // 1 - 
  console.log(nums.filter(num => num < 4))
  // 2 -
  console.log(panagrams.filter(word => word.length % 2 === 0))
// find
  // 1 - 
  console.log(nums.find(num => num % 5 === 0))
  // 2 - 
  console.log(panagrams.find(word => word.length > 6))
// find index
  // 1 - 
  console.log(nums.findIndex(num => num % 3 === 0))
  // 2 - 
  console.log(panagrams.findIndex(word => word.length < 2))
// for each
  // 1 -
  console.log(nums.forEach(num => console.log(num * 3)))
  // 2 - 
  console.log(panagrams.forEach(word => console.log(word + "!")))
// map
  // 1 -
  console.log(nums.map(num => num * 100))
  // 2 - 
  //   console.log(panagrams);
// some
  // 1 - 
  console.log(nums.some(num => num % 7 === 0))
  