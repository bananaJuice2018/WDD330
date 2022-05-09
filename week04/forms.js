const form = document.forms['hero'];

//The event listener will invoke the makeHero() function when the form is submitted. 
form.addEventListener('submit', makeHero, false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}







// // Form object contains two controls: an input element and a button element.
// // the input field has a name attribute of `searchInput`
// const input = form.searchInput;

// form.addEventListener ('submit', search, false);

// function search() {
//     alert(' Form Submitted');
// }


