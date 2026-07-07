# 26.06.2026- DOM & Event

# Today Learning

Today I learned the fundamentals of the Document Object Model (DOM) and Event Handling in JavaScript. I understood how JavaScript interacts with HTML elements and responds to user actions on a webpage.

## Document Object Model (DOM)

The DOM is a tree-like representation of an HTML document that allows JavaScript to access and manipulate webpage elements dynamically.

### Accessing Elements

I learned different methods to select HTML elements:

- **getElementById()** – Selects an element using its unique id.
- **getElementsByClassName()** – Selects elements based on their class name.
- **getElementsByTagName()** – Selects elements based on their HTML tag.
- **querySelector()** – Selects the first matching element using CSS selectors.
- **querySelectorAll()** – Selects all matching elements and returns a collection.

### Modifying Content

I learned how to change the content of HTML elements dynamically using:

- **textContent** – Updates only the text inside an element.
- **innerHTML** – Updates the HTML content inside an element.

### Styling Elements

I learned how to modify the appearance of elements using JavaScript by changing CSS properties dynamically.

### Working with Classes

I learned how to:

- Add a CSS class to an element.
- Remove a CSS class from an element.
- Toggle a CSS class to switch between different styles.

### Handling User Input

I learned how to retrieve values entered by users in input fields and use them within JavaScript.

## Event Handling

Event handling allows JavaScript to respond to user interactions on a webpage.

### Click Event

Triggered when a user clicks on an element such as a button.

### Mouseover Event

Triggered when the mouse pointer moves over an element.

### Keydown Event

Triggered whenever a key is pressed on the keyboard.

### Submit Event

Triggered when a form is submitted.

### Event Listener

I learned how to attach events using `addEventListener()`. This method separates JavaScript from HTML and allows multiple events to be attached to the same element. It takes two parameters:

1. The event type (click, mouseover, keydown, submit, etc.).
2. The function that should execute when the event occurs.

## Program Files

Document Object Model - [DOM.html](../Practicefolder/DOM.html)
Event Handling- [eh.html](../Practicefolder/eh.html)
