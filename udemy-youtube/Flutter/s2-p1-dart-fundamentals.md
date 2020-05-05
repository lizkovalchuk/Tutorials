# Flutter

## Udemy Angular Tutorial Notes Section 2: Flutter Basics and Dart Fundamentals

1. [ Flutter Intro ](#flutter-intro)
2. [ Dart Basics ](#dart-basics)
3. [ Dart Conventions ](#dart-conventions)
4. [ Argument Types ](#argument-types)

<a data="flutter-intro"></a>
### **_Flutter Intro_**

- To create a flutter project, you need to download flutter CLI and the core library. Once this is done, navigate to the folder where you want your flutter app and enter `flutter create app-name` into the terminal where `app-name` is the name of your app.
- Project names cannot have dashes or blank spaces, you must use underscores.
- Flutter comes with many pre-built widgets that are configurable. 
- You can also built custom widgets as well as build custo widgets that group pre-built widgets.
- Everything is Dart is an object.

#### File System Overview

- `.idea`
    - This folder contains configuration for Android Studio
- `android`
    - This folder is similar to the flutter build for Android
    - It holds a complete android project
    - Flutter injects code into this `android` folder.
    - The emulator runs using code in the `android` folder.
    - Only in very rare cases will you need to make changes in that folder.
- `build`
    - This folder is holds the output of your flutter application.
    - This folder is generated and managed by the flutter SDK
    - You should not change anything in this folder.
    - This folder gets updated when you build your app for deployment.
- `ios`
    - This is the same as the android folder, it's just the ios version.
    - This project holds a complete XCode project.
- `lib`
    - The library folder is where you do 99% of your work.
    - All Dart files go in the `lib` folder.
- `test`
    - This folder is where we write tests and automated tests for our application.
- `pubspec.yaml` 
    - This file is where we can configure our dependencies.
    - This is where we would add a third party package.
    - This is where you would configure things like fonts and images.
    - `yaml` files use indenting to express how code works together

<a data="dart-basics"></a>

### **_Dart Basics_**

- A good place to practice Dart fundamentals is https://dartpad.dartlang.org/
- Dart is typed language similar to C#. Here is a typical Dart function:

```dart
void main() {
  for (int i = 0; i < 5; i++) {
    print('hello ${i + 1}');
  }
}
```

- types in front of functions indicate the type of data that the function returns.
- `void` in this case means that `main()` returns nothing (`void`).
- the `for` loop iterator needs to be defined as a `int` as well.
- Define types when possible so the compiler can help you when you make an error. (Avoid dynamic types and use explicit types as much as possible.)

#### Main()

- `main()` is a special function name because `main` is the entry point of a Dart Application.
- `main()` gets automatially called when the app starts.
- `main.dart` is equally significant.
- `main()` in `main.dart` is the first function that gets called.
- Dart uses camelCase.
- Every expression needs a semi-colon at the end, expect when defining functions (so no semi-colon after functions).
- use `print` (a keyword in dart), to return results.


##### addNumbers with int

```dart
addNumbers(int num1, int num2){
  print(num1 + num2);
}

void main() {
  addNumbers(1, 2);
}
```

##### addNumbers with double

```dart
addNumbers(double num1, double num2){
  print(num1 + num2);
}

void main() {
  addNumbers(1.45, 2.09);
}
```


##### addNumbers with num

```dart
// this allows using both int and float
addNumbers(num num1, num num2){
  print(num1 + num2);
}

void main() {
  addNumbers(1.45, 2.09);
}
```

##### addNumbers with return type

```dart
double addNumbers(double num1, double num2){
  return num1 + num2;
}

void main() {
  print(addNumbers(1.87, 2.98));
}
```

#### Data Types

- Text
    - Strings (`String`s is always declare with a capital `S`.
- Numbers
    - Intergers (numbers with no decimal places)
    - Floats (also known as doubles, numbers with decimal places)
- Objects
    - Objects are initialted with `class`.
    - Objects are always declared capitalized and then use Pascal case. (Don't use underscores or dashes).
    - You do not need to use the `new` keyword with dart when making an instance of an object.
    - Dot notation allows you to access properties. 

```dart
class Person {
  String name = 'Max';
  int age = 30;
}

void main() {
  var p1 = Person();
}

```

<a data="dart-conventions"></a>
### **_Dart Conventions_**

- If you indicate a return type in a function, and then store the results in a `var`, it is considered bad practice to restate the date type. 

- If you inititate a `var`, it is good practice indicate which data type it is. When you initiate a `var` with a data type, you don't need to have both `var` and your data type.

- However when initializing properties, it is better to let dart do type inference.
 
<a data="argument-types"></a>

### **_Argument Types_**

#### Postional Arguments

Positional Arguments can be accessed by the position in which they are declared. 

```dart
double addNumbers(double num1, double num2){
  return num1 + num2;
}

// The argument in the first position is 1.87
// The argument in the second position is 2.98

void main() {
  print(addNumbers(1.87, 2.98));
}
```

#### Names Arguments

Named arguments are targetted by their names, just like key value paring in objects. Many flutter widgets that need to be extended require named arguments.