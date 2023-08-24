//******************************FUNCTIONS ****************************** */
// THIS FUNCTIONS FOR PAGINATION THE IMGS

function showPagination() {
  firstNumber();
  let counter = 1;
  for (const iterator of swiper_slide) {
    pagination.style.height="300px"
    pagination.style.transform="translateY(-10%)"
    let div = document.createElement("div");
    div.style.width = "2px";
    div.id = counter++;
    div.style.height = `${500 /swiper_slide.length}% `;
    div.style.background = `white`;
    div.classList.add("opacity");
    slide_arr.push(div);
    pagination.appendChild(div);
  }
  slide_arr[0].classList.remove("opacity");

  lastNumber();
}

function firstNumber() {
  if (swiper_slide.length > 1) {
    let div = document.createElement("div");
    div.innerText = "01";
    pagination.appendChild(div);
    div.classList.add("pagination_style")
  div.style.paddingBottom="0.5rem";
  div.style.transform="translateX(-30%)"
  }
}

function lastNumber() {
  if (swiper_slide.length > 1) {
    let div = document.createElement("div");
    if(swiper_slide.length < 9){
      div.innerText = "0" + swiper_slide.length;
      pagination.appendChild(div);
      div.classList.add("pagination_style")
      div.style.paddingTop="0.5rem"  ;   
      div.style.transform="translateX(-30%)"
 
    }
    else{
      div.innerText =  swiper_slide.length;
      pagination.appendChild(div);
      div.classList.add("pagination_style")
      div.style.paddingTop=".5rem";
      div.style.transform="translateX(-30%)"

    }
  }
}

function controlThePaginationNext(arr) {
  if(index == slide_arr.length - 2){
    next.classList.add("not_allow");
  }
  else{
    next.classList.remove("not_allow");

  }
  if(index == arr.length - 1){
    next.classList.add("not_allow");

    return;
  }
  if (index < arr.length - 1) {
    arr[index].classList.add("opacity");
    arr[++index].classList.remove("opacity");
  }
}

function controlThePaginationPre(arr) {
  if(index == 0){
    pre.classList.add("not_allow");
  }
  else{
    pre.classList.remove("not_allow");

  }
  if(index == 0){
    pre.classList.add("not_allow");
    return;
  }
    arr[index].classList.add("opacity");
    arr[--index].classList.remove("opacity");
  


}

function controllNextPre(arr){
  if(index == 0){
    pre.classList.add("not_allow");
    pre.style.cursor="not-allowed"
    pre.firstElementChild.style.cursor="not-allowed"

  }
  if(index == arr.length-1){
    next.classList.add("not_allow");
    next.style.cursor="not-allowed"
    next.firstElementChild.style.cursor="not-allowed"


  }
  if(!(index ==0 && index == arr.length-1)){
    next.classList.remove("not_allow");
    next.style.cursor="pointer"
    next.firstElementChild.style.cursor="pointer"

    pre.classList.remove("not_allow");
    pre.style.cursor="pointer"
    pre.firstElementChild.style.cursor="pointer"

  }
}
let loop
function autoplay(){
let counter = 0
  if(innerWidth <= 1100){
    loop=setInterval(_=>{
      console.log("asd");
  if(counter == swiper_slide.length - 1){
    swiper_slide[swiper_slide.length - 1].classList.add("d-none")
    swiper_slide[0].classList.remove("d-none")
counter=0
  }
  else{
    swiper_slide[counter].classList.add("d-none")
    swiper_slide[++counter].classList.remove("d-none")
    swiper_slide[counter].classList.add("animate__zoomInRight")
  }
  if(innerWidth > 1100){
    clearInterval(loop) 
    
    for (const iterator of swiper_slide) {
     iterator.classList.add("d-none")
 
    }
    swiper_slide[0].classList.remove("d-none")
   }
},20000)
  }
  
}
// THIS FUNCTION FOR CLEAR THE ANY CLASE FOR GROUP
function clear(arr, className) {
  for (const iterator of arr) {
    iterator.classList.remove(className);
  }
}
//******************************CALLING FUNCTIONS ****************************** */
showPagination();
// IF THE MOBILE MODE IS PLAY 


// THIS TO CHANGE THE COPY RIGHT YEAR 
let footer_year=document.querySelector("footer.footer > p span")
let date = new Date

footer_year.innerText=date.getFullYear()