for(var i=2;i<=9;i++){
    if(i==6){
        document.write("<br>");
    }
    document.write(`<div>`);
    document.write(`<span>${i}</span>단<br>`);
    for(var j=2;j<=9;j++){
        document.write(`${i}x${j}=${i*j}<br>`);
    }
    document.write(`</div>`);
}