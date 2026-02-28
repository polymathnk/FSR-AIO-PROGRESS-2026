function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Error: something went wrong");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const moviesPromise = getData('./0. Movies.json');
const actorsPromise = getData('./0. Actors.json');
const directorsPromise = getData('./0. Directors.json');

const dummyPromise = new Promise ((resolve, reject)=>{
    resolve('Hello world');
})

Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error)
    })