// var btn = document.getElementById("btn");

// function add(a,b){
//     var sum = a+b;
//     return sum;
// }
// document.write(add(3,4));

// var num1 = Number(prompt("첫번째 숫자"));
// var num2 = Number(prompt("두번째 숫자"));

// function add(num1,num2){
//     var result = num1+num2;
//     return result;
// }
// document.write(add(num1,num2));
// var btn = document.getElementById("btn");
// btn.onclick = document.write(add(num1, num2));



// 첫번째 버튼 눌렀을때 인자 받기 시작
// 두번째 버튼 눌렀을때 결과값 반환




// var getVar = document.getElementById("btn1");
// var showResult = document.getElementById("btn2");

// getVar.onclick = function(){
//     document.querySelector("#number").innerHTML = calc();
// }
// // getVar.addEventListener("click", calc);
// showResult.addEventListener("click",function(){
//     document.querySelector("#result").innerHTML = add(num1, num2);
// });
// // showResult.addEventListener("click", add(a,b))
// function calc(){
//     num1 = Number(prompt("첫번째 숫자"));
//     num2 = Number(prompt("두번째 숫자"));
//     return `입력된 숫자 : ${num1}과 ${num2}`;
// }

// function add(a,b){
//     return a+b;
// }




// resetButton.addEventListener("click", reset);
// 이벤트 핸들러를 등록하는 코드가 아니라 calc()를 즉시 실행하는 코드였다. calc()는 함수니까 ()를 붙이면 즉시 실행된다.
// 즉 페이지가 로드될때 이미 calc()가 실행되어 프롬프트가 뜬다.

// -> 함수 전체를 이벤트로 등록해야한다.
// getVar.onclick = function(){
//     document.getElementById("number").innerHTML = calc();
// }
// // ==
// getVar.onclick = () =>{
//     document.getElementById("result").innerHTML = calc();
// }

// 함수() -> 즉시 실행
// 함수 -> 이벤트로 전달(필요할때 실행됨)

// 혹은 addEventListener 사용하기

// getVar.addEventListener("click", calc()); // ❌ calc()는 즉시 실행됨

// //올바른 문법
// getVar.addEventListener("click", ()=>{document.getElementById("number").innerHTML = calc();});
// getVar.addEventListener("click", calc);



var getNumber = document.querySelector("#btn1");
var showResult = document.getElementById("btn2");

getNumber.onclick = calc;
showResult.onclick = function(){
    add(num1, num2);
};

function calc(){
    num1 = Number(prompt("첫번째 숫자를 입력하세요"));
    num2 = Number(prompt("두번째 숫자를 입력하세요"));
    document.querySelector("#number").innerHTML = `${num1}와 ${num2}`;
}

function add(a,b){
    document.querySelector("#result").innerHTML = `두수의 합은 ${a+b} 입니다`;
}