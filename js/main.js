// this is a self-invoking anonymous function
// also called an IIFE
// also called a module
(() => {
  // print ("some message");
  console.log("some message - from js");

  // find the button element on the page by its ID with JavaScript
  let theButton = document.querySelector("#myButton"),
      theHeading = document.querySelector('h1'),
      svgImage = document.querySelector("#svgGraphic");

  // this function changes the heading text
  function changeText() {
    theHeading.textContent = "Hello there from console";
  }

  function logSVG() {
    console.log(this.id);
  }

  // this creates an event when the button is clicked - changing text
  theButton.addEventListener("click", changeText);
  svgImage.addEventListener("mouseover", logSVG);
})();
