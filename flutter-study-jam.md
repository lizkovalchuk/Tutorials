# Flutter

## Notes from Study Jam Flutter Session 2
### Sept 16th, 2019 - October 28th, 2019

1. [ First Session Sept 16 ](#first-session-sept-16)
2. [ Second Session Sept 23 ](#second-session-sept-23)

<a data="first-session-sept-16"></a>

### **_First Session Sept 16_**

- Everything is an object in Flutter. Margin and padding are objects as well and they have properties. Dart has strict rules for naming variable. All `vars` are considered `const`. 

- For State, use the provider pattern. This uses inherited widget
provider pattern

- A great site for flutter packages is https://pub.dev/flutter
- pub.dev/packages/provider has helloWorld examples

- provider pattern with firebase flutter is highly recommended.

- Run `open -a Simulator` in your terminal while having xcode running to start the iphone emulator.

- To run the emulator in Android Studio, download a device image from AVD Manager and then press the play button.


<a data="second-session-sept-23"></a>

### **_Second Session Sept 23__**

- Rows and columns are a key feature for Flutter layout.
- Flutter relies on the buton widget to handle interactivity
  - FlatButton (great for forms)
  - RaisedButton
  - FloatActionButton
  - Jester Detector (wraps around anything to make it clickable, which is like the `<a></a>`)
  - Inkell (like Jester detector, but adds ripple effect from Material Design)
- use `createState() => _nameOfComponentState()`
- private classes, method, and variables are prepended with an underscore (a private modifier). It makes it unavaible to classes outside of that file.
- Prebuilt layouts
  - Card
  - Chip 
  - Circular Progress
  - Grid View
- rows and columns are a key concept in flutter
- `center` has its own class. Checkout out `position-classes`
- `hero` widget is for sweet animation
- thecocktaildb.com


cocktails.modal