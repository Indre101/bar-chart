"use strict";

const barsContainer = document.querySelector(".barsContainer");
let bars = Array.from(document.querySelectorAll(".bar"));

function getNumbers() {
  return Math.floor(Math.random() * 32);
}

function createNewElements(element) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("bar");
  newDiv.style.setProperty("--height", element);
  newDiv.dataset.heights = element;
  const modal = document.createElement("div");
  newDiv.onmouseover = function() {
    modal.dataset.show = "true";
  };
  newDiv.onmouseout = function() {
    modal.dataset.show = "";
  };
  newDiv.appendChild(modal);
  modal.classList.add("modal");
  modal.textContent = `${element}`;

  if (element === 31) {
    newDiv.dataset.position = "highest";
  } else if (element == 1) {
    newDiv.dataset.position = "lowest";
  }

  barsContainer.appendChild(newDiv);
}

function changeToOldDataBackground(arr) {
  arr.forEach(element => {
    if (arr.indexOf(element) <= 10 && arr.length >= 31) {
      element.dataset.position = "older";
    }
  });
}

let counter = 0;

function addNewBars() {
  bars = Array.from(document.querySelectorAll(".bar"));
  setTimeout(() => {
    counter++;
    createNewElements(getNumbers());
    changeToOldDataBackground(bars);
    addNewBars();

    if (counter >= 41) {
      barsContainer.removeChild(barsContainer.firstElementChild);
    }
  }, 1000);
}

addNewBars();
