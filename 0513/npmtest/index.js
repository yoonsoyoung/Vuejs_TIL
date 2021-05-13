let result = function (n1, n2) {
  return n1 + n2;
};

console.log("결과 : " + result(10, 20));

let prm = require("prompt-sync")();
let name = prm("이름 : ");
console.log(`당신의 이름은 ${name}입니다.`);
