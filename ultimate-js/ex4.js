// lesson 4
// Let's do it. We're now moving from creating data to controlling the program's flow.

// -----

// ## Step 1: Theory ("Why & How")

// **Exercise 4/100: Conditional Logic with `if-else`.**

// A program that always does the same thing isn't very useful. We need a way to make it perform different actions based on different conditions. This is like a fork in the road 🛣️, and the main tool for this is the `if-else` statement.

// ### The `if` Statement

// This is the simplest form. It runs a block of code **only if** a condition is `true`.

// ```javascript
// if (condition) {
//   // This code runs only if 'condition' is true
// }
// ```

// The `condition` is an expression that results in a boolean, like the ones we made in the last exercise (`age >= 18`).

// ### The `if-else` Statement

// This provides an alternative path for when the condition is `false`.

// ```javascript
// if (condition) {
//   // Runs if 'condition' is true
// } else {
//   // Runs if 'condition' is false
// }
// ```

// One of these two blocks will **always** run.

// ### The `if-else if-else` Chain

// This lets you check multiple conditions in order.

// ```javascript
// if (condition1) {
//   // Runs if condition1 is true
// } else if (condition2) {
//   // Runs if condition1 is false AND condition2 is true
// } else {
//   // Runs if all previous conditions are false
// }
// ```

// JavaScript checks each condition from top to bottom and runs the code for the **first one** that is `true`.

// -----

// ## Step 2: The Task ("What")

// Write a function called `getGrade` that takes one argument, `score` (a number from 0 to 100).

// The function should return a letter grade based on these rules:

//   * **90-100**: Return "A"
//   * **80-89**: Return "B"
//   * **70-79**: Return "C"
//   * **60-69**: Return "D"
//   * **0-59**: Return "F"

// ### Examples

// 1.  **Input**: `getGrade(95)`
//       * **Output**: `"A"`
// 2.  **Input**: `getGrade(82)`
//       * **Output**: `"B"`
// 3.  **Input**: `getGrade(70)`
//       * **Output**: `"C"`
// 4.  **Input**: `getGrade(15)`
//       * **Output**: `"F"`

// ### Constraints

//   * The function name must be `getGrade`.
//   * You must use the `if`, `else if`, and `else` structure.

// -----

// ## Step 3: Your Turn

// Show me how you'd solve this.


const getGrade = score => {
    if (typeof score === "number") {
        if (score <= 100 && score >= 0) {
            if(score >= 90 && score <= 100){
                return "A";
            } else if (score >= 80 && score < 90) {
                return "B";
            } else if (score >= 70 && score < 80) {
                return "C";
            } else if (score >= 60 && score < 70) {
                return "D";
            } else {
                return "F";
            }
        } else {
            return `Score must be between 0 and 100`;
        }
    } else {
        return `Please write a number`;
    }
}

getGrade(78);

// const getGrade = score => {
//     // Guards
//     if (typeof score !== 'number') return 'Please write a number';
//     if (score < 0 || score > 100) return 'Score must be between 0 and 100';

//     // Core Logic (now much flatter)
//     if (score >= 90) return 'A';
//     if (score >= 80) return 'B';
//     if (score >= 70) return 'C';
//     if (score >= 60) return 'D';
//     return 'F';
// };