function showPrice(){
    var originalPrice = document.querySelector("#original_price").value;
    var rate = document.querySelector("#discount_percentage").value;
    var savedPrice = originalPrice * (rate/100);
    var resultPrice = originalPrice - savedPrice;
    document.querySelector("#result").innerHTML = `상품의 원래 가격은 ${originalPrice}원이고, 할인율은 ${rate}%입니다.`
    document.querySelector("#cost-result").innerHTML = `할인받는 가격은 ${savedPrice}원으로 ${resultPrice}원에 구매하실수 있습니다`
}