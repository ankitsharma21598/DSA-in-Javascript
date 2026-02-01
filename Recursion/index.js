// Factorial of a Number

function factorial(n) {
  // base case
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

console.log(factorial(4));

// Sum of Array
function SumArr(arr, n) {
  // base case
  if (n === 1) {
    return arr[0];
  }

  return arr[n - 1] + SumArr(arr, n - 1);
}
console.log(SumArr([1, 2, 3, 4, 5], 5));

// Fibonacci Number
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // 5

// Create pow(x, n) function which returns x^n
function myPow(x, n) {
  // base case
  if (n === 0) {
    return 1;
  }

  return x * myPow(x, n - 1);
}
console.log(myPow(4, 2)); // 16
