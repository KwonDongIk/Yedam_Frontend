let numAry1 = new Array('10', '20');
let numAry2 = new Array('30', '40');

let resultAry = numAry1.concat(numAry2);

console.log(resultAry.join('-').split('-'));

// join => 배열 -> 문자열
// split => 문자열 -> 배열

let result = resultAry.join('-').split('-');
result.push('55');

console.log(result.pop());
console.log(result, result.indexOf('40'));
console.log(result);

let name_Ary = new Array('홍길동', '김민순', '허성식', '박창식');

if (name_Ary.indexOf('김민순') != -1){
  console.log('찾는 이름이 존재합니다.');
} else {
  console.log('찾는 이름이 없습니다.');
}

console.log(name_Ary.at(1)); // 인덱스에 해당하는 값을 반환

name_Ary.sort().reverse().join();
console.log(name_Ary);

