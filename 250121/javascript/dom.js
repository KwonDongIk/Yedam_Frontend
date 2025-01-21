// dom.js

document.addEventListener('DOMContentLoaded', init);

  function init() {

    console.log(document);
    // document.forms[0].addEventListener('submit', function(){
    document.forms.myForm.addEventListener('submit', function(e){
      e.preventDefault(); // 기본 기능 차단
      let memberId = document.querySelector('input[name="member_id"]').value;
      let memberName = document.querySelector('input[name="member_name"]').value;
      let memberScore = document.querySelector('input[name="point"]').value;
      if(memberId == null || memberId.length < 5 || memberId.length > 20){
        alert("ID를 5자 이상 20자 이하로 생성해주세요.");
        return; // 함수 종료
      }
      // console.log(memberId.length);
      // <tr><td>admin</td></tr> 필요한 함수 : createElement, appendChild

      let member = {member_id: memberId, member_name: memberName, point: memberScore};
      let trCreate = makeTr(member); // 값

      // tbody의 하위요소로 추가
      document.querySelector('#list').appendChild(trCreate);
    


      // let memberAry = [memberId, memberName, memberScore];
      // let trCreate = makeTrAry(memberAry);

      // function makeTrAry(mbr = []){
      //   let trCreate = document.createElement('tr');

      //   mbr.forEach(function (item){
      //     let td = document.createElement('td');
      //     td.innerText = item;
      //     trCreate.appendChild(td);
      //   });
      //   return trCreate;
      // }
      

      // document.querySelector('tbody input').checked = false;

      let ckboxHead = document.querySelector('thead input').addEventListener('change', function(){
        
        let chkbox = document.querySelectorAll('tbody input').forEach(function(item){
            // item.checked = document.querySelector('thead input[type = "checkbox"]').value; 
            item.checked = this.checked;
        }.bind(this));
      });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      function makeTr(mbr = {}){

      let trCreate = document.createElement('tr');

      let td_1 = document.createElement('td');
      let ckbox = document.createElement('input');
      ckbox.type = 'checkbox';
      td_1.appendChild(ckbox);
      trCreate.appendChild(td_1);

      for (prop in mbr){
        let td = document.createElement('td');
        td.innerText = mbr[prop];
        trCreate.appendChild(td);
      }

      let td = document.createElement('td');
      let btn = document.createElement('button');
      btn.style.backgroundColor = 'yellow';
      btn.innerHTML = '삭제';
      btn.addEventListener('click', function() {
        btn.parentElement.parentElement.remove();
      });
      
      // <td><button>삭제</button></td>
      td.appendChild(btn);
      trCreate.appendChild(td);
      return trCreate; // return undefied;

      // let trCreate = document.createElement('tr'); // 부모

      // let tdCreate1 = document.createElement('td'); // 회원ID
      // tdCreate1.innerText = memberId;
      // trCreate.appendChild(tdCreate1);

      // let tdCreate2 = document.createElement('td'); // 회원 이름
      // tdCreate2.innerText = memberName;
      // trCreate.appendChild(tdCreate2);

      // let tdCreate3 = document.createElement('td'); // 회원 점수
      // tdCreate3.innerText = memberScore;
      // trCreate.appendChild(tdCreate3);
      

      // document.querySelector('#list').appendChild(trCreate);  
      // console.log(trCreate);
      }
    })
  }


