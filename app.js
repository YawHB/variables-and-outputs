"strict";

let number = 0;

/******** initializes the function start **************/
window.addEventListener("load", start);

/******** makes + and - buttons clickable wit function **************/
function start() {
  console.log("start");
  document.querySelector("#btn-increment").addEventListener("click", plusOne);
  document.querySelector("#btn-decrement").addEventListener("click", minusOne);
}

/******** Add 1 count and execute displayNumber() **************/

function plusOne() {
  number++;
  displayNumber();
}

/******** subtracrs 1 count and execute displayNumber() **************/
function minusOne() {
  number--;
  displayNumber();
}

/******** Updates the text context on the displayed number **************/

function displayNumber() {
  document.querySelector("#number").textContent = number;
  let message = `Tallet er nu ${number}`;
  document.querySelector("#message").textContent = message;
}
