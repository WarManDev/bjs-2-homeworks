// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    } 
    sum += arr[i];
    i++;
    }
    avg = sum / arr.length;
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  let currentSum;

  for(let i = 0; i < arrOfArr.length; i++) {
    currentSum = func(arrOfArr[i]);
    if (currentSum > max) {
      max = currentSum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max;
  min = arr[0];
  max = arr[0];
  let i = 0;
  
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    } 
    i++;
  }
  return Math.abs(max - min);
}
