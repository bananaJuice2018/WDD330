# Week3 Study Notes

---

Week3, I go through the following:

Object Method: this

chaper5: Objects

chaper6: Document Object Model

Chaper7: Events

---

### Javascript Object

In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

The key of a property can be a string, a number, an array, and even a function.

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
```

The person `object` has two properties `firstName` and `lastName` with the corresponding values `John` and `Doe`. We use a comma `( ),)` to separate multiple properties.

### Object methods, "this"
```javascript
let user = {
  name: "John",
  age: 30,
  
  sayHi() {
    alert(this.name);
  }
};
```
If there's `this` inside a function, it expects to be called in an object content.
