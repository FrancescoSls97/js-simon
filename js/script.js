////////////////////// definizione delle costanti ////////////////////////

const countdownEl = document.getElementById("countdown");
const numbersListEL = document.getElementById("number-list");

///// elementi del form

const formEl = document.getElementById("answers-form");
const formControlEl = document.querySelectorAll("form-control");
const btnEl = document.querySelector("btn");
const messageEl = document.getElementById("message");

////////////////////////////////////////////////////////////////////////////
//                         verifica log
console.log(countdownEl, numbersListEL, formEl, btnEl, messageEl);
////////////////////////////////////////////////////////////////////////////

/* 
- generare 5 numeri casuali
- far comparire una lista di numeri in sequenza e farli scomparire
- inserimento di numeri in un form
- verifica delle risposte
*/

function numGenerator() {
  const randomNumber = [];
  for (let i = 0; i < 5; i++) {
    const thisNumber = Math.floor(Math.random() * 50) + 1;
    randomNumber.push(thisNumber);
  }
  return randomNumber;
}

const gameNumbers = numGenerator();

console.log(gameNumbers);
