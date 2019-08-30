# Javascript templating and DOM practice

This is a simple exersice to get familiar with creating rehusable templates with JS and handling data.

## Base structure

### _index.js_

  In this file you can find the component imports and the basic logic to render them on page load and/or fallback to a default template if the requested one is not present.

### _data.js_

  In this file you can find the page configuration data that is passed on in _`pageData`_ to the _`index.js`_ file.

### _components/_

  in this folder you can find the files which export each component.

### component reference

- image.js: this file contains the _`nodeImageComp`_ and _`templatedImageComp`_ functions which output the same component just built in different ways, one with htmlNodes and one with templated strings.

- gallery.js: this file contains the _`nodeGalleryComp`_ and _`templatedGalleryComp`_ functions which output the same component just built in different ways, one with htmlNodes and one with templated strings.

  this component rehuses the image component inside it to display a title, intro paragraph and all the images passed to it.

- default.js: this file contains the _`defaultComp`_ functions which outputs the data provided in a JSON style if the requested component is not present.
