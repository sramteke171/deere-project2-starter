console.log("js working");

let sofaCoord = document.getElementById("sofa").coords;
let imageDiv = document.createElement("div");
let transparentDiv = document.querySelector(".transparentBox");
let imgAll = document.querySelectorAll(".allSofaImg");

console.log(sofaCoord);

let imgSrc = "";
for (let i = 0; i < imgAll.length; i++) {
  imgAll[i].addEventListener("click", () => {
    imgSrc = imgAll[i].getAttribute("src");
  });
}

let displayItem = () => {
  //create img, add class to img, then add img to newly created DIV(imgDiv)
  let img = document.createElement("img");
  img.classList.add("img");

  console.log(imgSrc);
  img.src = imgSrc;

  img.style.height = "120px";
  img.style.width = "170px";

  imageDiv.appendChild(img);
  transparentDiv.appendChild(imageDiv);
};

displayItem();
