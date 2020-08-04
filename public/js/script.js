console.log("js working");

let sofaCoord = document.getElementById("sofa").coords;
let imageDiv = document.createElement("div");
let transparentDiv = document.querySelector(".transparentBox");

console.log(sofaCoord);

let displayItem = () => {
  let imgSrc = "/images/s1.jpg";

  //create img, add class to img, then add img to newly created DIV(imgDiv)
  let img = document.createElement("img");
  img.classList.add("image");
  img.src = "/images/s1.jpg";
  img.style.height = "120px";
  img.style.width = "170px";

  imageDiv.appendChild(img);
  transparentDiv.appendChild(imageDiv);
};

displayItem();
