function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
            reject('Error: something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

getData("./0. Movies.json")
.then((movies) => {
  console.log(movies);
  return getData('./0. Actors.json');
})

.then((actors)=>{
    console.log(actors);
    return getData('./0. Directors.json');
})

.then((directors)=>{
    console.log(directors);
})