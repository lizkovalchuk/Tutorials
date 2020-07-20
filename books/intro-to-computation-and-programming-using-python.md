# Introduction to Computation and Programming Using Python
### Second Edition by John V.Guttag
### Free Course from MIT OpenCourseWare

https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/index.htm

1. [ Chapt 2. Intro to Python ](#chapt-2.-intro-to-python)

<a name="chapt-2.-intro-to-python"></a>

### ___Chapt 2. Intro to Python___

Exercise from 2.2 Branching Programs:

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
