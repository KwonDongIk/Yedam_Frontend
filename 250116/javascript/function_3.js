// function_3.js

// 매개변수는 여러 개 일 수도 있음

function getAverage(num1 = 0, num2 = 0) {
 let sum = 0, avg = 0;
 sum = num1 + num2;
 avg = sum / 2;

 return avg;
}

let avg1 = getAverage(3, 5);
let avg2 = getAverage(6, 9);

console.log(getAverage(3, 5));

let result = getAverage(avg1, avg2);
console.log(`결과는 : ${result}`);
