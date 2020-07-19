const pageData = {
  sections: [
    {
      component: "temp_gallery",
      title: "gallery",
      heading: "this is a gallery component built with templated strings",
      images: [
        {
          src: './assets/cat.jpg',
          alt: 'cat'
        },
        {
          src: 'assets/dog.jpg',
          alt: 'dog'
        },
        {
          src: './assets/bird.jpg',
          alt: 'bird'
        }
      ]
    },
    {
      component: "textImageBlock",
      title: "carrousel",
      text: "this is a test content",
      classes: "text_image_block--inverted",
      image: {
        src: './assets/cat.jpg',
        alt: 'cat'
      }
    },
    {
      component: "node_gallery",
      title: "gallery",
      theme: "dark",
      heading: "this is a gallery component built using nodes",
      images: [
        {
          src: './assets/cat.jpg',
          alt: 'cat'
        },
        {
          src: 'assets/dog.jpg',
          alt: 'dog'
        },
        {
          src: './assets/bird.jpg',
          alt: 'bird'
        }
      ]
    },
    {
      component: "textImageBlock",
      title: "carrousel",
      text: "this is a test content",
      theme: "dark",
      image: {
        src: './assets/cat.jpg',
        alt: 'cat'
      }
    },
    {
      component: "myuser",
      displayName: "Fernando Barrera Ramirez",
      userName: "@punkdesign",
      image: {
        src: './assets/Fer.jpg',
        alt: 'fernando'
      },
      role: "developer",
      socialMedia: [
        {
          name: "Github",
          icon: "",
          link: "https://github.com/mfbarrera"
        },
        {
          name: "Twitter",
          icon: "",
          link: "https://www.twiter.com/PUNK_design/"
        },
        {
          name: "Instagram",
          icon: "",
          link: "https://www.instagram.com/PUNK_design/"
        }
      ],
    },
  ]  
}

export { pageData };