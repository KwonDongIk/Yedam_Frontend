let btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let inputValue = document.querySelector('#input_dan').value;
    let html = "";
    for(let i = 1; i < 10; i++){

      html += `<p>${inputValue} * ${i} = ${inputValue * i}</p>`;
      
    }
    // html += "";
    document.querySelector('#show').innerHTML = html;
});

// console.log(`${inputValue} * ${i} = ${inputValue * i} 입니다.`);
// innerTEXT -> html에 순수 text값만 출력함