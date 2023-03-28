# EasyDom js 

``` EasyDom ``` is a JavaScript library designed to simplify common web development tasks by providing a collection of functions that can be used to interact with HTML elements, manipulate the DOM, and perform various other operations. 

---
## 🎉 What's new in version 3.0

- Added `getByClass`, `getByName`, and `getByTag` methods for selecting elements by class name, name attribute, and tag name, respectively.
- Added `innerwidth`, `outerwidth`, `innerheight`, and `outerheight` methods for getting the width and height of the browser window.
- Added `vendor`, `appVersion`, and `currentLanguage` methods for getting information about the user's browser.
- Added `doc` object for getting information about the current page's URL and document.
- Added `time` object for getting the current date and time, with methods for getting the hour, minute, second, millisecond, date, month, year, day of the week, and timezone offset.
- Added `typewriter` method for creating a typewriter effect on a specified element.
- Various bug fixes and improvements.

---

## Getting started

To use EasyDom in your project, simply include the `easyDom3.0.js` file in your HTML file:

```html
<script src="path/to/easyDom3.0.js"></script>
```

# API References

### ⚠⚠ Deprecation warning
```js 
navigator.vendor // is deprecated
navigator.appVersion // is deprecated
```

### Console Manipulation

- `consolePrint(msg)`: Shows the specified message on the console.
- `consoleError(errorTitle, errorMessage)`: Displays an error message with the specified title and message on the console.
- `consoleWarn(warnTitle, warnMessage)`: Displays a warning message with the specified title and message on the console.


### DOM Manipulation

- `getById(id)`: Retrieves an element with the specified ID.
- `getByClass(className)`: Retrieves all elements with the specified class name.
- `getByName(name)`: Retrieves all elements with the specified name.
- `getByTag(tagName)`: Retrieves all elements with the specified tag name.
- `innerwidth()`: Returns the inner width of the window.
- `outerwidth()`: Returns the outer width of the window.
- `innerheight()`: Returns the inner height of the window.
- `outerheight()`: Returns the outer height of the window.
- `vendor()`: Returns the vendor name of the browser.
- `appVersion()`: Returns the version of the browser.
- `currentLanguage()`: Returns the current language of the browser.
- `doc.getTitle()`: Returns the title of the document.
- `doc.getHost()`: Returns the host name of the document.
- `doc.getUrl()`: Returns the URL of the document.
- `doc.getProtocal()`: Returns the protocol of the document.
- `doc.getPath()`: Returns the path of the document.
- `time.hour()`: Returns the current hour.
- `time.minute()`: Returns the current minute.
- `time.second()`: Returns the current second.
- `time.milisecond()`: Returns the current millisecond.
- `time.date()`: Returns the current date.
- `time.month()`: Returns the current month.
- `time.year()`: Returns the current year.
- `time.day()`: Returns the current day.
- `time.timezone()`: Returns the current timezone offset.
- `docSet.setTitle(title)`: Sets the title of the document.
- `docSet.setUrl(url)`: Sets the URL of the document.
- `docSet.newPage(url)`: Opens a new page with the specified URL.
- `newAttribute(element, attributeName, attributeValue)`: Adds a new attribute to the specified element.
- `removeClass(element, oldClassName)`: Removes a class name from the specified element.
- `classToggle(element, classToken)`: Toggles the specified class on the element.
- `containClassName(element, requiredClassName)`: Returns `true` if the specified class name exists on the element, otherwise returns `false`.
- `newChild(base_parent, elementTag, newChildId, newChildClassList, attributeName, attributeValue)`: Creates a new child element and appends it to the specified parent element.
- `removeElement(parent, child)`: Removes the specified child element from the parent element.
- `printIn(element, text)`: Writes the specified text to the innerHTML of the specified element.
- `addPrintIn(element, text)`: Appends the specified text to the innerHTML of the specified element.
- `writeIn(element, text)`: Writes the specified text to the textContent of the specified element.
- `writeInAll(className, text)`: Writes the specified text to the textContent of all elements with the specified class name.
- `addWriteInAll(className, text)`: Writes text to all elements with the same class name.
- `typewriter(elementId, text, speed)`: --> speed in microsecond to write one latter, simulate a typewriter effect by writing text one character at a time.

# Example Usage

```javascript
Example usage

// Get an element by its ID
var myElement = $.getById("my-element");

// Get elements by their class name
var myElements = $.getByClass("my-class");

// Add a class to an element
$.addClass(myElement, "new-class");

// Remove a class from an element
$.removeClass(myElement, "old-class");

// Create a new DOM node
var newNode = $.createNode("div");

// Add text to a DOM node
var newText = $.createTextNode("Hello, world!");
$.appendChild(newNode, newText);

// Add a new node to the DOM
$.appendChild(myElement, newNode);

// Add an event listener to an element
$.addEvent(myElement, "click", function() {
  $.consolePrint("Clicked!");
});

// Make an AJAX request
$.ajax("GET", "/api/data", true, function(response) {
  $.consolePrint(response);
});
```
---

## Contributors

- [Edgar Gulay](https://eddiegulay.me)
