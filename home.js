// const gifs = ["chapter1.gif", "chapter2.gif", "chapter3.gif", "chapter4.gif", "chapter5.gif", "chapter6.gif", "chapter7.gif"];

// function addGif (){
//    const chapter=document.getElementById("chapter1");
// chapter.innerHTML=
// }

let chapter1 = document.querySelector("#chapter1 img");
let chapter2 = document.querySelector("#chapter2 img");
let chapter3 = document.querySelector("#chapter3 img");
let chapter4 = document.querySelector("#chapter4 img");
let chapter5 = document.querySelector("#chapter5 img");
let chapter6 = document.querySelector("#chapter6 img");
let chapter7 = document.querySelector("#chapter7 img");
console.log(chapter1);
const credit = document.getElementById("credit");

credit.onmouseover = function () {
  chapter1.src = "assets/box1.gif";
  chapter2.src = "assets/box2.gif";
  chapter3.src = "assets/box3.gif";
  chapter4.src = "assets/box4.gif";
  chapter5.src = "assets/box5.gif";
  chapter6.src = "assets/box6.gif";
  chapter7.src = "assets/box7.gif";
  chapter1.style.display = "block";
  chapter2.style.display = "block";
  chapter3.style.display = "block";
  chapter4.style.display = "block";
  chapter5.style.display = "block";
  chapter6.style.display = "block";
  chapter7.style.display = "block";
};

credit.onmouseout = function () {
  chapter1.src = "assets/chapter1.gif";
  chapter2.src = "assets/chapter2.gif";
  chapter3.src = "assets/chapter3.gif";
  chapter4.src = "assets/chapter4.gif";
  chapter5.src = "assets/chapter5.gif";
  chapter6.src = "assets/chapter6.gif";
  chapter7.src = "assets/chapter7.gif";
  chapter1.style.display = "none";
  chapter2.style.display = "none";
  chapter3.style.display = "none";
  chapter4.style.display = "none";
  chapter5.style.display = "none";
  chapter6.style.display = "none";
  chapter7.style.display = "none";
};
