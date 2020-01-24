(() => {
  // this is an IIFE -> also an implementation of the module pattern

  // always go and get the elements we're working with
  const mySpan = document.querySelector('main span'),
        myObject = document.querySelector('.svg-img');

  // where functionality goes => what we want to happen
  function toggleSelection() {
    // we want to update our UI to make it look like were making a selection
    // debugger;
    // toggle a CSS class to the elemement with JavaScript
    this.classList.toggle("selected");
    console.log(this.id);
  }

  // figure out what triggers wil drive the functionality
  mySpan.addEventListener('click', toggleSelection);
  myObject.addEventListener('click', toggleSelection);
})();
