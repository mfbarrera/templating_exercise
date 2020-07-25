const studentCustomComponent = (data) => {

    const press = document.createElement('SECTION');
    press.classList.add("press_container")
    let presscontent = `
    <div class="press_header">
    <h1>${data.displayName}</h1>
    <p>${data.userName}</p>
    <div clas="press_social">
    <a href="">
    <div class="fa fa-3x fa-github-square"></div>
    </a>
    <a href="">
    <div class="fa fa-3x fa-twitter-square"></div>
    </a>
    <a href="">
    <div class="fa fa-3x fa-instagram"></div>
    </a>
    </div>
    </div>
    <div class="press_image">
    <img src="${data.image.src}" alt="${data.image.alt}"/>
    </div>
   
    `
    press.innerHTML= presscontent;
    return press;
  }

  export { studentCustomComponent }