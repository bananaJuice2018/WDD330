# Week4 Study Notes

---

Week4, I go through the following:

Ch8: Forms
Cha12: Object-Oriented Programming
Cha15: Modern JavaScript Programming.

---

### JavaScript Forms

Forms are made up of a `form` element that contains form controls such as input fields, select menus and buttons. These input fields can be populated with information that is processed once the form has been submitted.

Currently, it is more common, to process the information in a form on the 'front end' before it is sent to the server using JavaScript.

```HTML
<!doctype html>
<html lang='en'>
<head>
    <meta charset='utf-8'>
    <title>Search</title>
</head>
<body>
    <!-- a name attribute of search, two controls, input, button to submit.  
    The action attribute is the URL which processed in the server side. -->
    <form name='search' action='/search'>   
        <input name='searchInput'>
        <button type='submit'>Search</button>
    </form>
<script src='main.js'></script>
</body>
</html>
```

#### Accessing Form Elements
```javaScript
const form = document.forms['search']; // The bracket can reference to name and id.
```

```javaScript
const input = form['serachInput']; // Be consistency.
```
FYI, don't use reset buttons. It considers poor usability. And the `form.action` property can be used to set the action attribute of a form, so it’s sent to a different URL to be processed on the server:

```javaScript
form.action = '/an/other.url'
```

#### Submitting a Form
```javaScript
form.addEventListener ('submit', search, false);
```

