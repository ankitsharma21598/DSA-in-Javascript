# 🚀 Two Pointer Pattern (JavaScript)

## 📌 Definition

Two Pointer Pattern uses **two indices (pointers)** to traverse a data structure (array/string) to optimize problems from **O(n²) → O(n)**.

---

## 📌 Why Use It?

* Eliminates unnecessary comparisons
* Works great with **sorted arrays**
* Helps in **pair, subarray, palindrome, and window problems**

---

## 📌 Core Idea

Instead of checking every pair:

```js
// ❌ Brute Force (O(n²))
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {}
}
```

👉 Use:

```js
// ✅ Two Pointer (O(n))
let left = 0;
let right = n - 1;
```

---

# 🧠 Types of Two Pointer Patterns

---

## 1️⃣ Opposite Direction (Left ↔ Right)

![Image](https://media.licdn.com/dms/image/v2/D4E12AQHwHVb_VNDxPA/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1702348540740?e=2147483647\&t=-zWoV1tdTWai2MEUnHuzYJxmrjhaP2hhW2HXOI1K3u4\&v=beta)

![Image](https://assets.algo.monster/two_sum_sorted/two_sum_sorted.001.png)

![Image](https://miro.medium.com/1%2At5jpdiqtvzS3HxGKoCbQ9A.png)

![Image](https://media.licdn.com/dms/image/v2/D5622AQGZl8a9MVVUVA/feedshare-shrink_800/B56ZtKaNO1HgAs-/0/1766479943585?e=2147483647\&t=9doLVWLWop7KNhfvy6aTkAKjNefIjxL2cUukWFSvtq8\&v=beta)

### 📌 When to Use

* Sorted array
* Pair sum problems
* Palindrome check

### 📌 Template

```js
let left = 0;
let right = arr.length - 1;

while (left < right) {
  let sum = arr[left] + arr[right];

  if (sum === target) {
    return [left, right];
  } else if (sum < target) {
    left++;
  } else {
    right--;
  }
}
```

### 📌 Key Logic

* If sum is small → move `left++`
* If sum is large → move `right--`

---

## 2️⃣ Same Direction (Slow & Fast Pointer)

![Image](https://storage.googleapis.com/algodailyrandomassets/curriculum/remove-duplicates-from-sorted-array/twopointer.png)

![Image](https://cdn.emre.me/2019-10-21-two-pointers.png)

![Image](https://miro.medium.com/1%2AIV6a0d29vUzuxUwnbCgLHg.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AybxaAk8gDN2uQFN5wfG-Cw.png)

### 📌 When to Use

* Remove duplicates
* Rearrange array
* Cycle detection

### 📌 Template

```js
let slow = 0;

for (let fast = 0; fast < arr.length; fast++) {
  if (arr[fast] !== arr[slow]) {
    slow++;
    arr[slow] = arr[fast];
  }
}
```

### 📌 Key Logic

* `fast` explores
* `slow` updates valid position

---


## Practice Questions

1. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome)
2. [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted)
3. [3Sum](https://leetcode.com/problems/3sum/)
4. [Container With Most Water](https://leetcode.com/problems/container-with-most-water)
5. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)
