var $ = {
    consolePrint: function (msg) {
        console.log(msg);
    },
    consoleError: function (errorTitle, errorMessage) {
        console.error(errorTitle + ":", errorMessage);
    },
    consoleWarn: function (warnTitle, warnMessage) {
        console.warn(warnTitle + ":", warnMessage);
    },
    getById: function (id) {
        return document.getElementById(id);
    },
    getByClass: function (className) {
        return document.getElementsByClassName(className);
    },
    getByName: function (name) {
        return document.getElementsByName(name);
    },
    getByTag: function (tagName) {
        return document.getElementsByTagName(tagName);
    },
    innerWidth: function () {
        return window.innerWidth;
    },
    outerWidth: function () {
        return window.outerWidth;
    },
    innerHeight: function () {
        return window.innerHeight;
    },
    outerHeight: function () {
        return window.outerHeight;
    },
    vendor: function () {
        return navigator.vendor;
    },
    appVersion: function () {
        return navigator.appVersion;
    },
    currentLanguage: function () {
        return navigator.language;
    },
    doc: {
        getTitle: function () {
            return document.title;
        },
        getHost: function () {
            return document.location.host;
        },
        getUrl: function () {
            return document.location.href;
        },
        getProtocol: function () {
            return document.location.protocol;
        },
        getPath: function () {
            return document.location.pathname;
        }
    },

    //date and time
    date: new Date(),
    time: {
        update: function () {
            easyDom.date = new Date();
        },
        hour: function () {
            return easyDom.date.getHours();
        },
        minute: function () {
            return easyDom.date.getMinutes();
        },
        second: function () {
            return easyDom.date.getSeconds();
        },
        milisecond: function () {
            return easyDom.date.getMilliseconds();
        },
        date: function () {
            return easyDom.date.getDate();
        },
        month: function () {
            return easyDom.date.getMonth();
        },
        year: function () {
            return easyDom.date.getFullYear();
        },
        day: function () {
            switch (easyDom.date.getDay()) {
                case 0:
                    return "Sunday";
                    break;
                case 1:
                    return "Monday";
                    break;
                case 2:
                    return "Tuesday";
                    break;
                case 3:
                    return "Wednesday";
                    break;
                case 4:
                    return "Thursday";
                    break;
                case 5:
                    return "Friday";
                    break;
                case 6:
                    return "Saturday";
                    break;
            }
        },
        timezone: function () {
            return easyDom.date.getTimezoneOffset();
        }
    },

    //element manipulation
    newAttribute: function (element, attributeName, attributeValue) {
        element.setAttribute(attributeName, attributeValue);
    },
    removeAttribute: function (element, attributeName) {
        element.removeAttribute(attributeName);
    },
    addClass: function (element, newClassName) {
        element.classList.add(newClassName);
    },
    removeClass: function (element, oldClassName) {
        element.classList.remove(oldClassName);
    },
    classToggle: function (element, classToken) {
        element.classList.toggle(classToken);
    },
    containClassName: function (element, requiredClassName) {
        var isFound = false;
        for (var i = 0; i < element.classList.length; i++) {
            if (element.classList[i] === requiredClassName) {
                isFound = true;
                break;
            }
        }
        return isFound;
    },
    createNode: function (elementType) {
        return document.createElement(elementType);
    },
    createTextNode: function (text) {
        return document.createTextNode(text);
    },
    appendChild: function (parentNode, childNode) {
        parentNode.appendChild(childNode);
    },
    removeChild: function (parentNode, childNode) {
        parentNode.removeChild(childNode);
    },
    replaceChild: function (parentNode, newChild, oldChild) {
        parentNode.replaceChild(newChild, oldChild);
    },
    insertBefore: function (parentNode, newChild, refChild) {
        parentNode.insertBefore(newChild, refChild);
    },
    addEvent: function (element, eventType, eventFunction) {
        element.addEventListener(eventType, eventFunction);
    },
    removeEvent: function (element, eventType, eventFunction) {
        element.removeEventListener(eventType, eventFunction);
    },
    ajax: function (method, url, async, callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        xhttp.open(method, url, async);
        xhttp.send();
    },
    typewriter: function (elementId, text, speed) {
        var pad = getById(elementId), i = 0;
        var interval = window.setInterval(function () {
            pad.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(interval);
            }
        }, speed);
    }
};
