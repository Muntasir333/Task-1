// Problem 1: Swap Two Variables [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10 → Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

const swapVariables = (a: number, b: number): [number, number] => {
    [a, b] = [b, a];

    return [a, b];
};

console.log(swapVariables(5, 10));


// Problem 2: Check Even or Odd [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4 → Output: true
// Input: 7 → Output: false
// Hint: Use the modulus (%) operator.

const checkEven = (a: number): boolean => {
    return a % 2 === 0;
};

console.log(checkEven(4));
console.log(checkEven(9));


// Problem 3: Find the Largest of Three Numbers [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5 → Output: 7
// Hint: Use Math.max() or if-else conditions.

const findLargest = (a: number, b: number, c: number): number => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
};

console.log(findLargest(3, 7, 5));


// Problem 4: Celsius to Fahrenheit [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0 → Output: 32
// Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

const convertToFahrenheit = (c: number): number => {
    return (c * 9 / 5) + 32;
};

console.log(convertToFahrenheit(35));


// Problem 5: Check Positive, Negative or Zero [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5 → Output: 'negative'
// Input: 0 → Output: 'zero'
// Hint: Use if-else if-else statements.

const checkSign = (a: number): string => {
    if (a > 0) {
        return "Positive";
    } else if (a < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
};

console.log(checkSign(5));
console.log(checkSign(-3));
console.log(checkSign(0));


// Problem 6: Reverse a String [Easy]
// Description: Write a function reverseString(str) that returns
// the reverse of a given string.

// Example:
// Input: 'hello' → Output: 'olleh'
// Input: 'world' → Output: 'dlrow'

// Hint: Use split(''), reverse(), and join('').

const reverseText = (str: string): string => {
    return str.split('').reverse().join('');
};

console.log(reverseText('hello'));
console.log(reverseText('world'));


// Problem 7: Count Vowels in a String [Easy]
// Description: Write a function countVowels(str) that counts
// and returns the number of vowels (a, e, i, o, u).

// Example:
// Input: 'hello' → Output: 2
// Input: 'javascript' → Output: 3

// Hint: Use a loop or match() with a regular expression.

const countVowelLetters = (str: string): number => {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
};

console.log(countVowelLetters('hello'));


// Problem 8: Check Palindrome [Easy]
// Description: Write a function isPalindrome(str) that returns
// true if the string reads the same forwards and backwards.

// Example:
// Input: 'racecar' → Output: true
// Input: 'hello' → Output: false

// Hint: Compare the string to its reverse.

const checkPalindrome = (str: string): string => {
    const first = str;
    const second = str.split('').reverse().join('');

    if (first === second) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
};

console.log(checkPalindrome('racecar'));
console.log(checkPalindrome('hello'));


// Problem 9: Capitalize First Letter of Each Word [Easy]
// Description: Write a function titleCase(str) that capitalizes
// the first letter of every word in a string.

// Example:
// Input: 'hello world' → Output: 'Hello World'

// Hint: Use split(' '), map(), and join(' ').

const makeTitleCase = (str: string): string => {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

console.log(makeTitleCase('hello world'));


// Problem 10: Count Occurrences of a Character [Easy]
// Description: Write a function countChar(str, char) that returns
// how many times a character appears in a string.

// Example:
// Input: 'banana', 'a' → Output: 3

// Hint: Use split(char).length - 1 or a loop.

const countCharacter = (str: string, char: string): number => {
    return str.split(char).length - 1;
};

console.log(countCharacter('banana', 'a'));