##Question 1: How do you check if an element exists in an array?

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