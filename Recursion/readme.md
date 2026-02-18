# Recursion in JavaScript

### Factorial of a Number

```js
function factorial(n) {
  // base case
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

console.log(factorial(4)); // 24
```

### Sum of Array

```js
function SumArr(arr, n) {
  // base case
  if (n === 1) {
    return arr[0];
  }

  return arr[n - 1] + SumArr(arr, n - 1);
}
console.log(SumArr([1, 2, 3, 4, 5], 5)); // 15
```

### Fibonacci Number

```js
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // 5
```

## Practice Questions (solve using recursion):

1. [Valid Palindrome with Recursion](https://leetcode.com/problems/valid-palindrome/)

2. Create pow(x, n) function which returns x^n.

```js
function myPow(x, n) {
  // base case
  if (n === 0) {
    return 1;
  }

  return x * myPow(x, n - 1);
}
console.log(myPow(4, 2));
```

3. Create a function which returns the sum of digits of a number (e.g., sumOfDigits(453) is 12)

```js
function sumOfDigits(n) {
  // Base Case
  if (n === 0) {
    return 0;
  }
  let num = n % 10;
  return num + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(453)); // 12
```

4. Create a function which returns the number of digits in a number (e.g., countDigits(453) is 3).

```js
// Approach 1:
function countDigits(n) {
  let count = 0;

  function helper(n) {
    // Base case
    if (n === 0) {
      return count;
    }
    count++;
    return helper(Math.floor(n / 10));
  }

  return helper(n);
}
console.log(countDigits(453));

// Approach 2:
// function countDigits(n) {
//   if (n === 0) {
//     return 0;
//   }
//   return 1 + countDigits(Math.floor(n / 10));
// }
// console.log(countDigits(453));
```

5. Create a function to find the LCM of two numbers

```js
// Recursive function to find GCD
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// Function to find LCM using GCD
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Example
console.log(lcm(12, 18)); // 36
```

6. Create a function to reverse a string

```js
function reverseStr(str) {
  let l = str.length;
  if (l === 0) {
    return "";
  }

  return str[l - 1] + reverseStr(str.slice(0, -1));
}
console.log(reverseStr("Ankit")); // 'tiknA'
```

7. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

8. [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
