var sDetail = document.getElementById("show-btn");
var cDetail = document.getElementById("close-btn");

sDetail.onclick = showDetail;
cDetail.onclick = closeDetail;

function showDetail(){
    document.getElementById("detail").style.display= "block"
    document.getElementById("show-btn").style.display= "none"
}
function closeDetail(){
    document.getElementById("detail").style.display = "none"
    document.getElementById("show-btn").style.display = "block"
}
