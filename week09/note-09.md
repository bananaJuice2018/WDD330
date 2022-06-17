# Week9 Study Notes and Reports

---

Week9, I go through the following:

Ch9: The Window Object

Ch12: HTML APIs

### Notes:

A browser supports the Web Storage API, the `window` object will have a property called `localStorage`, which is a native object with a number of properties and methods used to store data. The information is saved in the form of key-value pairs, and the values can only be strings. There is also a `sessionStorage` object that works in the same way, although the data is only saved for the current session.

**The Web Storage API:**
- Web applications can locally store data within the browser on the client side. It stores data in the form of key/value pair on the browser. Web Storage sometimes also known as DOM storage.

- Information stored is not shared with the server on every request.

- Information is available in multiple windows of the browser (but only if the domain is the same).


``` JavaScript
// Storing Object
const usesInfo = {
  name: "John",
  age: 34,
};
localStorage.setItem("user-info", JSON.stringify(userInfo));

// Storing Array
const languages = ["Python", "React", "Javascript", "Go"];
localStorage.setItem("languages", JSON.stringify(languages));
```

**Comparison:**
|   Storage	|  Limit 	|  Data-type Supported 	|  Expiration 	|   	|
|---	|---	|---	|---	|---	|
| Local Storage  	| 5MB per app per browser  	| String only, as key-value pairs  	|  Never 	|   	|
|  Session Storage 	|  Limited only by system memory 	| String only, as key-value pairs  	| After Tab Closed  	|   	|
|  Cookies 	|  at least 4096 bytes per cookie 	| text file (not sure)   	| It has Expiration Date (manually)  	|   	|

**Session Storage:**

Session storage is a popular choice when it comes to storing data on a browser. It enables developers to save and retrieve different values. Unlike local storage, session storage only keeps data for a particular session. The data is cleared once the user closes the browser window.


``` JavaScript
// Storing Key-Value Pairs
sessionStorage.setItem("day", "monday");

// Storing Object
const userInfo = {
  name: "John",
  age: 34,
};
sessionStorage.setItem("user-info", JSON.stringify(userInfo));

// Storing Array
const languages = ["Python", "React", "Javascript", "Go"];
sessionStorage.setItem("languages", JSON.stringify(languages));
```


### Code Example

```javaScript
function playSound(e) {
  var keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
  console.log(keys.includes(e.keyCode));
  //If the key is a valid one
  if (keys.includes(e.keyCode)) {
    index = keys.indexOf(e.keyCode);
    times[index]++;
    if (times[index] == 10) {
      times[index] = 0;
    }
    let element = document.querySelector(`[data-key="${e.keyCode}"]`);
    element.style.position = "relative";
    element.style.left = "0px";
    element.style.top = "0px";
    element.style.top = parseInt(element.style.top) + 10 * times[index] + "px";
    console.log(times);
    let audio = document.querySelector("#audio" + e.keyCode);
    audio.currentTime = 0;
    console.dir(audio);
    audio.play();
  }
}

```
