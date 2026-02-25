// Using with an object
const colorObj = {
     color1: 'red',
     color2: 'green',
     color3: 'yellow',
     color4: 'blue',
     color5: 'orange'
}

for (const key in colorObj){
    console.log(key, colorObj[key]);
}

// Using with an array
const colorArray = ['red', 'blue', 'green', 'pink'];

for (const key in colorArray){
    console.log(colorArray[key]);
}
