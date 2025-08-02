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

const firstBoy = document.getElementById("first-Boy");
const firstGirl = document.getElementById("first-Girl");

const secondBoy = document.getElementById("second-Boy");
const secondGirl = document.getElementById("second-Girl");
let sex1;
let sex2;
//Get Names
function buttonClick() {
  const firstName = inputFirstName.value;
  if (firstBoy.checked) {
    sex1 = "Boy";
  } else if (firstGirl.checked) {
    sex1 = "Girl";
  } else {
    sex1 = "None";
  }

  console.log(sex1);

  const secondName = inputsecondName.value;
  if (secondBoy.checked) {
    sex2 = "Boy";
  } else if (secondGirl.checked) {
    sex2 = "Girl";
  } else {
    sex2 = "None";
  }

  console.log(sex1);

  const Name1 = new Names(firstName, sex1);
  const Name2 = new Names(secondName, sex2);

  outputFirstNum.textContent = Name1.returnName();
  outputSecondNum.textContent = Name2.returnName();
}

class Names {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  //Return Name's Num
  returnName() {
    let NameContain = [];
    for (let i = 0; i < this.name.length; i++) {
      NameContain[i] = splitHangul(this.name.charAt(i));
    }
    return `${NameContain[0]} ${NameContain[1]} ${NameContain[2]}`;
  }
}

//Method How to Run about Name-test
function splitHangul(char) {
  const code = char.charCodeAt(0) - 0xac00;
  const cho = Math.floor(code / 28 / 21);
  const jung = Math.floor(code / 28) % 21;
  const jong = code % 28;
  return Cho[cho] + Jung[jung] + Jong[jong];
}
