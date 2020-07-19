const studentCustomComponent = (data) => {

    const press = document.createElement('SECTION');
    press.classList.add("press_container")
    let presscontent = `
    <div class="press_header">
    <h1>${data.displayName}</h1>
    <p>${data.userName}</p>
    <div clas="press_social">
    <div class="fab fa-github-square">Github</div>
    <div class="fab fa-twitter-square">twitter</div>
    <div class="fab fa-instagram">instagram</div>
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