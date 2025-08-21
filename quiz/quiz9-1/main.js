let basicPrice = 24000;
let items = document.querySelectorAll(".checkbx");

for(let i=0;i<items.length;i++){
    items[i].addEventListener("click", function(){
        let price =Number(this.value);
        basicPrice += this.checked? price: -price;
        document.querySelector(".price").value = `${basicPrice}`;
    });
}

