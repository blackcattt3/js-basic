// let r = Number(prompt("반지름을 입력하세요"));
// let circle = new Circle(r);
// function calc(a){
//     let space = Math.round(Math.PI * a*a);
//     let around = Math.round(Math.PI * 2 * a);
//     document.write(`반지름이 ${a} 일 때<br>`)
//     document.write(`원의 넓이 : ${space}<br>`);
//     document.write(`원의 둘레 : ${around}`);
// }
// calc(r);

// function Circle(radius){
//     this.radius = radius;
//     this.circumference = function(){
//         return Math.floor(this.radius * 2 * Math.PI);
//     }
//     this.area = function(){
//         return Math.floor(this.radius * this.radius * Math.PI);
//     }
// }
// document.write(`반지름이 ${r}cm일 때<br>원의 둘레 : ${circle.circumference()}<br>원의 넓이 : ${circle.area()}`);


let r = Number(prompt("원의 반지름은? (cm)"));
let circle = new Circle(r)
function Circle(radius){
    this.radius = radius;
    this.space = function(){
        return Math.floor(Math.PI * this.radius * this.radius);
    }
    this.circumference = function(){
        return Math.floor(2 * Math.PI * this.radius);
    }
}
document.write(`반지름이 ${r}cm일 때<br>원의 둘레 : ${circle.circumference()}<br>원의 넓이 : ${circle.space()}`);
