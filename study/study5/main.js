// var num1 = Number(prompt("첫번째 숫자 :"))
// var num2 = Number(prompt("두번째 숫자 :"));
// var result = addNumber(num1,num2);
// alert(`두 수를 더한 값은 ${result}입니다.`);

// function addNumber(a,b){
//     var sum = a+b;
//     return sum;
// }

// add("123", "abc");
// function add(a,b){
//     var local = a+b;
//     if(b != null){
//         let block = b+a;
//     }
//     console.log(local);
//     console.log(block); // block이 undefined 라고 나옴.
// }

//익명함수
// var add = function(a,b){
//     return a+b;
// }
// var sum=add(5,7);
// console.log(sum);


//즉시실행함수
// var result = (function(){
//     return 5;
// })();
// console.log(result);


// var hi = function(){
//     return "안녕하세요";
// }
// console.log(hi());

// let hi = () => "안녕하세요";
// console.log(hi());


// var greet = function(name){
//     return `${name}님 안녕하세요`;
// }
// console.log(greet("경희"));


// let greet = (name) => `${name}님 안녕하세요`;
// console.log(greet("옥분"));

// var add = function(a,b){
//     return a+b;
// }
// console.log(add(1,2));

// var add = (a,b) => a+b;
// console.log(add(1,4));


function showDetail(){
    document.querySelector("#detail").style.display = "block";
    document.querySelector("#basic-btn").style.display = "none";
}

function closeDetail(){
    document.querySelector("#basic-btn").style.display="block";
    document.querySelector("#detail").style.display="none";
}

var coverImage = document.getElementById("cover");
coverImage.onclick = function(){
    alert("이미지 입니다");
}

coverImage.onmouseover = function(){
    coverImage.style.border = "5px solid black"
}
//이미지 위에 커서 댔을때

coverImage.onmouseout = function(){
    coverImage.style.border = ""
}
//커서 이미지 밖일때