// for_loop_4.js
// 0 <= Math.random()*100 < 100  -> 50부터 100
// 학생 10명의 임의 점수를 배열에 저장



let score = [];
let sum = 0;
let max = 0;


for (let i = 0; i < 10; i++){
  score[i] = parseInt(Math.random() * 51) + 50;
  console.log(score[i]);
}


for (let i = 0; i < 10; i++){
  sum += score[i];

  if (max < score[i]){
    max = score[i];
  }
}
console.log(`평균은 : ${sum / 10}`);
console.log(`가장 큰 값은 : ${max}`);


