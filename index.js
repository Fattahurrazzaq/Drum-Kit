// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);
// document.querySelectorAll("button")[5].addEventListener("click", handleClick);
// document.querySelectorAll("button")[6].addEventListener("click", handleClick);

//or

// for(var i = 0; i<7 ; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }

//or

// var numberOfButtons = document.querySelectorAll(".drum").length;
//
// for(var i = 0; i<numberOfButtons; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }
//
// function handleClick() {
//   alert("i got click");
// }

//console.log(this); berkaitan dengan addEventListener
//console.log(this.innerHTML);

// var numberOfButtons = document.querySelectorAll(".drum").length;
//
// for(var i = 0; i<numberOfButtons; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }
//
// function handleClick() {
//     var audio1 = new Audio("sounds/crash.mp3");
//     audio1.play();
// }

//------change the colour into white--------------
// var numberOfButtons = document.querySelectorAll(".drum").length;
//
// for(var i = 0; i<numberOfButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//
//     this.style.color = "white";
//
//   });
// }
// -------------------------------------------------

var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", soundChoose);
}

function soundChoose() {
var soundPlayhe = this.innerHTML;

  switch (soundPlayhe) {
    case "w":
      var sound1 = new Audio("sounds/crash.mp3");
      sound1.play();
      break;

    case "a":
      var sound2 = new Audio("sounds/kick-bass.mp3");
      sound2.play();
      break;

    case "s":
      var sound3 = new Audio("sounds/snare.mp3");
      sound3.play();
      break;

    case "d":
      var sound4 = new Audio("sounds/tom-1.mp3");
      sound4.play();
      break;

    case "j":
      var sound5 = new Audio("sounds/tom-2.mp3");
      sound5.play();
      break;

    case "k":
      var sound6 = new Audio("sounds/tom-3.mp3");
      sound6.play();
      break;

    case "l":
      var sound7 = new Audio("sounds/tom-4.mp3");
      sound7.play();
      break;

    default: console.log(soundChoose);
  }
}

document.addEventListener("keydown", function(keyCode){
    var keyName = keyCode.key;

    switch (keyName) {
      case "w":
        var sound1 = new Audio("sounds/crash.mp3");
        sound1.play();
        break;

      case "a":
        var sound2 = new Audio("sounds/kick-bass.mp3");
        sound2.play();
        break;

      case "s":
        var sound3 = new Audio("sounds/snare.mp3");
        sound3.play();
        break;

      case "d":
        var sound4 = new Audio("sounds/tom-1.mp3");
        sound4.play();
        break;

      case "j":
        var sound5 = new Audio("sounds/tom-2.mp3");
        sound5.play();
        break;

      case "k":
        var sound6 = new Audio("sounds/tom-3.mp3");
        sound6.play();
        break;

      case "l":
        var sound7 = new Audio("sounds/tom-4.mp3");
        sound7.play();
        break;

      default: console.log(soundChoose);
    }

});
