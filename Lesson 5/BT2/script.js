let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let resultElememt = document.getElementById('result');
//
function add() {
  console.log(firstNumber.innerText);
  let first = +firstNumber.value;
  let second = +secondNumber.value;
  let result = first + second;
  resultElememt.innerHTML = `<b>${first} + ${second} = ${result} </b>`;
}

function minus() {
  console.log('minus');
  let first = +firstNumber.value;
  let second = +secondNumber.value;
  let result = first - second;
  resultElememt.innerText = `${first} - ${second} = ${result}`;
}
