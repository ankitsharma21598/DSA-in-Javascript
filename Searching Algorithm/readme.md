# Searching in JavaScript

## Linear Search in JavaScript

You go through the array one element at a time from start to end until you find the target value — or reach the end.

```js
const arr = [1, 2, 6, 9, 0, -5];

const linearSearch = (arr, target) => {
  for (let num of arr) {
    if (arr[num] === target) {
      return num;
    }
  }
  return -1;
};

console.log(linearSearch(arr, 8));
console.log(arr.includes(9)); // true
console.log(arr.indexOf(9)); // 3
console.log(arr.find((num) => num > 4)); // 6
console.log(arr.findIndex((num) => num < 0)); // 5
```

## Binary Search In JavaScript

Binary Search is a fast searching algorithm that works by repeatedly dividing the array in half.
But there’s a rule 👇
⚠️ The array MUST be sorted — otherwise binary search is useless garbage.

```js
let BinarySearch = (arr, target) => {
  let sortedArray = arr.sort((a, b) => a - b);
  console.log(sortedArray); // Array(6) [ -5, 0, 1, 2, 6, 9 ]

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

console.log(BinarySearch(arr, 1)); // 2
```

## Binary Search using Recursion

Binary Search + recursion =
👉 Instead of looping, the function calls itself on half of the array until found.
Again — if array is not sorted → your answer will be wrong.

```js
const BinarySearchRecur = (arr, target) => {
  let sortedArray = arr.sort((a, b) => a - b);
  console.log(sortedArray); // Array(6) [ -5, 0, 1, 2, 6, 9 ]

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
```
