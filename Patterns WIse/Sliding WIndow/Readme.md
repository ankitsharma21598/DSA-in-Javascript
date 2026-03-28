## 3️⃣ Sliding Window (Dynamic Two Pointer)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AlcfE6u6wcUj7qxVY34Zidw.gif)

![Image](https://favtutor.com/resources/images/uploads/mceu_28165975511699020966300.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/0%2AlehnYO6R38TcYKRU.jpg)

![Image](https://assets.algo.monster/sliding_window_maximum.png)

### 📌 When to Use

- Subarray / substring problems
- Max/min window
- Constraints-based problems

### 📌 Template

```js
let left = 0;

for (let right = 0; right < arr.length; right++) {
  // expand window

  while (condition_breaks) {
    left++; // shrink window
  }
}
```

### 📌 Key Logic

- Expand with `right`
- Shrink with `left`

---

# 📌 Time Complexity

| Pattern          | Time |
| ---------------- | ---- |
| Opposite Pointer | O(n) |
| Fast & Slow      | O(n) |
| Sliding Window   | O(n) |

## Practice Questions

1. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

2. []()

3. []()