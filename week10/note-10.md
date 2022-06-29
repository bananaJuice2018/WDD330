# Week10 Study Notes and Reports

---

Week10, I go through the following:

MDN: Validating forms

MDN: Using Fetch

### Notes:

#### Validating Forms
When we submit a form including entering a phone *number, typing a password, entering an email address and etc. It called **form validation**. When we enter data, the browser and/or the web server will check to see that the data is in the correct format and within the constraints set by the application. Validation done in the browser is called client-side validation, while validation done on the server is called server-side validation.

* `required`: Specifies whether a form field needs to be filled in before the form can be submitted.

* `minlength` and `maxlength`: Specifies the minimum and maximum length of textual data (strings)

* `min` and `max`: Specifies the minimum and maximum values of numerical input types

* type: Specifies whether the data needs to be a number, an email address, or some other specific preset type.

* pattern: Specifies a regular expression that defines a pattern the entered data needs to follow.

#### Fetch API
The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

If you have worked with `XMLHttpRequest` (XHR) object, the Fetch API can perform all the tasks as the `XHR` object does.

In addition, the Fetch API is much simpler and cleaner. It uses the Promise to deliver more flexible features to make requests to servers from the web browsers.

The `fetch()` method is available in the global scope that instructs the web browsers to send a request to a URL.

### Code Example

#### Reading the Response 

```javaScript
fetch('/readme.txt')
    .then(response => response.text())
    .then(data => console.log(data));

async function fetchText() {
    let response = await fetch('/readme.txt');
    let data = await response.text();
    console.log(data);
}
```

#### Handling the status codes of the Response

```javaScript
async function fetchText() {
    let response = await fetch('/readme.txt');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        // handle data
    }
}
```