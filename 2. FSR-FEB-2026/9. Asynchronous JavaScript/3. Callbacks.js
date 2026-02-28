const posts = [
    {title: 'One', body: 'This  is post One'},
    {title: 'Two', body: 'This  is post Two'}
]

function createPost(post, cb){
    setTimeout(()=>{
        posts.push(post);
        cb();
    }, 2000);
}

function getPosts(){
    setTimeout(()=>{
        posts.forEach(function(post){
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        })
    }, 1000)
}

createPost({title: 'Three', body: 'This is post Three'}, getPosts);