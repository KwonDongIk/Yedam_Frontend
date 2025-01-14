// let time = parseInt(prompt("시간을 입력하세요. : "));

// let days = parseInt(time / 24);
// let houres = parseInt(time % 24);

// console.log(`${days}일 ${houres}시간 입니다.`);




let min = parseInt(prompt("분을 입력하세요. : ")); // 89345분

let days = parseInt(min / 1440); // 하루가 1440분 62일 나옴
let min2 = parseInt(min % 1440); // 89345 / 1440 = 65분, 62일 ``` 분                                                                    
let houres = parseInt(min2 / 60); // 785 / 60 = 13, ```분 -> 1시간 5분
let min3 = parseInt(min2 % 60); // 13 % 60 = 5분                                                                                                                                   


// let houres = parsInt((min % 1440) / 60);


console.log(`${days}일 ${houres}시간 ${min3}분 입니다.`);


