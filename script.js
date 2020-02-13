"use strict";

const barsContainer = document.querySelector(".barsContainer");
let bars = Array.from(document.querySelectorAll(".bar"));

function getNumbers() {
  return Math.floor(Math.random() * 31);
}

for (let index = 0; index <= 40; index++) {
  createNewElements(getNumbers());
}

function createNewElements(element) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("bar");
  newDiv.style.setProperty("--height", element);
  barsContainer.prepend(newDiv);
}

function changeBackGround(arr) {
  arr.forEach(element => {
    if (arr.indexOf(element) >= 30) {
      element.dataset.time = "older";
    }
    console.log(arr.indexOf(element));
  });
}

function addNewBars() {
  bars = Array.from(document.querySelectorAll(".bar"));
  setTimeout(() => {
    barsContainer.removeChild(barsContainer.lastElementChild);
    createNewElements(getNumbers());
    changeBackGround(bars);
    addNewBars();
  }, 1000);
}

addNewBars();
