//******************************EVENTS ****************************** */
addEventListener("load" , _=>{
  document.body.style.overflow="visible";
  loading.classList.add("d-none")
})

next.addEventListener("click", (_) => {
    controllNextPre(slide_arr)
    controlThePaginationNext(slide_arr);
    if(counter == slide_arr.length - 2){
      next.firstElementChild.style.cursor= "not-allowed"
      next.style.cursor= "not-allowed"
    }
    if(counter == slide_arr.length - 1){
      next.firstElementChild.style.cursor= "not-allowed"
      next.style.cursor= "not-allowed"
      return;
    }
    swiper_slide[counter].classList.add("d-none")
    swiper_slide[++counter].classList.remove("d-none")
  });
  pre.addEventListener("click", (_) => {
    controllNextPre(slide_arr)
    controlThePaginationPre(slide_arr);
    if(counter == 1){
      pre.firstElementChild.style.cursor= "not-allowed"
      pre.style.cursor= "not-allowed"
      pre.classList.add("not_allow")
    }
    if(counter == 0){
      pre.firstElementChild.style.cursor= "not-allowed"
      pre.style.cursor= "not-allowed"
      pre.classList.add("not_allow")
      return;
    }
    
    
    swiper_slide[counter].classList.add("d-none")
    swiper_slide[--counter].classList.remove("d-none")
  });
  
  for (const iterator of boxes_new) {
    iterator.addEventListener("click", (_) => {
      if(innerWidth >=992){
        clear(boxes_new, "flex_grow");
        iterator.classList.add("flex_grow");
      }
    });
  }
  addEventListener("resize", _=>{
    if(innerWidth <1100)
    clear(boxes_new, "flex_grow");
    boxes_new.forEach(element => {
      element.classList.add("flex_grow")
  });
  })
  for (const iterator of icons_About_us) {
    iterator.addEventListener("click" , _=>{
      clear(icons_About_us , "active")
      iterator.classList.add("active")
    })
  }
  let resize= false ;
  addEventListener("resize" ,_=>{
    if(innerWidth < 1100){
      if(!resize){
        autoplay()
  resize = true
      }
    }else {
      resize = false

    }
   
}
  )

  addEventListener("resize" , _=>{
    if(innerWidth <=1100){
      header.querySelector("img").src="asseste_index/imgs/footer/logo_black.svg"
    }
    else{
      header.querySelector("img").src="asseste_index/imgs/header/logo.svg"

    }
})