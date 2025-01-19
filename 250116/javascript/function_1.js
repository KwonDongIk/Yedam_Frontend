// function_1.js

let numAry1 = [10, 20, 30];
let numAry2 = [40, 50, 60];
let numAry3 = [70, 80, 90];






function arraySum(numAry = []){ // 블럭
  let sum = 0;
  
  for(let i = 0; i < numAry.length; i++){  // numAry1 -> 3
    sum += numAry[i];
  }
  console.log(`합은 : ${sum}`);
}

arraySum(numAry1); // 파라미터 안에 배열을 선언한 변수를 넣어도 되고 배열 자체를 넣어도 된다. function([a,b,c]){}
arraySum(numAry2);
arraySum(numAry3);
