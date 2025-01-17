let numAry = [20, 13, 45, 62, 19]
let numAry_0 = new Array('20', '30');


let sum = 0;
let max = 0;
// forEach()


numAry.forEach(function(item, idx, ary){ // 배열의 요소값 , 배열의 index 값, 배열
  console.log(`item => ${item}`);
  
  if (idx % 2 == 0){
    sum += item;
  }

  for (let i = 0; i <= numAry.length; i++){
    if (max < numAry[i]) {
      max = numAry[i]
    }
  }
});
console.log('가장 큰 값은 : ' + max);
console.log('합계는 : ' + sum);


let filterAry = numAry.filter(function (item, idx, ary) {
  if (item % 2 == 1) {
    return true;
  } else {
    return false;
  }
});
console.log(filterAry);




