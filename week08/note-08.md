# Week8 Study Notes and Reports

---

Week8, I go through the following:

Ch8: Transforms and Transitions

## Ch12: Canvas, SVG and Drag and Drop.

### Notes:

HTML5 are a number of new semantic elements, as well as several related technologies and APIs. These additions and changes to the language have been introduced with the goal of allowing developers to build web pages that are easier to code, use, and access.

CSS3 contains just about everything that’s included in CSS2.1, the previous version of the spec. It also adds new features to help developers solve a number of presentation-related problems without resorting to scripting plugins or extra images.

The `scale(x,y)` function scales an element by the defined factors horizontally then vertically.

The `rotate()` function rotates an element around the point of origin by a specified angle value.

The `skew(x,y)` function specifies a skew along the x and y axes.

`DataURL`connect with a button and a function. Also, we can use the canvas to alter `images.getImageData()` 

CSS3 provides us with the ability to include multiple background images on any element including multiple radial and linear gradients that we can make the browser create for us. With CSS3, there’s no need to create the multitudes of JPEGs of years past, or add nonsemantic hooks to our markup.

Animation has undoubtedly been possible for some time with JavaScript, but native CSS transitions generally require less client-side processing, so they’ll usually appear smoother. On mobile devices with limited computing power, this can be a lifesaver.

To animate an element in CSS, you first create a named animation, then attach it to an element in that element’s property declaration block. Animations in themselves don’t do anything; in order to animate an element, you’ll need to associate the animation with that element.


#### Code Example

```javaScript

@-webkit-keyframes myAnimation { 
    /* put animation keyframes here */
}
@keyframes myAnimation { 
    /* put animation keyframes here */
}

function saveDrawing() {
  var canvas5 = document.getElementById("demo5");
  window.open(canvas5.toDataURL("image/png"));
}

const renderDetails = (url) => {
  fetch(url)
  .then(response => response.json())
  .then(response => {
  document.getElementById('name').innerHTML = `${response.name}`;
  document.getElementById('ability').innerHTML = `${response.abilities[0].ability.name}`;
  document.getElementById('is_hidden').innerHTML = `${response.abilities[0].is_hidden}`;
  document.getElementById('slot').innerHTML = `${response.abilities[0].slot}`;
  document.getElementById('details').classList.remove('hidden');
  console.log(response);
  })
  .catch(err => console.log(err));
```
