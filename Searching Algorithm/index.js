// Linear Search in JavaScript
// => You go through the array one element at a time from start to end until you find the target value — or reach the end.
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
console.log(arr.includes(9)); // true
console.log(arr.indexOf(9)); // 3
console.log(arr.find((num) => num > 4)); // 6
console.log(arr.findIndex((num) => num < 0)); // 5

// Binary Search In JavaScript
// => Binary Search is a fast searching algorithm that works by repeatedly dividing the array in half.
// But there’s a rule 👇
// ⚠️ The array MUST be sorted — otherwise binary search is useless garbage.

let BinarySearch = (arr, target) => {
  let sortedArray = arr.sort((a, b) => a - b);
  console.log(sortedArray);

  let start = 0;
  let end = sortedArray.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid - 1;
    } else {
      end = mid + 1;
    }
  }
  return -1;
};

console.log(BinarySearch(arr, 1));

// Binary Search using Recursion
// Binary Search + recursion =
// 👉 Instead of looping, the function calls itself on half of the array until found.
// Again — if array is not sorted → your answer will be wrong.

const BinarySearchRecur = (arr, target) => {
  let sortedArray = arr.sort((a, b) => a - b);
  console.log(sortedArray); //Array(6) [ -5, 0, 1, 2, 6, 9 ]

  let start = 0;
  let end = sortedArray.length - 1;
  return BinarySearchRecurHelper(sortedArray, start, end, target);
};

let BinarySearchRecurHelper = (sortedArray, start, end, target) => {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (target === sortedArray[mid]) {
    return mid;
  } else if (target > sortedArray[mid]) {
    start = mid + 1;
    return BinarySearchRecurHelper(sortedArray, start, end, target);
  } else {
    end = mid - 1;
    return BinarySearchRecurHelper(sortedArray, start, end, target);
  }
};

console.log(BinarySearchRecur(arr, 6)); // 4

// Find floor and ceil value of X in an array

let floorCeil = (arr, target) => {
  let sortedArray = arr.sort((a, b) => a - b);
  console.log(sortedArray);
  let start = 0;
  let end = sortedArray.length - 1;
  let floor = -1,
    ceil = -1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (target === arr[mid]) {
      floor = mid;
      ceil = mid;
      return [ceil, mid];
    } else if (target > arr[mid]) {
      start = mid - 1;
    } else {
      end = mid + 1;
    }
  }
  return [ceil,floor];
};
