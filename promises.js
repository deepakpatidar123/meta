const posts=[
    {title:'Post one', body:'This is post one', lastactivitytime: new Date()},
    {title:'Post two', body:'This is post two', lastactivitytime: new Date() }
];

function getPosts(){
    setTimeout(()=>{
      let output='';
      posts.forEach((post, index)=>{
        output += `<li>${post.title} post last updated at ${post.lastactivitytime}</li>`; 
      })
      document.body.innerHTML=output;
    },1000)
}

function createPost(post){
  //updateLastUserActivityTime(posts);
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        posts.push(post);

        const error=false;
        if(!error){
            resolve();
        } else {
            reject('Error: Somthing went wrong');
        }

    }, 2000)
   })

}

function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const lastelement = posts.pop()
                resolve(lastelement)
            } else {
                reject('Array is empty now');
        }
        }, 1000)
    })
}


createPost({title:'Post three', body:'This is post three', lastactivitytime: new Date()})
.then(()=>{
    getPosts()
    deletePost().then((deletedelement)=>{
    console.log(deletedelement)
    getPosts();
    deletePost().then(()=>{
        getPosts();
        deletePost().then(()=>{
            getPosts();
          deletePost().then(()=>{
            getPosts();

            deletePost().then(()=>{})
            .catch((err)=>{
                console.log('inside catch block',err)
            })
        })
        })
    })
  })
})
createPost({title: "Post four",body: "This is post four",lastactivitytime: new Date(),
  })
   // .then(getPost)
    //.catch((error) => console.log(error));

  /**setTimeout(() => {
    deletePost()
      .then(getPost)
      .catch((error) => console.log(error));
  }, 1000); */
 //.catch(err => console.log(err));
 //Promise all
const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 2000, "GoodBye");
});

 Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));
 function updateLastUserActivityTime(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        post.lastactivitytime=new Date();
        resolve();
      }, 1000);
    });
  }

  Promise.all([createPost(), updateLastUserActivityTime()]).then(
    posts.forEach((element) => {
      console.log(element);
    })
  );

  deletePost()
    .then(getPosts)
    .catch((error) => console.log(error));
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]);
  }

    

