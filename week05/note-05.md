# Week5 Study Notes and Reports

---

Week5, I go through the following:

Ch10: Testing and Debugging

Pratice coding excise sandbox from ch8

Lastly, begin to work on next week toDo list challenge.

---

### Testing and Debugging

The process of searching for the errors and finding them is called debugging. Debugging JavaScript code is difficult because the browser doesn't show any error message or any indication of the error's location. Fortunately, all modern browsers come with a built-in JavaScript debugger we should take advantage of.

It makes your javascript code better and is also a good software engineering practice to avoid throwing errors on someone else's code.

#### Strict Mode

ECMAScript 5 introduced a strict mode that produces more exceptions and warnings and prohibits the use of some deprecated features. The strict way considers coding practices that were previously accepted as just being 'poor style' as actual errors.

Increasing the chance of errors might seem like a bad idea, but it's much better to spot errors early on rather than have them cause problems later. Writing code in strict mode can also help improve its clarity and speed since it follows conventions and will throw exceptions if any sloppy code practices are used.

```javaScript
'use strict';

e = 2.718;
<< ReferenceError: e is not defined

(function() {
    'use strict';

    // All your code would go inside this function

}());

```

#### Throwing Exceptions

The debugger keyword is used to send the console information. It also provides a breakpoint. Throwing errors can be done with native error objects, but we can also use the throw statement to create our errors. Throwing customized errors is more ideal than non-ideal responses like NaN.`Try`, `Catch`, `Finally` blocks are used to throw erros and handle them gracefully.

#### Debugging Tools in JavaScript

There are a few ways available to us but I personally will stick to Chrome DevTools since I have been using in all my programs and are familiar with it. Google Chrome DevTools is a set of profiling, web authoring, and debugging tools. we can use these tools to quickly and efficiently debug JavaScript code right from the Chrome browser (they are inbuilt). You get to interact with HTML, CSS, and JavaScript; all from the browser by merely clicking the Inspect Element button.

Link: https://developer.chrome.com/docs/devtools/

#### Test Driven Development

We start to writing automated tests, and by writing tests before we write the code. Here’s the steps:

1. Think about what your code is supposed to do.
2. Write tests specifying what you expect your code to do.
3. Write the code to do it.
4. See if the code works by running it against the tests you wrote.

For example, I can write the `add` function. When we're finished, we can run the test code and it will tell us whether our function passes all the tests:

```javaScript
expect(add(1, 1)).toEqual(2); // 2 of 3 tests passed. 1 test failed: Expected add(-4,5) to return 1, but got -9.
expect(add(5, 7)).toEqual(12); // 1 of 3 tests passed. 2 tests failed:Expected add(1,1) to return 2, but got 0 Expected add(5,7) to return 12, but got -2.
expect(add(-4, 5)).toEqual(1); //  3 of 3 tests passed.
```

#### Testing in Javascript Code Example:

```javaScript
"use strict";

function factorsOf(n) {
  if (Number.isNaN(Number(n))) {
    throw new RangeError("Argument Error: Value must be an integer");
  }
  if (n < 0) {
    throw new RangeError("Argument Error: Number must be positive");
  }
  if (!Number.isInteger(n)) {
    throw new RangeError("Argument Error: Number must be an integer");
  }
  const factors = [];
  for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
    if (n % i === 0) {
      factors.push(i, n / i);
    }
  }
  return factors.sort((a, b) => a - b);
}

function isPrime(n) {
  try {
    return factorsOf(n).length === 2;
  } catch (error) {
    return false;
  }
}

test("factors of 12", () => {
  expect(factorsOf(12)).toEqual([1, 2, 3, 4, 6, 12]);
});

test("2 is prime", () => {
  expect(isPrime(2)).toBe(true);
});

test("10 is not prime", () => {
  expect(isPrime(10)).not.toBe(true);
});

it("should throw an exception for non-numerical data", () => {
  expect(() => {
    factorsOf("twelve");
  }).toThrow();
});

//added Closing parenthesis because it was not closed and now it's not working. Not sure what the issue is.
//Was able to sort it out. I found the code in GitHUb and it was in a slightly different form. I basically added in a second arrow function that wasn't in the book. not sure why that solved the issue.

it("should throw an exception for negative numbers", () => {
  expect(() => factorsOf(-2)).toThrow();
});

it("should throw an exception for non-integer numbers", () => {
  expect(() => factorsOf(3.14159)).toThrow();
});

test("non-numerical data returns not prime", () => {
  expect(isPrime("two")).toBe(false);
});

test("non-integer numbers return not prime", () => {
  expect(isPrime(1.2)).toBe(false);
});

test("negative numbers return not prime", () => {
  expect(isPrime(-1)).toBe(false);
});

```
