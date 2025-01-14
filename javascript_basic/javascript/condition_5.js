let number_01 = (parseInt(Math.random()*100) + 1);
let number_02 = (parseInt(Math.random()*100) + 1);
let number_03 = (parseInt(Math.random()*100) + 1);

// console.log(number_01);
// console.log(number_02);


// // number_01이 더 클때
// if (number_01 > number_02){
//   console.log(number_01 - number_02);
// }
// else {
//   console.log(number_02 - number_01);
// }

console.log(number_01);
console.log(number_02);
console.log(number_03);


if (number_01 > number_02){
  if (number_01 > number_03){
    console.log(`가장 큰 수는 ${number_01} 입니다.`);
  }
} else if (number_02 > number_01) {
  if (number_02 > number_03){
    console.log(`가장 큰 수는 ${number_02} 입니다.`);
  }
} else if (number_03 > number_01) {
  if (number_03 > number_02){
    console.log(`가장 큰 수는 ${number_03} 입니다.`);
  }
}