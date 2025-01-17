// object_4.js
// 객체는 주소값을 비교



let month = 4;
let date = 17;
let year = 2022;

let today = new Date();
let now = new Date();
console.log(today == now);


today.setFullYear(year);
today.setMonth(month); // ※ 1월 => 0부터
today.setDate(date);

console.log(today);
