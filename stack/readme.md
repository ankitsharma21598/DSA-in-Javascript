# Stack in JavaScript

A stack is a data structure that stores items in a Last-In, First-Out (LIFO) order.

```js
let data = [];
let currentSize = data.length;
let max = 5;

console.log(currentSize);

let push = (newVal) => {
  if (currentSize >= max) {
    return `Stack is full you can't add ${newVal}`;
  }
  data[currentSize] = newVal;
  currentSize++;
  return data;
};

let pop = () => {
  if (currentSize <= 0) {
    return `Stack is already empty!`;
  }
  currentSize--;
  data.length = currentSize;
  return data;
};

// Push
console.log(push(2)); //[ 2 ]
console.log(push(3)); //[ 2, 3 ]
console.log(push(4)); //[ 2, 3, 4 ]
console.log(push(5)); //[ 2, 3, 4, 5 ]
console.log(push(6)); //[ 2, 3, 4, 5, 6 ]
console.log(push(7)); //'Stack is full you can\'t add 7'

// Pop
console.log(pop()); //[ 2, 3, 4, 5 ]
console.log(pop()); //[ 2, 3, 4 ]
console.log(pop()); //[ 2, 3 ]
console.log(pop()); //[ 2 ]
console.log(pop()); //[]
console.log(pop()); //'Stack is already empty!'
```

## Practice Questions

1. [Remove All Adjacent Duplicate in String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

2. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses)

3. [Backspace String Compare](https://leetcode.com/problems/backspace-string-compare)

4. [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i)

5. [Online Stock Span](https://leetcode.com/problems/online-stock-span)

6. [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii)

7. [Remove K Digits](https://leetcode.com/problems/remove-k-digits)
