# Javascript templating and DOM practice

This is a simple exercise to get familiar with creating reusable templates with JS and handling data.

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

  this component reuses the image component inside it to display a title, intro paragraph and all the images passed to it.

- default.js: this file contains the _`defaultComp`_ functions which outputs the data provided in a JSON style if the requested component is not present.

## Exercise

- Implement the _`textImageBlock`_ component.
  - It must contain an eyebrow title (small title, generally smaller than the text contents)
  - It must contain a content paragraph
  - It must contain an image aligned to the right of the content text
  - An _`inverted`_ variation should be supported, this variation should place the image to the left and the text to the right.
  - A dark theme should be created.

- Implement the _`studentCustomComponent`_

  this component name is just a placeholder, create your own component name and update it in _`data.js`_ and define the structure you prefer for it, both in data and layout.

Note both components design is free, but you CAN NOT skip doing the `css`.

Have fun!
