"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let x = []; 
    if (discriminant === 0) {
        x.push(- b / (2 * a));
    } else if (discriminant > 0){
        x.push((-b + Math.sqrt(discriminant)) / (2 * a));
        x.push((-b - Math.sqrt(discriminant)) / (2 * a));
    } 
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if (marks.length > 5) {
    console.log(`Оценок по предметам больше 5.`);
    marks.splice(5);
    }
  
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    }
  
    return (sum / marks.length).toFixed(2);
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let result = "";
    let old = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (old < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. \nЗато могу предложить вам замечательный клюквенный компот!`;
    } else {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }

    return result;
}