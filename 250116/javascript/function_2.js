// function_2.js

let ary1 = [3, 15, 22, 7];
let ary2 = [23, 11, 45, 30];
let ary3 = [];


for (let i = 0; i < 5; i++){
  ary3[i] = parseInt(Math.random() * 50);
}
console.log(ary3);


function getMax(numAry = []){
  let max = 0;

  for (let i = 0; i < numAry.length; i++){
    if (max < numAry[i]){
      max = numAry[i];
    }
  }
  return max;
  // console.log(`가장 큰 값은 : ${max} 입니다.`);
}
alert(getMax(ary1));
console.log(getMax(ary2));
document.write(getMax(ary3));


// return 값을 반환해서 함수 파라미터에 다시