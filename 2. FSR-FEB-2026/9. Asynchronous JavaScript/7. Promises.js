// Create a promise
const promise = new Promise((resolve, reject) =>{
    // Do some async task
    setTimeout(()=>{
        console.log('Async task is completed');
        resolve();
    }, 1000);
})

// promise.then(()=>{
//     console.log('Promise cosumed...');
// })

const getUser = new Promise((resolve, reject) =>{
    // Do some async task
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({name: 'John Doe', age: 30});
        } else{
            reject('Error: something went wrong!')
        }

    }, 1000);
})

// catching the rror you provides in rejected state of promise
getUser
.then((user)=> console.log(user))
.catch((error)=> console.log(error))
.finally(()=>console.log('Pomise has been resolved or rejeected'));

console.log('Hello from gloaball scope');