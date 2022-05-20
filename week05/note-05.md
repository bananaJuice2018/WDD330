# Week5 Study Notes and Reports

---

Week5, I go through the following:

Ch10: Testing and Debugging

Pratice coding excise sandbox from ch8

Lastly, begin to work on next week toDo list challenge.

---

### Testing and Debugging

The process of searching for the errors and finding them is called debugging. Debugging JavaScript code is difficult because the browser doesn’t show any error message or any indication to the location of the error. Fortunately, all modern browsers come with a built-in JavaScript debugger we should take advantage from.  

It is not only make your javascript code better but also its a good software enginerring practoce to avoid throwing errors on someone else's code. 

#### Strict Mode
ECMAScript 5 introduced a strict mode that produces more exceptions and warnings and prohibits the use of some deprecated features. This is due to the fact that strict mode considers coding practices that were previously accepted as just being 'poor style' as actual errors.

Increasing the chance of errors might seem like a bad idea at first, but it’s much better to spot errors early on, rather than have them cause problems later. Writing code in strict mode can also help improve its clarity and speed, since it follows conventions and will throw exceptions if any sloppy code practices are used.

```javaScript
'use strict';

e = 2.718;
<< ReferenceError: e is not defined

(function() {
    'use strict';

    // All your code would go inside this function

}());

```