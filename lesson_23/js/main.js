"use strict";
// const moment = moment();
//-----------ANSWER 1-----------
let userAge = prompt("Enter your age");
let message = (userAge > 0) && (userAge < 12) ? 'You baby' :
    (userAge <= 12) && (userAge < 18) ? 'You teenager' :
        (userAge >= 18) && (userAge <= 60) ? 'You adult' : 'You old'
alert(message);
//-----------ANSWER 2-----------
let userNumber = prompt('Enter your number from 0 to 9');
let message1 = (userNumber == 0) ? 'Symbol is )' :
    (userNumber == 1) ? 'Symbol is !' :
        (userNumber == 2) ? 'Symbol is @' :
            (userNumber == 3) ? 'Symbol is #' :
                (userNumber == 4) ? 'Symbol is $' :
                    (userNumber == 5) ? 'Symbol is %' :
                        (userNumber == 6) ? 'Symbol is ^' :
                            (userNumber == 7) ? 'Symbol is &' :
                                (userNumber == 8) ? 'Symbol is *' :
                                    (userNumber == 9) ? 'Symbol is (' :
                                        'Please enter only one digit';
alert(message1);
 //-----------ANSWER 3-----------                  
let threeNumber = prompt('Enter three numbers');
let message2 = (isNaN(threeNumber))?'This is not a number':
    (threeNumber[0] == threeNumber[1] || threeNumber[0] == threeNumber[2] || threeNumber[1] == threeNumber[2]) ? `You have two identical numbers ${threeNumber}.` :
    (threeNumber[0] == threeNumber[1] && threeNumber[0] == threeNumber[2] && threeNumber[1] == threeNumber[2]) ? 
    `You have three identical numbers ${threeNumber}.` :
    `You have not identical numbers ${threeNumber}.`;
alert(message2);
  //-----------ANSWER 4-----------              
let userYear = prompt('Enter your year');
let message3 = (isNaN(userYear)) ? 'This is not a number' :
    (userYear % 400 == 0 || userYear % 4 == 0 && userYear % 100 != 0) ? 'This is leap year' :
        'This is not leap year';
alert(message3);
//-----------ANSWER 5-----------
let fiveNumber = prompt('Enter five digits');
let reversNumber = (fiveNumber.split("").reverse().join(""));
   
switch (true) { 
    case (isNaN(fiveNumber)):
    alert(`You entered not a number ${fiveNumber}`);
    break;
    case fiveNumber == reversNumber:
        alert(`Your number ${fiveNumber} is polindrom`);
        break;
    default:
        alert(`Your number ${fiveNumber} is not polindrom`);
}
 //-----------ANSWER 6-----------   

let rateEuro = 0.92;
let rateUan = 29;
let rateAzn = 0.59;
let userCash = prompt('How much $ do you want to exchange');
if (isNaN(userCash)) {
    alert('You entered not a number');
    alert('Please enter anumber');
    userCash = prompt('How much do you want to exchange');
}
let currency = prompt('Choose your currency:EUR,UAN,AZN');
let result = null;
switch (true) { 
   
    case currency.toUpperCase() == 'UAN':
         result = userCash * rateUan;
            alert(`You get ${result.toFixed(2)} hryvnia.`);
        break;
    case currency.toUpperCase() == 'AZN':
         result = userCash * rateAzn;
            alert(`You get ${result.toFixed(2)} manat.`);
        break;
        case currency.toUpperCase() == 'EUR':
             result = userCash * rateEuro;
                alert(`You get ${result.toFixed(2)} euro.`);
            break;
    default:
        alert('We have no other currency ');       
}
//-----------ANSWER 7-----------
let userPurchaseAmount = prompt('How much the cash you want to spend?');
if (isNaN(userPurchaseAmount)) {
    alert('You entered not a number');
    alert('Please enter a number');
    userPurchaseAmount = prompt('How much the cash you want to spend?');
}
let userCheck = null;
if (Number(userPurchaseAmount) >= 200 && Number(userPurchaseAmount) < 300)
{
    alert(`Your check is ${userCheck = userPurchaseAmount - ((userPurchaseAmount / 100) * 3)}`);
}
else if ((Number(userPurchaseAmount)) >= 300 && (Number(userPurchaseAmount)) < 500)
{
    alert(`Your check is ${userCheck = userPurchaseAmount - ((userPurchaseAmount / 100) * 5)}`);
} else if (Number(userPurchaseAmount) >= 500){
    alert(`Your check is ${userCheck = userPurchaseAmount - ((userPurchaseAmount / 100) * 7)}`);
} else alert('You have not discount ');

//-----------ANSWER 8-----------

let lengthCircle = prompt('Enter length of circle');
let diametrCircle = lengthCircle / 3.14;
let perimetrSquare = prompt('Enter perimetr of square');
let sideSquare = perimetrSquare / 4;
let result1 = (diametrCircle == sideSquare) ? ('The circle inside the square') :
    (diametrCircle > sideSquare) ? ('The circle is  bigger') : ('The circle is smaller');
alert(result);
alert(`Diametr ${diametrCircle.toFixed(2)}, Side${sideSquare.toFixed(2)}`);

//-----------ANSWER 9-----------

let score = null;
let questionOne = prompt('What is the capital of USA?: 1-New-York, 2-Washington, 3-Los-Angeles','Enter option number');
if (questionOne !== '2') {
    alert('That is wrong answer') 
}
else if (questionOne == '') {
    alert('You have not made a choice');    
}
else {
    score += 2;
        alert('That is rigth answer');
 }

let questionTwo = prompt('How much kilobyte in one megabayte?: 1-1000,2-1024,3-2048','Enter option number');
if (questionTwo !== '2') {
    alert('That wrong answer')
}
else if (questionOne == ' ') {
    alert('You have not made a choice');
    
}
else {  score += 2;
        alert('That is rigth answer');
}
let questionThree = prompt('How many feet in one meter?:1-3.28, 2-2.26, 3-30','Enter option number');
if (questionThree !== '1') {
    alert('That wrong answer')
}
else if (questionOne == '') {
    alert('You have not made a choice');
    
}
else {  score += 2;
        alert('That is rigth answer');
 }
alert(`Your result ${score} points`);

//-----------ANSWER 10-----------

const personData = prompt(
    "Write any date,please",
    "Example:MONTH/DAY/YEAR or MONTH.DAY.YEAR"
  );
  let nextData = new Date(String(personData));
  nextData.setDate(nextData.getDate() + 1);
  alert(nextData);
console.log(moment().format());
let myDate =(new Date().getFullYear());
alert(myDate);
alert(moment());