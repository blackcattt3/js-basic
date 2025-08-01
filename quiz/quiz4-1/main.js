var number = Number(prompt("숫자를 입력하세요"));
var result = 1;
var i = 1;
while(i<=number){
    result *= i;
    i++;
}
document.write(`<h3>${result}</h3>`);