//********************************EVENTS*******************************//
minus.addEventListener("click" ,_=>{
    let number = number_input.value;
number =Number(number);
if(number>1){
    number_input.value -=1
    minus.style.cursor="pointer"   
    minus.style.color="black"   
}
else{
    minus.style.cursor="not-allowed"; 
    minus.style.color="#E6E6E6";   
}
if(number_input.value == 1){
    minus.style.cursor="not-allowed"; 
    minus.style.color="#E6E6E6"; 
}
})
plus.addEventListener("click" ,_=>{
    minus.style.cursor="pointer"   
    minus.style.color="black"
let number = number_input.value;
number =Number(number)
    number_input.value =number+1
}
)

for (const iterator of imgs_small) {
    iterator.addEventListener("click" , _=>{
         choose_img(iterator.src)
         choose_color(iterator.id)
         clear(imgs_small,"active_img")
        iterator.classList.add("active_img")
}
    )
}
for (const iterator of colors) {
    iterator.addEventListener("click" , _=>{
        choose_img_with_color(iterator.id)
        clear(colors,"active_img")
        iterator.classList.add("active_img")
        choose_color_img(iterator.id)
    })

}
// THIS FOR REVIEWS BUTTON 
reviews.addEventListener("click" , _=>{
    main_content_description.classList.add("animate__bounceOut")
    main_content_reviews.classList.add("animate__delay-0_5s")
    main_content_reviews.classList.add("animate__bounceIn")
    main_content_reviews.classList.remove("animate__bounceOut")
    main_content_description.classList.remove("animate__delay-0_5s")
    main_content_reviews.style.opacity="1";
    reviews.classList.add("btn_active")
    description.classList.remove("btn_active")
    description.classList.add("inactive")
    reviews.style.cursor="not-allowed"
    description.style.cursor="pointer"
    let cancel_rank ;
console.log(reviews.style.cursor == "not-allowed");
if(!click_reviews){

    doRank()
    click_reviews=true
}

}
)
// THIS FOR DESCRIPTION BUTTON 
description.addEventListener("click" , _=>{
    main_content_description.classList.remove("animate__bounceOut")
    main_content_reviews.classList.remove("animate__delay-0_5s")
    main_content_description.classList.add("animate__delay-0_5s")
    main_content_description.classList.add("animate__bounceIn")
    main_content_reviews.classList.add("animate__bounceOut")
    description.style.cursor="not-allowed"
    reviews.style.cursor="pointer";

    description.classList.add("btn_active")
    reviews.classList.remove("btn_active")
    reviews.classList.add("inactive")
    // click_reviews=false
})

// THIS FOR CLICK TO ADD BUTTON 
add_button.addEventListener("click" , _=>{
    if(size.value){
        collectData()
    show_in_card()
    localStorage.setItem("clients_list" , JSON.stringify(clients))
    reset()
    calculationTotal()
    
        alert_span.classList.remove("d-none")
        alert_span.innerText="Add item success"
        alert_span.classList.add("alert_text_success")
        alert_span.classList.remove("alert_text_denger")
   

}
else{
        alert_span.classList.remove("d-none")
    alert_span.innerText="You must select the size"
    alert_span.classList.add("alert_text_denger")
    alert_span.classList.remove("alert_text_success")

}
})
