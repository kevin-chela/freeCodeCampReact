const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(one);   // Output: 1
console.log(two);   // Output: 2
console.log(rest);  // Output: [3, 4, 5, 6]
