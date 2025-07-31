function calc(){
    var originPrice = document.querySelector("#originPrice").value;
    var rate = document.querySelector("#rate").value;
    if(originPrice && rate){
        var savedPrice = originPrice * (rate/100);
        var resultPrice = originPrice - savedPrice;
        document.querySelector("#showResult").innerHTML = `${savedPrice}원 할인되어 ${resultPrice}원에 구매하실수 있습니다`;
    } else if(originPrice == ""){
        alert("가격을 입력하세요!")
    } else{
        alert("할인율을 입력하세요!")
    }
}

//빈 문자열을 받는다고했을때 originPrice == null 이 아니라 빈 문자열이므로 originPrice == "" 이렇게 되야함!!