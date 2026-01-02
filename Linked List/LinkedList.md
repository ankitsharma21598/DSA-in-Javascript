# 🔗 Linked List in JavaScript

A **Linked List** is a linear data structure where elements (nodes) are stored **non-contiguously** and linked using pointers (references).

---

## 🧠 Why Linked List?

- Dynamic size (no fixed length)
- Efficient insert/delete (no shifting like arrays)
- Useful when frequent modifications are needed

❌ Slower access than arrays (no index-based access)

---

## 🧩 Structure of a Node

Each node contains:

- `value` → data
- `next` → reference to next node

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

---

## 🧱 Singly Linked List Implementation

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add at end
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Add at beginning
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Delete by value
  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }

  // Print list
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}
```

---

## ▶️ Usage Example

```js
const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);
list.print(); // 5 -> 10 -> 20 -> null

list.delete(10);
list.print(); // 5 -> 20 -> null
```

---

## ⏱ Time Complexity

| Operation      | Complexity |
| -------------- | ---------- |
| Insert at head | O(1)       |
| Insert at tail | O(n)       |
| Delete         | O(n)       |
| Search         | O(n)       |

---

## 🔁 Types of Linked Lists

1. **Singly Linked List**
2. **Doubly Linked List** (prev + next)
3. **Circular Linked List**

---

## 🔥 Common Interview Questions

- Reverse a linked list
- Detect a cycle (Floyd’s Cycle Detection)
- Find middle of linked list
- Remove Nth node from end

---

## 🎯 Key Interview Line

> "A linked list stores elements dynamically using pointers, allowing efficient insertion and deletion compared to arrays."

# Practice Questions:

1. [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list)

2. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list)

3. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

4. [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list)

5. [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

6. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)

7. [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii)

8. [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists)

9. [Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list)
