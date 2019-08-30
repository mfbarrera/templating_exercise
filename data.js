const pageData = {
  sections: [
    {
      component: "temp_gallery",
      title: "gallery",
      theme: "dark",
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
      component: "studentCustomComponent",
      contents: "this is a student made test component"
    },
  ],
  listeners: [
    //
  ]
}

export { pageData };