const imageComp = (data) => {

    const section = document.createElement('SECTION');
    section.classList.add("text_image_block")
    let newtheme = `text_image_block--${data.theme}`;
    if (data.theme) section.classList.add (newtheme);
    if (data.classes) section.classList.add(data.classes);
    let sectionContent = `
    <div>
    <h2>${data.title}</h2>
    <p>${data.text}</p>
    </div>
    <div>
    <img src="${data.image.src}" alt="${data.image.alt}"/>
    </div>`
  
    section.innerHTML= sectionContent;

    return section;
  }

  export { imageComp }