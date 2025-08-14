// var myArray = new Array();

// var numbers = ["one", "two", "three", "four"];      // 리터럴 방식
// var numbers = new Array("one", "two", "three", "four");

// var seasons = ["봄", "여름", "가을", "겨울"];
// console.log(seasons.length);

// for (var i=0;i<seasons.length;i++){
//     console.log(seasons[i]);
// }

// var triple = [3,6,9];
// for (var i=0;i<triple.length;i++){
//     console.log(triple[i]);
// }

// var num = ["1", "2", "3"];
// var chars = ["a", "b", "c"];

// console.log(num.concat(chars));
// console.log(num);

// console.log(num.join("-"));

// let myColor = ["red", "green", "blue"];
// console.log(myColor.join("+"));

// let btn8 = document.getElementById("btn-8");
// let btn9 = document.getElementById("btn-9");

// btn8.addEventListener("click", function(){return 8});
// btn9.addEventListener("click", function(){return 9});

// myColor = ['red', 'green', 'blue'];
// colorString = myColor.join("+");
// console.log(colorString);

// num.push("4", "5");
// console.log(num);

// num.unshift("0");
// console.log(num);

// let double = new Array("2", "4", "6", "8");
// console.log(double);
// double.push("10");
// double.pop();
// console.log(double);
// console.log(double.pop());
// console.log(double.pop());
// console.log(double.shift());
// console.log(double);


// var num = [0,1,2,3,4,5];
// console.log(num.splice(2));
// console.log(num);
// console.log(num.splice(2,2));
// console.log(num);

// num.splice(2,0,"JS");
// console.log(num);

// var study = ['html', 'css', 'js'];
// study.splice(2, 0, "web");
// console.log(study);

// var chars = ["a", "b"];
// chars.splice(2,0,"c", "d");
// console.log(chars);

let itemList = [];
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addList);

function addList(){
    let item = document.getElementById("item").value;
    if(item != null){
        itemList.push(item);
        document.getElementById("item").value = "";
        document.getElementById("item").focus();
    }
    showList();
}

function showList(){
    let list = "<ul>";
    for (let i=0; i<itemList.length; i++){
        list += `<li>${itemList[i]}<span class="close" id="${i}">X</span></li>`;
    }
    list += "</ul>";

    document.getElementById("item-list").innerHTML = list;

    let remove = document.querySelectorAll(".close");   // 삭제버튼을 변수로 저장. 배열 형태가 됨.
    // querySelectorAll -> css선택자 문법을 이용해서 조건에 맞는 모든 요소를 한번에 찾아 NodeList로 반환하는 메서드
    for (let i=0;i<remove.length;i++){
        remove[i].addEventListener("click", removeList);
    }
}

function removeList(){
    // console.log(this);
    let id = this.getAttribute("id");       // this(누른 버튼)의 id값 가져와 id 변수에 저장
    // getAttribute : 지정한 속성의 값을 가져오는 함수
    // 여기서는 removeList가 이벤트 리스너로 등록된 함수라서,
    // this는 “이벤트가 발생한 요소”를 가리킴.
    // 즉, 클릭된 .close <span> 자체.
    itemList.splice(id,1);   //인덱스(id)에서 요소 한개만 삭제
    showList();
}