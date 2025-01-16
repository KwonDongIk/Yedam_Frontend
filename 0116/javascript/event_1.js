let item1 = document.querySelector('button[name = "add"]');
let item2 = document.querySelector('button[name = "minus"]');

item1.addEventListener('click', function () {

    let n1 = document.querySelector('#number1').valueAsNumber;
    let n2 = document.querySelector('#number2').valueAsNumber;

    console.log(n1 + n2);
    document.querySelector('#result').value = n1 + n2;    

});

item2.addEventListener('click', function () {

  let n1 = document.querySelector('#number1').valueAsNumber;
  let n2 = document.querySelector('#number2').valueAsNumber;

  console.log(n1 - n2);
  document.querySelector('#result').value = n1 - n2;    

});


// input[name = "first"]