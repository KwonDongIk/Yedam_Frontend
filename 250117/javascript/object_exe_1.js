let myFriedns = [];
myFriedns.push({name : '홍길동', Escore : 70, Kscore : 78, gender : 'Female'}, 
              {name : '신현욱', Escore : 80, Kscore : 88, gender : 'Female'}, 
              {name : '김민식', Escore : 90, Kscore : 70, gender : 'Male'}, 
              {name : '석지욱', Escore : 95, Kscore : 55, gender : 'Female'});



// console.log(myFriedns);

myFriedns.forEach(function(item, idx, ary){
  // console.log(item.name);

  // if (item.Escore >= 90){
  //   let E_target = item.name;
  //   console.log(E_target);
  // }

  // let avg = (item.Escore + item.Kscore) / 2;
  // console.log(avg);

  // if (avg >= 80){
  //   console.log(item.name);
  // }

  // forEach : 콘솔 출력 여학생의 영어 평균
  
});

myFriedns.forEach(function(item, idx, ary){
  let sum = 0;
  let cnt = 0;

  if (item.gender == 'Female'){
    sum += item.Escore;
    cnt++;

    let avg = sum / cnt;
    console.log(avg);
  }
});