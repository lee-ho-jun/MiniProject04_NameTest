// Fundamental Variables
// Split Hangul
const Cho = [2, 4, 2, 3, 6, 5, 4, 4, 8, 2, 4, 1, 3, 6, 4, 3, 4, 4, 3];
const Jung = [2, 3, 3, 4, 2, 3, 3, 4, 2, 4, 5, 3, 3, 2, 4, 5, 3, 3, 1, 2, 1];
const Jong = [
  0, 2, 4, 4, 2, 5, 5, 3, 5, 7, 9, 9, 7, 9, 9, 8, 4, 4, 6, 2, 4, 1, 3, 4, 3, 4,
  4, 3,
];

// DOM Variables
const inputFirstName = document.getElementById("firstName");
const inputsecondName = document.getElementById("secondName");

const outputFirstNum = document.getElementById("firstNum");
const outputSecondNum = document.getElementById("secondNum");

//Get Names
const firstName = window.prompt("Please, Input Fisrt Name");
const secondName = window.prompt("Please, Input Second Name");

inputFirstName.textContent = firstName;
inputsecondName.textContent = secondName;

//Return Name's Num

let firstContain = [];
for (let i = 0; i < firstName.length; i++) {
  firstContain[i] = splitHangul(firstName.charAt(i));
}

let secondContain = [];
for (let i = 0; i < secondName.length; i++) {
  secondContain[i] = splitHangul(secondName.charAt(i));
}

outputFirstNum.textContent = `${firstContain[0]} ${firstContain[1]} ${firstContain[2]}`;
outputSecondNum.textContent = `${secondContain[0]} ${secondContain[1]} ${secondContain[2]}`;

//Calculate the Name's Num
function splitHangul(char) {
  const code = char.charCodeAt(0) - 0xac00;
  const cho = Math.floor(code / 28 / 21);
  const jung = Math.floor(code / 28) % 21;
  const jong = code % 28;
  return Cho[cho] + Jung[jung] + Jong[jong];
}
