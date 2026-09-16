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