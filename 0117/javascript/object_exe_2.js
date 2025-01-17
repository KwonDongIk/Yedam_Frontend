// let numAry = [10, 14, 31, 45, 21];

let numAry = [{name : '조카', age : 10},
  {name : '큰조카', age : 14},
  {name : '삼촌', age : 31},
  {name : '큰아버지', age : 45},
  {name : '나', age : 21}
]

let filtAry = numAry.filter(function(item, idx, ary){
  if(item.age > 20){
    return false;
  }
  return true;
})

console.log(filtAry);

// 0번째 값은 10
// 1번째 값은 14

numAry.forEach(function(item,idx,ary){

  // console.log(item);

  if (item.age > 20){

  console.log(`${item.name}`);
  }

});