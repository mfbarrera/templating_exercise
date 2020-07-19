import { nodeImageComp } from "./image.js";
import { templatedImageComp } from "./image.js";

/**
 *
 * @param {object} data
 * return an HTML section with a title, paragraph and a list of images
 */
const nodeGalleryComp = (data) => {
  const section = document.createElement('SECTION');
  const wrapper = document.createElement('DIV');
  const title = document.createElement('H1');
  const heading = document.createElement('P');
  const content = document.createElement('DIV');
  const images = data.images;

  title.textContent = data.title;
  heading.textContent = data.heading;

  images.forEach(image => {
    const galleryItem = document.createElement('DIV');
    const imageNode = nodeImageComp(image, 'gallery__image');
    galleryItem.classList.add('gallery__item');
    galleryItem.appendChild(imageNode);
    content.appendChild(galleryItem);
  });

  section.classList.add('gallery');
  title.classList.add('gallery__title');
  heading.classList.add('gallery__heading');
  content.classList.add('gallery__content');
  if (data.classes) section.classList.add(data.classes);
  if (data.theme) section.classList.add(`gallery--${data.theme}`);
  wrapper.appendChild(title);
  wrapper.appendChild(heading);
  wrapper.appendChild(content);
  section.appendChild(wrapper);

  return section;
}

/**
 *
 * @param {object} data
 * return an HTML section with a title, paragraph and a list of images
 */
const templatedGalleryComp = (data) => {

  const section = document.createElement('SECTION');
  section.classList.add('gallery');
  if (data.classes) section.classList.add(data.classes);
  if (data.theme) section.classList.add(`gallery--${data.theme}`);
  let sectionContent =`
  <div>
    <h1 class="gallery__title">${data.title}</h1>
    <p class="gallery__heading">${data.heading}</p>
    <div class="gallery__content">
  `
  data.images.forEach(image => {
    sectionContent += `<div class="gallery__item"> ${templatedImageComp(image, 'gallery__image')}</div>`;
  });

  sectionContent += `
    </div>
  </div>`;

  section.innerHTML = sectionContent;
  return section;
}


export { nodeGalleryComp, templatedGalleryComp }