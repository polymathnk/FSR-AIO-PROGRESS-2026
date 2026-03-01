function creatPost(title, body) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-type": "application/json",
      token: 'ABC'
    },
  })
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data);
  })
}

creatPost({title: 'My post', body: 'This is the body'});