// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.
const data = (a,b)=>{
    [a,b]=[b,a]
    return [a,b]
}

console.log(data(5,10))


// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.

const isEven = (a) => {
    return a % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(9)); 
 

// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

const largest = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(largest(3, 7, 5));


// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32


const celsius = (c) => {
    return (c*9/5)+32
}
console.log(celsius(35));


// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.


const checkValue = (a) => {
    if (a>0) {
        return "Positive"
    } else if (a<0) {
        return "Negative"
    } else {
        return "Zero"
    }
}
console.log(checkValue(5));
console.log(checkValue(-3)); 
console.log(checkValue(0)); 




