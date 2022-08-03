"use strict";

function solveEquation(a, b, c) {
  let arr;
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b / (2 *a)];
  } else {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]
  }

  return arr; // array
  
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let loanBody;
  let amountMonth;
  let currentDate;
  let payment;
  let percentPerMonth;
  let convertedPercent;
  let convertedContribution;
  let convertedAmount;

  if (Number(percent)) {
    convertedPercent = percent;
  } else {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (Number(contribution) || Number(contribution) === 0) {
    convertedContribution = contribution;
  } else {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (Number(amount)) {
    convertedAmount = amount;
  } else {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  currentDate = new Date();
  amountMonth = date.getMonth() - currentDate.getMonth() + (12 * (date.getFullYear() - currentDate.getFullYear()));

  loanBody = convertedAmount - convertedContribution;
  percentPerMonth = (convertedPercent / 100) / 12;
  payment = loanBody * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** amountMonth) - 1)));
  totalAmount = Number((payment * amountMonth).toFixed(2));

  console.log(amountMonth);
  return totalAmount;
}