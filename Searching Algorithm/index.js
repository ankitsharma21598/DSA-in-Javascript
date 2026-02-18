// Linear Search in JavaScript
const arr = [1, 2, 6, 9, 0, -5];
const arr1 = [1, 2, 6, 9, 0, -5];

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch(arr, 2)); // 1
console.log(arr); // Array(6) [ 1, 2, 6, 9, 0, -5 ]

console.log(arr.includes(7)); // false
console.log(arr.includes(9)); // true

console.log(arr.indexOf(9)); // 3

console.log(arr.at(2)); // 6
console.log(arr.concat(arr1)); // Array(12) [ 1, 2, 6, 9, 0, -5, 1, 2, 6, 9, 0, -5 ]







