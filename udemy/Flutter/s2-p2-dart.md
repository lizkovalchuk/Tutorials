# Flutter

## Udemy Angular Tutorial Notes Section 2: Flutter Basics


1. [ Initalizing A Widget ](#initializing-a-widget)

<a data="initializing-a-widget"></a>

### **_Initalizing A Widget_**

- Start with `import 'package:flutter/material.dart'` so you can extend it.
- This allows you to the `StatelessWidget` class from flutter.
- When extenting `StatelessWidget`, you need to add a `build()` method to allow for concrete implementation of `StatelessWidget.build`.
- `build()` is like a keyword. It is a special method that flutter needs to build widgets.
- The `build()` method requires an argument of of type `BuildContext` which is an object provided by flutter.
- The `build()` method needs to return a `Widget` type so you need to declase that the `build()` method returns a type of `Widget`.
- Add an actual return in the `build()` method which will be `MaterialApp()`.
- `MaterialApp()` is is a widget provided by flutter. This widget takes care of significant base setup and combines widgets into a renderable app.
- Use the `home` named argument inside `MaterialApp()`.
    - The `home`argument is basically the core widget which flutter uses to render your widgets to the screen when the app is mounted.
- Pass the `text` flutter widget into the `home` argument to render text and pass any type of string you need into `Text()`.
- Next you need to pass `MyApp` into `main()` via a flutter function called `runApp`.
  - When you use your object as a data type, you don't need parentheses are the class.
  - When you instantiate an object, you need to add parentheses.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(home: Text('Hello'));
  }
}
```

