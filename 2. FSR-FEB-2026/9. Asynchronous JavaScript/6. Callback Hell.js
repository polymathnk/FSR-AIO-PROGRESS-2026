function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", endpoint);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };
  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

// they will be unordered untill you should pass a callback function and this type of traingle is called callback hell
getData("./0. Movies.json", (data) => {
  console.log(data);
  getData("./0. Actors.json", (data) => {
    console.log(data);
    getData("./0. Directors.json", (data) => {
      console.log(data);
    });
  });
});
// getData('./0. Actors.json');
// getData('./0. Directors.json');
