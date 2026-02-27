const logo = document.querySelector("h1");

// On single click
const onClick = () => console.log('Click Event');

// On double click
const ondoubleClick = ()=>{
  document.body.style.backgroundColor = '#0909'
}

// On right click
const onrightClick = ()=>{
  console.log("right click event")
}

// On Mouse Down
const onmouseDown = ()=>{
  console.log("Mouse Down Event")
}

// On Mouse Up
const onmouseUp = ()=>{
  console.log("Mouse Up Event")
}

// On Scrolling Wheel
const onmouseWheel = ()=>{
  console.log("Mouse Wheel Event")
}

// On Mouse Hover in
const onmousehoverIn = ()=>{
  console.log("Mouse Hover In Event")
  const header = document.querySelector('header');
  header.style.backgroundColor = '#8908'
}

// On Mouse Hover out
const onmousehoverOut = ()=>{
  console.log("Mouse Hover Out Event")
  const header = document.querySelector('header');
  header.style.backgroundColor = '#ccc'
}

// On Drag Start
const ondragStart = ()=>{
  console.log("On Drag Start Event")
}

// i

// Event Listenrs
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', ondoubleClick);
logo.addEventListener('contextmenu', onrightClick);
logo.addEventListener('mousedown', onmouseDown);
logo.addEventListener('mouseup', onmouseUp);
logo.addEventListener('wheel', onmouseWheel);
logo.addEventListener('mouseover', onmousehoverIn);
logo.addEventListener('mouseout', onmousehoverOut);
logo.addEventListener('dragstart', ondragStart);