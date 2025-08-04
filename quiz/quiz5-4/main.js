var getNumber = document.getElementById("number-btn");

// getNumber.onclick = () => {
//     document.getElementById("result").innerHTML = compare();
// }
getNumber.addEventListener("click", ()=>{
    document.getElementById("result").innerHTML = compare();
});

// 이벤트 리스너를 이용하여 쓸때는 괄호넣으면 오류난다!
//  getVar.addEventListener("click", calc); 이렇게 괄호 빼고 써야함


function compare(){
    num1 = Number(prompt("첫번째 숫자"));
    num2 = Number(prompt("두번째 숫자"));
    result = num1>num2?num1:num2;
    return result;
}