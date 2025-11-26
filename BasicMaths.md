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
