let password = document.getElementById("random");
let copy = document.getElementById("copy");
let btn = document.getElementById("btn");
let length = document.getElementById("length");
let upperCase = document.getElementById("uppercase");
let lowerCase = document.getElementById("lowercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let select = document.querySelector(".select");

let upperCaseLetter = "QWERTYUIOPASDFGHJKLZXCVBNM";
let lowerCaseLetter = "qwertyuiopasdfghjklzxcvbnm";
let numberAll = "1234567890";
let symbolAll = "!@#$%^&*()_+=~";

btn.addEventListener("click", generate);

function generate() {
  passLen = length.value;

  let myPassWord = "";

  if (upperCase.checked) {
    myPassWord += addUpperCase();
  }
  if (lowerCase.checked) {
    myPassWord += addLowerCase();
  }
  if (number.checked) {
    myPassWord += addNumber();
  }
  if (symbol.checked) {
    myPassWord += addSymbol();
  }

  for (let i = myPassWord.length; i < passLen; i++) {
    myPassWord += generateX();
  }

  password.innerText = myPassWord;
  //   console.log(myPassWord);
}

function generateX() {
  let arr = [];
  if (
    !upperCase.checked &&
    !lowerCase.checked &&
    !number.checked &&
    !symbol.checked
  ) {
    select.innerText = "Please Select At least One";
  }

  if (upperCase.checked) {
    arr.push(addUpperCase());
    select.innerText = "";
  }
  if (lowerCase.checked) {
    arr.push(addLowerCase());
    select.innerText = "";
  }
  if (number.checked) {
    arr.push(addNumber());
    select.innerText = "";
  }
  if (symbol.checked) {
    arr.push(addSymbol());
    select.innerText = "";
  }
  if (arr.length === 0) return "";
  return arr[Math.floor(Math.random() * arr.length)];
}

function addUpperCase() {
  return upperCaseLetter[Math.floor(Math.random() * upperCaseLetter.length)];
}

function addLowerCase() {
  return lowerCaseLetter[Math.floor(Math.random() * lowerCaseLetter.length)];
}

function addNumber() {
  return numberAll[Math.floor(Math.random() * numberAll.length)];
}

function addSymbol() {
  return symbolAll[Math.floor(Math.random() * symbolAll.length)];
}

copy.addEventListener("click", () => {
  let textarea = document.createElement("textarea");
  let PassRandom = password.innerText;
  if (!PassRandom) {
    return;
  }
  textarea.value = PassRandom;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password Copied");
});
