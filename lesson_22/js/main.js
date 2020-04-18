"use strict" ;
const Name = prompt("What is your name?");
alert("Hi" + " " + Name);

const currentYear = 2020;
let userYearBirth = prompt("Your year of birth");
if (Number.isNaN(Number(userYearBirth))) {
    alert(`${userYearBirth} not a number`);
} else { 
    let userOld = (currentYear - userYearBirth);
    document.getElementById('app').innerHTML = `<h1>You ${userOld} old</h1>`;

}


let sideSquare = prompt('Enter the side of square');
let perimeter = (sideSquare * 4);
alert('The perimeter of square is' + ' ' + perimeter);

let radius = prompt('Enter a radius');
let squareCircle = (Math.PI * Math.pow(radius,2));
alert('Square' + ' ' + squareCircle);

let distance = prompt('Enter a distance from city');
let minutes = prompt('Enter a distance from city at minutes');
let time = minutes / 60;
let speed = distance / time;
alert('Your speed must be' + ' ' + speed);

let dollar = prompt('Enter a dollars');
const еxchangeRates = 0.92;
let sumDollars = (dollar * еxchangeRates);
alert('Amount in euro' + ' ' + sumDollars);

let fileSize = 820;
let userFlashDisk = prompt('Enter your flash disk capacity in gigabyte');
    if (Number.isNaN(Number(userFlashDisk ))) {
    alert(`${userFlashDisk} not a number`);
} else { 
    let result =Math.floor((userFlashDisk*1024)/fileSize);
    document.getElementById('app').innerHTML = `<h1>You may restor - ${result} files</h1>`;
}

let quantityMoney = prompt('Enter your summa of money');
if (Number.isNaN(Number(quantityMoney))) {
    alert(`${quantityMoney} not a number`);
} else { 
    alert('Enter a number');
}
let priceСhocоlate = prompt('Enter your price Сhocоlate');
let userChocolate = Math.floor(quantityMoney / priceСhocоlate);
let userRest = (quantityMoney % priceСhocоlate);
document.getElementById('app').innerHTML = `<h1>You can buy ${userChocolate} chocolates !</h1>`;
// document.getElementById('app').innerHTML = `<h2>You have ${userRest} change dollars left ! </h2>`;
alert(`You have ${userRest} change dollars left`);

let userDeposit = prompt('Enter your deposit');
let monthDeposit = prompt('Ehter number of months');
let sumAmount = userDeposit * 5 * (monthDeposit * 30) / 365 / 100;
document.getElementById('app').innerHTML = `<h1>Your summa the deposit interest amount ${(sumAmount).toFixed(2)} !</h1>`;

