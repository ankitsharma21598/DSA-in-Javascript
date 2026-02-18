# Searching in JavaScript

## Linear Search in JavaScript

```js
const arr = [1, 2, 6, 9, 0, -5];

const linearSearch = (arr,target)=>{
    for(let num of arr){
        if(arr[num] === target){
            return num;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 8));

```