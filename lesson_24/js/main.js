"use strict";

// 1.Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function checkMinNumber(x, y) {
  if (x > y) alert("1");
  else if (x < y) alert("-1");
  else alert("0");
}
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
checkMinNumber(num1, num2);

//2. Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
alert("Task 2");
let n = prompt("Enter the number to calculate factorial");
alert(factorial(n));

//3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
alert("Task 3");
let a = prompt("Enter first number");
let b = prompt("Enter seconde number");
let c = prompt("Enter third number");
function joinNumber(a, b, c) {
  return Number(a + b + c);
}

alert(joinNumber(a, b, c));

//4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function calculateSquare(x, y) {
  if (x && y == "") {
    return x * x;
  } else if (x == "" && y) {
    return y * y;
  } else return x * y;
}
alert("Task 4");
let x = prompt("Enter first number");
let y = prompt("Enter second number");
alert(`Square = ${calculateSquare(x, y)}`);

//5.Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

// const perfectNumber = function (n, i = 1, sum = 0) {
//     if (n / i < 1 || i >= n) {
//       return n === sum && n;
//     }
//     return perfectNumber(n, i + 1, n % i ? sum : sum + i);
//   };

// 6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными.
// let a = prompt("Enter min value");
// let b = prompt("Enter max value");
// const perfectRange = function (a, b) {
//     let min = Math.min(a, b);
//     let max = Math.max(a, b);
//     if (perfectNumber(min)) {
//       console.log(min);
//     }
//     if (min < max) {
//       perfectRange(min + 1, max);
//     }
//     return;
//   };

//7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// const setTime = (hh, mm = 0, ss = 0) => {
//   const now = new Date();
//   now.setHours(hh, mm, ss);
//   return now;
// };
// alert(setTime(12, 12));

// 8.Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

// const getTimeInSeconds = (...args) => {
//   const now = new Date(setTime(...args));
//   const hhInSeconds = now.getHours() * 60 * 60;
//   const mmInSeconds = now.getMinutes() * 60;
//   return hhInSeconds + mmInSeconds + now.getSeconds();
// };
// alert(getTimeInSeconds(12, 50, 35));

// const getTime = (...args) => {
//   const now = new Date(setTime(...args));
//   return now.toLocaleTimeString("ru", {
//     hours: "numeric",
//     minutes: "numeric",
//     seconds: "numeric",
//   });
// };
// alert(getTime(20, 56, 35));

//9. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
alert("Task 9");
let h1 = prompt("Enter hour1");
let m1 = prompt("Enter minute1");
let s1 = prompt("Enter second1");
let h2 = prompt("Enter hour2");
let m2 = prompt("Enter minute2");
let s2 = prompt("Enter second2");
function getDifferenceTime() {
  const hour1InSec = h1 * 60 * 60;
  const hour2InSec = h2 * 60 * 60;
  const min1InSec = m1 * 60;
  const minInSec2 = m2 * 60;
  const defference =
    +hour1InSec + +min1InSec + +s1 - +hour2InSec - +minInSec2 - +s2;
  return defference;
}

alert(getDifferenceTime());
