// while_loop_3.js
// object 타입

let myInfo = {
  name: "호날두",
  age: 20,
  heigt: 190,
  weights: 70
};

console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo.age);

for (let prop in myInfo){
  console.log(`속성: ${prop}, 값: ${myInfo[prop]}`)
}

let nameAry = ['홍길동', '김민석', '박석민'];
for (let name of nameAry){
  console.log(`값: ${name}`);
}


let myFriend1 = {
  name: "홍길동",
  phone: "010-0000-0000",
  address: "대구 서구 상중일동"
}

let myFriend2 = {
  name: "김민석",
  phone: "010-0000-0001",
  address: "대구 서구 상중이동"
}

let myFriend3 = {
  name: "박석민",
  phone: "010-0000-0002",
  address: "대구 서구 상중삼동"
}

let friends = [myFriend1, myFriend2, myFriend3];
friends[3] = {name: "박창석", phone: "010-0000-0003", address: "대구 서구 상중사동"}
console.log(friends[0].name);
console.log(friends[1]['phone']);
console.log(friends[2]['address']);
for(let i = 0; i<friends.length; i++){
  console.log('친구의 이름은 : ' + friends[i].name + '\n연락처는 : ' + friends[i].phone + '\n주소는 : ' + friends[i].address);
}