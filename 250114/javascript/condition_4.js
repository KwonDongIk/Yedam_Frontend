// const obj ={
//   name: "권동익",
//   age: 28,
//   showName: function() {
//     console.log(obj.name);
//   }
// }
// obj.showName();


// console.log(Math.round(3.141592)/1);



let number_01 = parseInt((Math.random()*10) + 1);
let number_02 = parseInt((Math.random()*10) + 1);

let sumEven = 0; 
let sumOdd = 0;

// if (number_01 % 2 == 0 && number_02 % 2 == 0){
//   sumEven += number_01 + number_02
// } else if (number_01 % 2 == 0) {
//   sumEven += number_01
// } else {
//   sumEven += number_02
// }

// if (number_01 % 2 != 0 && number_02 != 0){
//   sumOdd += number_01 + number_02
// } else if (number_01 % 2 != 0) {
//   sumOdd += number_01
// } else {
//   sumOdd += number_02
// }


if (number_01 % 2 == 0){
  sumEven += number_01
} else {
  sumOdd += number_01
}

if (number_02 % 2 == 0){
  sumEven += number_02
} else {
  sumOdd += number_02
}



console.log(`${sumEven}은 짝수값 ${sumOdd}는 홀수값`);
