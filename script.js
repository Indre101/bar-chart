"use strict";

let barsContainer = document.querySelector(".barsContainer");

function getNumbers() {
  return Math.floor(Math.random() * 31);
}

let visitorsNumbers = [];

for (let index = 0; index <= 40; index++) {
  visitorsNumbers.push(getNumbers());
  console.log(index);
  // index == 40 ? (index = 39) : false;
}

function createNewDivsForArrelements() {
  visitorsNumbers.forEach(e => {
    createNewElements(e);
  });
}
createNewDivsForArrelements();

function createNewElements(element) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("bar");
  newDiv.style.setProperty("--height", element);
  barsContainer.appendChild(newDiv);
}

// function addNewBars() {
//   setTimeout(() => {
//     // visitorsNumbers.push(getNumbers());
//     createNewElements(getNumbers());

//     addNewBars();
//   }, 1000);
// }

// addNewBars();
