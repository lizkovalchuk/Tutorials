# Meet-ups Notes

## Udemy React Tutorial Notes Section 8: Learning Redux - Part 4 Add and Delete Actions

1. [ Kotlin Serialization ](#kotlin-serialization)
2. [ Effective Coding in Flutter using Pedantic ](#effective-coding-in-flutter-using-pedantic)
3. [ Adventures in Concurrency ](#adventures-in-concurrecy)
4. [ Android Testing Basics ](#andriod-testing-basics)


GDG Toronto: Flutter Hackathon
@droidconTO (November 13th)

<a data="kotlin-serialization"></a>

### **Kotlin Serialization**

#### What is Kotlin Serialization, and should I use it? -  Phil Shadlyn

Phil Shadlyn is an Andriod developer at Shopify. 

- What is Kotlin serialization?
- Data serialization library from Jetbrain
- Compiler plugin and runtime library

How does it work?
- Use the library and apply to any class you wish to serialization
- You can write custom serializors

kotlin has some built in serializers
kotlin jdm, you dn't want that one.

```
@Serialize
data class Team (
  val city:
  val Roster: <List> Players
)
```

- KSerializer = to create custom serializing
- A missing feature is that it can't serialize objects

When serializing a class, the library cannot take parameters, it needs properties

_To study:_ 
- Sealed class (what is that?)
- "will need to use polymorphic serialization."
- `gradle clean` is your friend

Pros:
- open source
- great for kotlin native project
- built-in support of kotlin features (for things like sealed classes)
- no third party dependencies

Cons:
- bugs, missing features (like object serialization)
- spotty documentation

<a data="effective-coding-in-flutter-using-pedantic"></a>

### **Effective Coding in Flutter using Pedantic**
#### Effective Coding in Flutter using Pedantic - Luis Pulido

- Pedantic is a package from google
- dartfmt (for dart formatter)
- check out dart pad

<a data="adventures-in-concurrecy"></a>

### **Adventures in Concurrency**

#### Stop Listening to Me - (Mis) Adventures in Concurrency - Todd Burgess

- MVVM
- View - View Model- Model
- Clean Architecture - mandatory reading.
- Dependecy Rule -> Dependencies Point Inwards
- "Callback hell"
- Concurrency issues
- Use a reactive event, reative listeners
- RxJava framework. (it abstracts the model implementation and implements the dependency rule)
- When we think of RxJava, they aren't just observalbes
- Flatmap is great tool to piece together your observables
- Reactive Java (something to learn)

<a data="andriod-testing-basics"></a>

### **Android Testing Basics**

#### Android Testing Basics - Keane Quibilan

- the three times of testing
  - black box:
    - don't know what's giong on
    - the box is so black, you can't see
  - white box:
    - you know the dependencies
  - grey box:
    - something in the middle

Manual QA
  - pretend to be a user
  - user flows make sense
  - make sure there are no crashes
  - great way to spend a lot of time
  - it's not scalable (very expensive)
  - this is black box testing

UI test (User Interface TEst)
  - Selenium (extension of manual)
  - Espresso (developers write the tests)
  - much cheaper than manual testing
  - issue with espresso
  - automate manual testing in emulators

Unit tests
  - cheapest way
  - testing a unit
  - can be a component, function, not related to any other part of your code
  - Ideally, your testing input/output of functions and looking for side effects
  - runs on JVM (it doesn't need to run your entire app)

Integration Tests
  - Roblolectric (to mock-out the Android context)
    - there are certian things you can't do with Roblolectric, doesn't get updated enough

the pyramid:

top - UI tests
middle - integration tests
base - unit test

##### Test Doubles
 
Types:
- Dummy =>
- Stub
- Fake => 
- Mock
- Spy => wrapping of the implemenation (avoid using this.)

mockito = it records every intergration with you class
Monkey Test

#### Testing Tools

- Device Farms
- With testing, you can document unique scenarios and add it to your test suite
- Keane 
- JUnit
- Ro