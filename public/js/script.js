console.log("js working");

// let sofaCoord = document.getElementById("sofa").coords;
let imageDiv = document.createElement("div");
let transparentDiv = document.querySelector(".transparentBox");
let imgAll1 = document.querySelectorAll(".allSofaImg");

//console.log(sofaCoord);

let displayItem1 = () => {
  //create img, add class to img, then add img to newly created DIV(imgDiv)
  let img = document.createElement("img");
  img.classList.add("img");

  console.log(imgSrc);
  img.src = imgSrc;

  img.style.height = "120px";
  img.style.width = "170px";

  console.log(img);
  imageDiv.appendChild(img);
  transparentDiv.appendChild(imageDiv);
};

let imgSrc1 = "";
for (let i = 0; i < imgAll.length; i++) {
  console.log("inside for loop");
  imgAll1[i].addEventListener("click", () => {
    imgSrc1 = imgAll[i].getAttribute("src");
    console.log("imgsrc is", imgSrc1);
    // alert(imgSrc);
    // displayItem(imgSrc);
    displayItem1();
  });
}

// <-- %
// let displayItem = () => {
// //create img, add class to img, then add img to newly created DIV(imgDiv)
// let img = document.createElement("img");
// img.classList.add("img");
// console.log(imgSrc);
// img.src = imgSrc;
// img.style.height = "120px";
// img.style.width = "170px";
// console.log(img);
// imageDiv.appendChild(img);
// transparentDiv.appendChild(imageDiv); };

// let imgSrc = "";
// for (let i = 0; i < imgAll.length; i++) {
//   imgSrc = imgAll[i].getAttribute("src"); console.log("imgsrc is", imgSrc);
//   //alert(imgSrc); }

//   % -->

/* //Make the DIV element draggagle: */
dragElement(document.getElementById("div_Sofa"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "_Header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "_Header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
