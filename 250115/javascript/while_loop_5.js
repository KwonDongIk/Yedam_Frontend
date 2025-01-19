// let members_info_1 = {
//   members_id: "user01",
//   members_name: "홍길동",
//   point: "80"
// };

// let members_info_2 = {
//   members_id: "user02",
//   members_name: "신현욱",
//   point: "90"
// };

// let members_info_3 = {
//   members_id: "user03",
//   members_name: "김민식",
//   point: "85"
// };

let members = [];

members[0] = {members_id : "user01", members_name : "홍길동", point : "80"}
members[1] = {members_id : "user02", members_name : "신현욱", point : "90"}
members[2] = {members_id : "user03", members_name : "김민식", point : "85"}

// 배열의 이름 속성중에서 searchName과 같으면 포인트 출력




while (true) {
  let searchName = prompt("찾을 친구 이름 입력하세요! : ");
  if (searchName == 'stop'){
    break;
  }
  let exists = false;
  for (let i = 0; i < members.length; i++){
    if (members[i].members_name == searchName){
      alert(`${searchName}의 포인트는 ${members[i].point}점 입니다.`);
      exists = true;
      break;      
    }    
  }
  if (!exists){
    alert('찾는 사람이 없습니다.')
  }
}


