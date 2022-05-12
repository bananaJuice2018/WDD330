// Hero project, form submmitting inputs, return JSON.

const form = document.forms["hero"];
const input = form["heroName"];

form.addEventListener("submit", heroDisplay, false);

function heroDisplay(event) {
    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form["heroName"].value; // create a name property based on the input field's value
    hero.realName = form["password"].value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}
