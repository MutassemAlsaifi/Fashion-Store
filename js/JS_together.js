let header_content_product=document.querySelector("section.product  .header_content"),
imgs_product=document.querySelectorAll("section.product .container .child"),
achievement=document.querySelector(".achievement div"),
 offset_header_content_product=header_content_product.offsetTop
  // THIS FOR PRODUCT  SECTION
   addEventListener("scroll" , _=>{
    if(scrollY >= offset_header_content_product - 300){
      header_content_product.classList.add("animate__zoomIn")
      header_content_product.style.opacity = "1";
  for (const iterator of imgs_product) {
    offset=iterator.offsetTop;
    if(scrollY >= offset - 300){
      iterator.classList.add("animate__backInDown")
      iterator.style.opacity = "1";

    }
  }
}
 
   })
    // TO ADD AN INDICATOR TO SITE 
    window.addEventListener("scroll" , _=>{
      let Hight =document.documentElement.scrollHeight - document.documentElement.clientHeight
     let scrollTop = document.documentElement.scrollTop
  achievement.style.width=`${(scrollTop / Hight) * 100 }%`
}
)
