// Mantiqiy operator: AND (&&), OR (||), NOT (!)

var elCheckSun = document.querySelector("#sun");
var elCheckWind = document.querySelector("#wind");
var elCheckSleep = document.querySelector("#sleep");
var elCheckMood = document.querySelector("#mood");

var elBtnGo = document.querySelector(".go-study");
var elOutStudy = document.querySelector(".study");
var message = "";

elBtnGo.addEventListener("click", function (e) {
  e.preventDefault();
  var sun = elCheckSun.checked;
  var wind = elCheckWind.checked;
  var sleep = elCheckSleep.checked;
  var mood = elCheckMood.checked;

  if ((sun && !wind && !sleep) || (sun && !mood && !sleep)) {
    var newImg = document.createElement("img");
    newImg.src = "https://picsum.photos/200/300";
    console.log(newImg);
    document.body.append(newImg);
    message = "O'qishga Marsh!!!!";
  } else {
    message = "Uxlashda davom etish mumkin";
  }

  elOutStudy.textContent = message;
})