// Prevent us from attempting to use variables
// that are not declared

"use strict";
// Simple examples demonstrating the use of operators

// Arithmetic Operators
console.log(1 + 1);         // Output: 2
console.log(1 - 1);         // Output: 0
console.log(1 + "1");       // Output: 11 (String concatenation)

// Operator precedence
console.log(3 - 4 * 5);     // Output: -17 (Multiplication first)
console.log((3 - 4) * 5);   // Output: -5 (Parentheses first)

// Modulus operator
console.log(6 / 5);         // Output: 1.2
console.log(6 % 5);         // Output: 1 (remainder of division)

// Comparison operators
console.log(1 == 1);        // Output: true (same value)
console.log(1 == "1");      // Output: true (type coercion)
console.log(1 === "1");     // Output: false (strict comparison, different types)

// Logical operators
console.log(1 || 2);        // Output: 1 (first truthy value)
console.log(2 || 1);        // Output: 2 (first truthy value)
console.log(1 && 2);        // Output: 2 (both true, returns second value)
console.log(1 && 1);        // Output: 1 (both true, returns second value)
