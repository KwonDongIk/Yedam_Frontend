


// my question

// 한 개의 그룹이 있다.

// 그룹 내에는 3명의 인원이 배치되어있다. (편의 상 A, B, C로 칭하겠음)

// 지원받는 물품 10개를 전달받기로 하였다.

// 3명의 인원에게 어떻게하면 나눌 수 있을까?

// [조건 1]
// A의 인원은 물품을 3개 이상 받아야 함

// [조건 2]
// 모든 인원은 1개 이상은 받아야 함


total = 10;

let A_person = parseInt(Math.floor(Math.random() * 10) + 1);
let B_person = parseInt(Math.floor(Math.random() * 10) + 1);
let C_person = parseInt(Math.floor(Math.random() * 10) + 1);


if (A_person >= 3 && B_person >=1 && C_person >=1){
    total -= A_person;
    console.log(`A는 ${A_person}개 받았고, ${total}개 남았습니다.`);
    total -= B_person;
    console.log(`B는 ${B_person}개 받았고, ${total}개 남았습니다.`);
    total -= C_person;
    console.log(`C는 ${C_person}개 받았고, ${total}개 남았습니다.`);
} else {
    console.log("조건에 맞지 않습니다.");
}










// questioner question

// 0-10 숫자 랜덤 2개 골라 짝수면 + 하나만 짝수면 - 둘다 짝수가아니면 *