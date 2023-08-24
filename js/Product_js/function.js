//********************************FUNCTIONS*******************************//
// THIS TWO FUNCTION TO CONCAT THE DIVES COLOR WITH PICTURE 
function choose_color(id){
    let color=document.querySelector(`section.t-Shir_shopping .right_content 
    .colors > div#${id} `)
    clear(colors,"active_img")
    color.classList.add("active_img")
}
function choose_color_img(id){
    let img=document.querySelector(`section.t-Shir_shopping .samll_pic img#${id}`)
    clear(imgs_small,"active_img")
    img.classList.add("active_img")

}
// TO CHANCE THE SRC FOR THE BIG IMG 
function choose_img(src){
    big_img.src=src;
}
// TO FIND THE IMG 
function choose_img_with_color(id){
    let img = document.querySelector(`#${id}`)
    choose_img(img.src)
}
function collectData(){
    
    let img =document.querySelector(`section.t-Shir_shopping .samll_pic .active_img`)
    let clothes={}
    clothes.name=name_clothes.innerText
    clothes.price=available_price.innerText
    clothes.imgSrc=img.src
    clothes.color=img.id
    clothes.amount=number.value;
    clothes.size=size.value;
    let num 
    
        if(uniqueItem(clothes.color ,clothes.size) < 0)
        clients.push(clothes)
    
    else{
        num=uniqueItem(clothes.color ,clothes.size)
        let UpdateAmount= +clients[num].amount
        UpdateAmount+= +clothes.amount;
        clients[num].amount=UpdateAmount
        // localStorage.setItem("clients_list" , JSON.stringify(clients))

    }
    
}
    
function uniqueItem(color ,size){
        for (let index = 0; index < clients.length; index++) {
            if(clients[index].color == color && clients[index].size ==size){
                num = index;
                return num
                
            }
        }
        return -1;
    }
function doRank(){
        for (const iterator of ranks) {
            let counter= 0 
                let rank = iterator.getAttribute("rank")
                cancel_rank= setInterval(_=>{
                    if (counter <= rank ) {
                        iterator.firstElementChild.style.width= counter++ +"%"
                    } else{
                        clearInterval(cancel_rank)
                    }} , 5000 /rank)
        }
    
        let rank = ranks[4].getAttribute("rank")
        cancel_rank= setInterval(_=>{
            if (counter <= rank ) {
                console.log(iterator.firstElementChild);
                iterator.firstElementChild.style.width= counter++ +"%"
            } else{
                clearInterval(cancel_rank)
            }} , 5000 /rank)
}

// TO CLEAR ANY CLASS 
function clear(arr,class_name){
    for (const iterator of arr) {
        iterator.classList.remove(class_name)
    }
}




// THIS TO CHANGE THE COPY RIGHT YEAR 
let footer_year=document.querySelector("footer.footer > p span")
let date = new Date

footer_year.innerText=date.getFullYear()