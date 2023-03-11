# easyDom.js

`easyDom.js` is a JavaScript file containing a list of functions to reduce redundant code writing for common tasks in DOM manipulation, console manipulation, and retrieving information about the window and document. 

## Functions

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
