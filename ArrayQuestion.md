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

** 🎯 In One Line:
slice = copy
splice = change **

```
let arr = [12,4,5,33,6,78,8,9];
arr.splice(1,3);
arr.slice(1,3);
console.log(arr);

let arr = [1, 4];
arr.splice(1, 0, 2, 3); //app.splice(start,no. of element remove, ...items/elements )
console.log(arr); //[ 1, 2, 3, 4 ]

```

## How to concatenate two arrays in JavaScript?

```

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log([...arr1,...arr2]); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr1.concat(arr2)); // [ 1, 2, 3, 4, 5, 6 ]

```

```

```
