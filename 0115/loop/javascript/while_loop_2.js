// while_loop_2.js
// stop 입력하면 반복문 종료
// 입력한 값 중에서 가장 큰 값을 출력

let max = 0;
let run = true;


while (run) {
  let inputVal = parseInt(prompt("점수를 입력하십시요 . :"));

  if (isNaN(inputVal) || inputVal === null || inputVal == 'stop') {
      run = false;
    }
    else if(max < inputVal) {
      max = inputVal;
      console.log(`현재 점수는 ${inputVal} 점`);
    }
  }
  console.log(`최고 값은 : ${max} 입니다.`);