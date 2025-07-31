// var age = prompt("나이를 입력하세요");
// if(age >= 18){
//     alert("성인입니다");
// } else{
//     alert("미성년입니다");
// }

// var userNumber = prompt("숫자를 입력하세요");
// var result = document.querySelector("#result");
// if(userNumber==null){
//     alert("숫자를 입력하세요");
// } else if(userNumber==0){
//     result.innerHTML = `입력한 값은 0입니다.`
// }
// else if(userNumber%3==0){
//     result.innerHTML = `${userNumber}은 3의 배수입니다.`
// }else{
//     result.innerHTML=`${userNumber}은 3의 배수가 아닙니다.`
// }

//prompt로 입력시 null로 취소버튼 눌렀는지 구분 가능
//Input으로 입력시 문자열 입력이므로 입력안했을때 userInput == ""(빈문자열)로 구분.


// var number = prompt("숫자를 입력하세요");
// var result = 0;
// var i;
// for (i=0;i<Number(number)+1;i++){
//     result+=i;
//     //prompt로 입력받은값은 문자열이기 때문에 숫자를 원한다면 Number() 함수를 이용해서 값을 바꿔줘야한다.
//     // Number(number)
// }
// document.querySelector("#result").innerHTML = `1부터 ${number}까지 더한 값은 ${result} 입니다.`

// for(var i=2;i<10;i++){
//     if(i==6){
//         document.write("<br>")
//     }
//     document.write("<div>")
//     document.write(`<h3>${i}단</h3>`)
//     for(var j=2;j<10;j++){
//         document.write(`${i}*${j} = ${i*j}<br>`);
//     }
//     document.write("</div>")
// }
// <br> -> 줄바꿈 태그

// var number = prompt("숫자를 입력하세요", 10);
// var result=1;
// var i = 1
// while(i<=number){
//     result*=i;
//     i++;
// }
// document.querySelector("#result").innerHTML = `${number}! = ${result}`;

var init=0;
var number = Number(prompt())
//프롬프트로 입력받은 것은 숫자입력받아도 숫자x 문자열이다!!
for(var i = 1;i<=number;i++){
    if(i%2 != 0){
        continue;
    }
    init+=i;
    document.write(`${i}-----${init}<br>`);
}