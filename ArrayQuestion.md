## Question 1: How do you check if an element exists in an array?

```
function findElement(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true;
        }
    }
    return false;
}

let arr = [12,4,5,33,6,78,8,9];
console.log(findElement(arr,3));
```

## Question 2: How do you find the index of an element in an array?

```
function findIndexElement(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return 0;
}

let arr = [12,4,5,33,6,78,8,9];
console.log(findIndexElement(arr,33));
```

## How to delete, add & update elements from a specific index?

**🎯 In One Line:**

**slice = copy**

**splice = change**

```
let arr = [12,4,5,33,6,78,8,9];
arr.splice(1,3);
console.log(arr);// [ 12, 6, 78, 8, 9 ] (Original changed)

let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3); // [start, end]
console.log(newArr);   // [2, 3]
console.log(arr);      // [1, 2, 3, 4] (Original unchanged)

let arr = [1, 4];
arr.splice(1, 0, 2, 3); //app.splice(start index,no. of element remove, ...items/elements )
console.log(arr); //[ 1, 2, 3, 4 ]

```

## How to concatenate two arrays in JavaScript?

```

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log([...arr1,...arr2]); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr1.concat(arr2)); // [ 1, 2, 3, 4, 5, 6 ]

```

## Question 3: How can you check if two arrays are equal?

```
function isEqual(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!== arr2[i]){
            return false;
        }
    }
    return true;
}
let arr1=[1,2,3];
let arr2=[1,2,4];
console.log(isEqual(arr1,arr2));
```

## Question 4: How to sort an array in ascending and descending order?

**Note:**

```
const array = [12,4,5,33,6,78,8,9];
array.sort();
console.log(array); //[ 12, 33, 4, 5, 6, 78, 8, 9 ]

--> JavaScript's default sort() does NOT sort numbers correctly.

--> By default, sort() converts values to strings and sorts them alphabetically (lexicographically).

❌ Why output is wrong:

JavaScript compares numbers as strings:

'12' < '33' ✔

'33' < '4' ❌ (because '3' comes before '4')

'78' < '8' ❌ (because '7' comes before '8')


✅ Correct way to sort numbers:

✔ Ascending order:
array.sort((a, b) => a - b);
console.log(array); //[4, 5, 6, 8, 9, 12, 33, 78]


✔ Descending order:
array.sort((a, b) => b - a);
console.log(array); //[78, 33, 12, 9, 8,  6,  5, 4]

```

👉 Why (a - b) works?

- If result is negative, a comes before b
- If positive, b comes before a
- If zero, order stays same

negative → keep order (b is bigger than a which is fine)

positive → swap (a is bigger than b)

zero → no change

## Question 5: How to reverse an array?

```
const array = [12,4,5,33,6,78,8,9];
console.log(array.reverse()); //[9, 8, 78, 6,33, 5, 4, 12]
```
