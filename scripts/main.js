var myImage1 = document.querySelector("img[class='front-image']");
var myImage2 = document.querySelector("img[class='arrow']");
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage2.onclick = function() {
    var mySrc = myImage1.getAttribute('src');
    if(mySrc === 'images/tool-logo.png') {
      myImage1.setAttribute ('src','images/tool-concert.jpg');
    } else {
      myImage1.setAttribute ('src','images/tool-logo.png');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ', do you know Tool?';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + ', do you know Tool?';
}

myButton.onclick = function() {
  setUserName();
}