# Week2 Study Notes
---
This week, I go through the following:

chaper2: Programming basics.

chaper3: Array, Logic, and Loops.

Chaper4: Functions.

..

---

## Javascript

### HTML Button onclick -Javascript
The `onclick` event executes a certain functionality when a button is clicked. 

```javascript
<button onclick="functionToExecute()">Click</button>

functionToExecute(){
    // Doing something after Click.
}

```

#### Declare variables `let`, `const`, `var`.

Use `const` to declare the variables instead of `let` and `var`, because with const, things are safer as the variable becomes read-only.


#### Button Change Color Project. The DOM’s getElementById(), getElementsByClassName(), and the querySelector() methods.

The `querySelector()` method returns the first element that matches a CSS selector. Use `querySelector()` becasue it is more modern and it's faster.

```javascript
<p class="name">Writing something</p>
const name = document.querySelector(".name").style.color = "red"; // If its class, use the . to access.

<p id="name">Writing something</p>
const name = document.querySelector("#demo").style.color = "red"; // If its id, use the # to access.

```

https://www.w3schools.com/jsref/met_document_queryselector.asp 
https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/

