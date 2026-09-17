# Problem 1: Swap Two Variables [Easy]
# Description: Write a function that swaps the values of two variables
# without using a third variable.

def data(a, b):
    a, b = b, a
    return a, b


print(data(5, 10))


# Problem 2: Check Even or Odd [Easy]
# Description: Write a function is_even(n) that returns True if a number
# is even, and False if it is odd.

def is_even(a):
    return a % 2 == 0


print(is_even(4))
print(is_even(9))


# Problem 3: Find the Largest of Three Numbers [Easy]
# Description: Write a function largest(a, b, c) that returns
# the largest of three numbers.

def largest(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c


print(largest(3, 7, 5))


# Problem 4: Celsius to Fahrenheit [Easy]
# Description: Write a function to_fahrenheit(celsius) that converts
# Celsius temperature to Fahrenheit.

def celsius(c):
    return (c * 9 / 5) + 32


print(celsius(35))


# Problem 5: Check Positive, Negative or Zero [Easy]
# Description: Write a function check_sign(n) that returns
# 'Positive', 'Negative', or 'Zero'.

def check_value(a):
    if a > 0:
        return "Positive"
    elif a < 0:
        return "Negative"
    else:
        return "Zero"


print(check_value(5))
print(check_value(-3))
print(check_value(0))

# Problem 6: Reverse a String [Easy]
# Description: Write a function reverse_string(str) that returns
# the reverse of a given string.

# Example:
# Input: 'hello' → Output: 'olleh'
# Input: 'world' → Output: 'dlrow'

def reverse_string(text):
    return text[::-1]


print(reverse_string("hello"))
print(reverse_string("world"))


# Problem 7: Count Vowels in a String [Easy]
# Description: Write a function count_vowels(str) that counts
# and returns the number of vowels (a, e, i, o, u).

# Example:
# Input: 'hello' → Output: 2
# Input: 'javascript' → Output: 3

def count_vowels(text):
    vowels = "aeiou"
    count = 0

    for char in text.lower():
        if char in vowels:
            count += 1

    return count


print(count_vowels("hello"))
print(count_vowels("javascript"))


# Problem 8: Check Palindrome [Easy]
# Description: Write a function is_palindrome(str) that returns
# true if the string reads the same forwards and backwards.

# Example:
# Input: 'racecar' → Output: true
# Input: 'hello' → Output: false

def check_palindrome(text):
    first = text
    second = text[::-1]

    if first == second:
        return "Palindrome"
    else:
        return "Not Palindrome"


print(check_palindrome("racecar"))
print(check_palindrome("hello"))


# Problem 9: Capitalize First Letter of Each Word [Easy]
# Description: Write a function title_case(str) that capitalizes
# the first letter of every word.

# Example:
# Input: 'hello world' → Output: 'Hello World'

def title_case(text):
    words = text.split(" ")

    new_words = []

    for word in words:
        new_word = word[0].upper() + word[1:]
        new_words.append(new_word)

    return " ".join(new_words)


print(title_case("hello world"))


# Problem 10: Count Occurrences of a Character [Easy]
# Description: Write a function count_char(str, char) that returns
# how many times a character appears in a string.

# Example:
# Input: 'banana', 'a' → Output: 3

def count_char(text, char):
    return text.count(char)


print(count_char("banana", "a"))