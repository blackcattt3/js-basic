function calc(){
    var currentYear = prompt("현재 년도를 입력하시오");
    var birthYear = prompt("태어난 년도를 입력하시오");
    var age = currentYear-birthYear+1;
    // alert(`당신의 나이는 ${age} 입니다`);
    document.querySelector("#result").innerHTML = (`당신의 나이는 ${age} 입니다`);
}

//let : 지역변수. {}밖으로 나가면 사용할수없다.
//const : 상숫값 선언.