# Week7 Study Notes and Reports

---

Week5, I go through the following:

Ch11: Further Functions
Ch13 AJAX
---

### setInterval()

The `window.setInterval()` method works in a similar way to `window.setTimeout()`, except that it will repeatedly invoke the callback function after every given number of milliseconds.

```javaScript
const summon = window.setInterval(chant,1000);
```

#### requestAnimationFrame

This method of the window object works in much the same way as the window.setInterval() method, although it has a number of improvements to optimize its performance. These include making the most of the browser’s built-in graphics-handling capabilities, and not running the animation when the tab is inactive, resulting in a much smoother performance. 

```javaScript
const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

```

#### Ajax(The Fetch API)
The Fetch API provides a global `fetch()` method that only has one mandatory argument, which is the URL of the resource you wish to fetch. A very basic example would look something like the following piece of code:

#### Response Interface
The Fetch API introduced the Response interface that deals with the object that’s returned when the promise is fulfilled. Response objects have a number of properties and methods that allow us to process the response effectively.

```javaScript
const url = 'https:example.com/data';

fetch(url)
.then((response) => {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )
```

#### More Code Example:

```javaScript
function sayHello(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`;
}

sayHello.call(clark, 'How do you do');
sayHello.call(bruce);

function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

login(userName, function (error, user) {
  if (error) {
    throw error;
  } else {
    getPlayerInfo(user.id, function (error, info) {
      if (error) {
        throw error;
      } else {
        loadGame(info, function (error, game) {
          if (error) {
            throw error;
          } else {
            // code to run game
          }
        });
      }
    });
  }
});
```
