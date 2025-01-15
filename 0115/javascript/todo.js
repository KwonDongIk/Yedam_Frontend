// Question : 1
// prompt로 필요한 몇 단의 구구단을 입력해서 출력하는 프로그램
// 


let inputNum = parseInt(prompt("몇 단의 구구단을 출력하시겠습니까? : "));
let tmp = inputNum;

for(let i = 1; i < 10; i++){
    console.log(`${tmp} * ${i} = ${tmp * i}`);
}