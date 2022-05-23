# easyDom.js

1.console manipulation

- showing message
```javaScript
consolePrint(msg) -->msg(any)
```
- showing error/warning
```javaScript
consoleError(title, msg)
consoleWarn(title, msg)
```
2.Getting window information
    i. dimensions 
            innerwidth()
            outerwidth()
            innerheight()
            outerheight()
    ii. other
            vendor()
            appVersion()
            currentLanguage()

    iii. Document information
        a. get..
            doc.
                getTitle()
                getHost()
                getUrl()
                getProtocal()
                getPath()
        b.set..
            doc.
                setTitle(title)
                setUrl(url)
                newPaget(url)

*Time and date
(time object fetch new information after every 1 second)

getting data
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

*Document Element manipulation

    getting Elements
        getById(elementId)
        getByClass(elementsClassName)
        getByTag(elementTagName)
        getByName(elementsName)

    Setting and removing attriutes
        newAttribute(element, attributeName, attributeValue)
        removeAttribute(element, attributeName)

    class manipulation
        addClass(element, newClassName)
        removeClass(element, oldClassName)
        classToggle(element, classToken)
        containClassName(element, requiredClassName)

    creating new child element
        newChild(base_parent, elementTag, newChildId, newChildClassList, attributeName, attributeValue)
        removeElement(parent, child)

    Writing into elements

    innerHTML
        printIn(element, text)
        addPrintIn(element, text)
    textContent
        writeIn(element, text)
        addWriteIn(element, text)
        writeInAll(className, text)
        addWriteInAll(className, text)
        typewriter(elementId, text, speed) --> speed in microsecond to write one latter
