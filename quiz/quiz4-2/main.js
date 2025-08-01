// var number = Number(prompt("숫자를 입력하세요"));
// if(number%2 == 0){
//     document.write(`${number}은 짝수입니다.`);
// } else{
//     document.write(`${number}은 홀수입니다.`);
// }

var i = 1;
var result = 0;
while (i<=100){
    if(i%3==0){
        document.write(`${i},`);
        result++;
    }
    i++;
}
document.write(`<br>3의 배수의 갯수 : ${result}`);