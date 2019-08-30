// Image component, both approaches output the same result

/**
 * Image component built using nodes
*/
const nodeImageComp = ({ src, alt = '' }, classes = '') => {
  const imgContainer = document.createElement('DIV');
  const imgNode = document.createElement('IMG');
  imgNode.src = src;
  imgNode.alt = alt;
  imgContainer.appendChild(imgNode);
  imgContainer.classList.add(classes);

  return imgContainer;
}

/**
 * Image component built using templated strings
*/
const templatedImageComp = ({ src, alt = '' }, classes = '') => {
  let imgContainer = `
  <div`
  if (classes) {
    imgContainer += ` class="${classes}"`
  }
  imgContainer += `>
    <img src="${src}" alt="${alt}"/>
  </div>
  `;
  return imgContainer;
}

export { nodeImageComp, templatedImageComp }