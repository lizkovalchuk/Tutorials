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

Replace the comment in code snippet 2.4.1 with a `while` loop:

#### Code snippet 2.4.1

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