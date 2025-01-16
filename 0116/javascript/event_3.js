let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let inputValue = document.querySelector('input[name = "name_month"]').value;
    makeCanlendar(inputValue);
});











function makeCanlendar(month = 1){

let space = getDays(month); // 공백
let lastDays = getLastDays(month); // 마지막 날짜

// 시작월 공백 알려주는 함수
function getDays(month = 1){

  if (month == 1 || month == 10){
    return 3;
  } else if (month == 2 || month == 3 || month == 11){
    return 6;
  } else if (month == 4 || month == 7){
    return 2;
  } else if (month == 5) {
    return 4;
  } else if (month == 6) {
    return 0;
  } else if (month == 8) {
    return 5;
  } else if (month == 9) {
    return 1;
  }

}

// 말일 알려주는 함수
function getLastDays(month = 1){
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
    return 31;
  } else if (month == 2) {
    return 28;
  } else if (month == 4 || month == 6 || month == 9 || month == 11){
    return 30;
  }

}



let html = '';
let days = ['일', '월', '화', '수', '목', '금', '토'];

html += '<table style="width:100%; height:500px;" border="1">';
html += `<caption style="font-size:100px;">${month}월</caption>`;
html += '<thead><tr>';

for (let day of days){
  html += (`<th>${day}</th>`);
}

html += '</tr></thead>';
html += '<tbody id="list"><tr>';

for (let i = 0; i < space; i++){

  html += '<td></td>'

}

for (let i = 1; i <= lastDays; i++){

  if ((i + space) % 7 == 0){
    html += `<td style="background-color: blue; color: white;">${i}</td>`;
  } else if ((i + space) % 7 == 1) {
    html += `<td style="background-color: red; color: white;">${i}</td>`;
  } else {

  html += (`<td>${i}</td>`);
  
  }

  if ((i+ space) % 7 == 0){

    html += '</tr><tr>'

  }
}

for (let i = 0; i < 1; i++){

  html += '<td></td>'

}

html += '</tr></tbody>';
html += '</table>';

document.querySelector('#show').innerHTML = html;

}
