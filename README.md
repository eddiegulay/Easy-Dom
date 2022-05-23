# easyDom.js

1. console manipulation

- showing message
```javaScript
consolePrint(msg) -->msg(any)
```
- showing error/warning
```javaScript
consoleError(title, msg)
consoleWarn(title, msg)
```
2. Getting window information
- dimensions 
```javascript
innerwidth()
outerwidth()
innerheight()
outerheight()
```

- other
```javascript
vendor()
appVersion()
currentLanguage()
```

- Document information
  - get
```javascript
doc.
    getTitle()
    getHost()
    getUrl()
    getProtocal()
    getPath()
```
   - set
```javascript
doc.
    setTitle(title)
    setUrl(url)
    newPaget(url)
```

3. Time and date

*time object fetch new information after every 1 second*

- getting data
```javascript
time.
    hour()
    minute()
    second()
    milisecond()
    date()
    month()
    year()
    day() --> return string
    timezone()
```

4. Document Element manipulation

- getting Elements
```javascript
getById(elementId)
getByClass(elementsClassName)
getByTag(elementTagName)
getByName(elementsName)
```

- Setting and removing attriutes
```javascript
newAttribute(element, attributeName, attributeValue)
removeAttribute(element, attributeName)
```

- class manipulation
```javascript
addClass(element, newClassName)
removeClass(element, oldClassName)
classToggle(element, classToken)
containClassName(element, requiredClassName)
```

- creating new child element
```javascript
newChild(base_parent, elementTag, newChildId, newChildClassList, attributeName, attributeValue)
removeElement(parent, child)
```

- Writing into elements

  - innerHTML
```javascript
printIn(element, text)
addPrintIn(element, text)
```
  - textContent
```javascript
writeIn(element, text)
addWriteIn(element, text)
writeInAll(className, text)
addWriteInAll(className, text)
typewriter(elementId, text, speed) --> speed in microsecond to write one latter
```