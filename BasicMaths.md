### Question 1: Sum of all natural numbers from 1 to n.

```
function sumOfNaturalNumber(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfNaturalNumber(5)); // 15
console.log(sumOfNaturalNumber(10)); // 55
console.log(sumOfNaturalNumber(8)); // 36
```

### Question 2: Sum of digits of a number

```

function sumOfDigits(num){
    let sum =0;
    while (num>0){
        sum+=num%10;
        num=Math.floor(num/10);
    }
    return sum;
}

console.log(sumOfDigits(12345))

```

### Question 3: Count the number of digits of a number

```

function countDigits(num){
    let count =0;
    while (num>0){
        num=Math.floor(num/10);
        count++;
    }
    return count;
}

console.log(countDigits(123457890));

```

### Question 4: Check if a number is palindrome

```

function isPalindrome(nums){
    let left=0;
    let right =nums.length-1;
    if(nums.length%2 ===0){
        return "Not a palindrome."
    }
    while (left !== right){
        if(nums[left]!==nums[right]){
            return "Not a palindrome."
        }
        left++;
        right--;
    }
    return "Palindrome";
}

console.log(isPalindrome([1,2,3,2,1]));

```

### Question 5: Find nth Fibonacci number

**The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.**

```

function fib(n){
    let prev=0;
    let curr=1;
    let next=0;
    if(n<2){
        return n;
    }
    for(let i=2;i<=n;i++){
        next=prev+curr;
        prev=curr;
        curr=next;
    }
    return next;
}

console.log(fib(5));

```

### Question 6: Missing Number in an Array

**Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.**

**The formula n \* (n + 1) / 2 (often written as n(n + 1) / 2) is used to calculate the sum of the first 'n' natural numbers.**

```

function missingNumber(nums){
    let n = nums.length;
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=nums[i];
    }

    return n*(n+1)/2 -sum;

}

console.log(missingNumber([3,0,1])); //2
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));//8

```

### Question 7: Reverse a String without using built-in methods.

```
function reverseStr(str){
    let result ="";
    for(let i=str.length-1;i>=0;i--){
        result+=str[i];
    }
    return result;

}
console.log("Reverse",reverseStr("Ankit"));

```

### Question 8: Find the first non-repeating character in a string

```
function nonRepeat(str){
    let map={};
    let n=str.length;
    for(let i=0;i<n;i++){
        map[str[i]]=(map[str[i]]||0)+1;
    }
    for(let key in map){
        if(map[key]===1){
            return key;
        }
    }

}

console.log(nonRepeat("AAnkitt"));
```

### Practice Questions

1. [Count Odd Numbers in an Interval Range](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)

2. [Fizz Buzz](https://leetcode.com/problems/fizz-buzz)

3. [Power of Two](https://leetcode.com/problems/power-of-two)

4. [Find Square root of a Number](https://leetcode.com/problems/sqrtx)
