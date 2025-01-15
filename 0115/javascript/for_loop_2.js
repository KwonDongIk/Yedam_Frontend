// for_loop_2
// 1-10 까지 짝수값을 구하는 반복

for(let i = 1; i < 10; i ++){
  document.write('<table border="1px">');
  document.write('<tbody>');
  document.write(`<h1>구구단 ${i}단</h1>`);
  for(let j = 1; j < 10; j ++){
    if(j % 2 == 0){
    document.write(`<tr><td style='background-color: yellow;'>${i} * ${j} = ${i * j} <br></td></tr>`)
    document.write('<tbody');
    document.write('</table>');
    }
    else{
      document.write(`<tr><td>${i} * ${j} = ${i * j}<br></td></tr>`)
    }
  }
}





// let html = '';
// html += '<table border = "1">';
// html += '<tbody>';
// for(let i = 1; i < 10; i ++){
//   for(let j = 1; j < 10; j ++){
//     document.write(`<tr><td style='background-color: yellow;'>${i} * ${j} = ${i * j} <br></td></tr>`)}
//   }
//   html += '</tbody>';
//   html += '</table>'
//   document.write(html);



