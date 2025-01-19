// while_loop_4.js
// 도서회원 3명의 정보를 담고싶음

let members_info_1 = {
  members_id: "user01",
  members_name: "홍길동",
  point: "80"
};

let members_info_2 = {
  members_id: "user02",
  members_name: "신현욱",
  point: "90"
};

let members_info_3 = {
  members_id: "user03",
  members_name: "김민식",
  point: "85"
};

let members = [members_info_1, members_info_2, members_info_3];
let max = 0;
let max_id = '';

for (let i = 0; i < 3; i++){
  console.log(`현재 값 : ${members[i].point}`);
  if (max < members[i].point){
    max = members[i].point;
    max_id = members[i].members_id;
  }
}
console.log(`최고 point는 : ${max}`);
console.log(`ID는 ${max_id}`);




// console.log(members[0].point);



