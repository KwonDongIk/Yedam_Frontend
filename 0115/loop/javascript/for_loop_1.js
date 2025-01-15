// 반복문

let sum = 0;

// for (let i = 1; i <= 10; i++){ // i 초깃값 선언, 조건 10과 같거나 작을때 까지, i는 계속 더함
//   sum += (i * 2) + 1;
//   console.log(`i의 값 : ${i}`);
//   console.log(`현재의 값 : ${sum}`);
// }

for (let i = 1; i <= 10; i++){
  if (i % 2 == 0){
    sum += i;
  }
  console.log(`i의 값은 : ${i}`);
  console.log(`sum의 값은 : ${sum}`);
}

