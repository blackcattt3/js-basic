function calc(){
    var currentYear = prompt("올해 년도를 입력하세요", "YYYY");
    var birthYear = prompt("태어난 년도를 입력하세요", "YYYY");
    var age = currentYear-birthYear+1;
    
    document.querySelector("#result").innerHTML= "당신의 나이는" + age +"세 입니다."
}

//let : 지역변수. {}밖으로 나가면 사용할수없다.
//const : 상숫값 선언.