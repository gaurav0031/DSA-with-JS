# 📘 Time and Space Complexity – Complete DSA Notes

---

## 📌 Introduction

Understanding **Time and Space Complexity** is the foundation of Data Structures and Algorithms (DSA).

It helps us:
- Write efficient code
- Compare algorithms
- Optimize performance
- Crack coding interviews

> ❗ Time Complexity ≠ Execution Time  
It measures how the runtime grows as input size (n) increases.

---

# 🕒 Time Complexity

Time Complexity measures how fast an algorithm runs relative to input size.

---

## 🔎 Linear Search vs Binary Search

### 🔹 Linear Search
- Best Case → O(1)
- Average Case → O(n/2)
- Worst Case → O(n)
- Works on unsorted arrays

```cpp
for(int i = 0; i < n; i++) {
    if(arr[i] == key) return i;
}

🔹 Binary Search

Best Case → O(1)

Average Case → O(log n)

Worst Case → O(log n)

Requires sorted array

int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while(low <= high) {
        int mid = (low + high) / 2;
        if(arr[mid] == key) return mid;
        else if(arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
📈 Big-O Notation

Big-O represents Worst Case Complexity.

🚀 Growth Order (Fastest → Slowest)
Complexity	Meaning
O(1)	Constant
O(log n)	Logarithmic
O(n)	Linear
O(n log n)	Linearithmic
O(n²)	Quadratic
O(2ⁿ)	Exponential
O(n!)	Factorial
🧠 Common Time Complexities
🔹 O(1) – Constant Time
int value = arr[5];
🔹 O(n) – Linear Time
for(int i = 0; i < n; i++) {
    // do something
}
🔹 O(n²) – Quadratic Time
for(int i = 0; i < n; i++) {
    for(int j = 0; j < n; j++) {
        // do something
    }
}
🔹 O(n log n)
for(int i = 0; i < n; i++) {
    int temp = n;
    while(temp > 1) {
        temp = temp / 2;
    }
}
🔹 O(2ⁿ) – Exponential
int fib(int n) {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
🔹 O(n!) – Factorial
void permute(string s, int l, int r) {
    if(l == r) cout << s << endl;
    else {
        for(int i = l; i <= r; i++) {
            swap(s[l], s[i]);
            permute(s, l + 1, r);
            swap(s[l], s[i]);
        }
    }
}
📏 Rules to Calculate Time Complexity
1️⃣ Ignore Constants

O(2n) → O(n)

2️⃣ Drop Lower Order Terms

O(n² + n) → O(n²)

3️⃣ Sequential Loops Add

O(n) + O(n) = O(n)

4️⃣ Nested Loops Multiply

O(n × m)

5️⃣ Different Inputs Multiply

O(n × m)

💾 Space Complexity

Space Complexity measures extra memory used by an algorithm.

🔹 O(1) – Constant Space
int sum = 0;
🔹 O(n) – Linear Space
vector<int> arr(n);
🔹 O(n²) – 2D Matrix
vector<vector<int>> matrix(n, vector<int>(n));
🔁 Recursion & Space Complexity

Recursive functions use Call Stack Memory.

int factorial(int n) {
    if(n == 0) return 1;
    return n * factorial(n-1);
}

Time Complexity → O(n)

Space Complexity → O(n) (Call stack)

🎯 Interview Priority Order
Priority	Complexity
✅ Best	O(1)
✅ Good	O(log n)
👍 Acceptable	O(n log n)
⚠ Risky	O(n²)
❌ Avoid	O(2ⁿ), O(n!)
🧩 Extra Concepts
✔ Best Case

Minimum operations.

✔ Average Case

Expected operations.

✔ Worst Case

Maximum operations (used in Big-O).

🏆 Final Summary

Time Complexity → How fast algorithm runs
Space Complexity → How much memory it uses
