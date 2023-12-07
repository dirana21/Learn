var myHeading = document.querySelector("h1");
var myHtml = document.querySelector("html");
var myImage = document.querySelector("img");
var myButton = document.querySelector("button");
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if(mySrc === "images/PoeImage.jpg"){
    myImage.setAttribute("src", "images/D4Iamge.jpg");
  }
  else{
    myImage.setAttribute("src", "images/PoeImage.jpg");
  }
};

function setUsername() {
  var myName = prompt("Please enter your name."); // promt - Диалоговое окно, грубо говоря Console.ReadLine();
  localStorage.setItem("name", myName); // "name" = айди, myName = promt который ввел User
  myHeading.textContent = "Hello exile, are your name?" + myName; 
}
if(!localStorage.getItem("name")) { // То есть идет проверка существует ли данные в айди "name"
  setUsername();
}
else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello exile, are your name?" + storedName;
}
myButton.onclick = function () {
  setUsername();
}