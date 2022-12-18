const posts = [
    { title: "Post one", body: "This is post one", lastactivitytime: new Date() },
    { title: "Post two", body: "This is post two", lastactivitytime: new Date() },
  ];

  function getPost() {

    setTimeout(() => {
      let output = "";
      posts.forEach(element => {
        output += `<li> ${element.title} post last updated at ${element.lastactivitytime}</li>`;
      });

      document.body.innerHTML = output;
    }, 1000);
  }
 // getPost()
 async function createPost(post) {
    updateLastUserActivityTime(post);

   let newPost=new Promise((resolve) => {
      setTimeout(() => {
        posts.push(post);
          resolve();
      }, 1000);
    });

    let createdPost;
    try {createdPost=await newPost;
    } catch (error) {
        createdPost="Error in creating post"
    }

  return createPost;
  // console.log(createPost)
  }


   createPost({title: "Post three",body: "This is post three",lastactivitytime: new Date()}); 



  async function deletePost() {
    let deleting= new Promise((resolve, reject) => {
      setTimeout(() => {
        let error = false;

        if (posts.length > 0) {
          posts.pop();
          resolve();
        } else {
          reject("Array is empty now");
        }
      }, 1000);
    });

    let deletedPost=await deleting;
    return deleting;
  }



    deletePost().then(getPost).catch((error)=>console.log(error)).then(deletePost).then(getPost).catch((error)=>console.log(error)).then(deletePost).then(getPost).catch((error)=>console.log(error)).then(deletePost).then(getPost).catch((error)=>console.log(error));


  createPost({title: "Post four",body: "This is post four",lastactivitytime: new Date()})
    .then(getPost)
    .catch((error) => console.log(error));



  setTimeout(() => {
    deletePost()
      .then(getPost)
      .catch((error) => console.log(error));
  }, 1000);

  //Promise all
  const promise1 = Promise.resolve("hello world");
  const promise2 = 10;
  const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 2000, "GoodBye");
  });

  //   Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));

  async function updateLastUserActivityTime(post) {
    let updating=new Promise((resolve) => {
      setTimeout(() => {
        // post.lastactivitytime=new Date();
        resolve();
      }, 1000);
    });
  let updatedPost=await updating;
  return updatedPost;
  }

  Promise.all([createPost(), updateLastUserActivityTime()]).then(
    posts.forEach((element) => {
      console.log(element);
    })
  );
