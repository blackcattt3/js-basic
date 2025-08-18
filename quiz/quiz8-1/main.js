// let changeP = document.querySelector("#paragraph");
// changeP.addEventListener("click", function(){
//     this.style.fontSize = "20px";
//     this.style.color = "blue";
//     this.style.backgroundColor = "#ccc";
// })

let list = document.querySelectorAll(".list");
for(let i=0;i<list.length;i++){
    list[i].addEventListener("click", function(){
        this.style.color = "#ccc";
    })
}