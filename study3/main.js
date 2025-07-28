function calc(){
    var originPrice = document.querySelector("#originPrice").value;
    var rate = document.querySelector("#rate").value;
    if(originPrice && rate){
        var savedPrice = originPrice * (rate/100);
        var resultPrice = originPrice - savedPrice;
        document.querySelector("#showResult").innerHTML = `${savedPrice}원 할인되어 ${resultPrice}원에 구매하실수 있습니다`;
    }
}