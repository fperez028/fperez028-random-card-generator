window.onload = function() {
  
  function cardRandomizer(){
    const suitsArray = ["♦","♥","♠","♣"];
    const valuesArray = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    let upperSuitElement = document.querySelector(".upperSuit");
    let lowerSuitElement = document.querySelector(".lowerSuit");
    let cardValueElement = document.querySelector(".cardValue");
    let randomSuit = suitsArray[Math.floor(Math.random()*4)];
    let randomCardValue = valuesArray[Math.floor(Math.random()*12)];

    upperSuitElement.innerHTML = randomSuit;
    lowerSuitElement.innerHTML = randomSuit;
    cardValueElement.innerHTML = randomCardValue;

    if (randomSuit === "♦" || randomSuit === "♥") {
      upperSuitElement.style.color = "red";
      lowerSuitElement.style.color = "red";
      cardValueElement.style.color = "red";
    } else {
      upperSuitElement.style.color = "black";
      lowerSuitElement.style.color = "black";
      cardValueElement.style.color = "black";
    }
  }

  cardRandomizer();

  const button = document.querySelector(".newCardButton");
  button.addEventListener("click", function() {
    cardRandomizer();
  });
};