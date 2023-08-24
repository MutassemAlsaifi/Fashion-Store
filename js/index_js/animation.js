//******************************ANIMATION ****************************** */
let firstImg=document.querySelector("main .slide"),
main_content=document.querySelector("main .mainText"),
footer_content=document.querySelector("main .footer_main"),
control=document.querySelector("main .control"),
container_imgs=document.querySelector("section.new .container"),
header_About_us=document.querySelector("section.About_us .container  h2.head"),
text_content_About_us=document.querySelectorAll("section.About_us .container  .box .text_content"),
header_Products_in_today=document.querySelector("section.Products_in_today .container  h2.head"),
imgs_Products_in_today=document.querySelectorAll("section.Products_in_today .container  .child");
//******************************OFFSETS ****************************** */
let offset_header_About_us=header_About_us.offsetTop,
offset_header_Products_in_today=header_Products_in_today.offsetTop


window.addEventListener("load" , _=>{
  header.classList.add("animate__zoomInDown")
  firstImg.classList.add("animate__zoomInRight")
  main_content.classList.add("animate__zoomInUp")
  footer_content.classList.add("animate__lightSpeedInLeft")
  control.classList.add("animate__lightSpeedInRight")

})
document.addEventListener("scroll",_=>{
  // THIS FOR NEW AS SECTION 
  for (const iterator of container_imgs.children) {
    let offset = iterator.offsetTop;
    if (scrollY >= offset +500) {
      iterator.classList.add("animate__bounceInRight");
      iterator.style.opacity = "1";
    }
  }


// THIS FOR ABOUT AS SECTION 
   if(scrollY >=offset_header_About_us - 300 ){
    header_About_us.classList.add("animate__zoomIn")
    header_About_us.style.opacity = "1";
   

   for (const iterator of icons_About_us) {
    iterator.classList.add("animate__backInDown");
    iterator.style.opacity = "1";
    }
   for (const iterator of text_content_About_us) {
    iterator.classList.add("animate__backInUp");
    iterator.style.opacity = "1";
    }

  }

  // THIS FOR PRODUCT IN TODAY 
  if(scrollY >=offset_header_Products_in_today - 300 ){
    header_Products_in_today.classList.add("animate__zoomIn")
    header_Products_in_today.style.opacity = "1";
  }

    for (const key in imgs_Products_in_today) {
      let offset=imgs_Products_in_today[key].offsetTop
      if(scrollY >= offset - 300 ){
      if(key % 2==0 ){
          imgs_Products_in_today[key].classList.add("animate__backInLeft")
          imgs_Products_in_today[key].style.opacity = "1";

        }
        
        else{
          imgs_Products_in_today[key].classList.add("animate__backInRight")
          imgs_Products_in_today[key].style.opacity = "1";

        }}
      }
    }
)

