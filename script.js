function getNumbers() {
  return Math.floor(Math.random() * 31);
}

let visitorsNumbers = [];

for (let index = 0; index <= 40; index++) {
  visitorsNumbers.push(getNumbers());
}
console.log(visitorsNumbers);