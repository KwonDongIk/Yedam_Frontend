document.querySelector('#user-id').addEventListener('#submit_btn', function() {

  // id 조건
let idAlert = document.querySelector('#user-id');
let idAlertValue = document.querySelector('#user-id').value;

if (idAlertValue.length < 4 || idAlertValue.length > 15){
  alert('아이디가 4글자 이상 15자리 이하 값이 아닙니다.');
  idAlert.focus();
  return true;
} else {
  return false;
}

let pwAlert = document.querySelector('#user-pw1');
let pwAlertValue = document.querySelector('#user-pw1').value;

if (pwAlertValue.length < 8){
  alert('비밀번호가 8자리 이상이 아닙니다.');
  pwAlertValue = '';
  pwAlert.focus();
}

let pwCheckAlert = document.querySelector('#user-pw2');
let pwCheckAlertValue = document.querySelector('#user-pw2').value;

if (pwAlertValue != pwCheckAlertValue){
  alert("비밀번호가 일치하지 않습니다.")
}

});

