let holidays = [{month: 1, days:[1, 2, 3]}, {month: 2, days: [5, 8, 12]}, {month: 3, days: [1, 10, 15]}];

holidays.forEach(function(item, idx, ary){

  console.log(item.days[0]);

});













let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    
    let input_year = document.querySelector('input[name = "name_year"]').value;
    let input_month = document.querySelector('input[name = "name_month"]').value;
    
    makeCanlendar(input_year, input_month);
});

// let setting = new Date();

// let settingYear = setting.getFullYear();
// let settingMonth = (setting.getMonth())+1;

// console.log(settingYear);
// console.log(settingMonth);

makeCanlendar();


function makeCanlendar(year = 2025, month = 1){

  // let holidays = holidays.filter(function (item, idx, ary){
  //   if(item.month == month){
  //     return true;
  //   }
  //   return false;
  // });

  let now = new Date();

  now.setFullYear(year);
  now.setMonth(month-1);
  now.setDate(1);
  let space = now.getDay();//getDays(month); // 공백
  
  now.setMonth(month);
  now.setDate(0); // 말일
  let lastDays = now.getDate();//getLastDays(month); // 마지막 날짜

// 시작월 공백 알려주는 함수
// function getDays(month = 1){

//   if (month == 1 || month == 10){
//     return 3;
//   } else if (month == 2 || month == 3 || month == 11){
//     return 6;
//   } else if (month == 4 || month == 7){
//     return 2;
//   } else if (month == 5) {
//     return 4;
//   } else if (month == 6) {
//     return 0;
//   } else if (month == 8) {
//     return 5;
//   } else if (month == 9 || month == 12) {
//     return 1;
//   }

// }

// // 말일 알려주는 함수
// function getLastDays(month = 1){
//   if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
//     return 31;
//   } else if (month == 2) {
//     return 28;
//   } else if (month == 4 || month == 6 || month == 9 || month == 11){
//     return 30;
//   }

// }



let html = '';
let days = ['일', '월', '화', '수', '목', '금', '토'];

html += '<table style="width:100%; height:500px;" border="1">';
html += `<caption style="font-size:100px;">${year}년 ${month}월</caption>`;
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
