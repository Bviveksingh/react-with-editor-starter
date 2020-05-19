const jsonData = {
    time: 123453,
    blocks: [
      {
        type: 'header',
        data: {
            level: 2,
            text: 'This is the title of the content'
        }
      },
      {
        type: 'paragraph',
        data: {
          text: 'This is paragraph and is written just for the sake of testing editor.js'
        }
      },
      {
        type: 'image',
        data: {
            file:{
                url: 'https://i.imgur.com/VJrPh83.jpg',
                caption: 'hello'
            }
        }
      },
      {
        type: 'code',
        data: {
          code: '<h2>Hello</h2>'
        }
      }
  
    ]
  };

  export default jsonData;