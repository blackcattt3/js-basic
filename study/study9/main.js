// let check = document.querySelector("#shippingInfo");

// check.addEventListener("click", function(){
//     if(check.checked == true){
//         document.querySelector("#shippingName").value = document.querySelector("#billingName").value;
//         document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value;
//         document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value;
//     } else{
//         document.querySelector("#shippingName").value = "";
//         document.querySelector("#shippingTel").value = "";
//         document.querySelector("#shippingAddr").value = "";
//     }
// });


// let userId = document.querySelector("#user-id");
// let pw1 = document.querySelector("#user-pw1");
// let pw2 = document.querySelector("#user-pw2");

// userId.onchange = checkId;
// pw1.onchange = checkPw;
// pw2.onchange = comparePw;

// function checkId(){
//     if(userId.value.length < 4 || userId.value.length>15){
//         alert("4~15자리의 영문과 숫자를 사용하세요.");
//         userId.select();    // 다시 입력할수 있도록 userId 필드 선택
//     }
// }
// function checkPw(){
//     if(pw1.value.length<8){
//         alert("비밀번호는 8자리 이상이어야 합니다");
//         pw1.value ="";
//         pw1.focus();
//     }
// }
// function comparePw(){
//     if(pw1.value != pw2.value){
//         alert("암호가 다릅니다. 다시 입력하세요");
//         pw2.value = "";
//         pw2.focus();
//     }
// }


