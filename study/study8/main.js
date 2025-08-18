// let isOpen = false;
// let bigPic = document.querySelector("#cup");
// let smallPic = document.querySelectorAll(".small");

// for(let i=0;i<smallPic.length;i++){
//     smallPic[i].addEventListener("click", showBig);
// }
// // this로 매개!
// function showBig(){
//     let showImg = this.getAttribute("src");
//     bigPic.setAttribute("src", showImg);
// }

// var myRect = document.querySelector("#rect");
// myRect.addEventListener("mouseover", function() {  // mouseover 이벤트 처리
// 	myRect.style.backgroundColor = "green";  // myRect 요소의 배경색 
// 	myRect.style.borderRadius = "50%";  // myRect 요소의 테두리 둥글게 처리
// });
// myRect.addEventListener("mouseout", function() {  // mouseout 이벤트 처리
// 	myRect.style.backgroundColor = "";  // myRect 요소의 배경색 지우기 
// 	myRect.style.borderRadius = "";  // myRect 요소의 테두리 둥글게 처리 안 함
// });

// let Detail = document.querySelector("#view");
// Detail.addEventListener("click", showDetail);

// function showDetail(){
//     document.querySelector("#detail").style.display = "block";
//     document.querySelector("#view").style.display = "none";
// }

// let view = document.querySelector("#view");
// view.addEventListener("click", function(){
//     if(isOpen == false){
//         document.querySelector("#detail").style.display = "block";
//         view.innerHTML = "상세 설명 닫기";
//         isOpen = true;
//     } else{
//         document.querySelector("#detail").style.display = "none";
//         view.innerHTML = "상세 설명 보기";
//         isOpen = false;
//     }
// })

// function newRegister(){
//     let newP = document.createElement("p");
//     let userName = document.querySelector("#userName");
//     let newText = document.createTextNode(userName.value);
//     newP.appendChild(newText);

//     let delBttn = document.createElement("span");
//     let delText = document.createTextNode("X");
//     delBttn.appendChild(delText);
//     // let delAttr = document.createAttribute("class");
//     // delAttr.value = "del";
//     // delBttn.setAttributeNode(delAttr);
//     delBttn.setAttribute("class", "del");
//     newP.appendChild(delBttn);

//     let nameList = document.querySelector("#nameList");
//     // nameList.appendChild(newP);
//     nameList.insertBefore(newP,nameList.childNodes[0]);
//     userName.value = "";

//     let removeBttns = document.querySelectorAll(".del");

//     for(let i=0;i<removeBttns.length;i++){
//         removeBttns[i].addEventListener("click", function(){
//             if(this.parentNode.parentNode){
//                 this.parentNode.parentNode.removeChild(this.parentNode);
//             }
//         });
//     }
// }


// let bigPic = document.querySelector("#cup");
// let smallPic = document.querySelectorAll(".small");

// for(let i=0;i<smallPic.length;i++){
//     smallPic[i].addEventListener("click", function(){
//         bigPic.src = this.src
//     });
// }


// function newRegister(){
//     let newP = document.createElement("p");
//     let userName = document.querySelector("#user-name");
//     let newText = document.createTextNode(userName.value);
//     newP.appendChild(newText);

//     let newS = document.createElement("span");
//     let sText = document.createTextNode("X");
//     newS.appendChild(sText);
//     newS.setAttribute("class", "del");
//     newP.appendChild(newS);

//     let nameList = document.querySelector("#name-list");
//     nameList.insertBefore(newP, nameList.children[0]);
//     userName.value = "";

//     var removeBtn = document.querySelectorAll(".del");
//     for(let i=0;i<removeBtn.length;i++){
//         removeBtn[i].addEventListener("click", function(){
//             if(this.parentNode.parentNode){
//                 this.parentNode.parentNode.removeChild(this.parentNode);
//             }
//         })
//     }
// }



function newRegister(){
    let newP = document.createElement("p");
    let userName = document.querySelector("#user-name");
    let newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    let newS = document.createElement("span");
    let sText = document.createTextNode("X");
    newS.setAttribute("class", "del");
    newS.appendChild(sText);
    newP.appendChild(newS);

    let nameList = document.querySelector("#name-list");
    nameList.insertBefore(newP,nameList.children[0]);
    userName.value = ""

    let delBtn = document.querySelectorAll(".del");
    for(let i=0;i<delBtn.length;i++){
        delBtn[i].addEventListener("click", function(){
            if(this.parentNode.parentNode){
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
            // this -> span
            // this.parentNode -> p
            // this.parentNode.parentNode -> name-list
        })
    }
}