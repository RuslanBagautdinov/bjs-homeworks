"use strict"
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}


function calculateTotalMortgage(percent, contribution, amount, date) {

 let months = 12;

  if (isNaN(percent) === true) {
     alert(`Параметр "процентная ставка" содержит неправильное значение ${percent}`);
     } else {
     percent = Number(percent);
    }

  if (isNaN(contribution) === true) {
     alert(`Параметр "начальный взнос" содержит неправильное значение ${contribution}`);
     } else {
     contribution = Number(contribution);
    }
   
   if (isNaN(amount) === true) {
     alert(`Параметр "общая стоимость" содержит неправильное значение ${amount}`);
     } else {
     amount = Number(amount);
    }

 let credit = amount - contribution;
 let monthlyPercentDecimal = percent / (100 * 12);
 let monthlyPayment = credit * (monthlyPercentDecimal + monthlyPercentDecimal/(((1 + monthlyPercentDecimal) ** months) -1));
 let totalAmount = Number((monthlyPayment * months).toFixed(2));
 
 console.log(totalAmount);
 return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
      if (name === "" || typeof name !== "string") {
    name = "Аноним";
    }
    let message = `Привет, мир! Меня зовут ${name}`;
    console.log(message);
    return message;
}