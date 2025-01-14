// 입력받은 숫자 -> 2의 배수인지, 3의 배수인지


let number_01 = parseInt(prompt("숫자를 입력하십시요. : "));


if (isNaN(number_01)) {
  console.log("숫자가 아닙니다.");
} else if (number_01 == 0) {
  console.log("다른 값을 입력하십시요.");
} else if (number_01 != null) {
    if (number_01 % 2 == 0 && number_01 % 3 == 0) {
        console.log(number_01 + '은 2의 배수이면서 3의 배수입니다.');
    } else if (number_01 % 2 == 0) {
      console.log(number_01 + '은 2의 배수입니다.');
    }
  } else if (number_01 % 3 == 0) {
    console.log(number_01 + '은 3의 배수입니다.');
  } else if (number_01 % 2 != 0 || number_01 % 3 != 0) {
    console.log(number_01 + '은 2의 배수도 아니고 3의 배수도 아닙니다.');
  }