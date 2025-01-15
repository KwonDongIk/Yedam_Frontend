// for_loop_3.js

let sum = 0;
let tmp = [];

let num_ary = [10, 20, 30, 40];
num_ary[4] = 50;
num_ary[5] = 60;
num_ary[6] = 70;
num_ary[7] = 80;


tmp[0] = num_ary[6];
num_ary[6] = num_ary[7];
num_ary[7] = tmp[0];

console.log(num_ary);



// for (let i = 0; i < num_ary.length; i++) {
//   console.log(`${i}번째의 값 -> ${num_ary[i]}임`);
//   sum += num_ary[i];
// }
// console.log(sum);