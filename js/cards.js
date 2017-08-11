let createBtn = document.getElementById("createCardBtn");
let inputText = document.getElementById("inputField");
let makeCard = document.getElementById("createCard");

createBtn.addEventListener("click", createCard);
function createCard() {
  let keyedInput = inputText.value;
  newCard = document.createElement("div")
  newCard.innerHTML = `<p class='card'>${keyedInput}</p>`;
  makeCard.append(newCard);

  var cardDeleteBtn = document.createElement("button");
  var buttonText = document.createTextNode("Delete");

  //delete button with text inside
  cardDeleteBtn.append(buttonText);
  newCard.append(cardDeleteBtn);
  cardDeleteBtn.addEventListener("click", deleteCard);

  function deleteCard() {
    let card = this.parentNode;
    makeCard.removeChild(card);
  }
};


