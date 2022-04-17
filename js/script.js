var elBanana = document.querySelector("#banana");
var elLatuc = document.querySelector("#latuc");
var elSugar = document.querySelector("#sugar");
var elMeat = document.querySelector("#meat");
var elBread = document.querySelector("#bread");
var elCream = document.querySelector("#cream");

var elBuy = document.querySelector("#buy");
var elClearBtn = document.querySelector(".clear-btn");
var elOutputP = document.querySelector("#output-p");
var elOutput = document.querySelector("#output");
var elList = document.querySelector("#list");

var message = "";
// var elUserMoney = document.querySelector("#user-money");

elBuy.addEventListener("click", (e) => {
    e.preventDefault();

    var banana = elBanana.checked;
    var latuc = elLatuc.checked;
    var sugar = elSugar.checked;
    var meat = elMeat.checked;
    var cream = elCream.checked;
    var bread = elBread.checked;
    
    if ((banana && sugar && cream) || (banana && cream)) {
        var icecreamImg = document.createElement("img");
        icecreamImg.src = "./img/banana.png";
        elOutput.append(icecreamImg);
        elOutput.append(body);
        message = "Uraa today we will have an icecream ";
    }else if ((meat && bread && latuc) || (bread && meat)) {
        var burger = document.createElement("img");
        burger.src = "./img/burger.png";
        elOutput.append(burger);
        elOutput.append(body);
        message = "Uraa today we will have a burger";
    }else if ((meat && bread && latuc) && (banana && sugar && cream)) {
        message = "Thats awesome we will have both icecream and burger too"
    }else (message = "You have mixeed up everything lets have only one")

    elOutputP.textContent = message;
})

elClearBtn.addEventListener("click", (evt) =>
{
  evt.preventDefault();
  elOutput.innerHTML = ""
  elOutputClass.innerHTML = ""
})