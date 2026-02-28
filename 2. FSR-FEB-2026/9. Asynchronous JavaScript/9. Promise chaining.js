const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({name: 'John Doe', age: 30});
        } else{
            reject('Error: something went wrong!')
        }

    }, 1000);
})

promise
.then((user)=> {
    // whatever we are ruruning in this.then can be  access in another this.then
    return user.name
})
    //  for example here  we are accessibg the user.name returned by promise.then inot another .then
.then((name)=>{
    console.log(name);
    return name.length;
})
.then((namelength)=>{
    console.log(namelength);
})

.catch((error)=> {
    console.log(error);
});