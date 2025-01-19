let i = 1;

while(i <= 10){
  console.log(`현재의 수 -> ${i}`);
  i++;
}


while(true){
  let tmp = parseInt(Math.random() * 100)
  console.log(tmp);
  
  if (tmp < 50){
    break;
  }
}