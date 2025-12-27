# ✅ **Plain objects → use `for...in`**

Unless you convert them (e.g., `Object.keys`, `Object.entries`).

## ✅ **Iterables → use `for...of`**

Arrays, Strings, Maps, Sets, etc.

---

# 🔍 Breakdown (very important)

## ✔️ **1. Plain objects (`{}`)**

Not iterable → **cannot use `for...of`**

Use:

- `for...in`
- `Object.keys(obj)`
- `Object.values(obj)`
- `Object.entries(obj)`

Example:

```js
const obj = { a: 1, b: 2 };

for (let key in obj) {
  console.log(key, obj[key]);
}
```

---

## ✔️ **2. Arrays, Strings, Maps, Sets**

Iterable → **use `for...of`**

Example:

```js
const arr = [10, 20];

for (let value of arr) {
  console.log(value);
}
```

---

# 🔥 Final simple rule to remember

### ✅ **If it's an object → use `for...in`**

### ❌ **If it's an array → don't use `for...in`**

### ✅ **If it's an iterable → use `for...of`**

### ❌ **You cannot use `for...of` on plain objects**

---

# ⚠️ Bonus clarity

A "plain object" means:

```js
{ a: 1, b: 2 }
```

A Map or Set **is also an object**, BUT it is iterable — so you use `for...of` there.

---

# ✅ **Map vs WeakMap in JavaScript**

## **1. Key Differences (Quick Table)**

| Feature                | **Map**                                             | **WeakMap**                                                               |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------------------------------- |
| **Key Types**          | Can use **any type** (string, number, object, etc.) | **Only objects** as keys                                                  |
| **Garbage Collection** | Keys are **NOT garbage collected** automatically    | Keys are **garbage collected automatically** if no other references exist |
| **Iteration**          | **Iterable** (can use `for...of`, `forEach`)        | **NOT iterable**                                                          |
| **Size Property**      | Has `size` property                                 | No `size` property                                                        |
| **Use Cases**          | General key-value storage                           | Storing data _related to objects_ without preventing garbage collection   |

---

# ✅ **2. Why WeakMap Was Created**

WeakMaps solve a memory-leak problem.

- In a normal **Map**, if you use an object as a key, the Map **keeps it in memory forever** unless you manually delete it.
- In a **WeakMap**, if the object key is no longer referenced anywhere else, **JavaScript automatically removes it**.

---

# ✅ **3. Example (Map)**

```js
let map = new Map();
let obj = { name: "ankit" };

map.set(obj, "Developer");

obj = null; // Remove reference

console.log(map); // Still contains the key → MEMORY LEAK
```

### ❌ Map still keeps the object in memory.

---

# ✅ **4. Example (WeakMap)**

```js
let weakMap = new WeakMap();
let obj = { name: "ankit" };

weakMap.set(obj, "Developer");

obj = null; // Remove reference

// weakMap will automatically remove the entry
```

### ✔ WeakMap auto-cleans the key → NO memory leak.

(You can't check it directly because WeakMap is not iterable.)

---

# ✅ **5. When to Use What?**

### **Use Map when:**

✓ You need normal key-value storage
✓ You need to iterate keys/values
✓ Keys can be primitives

### **Use WeakMap when:**

✓ You want to attach metadata to objects
✓ You don’t want the object to stay in memory forever
✓ Useful in libraries, frameworks, caching, DOM elements tracking

---

# 💡 **6. Real Example (WeakMap used in Frameworks)**

React, Vue, and other libraries internally use WeakMap for:

- Caching DOM metadata
- Storing component private data
- Avoiding memory leaks in long-running apps

```js
const cache = new WeakMap();

function processUser(userObj) {
  if (!cache.has(userObj)) {
    cache.set(userObj, expensiveComputation(userObj));
  }
  return cache.get(userObj);
}
```

---

# 🎯 **Final Summary**

👉 **Map** → General key-value store, iterable, keys not garbage collected

👉 **WeakMap** → Only object keys, auto garbage collection, non-iterable

---

# ✅ **Set vs WeakSet in JavaScript**

## **1. Quick Comparison Table**

| Feature                | **Set**                                  | **WeakSet**                                                                  |
| ---------------------- | ---------------------------------------- | ---------------------------------------------------------------------------- |
| **What it stores**     | Any type (primitive + objects)           | **Only objects**                                                             |
| **Garbage Collection** | Values stay until manually removed       | Objects are **garbage collected automatically** if no other reference exists |
| **Iterable?**          | Yes (can loop using `for…of`, `forEach`) | No (NOT iterable)                                                            |
| **Size property**      | Has `size`                               | Does NOT have `size`                                                         |
| **Use Cases**          | Unique values list                       | Track objects without preventing garbage collection                          |

---

# ✅ **2. Example: Set**

```js
const set = new Set();
set.add(10);
set.add("ankit");
set.add({ age: 25 });

console.log(set.size); // 3
console.log(set); // Iterable, shows all values
```

### ✔ Set supports:

- primitives
- objects
- iteration
- size checking

---

# ✅ **3. Example: WeakSet**

```js
const weakSet = new WeakSet();

let obj = { name: "ankit" };
weakSet.add(obj);

obj = null; // remove reference
// WeakSet automatically removes the object
```

### ✔ WeakSet features:

- Stores **only objects**
- Object auto-removed when no reference exists
- **Not iterable** (cannot be logged fully)
- No `.size`

---

# 🎯 **4. Why WeakSet Exists**

WeakSets help prevent **memory leaks** when you want to track objects _temporarily_.

Example:
Frameworks use WeakSets to store DOM elements that may disappear.

---

# 🔥 **5. Real Use Case Example**

### **Track which DOM nodes have been processed**

```js
const processedNodes = new WeakSet();

function process(node) {
  if (processedNodes.has(node)) return;

  // do something
  processedNodes.add(node);
}
```

If a node gets removed from DOM and nothing references it →
WeakSet removes it automatically.

---

# 🎯 **Final Summary**

### **Set**

- Can store any type
- Iterable
- Not garbage collected automatically
- Has size

### **WeakSet**

- Stores only objects
- Automatically garbage collected
- Not iterable
- No size

---

# Practice Questions:

1. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate)

2. [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)

3. [Distribute Candies](https://leetcode.com/problems/distribute-candies/)

4. [Longest Consecutive Sequence ](https://leetcode.com/problems/longest-consecutive-sequence/)(Revision)

5. [Happy Number](https://leetcode.com/problems/happy-number)

6. [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string) (Revision)

7. [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

8. [Find Common Characters](https://leetcode.com/problems/find-common-characters)

9. [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency)

10. [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)

11. [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string)

12. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)
