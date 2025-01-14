let number_01 = parseInt(prompt("숫자를 입력하십시요. :"));
let number_02 = parseInt(prompt("숫자를 입력하십시요. :"));

// if (number_01 != null || number_02 != null){
//   if (number_01 % 2 == 0 && number_02 % 2 == 0){
//     console.log("모두 짝수")
//   } else if (number_01 % 2 == 0 || number_02 % 2 == 0) {
//     console.log("하나만 짝수");
//   } else {
//     console.log("짝수 없음");
//   }
// }




if (number_01 !== null || number_02 !== null){
  (number_01 % 2 == 0 && number_02 % 2 == 0) ? console.log("모두 짝수") : console.log("하나만 짝수")
} else {
  console.log("짝수 없음");
}