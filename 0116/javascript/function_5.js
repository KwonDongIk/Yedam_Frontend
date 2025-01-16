// function_5.js
// this: obj일때 객체 자기자신을


let obj = {
  name: "홍길동",
  birth: "1998-06-17",
  bloodType: "A",
  showInfo: function() {
    console.log(`이름은 ${this.name} 입니다. 생일은 ${this.birth} 입니다.`);
  },
  addNumber: function (num1 = 0, num2 = 0){
    return num1 + num2;
  },
  calcFuc: function (num1 = 0, num2 = 0, calcFuc){
    return calcFuc(num1, num2);
  }
}
obj.showInfo();

alert(obj.addNumber(10, 12));

let result = obj.calcFuc(10, 20, function (a, b){
  return a+b;
});
console.log(`결과값 : ${result}`);