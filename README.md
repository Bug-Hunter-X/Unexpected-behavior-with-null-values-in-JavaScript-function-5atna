# JavaScript Null Value Handling Bug

This repository demonstrates a common error in JavaScript: failure to explicitly handle `null` values. The bug occurs when a function doesn't properly check for `null` input, leading to unexpected behavior or errors.

## Bug Description
The `foo` function, in `bug.js`, attempts to add two numbers.  However, if either input is `null`, it will produce `NaN` or throw an error (depending on the JavaScript engine).

## Solution
The corrected version, in `bugSolution.js`, explicitly checks for `null` inputs and returns `null` in these cases, providing a more robust and predictable result. This prevents unexpected errors and improves the code's reliability. 

## How to reproduce:
1. Clone this repository
2. Run the `bug.js` and `bugSolution.js` in your preferred JavaScript environment (Node.js, browser console, etc.).
3. Observe the differences in output when null values are passed as arguments. 