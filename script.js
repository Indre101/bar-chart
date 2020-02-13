"use strict";

const barsContainer = document.querySelector(".barsContainer");
let bars = Array.from(document.querySelectorAll(".bar"));

function getNumbers() {
  return Math.floor(Math.random() * 31);
}

function createNewElements(element) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("bar");
  newDiv.style.setProperty("--height", element);

  const modal = document.createElement("div");
  newDiv.onmouseover = function() {
    console.log("object");
    modal.dataset.show = "true";
  };
  newDiv.onmouseout = function() {
    modal.dataset.show = "";
  };
  newDiv.appendChild(modal);
  modal.classList.add("modal");
  modal.textContent = `${element}`;
  barsContainer.prepend(newDiv);
}

function changeBackGround(arr) {
  arr.forEach(element => {
    if (arr.indexOf(element) >= 30) {
      element.dataset.time = "older";
    }
  });
}

let counter = 0;

function addNewBars() {
  bars = Array.from(document.querySelectorAll(".bar"));
  setTimeout(() => {
    counter++;
    createNewElements(getNumbers());
    changeBackGround(bars);
    if (counter >= 41) {
      barsContainer.removeChild(barsContainer.lastElementChild);
    }
    addNewBars();
  }, 500);
}

addNewBars();
