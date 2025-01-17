// object_4.js

let month = 2;
let date = 0;
let year = 2024;

let today = new Date();

today.setFullYear(year);
today.setMonth(month); // ※ 1월 => 0부터
today.setDate(date);

console.log(today, today.getDate());
