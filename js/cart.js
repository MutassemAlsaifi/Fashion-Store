let body_card=document.querySelector(".main_cart .body_cart .main_content")
clients =JSON.parse(localStorage.getItem("clients_list"))||[],
available_price=document.querySelector("section.t-Shir_shopping .T_shirt .price .available_price")
total=document.querySelector(".main_cart .cost .total span")
alert_span=document.querySelector("section.t-Shir_shopping .add_div span.alert")

// THIS FOR RESET THE INPUTS AFTER ADD IN CARD 
function reset(){
    size.value=""
    number.value=1
    choose_color("white")
choose_color_img("white")
choose_img_with_color("white")
}

function show_in_card(){
    if(clients.length<=0){
        body_card.innerHTML=`
        <div id="Empty_cart" style="opacity :0.5">
        <img src="../Product_View/imgs/cart/empty-cart.png" alt="">
        <h2 class="head">TEH CART IS EMPTY</h2>
  </div>`
    }
    else{
    body_card.innerHTML=""
    for (const iterator in clients) {
        let price =Number(clients[iterator].amount) * Number(clients[iterator].price);
        price=Math.round(price)
    let row = `<div class="row">
    <div class="name">
  <img src=${clients[iterator].imgSrc} alt="${clients[iterator].color}">
<p>${clients[iterator].name}</p>
  </div>
  <div>${clients[iterator].color}</div>
  <div>${clients[iterator].size}</div>
  <div class="amount">
    <div class="number" id="${iterator}">
      <i class="fa-solid fa-minus minus"></i>
      <input class="text" value="${clients[iterator].amount}">
      <i class="fa-light fa-plus plus"></i>
    </div>
  </div>
  <div class="center">
    <div class="price">$${price}</div>
  </div>
  <i class="fa-light fa-xmark cancel" id="${iterator}"></i>
</div>`

body_card.innerHTML +=row
document.querySelector(".icons i div.count_item").innerText=clients.length
    }
}
}
document.addEventListener("click" , e=>{
    if(e.target.classList.contains("minus")){
        update_Value_minus(e.target.parentElement , e.target)
    }if(e.target.classList.contains("plus")){
        update_Value_plus(e.target.parentElement)
    }
})
function update_Value_minus(parentElement ,node){
    let number=parentElement.querySelector(`input`)
     number_change = number.value;
     number_change =Number(number_change);
    if(number_change>1){
        number.value -=1;
        node.style.cursor="pointer" ;  
        node.style.color="black";
        changeAmount(parentElement,number.value)
        if(number.value==1){
            node.style.cursor="not-allowed";
        }
}
if(number_change==1){

    node.style.cursor="not-allowed";
}


}
function update_Value_plus(parentElement){
    let number=parentElement.querySelector(`input`)
    let minus=parentElement.querySelector(`.minus`)
    
    let  number_change = number.value;
    minus.style.cursor="pointer" ;  
    number_change =Number(number_change)
    number.value =number_change+1
    changeAmount(parentElement,number.value)
}
function changeAmount(parentElement ,number){
    let Newprice=Math.round(Number(number) * 90)
    body_card.children[parentElement.id].children[4].firstElementChild.innerText="$" +Newprice  
    clients[parentElement.id].amount=number
    localStorage.setItem("clients_list" , JSON.stringify(clients))
    calculationTotal()
}
document.addEventListener("click" , e=>{
    if(e.target.classList.contains("cancel")){
    cancel (e.target.id)
}
})
function cancel (id){
    clients.splice(id ,1)
    localStorage.setItem("clients_list" , JSON.stringify(clients))
    document.querySelector(".icons i div.count_item").innerText=clients.length
    show_in_card()
    calculationTotal()
}
function calculationTotal(){
    let t=0
for (const iterator of clients) {

    t+=Number(iterator.price) * Number(iterator.amount)
}
total.innerText=Math.round(t)

}
show_in_card()
calculationTotal()