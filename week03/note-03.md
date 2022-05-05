# Week3 Study Notes

---

Week3, I go through the following:

Object Method: this

chaper5: Objects

chaper6: Document Object Model

Chaper7: Events

---
### JavaScript Array
In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index.

#### Creating JavaScript arrays:
```javaScript
let scores = new Array();
```

#### Getting the array size:
```javaScript
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
```
`mountains.length // 3` -> It returns the number of elements which is 3.

#### Basic operations on arrays
To add an element to the end of an array, you use the `push()` method:
```javaScript
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');

console.log(seas); 
```
To remove an element from the end of an array, you use the pop() method:
```javaScript
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const lastElement = seas.pop();
console.log(lastElement); 
```


### JavaScript Object

In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

The key of a property can be a string, a number, an array, and even a function.

```javaScript
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
```

The person `object` has two properties `firstName` and `lastName` with the corresponding values `John` and `Doe`. We use a comma `( ),)` to separate multiple properties.


### Object methods, "this"
```javaScript
let user = {
  name: "John",
  age: 30,
  
  sayHi() {
    alert(this.name);
  }
};
```
If there's `this` inside a function, it expects to be called in an object content.

### JavaScript Array.prototype.filter(), Array.prototype.map(), Array.prototype.sort()




### Reference of notes:
https://www.javascripttutorial.net/javascript-array/
https://www.javascripttutorial.net/javascript-array-sort/  
https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know





