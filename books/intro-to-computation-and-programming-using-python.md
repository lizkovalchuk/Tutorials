# Introduction to Computation and Programming Using Python
-  Second Edition by John V.Guttag
- Free Course from MIT OpenCourseWare

https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/index.htm

----------------------

## Table of Contents

1. [ Chapt 2. Intro to Python ](#chapt-2.-intro-to-python)

<a name="chapt-2.-intro-to-python"></a>

## ___Chapt 2. Intro to Python___

### __2.2 Branching Programs__

Write a program that examines 3 variables, `x`, `y` and `z`, and prints the largest odd number among them. If none of them are odd, it should print a message to that effect. 

```python
x = 11
y = 7
z = 14
unevenNums = []

if x % 2 == 1:
  unevenNums.append(x)
if y % 2 == 1:
  unevenNums.append(y)
if z % 2 == 1:
  unevenNums.append(z)
if len(unevenNums) == 0:
  print('there are no odd variables')
print(max(unevenNums))  
```

### __2.4 Iteration__



#### Code snippet 2.4.1 (First Finger Exercise)

Replace the comment in code snippet 2.4.1 with a `while` loop:

```python
numXs = int(input('How many times should I print the letter X?'))
toPrint = ''
#concatinate X to toPrint numXs times
print(toPrint)
```

#### Solution to 2.4.1

```python
numXs = int(input('How many times should I print the letter X?'))
toPrint = ''
itersLeft = numXs

while itersLeft > 0:
  toPrint += 'x'
  itersLeft -= 1

print(toPrint)
```

#### _Hand Simulation_ of solution 2.4.1 

Imagine that the user has inputted `4`.

| Test # | numXs | toPrint | itersLeft |
| -------|-------|---------|-----------|
|1       |4      |'x'      |3          |
|2       |4      |'xx'     |2          |
|3       |4      |'xxx'    |1          |
|4       |4      |'xxxx'   |0          |

#### Code snippet 2.4.2 (Second Finger Exercise)

Write a program that asks for the user to input 10 integers, and then prints the largest odd number that was entered. If no odd number was entered, it should print a message to that effect.

```python
user_input = input("Enter 10 numbers, each seperated by a comma: ")
input_list = user_input.split(",")

if (len(input_list) < 10):
  print('Please provide 10 numbers, no less')
if (len(input_list) > 10):
  print('Please provide 10 numbers, no more')
if (len(input_list) == 10):
  maxOdds = None
  for x in input_list:
    val = int(x)
    if val % 2 != 0:
      if (maxOdds is None) or (val > maxOdds):
        maxOdds = val
  if (maxOdds is None):
    print('No odd numbers provided')
  else:
    print(maxOdds)
```