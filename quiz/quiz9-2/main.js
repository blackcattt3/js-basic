let radius = document.querySelector("#radius");
let circumference = document.querySelector("#circumference");
let area = document.querySelector("#area");
let calcBtn = document.querySelector("#calc-btn");

calcBtn.addEventListener("click", calc);

function calc(){
    let circumR = (Math.PI*Number(radius.value)*2).toFixed(2)     // 소수점 두자리 까지
    let areaR = (Math.PI*Number(radius.value)*Number(radius.value)).toFixed(2)
    circumference.value = circumR;
    area.value = areaR;
}

