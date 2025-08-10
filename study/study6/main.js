// var toyRobot={
//     productId: "123-12",
//     name: "Robot",
//     price:"25,000",
//     madeIn:"korea",
//     quantity: 10,
//     showStock:function(){
//         document.getElementById("display").innerHTML = `${this.name} 제품은 ${this.quantity}개 남아있습니다.`;
//     },
//     showPrice:function(){
//         alert(`가격은 ${this.price}원 입니다.`);
//     }
// };

// toyRobot.showStock();
// toyRobot.showPrice();

// function Book(title, author, volume, price){
//     this.title = title;
//     this.author = author;
//     this.volume = volume;
//     this.price = price;
// }

// var html = new Book("웹 표준의 정석", "Ko", "608", "28,000");
// var youtube = new Book("유튜브 영상 만들기", "kim", '368', '16,000');
// var python = new Book('점프 투 파이썬', 'Park', '352', '18,800');
// var bookList = [html,youtube,python];

// document.write("<h1>책 제목으로 살펴보기</h1>");
// for(var i=0; i<bookList.length;i++){
//     document.write(`<p>${bookList[i].title}</p>`);
// }

// document.write("<h1>가격으로 살펴보기</h1>");
// for(var i=0; i<bookList.length;i++){
//     document.write(`<p>${bookList[i].price}</p>`);
// }


// Date 객체
// var now = new Date();
// console.log(now.getMonth()+1);




// 기념일 계산기

var now = new Date();
var first = new Date("2025-01-01");

var toNow = now.getTime();      // 밀리초로 가져오기!!  지금
var toFirst = first.getTime();  // 처음 만난 날

var passedTimes = toNow - toFirst;
var passedDay = Math.round(passedTimes / (1000*60*60*24));      // 일수
// 1000*60*60*24 -> 1일
document.getElementById("day").innerHTML = `${passedDay}일 째`
// console.log(passedDay);

var day_100 = (toFirst + (1000*60*60*24*100))     // 100일 후
// console.log(day_100);     // 밀리초로 표시
var day_100 = new Date(day_100);    // 년월일로 표시
// console.log(day_100);     
var year_100 = day_100.getFullYear();
var month_100 = day_100.getMonth()+1;
var date_100 = day_100.getDate();
// console.log(month_100);
document.getElementById("d_100").innerHTML = `${year_100}-${month_100}-${date_100}`

// 밀리초로 100일 후 밀리초 계산
// 계산된 밀리초를 다시 날짜 정보로 변환 ( new Date(a) )
// getFullYear()로 년 정보 가져오기
// getMonth()로 월 정보 가져오기
// getDate()로 일 정보 가져오기

var day_200 = (toFirst + (1000*60*60*24*200));
var day_200 = new Date(day_200);
// console.log(day_200);
var year_200 = day_200.getFullYear();
var month_200 = day_200.getMonth();
var date_200 = day_200.getDate();
document.getElementById("d_200").innerHTML = `${year_200}-${month_200}-${date_200}`


// var day_365 = toFirst + (1000*60*60*24*365);
// var day_365 = new Date(day_365); 
// // console.log(day_365);
// var year_365 = day_365.getFullYear();
// var month_365 = day_365.getMonth()+1;
// var date_365 = day_365.getDate();
// document.getElementById("d_365").innerHTML = `${year_365}-${month_365}-${date_365}`

// var day_500 = toFirst + (1000*60*60*24*500);
// var day_500 = new Date(day_500);
// var year_500 = day_500.getFullYear();
// var month_500 = day_500.getMonth();
// var date_500 = day_500.getDate();
// document.getElementById("d_500").innerHTML = `${year_500}-${month_500}-${date_500}`;

function calc(days){
    var future = toFirst + (1000*60*60*24*days);
    var future = new Date(future);
    var fYear = future.getFullYear();
    var fMonth = future.getMonth()+1;
    var fDate = future.getDate();
    document.getElementById(`d_${days}`).innerHTML = `${fYear}-${fMonth}-${fDate}`;
}

calc(200);
calc(365);
calc(500);