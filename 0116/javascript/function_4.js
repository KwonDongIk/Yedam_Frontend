// function_4.js

// 이벤트 - 이벤트핸들러

let item = document.querySelector('button'); // 화면상에 있는 선택자
console.log(item);

item.addEventListener('click', function () {

    alert('클릭완료'); 

});

item.addEventListener('mouseover', function () {

    item.style.backgroundColor = 'yellow';

});

item.addEventListener('mouseout', function () {

  item.style.backgroundColor = 'blue';
  item.style.color = 'white';

});

