// "use strict";

function enterSymbol(num) {
  // let $input = document.getElementsByTagName("input");
  // $input.value = $input.value + num;
  document.form.textview.value = document.form.textview.value + num;
}
function clean() {
  document.form.textview.value = "";
}

function back() {
  let str = document.form.textview.value;
  document.form.textview.value = str.substring(0, str.length - 1);
}

function equal() {
  let str = document.form.textview.value;
  eval(str) == "Infinity"
    ? (document.form.textview.value = "деление на ноль")
    : (document.form.textview.value = eval(str));
}

document.querySelector(".calculator__item--clear").onclick = () => {
  clean();
};
document.querySelector(".calculator__item--back").onclick = () => {
  back();
};

document.querySelector(".calculator__item--equal").onclick = () => {
  equal();
};
document.querySelector(".calculator__item--multiply").onclick = () => {
  enterSymbol("*");
};
document.querySelector(".calculator__item--divide").onclick = () => {
  enterSymbol("/");
};
document.querySelector(".calculator__item--plus").onclick = () => {
  enterSymbol("+");
};
document.querySelector(".calculator__item--minus").onclick = () => {
  enterSymbol("-");
};
document.querySelector(".calculator__item--zero").onclick = () => {
  enterSymbol("0");
};
document.querySelector(".calculator__item--1").onclick = () => {
  enterSymbol("1");
};
document.querySelector(".calculator__item--2").onclick = () => {
  enterSymbol("2");
};
document.querySelector(".calculator__item--3").onclick = () => {
  enterSymbol("3");
};
document.querySelector(".calculator__item--4").onclick = () => {
  enterSymbol("4");
};
document.querySelector(".calculator__item--5").onclick = () => {
  enterSymbol("5");
};
document.querySelector(".calculator__item--6").onclick = () => {
  enterSymbol("6");
};
document.querySelector(".calculator__item--7").onclick = () => {
  enterSymbol("7");
};
document.querySelector(".calculator__item--8").onclick = () => {
  enterSymbol("8");
};
document.querySelector(".calculator__item--9").onclick = () => {
  enterSymbol("9");
};
document.querySelector(".calculator__item--point").onclick = () => {
  enterSymbol(".");
};
